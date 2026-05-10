'use client'

import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Send, User, Building2, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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

export default function AskPage({ lang }: AskFormProps) {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [pillar, setPillar] = useState('')
  const [selectedWastes, setSelectedWastes] = useState<string[]>([])
  const [nickname, setNickname] = useState('')
  const [hotelName, setHotelName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Load saved questions from localStorage on mount
  const [savedCount, setSavedCount] = useState(0)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const questions: SavedQuestion[] = JSON.parse(saved)
        setSavedCount(questions.length)
      }
    } catch {}
  }, [])

  const ui = {
    back: 'Back to Lean Q&A',
    title: 'Ask MarvelBros',
    subtitle: 'Describe your hotel management challenge. The more specific, the better the answer.',
    questionTitle: 'Question Title',
    titlePlaceholder: 'Summarize your question in one sentence (max 50 chars)',
    titleRequired: 'Required',
    questionDetail: 'Question Details',
    detailPlaceholder: 'Please describe:\n1. Your hotel type and scale\n2. Specific problem you face\n3. Solutions already tried\n4. Desired outcome',
    pillarLabel: 'Pillar Category',
    pillarRequired: 'Required: Select the most relevant lean pillar',
    wasteLabel: 'Waste Type (Optional)',
    wasteHint: 'Identifying the waste type helps us respond more precisely',
    nickname: 'Your Nickname (Optional)',
    nicknamePlaceholder: 'How should we address you?',
    hotelName: 'Hotel Name (Optional)',
    hotelPlaceholder: 'e.g., XX Boutique Hotel',
    submit: 'Submit Question',
    submitting: 'Submitting...',
    privacy: 'By submitting, you agree to make this question public (anonymized) for other hotel managers to learn from',
    successTitle: 'Question Received!',
    successMessage: 'MarvelBros will respond within 48 hours. Selected Q&A will be featured in the Lean Insights section.',
    notice: 'Currently questions are saved locally. For production, please contact MarvelBros directly.',
  }

  const toggleWaste = (wasteId: string) => {
    setSelectedWastes((prev) =>
      prev.includes(wasteId)
        ? prev.filter((id) => id !== wasteId)
        : [...prev, wasteId]
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // 表单验证
    if (!title.trim()) {
      setErrorMessage('Please enter a question title')
      setSubmitStatus('error')
      return
    }
    if (!detail.trim()) {
      setErrorMessage('Please describe your question in detail')
      setSubmitStatus('error')
      return
    }
    if (!pillar) {
      setErrorMessage('Please select a pillar category')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // 保存到 localStorage（演示用）
      // 生产环境需要后端支持，请联系 MarvelBros
      const question: SavedQuestion = {
        id: `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: title.trim(),
        detail: detail.trim(),
        pillar,
        wasteTypes: selectedWastes,
        nickname: nickname.trim() || 'Anonymous',
        hotelName: hotelName.trim() || undefined as string | undefined,
        submittedAt: new Date().toISOString(),
      }

      // 读取现有问题
      let questions: SavedQuestion[] = []
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) questions = JSON.parse(saved)
      } catch {}

      // 添加新问题
      questions.push(question)

      // 保存回 localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(questions))

      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 800))

      setSubmitStatus('success')

      // 清空表单
      setTitle('')
      setDetail('')
      setPillar('')
      setSelectedWastes([])
      setNickname('')
      setHotelName('')
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to submit. Please try again.')
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
          <p className="text-sm text-muted-foreground mb-8">
            {ui.notice}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/lean`}>
              <Button className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 py-4 rounded-xl">
                Browse Lean Q&A
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => setSubmitStatus('idle')}
              className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10 px-8 py-4 rounded-xl"
            >
              Ask Another Question
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
              MarvelBros · Lean Insights
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {ui.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {ui.subtitle}
          </p>
        </div>

        {/* Notice */}
        <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
          <ExternalLink className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-500">
            <p className="font-medium mb-1">Demo Mode</p>
            <p>Questions are saved locally in your browser. For production use, please contact MarvelBros directly via the contact page to submit your question.</p>
          </div>
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