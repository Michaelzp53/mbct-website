import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Phone } from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'
import { ownerDecisions } from '@/lib/owner-decisions'
import { crawlKeywords } from '@/lib/seo'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const methods = [
    isZh ? '深入数据，洞察经营现状' : 'Study the data to understand current performance',
    isZh ? '结合现场，分析真实问题' : 'Use field observation to identify the real issue',
    isZh ? '基于判断，制定优化策略' : 'Turn professional judgment into an optimization strategy',
    isZh ? '持续跟踪，推动价值提升' : 'Track implementation and drive sustained improvement',
  ]

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isZh ? '迈创兄弟C&T酒店全生命周期价值提升咨询' : 'MarvelBros C&T Hotel Lifecycle Value Enhancement Consultancy',
    url: `https://www.marvelbros.com/${lang}`,
    description: isZh
      ? '面向酒店投资人、业主和管理者，提供酒店投资、筹建筹开与经营改善咨询。'
      : 'Hotel advisory for investors, owners, and managers: investment, pre-opening, and operating improvement.',
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    keywords: [...(isZh ? crawlKeywords.zh : crawlKeywords.en), ...ownerDecisions.map((decision) => (isZh ? decision.zh : decision.en))].join(', '),
    about: ownerDecisions.map((decision) => (isZh ? decision.zh : decision.en)),
    isPartOf: { '@id': 'https://www.marvelbros.com/#website' },
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, '\\u003c') }} />
      <HeroWithStats lang={lang} />
      <section id="services" className="scroll-mt-20 border-b border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950 md:py-14">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="text-sm font-semibold leading-6 text-primary">{isZh ? '主要业务' : 'What we do'}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            {isZh ? '三项咨询，对应酒店的三个阶段' : 'Three advisory lines, one for each stage of a hotel'}
          </h2>
          <ul className="mt-8 border-t border-slate-300 dark:border-slate-700">
            {[
              { href: `/${lang}/hotel-investment`, zh: '酒店投资判断', en: 'Hotel investment decisions', detailZh: '适用于新项目、品牌选择、改造和投资前的关键判断。', detailEn: 'For the key decisions before a new project, brand choice, repositioning, or capital commitment.' },
              { href: `/${lang}/hotel-opening`, zh: '酒店筹建筹开', en: 'Hotel pre-opening', detailZh: '把预算、工程接口、团队、流程与开业节奏拉到同一张执行表上。', detailEn: 'Put budget, technical interfaces, team, processes, and opening readiness on one execution plan.' },
              { href: `/${lang}/hotel-operation-improvement`, zh: '酒店经营改善', en: 'Hotel operating improvement', detailZh: '从经营诊断到收入、成本、团队和市场承接，建立可复盘的改善路径。', detailEn: 'From diagnosis to revenue, cost, team, and market capture, build an improvement path that can be reviewed.' },
            ].map((item) => (
              <li key={item.href} className="border-b border-slate-300 dark:border-slate-700">
                <Link href={item.href} className="group grid gap-1 py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="font-semibold group-hover:text-brand-blue dark:group-hover:text-sky-300">{isZh ? item.zh : item.en}</span>
                  <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">{isZh ? item.detailZh : item.detailEn}</span>
                  <ArrowRight className="hidden h-4 w-4 text-slate-400 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            <Link href={`/${lang}/knowledge`} className="font-semibold text-brand-blue hover:text-[#b86d13] dark:text-sky-300">
              {isZh ? '酒店投、筹、管、退、改决议' : 'Resolutions on investment, pre-opening, operation, exit, and renovation'}
            </Link>
            {isZh ? '：回答酒店“投”、“筹”、“管”、“退”、“改”业者的决策问题。' : ': decision questions on investment, pre-opening, operation, exit, and renovation.'}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/photography/team-advisory.jpg"
                alt={isZh ? '专业顾问团队围绕酒店项目开展讨论' : 'Professional advisers discussing a hotel project'}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-sm font-semibold leading-6 text-primary">{isZh ? '30多年酒店行业实践' : 'More than 30 years in hospitality'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '为什么酒店项目需要专业判断？' : 'Why do hotel projects require professional judgment?'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '酒店经营中的问题，往往不是单一环节造成。投资定位、品牌选择、产品设计、运营体系、市场策略与管理机制相互影响，一个阶段的判断，会持续影响后续经营结果。'
                  : 'Hotel performance problems rarely come from one isolated link. Investment positioning, brand choice, product design, operating systems, market strategy, and management mechanisms influence one another, and one decision can shape every stage that follows.'}
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '迈创兄弟C&T的复合型专业力量覆盖酒店投资分析、筹开管理、运营管理与经营改善。我们以数据分析、现场观察和跨专业协同找到影响酒店价值的关键因素，并制定可执行的优化路径。'
                  : 'MarvelBros C&T brings together hotel investment analysis, pre-opening management, operations, and performance improvement. Data, field observation, and multidisciplinary collaboration are used to identify the factors shaping hotel value and turn them into an executable path.'}
              </p>
              <p className="mt-5 border-l-4 border-brand-gold pl-5 text-xl font-semibold leading-8">
                {isZh ? '没有看过真实数据和现场，我们不会轻易下结论。' : 'Without real data and a view of the operation, we do not jump to conclusions.'}
              </p>
              <Link href={`/${lang}/about`} className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-blue hover:text-[#b86d13] dark:text-sky-300">
                {isZh ? '了解团队如何协作' : 'See how the team works together'}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <ol className="mt-9 border-t border-slate-300 dark:border-slate-700">
                {methods.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] items-center border-b border-slate-300 py-4 dark:border-slate-700">
                    <span className="text-sm font-bold text-brand-gold">0{index + 1}</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#0b2d42] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
              <Image
                src="/hero-rod-long-2P_ifaetDm0-unsplash.jpg"
                alt={isZh ? '酒店筹开投资优化项目场景' : 'Hotel pre-opening investment optimization'}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-6 text-amber-300">{isZh ? '案例与成果' : 'Cases and outcomes'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {isZh ? '项目经验，是团队专业的最好证明' : 'Project experience is the strongest proof of team expertise'}
              </h2>
              <dl className="mt-8 border-t border-white/25">
                {[
                  [isZh ? '项目背景' : 'Project background', isZh ? '某国有企业酒店筹开过程中，建设、装修和筹开投入持续增加。' : 'During the pre-opening of a state-owned hotel, construction, fit-out, and opening expenditure continued to rise.'],
                  [isZh ? '专业判断' : 'Professional judgment', isZh ? '问题不只是预算超支，更在于定位、建设标准与投入项目之间缺少系统复核。' : 'The issue was not simply budget overrun, but a lack of systematic review across positioning, building standards, and investment items.'],
                  [isZh ? '优化方案' : 'Optimization plan', isZh ? '逐项复核建设方案、装修标准和筹开预算，把成本控制落实到具体项目。' : 'Review construction plans, fit-out standards, and the opening budget line by line, turning cost control into specific actions.'],
                  [isZh ? '项目结果' : 'Project result', isZh ? '为业主节省投资超过3000万元，结果由业主项目感谢信确认。' : 'More than RMB 30 million saved for the owner, confirmed in the owner’s project letter.'],
                ].map(([term, description]) => (
                  <div key={term} className="grid gap-2 border-b border-white/25 py-5 sm:grid-cols-[7rem_1fr]">
                    <dt className="font-semibold text-amber-300">{term}</dt>
                    <dd className="leading-7 text-slate-200">{description}</dd>
                  </div>
                ))}
              </dl>
              <dl className="mt-6 border-t border-white/20 bg-white/5 px-5 py-2">
                {[
                  [isZh ? '项目背景' : 'Project background', isZh ? '某存量酒店入住率稳定，但净利润连续两个季度低于预期。' : 'An operating hotel maintained stable occupancy, but net profit stayed below target for two quarters.'],
                  [isZh ? '专业判断' : 'Professional judgment', isZh ? '核心问题不在客流，而在客源结构、报价权限和赠送成本失控。' : 'The core issue was not demand, but guest mix, pricing authority, and uncontrolled complimentary costs.'],
                  [isZh ? '优化方案' : 'Optimization plan', isZh ? '重建客户分级、净价表和销售复盘机制，把资源转向高贡献客群。' : 'We rebuilt customer tiers, net-rate rules, and sales review routines to focus resources on higher-contribution segments.'],
                  [isZh ? '项目结果' : 'Project result', isZh ? '团队动作更聚焦，代表性项目运营成本降低25%。' : 'The team focused execution, and operating cost fell by 25% in a representative case.'],
                ].map(([term, description]) => (
                  <div key={term} className="grid gap-2 border-b border-white/15 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]">
                    <dt className="font-semibold text-amber-300">{term}</dt>
                    <dd className="text-sm leading-6 text-slate-200">{description}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/${lang}/cases`} className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-amber-300">
                {isZh ? '查看案例与工作方法' : 'See cases and working methods'}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f4f7f8] py-16 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-semibold leading-6 text-primary">{isZh ? '专业交流' : 'Professional conversation'}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              {isZh ? '您的酒店现在最需要先解决哪个问题？' : 'Which problem should your hotel solve first?'}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              {isZh ? '酒店投资、筹建或经营过程中，很多问题越早判断，调整成本越低。您可以告诉我们项目阶段、所在区域以及当前面临的问题，我们会基于实际情况共同分析问题来源，判断下一步需要关注的重点。' : 'Across hotel investment, development, and operations, earlier judgment usually means a lower cost of correction. Tell us the project stage, location, and current challenge. We will examine the situation with you and identify what deserves attention next.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-13 items-center justify-center gap-2 bg-brand-blue px-6 py-3.5 font-semibold text-white hover:bg-brand-blue-hover">
              <FileText className="h-5 w-5" />
              {isZh ? '交流酒店项目' : 'Discuss a Hotel Project'}
            </Link>
            <a href="tel:+8618941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-brand-blue hover:text-brand-blue dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
              <Phone className="h-5 w-5" />
              +86 189 4157 9333
            </a>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">{isZh ? '电话与微信同号' : 'Phone and WeChat use the same number'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
