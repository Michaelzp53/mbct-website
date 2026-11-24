import Link from 'next/link'
import type { Metadata } from 'next'
import { ownerDecisionHref, ownerDecisions } from '@/lib/owner-decisions'
import { getDict } from '@/lib/dicts'
import HeroWithStats from '@/components/HeroWithStats'
import LightInquiryForm from '@/components/LightInquiryForm'
import { ogImages } from '@/lib/seo'

const FACT = '迈创兄弟C&T 提供酒店投、建、筹、管、改、退六阶段的价值提升咨询，30+ 年酒店行业实战经验，已帮助开发商避免超 3000 万元潜在损失。'

const stageTag: Record<string, [string, string]> = {
  'hotel-investment': ['投资', 'Investment'],
  'hotel-opening': ['筹开', 'Pre-Opening'],
  'hotel-operation-improvement': ['经营', 'Operations'],
  'hotel-revenue': ['经营', 'Operations'],
  'hotel-renovation': ['改造', 'Renovation'],
  'hotel-exit': ['退出', 'Exit'],
}

const notes: Record<string, [string, string]> = {
  buy: ['先核需求、物业和回报边界，再决定进不进。', 'Check demand, the property, and the return boundary before entering.'],
  brand: ['把续约、换牌、独立经营放在同一张成本表上比。', 'Compare renewal, reflagging, and independent operation on one cost sheet.'],
  county: ['县域和城市的客源与价格不能用同一套假设。', 'County and city hotels cannot share the same demand and rate assumptions.'],
  opening: ['开业日前先核人员、系统和现场能不能一起转。', 'Before opening day, check whether people, systems, and the floor can run together.'],
    revenue: ['订单变多而利润不涨时，先看净价和客源结构。', 'When orders rise and profit does not, look at net rate and market segment mix.'],
  price: ['价格和渠道要一起看，不能只追出租率。', 'Read rate and channel together, not occupancy alone.'],
  labor: ['人力成本先对到班次和产出，再谈减人。', 'Match labor cost to shifts and output before cutting headcount.'],
  fb: ['餐饮先算自营和外包各自的净贡献。', 'Compare the net contribution of operating food and beverage versus outsourcing it.'],
  complaints: ['反复出现的客诉要回到经营动作，不只做安抚。', 'Repeated complaints have to return to the operating action, not only to an apology.'],
  renovation: ['先判断该不该改、改多少，再谈停不停业。', 'Decide whether to renovate, and how much, before deciding whether to close.'],
  turnaround: ['扭亏先分清收入、成本和现金，不靠一次促销。', 'A turnaround separates revenue, cost, and cash. It is not one promotion.'],
  exit: ['出售或停止经营，先看有没有可核的资产底账。', 'A sale or a stop starts with books a buyer can check.'],
}

