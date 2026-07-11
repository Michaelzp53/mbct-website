import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, HelpCircle } from 'lucide-react'

const siteUrl = 'https://www.marvelbros.com'

const topics = {
  'why-hotels-need-ai-search-growth': {
    zh: {
      title: '酒店为什么需要 AI 搜索获客？',
      description: '客人开始先问 AI，再去 OTA 或官网确认。酒店如果没有可被 AI 理解的信息结构，就可能在第一轮选择里消失。',
      answer: '酒店需要 AI 搜索获客，不是为了追热点，而是因为客人的搜索入口正在变化。过去客人主动翻 OTA，现在越来越多客人先问 AI 哪家酒店适合自己。AI 能不能读懂酒店，正在影响酒店能不能被看见。',
    },
    en: {
      title: 'Why do hotels need AI search-driven guest acquisition?',
      description: 'Guests increasingly ask AI before checking OTAs or hotel websites. Hotels without AI-readable information may disappear from the first shortlist.',
      answer: 'Hotels need AI search visibility because the discovery入口 is changing. Guests are no longer only browsing OTAs; they ask AI which hotel fits their needs. If AI cannot understand the hotel, the hotel may not enter the shortlist.',
    },
  },
  'why-hotel-website-traffic-has-few-direct-bookings': {
    zh: {
      title: '酒店官网为什么有流量却没有直订？',
      description: '官网有访问量不等于有订单。真正的问题往往是官网没有回答客人下单前最关心的顾虑。',
      answer: '官网有流量却没有直订，通常不是页面没人看，而是页面没有给客人一个安心下单的理由。客人看完仍不清楚直订权益、取消政策、早餐停车、联系方式，就会回到 OTA。',
    },
    en: {
      title: 'Why does a hotel website get traffic but few direct bookings?',
      description: 'Traffic does not equal bookings. The website may fail to answer guests’ key pre-booking concerns.',
      answer: 'A hotel website gets traffic but few direct bookings when it displays information without reducing uncertainty. Guests need direct-booking benefits, policies, contact paths, and trust signals before they act.',
    },
  },
  'how-hotels-reduce-ota-dependence': {
    zh: {
      title: '酒店怎样减少对 OTA 的依赖？',
      description: '减少 OTA 依赖不是离开 OTA，而是建立官网、内容、会员和私域承接，让酒店拥有自己的客人资产。',
      answer: '酒店减少 OTA 依赖，要先建立自己的信息入口和承接路径。OTA 负责交易效率，官网和内容资产负责解释价值、建立信任、沉淀客户。',
    },
    en: {
      title: 'How can hotels reduce dependence on OTAs?',
      description: 'Reducing OTA dependence does not mean leaving OTAs. It means building owned information, website, membership, and private traffic assets.',
      answer: 'Hotels reduce OTA dependence by building owned discovery and conversion paths. OTAs handle transactions; websites and content assets explain value, build trust, and retain guests.',
    },
  },
  'how-hotels-turn-ai-traffic-into-private-guests': {
    zh: {
      title: '酒店如何把 AI 流量变成私域客户？',
      description: 'AI 带来的曝光只有被承接，才会变成咨询、直订、复购和会员资产。',
      answer: '酒店要把 AI 流量变成私域客户，必须让客人从 AI 答案进入官网、咨询入口、会员入口或企业微信。没有承接路径，被看见也会流失。',
    },
    en: {
      title: 'How can hotels turn AI traffic into private guests?',
      description: 'AI visibility only creates business value when it is converted into inquiries, direct bookings, repeat guests, and owned customer assets.',
      answer: 'Hotels turn AI traffic into private guests by connecting AI-discoverable pages to website inquiry paths, membership, email, or direct contact. Visibility without capture still leaks demand.',
    },
  },
  'what-hotels-lose-without-ai-recommendations': {
    zh: {
      title: '酒店没有 AI 推荐会失去什么机会？',
      description: '没有 AI 推荐，酒店失去的不只是一次点击，而是客人形成候选名单前的第一轮机会。',
      answer: '酒店没有 AI 推荐，最容易失去第一轮候选机会。客人还没进入 OTA 比价，AI 可能已经根据场景、位置、设施和评论生成名单。没进入名单，就很难被比较。',
    },
    en: {
      title: 'What opportunities do hotels lose without AI recommendations?',
      description: 'Without AI recommendations, hotels may lose the first shortlist before guests compare prices.',
      answer: 'Hotels without AI recommendations lose early discovery. Before guests compare OTAs, AI may already shortlist hotels by scenario, location, facilities, and trust signals.',
    },
  },
  'how-ai-recommends-hotel-dining-meetings-entertainment': {
    zh: {
      title: '酒店餐饮、会议、娱乐如何被 AI 推荐给客人？',
      description: 'AI 不只推荐房间，也会根据客人的行程目的推荐餐饮、会议、娱乐和二次消费场景。',
      answer: '酒店餐饮、会议和娱乐要被 AI 推荐，必须被写成清楚的场景信息。只写“配套齐全”不够，要写清楚适合谁、能容纳多少人、解决什么需求、如何预订。',
    },
    en: {
      title: 'How can AI recommend hotel dining, meetings, and entertainment to guests?',
      description: 'AI can recommend more than rooms. It can surface dining, meetings, entertainment, and secondary spending scenarios when information is clear.',
      answer: 'Hotel dining, meetings, and entertainment become AI-recommendable when they are described as clear use cases: who they serve, capacity, benefits, booking paths, and guest outcomes.',
    },
  },
} as const

