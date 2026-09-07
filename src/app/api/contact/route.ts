import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const limits = { name: 100, phone: 50, email: 255, company: 255, service: 255, message: 10000 } as const

export async function POST(request: Request) {
  let body: unknown
  try { body = await request.json() } catch {
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
  let delivered = false
  const user = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL
  const pass = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY
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

  if (user && pass) {
    const port = Number(process.env.SMTP_PORT || '465')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.exmail.qq.com', port, secure: port === 465,
      auth: { user, pass }, connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 10000,
    })
    try {
      const result = await transporter.sendMail({
        from: user, to: 'info@marvelbros.com', ...(email ? { replyTo: email } : {}),
        subject: `【迈创兄弟C&T官网新咨询】${service.replace(/[\r\n]/g, ' ')} - ${name.replace(/[\r\n]/g, ' ')}`,
        text: [`姓名：${name}`, `电话/微信：${phone}`, `邮箱：${email}`, `酒店/公司：${company}`, `咨询类型：${service}`, '', message].join('\n'),
      })
      delivered = result.accepted?.some((recipient: string | { address: string }) =>
        (typeof recipient === 'string' ? recipient : recipient.address).toLowerCase() === 'info@marvelbros.com') === true
    } catch {
      console.error('Contact email delivery unavailable')
    } finally {
      transporter.close()
    }
  }

  if (inquiryId) {
    try {
      const emailStatus = delivered ? 'sent' : user && pass ? 'failed' : 'skipped'
      await sql`UPDATE contact_inquiries SET email_status = ${emailStatus} WHERE id = ${inquiryId}`
    } catch {
      console.error('Contact notification status update unavailable')
    }
  }
  if (!inquiryId && !delivered) {
    return NextResponse.json({ success: false, error: 'Contact service temporarily unavailable' }, { status: 503 })
  }
  return NextResponse.json({ success: true, saved: Boolean(inquiryId), delivered, receipt: inquiryId })
}
