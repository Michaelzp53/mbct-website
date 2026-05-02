'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

interface NewsletterSubscribeProps {
  lang: string
}

export default function NewsletterSubscribe({ lang }: NewsletterSubscribeProps) {
  const isZh = lang === 'zh'
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const texts = {
    freeTag: isZh ? '免费订阅' : 'Free Subscription',
    title: isZh ? '获取每周行业洞察' : 'Get Weekly Industry Insights',
    subtitle: isZh ? '留下邮箱，每周获取最新文章推送与行业报告' : 'Leave your email for weekly article updates and industry reports',
    placeholder: isZh ? '输入您的邮箱' : 'Enter your email',
    subscribe: isZh ? '立即订阅' : 'Subscribe Now',
    subscribing: isZh ? '订阅中...' : 'Subscribing...',
    successTitle: isZh ? '订阅成功！' : 'Subscribed Successfully!',
    successMsg: isZh ? '您将每周收到我们的最新洞察' : 'You will receive our latest insights weekly',
    footer: isZh ? '订阅意味着您同意接收我们的营销邮件 · 随时可取消' : 'By subscribing you agree to receive marketing emails · Unsubscribe anytime',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
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
            <p className="text-foreground font-medium">{texts.successTitle}</p>
            <p className="text-muted-foreground text-sm">{texts.successMsg}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10 p-8 rounded-2xl bg-muted dark:bg-[#1e293b] border border-border">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-4">
          <Mail className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-[#f59e0b] text-sm font-medium">{texts.freeTag}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{texts.title}</h3>
        <p className="text-muted-foreground text-sm">{texts.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={texts.placeholder}
          className="flex-1 px-4 py-3 bg-background dark:bg-[#0f172a] border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {isSubmitting ? texts.subscribing : texts.subscribe}
        </button>
      </form>

      <p className="text-center text-muted-foreground text-xs mt-4">{texts.footer}</p>
    </div>
  )
}