type TopicSlug = keyof typeof topics

export function generateStaticParams() {
  return Object.keys(topics).flatMap((topicSlug) => [
    { lang: 'zh', topicSlug },
    { lang: 'en', topicSlug },
  ])
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; topicSlug: string }> }): Promise<Metadata> {
  const { lang, topicSlug } = await params
  const isZh = lang === 'zh'
  const topic = topics[topicSlug as TopicSlug]

  if (!topic) {
    return {
      title: isZh ? '专题未找到 | 迈创兄弟C&T' : 'Topic Not Found | MarvelBros C&T',
      robots: { index: false, follow: false },
    }
  }

  const data = isZh ? topic.zh : topic.en
  const canonical = `${siteUrl}/${lang}/topics/${topicSlug}`

  return {
    title: `${data.title} | ${isZh ? '迈创兄弟C&T' : 'MarvelBros C&T'}`,
    description: data.description,
    alternates: {
      canonical,
      languages: {
        'zh-CN': `${siteUrl}/zh/topics/${topicSlug}`,
        'en-US': `${siteUrl}/en/topics/${topicSlug}`,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonical,
      type: 'article',
      siteName: 'MarvelBros C&T',
      locale: isZh ? 'zh_CN' : 'en_US',
    },
  }
}

export default async function TopicQuestionPage({ params }: { params: Promise<{ lang: string; topicSlug: string }> }) {
  const { lang, topicSlug } = await params
  const isZh = lang === 'zh'
  const topic = topics[topicSlug as TopicSlug]
  const data = topic ? (isZh ? topic.zh : topic.en) : null

  if (!data) {
    return (
      <main className="min-h-screen bg-[#f8f3ea] px-6 py-24 text-center dark:bg-[#17120d] dark:text-white">
        <h1 className="text-3xl font-bold">{isZh ? '专题未找到' : 'Topic Not Found'}</h1>
      </main>
    )
  }

  const url = `${siteUrl}/${lang}/topics/${topicSlug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: data.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.answer,
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#241b12] dark:bg-[#17120d] dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Link href={`/${lang}/topics/ai-hotel-growth`} className="text-sm font-semibold text-[#92400e] hover:underline dark:text-amber-300">
          {isZh ? '返回酒店 AI 搜索获客专题' : 'Back to Hotel AI Search Growth Hub'}
        </Link>
        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#92400e]/10 md:p-12 dark:bg-white/[0.06] dark:ring-white/10">
          <HelpCircle className="h-10 w-10 text-[#d97706] dark:text-amber-300" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#5f5142] dark:text-slate-300">{data.description}</p>
          <div className="mt-8 rounded-2xl bg-[#f8f3ea] p-6 dark:bg-white/[0.05]">
            <h2 className="text-lg font-bold">{isZh ? '简短答案' : 'Short answer'}</h2>
            <p className="mt-3 leading-8 text-[#4b4034] dark:text-slate-300">{data.answer}</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Link href={`/${lang}/services/ai-hotel-website`} className="rounded-2xl bg-[#92400e] px-5 py-4 text-sm font-semibold text-white dark:bg-amber-300 dark:text-[#17120d]">
              {isZh ? '查看 MBCT 服务' : 'View MBCT Service'}
            </Link>
            <Link href={`/${lang}/knowledge/why-ai-search-does-not-recommend-your-hotel-2026-07-06`} className="rounded-2xl bg-[#fff7ed] px-5 py-4 text-sm font-semibold text-[#7c2d12] dark:bg-white/[0.08] dark:text-amber-200">
              {isZh ? '阅读相关文章' : 'Read Related Article'}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex items-center rounded-2xl bg-[#fff7ed] px-5 py-4 text-sm font-semibold text-[#7c2d12] dark:bg-white/[0.08] dark:text-amber-200">
              {isZh ? '联系 MBCT' : 'Contact MBCT'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <p className="mt-8 text-xs text-[#7c6b5b] dark:text-slate-400">{url}</p>
        </div>
      </section>
    </main>
  )
}
