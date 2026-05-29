import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const hasDatabaseUrl = Boolean(process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING);

async function ensureCommentTables() {
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
}

export async function POST(request: Request) {
  try {
    const { slug, nickname, content } = await request.json();

    if (!slug || !content || !content.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!hasDatabaseUrl) {
      return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
    }

    await ensureCommentTables();

    let article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
    if (article.rows.length === 0) {
      await sql`INSERT INTO articles (slug, title, category, views, likes) VALUES (${slug}, ${slug}, 'unknown', 0, 0) ON CONFLICT (slug) DO NOTHING`;
    }

    const result = await sql`
      INSERT INTO comments (article_slug, nickname, content)
      VALUES (${slug}, ${nickname || '匿名用户'}, ${content.trim()})
      RETURNING *
    `;

    return NextResponse.json({
      comment: result.rows[0],
      success: true,
    });
  } catch (error) {
    console.error('Comment API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
