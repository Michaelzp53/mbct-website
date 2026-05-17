import { NextResponse } from 'next/server';
import { updateQuestionStatus } from '../store';
import { sql } from '@vercel/postgres';

// PATCH: 更新提问状态
export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }

    // 验证状态值
    const validStatuses = ['positive', 'negative', 'converted', 'pending'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }, { status: 400 });
    }

    const question = await updateQuestionStatus(Number(id), status);

    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json({
      question: question,
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

    await sql`DELETE FROM questions WHERE id = ${Number(id)}`;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Question delete error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
