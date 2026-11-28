import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { ownerDecisionHref, ownerDecisions } from '@/lib/owner-decisions'
import { getDict } from '@/lib/dicts'
import HeroWithStats from '@/components/HeroWithStats'
import LightInquiryForm from '@/components/LightInquiryForm'
import LifecycleDecisionMatrix from '@/components/home/LifecycleDecisionMatrix'
import { ogImages } from '@/lib/seo'

const FACT_ZH = '迈创兄弟C&T 提供酒店投、建、筹、管、改、退六阶段的价值提升咨询，30+ 年酒店行业实战经验，已帮助开发商避免超 3,000 万元潜在损失。'
const FACT_EN = 'MarvelBros C&T advises hotel owners across investment, development, pre-opening, operations, renovation, and exit, backed by 30+ years of practice and over RMB 30 million in verified CapEx savings.'

const stageTag: Record<string, [string, string]> = {
  'hotel-investment': ['投 · 投资与选牌', 'Invest & Brand'],
  'hotel-development': ['建 · 项目建设', 'Development'],
  'hotel-opening': ['筹 · 筹开把关', 'Pre-Opening'],
  'hotel-operation-improvement': ['管 · 经营与收益', 'Operations & GOP'],
  'hotel-revenue': ['管 · 经营与收益', 'Operations & GOP'],
  'hotel-renovation': ['改 · 存量改造', 'Renovation'],
  'hotel-exit': ['退 · 资产退出', 'Exit'],
}

const notes: Record<string, [string, string]> = {
  buy: ['先核真实需求、物业硬条件与回报边界，再决定进不进场。', 'Stress-test demand fundamentals, physical constraints, and IRR boundaries before committing capital.'],
  brand: ['把续约、换牌与独立经营放在同一张全周期成本表上量化对比。', 'Compare franchise renewal, reflagging, and independent operation on one unified financial ledger.'],
  county: ['县域市场与一二线城市的客源结构与房价逻辑绝不能套用同一套假设。', 'Tier-1/2 metros and emerging county markets require distinct demand, CapEx, and payback assumptions.'],
  opening: ['开业日前系统核查人员、IT 系统与现场运营能否同步运转。', 'Audit staffing readiness, PMS/distribution systems, and on-site execution ahead of opening day.'],
  revenue: ['订单变多而利润不涨时，优先穿透净价（Net ADR）与客源结构。', 'When volume grows while profit stalls, audit net realized ADR and segment contribution first.'],
  price: ['房价体系与分销渠道必须联动治理，切忌盲目追求低价出租率。', 'Align pricing tiers and channel acquisition costs together rather than chasing low-margin occupancy.'],
  labor: ['人力成本先对齐班次波峰与人效产出，再谈编制优化。', 'Match staffing schedules and productivity to demand peaks before reducing headcount.'],
  fb: ['餐饮先精准核算自营与外包各自对酒店的净贡献度。', 'Look beyond top-line revenue to compare net departmental contribution of in-house vs. outsourced F&B.'],
  complaints: ['反复出现的结构性客诉必须回到经营动作整改，而不止于安抚。', 'Treat recurring complaints as structural operating signals requiring process fixes, not just apologies.'],
  renovation: ['先判断该不该改、改多少与回收周期，再谈停不停业。', 'Determine scope and CapEx payback first before deciding between phased refurbishment or closure.'],
  turnaround: ['扭亏先分清收入质量、刚性成本与现金流，绝不靠一次低价促销。', 'A turnaround restructures revenue quality, fixed costs, and cash flow—not one-off discounting.'],
  exit: ['出售或停止经营前，先建立买方可核验的资产底账与估值依据。', 'Divestment or closure starts with audited operating books and a defensible valuation baseline.'],
}

