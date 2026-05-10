'use client'

import { useState } from 'react'
import { ArrowLeft, MessageCircle, Send, User, Building2, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

// Pillar Categories
const pillars = [
  { id: 'guest-service', label: 'Guest Lean Service' },
  { id: 'emotional-value', label: 'Human Touch & Emotion' },
  { id: 'diagnosis', label: 'Diagnosis & Improvement' },
  { id: 'team-management', label: 'Team Lean Management' },
  { id: 'cost-optimization', label: 'Cost & Revenue' },
]

// Waste Types (7 Lean Wastes in Hospitality)
const wasteTypes = [
  { id: 'waiting', label: 'Waiting' },
  { id: 'defects', label: 'Defects' },
  { id: 'over-processing', label: 'Over-processing' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'motion', label: 'Motion' },
  { id: 'over-production', label: 'Over-production' },
]

// Storage key for localStorage
const STORAGE_KEY = 'mbct_lean_questions'

interface SavedQuestion {
  id: string
  title: string
  detail: string
  pillar: string
  wasteTypes: string[]
  nickname: string
  hotelName: string | undefined
  submittedAt: string
}

interface AskFormProps {
  lang: string
}

export default function AskForm({ lang }: AskFormProps) {
  const isZh = lang === 'zh'

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [pillar, setPillar] = useState('')
  const [selectedWastes, setSelectedWastes] = useState<string[]>([])
  const [nickname, setNickname] = useState('')
  const [hotelName, setHotelName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const ui = {
    back: isZh ? '返回管享精道' : 'Back to Lean Q&A',
    backToLean: isZh ? '返回管享精道' : 'Back to Lean Q&A',
    title: isZh ? '提问迈创兄弟' : 'Ask MarvelBros',
    subtitle: isZh
      ? '描述你遇到的酒店管理难题，越具体越好'
      : 'Describe your hotel management challenge. The more specific, the better the answer.',
    questionTitle: isZh ? '问题标题' : 'Question Title',
    titlePlaceholder: isZh ? '一句话概括你的问题（最多50字）' : 'Summarize your question in one sentence (max 50 chars)',
    titleRequired: isZh ? '必填' : 'Required',
    questionDetail: isZh ? '问题详情' : 'Question Details',
    detailPlaceholder: isZh
      ? '请描述：\n1. 酒店类型和规模\n2. 遇到的具体问题\n3. 尝试过的解决方案\n4. 期望的结果'
      : 'Please describe:\n1. Your hotel type and scale\n2. Specific problem you face\n3. Solutions already tried\n4. Desired outcome',
    pillarLabel: isZh ? '分类维度' : 'Pillar Category',
    pillarRequired: isZh ? '必选：选择最相关的精益维度' : 'Required: Select the most relevant lean pillar',
    wasteLabel: isZh ? '浪费类型（可选）' : 'Waste Type (Optional)',
    wasteHint: isZh ? '标识浪费类型有助于更精准回答' : 'Identifying the waste type helps us respond more precisely',
    nickname: isZh ? '昵称（可选）' : 'Your Nickname (Optional)',
    nicknamePlaceholder: isZh ? '怎么称呼你？' : 'How should we address you?',
    hotelName: isZh ? '酒店名称（可选）' : 'Hotel Name (Optional)',
    hotelPlaceholder: isZh ? '如：XX精品酒店' : 'e.g., XX Boutique Hotel',
    submit: isZh ? '提交问题' : 'Submit Question',
    submitting: isZh ? '提交中...' : 'Submitting...',
    privacy: isZh
      ? '提交即表示同意将问题公开（匿名化），供其他酒店管理者参考'
      : 'By submitting, you agree to make this question public (anonymized) for other hotel managers to learn from',
    successTitle: isZh ? '问题已收到！' : 'Question Received!',
    successMessage: isZh
      ? '迈创兄弟将在48小时内回复。精选问答将在管享精道展示。'
      : 'MarvelBros will respond within 48 hours. Selected Q&A will be featured in the Lean Insights section.',
    notice: isZh
      ? '当前问题保存在本地浏览器中。如需正式提交，请通过联系页面联系我们。'
      : 'Questions are saved locally in your browser. For production, please contact MarvelBros directly.',
  }

  const toggleWaste = (wasteId: string) => {
    setSelectedWastes((prev) =>
      prev.includes(wasteId)
        ? prev.filter((id) => id !== wasteId)
        : [...prev, wasteId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      setErrorMessage(isZh ? '请输入问题标题' : 'Please enter a question title')
      setSubmitStatus('error')
      return
    }
    if (!detail.trim()) {
      setErrorMessage(isZh ? '请详细描述问题' : 'Please describe your question in detail')
      setSubmitStatus('error')
      return
    }
    if (!pillar) {
      setErrorMessage(isZh ? '请选择分类维度' : 'Please select a pillar category')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const question: SavedQuestion = {
        id: `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: title.trim(),
        detail: detail.trim(),
        pillar,
        wasteTypes: selectedWastes,
        nickname: nickname.trim() || 'Anonymous',
        hotelName: hotelName.trim() || undefined,
        submittedAt: new Date().toISOString(),
      }

      let questions: SavedQuestion[] = []
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) questions = JSON.parse(saved)
      } catch {}

      questions.push(question)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(questions))

      await new Promise((resolve) => setTimeout(resolve, 800))

      setSubmitStatus('success')
      setTitle('')
      setDetail('')
      setPillar('')
      setSelectedWastes([])
      setNickname('')
      setHotelName('')
    } catch {
      setSubmitStatus('error')
      setErrorMessage(isZh ? '提交失败，请重试' : 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 成功状态
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {ui.successTitle}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {ui.successMessage}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href={`/${lang}/lean`}>
              <Button className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 py-4 rounded-xl">
                {ui.backToLean}
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => setSubmitStatus('idle')}
              className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10 px-8 py-4 rounded-xl"
            >
              {isZh ? '继续提问' : 'Ask Another'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.back}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">
              {isZh ? '迈创兄弟 · 管享精道' : 'MarvelBros · Lean Insights'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {ui.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {ui.subtitle}
          </p>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Question Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionTitle}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={50}
              placeholder={ui.titlePlaceholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
            <p className="text-xs text-muted-foreground text-right">{title.length}/50</p>
          </div>

          {/* Question Detail */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionDetail}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <textarea
              name="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={8}
              placeholder={ui.detailPlaceholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors resize-y"
            />
          </div>

          {/* Pillar Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {ui.pillarLabel}
            </label>
            <p className="text-xs text-muted-foreground">{ui.pillarRequired}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <label
                  key={p.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                    pillar === p.id
                      ? 'border-[#f59e0b] bg-[#f59e0b]/10'
                      : 'border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="pillar"
                    value={p.id}
                    checked={pillar === p.id}
                    onChange={(e) => setPillar(e.target.value)}
                    className="w-4 h-4 accent-[#f59e0b]"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Waste Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {ui.wasteLabel}
            </label>
            <p className="text-xs text-muted-foreground">{ui.wasteHint}</p>
            <div className="flex flex-wrap gap-2">
              {wasteTypes.map((waste) => (
                <label
                  key={waste.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                    selectedWastes.includes(waste.id)
                      ? 'border-[#f59e0b] bg-[#f59e0b]/10 text-[#f59e0b]'
                      : 'border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 text-foreground'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="wasteTypes"
                    value={waste.id}
                    checked={selectedWastes.includes(waste.id)}
                    onChange={() => toggleWaste(waste.id)}
                    className="w-4 h-4 accent-[#f59e0b] rounded"
                  />
                  <span className="text-sm">{waste.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nickname + Hotel Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                {ui.nickname}
              </label>
              <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder={ui.nicknamePlaceholder}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                {ui.hotelName}
              </label>
              <input
                type="text"
                name="hotelName"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                placeholder={ui.hotelPlaceholder}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground text-center">
            {ui.privacy}
          </p>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-10 py-6 text-lg rounded-xl disabled:opacity-50"
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? ui.submitting : ui.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}