import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Phone } from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'
import { ownerDecisionHref, ownerDecisions } from '@/lib/owner-decisions'
import { getDict } from '@/lib/dicts'
import LightInquiryForm from '@/components/LightInquiryForm'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const methods = [
    isZh ? '深入数据，洞察经营现状' : 'Study the data to understand current performance',
    isZh ? '结合现场，分析真实问题' : 'Use field observation to identify the real issue',
    isZh ? '基于判断，制定优化策略' : 'Turn professional judgment into an optimization strategy',
  ]

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isZh ? '迈创兄弟C&T酒店全生命周期价值提升咨询' : 'MarvelBros C&T Hotel Lifecycle Value Enhancement Consultancy',
    url: `https://www.marvelbros.com/${lang}`,
    description: isZh
      ? '面向酒店投资人、业主和管理者，提供酒店投资研究、品牌定位、筹建管理、经营诊断、产品升级与市场增长咨询。'
      : 'Hotel lifecycle advisory for investors, owners, and managers across investment research, brand positioning, development, operations, product renewal, and market growth.',
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    about: ownerDecisions.map((decision) => (isZh ? decision.zh : decision.en)),
    isPartOf: { '@id': 'https://www.marvelbros.com/#website' },
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: isZh ? '迈创兄弟C&T' : 'MarvelBros C&T',
        url: `https://www.marvelbros.com/${lang}`,
        inLanguage: isZh ? 'zh-CN' : 'en-US',
        isPartOf: { '@id': 'https://www.marvelbros.com/#website' },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            [isZh ? '决策文库' : 'Knowledge Library', `/${lang}/knowledge`],
            [isZh ? '管享精道' : 'Lean Insights', `/${lang}/lean`],
            [isZh ? '服务清单' : 'Services', `/${lang}/services`],
            [isZh ? '实践案例' : 'Case Studies', `/${lang}/cases`],
          ].map(([name, path], index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name,
            url: `https://www.marvelbros.com${path}`,
          })),
        },
      }).replace(/</g, '\\u003c') }} />
      <HeroWithStats lang={lang} />
      <section id="hotel-problems" className="scroll-mt-20 border-b border-[#e6dccb] bg-[#F7F1E6] py-8 dark:border-slate-800 dark:bg-slate-900 md:py-10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold leading-6 text-primary">{isZh ? '经营问题' : 'Operating questions'}</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">{isZh ? '酒店经营里的十二个问题' : 'Twelve questions in running a hotel'}</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5B4631] dark:text-[#D8B98A]">
              {isZh ? '每条对应一个会碰到的问题。' : 'Each line is one question an owner actually meets.'}
            </p>
          </div>

          <QuestionTabs lang={lang} />
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
              <div className="mt-8 grid gap-4">
                {getDict(lang).cases.items.map((item) => (
                  <article key={item.client} className="border-t border-white/25 py-4">
                    <p className="text-3xl font-semibold text-amber-300">{item.result}</p>
                    <h3 className="mt-2 font-semibold">{item.client}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{item.coreProblem}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{item.actions[0]}</p>
                    <p className="mt-2 text-xs text-amber-100">{isZh ? '口径' : 'Basis'}：{item.result}</p>
                  </article>
                ))}
              </div>
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
              {isZh ? '预约项目诊断' : 'Book a Diagnosis'}
            </Link>
            <a href="tel:+8618941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-brand-blue hover:text-brand-blue dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
              <Phone className="h-5 w-5" />
              +86 189 4157 9333
            </a>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">{isZh ? '电话与微信同号' : 'Phone and WeChat use the same number'}</p>
            <LightInquiryForm lang={lang} />
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-semibold">{getDict(lang).cases.testimonials.title}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {getDict(lang).cases.testimonials.items.map((item) => (
              <blockquote key={item.name} className="border border-slate-200 p-5 dark:border-slate-700">
                <p className="leading-7">{item.content}</p>
                <footer className="mt-4 text-sm font-semibold">{item.name} · {item.role} · {item.time}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const questionGroups = [
  { id: 'invest', zone: 'zone-invest', zh: '投资', en: 'Invest', ids: ['buy', 'brand', 'county'] },
  { id: 'opening', zone: 'zone-opening', zh: '筹开', en: 'Pre-open', ids: ['opening'] },
  { id: 'operate', zone: 'zone-stock', zh: '经营', en: 'Operate', ids: ['revenue', 'price', 'labor', 'fb', 'complaints'] },
  { id: 'renew', zone: 'zone-stock', zh: '改造', en: 'Renew', ids: ['renovation'] },
  { id: 'exit', zone: 'zone-stock', zh: '退出', en: 'Exit', ids: ['turnaround', 'exit'] },
] as const

