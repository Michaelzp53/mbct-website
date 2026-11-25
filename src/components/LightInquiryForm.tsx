'use client'

import { useState } from 'react'
import { LIFECYCLE_STAGES } from '@/lib/lifecycle-stages'

const stages = LIFECYCLE_STAGES.map((stage) => ({
  id: stage.caseStage,
  zh: stage.shortZh,
  en: stage.shortEn,
  accent: stage.accent,
}))

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
    const stageLabel = stages.find((item) => item.id === stage)?.[isZh ? 'zh' : 'en'] || stage
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
    <div className="grid gap-6 text-white">
      <button
        type="button"
        onClick={copyPhone}
        className="inline-flex min-h-11 items-center justify-center border border-white/50 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
      >
        {copied ? (isZh ? '已复制' : 'Copied') : (isZh ? '一键复制微信/手机号' : 'Copy WeChat / phone')}
      </button>
      <form onSubmit={onSubmit} className="grid gap-3" data-source="首页轻表单">
        <label className="grid gap-1 text-sm font-semibold text-white">
          {isZh ? '称呼与联系方式' : 'Name and contact'}
          <input
            name="contact"
            required
            maxLength={100}
            className="min-h-11 border border-white/40 bg-white/95 px-3 font-normal text-slate-950"
          />
        </label>
        <fieldset className="grid gap-2">
          <legend className="text-sm font-semibold text-white">{isZh ? '酒店所处阶段' : 'Hotel stage'}</legend>
          <div className="flex flex-wrap gap-2">
            {stages.map((item) => (
              <label
                key={item.id}
                className="inline-flex items-center gap-1.5 border border-white/35 bg-white/10 px-2.5 py-1.5 text-base font-bold"
                style={{ color: item.accent }}
              >
                <input type="radio" name="stage" value={item.id} required className="accent-amber-400" />
                {isZh ? item.zh : item.en}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="grid gap-1 text-sm font-semibold text-white">
          {isZh ? '一句话核心困扰' : 'The problem in one sentence'}
          <textarea
            name="concern"
            required
            maxLength={1000}
            rows={3}
            className="border border-white/40 bg-white/95 px-3 py-2 font-normal text-slate-950"
          />
        </label>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm leading-6 text-white/90">
            {isZh ? '提交后我们会先做初步判断，再约沟通时间。' : 'After you submit, we make a first judgment and then arrange a time to talk.'}
          </p>
          <button type="submit" disabled={status === 'sending'} className="min-h-11 shrink-0 bg-brand-gold px-4 font-semibold text-slate-950">
            {status === 'sending' ? (isZh ? '提交中' : 'Sending') : (isZh ? '提交这个问题' : 'Submit this question')}
          </button>
        </div>
        {status === 'ok' && (
          <p className="text-sm font-semibold text-emerald-300">
            {isZh ? '已收到。我们会先做初步判断，再约沟通时间。' : 'Received. We will make a first judgment, then arrange a time to talk.'}
          </p>
        )}
        {status === 'fail' && (
          <p className="text-sm font-semibold text-rose-300">
            {isZh ? '这次没有送出。请改用电话或页面上的完整表单。' : 'This did not send. Use the phone number or the full form.'}
          </p>
        )}
      </form>
    </div>
  )
}
