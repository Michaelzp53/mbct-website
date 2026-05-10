import Link from 'next/link'
import { ArrowLeft, MessageCircle, ThumbsUp, Clock, User, BadgeCheck, Share2, Bookmark } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Pillar Categories
const pillars = [
  { id: 'guest-service', label: 'Guest Lean Service' },
  { id: 'emotional-value', label: 'Human Touch & Emotion' },
  { id: 'diagnosis', label: 'Diagnosis & Improvement' },
  { id: 'team-management', label: 'Team Lean Management' },
  { id: 'cost-optimization', label: 'Cost & Revenue' },
]

// Waste Types
const wasteTypes = [
  { id: 'waiting', label: 'Waiting' },
  { id: 'defects', label: 'Defects' },
  { id: 'over-processing', label: 'Over-processing' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'motion', label: 'Motion' },
  { id: 'over-production', label: 'Over-production' },
]

// Sample Q&A Detail Data (All English)
const qaDetail = {
  id: 1,
  slug: 'front-desk-waiting-5min',
  question: 'My hotel front desk queue often exceeds 5 minutes. Guests complain a lot. What type of waste is this and how can I improve?',
  questionDetail: `We are a 120-room business hotel with only 2 front desk staff. During peak check-in hours (2-4 PM), guests often wait over 5 minutes, generating many complaints. We tried adding 1 temporary worker, but the effect was minimal because training costs are high and temporary staff efficiency is low. What type of lean waste is this? Are there systematic improvement methods?`,
  pillar: 'guest-service',
  wasteType: 'waiting',
  author: 'Anonymous Hotel Owner',
  date: '2026-05-08',
  likes: 12,
  views: 156,
  isOfficial: true,
  answer: {
    author: 'MarvelBros Advisory Team',
    date: '2026-05-08',
    content: `Hello, this is a very typical example of **"Waiting Waste"** — also the most common lean improvement entry point in the hotel industry.

## Problem Diagnosis

Your scenario exhibits three characteristics of waiting waste:
1. **Guest waiting**: Queue exceeds 5 minutes, experience damaged
2. **Staff waiting**: Front desk staff idle during non-peak hours
3. **Resource waiting**: Rooms ready but cannot be delivered promptly

## Improvement Plan

### Step 1: Data Collection (1 week)
- Record hourly check-in/check-out volumes
- Calculate average, longest, and shortest processing time per guest
- Identify the true bottleneck (registration? payment? key card production?)

### Step 2: Process Optimization (2 weeks)
1. **Pre-check-in mechanism**: Call ahead to confirm arrival time and stagger check-ins
2. **Self-check-in kiosk**: Invest in 1 kiosk to divert 30% of simple check-ins
3. **Mobile front desk**: Use tablets in the lobby during peak hours for mobile processing
4. **Parallel operations**: One staff handles registration, another handles key cards and briefing

### Step 3: Flexible Scheduling (ongoing)
- Adjust shifts based on check-in curves: 3 staff 1:00-3:00 PM, 4 staff 3:00-5:00 PM
- Cross-training: Housekeeping and concierge staff support front desk during peaks

### Step 4: Standard Work (SOP)
- Develop "Peak Hour Front Desk Operation Guide"
- Target: Simple check-in completed in 3 minutes, complex check-in in 5 minutes

## Expected Results

Based on our experience with similar hotels:
- Queue time reduced from 5 minutes to under 2 minutes
- Front desk labor cost unchanged (through flexible scheduling)
- Guest satisfaction improved by 15-20 percentage points

For a more detailed "Front Desk Lean Improvement Toolkit," leave your email in the comments and we will send it to you.`,
    tools: [
      { name: 'Front Desk Waiting Time Analysis Sheet', url: '#' },
      { name: 'Flexible Scheduling Template', url: '#' },
    ],
  },
  related: [
    { slug: 'housekeeping-defect-rate', title: 'Housekeeping inspections always miss something. How to reduce defect rate using lean methods?' },
    { slug: 'ota-commission-optimization', title: 'OTA commissions keep rising. Any lean revenue management strategies?' },
    { slug: 'staff-turnover-lean', title: 'Gen-Z staff turnover is too high. Training investment feels wasted. What to do?' },
  ],
}

export default async function QADetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const qa = qaDetail // In production, fetch from database or API

  // All English UI for international readers
  const ui = {
    back: 'Back to Lean Q&A',
    officialAnswer: 'Official Answer from MarvelBros',
    likes: 'Resonates',
    views: 'Views',
    related: 'Related Q&A',
    askQuestion: 'I have a similar question',
    bookmark: 'Bookmark',
    share: 'Share',
    tools: 'Improvement Tools',
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Question Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-0">
              {pillars.find(p => p.id === qa.pillar)?.label}
            </Badge>
            <Badge variant="secondary" className="border-0">
              {wasteTypes.find(w => w.id === qa.wasteType)?.label}
            </Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {qa.question}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {qa.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {qa.date}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {qa.likes} {ui.likes}
            </span>
            <span>{qa.views} {ui.views}</span>
          </div>
        </div>

        {/* Question Detail */}
        <div className="p-6 rounded-xl bg-card border border-border mb-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[#f59e0b] font-bold text-sm">Q</span>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {qa.questionDetail}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" className="gap-2">
            <ThumbsUp className="w-4 h-4" />
            {qa.likes} {ui.likes}
          </Button>
          <Button variant="outline" className="gap-2">
            <Bookmark className="w-4 h-4" />
            {ui.bookmark}
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            {ui.share}
          </Button>
        </div>

        {/* Official Answer */}
        {qa.isOfficial && (
          <div className="border-l-4 border-l-[#f59e0b] bg-[#f59e0b]/5 rounded-xl p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-sm px-3 py-1">
                <BadgeCheck className="w-4 h-4 mr-1" />
                {ui.officialAnswer}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {qa.answer.author} · {qa.answer.date}
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {qa.answer.content}
              </div>
            </div>

            {/* Tools */}
            {qa.answer.tools && qa.answer.tools.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#f59e0b]/20">
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
                  {ui.tools}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {qa.answer.tools.map((tool, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="text-[#f59e0b] border-[#f59e0b]/30 hover:bg-[#f59e0b]/10"
                    >
                      {tool.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Q&A */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#f59e0b]" />
            {ui.related}
          </h3>
          <div className="space-y-3">
            {qa.related.map((item, idx) => (
              <Link
                key={idx}
                href={`/${lang}/lean/qa/${item.slug}`}
                className="block p-4 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all"
              >
                <span className="text-foreground hover:text-[#f59e0b] transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/30">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Ask MarvelBros. We will respond within 48 hours with lean insights tailored to your challenge.
          </p>
          <Link href={`/${lang}/lean/ask`}>
            <Button
              size="lg"
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 rounded-xl"
            >
              {ui.askQuestion}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Static export requires generateStaticParams
export function generateStaticParams() {
  return [
    { lang: 'zh', slug: 'front-desk-waiting-5min' },
    { lang: 'en', slug: 'front-desk-waiting-5min' },
    { lang: 'zh', slug: 'housekeeping-defect-rate' },
    { lang: 'en', slug: 'housekeeping-defect-rate' },
    { lang: 'zh', slug: 'staff-turnover-lean' },
    { lang: 'en', slug: 'staff-turnover-lean' },
    { lang: 'zh', slug: 'ota-commission-optimization' },
    { lang: 'en', slug: 'ota-commission-optimization' },
    { lang: 'zh', slug: 'emotional-service-design' },
    { lang: 'en', slug: 'emotional-service-design' },
  ]
}