const questionNotes: Record<string, [string, string]> = {
  buy: ['先核需求、物业和回报边界，再决定进不进。', 'Check demand, the property, and the return boundary before entering.'],
  brand: ['把续约、换牌、独立经营放在同一张成本表上比。', 'Compare renewal, reflagging, and independent operation on one cost sheet.'],
  county: ['县域和城市的客源与价格不能用同一套假设。', 'County and city hotels cannot share the same demand and rate assumptions.'],
  opening: ['开业日前先核人员、系统和现场能不能一起转。', 'Before opening day, check whether people, systems, and the floor can run together.'],
  revenue: ['订单变多而利润不涨时，先看净价和客源结构。', 'When orders rise and profit does not, look at net rate and guest mix.'],
  price: ['价格和渠道要一起看，不能只追出租率。', 'Read rate and channel together, not occupancy alone.'],
  labor: ['人力成本先对到班次和产出，再谈减人。', 'Match labor cost to shifts and output before cutting headcount.'],
  fb: ['餐饮先算自营和外包各自的净贡献。', 'Compare the net contribution of operating food and beverage versus outsourcing it.'],
  complaints: ['反复出现的客诉要回到经营动作，不只做安抚。', 'Repeated complaints have to return to the operating action, not only to an apology.'],
  renovation: ['先判断该不该改、改多少，再谈停不停业。', 'Decide whether to renovate, and how much, before deciding whether to close.'],
  turnaround: ['扭亏先分清收入、成本和现金，不靠一次促销。', 'A turnaround separates revenue, cost, and cash. It is not one promotion.'],
  exit: ['出售或停止经营，先看有没有可核的资产底账。', 'A sale or a stop starts with books a buyer can check.'],
}

function QuestionTabs({ lang }: { lang: string }) {
  const isZh = lang === 'zh'
  return (
    <div className="question-tabs mt-6">
      <style>{`.question-tabs .q-panel{display:none}.question-tabs:has(#q-invest:checked) .q-invest,.question-tabs:has(#q-opening:checked) .q-opening,.question-tabs:has(#q-operate:checked) .q-operate,.question-tabs:has(#q-renew:checked) .q-renew,.question-tabs:has(#q-exit:checked) .q-exit{display:grid}`}</style>
      {questionGroups.map((group, index) => (
        <input key={group.id} id={`q-${group.id}`} name="hotel-questions" type="radio" defaultChecked={index === 0} className="sr-only" />
      ))}
      <div className="flex flex-wrap gap-2">
        {questionGroups.map((group) => (
          <label key={group.id} htmlFor={`q-${group.id}`} className="cursor-pointer border border-[#d8b98a] px-3 py-2 text-sm font-semibold">{isZh ? group.zh : group.en}</label>
        ))}
      </div>
      {questionGroups.map((group) => (
        <div key={group.id} id={group.id === 'invest' ? 'zone-invest' : group.id === 'opening' ? 'zone-opening' : group.id === 'operate' ? 'zone-stock' : undefined} className={`q-panel q-${group.id} mt-4 gap-3`}>
          {group.ids.map((id) => {
            const decision = ownerDecisions.find((item) => item.id === id)
            if (!decision) return null
            const href = ownerDecisionHref(lang, decision)
            const title = isZh ? decision.zh : decision.en
            const note = questionNotes[id]
            return (
              <article key={id} className="border border-[#d8cbb6] p-4 dark:border-slate-700">
                <h3 className="text-lg font-semibold">{href ? <Link href={href}>{title}</Link> : title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{isZh ? note[0] : note[1]}</p>
              </article>
            )
          })}
        </div>
      ))}
    </div>
  )
}
