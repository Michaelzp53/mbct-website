'use client'

import { useState } from 'react'

const stages = [
  ['investment', '投', 'Invest'],
  ['development', '建', 'Build'],
  ['opening', '筹', 'Pre-open'],
  ['operation', '管', 'Operate'],
  ['renovation', '改', 'Renew'],
  ['exit', '退', 'Exit'],
] as const

export default function LightInquiryForm({ lang }: { lang: string }) {
  const isZh = lang !== 'en'
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle')
  const [copied, setCopied] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const contact = String(form.get('contact') || '').trim()
    const stage = String(form.get('stage') || '').trim()
    const concern = String(form.get('concern') || '').trim()
    if (!contact || !stage || !concern) return
    setStatus('sending')
    const stageLabel = stages.find((item) => item[0] === stage)?.[isZh ? 1 : 2] || stage
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.slice(0, 100),
          phone: contact.slice(0, 50),
          email: '',
          company: '',
          service: `首页轻表单｜${stageLabel}`.slice(0, 255),
          message: concern.slice(0, 10000),
        }),
      })
      setStatus(response.ok ? 'ok' : 'fail')
    } catch {
      setStatus('fail')
    }
  }

  async function copyPhone() {
    await navigator.clipboard.writeText('+86 189 4157 9333')
    setCopied(true)
  }

  return (
    <div className="grid gap-6">
      <button type="button" onClick={copyPhone} className="inline-flex min-h-11 items-center justify-center border border-slate-400 px-4 py-2 text-sm font-semibold">
        {copied ? (isZh ? '已复制' : 'Copied') : (isZh ? '一键复制微信/手机号' : 'Copy WeChat / phone')}
      </button>
      <form onSubmit={onSubmit} className="grid gap-3" data-source="首页轻表单">
        <label className="grid gap-1 text-sm font-semibold">
          {isZh ? '称呼与联系方式' : 'Name and contact'}
          <input name="contact" required maxLength={100} className="min-h-11 border border-slate-300 bg-white px-3 font-normal text-slate-950 dark:bg-slate-950 dark:text-white" />
        </label>
        <fieldset className="grid gap-2">
          <legend className="text-sm font-semibold">{isZh ? '酒店所处阶段' : 'Hotel stage'}</legend>
          <div className="flex flex-wrap gap-2">
            {stages.map(([id, zh, en]) => (
              <label key={id} className="inline-flex items-center gap-1 border border-slate-300 px-2 py-1 text-sm">
                <input type="radio" name="stage" value={id} required />
                {isZh ? zh : en}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="grid gap-1 text-sm font-semibold">
          {isZh ? '一句话核心困扰' : 'The problem in one sentence'}
          <textarea name="concern" required maxLength={1000} rows={3} className="border border-slate-300 bg-white px-3 py-2 font-normal text-slate-950 dark:bg-slate-950 dark:text-white" />
        </label>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{isZh ? '提交后我们会先做初步判断，再约沟通时间。' : 'After you submit, we make a first judgment and then arrange a time to talk.'}</p>
        <button type="submit" disabled={status === 'sending'} className="min-h-11 bg-brand-blue px-4 font-semibold text-white">
          {status === 'sending' ? (isZh ? '提交中' : 'Sending') : (isZh ? '提交这个问题' : 'Submit this question')}
        </button>
        {status === 'ok' && <p className="text-sm font-semibold">{isZh ? '已收到。我们会先做初步判断，再约沟通时间。' : 'Received. We will make a first judgment, then arrange a time to talk.'}</p>}
        {status === 'fail' && <p className="text-sm font-semibold">{isZh ? '这次没有送出。请改用电话或页面上的完整表单。' : 'This did not send. Use the phone number or the full form.'}</p>}
      </form>
    </div>
  )
}
