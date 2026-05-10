import Link from 'next/link'
import { ArrowLeft, MessageCircle, HelpCircle, Send, User, Building2 } from 'lucide-react'
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

export default async function AskPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  // All English for international readers
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
    privacy: 'By submitting, you agree to make this question public (anonymized) for other hotel managers to learn from',
    successTitle: 'Question Received!',
    successMessage: 'MarvelBros will respond within 48 hours. Selected Q&A will be featured in the Lean Insights section.',
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

        {/* Form */}
        <form className="space-y-8">
          {/* Question Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionTitle}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <input
              type="text"
              maxLength={50}
              placeholder={ui.titlePlaceholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
            <p className="text-xs text-muted-foreground">0/50</p>
          </div>

          {/* Question Detail */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionDetail}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <textarea
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
              {pillars.map((pillar) => (
                <label
                  key={pillar.id}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 transition-all cursor-pointer"
                >
                  <input
                    type="radio"
                    name="pillar"
                    value={pillar.id}
                    className="w-4 h-4 accent-[#f59e0b]"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {pillar.label}
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 transition-all cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="wasteTypes"
                    value={waste.id}
                    className="w-4 h-4 accent-[#f59e0b] rounded"
                  />
                  <span className="text-sm text-foreground">{waste.label}</span>
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
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-10 py-6 text-lg rounded-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              {ui.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
