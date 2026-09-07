'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import type { Dict } from '@/lib/dicts'
import { trackEvent } from '@/lib/analytics'

export function ContactForm({ dict, lang }: { dict: Dict; lang: string }) {
  const zh = lang === 'zh'
  const params = useSearchParams()
  const type = params.get('type') || 'general'
  const article = params.get('article') || ''
  const [form, setForm] = useState({ name: '', phone: '', projectStage: '', message: '', email: '', company: '', service: '', location: '' })
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [delivered, setDelivered] = useState(false)
  const [receipt, setReceipt] = useState<number | null>(null)
  const inputClass = 'mt-2 w-full rounded-lg border border-input bg-background px-3 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40'
  const update = (key: keyof typeof form, value: string) => setForm(current => ({ ...current, [key]: value }))
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!privacy || status === 'loading') return
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          service: form.service || (type.startsWith('ai-') ? 'AI信息平台咨询' : '酒店经营交流'),
          message: [
            `${zh ? '项目阶段' : 'Project stage'}: ${form.projectStage}`,
            form.location ? `${zh ? '酒店所在地' : 'Hotel location'}: ${form.location}` : '',
            article ? `Article reference: ${article.slice(0, 250)}` : '',
            form.message,
          ].filter(Boolean).join('\n'),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success || (!result.saved && !result.delivered)) throw new Error('Not received')
      setDelivered(result.delivered === true)
      setReceipt(result.receipt || null)
      setStatus('success')
      trackEvent('contact_form_submit_success', { contact_type: type, from_article: article || undefined })
    } catch {
      setStatus('error')
    }
  }
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
      {status === 'success' ? (
        <div role="status" className="py-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
          <h3 className="text-xl font-semibold">{zh ? '您的问题已收到' : 'Your enquiry has been received'}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{delivered
            ? (zh ? '咨询已提交至我们的联系邮箱。我们会结合您提供的背景与您交流。' : 'Your enquiry has been submitted to our contact mailbox. We will use the context you provided to follow up.')
            : (zh ? '咨询已保存，但邮件提醒暂未送达。如需及时联系，请使用下方邮箱。' : 'Your enquiry was saved, but the email notification was not delivered. For timely contact, use the email below.')}</p>
          {receipt && <p className="mt-2 text-sm">{zh ? '咨询编号' : 'Reference'}: {receipt}</p>}
          <a className="mt-4 inline-block text-primary underline" href="mailto:info@marvelbros.com">info@marvelbros.com</a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <p className="text-sm leading-7 text-muted-foreground">{zh ? '先填写四项信息，帮助我们理解您的问题。更详细的项目资料可以稍后交流。' : 'Start with four details so we can understand your question. Further project information can follow later.'}</p>
          {article && <p className="rounded-lg bg-primary/5 p-3 text-sm">{zh ? '本次咨询将附上您刚才阅读的文章或提问入口。' : 'The article or question entry point will be included with this enquiry.'}</p>}
          {status === 'error' && <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm leading-7">
            {zh ? '暂时无法确认提交成功。您的填写内容仍保留在此，请稍后重试，或直接发邮件至 ' : 'We could not confirm receipt. Your details are still here. Retry later or email '}
            <a href="mailto:info@marvelbros.com" className="underline">info@marvelbros.com</a>
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
          <details className="rounded-lg border border-border p-4">
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
