import { NextResponse, after } from 'next/server'
import { sql } from '@vercel/postgres'
import nodemailer from 'nodemailer'
import { brandEmails } from '@/lib/brand'

export const runtime = 'nodejs'

const limits = { name: 100, phone: 50, email: 255, company: 255, service: 255, message: 10000 } as const
const notifyTo = [...brandEmails]

async function markInquiryEmailStatus(inquiryId: number | null, emailStatus: string, emailError: string | null = null) {
  if (!inquiryId) return
  if (!(process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING)) return
  try {
    await sql`UPDATE contact_inquiries
      SET email_status = ${emailStatus}, email_error = ${emailError}
      WHERE id = ${inquiryId}`
  } catch {
    console.error('Contact notification status update unavailable')
  }
}

async function deliverContactEmail(fields: {
  name: string
  phone: string
  email: string
  company: string
  service: string
  message: string
}, inquiryId: number | null) {
  const user = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL
  const pass = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY
  if (!user || !pass) {
    await markInquiryEmailStatus(inquiryId, 'skipped')
    return false
  }

  const port = Number(process.env.SMTP_PORT || '465')
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.exmail.qq.com',
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 12000,
  })

  try {
    const result = await transporter.sendMail({
      from: `"迈创兄弟C&T官网" <${user}>`,
      to: notifyTo.join(', '),
      ...(fields.email ? { replyTo: fields.email } : {}),
      subject: `【迈创兄弟C&T官网新咨询】${fields.service.replace(/[\r\n]/g, ' ')} - ${fields.name.replace(/[\r\n]/g, ' ')}`,
      text: [
        `咨询编号：${inquiryId ?? '未入库'}`,
        `姓名：${fields.name}`,
        `电话/微信：${fields.phone}`,
        `邮箱：${fields.email || '未填写'}`,
        `酒店/公司：${fields.company || '未填写'}`,
        `咨询类型：${fields.service}`,
        `通知邮箱：${notifyTo.join(' / ')}`,
        '',
        fields.message,
      ].join('\n'),
    })

    const accepted = new Set(
      (result.accepted || []).map((recipient: string | { address: string }) =>
        (typeof recipient === 'string' ? recipient : recipient.address).toLowerCase()
      )
    )
    const delivered = notifyTo.some((address) => accepted.has(address.toLowerCase()))
      || (result.accepted?.length ?? 0) > 0

    await markInquiryEmailStatus(inquiryId, delivered ? 'sent' : 'failed', delivered ? null : 'No accepted recipients')
    return delivered
  } catch (error) {
    const message = error instanceof Error ? error.message.slice(0, 500) : 'send failed'
    console.error('Contact email delivery unavailable', message)
    await markInquiryEmailStatus(inquiryId, 'failed', message)
    return false
  } finally {
    transporter.close()
  }
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const payload = body as Record<string, unknown>
  const fields: Record<string, string> = {}
  for (const [key, limit] of Object.entries(limits)) {
    const value = payload[key]
    if (value !== undefined && (typeof value !== 'string' || value.length > limit)) {
      return NextResponse.json({ error: 'Invalid field' }, { status: 400 })
    }
    fields[key] = typeof value === 'string' ? value.trim() : ''
  }

  const { name, phone, email, company, service, message } = fields
  if (!name || !phone || !service || !message || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  let inquiryId: number | null = null
  if (process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING) {
    try {
      await sql`CREATE TABLE IF NOT EXISTS contact_inquiries (
        id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL, company VARCHAR(255), service VARCHAR(255) NOT NULL,
        message TEXT NOT NULL, email_status VARCHAR(20) DEFAULT 'pending',
        email_error TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`
      const inserted = await sql`INSERT INTO contact_inquiries (name, phone, email, company, service, message, email_status)
        VALUES (${name}, ${phone}, ${email}, ${company || null}, ${service}, ${message}, 'pending') RETURNING id`
      inquiryId = inserted.rows[0]?.id ?? null
    } catch {
      console.error('Contact storage unavailable')
    }
  }

  const smtpConfigured = Boolean(
    (process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL)
    && (process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY)
  )

  // Fast path: persist first, then deliver mail after the response so the visitor is not blocked by SMTP latency.
  if (inquiryId && smtpConfigured) {
    after(() => deliverContactEmail({ name, phone, email, company, service, message }, inquiryId))
    return NextResponse.json({
      success: true,
      saved: true,
      delivered: true,
      queued: true,
      receipt: inquiryId,
      notifyTo,
    })
  }

  if (inquiryId && !smtpConfigured) {
    await markInquiryEmailStatus(inquiryId, 'skipped')
    return NextResponse.json({
      success: true,
      saved: true,
      delivered: false,
      queued: false,
      receipt: inquiryId,
      notifyTo,
    })
  }

  // Fallback when storage is unavailable: send synchronously so the lead is not lost.
  const delivered = await deliverContactEmail({ name, phone, email, company, service, message }, null)
  if (!delivered) {
    return NextResponse.json({ success: false, error: 'Contact service temporarily unavailable' }, { status: 503 })
  }
  return NextResponse.json({
    success: true,
    saved: false,
    delivered: true,
    queued: false,
    receipt: null,
    notifyTo,
  })
}
