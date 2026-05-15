import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// POST: 提交评论
export async function POST(request: Request) {
  try {
    const { slug, nickname, content } = await request.json();
    
    if (!slug || !content || !content.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 确保文章记录存在，若不存在则创建默认记录
    let article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
    if (article.rows.length === 0) {
      await sql`INSERT INTO articles (slug, title, category, views, likes) VALUES (${slug}, ${slug}, 'unknown', 0, 0)`;
      article = await sql`SELECT * FROM articles WHERE slug = ${slug}`;
    }

    // 插入评论
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
