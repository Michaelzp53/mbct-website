import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

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

// GET: 获取文章互动数据（views, likes, comments）
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    // 获取或创建文章记录
    let article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
    
    if (article.rows.length === 0) {
      // 创建新文章记录
      await sql`INSERT INTO articles (slug, title, category, views, likes) VALUES (${slug}, ${slug}, 'unknown', 0, 0)`;
      article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
    }

    // 增加阅读量
    await sql`UPDATE articles SET views = views + 1 WHERE slug = ${slug}`;

    // 获取评论
    const comments = await sql`SELECT * FROM comments WHERE article_slug = ${slug} ORDER BY created_at DESC`;

    // 检查当前IP是否已点赞
    const ipHash = getIpHash(request);
    const likeRecord = await sql`SELECT * FROM like_records WHERE article_slug = ${slug} AND ip_hash = ${ipHash}`;

    return NextResponse.json({
      views: article.rows[0].views + 1,
      likes: article.rows[0].likes,
      comments: comments.rows,
      hasLiked: likeRecord.rows.length > 0,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// POST: 点赞
export async function POST(request: Request) {
  try {
    const { slug, action } = await request.json();
    
    if (!slug || action !== 'like') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const ipHash = getIpHash(request);

    // 检查是否已点赞
    const existing = await sql`SELECT * FROM like_records WHERE article_slug = ${slug} AND ip_hash = ${ipHash}`;
    
    if (existing.rows.length > 0) {
      return NextResponse.json({ error: 'Already liked' }, { status: 400 });
    }

    // 添加点赞记录
    await sql`INSERT INTO like_records (article_slug, ip_hash) VALUES (${slug}, ${ipHash})`;
    
    // 增加点赞数
    await sql`UPDATE articles SET likes = likes + 1 WHERE slug = ${slug}`;

    const article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;

    return NextResponse.json({
      likes: article.rows[0].likes,
      hasLiked: true,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}