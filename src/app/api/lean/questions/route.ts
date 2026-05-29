import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addQuestion, getQuestions, updateQuestionNotification } from './store';

type LeanQuestion = {
  id: number;
  title: string;
  detail: string;
  pillar: string;
  waste_types: string[] | string | null;
  nickname: string | null;
  hotel_name: string | null;
  created_at?: string;
};

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

async function sendEmailNotification(question: LeanQuestion) {
  const notificationTarget = 'info@marvelbros.com';
  try {
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY;
    const smtpUser = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL;
    const smtpHost = process.env.SMTP_HOST || 'smtp.exmail.qq.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const secure = smtpPort === 465;

    if (!smtpPassword || !smtpUser) {
      const message = 'SMTP credentials not configured';
      await updateQuestionNotification(question.id, {
        emailStatus: 'skipped',
        emailError: message,
        notificationTarget,
      });
      return { ok: false, reason: message, notificationTarget };
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const wasteText = Array.isArray(question.waste_types)
      ? question.waste_types.join(', ')
      : (question.waste_types || '未指定');

    const subject = `【管享精道新提问】${question.title || '新提问'}`;
    const textBody = `管享精道收到新提问：

标题：${question.title || '无标题'}
详情：${question.detail || '无详情'}
分类：${question.pillar || '未分类'}
浪费类型：${wasteText}
昵称：${question.nickname || '匿名'}
酒店：${question.hotel_name || '未填写'}
时间：${question.created_at || new Date().toISOString()}

请登录后台查看完整信息并安排回复。`;

    await transporter.sendMail({
      from: smtpUser,
      to: notificationTarget,
      subject,
      text: textBody,
    });

    await updateQuestionNotification(question.id, {
      emailStatus: 'sent',
      emailError: null,
      notificationTarget,
    });
    return { ok: true, notificationTarget };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    await updateQuestionNotification(question.id, {
      emailStatus: 'failed',
      emailError: reason,
      notificationTarget,
    });
    return { ok: false, reason, notificationTarget };
  }
}

export async function POST(request: Request) {
  try {
    const { title, detail, pillar, wasteTypes, nickname, hotelName } = await request.json();

    if (!title || !title.trim() || !detail || !detail.trim()) {
      return NextResponse.json({ error: 'Title and detail are required' }, { status: 400 });
    }

    const ipHash = getIpHash(request);
    const question = await addQuestion({
      title: title.trim(),
      detail: detail.trim(),
      pillar: pillar || '',
      waste_types: wasteTypes || [],
      nickname: nickname || null,
      hotel_name: hotelName || null,
      ip_hash: ipHash,
    });

    const notification = await sendEmailNotification(question);

    return NextResponse.json({
      question,
      notification,
      success: true,
    });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error', detail: String(error) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const questions = await getQuestions();
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Question API Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
