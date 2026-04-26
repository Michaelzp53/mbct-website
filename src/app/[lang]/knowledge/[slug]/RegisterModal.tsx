'use client'

import { useState } from 'react'
import { X, Check, Mail } from 'lucide-react'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  articleTitle: string
}

export default function RegisterModal({ isOpen, onClose, onSuccess, articleTitle }: RegisterModalProps) {
  const [account, setAccount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!account) return

    setIsSubmitting(true)
    
    // 模拟注册请求
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // 记录注册
    const registrations = JSON.parse(localStorage.getItem('mbct_registrations') || '[]')
    registrations.push({
      account,
      date: new Date().toISOString(),
      article: articleTitle,
    })
    localStorage.setItem('mbct_registrations', JSON.stringify(registrations))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // 2秒后自动关闭并解锁
    setTimeout(() => {
      onSuccess()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#1e293b] rounded-2xl border border-[#f59e0b]/30 w-full max-w-md p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">注册成功！</h3>
            <p className="text-gray-400 mb-4">欢迎成为迈创兄弟会员</p>
            <p className="text-[#f59e0b] text-sm">正在解锁文章...</p>
          </div>
        ) : (
          /* Register Form */
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">解锁完整文章</h3>
              <p className="text-gray-400 text-sm">输入手机号和邮箱，立即成为会员</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 邮箱/手机号 */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">邮箱 / 手机号</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="请输入邮箱或手机号"
                    className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !account}
                className="w-full py-4 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    注册中...
                  </span>
                ) : (
                  '立即注册 & 解锁全文'
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3">注册即表示同意我们的《服务条款》和《隐私政策》</p>
              <div className="flex flex-wrap gap-2">
                {['解锁完整文章', '免费订阅周报', '优先获取新内容'].map((benefit) => (
                  <span key={benefit} className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-[#f59e0b]">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
