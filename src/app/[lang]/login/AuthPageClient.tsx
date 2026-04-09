'use client'

import { useState, Suspense, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { Dict } from '@/lib/dicts'

interface AuthPageClientProps {
  dict: Dict
  lang: string
}

function LoginForm({ dict, lang }: AuthPageClientProps) {
  const { login: l } = dict
  const [isLogin, setIsLogin] = useState(true)
  const [account, setAccount] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || `/${lang}`

  // Init - read remembered account
  useEffect(() => {
    const savedAccount = localStorage.getItem('mbct_account')
    if (savedAccount) {
      setAccount(savedAccount)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!account) return
    if (!isLogin && !agreed) {
      alert('Please read and agree to the Terms of Service and Privacy Policy')
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)

    if (rememberMe) {
      localStorage.setItem('mbct_account', account)
    } else {
      localStorage.removeItem('mbct_account')
    }

    setIsSuccess(true)

    setTimeout(() => {
      alert(isLogin ? l.success.loginMsg : l.success.registerMsg)
    }, 500)
  }

  const handleLogout = () => {
    localStorage.removeItem('mbct_account')
    setAccount('')
    setRememberMe(false)
    setIsSuccess(false)
  }

  const inputStyle = {
    width: '100%',
    paddingLeft: '40px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderRadius: '8px',
    border: '1px solid #374151',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#d1d5db',
    marginBottom: '8px',
  }

  const inputWrapperStyle = {
    position: 'relative' as const,
  }

  const iconStyle = {
    position: 'absolute' as const,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
    width: '20px',
    height: '20px',
    pointerEvents: 'none' as const,
  }

  const isDisabled = (!isLogin && !agreed) || !account || isSubmitting

  // Forgot password screen
  if (showForgotPassword) {
    return (
      <div style={{ backgroundColor: '#111827', borderRadius: '16px', padding: '32px', border: '1px solid #1f2937' }}>
        <button
          onClick={() => setShowForgotPassword(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            marginBottom: '16px',
            fontSize: '14px',
          }}
        >
          ← {l.forgotPassword.back}
        </button>

        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            {l.forgotPassword.title}
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '24px', lineHeight: 1.6 }}>
            {l.forgotPassword.description}
          </p>

          <div style={{
            backgroundColor: '#0f172a',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
          }}>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>
              {l.forgotPassword.email}
            </p>
            <a
              href="mailto:info@marvelbros.com"
              style={{ color: '#f59e0b', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}
            >
              info@marvelbros.com
            </a>
          </div>

          <div style={{
            backgroundColor: '#0f172a',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>
              {l.forgotPassword.phone}
            </p>
            <a
              href="tel:18941579333"
              style={{ color: '#f59e0b', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}
            >
              189-4157-9333
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Logged-in success screen
  if (isSuccess) {
    return (
      <div style={{ backgroundColor: '#111827', borderRadius: '16px', padding: '32px', border: '1px solid #1f2937' }}>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            {l.success.title}
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            {l.success.welcome}
          </p>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px' }}>
            {l.success.loggedInAs}: {account}
          </p>
          <button
            onClick={handleLogout}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: '1px solid #374151',
              backgroundColor: 'transparent',
              color: '#9ca3af',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {l.success.logout}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#111827', borderRadius: '16px', padding: '32px', border: '1px solid #1f2937' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Account (email/phone) */}
        <div>
          <label htmlFor="account" style={labelStyle}>{l.form.account}</label>
          <div style={inputWrapperStyle}>
            <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input
              id="account"
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              style={inputStyle}
              placeholder={l.form.accountPlaceholder}
            />
          </div>
        </div>

        {/* Remember me & Forgot password */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <button
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                border: rememberMe ? '2px solid #f59e0b' : '2px solid #4b5563',
                backgroundColor: rememberMe ? '#f59e0b' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              {rememberMe && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>{l.form.rememberMe}</span>
          </label>

          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f59e0b',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            {l.form.forgotPassword}
          </button>
        </div>

        {/* Terms agreement - register only */}
        {!isLogin && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              style={{
                marginTop: '2px',
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: agreed ? '2px solid #f59e0b' : '2px solid #4b5563',
                backgroundColor: agreed ? '#f59e0b' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
              }}
            >
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.5 }}>
              {l.form.termsAgree}{' '}
              <Link href={`/${lang}/terms`} style={{ color: '#f59e0b', textDecoration: 'none', margin: '0 4px' }}>
                {l.form.termsOfService}
              </Link>
              {l.form.and}
              <Link href={`/${lang}/privacy`} style={{ color: '#f59e0b', textDecoration: 'none', margin: '0 4px' }}>
                {l.form.privacyPolicy}
              </Link>
            </p>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isDisabled}
          style={{
            width: '100%',
            padding: '14px 24px',
            fontWeight: 700,
            borderRadius: '8px',
            border: 'none',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            backgroundColor: isDisabled ? '#4b5563' : '#f59e0b',
            color: isDisabled ? '#9ca3af' : '#0f172a',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
          }}
        >
          {isSubmitting ? (
            <>
              <svg style={{ animation: 'spin 1s linear infinite' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.75" />
              </svg>
              {isLogin ? l.form.loggingIn : l.form.registering}
            </>
          ) : (
            <>
              {isLogin ? l.form.submitLogin : l.form.submitRegister}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </form>

      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af' }}>
          {l.noAccount}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{ marginLeft: '8px', color: '#f59e0b', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {l.registerNow}
          </button>
        </p>
      </div>
    </div>
  )
}

export default function AuthPageClient({ dict, lang }: AuthPageClientProps) {
  const { login: l } = dict

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
      <div style={{ maxWidth: '448px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', marginBottom: '24px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
            </svg>
            <span style={{ color: '#f59e0b', fontSize: '14px', fontWeight: 500 }}>{l.badge}</span>
          </div>
          <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            {l.welcomeTitle}
          </h2>
          <p style={{ color: '#9ca3af' }}>
            {l.welcomeSubtitle}
          </p>
        </div>

        <Suspense fallback={<div style={{ textAlign: 'center', color: '#9ca3af' }}>{l.loading}</div>}>
          <LoginForm dict={dict} lang={lang} />
        </Suspense>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href={`/${lang}`} style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}>
            {l.backHome}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
