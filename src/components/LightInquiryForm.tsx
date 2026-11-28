'use client'

import { useState } from 'react'
import { Check, Copy, ArrowRight } from 'lucide-react'
import { LIFECYCLE_STAGES } from '@/lib/lifecycle-stages'

const stages = LIFECYCLE_STAGES.map((stage) => ({
  id: stage.caseStage,
  zh: stage.shortZh,
  en: stage.shortEn,
}))

export default function LightInquiryForm({ lang }: { lang: string }) {
  const isZh = lang !== 'en'
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle')
  const [copied, setCopied] = useState(false)
  const [selectedStage, setSelectedStage] = useState<string>(stages[0]?.id ?? 'investment')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const contact = String(form.get('contact') || '').trim()
    const stage = String(form.get('stage') || selectedStage).trim()
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
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#131924] sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#efeae2] pb-5 dark:border-white/10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c6b39] dark:text-[#c9a66b]">
            {isZh ? '快速项目诊断表单' : 'INITIAL PROJECT DIAGNOSTIC'}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {isZh ? '提交后我们将先做初步研判，再与您预约深度沟通时间。' : 'Share your stage and key challenge for an initial advisory review.'}
          </p>
        </div>
        <button
          type="button"
          onClick={copyPhone}
          className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border border-[#dfd8cc] bg-[#f8f6f2] px-4 text-xs font-medium text-[#0f172a] transition-colors hover:border-[#b08d57] hover:text-[#b08d57] dark:border-white/15 dark:bg-[#0b0f17] dark:text-slate-200 dark:hover:border-[#c9a66b]"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? (isZh ? '已复制号码' : 'Copied') : (isZh ? '复制微信/手机号' : 'Copy Phone / WeChat')}</span>
        </button>
      </div>

      <form onSubmit={onSubmit} className="grid gap-5" data-source="首页轻表单">
        <fieldset className="grid gap-2.5">
          <legend className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
            {isZh ? '酒店当前所处阶段' : 'Current Hotel Stage'}
          </legend>
          <div className="flex flex-wrap gap-2">
            {stages.map((item) => {
              const active = selectedStage === item.id
              return (
                <label
                  key={item.id}
                  className={`inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    active
                      ? 'border-[#0f172a] bg-[#0f172a] text-[#f8f6f2] dark:border-[#c9a66b] dark:bg-[#c9a66b] dark:text-[#0b0f17]'
                      : 'border-[#dfd8cc] bg-[#f8f6f2] text-slate-700 hover:border-[#b08d57] dark:border-white/15 dark:bg-[#0b0f17] dark:text-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="stage"
                    value={item.id}
                    checked={active}
                    onChange={() => setSelectedStage(item.id)}
                    required
                    className="sr-only"
                  />
                  {isZh ? item.zh : item.en}
                </label>
              )
            })}
          </div>
        </fieldset>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
          {isZh ? '称呼与联系方式' : 'Name & Contact (Phone / WeChat / Email)'}
          <input
            name="contact"
            required
            maxLength={100}
            placeholder={isZh ? '例如：张先生 · 138xxxx8888' : 'e.g., Alex Chen · +86 138xxxx8888'}
            className="min-h-11 rounded-lg border border-[#dfd8cc] bg-[#f8f6f2] px-3.5 text-sm font-normal text-[#0f172a] outline-none transition-colors focus:border-[#b08d57] dark:border-white/15 dark:bg-[#0b0f17] dark:text-slate-100 dark:focus:border-[#c9a66b]"
          />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
          {isZh ? '一句话核心困扰' : 'Key Challenge in One Sentence'}
          <textarea
            name="concern"
            required
            maxLength={1000}
            rows={3}
            placeholder={isZh ? '例如：存量酒店出租率稳定但 GOP 持续承压，评估经营改善或换牌改造...' : 'e.g., Stable occupancy but declining GOP over two quarters; assessing turnaround vs. rebranding...'}
            className="rounded-lg border border-[#dfd8cc] bg-[#f8f6f2] px-3.5 py-2.5 text-sm font-normal text-[#0f172a] outline-none transition-colors focus:border-[#b08d57] dark:border-white/15 dark:bg-[#0b0f17] dark:text-slate-100 dark:focus:border-[#c9a66b]"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isZh ? '严格保密您的项目与财务信息' : 'All project details are kept strictly confidential.'}
          </p>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-[#0f172a] px-6 text-sm font-medium text-[#f8f6f2] transition-all hover:bg-[#b08d57] hover:text-white disabled:opacity-60 dark:bg-[#c9a66b] dark:text-[#0b0f17] dark:hover:bg-[#dfbf86]"
          >
            <span>{status === 'sending' ? (isZh ? '提交中...' : 'Sending...') : (isZh ? '提交初步诊断需求' : 'Request Diagnostic')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {status === 'ok' && (
          <p className="rounded-lg bg-emerald-50 px-3.5 py-2.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
            {isZh ? '已收到您的需求。我们会先做初步研判，再与您预约沟通时间。' : 'Received. Our senior advisers will review your inquiry and schedule a conversation.'}
          </p>
        )}
        {status === 'fail' && (
          <p className="rounded-lg bg-rose-50 px-3.5 py-2.5 text-sm font-medium text-rose-800 dark:bg-rose-950/50 dark:text-rose-300">
            {isZh ? '提交未成功，请直接致电/微信 +86 189 4157 9333 或使用完整联系表单。' : 'Submission failed. Please contact +86 189 4157 9333 directly or use the full contact form.'}
          </p>
        )}
      </form>
    </div>
  )
}
