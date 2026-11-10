'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Loader2 } from 'lucide-react'
import type { Dict } from '@/lib/dicts'
import { trackEvent } from '@/lib/analytics'
import { brandEmails } from '@/lib/brand'

function resolveDefaultService(contactType: string, services: string[], zh: boolean) {
  const type = contactType.toLowerCase()
  const pick = (...candidates: string[]) => services.find((service) => candidates.some((item) => service.includes(item))) || ''

  if (type.startsWith('ai-') || type.includes('ai')) {
    return pick('AI 信息平台', 'AI信息平台', 'AI Information') || (zh ? '酒店 AI 信息平台建设与内容托管' : services[1] || '')
  }
  if (type === 'diagnosis' || type === 'ops' || type === 'operation') {
    return pick('经营诊断', '诊断与改善', 'Operational diagnosis', 'Operating diagnosis') || services[0] || ''
  }
  if (type === 'plan' || type === 'investment' || type === 'feasibility') {
    return pick('可行性', 'Feasibility') || ''
  }
  if (type === 'opening' || type === 'pre-opening') {
    return pick('筹开', 'Pre-opening', '筹建') || ''
  }
  return ''
}

export function ContactForm({ dict, lang, contactType = 'general', article = '' }: { dict: Dict; lang: string; contactType?: string; article?: string }) {
  const zh = lang === 'zh'
  const type = contactType
  const submitting = useRef(false)
  const defaultService = useMemo(() => resolveDefaultService(type, dict.contact.services, zh), [type, dict.contact.services, zh])
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectStage: '',
    message: '',
    email: '',
    company: '',
    service: defaultService,
    location: '',
  })
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [delivered, setDelivered] = useState(false)
  const [queued, setQueued] = useState(false)
  const [receipt, setReceipt] = useState<number | null>(null)
  const inputClass = 'mt-2 w-full rounded-lg border border-input bg-background px-3 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40'
  const update = (key: keyof typeof form, value: string) => setForm(current => ({ ...current, [key]: value }))
  const emailFallback = (
    <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
      {brandEmails.map((address) => (
        <a key={address} className="underline" href={`mailto:${address}`}>{address}</a>
      ))}
    </span>
  )

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!privacy || submitting.current) return
    submitting.current = true
    setStatus('loading')
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...form,
          service: form.service || (type.startsWith('ai-') ? (zh ? 'AI信息平台咨询' : 'AI information platform') : (zh ? '酒店经营交流' : 'Hotel advisory conversation')),
          message: [
            `${zh ? '项目阶段' : 'Project stage'}: ${form.projectStage}`,
            form.location ? `${zh ? '酒店所在地' : 'Hotel location'}: ${form.location}` : '',
            article ? `Article reference: ${article.slice(0, 250)}` : '',
            `Contact type: ${type}`,
            form.message,
          ].filter(Boolean).join('\n'),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success || (!result.saved && !result.delivered)) throw new Error('Not received')
      setDelivered(result.delivered === true)
      setQueued(result.queued === true)
      setReceipt(result.receipt || null)
      setStatus('success')
      trackEvent('contact_form_submit_success', {
        contact_type: type,
        from_article: article || undefined,
        receipt_status: result.queued ? 'mail_queued' : (result.delivered ? 'mail_accepted' : 'saved'),
      })
    } catch {
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
      submitting.current = false
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
      {status === 'success' ? (
        <div role="status" className="py-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
          <h3 className="text-xl font-semibold">{zh ? '您的问题已收到' : 'Your enquiry has been received'}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{
            delivered || queued
              ? (zh
                ? '咨询已进入我们的联系邮箱（info@ 与 contactme@）。我们会结合您提供的背景与您交流。'
                : 'Your enquiry has been sent to our contact mailboxes (info@ and contactme@). We will follow up using the context you provided.')
              : (zh
                ? '咨询已保存，但邮件提醒暂未确认送达。如需及时联系，请直接发邮件或致电。'
                : 'Your enquiry was saved, but email delivery is not yet confirmed. For a faster reply, email or call us directly.')
          }</p>
          {receipt && <p className="mt-2 text-sm">{zh ? '咨询编号' : 'Reference'}: {receipt}</p>}
          <div className="mt-4 text-sm text-primary">{emailFallback}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <p className="text-sm leading-7 text-muted-foreground">{zh ? '先填写四项信息，帮助我们理解您的问题。更详细的项目资料可以稍后交流。' : 'Start with four details so we can understand your question. Further project information can follow later.'}</p>
          {article && <p className="rounded-lg bg-primary/5 p-3 text-sm">{zh ? '本次咨询将附上您刚才阅读的文章或提问入口。' : 'The article or question entry point will be included with this enquiry.'}</p>}
          {status === 'error' && <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm leading-7">
            {zh ? '暂时无法确认提交成功。您的填写内容仍保留在此，请稍后重试，或直接发邮件至 ' : 'We could not confirm receipt. Your details are still here. Retry later or email '}
            {emailFallback}
          </div>}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">{zh ? '您的称呼 *' : 'Your name *'}
              <input required autoComplete="name" maxLength={100} value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">{zh ? '电话或微信 *' : 'Phone or WeChat *'}
              <input required autoComplete="tel" maxLength={50} value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} />
            </label>
          </div>
          <label className="block text-sm font-medium">{zh ? '项目阶段 *' : 'Project stage *'}
            <select required value={form.projectStage} onChange={e => update('projectStage', e.target.value)} className={inputClass}>
              <option value="">{zh ? '请选择' : 'Select one'}</option>
              {(zh ? ['投前评估', '定位与设计', '筹建筹开', '在营改善', '改造与重塑', '学习与研究'] : ['Pre-investment', 'Positioning and design', 'Pre-opening', 'Operating improvement', 'Renovation', 'Learning and research']).map(stage => <option key={stage}>{stage}</option>)}
            </select>
          </label>
          <label className="block text-sm font-medium">{zh ? '目前最想解决的问题 *' : 'What would you most like to resolve? *'}
            <textarea required rows={4} maxLength={8000} value={form.message} onChange={e => update('message', e.target.value)} placeholder={zh ? '例如：入住率提高了，但利润没有改善，应当从哪里开始检查？' : 'For example: occupancy improved but profit did not. Where should we start investigating?'} className={inputClass} />
          </label>
          <details className="rounded-lg border border-border p-4" open={Boolean(defaultService)}>
            <summary className="cursor-pointer text-sm font-medium">{zh ? '补充项目资料（选填）' : 'Add project details (optional)'}</summary>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">{zh ? '联系邮箱' : 'Email'}<input type="email" autoComplete="email" maxLength={255} value={form.email} onChange={e => update('email', e.target.value)} className={inputClass} /></label>
              <label className="text-sm">{zh ? '酒店或公司名称' : 'Hotel or company'}<input maxLength={255} value={form.company} onChange={e => update('company', e.target.value)} className={inputClass} /></label>
              <label className="text-sm">{zh ? '酒店所在地' : 'Hotel location'}<input maxLength={100} value={form.location} onChange={e => update('location', e.target.value)} className={inputClass} /></label>
              <label className="text-sm">{dict.contact.form.service}<select value={form.service} onChange={e => update('service', e.target.value)} className={inputClass}><option value="">{zh ? '暂不确定' : 'Not sure yet'}</option>{dict.contact.services.map(service => <option key={service}>{service}</option>)}</select></label>
            </div>
          </details>
          <div className="flex items-start gap-3 text-sm leading-6">
            <input id="contact-privacy" required type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)} className="mt-1 h-4 w-4 accent-amber-500" />
            <label htmlFor="contact-privacy">{dict.contact.form.privacy} <Link className="text-primary underline" href={`/${lang}/privacy`}>{zh ? '查看隐私政策' : 'Privacy policy'}</Link></label>
          </div>
          <button type="submit" disabled={!privacy || status === 'loading'} className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-amber-400 disabled:opacity-50">
            {status === 'loading' && <Loader2 className="h-5 w-5 animate-spin" />}
            {status === 'loading' ? dict.contact.form.submitting : (zh ? '提交问题' : 'Send enquiry')}
          </button>
        </form>
      )}
    </div>
  )
}
