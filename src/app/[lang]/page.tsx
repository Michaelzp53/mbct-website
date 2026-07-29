import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BookOpen,
  Building2,
  ClipboardCheck,
  Coins,
  FileText,
  Phone,
  RefreshCw,
  Search,
} from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'
import LifecycleCapabilities from '@/components/home/LifecycleCapabilities'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const problems = [
    {
      icon: Building2,
      title: isZh ? '项目投资阶段' : 'Project investment',
      copy: isZh ? '如何判断酒店项目是否值得投入？' : 'How can you judge whether a hotel project is worth the investment?',
      href: `/${lang}/knowledge/hotel-investor-pitfalls-guide`,
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '筹建筹开阶段' : 'Development and pre-opening',
      copy: isZh ? '如何降低建设投入与开业风险？' : 'How can construction investment and opening risk be reduced?',
      href: `/${lang}/services`,
    },
    {
      icon: Coins,
      title: isZh ? '经营提升阶段' : 'Performance improvement',
      copy: isZh ? '为什么收入增长，利润却没有同步提升？' : 'Why does profit fail to improve when revenue is growing?',
      href: `/${lang}/knowledge/revpar-recovery-three-tracks-2026-05-20`,
    },
    {
      icon: RefreshCw,
      title: isZh ? '产品升级阶段' : 'Product renewal',
      copy: isZh ? '成熟酒店如何重新获得市场竞争力？' : 'How can an established hotel regain market competitiveness?',
      href: `/${lang}/knowledge/hotel-renovation`,
    },
    {
      icon: Search,
      title: isZh ? '市场增长阶段' : 'Market growth',
      copy: isZh ? '如何在新的搜索环境中获得有效客户？' : 'How can hotels acquire qualified customers in the new search environment?',
      href: `/${lang}/services/ai-hotel-website`,
    },
  ]

  const methods = [
    isZh ? '深入数据，洞察经营现状' : 'Study the data to understand current performance',
    isZh ? '结合现场，分析真实问题' : 'Use field observation to identify the real issue',
    isZh ? '基于判断，制定优化策略' : 'Turn professional judgment into an optimization strategy',
    isZh ? '持续跟踪，推动价值提升' : 'Track implementation and drive sustained improvement',
  ]

  const latestArticles = [
    {
      title: isZh ? '避暑游升温，酒店不能只卖“一间有空调的客房”；' : 'As Summer Escape Travel Grows, Hotels Must Offer More Than “An Air-Conditioned Guest Room”',
      summary: isZh
        ? '客人购买的不只是一间有空调的客房，而是从到店到离店的全天舒适体验。'
        : 'Guests expect more than an air-conditioned room. Hotels need to deliver comfort across the full guest day.',
      slug: 'summer-escape-hotels-air-conditioned-room-2026-07-29',
      date: '2026.07.29',
    },
    {
      title: isZh ? '亲子房成了暑期卖点，酒店为什么还是留不住家庭客？' : 'Family Rooms Are a Summer Bestseller. Why Do Hotels Still Struggle to Retain Family Guests?',
      summary: isZh
        ? '家庭客买的不只是儿童设施，而是酒店能否把安全、服务、费用和复购承诺完整兑现。'
        : 'Family guests buy more than amenities. Hotels must deliver safety, service consistency, pricing clarity, and a reason to return.',
      slug: 'family-room-operational-readiness-2026-07-28',
      date: '2026.07.28',
    },
    {
      title: isZh ? '携程被罚没51.79亿元后，酒店能真正拿回定价主动权吗？' : "After Ctrip's RMB 5.179 Billion Antitrust Penalty, Can Hotels Regain Pricing Control?",
      summary: isZh
        ? '平台规则发生变化后，酒店能否把经营空间变成利润，取决于合同授权、渠道净收入、价格权益和客户承接是否真正算清。'
        : 'When platform rules change, hotels still need clear authorization, channel economics, rate benefits, and guest retention to turn operating room into profit.',
      slug: 'ctrip-antitrust-penalty-hotel-pricing-control-2026-07-27',
      date: '2026.07.27',
    },
  ]

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isZh ? '迈创兄弟C&T酒店全生命周期价值提升咨询' : 'MarvelBros C&T Hotel Lifecycle Value Advisory',
    url: `https://www.marvelbros.com/${lang}`,
    description: isZh
      ? '面向酒店投资人、业主和管理者，提供酒店投资研究、品牌定位、筹建管理、经营诊断、产品升级与市场增长咨询。'
      : 'Hotel lifecycle advisory for investors, owners, and managers across investment research, brand positioning, development, operations, product renewal, and market growth.',
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    about: problems.map((problem) => problem.title),
    isPartOf: { '@id': 'https://www.marvelbros.com/#website' },
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, '\\u003c') }} />
      <HeroWithStats lang={lang} />
      <LifecycleCapabilities lang={lang} />

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/home-modern/advisory-conversation.png"
                alt={isZh ? '酒店专业人员结合经营数据分析项目' : 'Hospitality specialists reviewing operating data'}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '为什么选择迈创兄弟C&T' : 'Why MarvelBros C&T'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '长期酒店实践，沉淀的是判断复杂问题的方法' : 'Long-term hotel practice builds a method for judging complex problems'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '酒店经营中的问题，往往不是单一环节造成。投资定位、品牌选择、产品设计、运营体系、市场策略与管理机制相互影响，一个阶段的判断，会持续影响后续经营结果。'
                  : 'Hotel performance problems rarely come from one isolated link. Investment positioning, brand choice, product design, operating systems, market strategy, and management mechanisms influence one another, and one decision can shape every stage that follows.'}
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '迈创兄弟C&T长期参与酒店投资、建设与运营过程，形成了基于数据分析、现场观察和行业经验的判断方法。我们不仅发现问题，更找到影响酒店价值的关键因素，并制定可执行的优化路径。'
                  : 'Through long-term involvement in hotel investment, development, and operations, MarvelBros C&T has built a judgment method grounded in data, field observation, and industry experience. We identify the factors that shape hotel value and turn them into an executable path for improvement.'}
              </p>
              <p className="mt-5 border-l-4 border-[#d98b28] pl-5 text-xl font-semibold leading-8">
                {isZh ? '没有看过真实数据和现场，我们不会轻易下结论。' : 'Without real data and a view of the operation, we do not jump to conclusions.'}
              </p>
              <ol className="mt-9 border-t border-slate-300 dark:border-slate-700">
                {methods.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] items-center border-b border-slate-300 py-4 dark:border-slate-700">
                    <span className="text-sm font-bold text-[#d98b28]">0{index + 1}</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 grid border-y border-slate-300 dark:border-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {(isZh
              ? [
                  ['超过100个', '酒店项目实践'],
                  ['50多个', '城市项目经验'],
                  ['3000万元以上', '代表性筹开投资优化'],
                  ['25%', '代表性运营成本改善'],
                ]
              : [
                  ['100+', 'hotel projects'],
                  ['50+', 'cities of project experience'],
                  ['RMB 30m+', 'representative pre-opening investment optimization'],
                  ['25%', 'representative operating cost improvement'],
                ]
            ).map(([value, label]) => (
              <div key={label} className="border-b border-slate-300 py-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 dark:border-slate-700">
                <p className="text-3xl font-semibold text-[#0b4a6f] dark:text-sky-300">{value}</p>
                <p className="mt-2 pr-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {isZh ? '以上为核心专业人员职业项目经验；项目名称与客户信息按行业惯例脱敏。' : 'Figures reflect the career project experience of core specialists. Project and client identities are anonymized in line with industry practice.'}
          </p>
        </div>
      </section>

      <section id="hotel-problems" className="scroll-mt-20 bg-[#f4f7f8] py-20 dark:bg-slate-900 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '关键决策入口' : 'Critical decision points'}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '酒店经营中的关键问题，需要专业判断' : 'Critical hotel challenges require professional judgment'}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {isZh ? '不同阶段的问题相互关联。越早识别关键因素，越能降低后续调整成本。' : 'Challenges at different stages are connected. The earlier the critical factors are identified, the lower the cost of later correction.'}
            </p>
          </div>

          <div className="mt-12 grid border-t border-slate-300 dark:border-slate-700 lg:grid-cols-2 lg:gap-x-12">
            {problems.map(({ icon: Icon, title, copy, href }, index) => (
              <Link
                key={title}
                href={href}
                className={`group grid min-h-36 grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-slate-300 py-6 transition-colors hover:bg-white/70 dark:border-slate-700 dark:hover:bg-slate-950/40 sm:grid-cols-[3.5rem_1fr_auto] ${index === problems.length - 1 ? 'lg:col-span-2' : ''}`}
              >
                <Icon className="h-6 w-6 text-[#d98b28]" />
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0b4a6f]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '持续更新的专业索引' : 'A practical reference, continuously updated'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '酒店经营知识库' : 'Hotel Knowledge Base'}</h2>
              <p className="mt-5 text-xl font-semibold leading-8">{isZh ? '沉淀行业实践经验，形成可判断、可执行的方法体系。' : 'Turning industry practice into a system of judgment and action.'}</p>
              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                {isZh ? '我们持续整理酒店投资、筹建、运营、收益、成本、产品和市场增长中的真实问题，通过案例分析、经营观察和行业研究，帮助酒店经营者理解原因、建立判断逻辑，并找到下一步优化方向。' : 'We examine real issues across hotel investment, development, operations, revenue, cost, product, and market growth. Cases, operating observations, and industry research help hotel leaders understand causes, build sound judgment, and identify the next direction for improvement.'}
              </p>
              <Link href={`/${lang}/knowledge`} className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#0b4a6f] px-6 py-3 font-semibold text-white hover:bg-[#073a58]">
                <BookOpen className="h-5 w-5" />
                {isZh ? '进入酒店经营知识库' : 'Enter the knowledge base'}
              </Link>
            </div>

            <div className="border-t border-slate-300 dark:border-slate-700">
              {latestArticles.map((article, index) => (
                <Link key={article.slug} href={`/${lang}/knowledge/${article.slug}`} className="group block border-b border-slate-300 py-7 dark:border-slate-700">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span>{article.date}</span>
                    <span aria-hidden="true">/</span>
                    <span>{index === 0 ? (isZh ? '今日热门话题' : "Today's Hot Topic") : (isZh ? '行业洞察' : 'Industry Insight')}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug transition-colors group-hover:text-[#0b4a6f] dark:group-hover:text-sky-300">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.summary}</p>
                  <ArrowRight className="mt-5 h-5 w-5 text-[#d98b28] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2d42] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
              <Image
                src="/images/home-modern/signature-lounge.jpeg"
                alt={isZh ? '酒店筹开投资优化项目场景' : 'Hotel pre-opening investment optimization'}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300">{isZh ? '案例与成果' : 'Cases and outcomes'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {isZh ? '真实项目经验，是专业判断的最好证明' : 'Real project experience is the strongest proof of professional judgment'}
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
            <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '专业交流' : 'Professional conversation'}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              {isZh ? '当酒店面临关键决策，可以先交流问题' : 'When a hotel faces a critical decision, start by discussing the issue'}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              {isZh ? '酒店投资、筹建或经营过程中，很多问题越早判断，调整成本越低。您可以告诉我们项目阶段、所在区域以及当前面临的问题，我们会基于实际情况共同分析问题来源，判断下一步需要关注的重点。' : 'Across hotel investment, development, and operations, earlier judgment usually means a lower cost of correction. Tell us the project stage, location, and current challenge. We will examine the situation with you and identify what deserves attention next.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 font-semibold text-white hover:bg-[#073a58]">
              <FileText className="h-5 w-5" />
              {isZh ? '交流一个酒店问题' : 'Discuss a hotel issue'}
            </Link>
            <a href="tel:18941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-[#0b4a6f] hover:text-[#0b4a6f] dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
              <Phone className="h-5 w-5" />
              18941579333
            </a>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">{isZh ? '电话与微信同号' : 'Phone and WeChat use the same number'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
