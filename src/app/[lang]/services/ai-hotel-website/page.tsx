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

  return {
    title: isZh ? '酒店 AI 官网体检与改造' : 'AI-Ready Hotel Website Audit & Upgrade',
    description: isZh
      ? '迈创兄弟C&T帮助酒店检查官网是否被 AI 正确理解，并把酒店价值整理成客人愿意看、愿意询价、愿意继续了解的专属官网入口。'
      : 'MarvelBros C&T helps hotels assess whether their websites can be understood by AI systems, then upgrade the content and inquiry path into a clearer owned entry point.',
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
        '商务出差、会议接待、长住服务、亲子度假、本地体验等优势，常常没有被清楚表达。',
        '官网如果仍停留在展示页，客人看不清价值，AI 也很难判断该推荐给谁。',
        '问题不一定是酒店没有价值，而是价值没有变成可搜索、可理解、可询价的信息。',
      ]
    : [
        'When guests search for hotels, AI may only see a name, address, and a few images.',
        'Business travel, meetings, long stays, family travel, local experiences, and service strengths are often not expressed clearly enough.',
        'If the website is still a static brochure, guests cannot see the value and AI cannot easily decide who the hotel is best for.',
        'The issue is not that the hotel lacks value. The value has not been turned into searchable, understandable, and inquiry-ready information.',
      ]

  const process = [
    {
      icon: SearchCheck,
      title: isZh ? '官网体检' : 'Website Audit',
      desc: isZh
        ? '检查酒店在 AI 搜索、地图搜索和官网中的呈现方式，判断 AI 和客人能否准确理解酒店适合谁、优势是什么。'
        : 'Review how the hotel appears in AI search, map search, and its own website, then determine whether AI and guests can understand who it is for and what makes it valuable.',
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '方案沟通' : 'Plan Discussion',
      desc: isZh
        ? '与酒店管理者一起看体检结果，区分必须先改、可以后改和暂时不必改的内容，避免为改造而改造。'
        : 'Review the audit with the hotel team, separate urgent changes from later improvements, and avoid upgrading for the sake of upgrading.',
    },
    {
      icon: Hotel,
      title: isZh ? '官网改造' : 'Website Upgrade',
      desc: isZh
        ? '根据酒店真实业务，建立房型、位置交通、会议长住、企业客户、本地体验、FAQ 和联系入口等页面。'
        : 'Build pages around the hotel’s real business: rooms, location, meetings, long stays, corporate clients, local experience, FAQs, and contact paths.',
    },
    {
      icon: MessageSquareText,
      title: isZh ? '效果跟踪' : 'Effect Tracking',
      desc: isZh
        ? '上线后持续观察 AI 搜索呈现、官网访问、询价入口和客户反馈，逐步优化内容和承接路径。'
        : 'After launch, monitor AI search appearance, website visits, inquiry paths, and client feedback, then refine the content and conversion flow over time.',
    },
  ]

  const outcomes = isZh
    ? [
        '一份酒店 AI 官网体检与改造建议。',
        '一个能讲清酒店价值的专属官网结构。',
        '一套让 AI 和搜索更容易理解酒店的信息呈现方式。',
        '房型、会议、长住、企业客户和本地体验等重点页面。',
        '更清晰的咨询、询价和联系入口。',
        '后续内容优化和效果观察建议。',
      ]
    : [
        'An AI-ready hotel website audit and upgrade recommendation.',
        'A website structure that explains the hotel’s value clearly.',
        'An information architecture that helps AI and search systems understand the hotel more easily.',
        'Focused pages for rooms, meetings, long stays, corporate clients, and local experience.',
        'Clearer inquiry, consultation, and contact paths.',
        'Ongoing content optimization and performance observation recommendations.',
      ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.marvelbros.com/${lang}/services/ai-hotel-website#service`,
    name: isZh ? '酒店 AI 官网体检与改造' : 'AI-Ready Hotel Website Audit & Upgrade',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.marvelbros.com/#organization',
      name: 'MarvelBros C&T',
      alternateName: '迈创兄弟C&T',
    },
    areaServed: ['Mainland China', 'Hong Kong', 'Southeast Asia'],
    serviceType: isZh
      ? ['酒店官网体检', 'AI 搜索可见度', '酒店官网改造', '酒店数字化增长']
      : ['Hotel website audit', 'AI search visibility', 'Hotel website upgrade', 'Hotel digital growth'],
    description: isZh
      ? '帮助酒店检查官网是否被 AI 正确理解，并把酒店价值整理成客人愿意看、愿意询价、愿意继续了解的专属官网入口。'
      : 'A service that helps hotels assess whether their website can be understood by AI systems, then upgrade the structure, content, and inquiry paths into a clearer owned entry point.',
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
                {isZh ? '酒店 AI 官网体检与改造' : 'AI-ready hotel website audit'}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                {isZh ? '您的酒店值得被 AI 推荐，也值得被客人选择' : 'Your hotel deserves to be understood by AI and chosen by the right guests'}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#5b4631] md:text-xl dark:text-slate-300">
                {isZh
                  ? '我们帮助酒店检查官网是否被 AI 正确理解，并把酒店价值整理成客人愿意看、愿意询价、愿意继续了解的专属官网入口。'
                  : 'We help hotels assess whether their websites are understood correctly by AI systems, then turn hotel value into an owned website entry point guests can read, trust, and act on.'}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${lang}/contact?type=ai-website-audit`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17120d] px-6 py-3 text-sm font-semibold text-[#fff8ec] shadow-lg shadow-amber-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-amber-400 dark:text-[#17120d]"
                >
                  {isZh ? '获取我的酒店 AI 官网体检方案' : 'Request an AI website audit plan'}
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
                  ? ['不制造渠道对立', '不夸大算法承诺', '先体检，再判断是否改造']
                  : ['No channel confrontation', 'No exaggerated algorithm promises', 'Audit first, then decide whether to upgrade']).map((item) => (
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
                    ? '我们见过太多这样的酒店：位置好、服务好、客户口碑好，但官网仍像五年前的展示页。'
                    : 'We have seen many hotels like this: good location, solid service, strong guest reputation, but a website that still feels like a brochure from five years ago.'}
                </p>
                <p>
                  {isZh
                    ? '这不是酒店老板的错，是客人找酒店的方式变了。AI 搜索、地图搜索和移动端浏览正在成为新的入口，而很多酒店还没有专业团队帮他们把信息整理成 AI 和客人都看得懂的方式。'
                    : 'This is not the owner’s fault. The way guests find hotels has changed. AI search, map search, and mobile browsing are becoming new entry points, while many hotels have not had a professional team organize their information for this environment.'}
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
                {isZh ? '先体检，再沟通方案，最后判断是否需要改造' : 'Audit first, discuss the plan, then decide whether an upgrade is needed'}
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
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {isZh ? '您将得到' : 'What you receive'}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {isZh ? '不是一个普通网站，而是一套更清楚的线上表达系统' : 'Not a generic website, but a clearer online expression system'}
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
                  ? '我们能帮助酒店把自身价值整理成 AI 和客人更容易理解的信息结构，并提升官网作为自有入口的承接能力。AI 是否推荐、推荐给谁、何时推荐，仍由搜索平台和 AI 系统自身规则决定。我们不承诺控制算法，但会帮助酒店把“值得被推荐”的基础做好。'
                  : 'We help hotels turn their value into an information structure that AI systems and guests can understand more easily, while strengthening the website as an owned entry point. Whether, when, and to whom AI recommends a hotel is still determined by search platforms and AI systems. We do not claim to control algorithms. We help hotels build the foundation that makes them easier to understand and more worthy of recommendation.'}
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#fff8ec] p-8 text-[#17120d]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                {isZh ? '下一步' : 'Next step'}
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                {isZh ? '想知道您的酒店官网是否被 AI 正确理解？' : 'Want to know whether AI understands your hotel website correctly?'}
              </h2>
              <p className="mt-5 leading-relaxed text-[#5b4631]">
                {isZh
                  ? '可以先从一次官网体检开始。告诉我们酒店名称、所在城市和目前官网情况，我们会判断它是否具备 AI 搜索时代的基本承接能力。'
                  : 'Start with a website audit. Tell us the hotel name, city, and current website situation, and we will help assess whether it has the basic readiness needed in the age of AI search.'}
              </p>
              <Link
                href={`/${lang}/contact?type=ai-website-audit`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#17120d] px-6 py-3 text-sm font-semibold text-[#fff8ec] shadow-lg shadow-amber-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                {isZh ? '获取我的酒店 AI 官网体检方案' : 'Request an AI website audit plan'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
