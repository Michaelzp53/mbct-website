import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  ClipboardCheck,
  Coins,
  FileText,
  Globe2,
  Hotel,
  LineChart,
  Phone,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const knowledgeAreas = [
    {
      icon: LineChart,
      title: isZh ? '市场与收益' : 'Market and revenue',
      copy: isZh ? '需求判断、定价、渠道、RevPAR与收益策略' : 'Demand, pricing, channels, RevPAR, and revenue strategy',
    },
    {
      icon: Hotel,
      title: isZh ? '产品与服务' : 'Product and service',
      copy: isZh ? '产品定位、客群体验、服务设计与品质管理' : 'Positioning, guest experience, service design, and quality',
    },
    {
      icon: Coins,
      title: isZh ? '成本与效率' : 'Cost and efficiency',
      copy: isZh ? '成本结构、人效、流程与经营利润' : 'Cost structure, productivity, process, and operating profit',
    },
    {
      icon: Building2,
      title: isZh ? '投资与筹开' : 'Investment and pre-opening',
      copy: isZh ? '投资判断、定位、建设控制与筹开落地' : 'Investment judgment, positioning, build control, and opening',
    },
    {
      icon: Users,
      title: isZh ? '团队与管理' : 'Teams and management',
      copy: isZh ? '组织建设、人才培养、绩效与执行能力' : 'Organization, talent, performance, and execution',
    },
    {
      icon: Search,
      title: isZh ? 'AI搜索与增长' : 'AI search and growth',
      copy: isZh ? '信息可见度、内容资产、搜索入口与客户转化' : 'Visibility, content assets, search entry points, and conversion',
    },
  ]

  const latestArticles = [
    {
      title: isZh ? '加盟酒店品牌怎么选？别只看名气，要看它的持续创造价值能力' : "How to Choose a Hotel Franchise Brand: It's About Long-Term Value Creation",
      summary: isZh
        ? '品牌名气只能降低第一次选择成本，真正决定加盟价值的是它能否长期改善产品、价格、渠道、运营与收益。'
        : 'Recognition may lower the first-choice barrier. Long-term franchise value depends on sustained improvements to product, pricing, channels, operations, and returns.',
      slug: 'how-to-choose-hotel-franchise-brand-long-term-value-2026-07-25',
      date: '2026.07.25',
    },
    {
      title: isZh ? '暑期客群变复杂，酒店行业的新机会藏在哪里？' : 'As summer guests get more diverse, where is the real opportunity for hotels?',
      summary: isZh
        ? '真正的新机会，藏在客群结构变复杂以后，酒店能不能识别需求、调整服务承载和线上表达。'
        : 'The opportunity lies in reading a more diverse guest mix, adjusting service capacity, and expressing value clearly online.',
      slug: 'summer-guest-mix-opportunity-hotels-2026-07-24',
      date: '2026.07.24',
    },
    {
      title: isZh ? '酒店想被游客记住，不能只靠房价便宜' : 'Hotels are remembered for value, not just low price',
      summary: isZh
        ? '决定一家酒店能不能被记住的，是它能不能让不同客群感到省心、独特、值得推荐。'
        : 'Memorable hotels make different guest groups feel understood, confident, and ready to recommend the stay.',
      slug: 'hotel-value-beyond-cheap-2026-07-21',
      date: '2026.07.21',
    },
  ]

  const methods = [
    isZh ? '看清真实经营数据和现场' : 'Read the real data and the operating floor',
    isZh ? '找到影响利润的关键问题' : 'Find the issues that materially affect profit',
    isZh ? '把策略变成清晰的执行动作' : 'Turn strategy into clear operating actions',
    isZh ? '跟踪结果，持续校准' : 'Track outcomes and keep improving',
  ]

  const services = [
    {
      icon: ClipboardCheck,
      title: isZh ? '酒店经营诊断' : 'Hotel operational diagnosis',
      copy: isZh ? '从收入、成本、产品、服务和渠道中找到真正影响经营的关键问题。' : 'Find the issues across revenue, cost, product, service, and channels that truly shape performance.',
    },
    {
      icon: Building2,
      title: isZh ? '筹开与投资控制' : 'Pre-opening and investment control',
      copy: isZh ? '从定位、建设、装修到筹开，控制投入，减少浪费，确保开业质量。' : 'Control positioning, construction, fit-out, and opening expenditure while protecting launch quality.',
    },
    {
      icon: BarChart3,
      title: isZh ? '经营改善与托管' : 'Business improvement and management',
      copy: isZh ? '让经营策略进入每天的管理动作，持续改善收入、成本和团队执行。' : 'Move strategy into daily management and improve revenue, cost, and team execution.',
    },
    {
      icon: Globe2,
      title: isZh ? 'AI搜索获客' : 'AI search acquisition',
      copy: isZh ? '把酒店真实优势变成可搜索、可理解、可引用、可咨询的信息资产。' : 'Turn real hotel strengths into searchable, understandable, citable, and inquiry-ready information.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <HeroWithStats lang={lang} />

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '酒店经营者的知识索引' : 'The hotel operator’s knowledge index'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '遇到经营问题，从这里找到方法' : 'Find the method behind every operating challenge'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '我们持续整理酒店投资、筹开、经营、市场、成本、服务和团队管理中的真实问题，让网站成为酒店经营者随时能用的专业字典。'
                  : 'We organize real questions across hotel investment, opening, operations, marketing, cost, service, and people into a practical reference operators can use every day.'}
              </p>
              <Link href={`/${lang}/knowledge`} className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b4a6f] hover:text-[#d98b28] dark:text-sky-300 dark:hover:text-amber-300">
                {isZh ? '浏览全部酒店知识' : 'Browse all hotel knowledge'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-t border-slate-300 dark:border-slate-700">
              {knowledgeAreas.map(({ icon: Icon, title, copy }) => (
                <Link
                  key={title}
                  href={`/${lang}/knowledge`}
                  className="group grid min-h-28 grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-slate-300 py-5 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 sm:grid-cols-[3.5rem_0.6fr_1fr_auto]"
                >
                  <Icon className="h-6 w-6 text-[#d98b28]" />
                  <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                  <p className="hidden text-sm leading-6 text-slate-600 dark:text-slate-300 sm:block">{copy}</p>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0b4a6f]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f8] py-20 dark:bg-slate-900 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-5 border-b border-slate-300 pb-8 dark:border-slate-700 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '最新研究与观察' : 'Latest research and observations'}</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{isZh ? '正在影响酒店经营的事' : 'What is shaping hotel performance now'}</h2>
            </div>
            <Link href={`/${lang}/knowledge`} className="inline-flex items-center gap-2 font-semibold text-[#0b4a6f] hover:text-[#d98b28] dark:text-sky-300">
              {isZh ? '查看全部文章' : 'View all articles'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Link href={`/${lang}/knowledge/${latestArticles[0].slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                <Image
                  src="/images/home-modern/signature-lounge.jpeg"
                  alt={isZh ? '酒店品牌与产品价值评估' : 'Hotel brand and product value assessment'}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{latestArticles[0].date}</span>
                <span aria-hidden="true">/</span>
                <span>{isZh ? '今日热门话题' : "Today's Hot Topic"}</span>
              </div>
              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight transition-colors group-hover:text-[#0b4a6f] dark:group-hover:text-sky-300 md:text-4xl">
                {latestArticles[0].title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{latestArticles[0].summary}</p>
            </Link>

            <div className="border-t border-slate-300 dark:border-slate-700">
              {latestArticles.slice(1).map((article) => (
                <Link key={article.slug} href={`/${lang}/knowledge/${article.slug}`} className="group block border-b border-slate-300 py-8 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span>{article.date}</span>
                    <span aria-hidden="true">/</span>
                    <span>{isZh ? '行业洞察' : 'Industry insight'}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug transition-colors group-hover:text-[#0b4a6f] dark:group-hover:text-sky-300">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.summary}</p>
                  <ArrowRight className="mt-5 h-5 w-5 text-[#d98b28] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
              <Link href={`/${lang}/lean`} className="group flex items-center justify-between border-b border-slate-300 py-7 font-semibold dark:border-slate-700">
                <span>{isZh ? '进入“管享精道”管理知识专栏' : 'Enter the Lean Insights management column'}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/home-modern/advisory-conversation.png"
                alt={isZh ? '酒店经营专家分析项目数据' : 'Hospitality specialists analyzing project data'}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? 'MBCT工作方法' : 'The MBCT method'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '我们不止提出观点，更把问题变成结果' : 'We go beyond opinions and turn issues into results'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '酒店不赚钱，不是单一的环节出了问题。酒店经营、商业策划、市场增长和技术数据能力共同进入项目。我们从现场和数据中建立判断，用清晰的策略和执行动作推动改善。'
                  : 'When a hotel is not profitable, the cause is rarely one isolated link. Hotel operations, commercial planning, market growth, and technology work together on every project. We build judgment from evidence and move improvement through clear strategy and action.'}
              </p>
              <ol className="mt-9 border-t border-slate-300 dark:border-slate-700">
                {methods.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] items-center border-b border-slate-300 py-5 dark:border-slate-700">
                    <span className="text-sm font-bold text-[#d98b28]">0{index + 1}</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ol>
              <Link href={`/${lang}/about`} className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b4a6f] hover:text-[#d98b28] dark:text-sky-300">
                {isZh ? '了解MBCT专业力量' : 'Explore MBCT capabilities'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid border-y border-slate-300 dark:border-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {(
              isZh
                ? [
                    ['超过百家', '核心专业人员酒店项目实践'],
                    ['50+', '项目经验覆盖城市'],
                    ['千万级', '筹开项目节省投资成果'],
                    ['25%', '代表性项目运营成本降幅'],
                  ]
                : [
                    ['100+', 'hotel projects across core specialists'],
                    ['50+', 'cities covered by project experience'],
                    ['RMB 30m+', 'saved in one pre-opening project'],
                    ['25%', 'cost reduction in a representative case'],
                  ]
            ).map(([value, label]) => (
              <div key={label} className="border-b border-slate-300 py-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 dark:border-slate-700">
                <p className="text-3xl font-semibold text-[#0b4a6f] dark:text-sky-300">{value}</p>
                <p className="mt-2 pr-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            {isZh ? '以上为核心专业人员职业项目经验；项目名称与客户信息按行业惯例脱敏。' : 'Figures reflect the professional project experience of core specialists. Project and client identities are anonymized in line with industry practice.'}
          </p>

          <div className="mt-12 grid gap-8 border-y border-amber-300 bg-amber-50/55 px-6 py-8 dark:border-amber-700/60 dark:bg-amber-950/15 md:grid-cols-[0.75fr_1.25fr] md:px-8">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
              {isZh ? '我们为筹开酒店节省投资' : 'We protect investment in hotel pre-opening'}
            </h3>
            <p className="leading-7 text-slate-700 dark:text-slate-200">
              {isZh
                ? '在某国有企业酒店筹开项目中，我们通过建设投资控制、装修方案优化和筹开费用管理，为业主节省超过3000万元投资。该成果由业主项目感谢信确认。'
                : 'In one state-owned hotel pre-opening project, construction control, fit-out optimization, and opening-cost management saved the owner more than RMB 30 million, as confirmed in the owner’s project letter.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2d42] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-amber-300">{isZh ? '从知识进入行动' : 'From knowledge to action'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {isZh ? '当酒店需要改变，我们直接推动结果' : 'When a hotel needs to change, we move the result'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                {isZh
                  ? '每项服务都围绕经营结果组织。我们看清问题、制定策略、进入现场、推动执行。'
                  : 'Every service is organized around operating outcomes. We identify the issue, define the strategy, enter the operation, and drive execution.'}
              </p>
            </div>
            <div className="border-t border-white/25">
              {services.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/25 py-6 sm:grid-cols-[3rem_0.55fr_1fr] sm:items-start">
                  <Icon className="h-6 w-6 text-amber-300" />
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="col-start-2 text-sm leading-6 text-slate-200 sm:col-start-auto">{copy}</p>
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${lang}/services`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d98b28] px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400">
                  {isZh ? '查看完整解决方案' : 'Explore all solutions'}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href={`/${lang}/services/ai-hotel-website`} className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-6 py-3 font-semibold text-white hover:border-white">
                  {isZh ? '进入AI搜索获客方案' : 'Explore AI search acquisition'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '使命与愿景' : 'Mission and vision'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '让专业判断成为酒店长期增长的力量' : 'Make professional judgment a force for lasting hotel growth'}
              </h2>
            </div>
            <div className="grid gap-px bg-slate-300 dark:bg-slate-700 md:grid-cols-2">
              <div className="bg-white p-8 dark:bg-slate-950">
                <Sparkles className="h-7 w-7 text-[#d98b28]" />
                <h3 className="mt-6 text-2xl font-semibold">{isZh ? '我们的使命' : 'Our mission'}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {isZh ? '分享真正有用的酒店经营知识，用专业能力帮助酒店解决问题、改善经营、创造价值。' : 'Share knowledge that operators can use, and apply professional capability to solve problems, improve performance, and create value.'}
                </p>
              </div>
              <div className="bg-white p-8 dark:bg-slate-950">
                <BookOpen className="h-7 w-7 text-[#0b4a6f] dark:text-sky-300" />
                <h3 className="mt-6 text-2xl font-semibold">{isZh ? '我们的愿景' : 'Our vision'}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {isZh ? '成为酒店经营者最值得信赖的知识平台和实战伙伴，让每一家酒店都能找到更好的经营答案。' : 'Become the knowledge platform and operating partner hotel leaders trust most, so every hotel can find a better answer.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f4f7f8] py-16 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '酒店经营诊断' : 'Hotel operational diagnosis'}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              {isZh ? '把酒店情况告诉我们，MBCT直接找到关键问题和改善路径' : 'Tell us what is happening. MBCT will find the key issue and the path forward'}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              {isZh ? '提交酒店所在城市、客房规模和当前最需要解决的问题。我们在48小时内给出明确回应，并安排项目沟通。' : 'Share the city, room count, and most urgent operating issue. We respond clearly within 48 hours and arrange a project conversation.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 font-semibold text-white hover:bg-[#073a58]">
              <FileText className="h-5 w-5" />
              {isZh ? '发起经营诊断' : 'Start an operational diagnosis'}
            </Link>
            <a href="tel:18941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-[#0b4a6f] hover:text-[#0b4a6f] dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
              <Phone className="h-5 w-5" />
              18941579333
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
