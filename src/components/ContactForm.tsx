'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import type { Dict } from '@/lib/dicts'

interface ContactFormProps {
  dict: Dict
}

export function ContactForm({ dict }: ContactFormProps) {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const isAiInfoPlatform = type === 'ai-website-audit' || type === 'ai-info-platform'
  const defaultService = isAiInfoPlatform
    ? (dict.contact.services.find((service) => service.includes('AI') && (service.includes('信息') || service.includes('Information') || service.includes('官网') || service.includes('Website'))) || dict.contact.services[0] || '')
    : type === 'plan'
      ? dict.contact.services[0] || ''
      : ''
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '', onlineStatus: '', service: defaultService, message: '',
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
          message: form.onlineStatus
            ? `${dict.contact.form.onlineStatus}: ${form.onlineStatus}\n\n${form.message}`
            : form.message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setErrorMessage(data?.error || dict.contact.form.error)
        setStatus('error')
        return
      }

      await res.json().catch(() => null)
      setStatus('success')
      setForm({
        name: '', phone: '', email: '', company: '', onlineStatus: '', service: defaultService, message: '',
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

          {/* Email + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.company}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {isAiInfoPlatform && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.onlineStatus}</label>
              <input
                type="text"
                value={form.onlineStatus}
                onChange={(e) => setForm({ ...form, onlineStatus: e.target.value })}
                placeholder={dict.contact.form.onlineStatusPlaceholder}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
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
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">{dict.contact.form.message}</label>
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
            className="w-full py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 flex items-center justify-center gap-2"
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
