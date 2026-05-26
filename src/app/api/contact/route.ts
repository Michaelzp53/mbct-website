import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  phone?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

const hasDatabaseUrl = Boolean(process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING)

function getMailerConfig() {
  const pass = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY
  const user = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL
  const host = process.env.SMTP_HOST || 'smtp.exmail.qq.com'
  const port = parseInt(process.env.SMTP_PORT || '465', 10)
  const secure = port === 465

  if (!user || !pass) {
    return null
  }

  return { user, pass, host, port, secure }
}

async function ensureContactTable() {
  if (!hasDatabaseUrl) return

  await sql`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      email_status VARCHAR(20) DEFAULT 'pending',
      email_error TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactPayload
    const name = body.name?.trim() || ''
    const phone = body.phone?.trim() || ''
    const email = body.email?.trim() || ''
    const company = body.company?.trim() || ''
    const service = body.service?.trim() || ''
    const message = body.message?.trim() || ''

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let inquiryId: number | null = null

    if (hasDatabaseUrl) {
      await ensureContactTable()
      const inserted = await sql`
        INSERT INTO contact_inquiries (name, phone, email, company, service, message, email_status)
        VALUES (${name}, ${phone}, ${email}, ${company || null}, ${service}, ${message}, 'pending')
        RETURNING id
      `
      inquiryId = inserted.rows[0]?.id ?? null
    }

    const mailerConfig = getMailerConfig()
    if (!mailerConfig) {
      if (inquiryId) {
        await sql`
          UPDATE contact_inquiries
          SET email_status = 'skipped', email_error = 'Email service is not configured'
          WHERE id = ${inquiryId}
        `
      }

      return NextResponse.json({ success: true, saved: Boolean(inquiryId), warning: 'Email service is not configured' })
    }

    const transporter = nodemailer.createTransport({
      host: mailerConfig.host,
      port: mailerConfig.port,
      secure: mailerConfig.secure,
      auth: {
        user: mailerConfig.user,
        pass: mailerConfig.pass,
      },
    })

    const subject = `【MBCT官网新咨询】${service} - ${name}`
    const text = [
      'MBCT 官网收到新的咨询表单：',
      '',
      `姓名：${name}`,
      `电话：${phone}`,
      `邮箱：${email}`,
      `酒店名称：${company || '未填写'}`,
      `咨询类型：${service}`,
      '',
      '留言内容：',
      message,
    ].join('\n')

    try {
      await transporter.sendMail({
        from: mailerConfig.user,
        to: 'info@marvelbros.com',
        replyTo: email,
        subject,
        text,
      })

      if (inquiryId) {
        await sql`
          UPDATE contact_inquiries
          SET email_status = 'sent', email_error = null
          WHERE id = ${inquiryId}
        `
      }
    } catch (mailError) {
      const detail = mailError instanceof Error ? mailError.message : 'Email delivery failed'

      if (inquiryId) {
        await sql`
          UPDATE contact_inquiries
          SET email_status = 'failed', email_error = ${detail}
          WHERE id = ${inquiryId}
        `
      } else {
        throw mailError
      }
    }

    return NextResponse.json({ success: true, saved: Boolean(inquiryId) })
  } catch (error) {
    console.error('Contact API Error:', error)
    const message = error instanceof Error ? error.message : 'Internal error'
    return NextResponse.json({ error: 'Internal error', detail: message }, { status: 500 })
  }
}
