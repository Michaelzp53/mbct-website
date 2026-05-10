import Link from 'next/link'
import { MessageCircle, HelpCircle, ArrowRight, Clock, User, ThumbsUp, Filter, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Pillar Categories
const pillars = [
  { id: 'all', label: 'All' },
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

// Sample Q&A Data (All English for international readers)
const qaList = [
  {
    id: 1,
    slug: 'front-desk-waiting-5min',
    question: 'My hotel front desk queue often exceeds 5 minutes. Guests complain a lot. What type of waste is this and how can I improve?',
    answer: 'This is a classic example of "Waiting Waste." Recommendations: 1) Analyze peak check-in/check-out patterns and implement flexible staffing; 2) Introduce self-check-in kiosks to分流; 3) Call ahead to confirm arrival times and stagger check-ins.',
    pillar: 'guest-service',
    wasteType: 'waiting',
    author: 'Anonymous Hotel Owner',
    date: '2026-05-08',
    likes: 12,
    isOfficial: true,
  },
  {
    id: 2,
    slug: 'housekeeping-defect-rate',
    question: 'Housekeeping inspections always miss something. Guests complain about hygiene issues. How can I reduce defect rates using lean methods?',
    answer: 'Establish a "Standard Operating Procedure (SOP)" + "Checklist" double-check system. Divide rooms into 12 inspection zones, each with photo standards. New staff training starts with photo comparison.',
    pillar: 'diagnosis',
    wasteType: 'defects',
    author: 'Chain Hotel Manager',
    date: '2026-05-07',
    likes: 8,
    isOfficial: true,
  },
  {
    id: 3,
    slug: 'staff-turnover-lean',
    question: 'Gen-Z staff turnover is too high. They leave after training. It feels like all the investment is wasted. What can I do?',
    answer: 'This is "Talent Motion Waste." Three approaches: 1) Implement a mentorship program from day one to reduce onboarding anxiety; 2) Create a visible skill growth path so employees see their future; 3) Monthly "improvement proposal" mechanism to give young staff a sense of participation.',
    pillar: 'team-management',
    wasteType: 'motion',
    author: 'HR Manager',
    date: '2026-05-06',
    likes: 15,
    isOfficial: true,
  },
  {
    id: 4,
    slug: 'ota-commission-optimization',
    question: 'OTA commissions keep rising while direct booking channels struggle. Any lean revenue management strategies?',
    answer: 'Core strategy: Shift "guest touchpoints" from OTAs to private domains. Specifically: 1) During check-in, guide guests to add your WeChat business account, offer late checkout as incentive; 2) Within 3 days after departure, send "exclusive member rates"; 3) Establish a "loyal guest exclusive booking channel" with rates matching OTAs but including breakfast.',
    pillar: 'cost-optimization',
    wasteType: 'over-processing',
    author: 'Independent Hotel Owner',
    date: '2026-05-05',
    likes: 23,
    isOfficial: true,
  },
  {
    id: 5,
    slug: 'emotional-service-design',
    question: 'I want to provide human-touch service, but staff find it "fake" and guests find it "awkward." How do I design natural emotional value?',
    answer: 'Emotional value is not "acted out"—it is "designed." Three steps: 1) Identify 3 "emotional low points" in the guest journey; 2) Design "unexpected small touchpoints" at these moments; 3) Give staff an "empowerment budget" allowing them to create surprises for guests.',
    pillar: 'emotional-value',
    wasteType: 'over-processing',
    author: 'Boutique Hotel Investor',
    date: '2026-05-04',
    likes: 19,
    isOfficial: true,
  },
]

export default async function LeanPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  // For Lean Insights page: English-first for international readers
  const ui = {
    pageTitle: 'Lean Insights · Q&A',
    pageSubtitle: 'Hotel managers ask, MarvelBros answers — solving real management challenges with lean thinking',
    askButton: 'Ask MarvelBros',
    searchPlaceholder: 'Search questions...',
    filterPillar: 'Pillars',
    filterWaste: 'Waste Types',
    officialAnswer: 'Official Answer from MarvelBros',
    viewDetail: 'View Detail',
    likes: 'Resonates',
    noMore: '— More Q&A coming soon —',
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">
              MarvelBros · Lean Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {ui.pageTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {ui.pageSubtitle}
          </p>
        </div>

        {/* Ask Button */}
        <div className="text-center mb-12">
          <Link href={`/${lang}/lean/ask`}>
            <Button
              size="lg"
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 py-6 text-lg rounded-xl"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              {ui.askButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Search + Filter Bar */}
        <div className="mb-10 space-y-4">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Pillar Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground mr-1" />
            {pillars.map((pillar) => (
              <Badge
                key={pillar.id}
                variant="outline"
                className="cursor-pointer hover:bg-[#f59e0b]/10 hover:text-[#f59e0b] hover:border-[#f59e0b]/50 transition-all text-sm px-3 py-1"
              >
                {pillar.label}
              </Badge>
            ))}
          </div>

          {/* Waste Type Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {wasteTypes.map((waste) => (
              <Badge
                key={waste.id}
                variant="secondary"
                className="cursor-pointer hover:bg-[#f59e0b]/20 transition-all text-xs"
              >
                {waste.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Q&A List */}
        <div className="space-y-6">
          {qaList.map((qa) => (
            <div
              key={qa.id}
              className="rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all overflow-hidden"
            >
              {/* Question Section */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#f59e0b] font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {qa.question}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {qa.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {qa.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {qa.likes} {ui.likes}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 ml-11">
                  <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-0">
                    {pillars.find(p => p.id === qa.pillar)?.label}
                  </Badge>
                  <Badge variant="secondary" className="border-0">
                    {wasteTypes.find(w => w.id === qa.wasteType)?.label}
                  </Badge>
                </div>
              </div>

              {/* Official Answer Section */}
              {qa.isOfficial && (
                <div className="border-l-4 border-l-[#f59e0b] bg-[#f59e0b]/5 px-6 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30">
                      🏷️ {ui.officialAnswer}
                    </Badge>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {qa.answer}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/${lang}/lean/qa/${qa.slug}`}
                      className="inline-flex items-center text-sm font-medium text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors"
                    >
                      {ui.viewDetail}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More / Coming Soon */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>{ui.noMore}</p>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not finding your answer?
            </h2>
            <p className="text-muted-foreground mb-6">
              Ask MarvelBros. We will respond within 48 hours with lean insights tailored to your challenge.
            </p>
            <Link href={`/${lang}/lean/ask`}>
              <Button
                size="lg"
                className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 rounded-xl"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                {ui.askButton}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
