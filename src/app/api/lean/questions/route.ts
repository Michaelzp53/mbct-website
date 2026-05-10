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

// POST: 提交提问
export async function POST(request: Request) {
  try {
    const { title, detail, pillar, wasteTypes, nickname, hotelName } = await request.json();
    
    if (!title || !title.trim() || !detail || !detail.trim()) {
      return NextResponse.json({ error: 'Title and detail are required' }, { status: 400 });
    }

    const ipHash = getIpHash(request);

    // 插入问题
    const result = await sql`
      INSERT INTO questions (title, detail, pillar, waste_types, nickname, hotel_name, ip_hash) 
      VALUES (${title.trim()}, ${detail.trim()}, ${pillar || ''}, ${wasteTypes || []}, ${nickname || null}, ${hotelName || null}, ${ipHash})
      RETURNING *
    `;

    return NextResponse.json({
      question: result.rows[0],
      success: true,
    });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// GET: 获取问题列表
export async function GET() {
  try {
    const questions = await sql`SELECT * FROM questions ORDER BY created_at DESC LIMIT 50`;
    return NextResponse.json({ questions: questions.rows });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
