import { NextResponse } from 'next/server';
import { addQuestion, getQuestions } from './store';

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

// Email notification helper - 使用 SMTP 发送
async function sendEmailNotification(question: any) {
  try {
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY;
    const smtpUser = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL;
    const smtpHost = process.env.SMTP_HOST || 'smtp.exmail.qq.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    if (!smtpPassword || !smtpUser) {
      console.log('[EMAIL] SMTP credentials not configured');
      return;
    }
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });
    const subject = `【管享精道新提问】${question.title || '新提问'}`;
    const textBody = `管享精道收到新提问：\n\n标题：${question.title || '无标题'}\n详情：${question.detail || '无详情'}\n分类：${question.pillar || '未分类'}\n浪费类型：${Array.isArray(question.waste_types) ? question.waste_types.join(', ') : (question.waste_types || '未指定')}\n昵称：${question.nickname || '匿名'}\n酒店：${question.hotel_name || '未填写'}\n时间：${question.created_at || new Date().toISOString()}\n\n请登录后台查看完整信息并安排回复。`;
    await transporter.sendMail({
      from: smtpUser,
      to: 'info@marvelbros.com',
      subject,
      text: textBody,
    });
    console.log('[EMAIL] Sent notification for question', question.id);
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

    const question = addQuestion({
      title: title.trim(),
      detail: detail.trim(),
      pillar: pillar || '',
      waste_types: wasteTypes || [],
      nickname: nickname || null,
      hotel_name: hotelName || null,
      ip_hash: ipHash,
    });

    // Send email notification
    await sendEmailNotification(question);

    return NextResponse.json({
      question: question,
      success: true,
    });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error', detail: String(error) }, { status: 500 });
  }
}

// GET: 获取问题列表
export async function GET() {
  try {
    const questions = getQuestions();
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
