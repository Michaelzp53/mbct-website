import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  LineChart,
  SearchCheck,
  Users,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  const title = isZh ? '关于我们｜谁在帮助酒店看清问题并推动结果？' : 'About Us | Who Helps Hotels Turn Problems into Results?'
  const description = isZh
    ? '了解迈创兄弟C&T五位酒店咨询专家的专业分工、30多年实战经验、协作方式、优先服务方向与项目成果。'
    : 'Meet the five hospitality consulting specialists behind MarvelBros C&T, grounded in more than 30 years of practical experience, collaborative delivery, and project results.'
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.marvelbros.com/${lang}/about`,
      languages: { zh: 'https://www.marvelbros.com/zh/about', en: 'https://www.marvelbros.com/en/about' },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const disciplines = [
    {
      icon: Compass,
      title: isZh ? '资深品牌策划 / 创始人' : 'Senior Brand Strategist / Founder',
      scope: isZh ? '负责公司专业方向、酒店品牌定位、价值主张与跨专业决策整合。' : 'Leads the firm’s professional direction, hotel positioning, value proposition, and cross-disciplinary decisions.',
      strength: isZh ? '突出优势：从业主目标和市场机会出发，统一品牌表达、产品逻辑与经营结果。' : 'Key strength: aligning brand expression, product logic, and operating outcomes around owner goals and market opportunity.',
    },
    {
      icon: LineChart,
      title: isZh ? '资深酒店运营专家' : 'Senior Hotel Operations Specialist',
      scope: isZh ? '负责经营诊断、收益与成本、服务质量、组织机制和改善落地。' : 'Covers operational diagnosis, revenue and cost, service quality, organization, and implementation.',
      strength: isZh ? '突出优势：穿透表面经营数据，找到收入质量、成本结构和执行机制中的真正瓶颈。' : 'Key strength: looking through headline metrics to find the real constraint in revenue quality, cost structure, and execution.',
    },
    {
      icon: Building2,
      title: isZh ? '资深酒店投资策划专家' : 'Senior Hotel Investment Planning Specialist',
      scope: isZh ? '负责可行性判断、投资边界、项目定位、品牌选择、投入结构与风险识别。' : 'Covers feasibility, investment boundaries, positioning, brand selection, capital structure, and risk.',
      strength: isZh ? '突出优势：在资金投入前识别项目逻辑和回报风险，把投资意愿转化为有条件的决策。' : 'Key strength: identifying project logic and return risk before capital is committed.',
    },
    {
      icon: BarChart3,
      title: isZh ? '资深酒店技术与支持专家' : 'Senior Hotel Technology and Support Specialist',
      scope: isZh ? '负责酒店系统、数据基础、技术适配、流程支持与数字能力落地。' : 'Covers hotel systems, data foundations, technology fit, process support, and digital implementation.',
      strength: isZh ? '突出优势：让技术匹配真实经营流程，避免系统采购与一线执行脱节。' : 'Key strength: fitting technology to real operating workflows so systems and frontline execution stay connected.',
    },
    {
      icon: SearchCheck,
      title: isZh ? '酒店数字化营销专家' : 'Hotel Digital Marketing Specialist',
      scope: isZh ? '负责市场增长、内容资产、官网转化、直订路径和搜索可见度。' : 'Covers market growth, content assets, website conversion, direct booking, and search visibility.',
      strength: isZh ? '突出优势：把内容、渠道与咨询入口连成可追踪的获客路径，而不是只增加曝光。' : 'Key strength: connecting content, channels, and inquiry paths into measurable acquisition rather than visibility alone.',
    },
  ]

  const priorities = [
    {
      number: '01',
      title: isZh ? '这个酒店项目值得投吗？' : 'Is this hotel project worth investing in?',
      copy: isZh ? '优先服务投资人、业主和筹备项目方，完成投前判断、定位选择、投入边界和风险识别。' : 'For investors, owners, and project sponsors needing feasibility, positioning, investment boundaries, and risk clarity.',
    },
    {
      number: '02',
      title: isZh ? '为什么酒店很忙，利润却没有改善？' : 'Why is the hotel busy while profit fails to improve?',
      copy: isZh ? '优先服务在营酒店业主和管理者，从收入质量、成本结构、渠道、产品和组织执行中锁定经营瓶颈。' : 'For owners and operators of trading hotels who need to identify constraints across revenue quality, cost, channels, product, and execution.',
    },
    {
      number: '03',
      title: isZh ? '怎样避免筹开阶段留下长期经营问题？' : 'How can pre-opening decisions avoid long-term operating problems?',
      copy: isZh ? '优先服务新建、改造和重新定位项目，让品牌、产品、建设标准、预算与运营准备相互匹配。' : 'For new-build, renovation, and repositioning projects aligning brand, product, development standards, budget, and readiness.',
    },
  ]

  const workflow = [
    [SearchCheck, isZh ? '先看问题' : 'Understand the issue', isZh ? '核对项目阶段、数据、现场条件和决策目标。' : 'Review stage, data, operating conditions, and decision goals.'],
    [Compass, isZh ? '再定路径' : 'Choose the path', isZh ? '找出最影响结果的变量，明确优先级与工作边界。' : 'Identify the variable shaping outcomes and set priorities and scope.'],
    [Users, isZh ? '跨专业协作' : 'Work across disciplines', isZh ? '投资、筹开、运营和增长视角共同参与，不让局部优化伤害整体结果。' : 'Bring investment, pre-opening, operations, and growth perspectives together.'],
    [CheckCircle2, isZh ? '验证结果' : 'Verify the result', isZh ? '以可执行动作、责任节点和复盘证据完成闭环。' : 'Close the loop with actions, ownership, and review evidence.'],
  ] as const

  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isZh ? '关于迈创兄弟C&T' : 'About MarvelBros C&T',
    url: `https://www.marvelbros.com/${lang}/about`,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    about: { '@id': 'https://www.marvelbros.com/#organization' },
    mainEntity: {
      '@id': 'https://www.marvelbros.com/#organization',
      knowsAbout: disciplines.map((item) => item.title),
      audience: { '@type': 'Audience', audienceType: isZh ? '酒店投资人、业主和管理者' : 'Hotel investors, owners, and managers' },
    },
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <Script id="about-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <PageHero
        title={isZh ? '迈创兄弟C&T，看透问题，讲清逻辑，落实到位！' : 'MarvelBros C&T sees the issue clearly, explains the logic, and follows through.'}
        titleSize="text-3xl md:text-5xl"
        subtitle={isZh ? '我们专注酒店行业，因为这个行业同时需要商业判断、经营理解与落地执行。然而在行业里，这三件事往往被忽视，很少被真正放到一起解决。' : 'We focus on hospitality because the industry requires business judgment, operating understanding, and practical execution. Yet these three disciplines are often overlooked and rarely addressed together.'}
        bgImage="/images/home-named/solutions-lounge.jpeg"
      />

      <section className="border-b border-slate-200 bg-[#f4f7f8] py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-5xl font-semibold text-[#b86d13]">30+</p>
            <p className="mt-2 text-lg font-semibold">{isZh ? '年酒店行业实战经验基础' : 'years of practical hospitality experience'}</p>
          </div>
          <p className="max-w-4xl text-lg leading-8 text-slate-700 dark:text-slate-200">
            {isZh ? '团队拥有30多年酒店行业实战经验，专业能力覆盖品牌、投资、运营、技术支持与数字化营销。五位专家围绕同一个经营目标协同判断，以清晰的问题诊断、可执行的改善路径和项目成果验证专业实力。' : 'The team brings more than 30 years of practical hospitality experience across brand strategy, investment, operations, technology support, and digital marketing. Five specialists work around one business objective, demonstrating expertise through clear diagnosis, actionable improvement paths, and project results.'}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '从五个维度，围绕同一个经营结果推进' : 'Five dimensions advancing one shared business result'}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{isZh ? '从品牌定位、投资判断到运营改善、技术支持和数字化增长，每一项专业判断都服务于酒店投资回报和长期经营结果。' : 'From brand positioning and investment decisions to operational improvement, technology support, and digital growth, every specialist judgment serves investment returns and durable operating outcomes.'}</p>
          </div>
          <div className="mt-12 grid border-t border-amber-200 dark:border-slate-700 lg:grid-cols-2">
            {disciplines.map(({ icon: Icon, title, scope, strength }, index) => (
              <article key={title} className={`border-b border-amber-200 py-8 dark:border-slate-700 lg:px-8 ${index === disciplines.length - 1 ? 'lg:col-span-2 lg:px-0' : index % 2 === 0 ? 'lg:border-r lg:pl-0' : 'lg:pr-0'}`}>
                <div className="flex items-start gap-5">
                  <div className="flex size-12 shrink-0 items-center justify-center bg-[#e7f5ef] text-[#24745c] dark:bg-emerald-950 dark:text-emerald-300"><Icon className="size-6" /></div>
                  <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{scope}</p>
                    <p className="mt-3 leading-7 font-medium">{strength}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f7f3] py-20 dark:bg-slate-900 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '现在最值得先解决的三个酒店问题是什么？' : 'Which three hotel questions should be solved first?'}</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {priorities.map((item) => (
              <article key={item.number} className="border-t-4 border-[#d98b28] bg-white p-7 shadow-sm dark:bg-slate-950">
                <p className="text-sm font-bold text-[#b86d13]">{item.number}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12 xl:px-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image src="/images/home-refresh/front-desk-service.jpg" alt={isZh ? '酒店团队在真实服务现场协同工作' : 'A hotel team collaborating in a real service setting'} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" loading="eager" unoptimized />
          </div>
          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '团队协作，避免“各说各话”？' : 'How does team collaboration prevent disconnected advice?'}</h2>
            <div className="mt-8 border-t border-amber-200 dark:border-slate-700">
              {workflow.map(([Icon, title, copy], index) => (
                <div key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-amber-200 py-5 dark:border-slate-700">
                  <Icon className="mt-1 size-6 text-[#24745c]" />
                  <div><p className="font-semibold"><span className="mr-3 text-[#b86d13]">0{index + 1}</span>{title}</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}/cases`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d98b28] px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400">{isZh ? '查看案例成果' : 'Review case results'}<ArrowRight className="size-5" /></Link>
              <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#d98b28] px-6 py-3 font-semibold text-[#b86d13] hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-white/10">{isZh ? '申请免费初步诊断' : 'Request a free diagnosis'}<ArrowRight className="size-5" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
