import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Hotel,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'

  const title = isZh ? '酒店 AI 信息平台建设与内容托管' : 'AI-Ready Hotel Information Platform & Content Operations'
  const description = isZh
      ? '迈创兄弟C&T帮助酒店建设 AI 更容易抓取的信息平台，并持续代写、上传和维护酒店内容，让酒店价值更容易被搜索、理解、引用和询价。'
      : 'MarvelBros C&T helps hotels build AI-readable information platforms, then continuously write, upload, and maintain hotel content so the hotel value is easier to search, understand, reference, and inquire about.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.marvelbros.com/${lang}/services/ai-hotel-website`,
      languages: {
        zh: 'https://www.marvelbros.com/zh/services/ai-hotel-website',
        en: 'https://www.marvelbros.com/en/services/ai-hotel-website',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      alternateLocale: isZh ? 'en_US' : 'zh_CN',
      url: `https://www.marvelbros.com/${lang}/services/ai-hotel-website`,
      siteName: isZh ? '迈创兄弟C&T（MarvelBros C&T）' : 'MarvelBros C&T',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function AiHotelWebsitePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const painPoints = isZh
    ? [
        '客人搜索酒店时，AI 可能只看到名称、地址和几张图片。',
        '很多酒店没有 IT、没有内容团队，也没有人长期维护关键词、页面和推文。',
        '如果酒店没有自己的信息承接平台，或者只有零散 OTA 页面和图片介绍，AI 很难判断该推荐给谁。',
        '问题不一定是酒店没有价值，而是价值没有变成可搜索、可理解、可询价的信息。',
      ]
    : [
        'When guests search for hotels, AI may only see a name, address, and a few images.',
        'Many hotels have no IT team, no content team, and no one continuously maintaining keywords, pages, and posts.',
        'If the hotel has no owned information platform, or only fragmented OTA pages and image-based descriptions, AI cannot easily decide who the hotel is best for.',
        'The issue is not that the hotel lacks value. The value has not been turned into searchable, understandable, and inquiry-ready information.',
      ]

  const process = [
    {
      icon: SearchCheck,
      title: isZh ? 'AI 现状体检' : 'AI Search Diagnostic',
      desc: isZh
        ? '检查 AI、地图、OTA、社交内容和已有官网里的酒店信息，形成一份“AI 是否能找到并读懂您”的诊断结论。'
        : 'Check how AI, maps, OTAs, social content, and any existing website present the hotel, then form a diagnostic view of whether AI can find and understand it.',
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '信息架构' : 'Information Architecture',
      desc: isZh
        ? '把房型、位置、会议、长住、企业客户、交通和 FAQ 重排成 AI 能抓取、客人能看懂的页面结构。'
        : 'Reorganize rooms, location, meetings, long stays, corporate clients, transport, and FAQs into a page structure AI can crawl and guests can understand.',
    },
    {
      icon: Hotel,
      title: isZh ? '平台上线' : 'Platform Launch',
      desc: isZh
        ? '搭建轻量信息平台或优化已有入口，补齐联系方式、询价表单、Schema 标记和可被引用的文字内容。'
        : 'Launch a lightweight information platform or optimize existing entry points with contact paths, inquiry forms, Schema markup, and referenceable text content.',
    },
    {
      icon: MessageSquareText,
      title: isZh ? '持续优化' : 'Ongoing Optimization',
      desc: isZh
        ? '持续代写、上传和维护酒店推文、页面内容、FAQ 和关键词表达，并观察 AI 搜索呈现和询价反馈。'
        : 'Continuously write, upload, and maintain posts, page content, FAQs, and keyword language while observing AI search appearance and inquiry feedback.',
    },
  ]

  const outcomes = isZh
    ? [
        '一份酒店 AI 信息体检与平台建设建议。',
        '一个能讲清酒店价值的自有信息承接平台。',
        '一套让 AI 和搜索更容易抓取、理解和引用酒店的信息结构。',
        '房型、会议、长住、企业客户和本地体验等重点页面。',
        '更清晰的咨询、询价、微信或电话联系入口。',
        '后续推文代写、页面更新、关键词维护和效果观察建议。',
      ]
    : [
        'An AI information audit and platform build recommendation.',
        'An owned information platform that explains the hotel’s value clearly.',
        'An information structure that helps AI and search systems crawl, understand, and reference the hotel more easily.',
        'Focused pages for rooms, meetings, long stays, corporate clients, and local experience.',
        'Clearer inquiry, consultation, WeChat, or phone contact paths.',
        'Recommendations for ongoing post writing, page updates, keyword maintenance, and performance observation.',
      ]

  const proofItems = isZh
    ? [
        '体检报告会列出：AI 能否找到酒店、找到的是哪些信息、哪些信息缺失或互相冲突。',
        '平台上线后会保留：页面结构、关键词、Schema 标记、FAQ 和询价入口，方便后续复查。',
        '内容托管会记录：更新了哪些页面、发布了哪些推文、围绕哪些关键词持续补充内容。',
      ]
    : [
        'The diagnostic report identifies whether AI can find the hotel, what information it sees, and what is missing or conflicting.',
        'After launch, we retain the page structure, keywords, Schema markup, FAQs, and inquiry paths for later review.',
        'Content operations track which pages were updated, which posts were published, and which keywords were continuously reinforced.',
      ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.marvelbros.com/${lang}/services/ai-hotel-website#service`,
    name: isZh ? '酒店 AI 信息平台建设与内容托管' : 'AI-Ready Hotel Information Platform & Content Operations',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.marvelbros.com/#organization',
      name: 'MarvelBros C&T',
      alternateName: '迈创兄弟C&T',
    },
    areaServed: ['Mainland China', 'Hong Kong', 'Southeast Asia'],
    serviceType: isZh
      ? ['酒店 AI 信息体检', 'AI 搜索可见度', '酒店信息平台建设', '酒店内容托管运营']
      : ['Hotel AI information audit', 'AI search visibility', 'Hotel information platform build', 'Hotel content operations'],
    description: isZh
      ? '帮助酒店建设 AI 更容易抓取的信息平台，并持续代写、上传和维护酒店内容，让酒店价值更容易被搜索、理解、引用和询价。'
      : 'A service that helps hotels build AI-readable information platforms and continuously write, upload, and maintain content so hotel value is easier to search, understand, reference, and inquire about.',
  }

  return (
    <>
      <Script
        id={`ai-hotel-website-json-ld-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#fff8ec] text-[#17120d] dark:bg-[#17120d] dark:text-white">
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div className="absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/10" />
            <div className="absolute right-[-10rem] top-24 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl dark:bg-emerald-500/10" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm dark:border-amber-400/20 dark:bg-white/5 dark:text-amber-300">
                <Sparkles className="h-4 w-4" />
                {isZh ? '酒店 AI 信息平台建设与内容托管' : 'AI-ready hotel information platform and content operations'}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                {isZh ? '您的酒店值得被 AI 推荐，也值得被客人选择' : 'Your hotel deserves to be understood by AI and chosen by the right guests'}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#5b4631] md:text-xl dark:text-slate-300">
                {isZh
                  ? '很多酒店没有 IT 团队，也没有人持续维护网站、页面、推文和 AI 关键词。我们帮助酒店搭建 AI 更容易抓取的信息平台，并长期代写、上传和维护内容。已有官网可以优化，没有官网也可以从轻量平台开始。'
                  : 'Many hotels have no IT team and no one continuously maintaining websites, pages, posts, and AI keywords. We help hotels build an AI-readable information platform and provide ongoing content writing, uploading, and maintenance. Existing websites can be optimized; hotels without one can start with a lightweight platform.'}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${lang}/contact?type=ai-info-platform`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17120d] px-6 py-3 text-sm font-semibold text-[#fff8ec] shadow-lg shadow-amber-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-amber-400 dark:text-[#17120d]"
                >
                  {isZh ? '获取我的酒店 AI 信息平台建议' : 'Request AI information platform recommendations'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center justify-center rounded-xl border border-amber-700/30 bg-white/60 px-6 py-3 text-sm font-semibold text-[#5b4631] transition-colors hover:border-amber-700 hover:text-[#17120d] dark:border-amber-400/25 dark:bg-white/5 dark:text-amber-200 dark:hover:text-white"
                >
                  {isZh ? '了解我们怎么做' : 'See how we work'}
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-6 shadow-xl shadow-amber-900/10 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '核心判断' : 'Core judgment'}
              </p>
              <blockquote className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
                {isZh
                  ? '酒店不是缺少价值，而是缺少一个让 AI 和客人都看得懂的表达方式。'
                  : 'Many hotels do not lack value. They lack a way for AI systems and guests to understand that value clearly.'}
              </blockquote>
              <div className="mt-8 grid gap-3">
                {(isZh
                  ? ['不制造渠道对立', '不夸大算法承诺', '平台建设与内容托管一起做']
                  : ['No channel confrontation', 'No exaggerated algorithm promises', 'Platform build and content operations together']).map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f7f1e6] px-4 py-3 text-sm text-[#5b4631] dark:bg-white/5 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '痛点' : 'The problem'}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {isZh ? '很多酒店不是不优秀，而是没有被正确理解' : 'Many hotels are not weak. They are simply not understood correctly.'}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {painPoints.map((item) => (
                <div key={item} className="rounded-3xl border border-[#eadbc4] bg-[#fff8ec] p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
                    <p className="leading-relaxed text-[#5b4631] dark:text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-sm md:p-10 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '共情' : 'Why this matters'}
              </p>
              <div className="space-y-5 text-lg leading-relaxed text-[#5b4631] dark:text-slate-300">
                <p>
                  {isZh
                    ? '我们见过太多这样的酒店：位置好、服务好、客户口碑好，但没有官网，或者只有几年没人维护的页面。'
                    : 'We have seen many hotels like this: good location, solid service, strong guest reputation, but no website, or only pages that have not been maintained for years.'}
                </p>
                <p>
                  {isZh
                    ? '这不是酒店老板的错，是客人找酒店的方式变了。AI 搜索、地图搜索和移动端浏览正在成为新的入口，而很多酒店没有人帮他们写内容、上内容、改关键词、维护页面。'
                    : 'This is not the owner’s fault. The way guests find hotels has changed. AI search, map search, and mobile browsing are becoming new entry points, while many hotels have no one to write content, upload content, refine keywords, or maintain pages.'}
                </p>
                <p className="font-semibold text-[#17120d] dark:text-white">
                  {isZh
                    ? '迈创兄弟C&T 做的，就是帮这些好酒店重新被看见、被理解、被选择。'
                    : 'MarvelBros C&T helps good hotels become visible, understandable, and easier to choose.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-16 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '我们怎么做' : 'How we work'}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {isZh ? '先体检信息，再建设平台，然后持续代运营内容' : 'Audit the information, build the platform, then operate the content continuously'}
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-3xl border border-[#eadbc4] bg-[#fff8ec] p-6 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-amber-700/70 dark:text-amber-300/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6f5a42] dark:text-slate-300">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-sm md:p-10 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '交付证据' : 'Evidence of work'}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {isZh ? '我们不编造 AI 推荐结果，只留下可复查的体检和维护记录' : 'We do not invent AI recommendation results. We leave auditable diagnostics and maintenance records.'}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {proofItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#eadbc4] bg-[#fff8ec] p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    <CheckCircle2 className="mb-4 h-5 w-5 text-amber-700 dark:text-amber-300" />
                    <p className="text-sm leading-relaxed text-[#5b4631] dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '您将得到' : 'What you receive'}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {isZh ? '不只做一个页面。长期维护酒店在 AI 世界里的信息资产。' : 'Not just a page. Long-term maintenance of the hotel’s information assets in the AI world.'}
              </h2>
            </div>
            <div className="grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.05]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
                  <span className="leading-relaxed text-[#5b4631] dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17120d] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                {isZh ? '我们承诺把酒店信息整理得更清楚，但不夸大 AI 推荐结果' : 'We make the hotel clearer to understand, without exaggerating algorithm outcomes'}
              </h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                {isZh
                  ? '我们能帮助酒店把自身价值整理成 AI 和客人更容易理解的信息结构，并持续维护可被搜索、可被引用、可被询价的内容资产。AI 是否推荐、推荐给谁、何时推荐，仍由搜索平台和 AI 系统自身规则决定。我们不承诺控制算法，但会帮助酒店把“更容易被理解、也更值得被推荐”的基础做好。'
                  : 'We help hotels turn their value into an information structure that AI systems and guests can understand more easily, and continuously maintain content assets that can be searched, referenced, and used for inquiries. Whether, when, and to whom AI recommends a hotel is still determined by search platforms and AI systems. We do not claim to control algorithms. We help hotels build the foundation that makes them easier to understand and more worthy of recommendation.'}
              </p>
            </div>
            <div className="rounded-[2rem] border border-amber-200/70 bg-[#fff8ec] p-8 text-[#17120d] shadow-xl shadow-black/10 dark:border-amber-200/70 dark:bg-[#fff8ec] dark:text-[#17120d]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-700">
                {isZh ? '下一步' : 'Next step'}
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                {isZh ? '想知道 AI 是否能抓到并理解您的酒店信息？' : 'Want to know whether AI can find and understand your hotel information?'}
              </h2>
              <p className="mt-5 leading-relaxed text-[#5b4631] dark:text-[#5b4631]">
                {isZh
                  ? '可以先从一次 AI 信息体检开始。告诉我们酒店名称、所在城市、是否已有官网、主要依赖哪些平台，以及是否需要我们代写和维护内容，我们会判断它是否具备 AI 搜索时代的信息承接能力。'
                  : 'Start with an AI information audit. Tell us the hotel name, city, whether it has a website, which platforms it depends on, and whether you need us to write and maintain content. We will assess whether it has the information readiness needed in the age of AI search.'}
              </p>
              <Link
                href={`/${lang}/contact?type=ai-info-platform`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#17120d] px-6 py-3 text-sm font-semibold text-[#fff8ec] shadow-lg shadow-amber-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                {isZh ? '获取我的酒店 AI 信息平台建议' : 'Request AI information platform recommendations'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
