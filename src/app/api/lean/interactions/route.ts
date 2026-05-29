import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const hasDatabaseUrl = Boolean(process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING);

function getIpHash(request: Request): string {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
}

async function ensureInteractionTables() {
  if (!hasDatabaseUrl) return;

  await sql`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title TEXT,
      category VARCHAR(100),
      views INTEGER DEFAULT 0,
      likes INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      article_slug VARCHAR(255) NOT NULL,
      nickname VARCHAR(100) DEFAULT '匿名用户',
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS like_records (
      id SERIAL PRIMARY KEY,
      article_slug VARCHAR(255) NOT NULL,
      ip_hash VARCHAR(64) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(article_slug, ip_hash)
    )
  `;
}

async function ensureArticle(slug: string) {
  let article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
  if (article.rows.length === 0) {
    await sql`INSERT INTO articles (slug, title, category, views, likes) VALUES (${slug}, ${slug}, 'unknown', 0, 0) ON CONFLICT (slug) DO NOTHING`;
    article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
  }
  return article;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    if (!hasDatabaseUrl) {
      return NextResponse.json({
        views: 0,
        likes: 0,
        comments: [],
        hasLiked: false,
        warning: 'Database is not configured',
      });
    }

    await ensureInteractionTables();
    let article = await ensureArticle(slug);
    await sql`UPDATE articles SET views = views + 1 WHERE slug = ${slug}`;
    article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;

    const comments = await sql`SELECT * FROM comments WHERE article_slug = ${slug} ORDER BY created_at DESC`;
    const ipHash = getIpHash(request);
    const likeRecord = await sql`SELECT * FROM like_records WHERE article_slug = ${slug} AND ip_hash = ${ipHash}`;

    return NextResponse.json({
      views: article.rows[0]?.views || 0,
      likes: article.rows[0]?.likes || 0,
      comments: comments.rows,
      hasLiked: likeRecord.rows.length > 0,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { slug, action } = await request.json();

    if (!slug || action !== 'like') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (!hasDatabaseUrl) {
      return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
    }

    await ensureInteractionTables();
    await ensureArticle(slug);
    const ipHash = getIpHash(request);
    const existing = await sql`SELECT * FROM like_records WHERE article_slug = ${slug} AND ip_hash = ${ipHash}`;

    if (existing.rows.length > 0) {
      return NextResponse.json({ error: 'Already liked' }, { status: 400 });
    }

    await sql`INSERT INTO like_records (article_slug, ip_hash) VALUES (${slug}, ${ipHash})`;
    await sql`UPDATE articles SET likes = likes + 1 WHERE slug = ${slug}`;
    const updated = await sql`SELECT * FROM articles WHERE slug = ${slug}`;

    return NextResponse.json({
      likes: updated.rows[0]?.likes || 0,
      hasLiked: true,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
