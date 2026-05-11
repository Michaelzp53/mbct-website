import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// PATCH: 更新提问状态
export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }

    // 验证状态值
    const validStatuses = ['positive', 'negative', 'answered', 'pending'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }, { status: 400 });
    }

    // 更新状态
    const result = await sql`
      UPDATE questions 
      SET status = ${status}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json({
      question: result.rows[0],
      success: true,
    });
  } catch (error) {
    console.error('Question status update error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// DELETE: 删除提问
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    await sql`DELETE FROM questions WHERE id = ${id}`;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Question delete error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