const steps = [
  ['先看问题', '核对项目阶段、财务底账、现场条件与业主核心决策目标。', 'Audit Data & Reality', 'Review project stage, P&L statements, on-site conditions, and owner objectives.'],
  ['再定路径', '识别最影响 GOP 与回报的核心变量，明确优先级与工作边界。', 'Isolate Key Drivers', 'Pinpoint the structural variables shaping outcomes and establish clear priorities.'],
  ['跨专业协作', '融合投资、筹开、运营收益与资产管理视角在同一工作台联动。', 'Multidisciplinary Design', 'Unite investment, pre-opening, commercial, and operational expertise into one plan.'],
  ['验证结果', '明确执行步骤、责任人与里程碑，通过周期性复盘兑现改善效果。', 'Verify & Sustain', 'Define clear ownership and milestones, reviewing audited results through implementation.'],
] as const

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const zh = lang !== 'en'
  const title = zh
    ? '酒店全生命周期价值提升咨询｜为酒店业主提供投资、筹开与经营改善的判断依据'
    : 'Hotel Lifecycle Value Enhancement Consultancy for Owners & Investors'
  const description = zh
    ? '迈创兄弟C&T 做酒店全生命周期价值提升咨询，覆盖投资、建设、筹开、经营改善、改造与退出。'
    : 'MarvelBros C&T advises hotel investors, owners, and operators across investment, development, pre-opening, operations, renovation, and exit.'
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
    { lib: isZh ? '决策文库' : 'Decision Library', title: ownerDecisions[0][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[0]) },
    { lib: isZh ? '决策文库' : 'Decision Library', title: ownerDecisions[2][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[2]) },
    { lib: isZh ? '管享精道' : 'Operational Excellence', title: ownerDecisions[3][isZh ? 'zh' : 'en'], href: ownerDecisionHref(lang, ownerDecisions[3]) },
  ]

  const decisionItems = ownerDecisions.map((decision, index) => {
    const stageKey = decision.stage === 'hotel-operation-improvement' ? 'hotel-revenue' : (decision.stage ?? 'hotel-investment')
    const tag = decision.stage ? stageTag[decision.stage] : null
    const note = notes[decision.id]
    return {
      id: decision.id,
      index: index + 1,
      stageKey,
      stageLabel: tag ? (isZh ? tag[0] : tag[1]) : '',
      title: isZh ? decision.zh : decision.en,
      note: note ? (isZh ? note[0] : note[1]) : '',
      href: ownerDecisionHref(lang, decision),
    }
  })

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#0f172a] dark:bg-[#0b0f17] dark:text-[#f1f5f9]">
      {/* Screen 1: Editorial Split Hero */}
      <HeroWithStats lang={lang} />

      {/* Screen 2: Institutional Trust Metrics Strip */}
      <section data-screen="2" className="border-b border-[#e4ded4] bg-white dark:border-white/10 dark:bg-[#101622]">
        <div className="mx-auto max-w-[1360px] px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {([
              {
                value: isZh ? '30+ 年' : '30+ Years',
                label: isZh ? '酒店项目管理与资产咨询实战团队' : 'Hospitality project management & asset advisory leadership',
              },
              {
                value: isZh ? '3,000 万元+' : 'RMB 30M+',
                label: isZh ? '已帮助开发商规避的潜在投资与筹开损失' : 'Verified CapEx & pre-opening savings for hotel owners',
              },
              {
                value: '25%+',
                label: isZh ? '典型存量项目年度运营成本降幅' : 'Operating cost reduction in representative turnarounds',
              },
              {
                value: isZh ? '投·建·筹·管·改·退' : '6 Lifecycle Stages',
                label: isZh ? '六大阶段全生命周期价值闭环' : 'Invest · Build · Pre-Open · Operate · Renovate · Exit',
              },
            ] as const).map((item) => (
              <div key={item.value} className="border-l-2 border-[#b08d57] pl-4 dark:border-[#c9a66b]">
                <dt className="font-serif text-2xl font-semibold tracking-tight text-[#0f172a] dark:text-[#f8f6f2] sm:text-3xl">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-[#efeae2] pt-5 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-300">
            {isZh ? FACT_ZH : FACT_EN}
          </p>
        </div>
      </section>

      {/* Screen 3: Interactive 6-Stage Decision Matrix (100% SSR Crawlable) */}
      <section data-screen="3" className="border-b border-[#e4ded4] py-16 dark:border-white/10 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6b39] dark:text-[#c9a66b]">
                {isZh ? '业主高频决策矩阵' : 'OWNER DECISION MATRIX'}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#0f172a] dark:text-white sm:text-4xl">
                {isZh ? '酒店全周期十二个核心问题' : 'Twelve Critical Decisions Across the Hotel Lifecycle'}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {isZh
                ? '按项目阶段即时筛选您当前最紧迫的决策命题，点击卡片直达深度诊断文章。'
                : 'Filter by lifecycle stage to inspect real-world inflection points faced by hotel owners and asset managers.'}
            </p>
          </div>

          <LifecycleDecisionMatrix lang={lang} items={decisionItems} />
        </div>
      </section>

      {/* Screen 4: Four-Step Multidisciplinary Collaboration */}
      <section data-screen="4" className="border-b border-[#e4ded4] bg-[#f1ede6] py-16 dark:border-white/10 dark:bg-[#101622] lg:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6b39] dark:text-[#c9a66b]">
                {isZh ? 'MBCT 协作机制' : 'ADVISORY METHODOLOGY'}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#0f172a] dark:text-white sm:text-4xl">
                {isZh ? '跨专业四步协作方法' : 'Four-Step Multidisciplinary Collaboration'}
              </h2>
            </div>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f172a] transition-colors hover:text-[#b08d57] dark:text-slate-200 dark:hover:text-[#c9a66b]"
            >
              <span>{isZh ? '了解团队如何协作' : 'Meet the Advisory Team'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([zh, zhBody, en, enBody], index) => (
              <li
                key={zh}
                className="rounded-xl border border-[#e4ded4] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] dark:border-white/10 dark:bg-[#131924]"
              >
                <p className="font-serif text-3xl font-semibold leading-none text-[#b08d57] dark:text-[#c9a66b]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#0f172a] dark:text-white">
                  {isZh ? zh : en}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {isZh ? zhBody : enBody}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Screen 5: Verified Case Studies */}
      <section data-screen="5" className="border-b border-[#e4ded4] py-16 dark:border-white/10 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6b39] dark:text-[#c9a66b]">
                {isZh ? '实战成果验证' : 'VERIFIED TRACK RECORD'}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#0f172a] dark:text-white sm:text-4xl">
                {isZh ? '实践案例' : 'Selected Case Studies'}
              </h2>
            </div>
            <Link
              href={`/${lang}/cases`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f172a] transition-colors hover:text-[#b08d57] dark:text-slate-200 dark:hover:text-[#c9a66b]"
            >
              <span>{isZh ? '查看全部实践案例' : 'View All Case Studies'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.client}
                className="flex flex-col justify-between rounded-2xl border border-[#e4ded4] bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all hover:border-[#b08d57] dark:border-white/10 dark:bg-[#131924] dark:hover:border-[#c9a66b]"
              >
                <div>
                  <p className="font-serif text-3xl font-semibold tracking-tight text-[#b08d57] dark:text-[#c9a66b]">
                    {item.result.split(' - ')[0]}
                  </p>
                  <p className="mt-4 border-t border-[#efeae2] pt-4 text-sm leading-relaxed text-slate-700 dark:border-white/10 dark:text-slate-300">
                    <strong className="font-semibold text-[#0f172a] dark:text-white">{item.client}</strong>
                    {isZh ? '。' : '. '}
                    {item.coreProblem}
                  </p>
                </div>
                <p className="mt-5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Screen 6: Knowledge Library & Lean Insights */}
      <section data-screen="6" className="border-b border-[#e4ded4] bg-[#f1ede6] py-16 dark:border-white/10 dark:bg-[#101622] lg:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:px-12 xl:px-16">
          <div className="grid gap-4">
            {picks.map((item) => (
              <article
                key={item.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#e4ded4] bg-white px-6 py-5 transition-all hover:border-[#b08d57] dark:border-white/10 dark:bg-[#131924] dark:hover:border-[#c9a66b]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8c6b39] dark:text-[#c9a66b]">
                    {item.lib}
                  </p>
                  {item.href && (
                    <h3 className="mt-1.5 font-serif text-lg font-semibold text-[#0f172a] transition-colors group-hover:text-[#b08d57] dark:text-white dark:group-hover:text-[#c9a66b]">
                      <Link href={item.href}>{item.title}</Link>
                    </h3>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#b08d57] dark:group-hover:text-[#c9a66b]" />
              </article>
            ))}
          </div>

          <aside className="flex flex-col justify-between rounded-2xl border border-[#e4ded4] bg-[#0f172a] p-7 text-[#f8f6f2] dark:border-[#c9a66b]/25 dark:bg-[#131924]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a66b]">
                {isZh ? '专业知识资产库' : 'INSTITUTIONAL KNOWLEDGE'}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug">
                {isZh ? '进入知识库全量索引' : 'Explore the Full Knowledge Index'}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {isZh
                  ? '系统查阅酒店投资测算、筹开排期、收益治理、改造决策与资产退出的全量专业文章。'
                  : 'Browse our complete archive of hotel investment, pre-opening, revenue, renovation, and exit briefings.'}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <Link
                href={`/${lang}/knowledge`}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#c9a66b] px-5 py-2.5 text-sm font-medium text-[#0b0f17] transition-colors hover:bg-[#dfbf86]"
              >
                <span>{isZh ? '决策文库' : 'Decision Library'}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${lang}/lean`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#c9a66b] hover:text-[#c9a66b]"
              >
                <span>{isZh ? '管享精道' : 'Operational Excellence'}</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Screen 7: Direct Consultation */}
      <section data-screen="7" className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1360px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6b39] dark:text-[#c9a66b]">
              {isZh ? '开启专业对话' : 'ADVISORY INQUIRY'}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-[#0f172a] dark:text-white sm:text-4xl">
              {isZh ? '您的酒店当前最该先解决哪一个问题？' : 'Which Critical Decision Should Your Hotel Address First?'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {isZh
                ? '在酒店投资、筹开与经营中，越早做出专业判断，纠错成本越低。欢迎直接来电/加微信，或填写右侧简表预约初步项目诊断。'
                : 'Across hotel development and operations, earlier judgment means significantly lower correction cost. Call us directly or submit your project stage for an initial review.'}
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-[#e4ded4] bg-white p-6 dark:border-white/10 dark:bg-[#131924]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {isZh ? '直接联系（电话与微信同号）' : 'Direct Line (Phone & WeChat)'}
              </p>
              <p className="font-serif text-2xl font-semibold text-[#0f172a] dark:text-white sm:text-3xl">
                <a href="tel:+8618941579333" className="inline-flex items-center gap-2.5 hover:text-[#b08d57] dark:hover:text-[#c9a66b]">
                  <Phone className="h-5 w-5 text-[#b08d57] dark:text-[#c9a66b]" />
                  <span>+86 189 4157 9333</span>
                </a>
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <a href="mailto:info@marvelbros.com" className="inline-flex items-center gap-2 hover:text-[#b08d57] dark:hover:text-[#c9a66b]">
                  <Mail className="h-4 w-4 text-[#b08d57] dark:text-[#c9a66b]" />
                  <span>info@marvelbros.com</span>
                </a>
              </p>
            </div>
          </div>

          <LightInquiryForm lang={lang} />
        </div>
      </section>
    </div>
  )
}
