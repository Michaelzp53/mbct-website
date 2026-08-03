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
      title: isZh ? '准备投资一家酒店？' : 'Planning to invest in a hotel?',
      copy: isZh ? '如何判断项目是否值得投资？' : 'How can you judge whether the project is worth the investment?',
      href: `/${lang}/hotel-investment`,
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '酒店正在筹开？' : 'Is the hotel preparing to open?',
      copy: isZh ? '如何避免开业前的关键错误？' : 'How can critical pre-opening mistakes be avoided?',
      href: `/${lang}/hotel-opening`,
    },
    {
      icon: Coins,
      title: isZh ? '酒店经营困难？' : 'Is hotel performance under pressure?',
      copy: isZh ? '为什么入住率提高了，利润仍然下降？' : 'Why can profit fall even when occupancy rises?',
      href: `/${lang}/hotel-operation-improvement`,
    },
    {
      icon: RefreshCw,
      title: isZh ? '酒店成本越来越高？' : 'Are hotel costs continuing to rise?',
      copy: isZh ? '如何提升运营效率？' : 'How can operating efficiency be improved?',
      href: `/${lang}/hotel-operation-improvement`,
    },
    {
      icon: Search,
      title: isZh ? '酒店团队很忙？' : 'Is the hotel team always busy?',
      copy: isZh ? '为什么经营结果没有改善？' : 'Why are operating results still not improving?',
      href: `/${lang}/hotel-revenue`,
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
      title: isZh ? '极端天气打乱行程，酒店的取消政策该不该更灵活？' : 'When Extreme Weather Disrupts Travel, Should Hotel Cancellation Policies Be More Flexible?',
      summary: isZh
        ? '把责任归属、可验证证据、再售窗口和岗位授权放进同一套分级规则，兼顾收入、客诉与长期信任。'
        : 'Use one tiered framework for responsibility, verifiable evidence, reselling windows and decision rights to balance revenue, disputes and long-term trust.',
      slug: 'extreme-weather-hotel-cancellation-policy-2026-08-03',
      date: '2026.08.03',
    },
    {
      title: isZh ? '入境游客增多了，本土品牌酒店为什么还接不住？' : "Inbound Travel Is Growing. Why China's Local Hotel Brands Still Miss Overseas Guests?",
      summary: isZh
        ? '入境需求不会自动变成酒店订单；客源匹配、线上可见、支付确认和到店服务必须形成完整承接链。'
        : 'Inbound demand does not automatically become bookings. Hotels need a complete chain from source-market fit and discovery to payment and on-property service.',
      slug: 'inbound-travel-local-hotel-brands-overseas-guests-2026-08-02',
      date: '2026.08.02',
    },
    {
      title: isZh ? '酒店推广套餐做出来了，为什么客人还是不知道？' : "Why Do Guests Still Not Know About a Hotel's Promotional Packages After They Launch?",
      summary: isZh
        ? '套餐上线不等于完成推广；广告、员工介绍和预订前后信息必须进入同一条客人决策链。'
        : 'Launching a package is not enough. Advertising, staff recommendations and pre- and post-booking information must form one guest decision chain.',
      slug: 'hotel-promotional-package-guest-awareness-2026-08-01',
      date: '2026.08.01',
    },
    {
      title: isZh ? '自驾游“黄金大外环”升温，沿线酒店怎样把过路客变成住店客？' : "China's Golden Highway Loop Is Gaining Attention. How Can Roadside Hotels Turn Passing Traffic into Stays?",
      summary: isZh
        ? '公路带来的是车流，不是自动送上门的订单；停车、充电、晚到与次日出发信息决定酒店能否进入候选名单。'
        : 'Road traffic is not automatic occupancy. Parking, charging, late-arrival and next-day information determine whether a hotel enters the shortlist.',
      slug: 'self-driving-tour-hotels-turn-passing-traffic-into-stays-2026-07-31',
      date: '2026.07.31',
    },
    {
      title: isZh ? '研学旅行升温，酒店怎样准备一间真正可用的“研学客房”？' : 'Educational Family Travel Is Growing. How Should Hotels Adapt the Guest Room?',
      summary: isZh
        ? '家庭需要的不只是亲子装饰，而是能学习、能收纳、能安静休息的客房。'
        : 'Families need more than themed decoration: functional study space, practical storage and reliable quiet-room delivery.',
      slug: 'educational-family-travel-hotel-room-2026-07-30',
      date: '2026.07.30',
    },
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
                src="/images/home-modern/modern-service.jpg"
                alt={isZh ? '酒店团队在真实服务场景中协同工作' : 'A hotel team collaborating in a real service setting'}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="-translate-y-5 text-[21px] font-semibold leading-8 text-[#24745c] dark:text-emerald-300">{isZh ? '30多年酒店行业实践' : 'More than 30 years in hospitality'}</p>
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
              <p className="mt-5 border-l-4 border-[#d98b28] pl-5 text-xl font-semibold leading-8">
                {isZh ? '没有看过真实数据和现场，我们不会轻易下结论。' : 'Without real data and a view of the operation, we do not jump to conclusions.'}
              </p>
              <Link href={`/${lang}/about`} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0b4a6f] hover:text-[#b86d13] dark:text-sky-300">
                {isZh ? '了解团队如何协作' : 'See how the team works together'}
                <ArrowRight className="h-5 w-5" />
              </Link>
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
            {isZh ? '以上成果来自核心专业人员的职业项目经验，以经营问题、专业行动和结果证据呈现。' : 'These results reflect the career project experience of core specialists, presented through business problems, professional actions, and outcome evidence.'}
          </p>
        </div>
      </section>

      <section id="hotel-problems" className="scroll-mt-20 bg-[#f4f7f8] py-20 dark:bg-slate-900 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="-translate-y-5 text-[21px] font-semibold leading-8 text-[#0b4a6f] dark:text-sky-300">{isZh ? '关键决策入口' : 'Critical decision points'}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '酒店投资人和管理者经常遇到的问题' : 'Questions hotel investors and managers often face'}</h2>
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
              <p className="-translate-y-5 text-[21px] font-semibold leading-8 text-[#0b4a6f] dark:text-sky-300">{isZh ? '持续更新的专业索引' : 'A practical reference, continuously updated'}</p>
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
              <p className="-translate-y-5 text-[21px] font-semibold leading-8 text-amber-300">{isZh ? '案例与成果' : 'Cases and outcomes'}</p>
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
            <p className="-translate-y-5 text-[21px] font-semibold leading-8 text-[#24745c] dark:text-emerald-300">{isZh ? '专业交流' : 'Professional conversation'}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              {isZh ? '你的酒店现在最需要先解决哪个问题？' : 'Which problem should your hotel solve first?'}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              {isZh ? '酒店投资、筹建或经营过程中，很多问题越早判断，调整成本越低。您可以告诉我们项目阶段、所在区域以及当前面临的问题，我们会基于实际情况共同分析问题来源，判断下一步需要关注的重点。' : 'Across hotel investment, development, and operations, earlier judgment usually means a lower cost of correction. Tell us the project stage, location, and current challenge. We will examine the situation with you and identify what deserves attention next.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 font-semibold text-white hover:bg-[#073a58]">
              <FileText className="h-5 w-5" />
              {isZh ? '申请酒店项目初步诊断' : 'Request an initial hotel diagnosis'}
            </Link>
            <a href="tel:+8618941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-[#0b4a6f] hover:text-[#0b4a6f] dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
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
