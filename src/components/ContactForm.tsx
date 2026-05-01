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
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  const inputStyle = {
    width: '100%',
    height: '42px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '0 12px',
    fontSize: '14px',
    backgroundColor: '#16213e',
    color: '#e8e8e8',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  } as React.CSSProperties

  const textareaStyle = {
    ...inputStyle,
    height: 'auto',
    padding: '12px',
    resize: 'none' as const,
  }

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer' as const,
  }

  return (
    <div style={{ backgroundColor: '#16213e', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
      {status === 'success' ? (
        <div style={{ textAlign: 'center', paddingTop: '48px', paddingBottom: '48px' }}>
          <CheckCircle style={{ width: '64px', height: '64px', color: '#34a853', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#e8e8e8' }}>{dict.contact.form.success}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Name + Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.name}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.phone}</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          {/* Email + Company */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.company}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          {/* Service dropdown */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.service}</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={selectStyle}
              onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
            >
              <option value="">{dict.contact.form.servicePlaceholder}</option>
              {dict.contact.services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#a0a0a0', marginBottom: '6px' }}>{dict.contact.form.message}</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={dict.contact.form.messagePlaceholder}
              style={textareaStyle}
              onFocus={(e) => { e.target.style.borderColor = '#4285f4'; e.target.style.boxShadow = '0 0 0 2px rgba(66,133,244,0.2)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          {/* Privacy checkbox */}
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              style={{ marginTop: '2px', width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '14px', color: '#a0a0a0', lineHeight: 1.5 }}>{dict.contact.form.privacy}</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={!privacy || status === 'loading'}
            style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: !privacy ? '#334155' : 'linear-gradient(135deg, #4285f4 0%, #764ba2 100%)',
              backgroundImage: !privacy ? 'none' : 'linear-gradient(135deg, #4285f4 0%, #764ba2 100%)',
              color: '#ffffff',
              fontWeight: 600,
              borderRadius: '8px',
              border: 'none',
              cursor: !privacy ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s, transform 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />
                {dict.contact.form.submitting}
              </>
            ) : (
              dict.contact.form.submit
            )}
          </button>
        </form>
      )}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
