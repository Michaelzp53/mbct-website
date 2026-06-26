import Link from 'next/link'
import { ArrowRight, CheckCircle2, Compass, Target, TrendingUp, Shield, Users, Briefcase, Building2, LineChart, Cpu, FolderKanban, SearchCheck, Hotel, MessagesSquare } from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'
import ScrollFade from '@/components/scroll-fade'
import SectionWithBg from '@/components/SectionWithBg'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const capabilityGroups = [
    {
      icon: Compass,
      title: isZh ? '投前决策' : 'Investment Decisions',
      summary: isZh
        ? '判断项目该不该投、怎么投、风险在哪里。'
        : 'Clarify whether a project should move forward, how it should be structured, and where the risks sit.',
      items: isZh
        ? ['可行性研究', '市场与竞争判断', '投资测算与回报模型']
        : ['Feasibility studies', 'Market and competitive assessment', 'Return modeling and investment scenarios'],
      color: '#4285f4',
    },
    {
      icon: TrendingUp,
      title: isZh ? '经营增长' : 'Operating Growth',
      summary: isZh
        ? '围绕 RevPAR、直销、复购与团队执行，把增长做成持续系统。'
        : 'Build a repeatable system around RevPAR, direct bookings, retention, and execution discipline.',
      items: isZh
        ? ['运营诊断与增长', '私域与会员增长', '品牌定位与升级']
        : ['Operations diagnosis and growth', 'Private-domain and membership growth', 'Brand positioning and upgrades'],
      color: '#34a853',
    },
    {
      icon: Shield,
      title: isZh ? 'AI 落地' : 'AI Implementation',
      summary: isZh
        ? '把 AI 从概念变成经营动作、数据机制与组织效率。'
        : 'Turn AI from a concept into operating routines, management visibility, and team efficiency.',
      items: isZh
        ? ['AI 管理系统', '数据看板与流程机制', '陪跑式顾问支持']
        : ['AI management systems', 'Dashboards and operating mechanisms', 'Execution partnership and advisory support'],
      color: '#f59e0b',
    },
  ]

  const fitCases = [
    isZh ? '新项目需要判断是否值得投、如何筹开更稳。' : 'A new project needs sharper go/no-go judgment and a more stable opening path.',
    isZh ? '存量酒店增长遇到瓶颈，RevPAR、直销或复购停滞。' : 'An existing hotel has stalled on RevPAR, direct bookings, or repeat business.',
    isZh ? '团队执行很忙，但数据、节奏与结果没有形成闭环。' : 'The team is active, but data, operating rhythm, and results are not yet connected.',
  ]

  const decisionPaths = [
    {
      icon: FolderKanban,
      title: isZh ? '新项目判断' : 'Project Assessment',
      desc: isZh
        ? '适合正在做投资判断、筹开规划或重新定位的项目。'
        : 'For projects evaluating investment, pre-opening structure, or repositioning.',
      iconBg: 'bg-amber-100 dark:bg-amber-400/15',
      iconColor: 'text-amber-700 dark:text-amber-300',
      iconRing: 'ring-amber-200/80 dark:ring-amber-400/20',
    },
    {
      icon: LineChart,
      title: isZh ? '经营增长' : 'Growth Execution',
      desc: isZh
        ? '适合增长卡住、RevPAR承压、直销和复购偏弱的酒店。'
        : 'For hotels under RevPAR pressure, weak direct sales, or stalled repeat business.',
      iconBg: 'bg-emerald-100 dark:bg-emerald-400/15',
      iconColor: 'text-emerald-700 dark:text-emerald-300',
      iconRing: 'ring-emerald-200/80 dark:ring-emerald-400/20',
    },
    {
      icon: Cpu,
      title: isZh ? 'AI落地' : 'AI Execution',
      desc: isZh
        ? '适合希望推进数字化，但不想停留在概念层面的团队。'
        : 'For teams that want digital execution without stopping at surface-level concepts.',
      iconBg: 'bg-orange-100 dark:bg-orange-400/15',
      iconColor: 'text-orange-700 dark:text-orange-300',
      iconRing: 'ring-orange-200/80 dark:ring-orange-400/20',
    },
  ]

  const aiWebsiteCards = [
    {
      icon: SearchCheck,
      title: isZh ? 'AI 信息体检' : 'AI Information Audit',
      desc: isZh
        ? '检查酒店在 AI 搜索、地图搜索、OTA 页面、社交内容和已有官网中的呈现，判断信息是否完整、准确、可抓取。'
        : 'Review how the hotel appears across AI search, map search, OTA pages, social content, and any existing website, then identify whether the information is complete, accurate, and readable.',
    },
    {
      icon: Hotel,
      title: isZh ? '信息平台建设' : 'Information Platform Build',
      desc: isZh
        ? '把房型、位置交通、会议长住、企业客户和本地体验整理成 AI 能抓取、客人能看懂、销售能承接的信息平台。'
        : 'Turn rooms, location, meetings, long stays, corporate clients, and local experience into an AI-readable platform guests can understand and sales teams can act on.',
    },
    {
      icon: MessagesSquare,
      title: isZh ? '内容托管运营' : 'Content Operations',
      desc: isZh
        ? '长期代写、上传和维护酒店页面、推文、FAQ 和关键词表达，让 AI 持续有新内容可以抓取。'
        : 'Continuously write, upload, and maintain hotel pages, posts, FAQs, and keyword language so AI systems have fresh content to crawl.',
    },
  ]

  const whyMbct = [
    {
      icon: Briefcase,
      title: isZh ? '既懂投资，也懂经营' : 'Understands investment and operations',
      desc: isZh
        ? '不是只会写报告，也不是只会做系统，而是把投前判断、经营动作与后续执行放在同一张图里。'
        : 'Not just reports and not just software. We connect investment judgment, operating actions, and implementation in one commercial logic.',
    },
    {
      icon: Building2,
      title: isZh ? '只做酒店，不做泛咨询' : 'Hospitality-focused, not generic consulting',
      desc: isZh
        ? '品牌、流量、收益、组织、成本都围绕酒店经营场景展开，更容易落地。'
        : 'Brand, traffic, revenue, teams, and cost structures are all handled through real hospitality operating scenarios.',
    },
    {
      icon: Users,
      title: isZh ? '不是卖工具，而是盯结果' : 'Built around outcomes, not tools',
      desc: isZh
        ? '先判断问题本质，再决定是做诊断、做方案，还是进入完整合作。'
        : 'We start by diagnosing the real issue, then decide whether the right next step is advice, a diagnostic review, or a full engagement.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <HeroWithStats lang={lang} />

      <section className="relative overflow-hidden bg-[#fff8ec] py-16 md:py-20 dark:bg-[#17120d]">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-amber-200/45 blur-3xl dark:bg-amber-500/10" />
          <div className="absolute right-[-6rem] bottom-[-10rem] h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl dark:bg-emerald-500/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <ScrollFade>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm dark:border-amber-400/20 dark:bg-white/5 dark:text-amber-300">
                  <SearchCheck className="h-4 w-4" />
                  {isZh ? '新服务：酒店 AI 信息平台建设与内容托管' : 'New service: AI-ready hotel information platform and content operations'}
                </div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#17120d] md:text-5xl dark:text-white">
                  {isZh ? '你的酒店被 AI 推荐了吗？客人搜到了吗？' : 'Is your hotel being recommended by AI, and can guests find it?'}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5b4631] md:text-lg dark:text-slate-300">
                  {isZh
                    ? 'AI 搜索正在改变客人发现酒店的方式。迈创兄弟C&T 先帮酒店做一次 AI 信息体检，再判断应建设轻量平台、优化已有入口，还是由我们持续代写和维护可抓取内容。'
                    : 'AI search is changing how guests discover hotels. MarvelBros C&T starts with an AI information audit, then determines whether the hotel needs a lightweight platform, stronger existing entry points, or ongoing AI-readable content operations.'}
                </p>
                <div className="mt-7 space-y-3 text-sm leading-relaxed text-[#5b4631] dark:text-slate-300">
                  {(isZh
                    ? [
                        '酒店不是没有价值，而是线上信息可能没有被 AI 正确理解。',
                        '房型、位置、会议、长住、企业客户等优势，如果只散落在图片、OTA 页面和简短介绍里，AI 很难推荐给真正需要的人。',
                        '我们不做渠道对立，只帮酒店搭建并长期维护一套更容易被 AI 抓取、被客人理解、能承接询价的自有信息资产。',
                      ]
                    : [
                        'Many hotels do have value, but their online information may not be understood correctly by AI systems.',
                        'If rooms, location, meetings, long stays, and corporate-client strengths are scattered across images, OTA pages, or generic descriptions, AI has little to recommend.',
                        'We do not position this against any channel. We help hotels build and maintain owned information assets that AI can read, guests can understand, and inquiries can flow through.',
                      ]).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700 dark:text-amber-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${lang}/services/ai-hotel-website`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17120d] px-6 py-3 text-sm font-semibold text-[#fff8ec] shadow-lg shadow-amber-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-amber-400 dark:text-[#17120d]"
                  >
                    {isZh ? '获取我的酒店 AI 信息平台建议' : 'Get AI information platform recommendations'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/${lang}/services/ai-hotel-website#process`}
                    className="inline-flex items-center justify-center rounded-xl border border-amber-700/30 bg-white/60 px-6 py-3 text-sm font-semibold text-[#5b4631] transition-colors hover:border-amber-700 hover:text-[#17120d] dark:border-amber-400/25 dark:bg-white/5 dark:text-amber-200 dark:hover:text-white"
                  >
                    {isZh ? '查看详情' : 'See how it works'}
                  </Link>
                </div>
              </div>
            </ScrollFade>

            <ScrollFade delay={120}>
              <div className="grid gap-4">
                {aiWebsiteCards.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-3xl border border-amber-200/70 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700/80 dark:text-amber-300/80">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="text-lg font-semibold text-[#17120d] dark:text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#6f5a42] dark:text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFade>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 dark:border-primary/30 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">
                  {isZh ? '先判断你属于哪一种项目场景' : 'Start with the project situation you are in'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {isZh ? '迈创兄弟C&T 不是给所有人一套标准答案' : 'MarvelBros C&T does not force one standard answer on every client'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {isZh
                  ? <>我们先判断项目所处阶段、真正卡住的问题和更适合的推进路径，<br />再决定是做诊断、做方案，还是进入完整合作。</>

                  : 'We first identify the project stage, the real constraint, and the right way forward, then decide whether diagnosis, solution design, or a full engagement is the right next step.'}
              </p>
            </div>
          </ScrollFade>

          <div className="grid gap-6 md:grid-cols-3">
            {decisionPaths.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollFade key={item.title} delay={index * 100}>
                  <div className="h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} ring-1 ${item.iconRing} flex items-center justify-center mb-5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </ScrollFade>
              )
            })}
          </div>
        </div>
      </section>

      <SectionWithBg bgImage="/hero-roberto-nickson-MA82mPIZeGI-unsplash.jpg" overlayOpacity={0.88}>
        <ScrollFade>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                {isZh ? '从业务罗列，回到增长主线' : 'From service lists back to the growth logic'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? '迈创兄弟C&T 的核心能力，不止是做很多事' : 'MarvelBros C&T is not defined by doing many things'}
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {isZh
                ? '我们更擅长的是：把酒店投资判断、经营增长和 AI 落地，组织成一套能执行、能复盘、能持续优化的增长系统。'
                : 'What matters more is our ability to organize hotel investment judgment, operating growth, and AI implementation into one system that can be executed, reviewed, and improved.'}
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilityGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <ScrollFade key={group.title} delay={index * 120}>
                <div className="h-full rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-white/10 p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${group.color}22` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: group.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{group.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">{group.summary}</p>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFade>
            )
          })}
        </div>
      </SectionWithBg>

      <SectionWithBg bgImage="/hero-franck-morisset-UFhM8kMuQbo-unsplash.jpg" overlayOpacity={0.88}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <ScrollFade>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isZh ? '为什么是迈创兄弟C&T？' : 'Why MarvelBros C&T?'}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                {isZh
                  ? '传统顾问常停在建议，纯技术公司常停在工具。迈创兄弟C&T 更适合需要判断、执行与复盘同时在线的酒店项目。'
                  : 'Traditional advisors often stop at recommendations. Pure technology vendors often stop at tools. MarvelBros C&T is built for hotel projects that need judgment, execution, and review working together.'}
              </p>
              <div className="space-y-4">
                {whyMbct.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollFade>

          <ScrollFade delay={140}>
            <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 md:p-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 mb-5">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">
                  {isZh ? '适合什么项目先来聊' : 'Good fit for an initial conversation'}
                </span>
              </div>
              <div className="space-y-4">
                {fitCases.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:opacity-80 transition-opacity"
                >
                  {isZh ? '查看解决方案' : 'See the solution structure'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </SectionWithBg>

      <SectionWithBg bgImage="/hero-rod-long-2P_ifaetDm0-unsplash.jpg" overlayOpacity={0.88}>
        <ScrollFade>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {isZh ? '如果项目正在卡住，就从一次项目沟通开始' : 'If the project is stuck, start with an initial project conversation'}
            </h2>
            <p className="text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
              {isZh
                ? '先把项目现状、目标和关键卡点讲清楚，再决定更适合做诊断、做方案，还是进入完整合作。'
                : 'Share the current situation, target outcomes, and key bottlenecks first. Then decide whether the right next step is a diagnostic review, a working plan, or a full engagement.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact?type=plan`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                {isZh ? '获取方案' : 'Get a Plan'}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors"
              >
                {isZh ? '查看解决方案' : 'View Solutions'}
              </Link>
            </div>
          </div>
        </ScrollFade>
      </SectionWithBg>
    </div>
  )
}
