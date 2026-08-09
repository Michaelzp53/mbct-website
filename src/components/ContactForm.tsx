'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import type { Dict } from '@/lib/dicts'
import { trackEvent } from '@/lib/analytics'

interface ContactFormProps {
  dict: Dict
  lang: string
}

export function ContactForm({ dict, lang }: ContactFormProps) {
  const isZh = lang === 'zh'
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const isAiInfoPlatform = type === 'ai-website-audit' || type === 'ai-info-platform'
  const isDiagnosis = type === 'diagnosis'
  const defaultService = isAiInfoPlatform
    ? (dict.contact.services.find((service) => service.includes('AI') && (service.includes('信息') || service.includes('Information') || service.includes('官网') || service.includes('Website'))) || dict.contact.services[0] || '')
    : isDiagnosis
      ? (dict.contact.services.find((service) => service.includes('经营诊断') || service.includes('Operational Diagnosis')) || dict.contact.services[0] || '')
    : type === 'plan'
      ? dict.contact.services[0] || ''
      : ''
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    identity: '',
    location: '',
    projectStage: '',
    roomCount: '',
    preferredTime: '',
    websiteStatus: '',
    priorityIssue: '',
    otaShare: '',
    service: defaultService,
    message: '',
  })
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacy) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          company: form.identity,
          message: [
            `${isZh ? '身份' : 'Role'}: ${form.identity}`,
            `${isZh ? '酒店所在地' : 'Hotel location'}: ${form.location}`,
            `${isZh ? '项目阶段' : 'Project stage'}: ${form.projectStage}`,
            `${isZh ? '客房数' : 'Room count'}: ${form.roomCount}`,
            `${isZh ? '期望沟通时间' : 'Preferred contact time'}: ${form.preferredTime}`,
            isAiInfoPlatform && form.websiteStatus ? `${dict.contact.form.websiteStatus}: ${form.websiteStatus}` : '',
            isAiInfoPlatform && form.priorityIssue ? `${dict.contact.form.priorityIssue}: ${form.priorityIssue}` : '',
            isAiInfoPlatform && form.otaShare ? `${dict.contact.form.otaShare}: ${form.otaShare}` : '',
            form.message,
          ].filter(Boolean).join('\n'),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setErrorMessage(data?.error || dict.contact.form.error)
        setStatus('error')
        return
      }

      await res.json().catch(() => null)
      trackEvent('contact_form_submit_success', {
        contact_type: type || 'general',
        selected_service: form.service,
      })
      setStatus('success')
      setForm({
        name: '',
        phone: '',
        email: '',
        identity: '',
        location: '',
        projectStage: '',
        roomCount: '',
        preferredTime: '',
        websiteStatus: '',
        priorityIssue: '',
        otaShare: '',
        service: defaultService,
        message: '',
      })
      setPrivacy(false)
    } catch {
      setErrorMessage(dict.contact.form.error)
      setStatus('error')
    }
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
      {status === 'success' ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-card-foreground">{dict.contact.form.success}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {status === 'error' && errorMessage && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errorMessage}
            </div>
          )}

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.name}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.phone}</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Identity + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '您的身份' : 'Your role'}</label>
              <select
                required
                value={form.identity}
                onChange={(e) => setForm({ ...form, identity: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              >
                <option value="">{isZh ? '请选择' : 'Select one'}</option>
                {(isZh ? ['酒店投资人', '酒店业主', '总经理/管理者', '酒店集团/品牌方', '筹开项目负责人', '其他'] : ['Hotel investor', 'Hotel owner', 'General manager / operator', 'Hotel group / brand', 'Pre-opening project lead', 'Other']).map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '酒店所在地' : 'Hotel location'}</label>
              <input
                type="text"
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '项目阶段' : 'Project stage'}</label>
              <select required value={form.projectStage} onChange={(e) => setForm({ ...form, projectStage: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                <option value="">{isZh ? '请选择' : 'Select one'}</option>
                {(isZh ? ['投前评估', '定位/设计', '筹建筹开', '在营改善', '改造/重塑'] : ['Pre-investment', 'Positioning / design', 'Development / pre-opening', 'Operating improvement', 'Renovation / repositioning']).map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '客房数' : 'Room count'}</label>
              <input type="number" min="1" required value={form.roomCount} onChange={(e) => setForm({ ...form, roomCount: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '期望沟通时间' : 'Preferred contact time'}</label>
              <input type="text" required value={form.preferredTime} onChange={(e) => setForm({ ...form, preferredTime: e.target.value })} placeholder={isZh ? '如：工作日下午' : 'e.g. weekday afternoons'} className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>
          </div>

          {isAiInfoPlatform && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.websiteStatus}</label>
                <select
                  value={form.websiteStatus}
                  onChange={(e) => setForm({ ...form, websiteStatus: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">{dict.contact.form.websiteStatusPlaceholder}</option>
                  {dict.contact.form.websiteStatusOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.priorityIssue}</label>
                <select
                  value={form.priorityIssue}
                  onChange={(e) => setForm({ ...form, priorityIssue: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">{dict.contact.form.priorityIssuePlaceholder}</option>
                  {dict.contact.form.priorityIssueOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.otaShare}</label>
                <select
                  value={form.otaShare}
                  onChange={(e) => setForm({ ...form, otaShare: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">{dict.contact.form.otaSharePlaceholder}</option>
                  {dict.contact.form.otaShareOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Service dropdown */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.service}</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer"
            >
              <option value="">{dict.contact.form.servicePlaceholder}</option>
              {dict.contact.services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">{isZh ? '当前最主要的问题' : 'Your most urgent issue'}</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={dict.contact.form.messagePlaceholder}
              className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Privacy checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-input cursor-pointer accent-primary"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">{dict.contact.form.privacy}</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={!privacy || status === 'loading'}
            className="w-full py-3 rounded-lg font-semibold text-neutral-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-amber-500 hover:bg-amber-400 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {dict.contact.form.submitting}
              </>
            ) : (
              dict.contact.form.submit
            )}
          </button>
        </form>
      )}
    </div>
  )
}
