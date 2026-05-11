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

// Email notification helper - 腾讯云 SES
async function sendEmailNotification(question: any) {
  try {
    const tencentSecretId = process.env.TENCENT_SECRET_ID;
    const tencentSecretKey = process.env.TENCENT_SECRET_KEY;
    const tencentRegion = process.env.TENCENT_REGION || 'ap-guangzhou';

    const subject = `【管享精道新提问】${question.title || '新提问'}`;
    const textBody = `管享精道收到新提问：\n\n标题：${question.title || '无标题'}\n详情：${question.detail || '无详情'}\n分类：${question.pillar || '未分类'}\n浪费类型：${Array.isArray(question.waste_types) ? question.waste_types.join(', ') : (question.waste_types || '未指定')}\n昵称：${question.nickname || '匿名'}\n酒店：${question.hotel_name || '未填写'}\n时间：${question.created_at || new Date().toISOString()}\n\n请登录后台查看完整信息并安排回复。`;
    const htmlBody = `<h2>管享精道收到新提问</h2><p><strong>标题：</strong>${question.title || '无标题'}</p><p><strong>详情：</strong>${question.detail || '无详情'}</p><p><strong>分类：</strong>${question.pillar || '未分类'}</p><p><strong>浪费类型：</strong>${Array.isArray(question.waste_types) ? question.waste_types.join(', ') : (question.waste_types || '未指定')}</p><p><strong>昵称：</strong>${question.nickname || '匿名'}</p><p><strong>酒店：</strong>${question.hotel_name || '未填写'}</p><p><strong>时间：</strong>${question.created_at || new Date().toISOString()}</p><p>请登录后台查看完整信息并安排回复。</p>`;

    if (tencentSecretId && tencentSecretKey) {
      // 腾讯云 SES API v2
      const timestamp = Math.floor(Date.now() / 1000);
      const date = new Date().toISOString().split('T')[0];
      const service = 'ses';
      const host = `${service}.tencentcloudapi.com`;
      const action = 'SendEmail';
      const version = '2020-10-02';

      const payload = {
        FromEmailAddress: 'questions@marvelbros.com',
        Destination: ['info@marvelbros.com'],
        Subject: subject,
        Html: { Content: htmlBody },
        Text: { Content: textBody },
      };

      const payloadJson = JSON.stringify(payload);
      const crypto = require('crypto');
      const payloadHash = crypto.createHash('sha256').update(payloadJson).digest('hex');

      const canonicalHeaders = `content-type:application/json\nhost:${host}\nx-tc-action:${action}\nx-tc-version:${version}\nx-tc-timestamp:${timestamp}\n`;
      const signedHeaders = 'content-type;host;x-tc-action;x-tc-version;x-tc-timestamp';
      const canonicalRequest = `POST\n/\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

      const credentialScope = `${date}/${service}/tc3_request`;
      const stringToSign = `TC3-HMAC-SHA256\n${timestamp}\n${credentialScope}\n${crypto.createHash('sha256').update(canonicalRequest).digest('hex')}`;

      const secretDate = crypto.createHmac('sha256', `TC3${tencentSecretKey}`).update(date).digest();
      const secretService = crypto.createHmac('sha256', secretDate).update(service).digest();
      const secretSigning = crypto.createHmac('sha256', secretService).update('tc3_request').digest();
      const signature = crypto.createHmac('sha256', secretSigning).update(stringToSign).digest('hex');

      const authorization = `TC3-HMAC-SHA256 Credential=${tencentSecretId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

      const response = await fetch(`https://${host}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Host': host,
          'X-TC-Action': action,
          'X-TC-Version': version,
          'X-TC-Timestamp': timestamp.toString(),
          'X-TC-Region': tencentRegion,
          'Authorization': authorization,
        },
        body: payloadJson,
      });

      const result = await response.json();
      if (result.Response?.Error) {
        console.error('Tencent SES Error:', result.Response.Error);
      } else {
        console.log('[EMAIL_SENT] 腾讯云邮件发送成功');
      }
    } else {
      console.log('[EMAIL_NOTIFICATION] 腾讯云SES未配置，邮件内容：', { subject, textBody });
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
