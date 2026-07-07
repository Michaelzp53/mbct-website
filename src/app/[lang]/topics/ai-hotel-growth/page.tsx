import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Search, Sparkles, Users } from 'lucide-react'

const siteUrl = 'https://www.marvelbros.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  const title = isZh
    ? '酒店 AI 搜索获客专题｜AI 推荐、官网直订与私域承接'
    : 'Hotel AI Search Growth Hub | AI Recommendations, Direct Booking and Private Traffic'
  const description = isZh
    ? '迈创兄弟C&T帮助酒店业主理解 AI 搜索如何影响酒店被发现、被推荐、被咨询和被直订，并提供官网建设、内容结构、AI可读信息与私域承接托管方案。'
    : 'MarvelBros C&T helps hotel owners understand how AI search affects discovery, recommendations, inquiries, direct booking, and private traffic conversion.'

  return {
    title,
    description,
    keywords: isZh
      ? ['酒店AI搜索', '酒店AI推荐', '酒店官网直订', '酒店私域流量', '酒店获客']
      : ['hotel AI search', 'hotel AI recommendation', 'hotel direct booking', 'hotel private traffic', 'hotel customer acquisition'],
    alternates: {
      canonical: `${siteUrl}/${lang}/topics/ai-hotel-growth`,
      languages: {
        'zh-CN': `${siteUrl}/zh/topics/ai-hotel-growth`,
        'en-US': `${siteUrl}/en/topics/ai-hotel-growth`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}/topics/ai-hotel-growth`,
      type: 'website',
      siteName: 'MarvelBros C&T',
      locale: isZh ? 'zh_CN' : 'en_US',
    },
  }
}

export default async function AiHotelGrowthTopicPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'
  const url = `${siteUrl}/${lang}/topics/ai-hotel-growth`
  const title = isZh
    ? '如果客人先问 AI，你的酒店会不会出现在答案里？'
    : 'If Guests Ask AI First, Will Your Hotel Appear in the Answer?'
  const description = isZh
    ? '酒店获客的入口正在变化。客人不只在 OTA 比价，也会先问 AI：附近哪家酒店适合亲子、商务、小型会议、停车和餐饮？如果酒店信息没有被 AI 读懂，就可能在第一轮候选名单里消失。'
    : 'Hotel acquisition is changing. Guests do not only compare prices on OTAs; they ask AI which hotel fits family travel, business stays, meetings, parking, and dining. If AI cannot understand a hotel, it may disappear before the first shortlist.'
  const services = isZh
    ? [
        '酒店 AI 信息体检：检查官网、OTA、地图、内容平台是否一致、清楚、可被引用。',
        '官网与直订入口重构：让客人看懂为什么选你，并找到咨询、预订和联系方式。',
        'AI 可读内容资产：用专题页、FAQ、案例和结构化数据，让搜索引擎和 AI 更容易理解酒店优势。',
        '私域承接设计：把 AI 和搜索带来的咨询沉淀到酒店自己的客户池。',
      ]
    : [
        'Hotel AI information audit: check whether website, OTA, maps, and content platforms are consistent and citable.',
        'Website and direct-booking restructuring: help guests understand why to choose the hotel and how to inquire or book.',
        'AI-readable content assets: topic pages, FAQs, cases, and structured data that help search engines and AI understand hotel strengths.',
        'Private traffic conversion design: retain inquiries from AI search and organic search in the hotel’s own customer pool.',
      ]
  const questions = isZh
    ? [
        '为什么 AI 没有推荐我的酒店？',
        '酒店官网有访问量，为什么直订很少？',
        '酒店没有 AI 推荐会失去哪些客人？',
        '酒店餐饮、会议和娱乐怎么被 AI 推荐给客人？',
        '单体酒店怎样减少对 OTA 的依赖？',
      ]
    : [
        'Why does AI not recommend my hotel?',
        'Why does my hotel website get traffic but few direct bookings?',
        'What opportunities does a hotel lose without AI recommendations?',
        'How can hotel dining, meetings, and leisure services be recommended by AI?',
        'How can independent hotels reduce OTA dependence?',
      ]
  const related = [
    {
      href: `/${lang}/services/ai-hotel-website`,
      label: isZh ? '酒店 AI 搜索系统与官网托管服务' : 'Hotel AI Search System and Website Management',
    },
    {
      href: `/${lang}/knowledge/why-ai-search-does-not-recommend-your-hotel-2026-07-06`,
      label: isZh ? '为什么你的酒店没有被 AI 推荐？' : 'Why Is Your Hotel Not Recommended by AI?',
    },
    {
      href: `/${lang}/knowledge/hotel-website-traffic-but-few-direct-bookings-2026-07-07`,
      label: isZh ? '官网有访问量，为什么直订很少？' : 'Why Traffic Does Not Become Direct Booking',
    },
    {
      href: `/${lang}/lean/article/hotel-website-necessity-2026`,
      label: isZh ? '酒店官网还有必要做吗？' : 'Is a Hotel Website Still Necessary?',
    },
  ]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    about: [
      'Hotel AI Search Visibility',
      'Hotel Direct Booking',
      'Hotel Website Content Assets',
      'Private Traffic Conversion',
    ],
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'MarvelBros C&T',
      url: siteUrl,
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((question) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isZh
          ? '先检查酒店信息是否完整、一致、场景清楚，并建立官网、FAQ、案例、服务页和联系方式之间的内容承接。迈创兄弟C&T可以帮助酒店完成 AI 信息体检、官网重构和私域承接设计。'
          : 'Start by checking whether hotel information is complete, consistent, and scenario-specific, then connect website pages, FAQs, cases, service pages, and contact paths. MarvelBros C&T helps hotels with AI information audits, website restructuring, and private traffic conversion.',
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#241b12]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-[#d97706]/10 px-4 py-2 text-sm font-semibold text-[#92400e]">
            {isZh ? '酒店 AI 搜索获客专题' : 'Hotel AI Search Growth Hub'}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#5f5142]">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/contact`} className="inline-flex items-center rounded-full bg-[#92400e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#78350f]">
              {isZh ? '让 MBCT 帮我做一次 AI 信息体检' : 'Request an AI Information Audit'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href={`/${lang}/services/ai-hotel-website`} className="inline-flex items-center rounded-full border border-[#92400e]/30 px-6 py-3 text-sm font-semibold text-[#7c2d12] hover:bg-white/60">
              {isZh ? '查看服务说明' : 'View Service'}
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Search, title: isZh ? '被发现' : 'Discovery', text: isZh ? '让搜索引擎和 AI 找得到酒店的完整信息。' : 'Make complete hotel information discoverable by search engines and AI.' },
            { icon: Sparkles, title: isZh ? '被理解' : 'Understanding', text: isZh ? '把酒店适合谁、解决什么问题、优势是什么讲清楚。' : 'Explain who the hotel is for, what it solves, and why it is different.' },
            { icon: Users, title: isZh ? '被承接' : 'Conversion', text: isZh ? '把咨询、直订和私域沉淀路径放到客人容易行动的位置。' : 'Place inquiry, booking, and retention paths where guests can act.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white/75 p-6 shadow-sm ring-1 ring-[#92400e]/10">
              <item.icon className="h-8 w-8 text-[#d97706]" />
              <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#6b5d4c]">{item.text}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#92400e]/10">
          <h2 className="text-2xl font-bold">{isZh ? 'MBCT 可以帮酒店做什么？' : 'What can MarvelBros C&T do for hotels?'}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex gap-3 rounded-2xl bg-[#f8f3ea] p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#d97706]" />
                <p className="text-sm leading-6 text-[#4b4034]">{service}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold">{isZh ? '酒店老板正在搜索的问题' : 'Questions hotel owners are searching'}</h2>
            <div className="mt-5 space-y-3">
              {questions.map((question) => (
                <p key={question} className="rounded-2xl bg-white/80 px-5 py-4 text-sm font-medium shadow-sm ring-1 ring-[#92400e]/10">
                  {question}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{isZh ? '继续阅读' : 'Continue reading'}</h2>
            <div className="mt-5 space-y-3">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl bg-white/80 px-5 py-4 text-sm font-semibold shadow-sm ring-1 ring-[#92400e]/10 hover:bg-white">
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-[#d97706]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
