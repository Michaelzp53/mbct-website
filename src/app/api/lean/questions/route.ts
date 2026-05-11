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

// Email notification helper
async function sendEmailNotification(question: any) {
  try {
    const emailData = {
      to: 'info@marvelbros.com',
      subject: `【管享精道新提问】${question.title || '新提问'}`,
      text: `管享精道收到新提问：

标题：${question.title || '无标题'}
详情：${question.detail || '无详情'}
分类：${question.pillar || '未分类'}
浪费类型：${Array.isArray(question.waste_types) ? question.waste_types.join(', ') : (question.waste_types || '未指定')}
昵称：${question.nickname || '匿名'}
酒店：${question.hotel_name || '未填写'}
时间：${question.created_at || new Date().toISOString()}

请登录后台查看完整信息并安排回复。`,
      html: `<h2>管享精道收到新提问</h2>
<p><strong>标题：</strong>${question.title || '无标题'}</p>
<p><strong>详情：</strong>${question.detail || '无详情'}</p>
<p><strong>分类：</strong>${question.pillar || '未分类'}</p>
<p><strong>浪费类型：</strong>${Array.isArray(question.waste_types) ? question.waste_types.join(', ') : (question.waste_types || '未指定')}</p>
<p><strong>昵称：</strong>${question.nickname || '匿名'}</p>
<p><strong>酒店：</strong>${question.hotel_name || '未填写'}</p>
<p><strong>时间：</strong>${question.created_at || new Date().toISOString()}</p>
<p>请登录后台查看完整信息并安排回复。</p>`,
    };

    // Try to send via Vercel's built-in email or external service
    // Using a simple fetch to a webhook or email service
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: '管享精道 <questions@marvelbros.com>',
          to: ['info@marvelbros.com'],
          subject: emailData.subject,
          text: emailData.text,
          html: emailData.html,
        }),
      });
    } else {
      // Log for now if no email service configured
      console.log('[EMAIL_NOTIFICATION]', emailData);
    }
  } catch (err) {
    console.error('Email notification failed:', err);
  }
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

    const question = result.rows[0];

    // Send email notification
    await sendEmailNotification(question);

    return NextResponse.json({
      question: question,
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
