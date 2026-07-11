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
      color: '#0072ce',
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
      color: '#16a34a',
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
      color: '#8ab4f8',
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
      iconBg: 'bg-sky-100 dark:bg-[#8ab4f8]/15',
      iconColor: 'text-[#006bb6] dark:text-[#8ab4f8]',
      iconRing: 'ring-sky-200/80 dark:ring-sky-300/20',
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
      iconBg: 'bg-violet-100 dark:bg-violet-400/15',
      iconColor: 'text-violet-700 dark:text-violet-300',
      iconRing: 'ring-violet-200/80 dark:ring-violet-400/20',
    },
  ]

  const aiWebsiteCards = [
    {
      icon: SearchCheck,
      title: isZh ? 'AI 信息体检' : 'AI Information Audit',
      desc: isZh
        ? '检查 AI、地图、OTA、社交内容和已有官网里的酒店信息，找出哪些内容 AI 抓不到、读不懂。'
        : 'Review AI, maps, OTAs, social content, and any existing website to find what AI cannot crawl or understand.',
    },
    {
      icon: Hotel,
      title: isZh ? '信息平台建设' : 'Information Platform Build',
      desc: isZh
        ? '把房型、位置、会议、长住和企业客户整理成 AI 能抓取、客人能看懂、销售能承接的信息平台。'
        : 'Turn rooms, location, meetings, long stays, and corporate clients into an AI-readable platform guests and sales teams can use.',
    },
    {
      icon: MessagesSquare,
      title: isZh ? '内容托管运营' : 'Content Operations',
      desc: isZh
        ? '长期代写、上传和维护页面、推文、FAQ 和关键词，让 AI 持续有准确内容可以抓取。'
        : 'Continuously write, upload, and maintain pages, posts, FAQs, and keywords so AI has accurate content to crawl.',
    },
  ]

  const hospitalityScenes = [
    {
      image: '/images/home-named/about-us.png',
      eyebrow: isZh ? '服务触点' : 'Service Touchpoint',
      title: isZh ? '把前台服务变成可复盘的经营线索' : 'Turn front-desk service into reviewable operating signals',
      desc: isZh
        ? '从客人咨询、到店、投诉和复购线索里，看清团队执行和产品表达的真实状态。'
        : 'Read the real state of team execution and product expression through inquiries, arrivals, complaints, and repeat intent.',
    },
    {
      image: '/images/home-named/solutions-lounge.jpeg',
      eyebrow: isZh ? '体验细节' : 'Experience Detail',
      title: isZh ? '把空间美感转化为可定价的体验价值' : 'Translate space quality into priceable experience value',
      desc: isZh
        ? '不只看装修是否漂亮，更看它能否支撑客单价、套餐、停留时间和复购理由。'
        : 'Beyond looking beautiful, the experience must support rate, packages, dwell time, and reasons to return.',
    },
    {
      image: '/images/home-named/solutions-dining.jpg',
      eyebrow: isZh ? '收益场景' : 'Revenue Scene',
      title: isZh ? '让餐饮、会议和目的地内容共同带动收益' : 'Connect dining, events, and destination content to revenue',
      desc: isZh
        ? '把餐饮和空间优势放进经营模型里，而不是停留在宣传照片里。'
        : 'Place dining and space advantages inside the operating model, not just inside marketing photos.',
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

      <section className="relative overflow-hidden bg-white py-16 md:py-20 dark:bg-[#0b1020]">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-sky-100/80 blur-3xl dark:bg-sky-500/10" />
          <div className="absolute right-[-6rem] bottom-[-10rem] h-96 w-96 rounded-full bg-blue-100/70 blur-3xl dark:bg-emerald-500/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <ScrollFade>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-medium text-[#003b71] shadow-sm dark:border-sky-300/25 dark:bg-white/5 dark:text-[#8ab4f8]">
                  <SearchCheck className="h-4 w-4" />
                  {isZh ? '新服务：酒店 AI 信息平台建设与内容托管' : 'New service: AI-readable hotel information platform'}
                </div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#101828] md:text-5xl dark:text-white">
                  {isZh ? '你的酒店被 AI 推荐了吗？客人搜到了吗？' : 'Is your hotel being recommended by AI, and can guests find it?'}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#344054] md:text-lg dark:text-slate-300">
                  {isZh
                    ? '酒店优势如果只散落在图片、OTA 页面和零散介绍里，AI 读不懂，就推不出去。迈创兄弟C&T 帮酒店把信息整理成可抓取、可理解、可询价的内容资产。'
                    : 'If hotel strengths are scattered across images, OTA pages, and generic descriptions, AI cannot understand or recommend them. MarvelBros C&T turns hotel information into crawlable, understandable, inquiry-ready content assets.'}
                </p>
                <div className="mt-7 space-y-3 text-sm leading-relaxed text-[#344054] dark:text-slate-300">
                  {(isZh
                    ? [
                        '没有官网的酒店，可以从轻量信息平台开始。',
                        '已有官网但没人维护的酒店，可以从内容托管和关键词更新开始。',
                        '我们不做渠道对立，只帮酒店增加一条可被 AI 理解的自有信息入口。',
                      ]
                    : [
                        'Hotels without a website can start with a lightweight information platform.',
                        'Hotels with an unattended website can start with content operations and keyword maintenance.',
                        'We do not position this against any channel. We add an owned information entry point that AI can understand.',
                      ]).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#006bb6] dark:text-[#8ab4f8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${lang}/services/ai-hotel-website`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003b71] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#002f5f] hover:shadow-xl dark:bg-[#8ab4f8] dark:text-[#06101f]"
                  >
                    {isZh ? '获取 AI 信息平台建议' : 'Get AI platform recommendations'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/${lang}/services/ai-hotel-website#process`}
                    className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white/60 px-6 py-3 text-sm font-semibold text-[#344054] transition-colors hover:border-[#003b71] hover:text-[#101828] dark:border-sky-300/25 dark:bg-white/5 dark:text-sky-100 dark:hover:text-white"
                  >
                    {isZh ? '了解体检怎么做' : 'How the diagnostic works'}
                  </Link>
                  <Link
                    href={`/${lang}/topics/ai-hotel-growth`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-800 transition-colors hover:border-amber-400 hover:bg-amber-100 dark:border-amber-300/25 dark:bg-amber-300/10 dark:text-amber-200 dark:hover:bg-amber-300/15"
                  >
                    {isZh ? '进入 AI 搜索获客专题' : 'AI Search Growth Hub'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <Link
                  href={`/${lang}/knowledge/hotel-ai-recommendation-guest-avoid-direct-booking-2026-07-11`}
                  className="mt-6 block rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-amber-300/20 dark:bg-amber-300/10"
                >
                  <div className="mb-2 inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-amber-700 dark:bg-amber-300/15 dark:text-amber-200">
                    {isZh ? '今日热门话题' : 'Today\'s Hot Topic'}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-[#101828] dark:text-white">
                    {isZh
                      ? 'AI 推荐酒店后，客人为什么不愿直接联系酒店或在酒店平台下单？'
                      : 'If AI Recommends a Hotel, Why Do Guests Still Avoid Booking Direct?'}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467] dark:text-slate-300">
                    {isZh
                      ? 'AI 推荐解决了"被看见"的问题，但从被看见到被选择，中间隔着价格透明度、手机端体验、推荐说服力、官网可信度、联系安全感和直接行动理由六个判断。任何一个环节让客人犹豫，他就会回到最熟悉的 OTA 渠道。'
                      : 'AI recommendation solves the visibility problem, but between being seen and being chosen lie six judgments: price transparency, mobile experience, recommendation persuasiveness, website credibility, contact safety, and a clear reason to act directly.'}
                  </p>
                </Link>
              </div>
            </ScrollFade>

            <ScrollFade delay={120}>
              <div className="grid gap-4">
                {aiWebsiteCards.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#003b71] ring-1 ring-sky-200 dark:bg-[#8ab4f8]/10 dark:text-[#8ab4f8] dark:ring-sky-300/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#006bb6]/80 dark:text-[#8ab4f8]/80">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="text-lg font-semibold text-[#101828] dark:text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#475467] dark:text-slate-300">{item.desc}</p>
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

      <section className="relative overflow-hidden py-16 md:py-20 bg-[#f5f7fb] dark:bg-[#0b1020]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-sky-100/80 blur-3xl dark:bg-sky-500/10" />
          <div className="absolute left-[-10rem] bottom-[-12rem] h-96 w-96 rounded-full bg-[#8faf9a]/20 blur-3xl dark:bg-emerald-500/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFade>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-slate-200 shadow-sm dark:bg-white/5 dark:border-sky-300/25 mb-6">
                <Target className="w-4 h-4 text-[#006bb6] dark:text-[#8ab4f8]" />
                <span className="text-[#003b71] dark:text-[#8ab4f8] text-sm font-medium">
                  {isZh ? '先判断你属于哪一种项目场景' : 'Start with the project situation you are in'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101828] dark:text-white mb-4">
                {isZh ? '迈创兄弟C&T 不是给所有人一套标准答案' : 'MarvelBros C&T does not force one standard answer on every client'}
              </h2>
              <p className="text-[#344054] dark:text-slate-300 text-base md:text-lg leading-relaxed">
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
                  <div className="h-full rounded-3xl border border-white/80 dark:border-white/10 bg-white/82 dark:bg-white/[0.06] p-7 shadow-sm shadow-slate-900/5 backdrop-blur">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} ring-1 ${item.iconRing} flex items-center justify-center mb-5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#101828] dark:text-white mb-3">{item.title}</h3>
                    <p className="text-[#475467] dark:text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </ScrollFade>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-[#0b1020]">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5f7fb] to-transparent dark:from-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFade>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-medium text-[#003b71] shadow-sm dark:border-sky-300/25 dark:bg-white/5 dark:text-[#8ab4f8]">
                <Hotel className="h-4 w-4" />
                {isZh ? '把酒店现场，转化为经营价值' : 'Turning hotel moments into operating value'}
              </div>
              <h2 className="text-3xl font-bold leading-tight text-[#101828] md:text-4xl dark:text-white">
                {isZh ? '真正的酒店增长，发生在每一个服务触点里' : 'Real hotel growth happens at every service touchpoint'}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#344054] md:text-lg dark:text-slate-300">
                {isZh
                  ? '从前台接待、空间体验到餐饮收益，MBCT 关注的不只是表面呈现，而是酒店现场每一个影响转化、复购和经营效率的关键细节。'
                  : 'From front-desk service and spatial experience to dining revenue, MBCT focuses on the operational details that shape conversion, repeat demand, and management efficiency.'}
              </p>
            </div>
          </ScrollFade>

          <div className="grid gap-6 lg:grid-cols-3">
            {hospitalityScenes.map((scene, index) => (
              <ScrollFade key={scene.title} delay={index * 120}>
                <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-black/30">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={scene.image}
                      alt={scene.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/68 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur">
                      {scene.eyebrow}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-snug text-[#101828] dark:text-white">{scene.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-slate-300">{scene.desc}</p>
                  </div>
                </article>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <SectionWithBg bgImage="/images/home-named/industry-insights.jpg" overlayOpacity={0.82}>
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
                        <CheckCircle2 className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
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

      <SectionWithBg bgImage="/images/home-named/about-us.png" overlayOpacity={0.84}>
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
                        <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-sky-300" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-400/10 border border-sky-300/25 mb-5">
                <Users className="w-4 h-4 text-sky-300" />
                <span className="text-sky-300 text-sm font-medium">
                  {isZh ? '适合什么项目先来聊' : 'Good fit for an initial conversation'}
                </span>
              </div>
              <div className="space-y-4">
                {fitCases.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center gap-2 text-sky-300 font-semibold hover:opacity-80 transition-opacity"
                >
                  {isZh ? '查看解决方案' : 'See the solution structure'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </SectionWithBg>

      <SectionWithBg bgImage="/images/home-named/contact-us.jpg" overlayOpacity={0.82}>
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
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#003b71] to-[#0072ce] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all"
              >
                {isZh ? '获取方案' : 'Get a Plan'}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white rounded-lg hover:border-sky-300 hover:text-sky-200 transition-colors"
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
