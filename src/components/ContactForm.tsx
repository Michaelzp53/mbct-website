'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import type { Dict } from '@/lib/dicts'

interface ContactFormProps {
  dict: Dict
}

export function ContactForm({ dict }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '', service: '', message: '',
  })
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacy) return
    setStatus('loading')
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      {status === 'success' ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{dict.contact.form.success}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.name}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-10 rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.phone}</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-10 rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Email + Company */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-10 rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.company}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full h-10 rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Service dropdown */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.service}</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full h-10 rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors"
            >
              <option value="">{dict.contact.form.servicePlaceholder}</option>
              {dict.contact.services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">{dict.contact.form.message}</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={dict.contact.form.messagePlaceholder}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Privacy checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0f172a] focus:ring-[#0f172a]"
            />
            <span className="text-sm text-slate-600 leading-relaxed">{dict.contact.form.privacy}</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={!privacy || status === 'loading'}
            className="w-full bg-[#f59e0b] text-[#0f172a] hover:bg-[#fbbf24] font-semibold rounded-lg py-3 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
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
