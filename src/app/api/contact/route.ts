import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  phone?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

function getMailerConfig() {
  const pass = process.env.SMTP_PASSWORD || process.env.TENCENT_SECRET_KEY
  const user = process.env.SMTP_USER || process.env.TENCENT_SECRET_EMAIL
  const host = process.env.SMTP_HOST || 'smtp.exmail.qq.com'
  const port = parseInt(process.env.SMTP_PORT || '465', 10)

  if (!user || !pass) {
    return null
  }

  return { user, pass, host, port }
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

    const mailerConfig = getMailerConfig()
    if (!mailerConfig) {
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: mailerConfig.host,
      port: mailerConfig.port,
      secure: true,
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

    await transporter.sendMail({
      from: mailerConfig.user,
      to: 'info@marvelbros.com',
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