const steps = [
  ['先看问题', '核对项目阶段、数据、现场条件和决策目标。', 'Understand the issue', 'Review stage, data, operating conditions, and decision goals.'],
  ['再定路径', '找出最影响结果的变量，明确优先级与工作边界。', 'Choose the path', 'Identify the variable shaping outcomes and set priorities and scope.'],
  ['跨专业协作', '投资、筹开、运营和增长视角共同参与。', 'Work across disciplines', 'Bring investment, pre-opening, operations, and growth together.'],
  ['验证结果', '明确执行步骤和负责人，通过复盘检查改善效果。', 'Verify the result', 'Define actions and responsibilities, then review the evidence.'],
] as const

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const zh = lang !== 'en'
  const title = zh
    ? '酒店全生命周期价值提升咨询｜为酒店业主提供投资、筹开与经营改善的判断依据'
    : 'Hotel lifecycle consulting for owners and operators'
  const description = zh
    ? '迈创兄弟C&T 做酒店全生命周期价值提升咨询，覆盖投资、筹开、经营改善、改造与退出。'
    : 'MarvelBros C&T advises hotel owners on investment, pre-opening, operations, renovation, and exit.'
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://www.marvelbros.com/${zh ? 'zh' : 'en'}`,
      languages: { 'zh-CN': 'https://www.marvelbros.com/zh', 'en-US': 'https://www.marvelbros.com/en', 'x-default': 'https://www.marvelbros.com/zh' },
    },
    openGraph: { title, description, url: `https://www.marvelbros.com/${zh ? 'zh' : 'en'}`, type: 'website', locale: zh ? 'zh_CN' : 'en_US', images: ogImages(zh ? 'zh' : 'en') },
    twitter: { card: 'summary_large_image', title, description, images: [ogImages(zh ? 'zh' : 'en')[0].url] },
  }
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang !== 'en'
  const dict = getDict(lang)
  const cases = [dict.cases.items[0], dict.cases.items[5], dict.cases.items[1]]
  const picks = [
    { lib: isZh ? '决策文库' : 'Knowledge Library', title: ownerDecisions[0][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[0]) },
    { lib: isZh ? '决策文库' : 'Knowledge Library', title: ownerDecisions[2][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[2]) },
    { lib: isZh ? '管享精道' : 'Lean Insights', title: ownerDecisions[3][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[3]) },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/home-named/homepage-city-night.jpg')" }}>
        <div className="pointer-events-none absolute inset-0 bg-[#031018]/30 dark:bg-[#01060c]/30" />
        <div className="relative">
      <HeroWithStats lang={lang} />

      <section data-screen="2" className="border-b border-white/20">
        <dl className="mx-auto grid max-w-[1440px] grid-cols-4 px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
          {([
            ['30+', isZh ? '年' : 'years'],
            [isZh ? '3000 万元' : 'RMB 30 million', isZh ? '已帮助开发商避免的潜在损失' : 'potential loss avoided for a developer'],
            ['25%', isZh ? '典型项目运营成本降幅' : 'operating-cost reduction on a typical project'],
            [isZh ? '投·建·筹·管·改·退' : 'Invest–Exit', isZh ? '六阶段全覆盖' : 'all six stages'],
          ] as const).map(([value, label]) => (
            <div key={label} className="border-l-2 border-white/70 px-2">
              <dt className="whitespace-nowrap text-lg font-semibold sm:text-2xl">{value}</dt>
              <dd className="mt-1 text-xs font-medium leading-4 text-white sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="mx-auto max-w-[1440px] px-5 pb-4 text-base font-medium leading-7 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.65)] sm:px-8 lg:px-12 xl:px-16" dangerouslySetInnerHTML={{ __html: isZh ? FACT : 'MarvelBros C&amp;T advises across investment, development, pre-opening, operations, renovation, and exit, with 30+ years of practice and more than RMB 30 million in potential loss avoided.' }} />
      </section>
        </div>
      </div>

      <section data-screen="3" className="border-b border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-semibold leading-snug">{isZh ? '酒店全周期十二个核心问题' : 'Twelve core questions across the hotel lifecycle'}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {ownerDecisions.map((decision, index) => {
              const href = ownerDecisionHref(lang, decision)
              const tag = decision.stage ? stageTag[decision.stage] : null
              const note = notes[decision.id]
              return (
                <article key={decision.id} className="border border-slate-200 p-4 dark:border-slate-700">
                  <p className="text-sm font-semibold text-brand-gold">{String(index + 1).padStart(2, '0')}{tag ? ` · ${isZh ? tag[0] : tag[1]}` : ''}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-7">{isZh ? decision.zh : decision.en}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{isZh ? note[0] : note[1]}</p>
                  {href && <p className="mt-3 text-sm font-semibold"><Link href={href} className="text-brand-blue dark:text-sky-300">{isZh ? '看诊断思路' : 'Read the diagnosis'}</Link></p>}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section data-screen="4" className="border-b border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-semibold leading-snug">{isZh ? '四步协作方法' : 'Four-step collaboration'}</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-4">
            {steps.map(([zh, zhBody, en, enBody], index) => (
              <li key={zh} className="border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-sm font-semibold text-brand-gold">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold leading-7">{isZh ? zh : en}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{isZh ? zhBody : enBody}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm font-semibold"><Link href={`/${lang}/about`} className="text-brand-blue dark:text-sky-300">{isZh ? '了解团队如何协作' : 'See how the team works'}</Link></p>
        </div>
      </section>

      <section data-screen="5" className="border-b border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-semibold leading-snug">{isZh ? '实践案例' : 'Case Studies'}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.client} className="border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-2xl font-semibold text-brand-gold">{item.result.split(' - ')[0]}</p>
                <p className="mt-2 line-clamp-3 text-sm leading-6">{item.client}。{item.coreProblem}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold"><Link href={`/${lang}/cases`} className="text-brand-blue dark:text-sky-300">{isZh ? '查看实践案例' : 'See case studies'}</Link></p>
        </div>
      </section>

      <section data-screen="6" className="border-b border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:px-8 lg:grid-cols-[7fr_3fr] lg:px-12 xl:px-16">
          <div className="grid gap-3">
            {picks.map((item) => (
              <article key={item.href} className="border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs font-semibold text-brand-gold">{item.lib}</p>
                {item.href && <h3 className="mt-2 font-semibold"><Link href={item.href}>{item.title}</Link></h3>}
              </article>
            ))}
          </div>
          <aside className="border border-slate-200 p-4 dark:border-slate-700">
            <h2 className="font-semibold">{isZh ? '进入知识库全量索引 →' : 'Open the full knowledge index →'}</h2>
            <p className="mt-4 text-sm font-semibold"><Link href={`/${lang}/knowledge`} className="text-brand-blue dark:text-sky-300">{isZh ? '决策文库' : 'Knowledge Library'}</Link></p>
            <p className="mt-2 text-sm font-semibold"><Link href={`/${lang}/lean`} className="text-brand-blue dark:text-sky-300">{isZh ? '管享精道' : 'Lean Insights'}</Link></p>
          </aside>
        </div>
      </section>

      <section data-screen="7" className="relative bg-cover bg-center py-10" style={{ backgroundImage: "url('/images/home-named/contact-us.jpg')" }}>
        <div className="pointer-events-none absolute inset-0 bg-[#4d6574]/30 dark:bg-[#01060c]/30" />
        <div className="relative mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12 xl:px-16">
          <div className="text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.65)]">
            <h2 className="text-3xl font-semibold leading-snug">{isZh ? '直接联系' : 'Direct contact'}</h2>
            <p className="mt-4 text-2xl font-semibold"><a href="tel:+8618941579333">+86 189 4157 9333</a></p>
            <p className="mt-2 text-base font-medium">{isZh ? '电话与微信同号' : 'Same number for Phone & WeChat'}</p>
          </div>
          <LightInquiryForm lang={lang} />
        </div>
      </section>
    </div>
  )
}
