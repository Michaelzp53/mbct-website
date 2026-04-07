'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // 模拟订阅请求
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#f59e0b]/10 to-[#3b82f6]/10 border border-[#f59e0b]/30">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className="text-white font-medium">订阅成功！</p>
            <p className="text-gray-400 text-sm">您将每周收到我们的最新洞察</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10 p-8 rounded-2xl bg-[#1e293b] border border-gray-800">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-4">
          <Mail className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-[#f59e0b] text-sm font-medium">免费订阅</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">获取每周行业洞察</h3>
        <p className="text-gray-400 text-sm">
          留下邮箱，每周获取最新文章推送与行业报告
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="输入您的邮箱"
          className="flex-1 px-4 py-3 bg-[#0f172a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] transition-colors"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {isSubmitting ? '订阅中...' : '立即订阅'}
        </button>
      </form>

      <p className="text-center text-gray-500 text-xs mt-4">
        订阅意味着您同意接收我们的营销邮件 · 随时可取消
      </p>
    </div>
  )
}
