import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, FileText, LineChart, Cpu } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ type?: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const { type } = await searchParams
  const dict = getDict(lang)
  const isPlan = type === 'plan'
  const isAiWebsiteAudit = type === 'ai-website-audit' || type === 'ai-info-platform'
  return {
    title: isAiWebsiteAudit
      ? (lang === 'zh' ? '获取酒店 AI 信息平台建议' : 'Request AI Information Platform Recommendations')
      : isPlan
        ? dict.nav.getPlan
        : dict.nav.contact,
  }
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ type?: string }>
}) {
  const { lang } = await params
  const { type } = await searchParams
  const dict = getDict(lang)
  const isZh = lang === 'zh'
  const isPlan = type === 'plan'
  const isAiWebsiteAudit = type === 'ai-website-audit' || type === 'ai-info-platform'

  const scenarios = [
    isZh ? '正在判断一个酒店项目该不该投。' : 'You are deciding whether a hotel project is worth investing in.',
    isZh ? '品牌、定位或客群策略需要重新梳理。' : 'Your brand, positioning, or target guest strategy needs to be reworked.',
    isZh ? '经营动作很多，但增长和利润改善并不稳定。' : 'There is a lot of activity, but growth and profit improvement remain unstable.',
    isZh ? 'OTA 依赖过高，直订和会员转化较弱。' : 'OTA dependency is too high, while direct bookings and member conversion are weak.',
    isZh ? '想推进 AI 或数字化，但不想做成表面工程。' : 'You want practical AI or digital implementation, not a surface-level rollout.',
    isZh ? '想找一个更懂项目判断与落地推进的长期合作方。' : 'You want a partner who understands both project judgment and execution follow-through.',
  ]

  const firstCallTopics = [
    isZh ? '你的项目现在处于什么阶段。' : 'What stage the project is currently in.',
    isZh ? '你最关心的目标是什么。' : 'What outcome matters most right now.',
    isZh ? '当前最难推进的问题在哪里。' : 'Where progress is hardest at the moment.',
    isZh ? '目前已经尝试过哪些动作。' : 'What actions have already been tried.',
    isZh ? '更适合先做判断、先做诊断，还是先做专项支持。' : 'Whether the right next step is judgment, diagnosis, or targeted support.',
  ]

  const responseNotes = [
    isZh ? '适合留下的资料：项目阶段、目标、关键问题、所在城市或物业类型。' : 'Useful information to leave with us: project stage, goals, key issues, city, or asset type.',
    isZh ? '响应方式：邮件、电话，或后续约定的沟通方式。' : 'Response channels: email, phone, or a follow-up conversation format we agree on.',
    isZh ? '建议参与人：投资方、业主方、项目负责人或经营管理者。' : 'Recommended participants: investors, owners, project leads, or operating managers.',
  ]

  const planHighlights = [
    {
      icon: FileText,
      title: isZh ? '先判断项目值不值得推进' : 'Clarify whether the project should move forward',
      desc: isZh ? '不是先给结论，而是先帮助你把项目阶段、目标和风险边界讲清楚。' : 'Before prescribing solutions, we clarify the project stage, target outcomes, and risk boundaries.',
    },
    {
      icon: LineChart,
      title: isZh ? '再确定更适合的增长路径' : 'Identify the right growth path',
      desc: isZh ? '根据经营问题、客群结构和增长目标，决定是做诊断、做方案还是进入专项支持。' : 'Based on business issues, guest structure, and growth goals, we decide whether diagnosis, planning, or targeted support is the right next step.',
    },
    {
      icon: Cpu,
      title: isZh ? '最后匹配 AI 与执行节奏' : 'Match AI implementation to execution rhythm',
      desc: isZh ? '确保数字化不是概念展示，而是可以真正进入项目推进节奏的经营动作。' : 'Ensure digital execution becomes an operating routine rather than a conceptual showcase.',
    },
  ]

  const aiWebsiteHighlights = [
    {
      icon: FileText,
      title: isZh ? '先看 AI 是否理解您的酒店' : 'First check whether AI understands your hotel',
      desc: isZh ? '我们会从 AI 搜索、地图搜索、OTA 页面、社交内容、已有官网和信息结构出发，判断酒店价值是否完整、准确、可抓取。' : 'We look at AI search, map search, OTA pages, social content, any existing website, and the information structure to assess whether the hotel value is complete, accurate, and readable.',
    },
    {
      icon: LineChart,
      title: isZh ? '再判断该补什么能力' : 'Then decide what capability is missing',
      desc: isZh ? '不是为了做网站而做网站，而是先区分需要新建轻量信息平台、优化已有入口，还是由我们长期代写、上传和维护内容。' : 'We do not build a website for the sake of building one. We decide whether the hotel needs a lightweight platform, stronger existing entry points, or ongoing content writing, uploading, and maintenance.',
    },
    {
      icon: Cpu,
      title: isZh ? '最后形成可执行路径' : 'Finally create an actionable path',
      desc: isZh ? '如果需要建设，我们会给出信息平台结构、重点页面、询价入口、推文方向、关键词和后续维护节奏。' : 'If a build is needed, we define the platform structure, key pages, inquiry path, post topics, keywords, and maintenance rhythm.',
    },
  ]

  const contactPoints = [
    {
      label: dict.contact.form.phone,
      value: dict.contact.info.phone,
      icon: Phone,
    },
    {
      label: dict.contact.form.email,
      value: dict.contact.info.email,
      icon: Mail,
    },
    {
      label: isZh ? '地址' : 'Address',
      value: dict.contact.info.address,
      icon: MapPin,
    },
  ]

  return (
    <>
      <PageHero
        title={isAiWebsiteAudit
          ? (isZh ? '先做一次酒店 AI 信息体检，再决定如何建设与托管内容' : 'Start with an AI information audit before building and operating the right content platform')
          : isPlan
            ? (isZh ? '先获取项目判断路径，再决定下一步怎么推进' : 'Get a clear project path before deciding the next move')
            : (isZh ? '先把项目现状讲清楚，再决定下一步怎么做' : 'Clarify the current project situation first, then decide what should happen next')}
        subtitle={isAiWebsiteAudit
          ? (isZh ? '告诉我们酒店名称、所在城市、是否已有官网、目前主要依赖哪些平台，以及是否需要内容代运营。迈创兄弟C&T 会先判断：您的酒店信息是否被 AI 和客人正确理解，以及是否具备搜索、展示和询价承接能力。' : 'Share the hotel name, city, whether it has a website, which platforms it currently depends on, and whether ongoing content operations are needed. MarvelBros C&T will first assess whether AI systems and guests can understand the hotel correctly, and whether it has the search, presentation, and inquiry readiness needed.')
          : isPlan
            ? (isZh ? '“获取方案”不是立即拿一份通用答案，而是先让 MBCT 帮你判断：这个项目该怎么切入、该先解决什么、以及更适合的推进路径是什么。' : 'Getting a plan does not mean receiving a generic answer. It means letting MBCT first determine where the project should start, what should be solved first, and what path forward makes the most sense.')
            : (isZh ? '你不需要一开始就准备得非常完整。只要把项目阶段、核心目标和目前最难推进的问题告诉我们，我们会先帮你判断，从哪里切入更合适。' : 'You do not need a perfect brief to start. Share the project stage, your main objective, and the hardest issue to move forward, and we will help you decide the most suitable point of entry.')}
        bgImage="/hero-rod-long-2P_ifaetDm0-unsplash.jpg"
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {(isPlan || isAiWebsiteAudit) && (
            <div className="mb-10 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <div className="max-w-3xl mb-8">
                <p className="text-sm font-medium text-primary mb-4">
                  {isAiWebsiteAudit
                    ? (isZh ? '开始体检之前，先明确这三件事' : 'Before the audit, clarify these three things')
                    : (isZh ? '获取方案之前，先明确这三件事' : 'Before a plan, clarify these three things')}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {isAiWebsiteAudit
                    ? (isZh ? '先判断酒店信息是否被 AI 看懂，再决定补平台还是补内容' : 'Judge whether AI can understand the hotel information before choosing platform build or content operations')
                    : (isZh ? 'MBCT 先帮你判断，再决定更适合的合作方式' : 'MBCT helps you judge first, then choose the right engagement path')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAiWebsiteAudit
                    ? (isZh ? '这一步的重点不是立刻做网站，而是先看清酒店信息、现有线上入口、询价路径和内容更新能力是否已经具备 AI 搜索时代的基本承接能力。没有官网、没有 IT、没有文案团队的酒店，也可以从轻量信息平台和内容托管开始。' : 'The goal is not to build a website immediately. It is to understand whether the hotel information, current online entry points, inquiry path, and content update capability are ready for the age of AI search. Hotels without a website, IT team, or content team can start with a lightweight information platform and managed content operations.')
                    : (isZh ? '这一步的重点不是立刻给出一份通用方案，而是先看清项目属于什么场景、问题出在什么地方、以及更适合进入哪一种支持方式。' : 'The goal is not to hand over a generic solution immediately. It is to identify the project situation, locate the real problem, and determine the right form of support.')}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {(isAiWebsiteAudit ? aiWebsiteHighlights : planHighlights).map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-start">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
                <p className="text-sm font-medium text-primary mb-4">
                  {isZh ? '适合直接联系 MBCT 的常见情况' : 'Typical situations where it makes sense to contact MBCT'}
                </p>
                <div className="space-y-4 text-sm md:text-base text-foreground">
                  {scenarios.map((item) => (
                    <div key={item} className="flex items-start gap-3 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
                <p className="text-sm font-medium text-primary mb-4">
                  {isZh ? '首次沟通通常会围绕这几件事展开' : 'The first conversation usually revolves around these points'}
                </p>
                <div className="space-y-4 text-sm md:text-base text-foreground">
                  {firstCallTopics.map((item) => (
                    <div key={item} className="flex items-start gap-3 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <Link
                    href={`/${lang}/services`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                  >
                    {isZh ? '先了解我们的服务结构' : 'See how our services are structured'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {isZh ? '你可以期待怎样的沟通方式' : 'What kind of communication you can expect'}
                </h3>
                <div className="space-y-4 mb-8 text-sm text-muted-foreground leading-relaxed">
                  {responseNotes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-border pt-6">
                  {contactPoints.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{label}</p>
                        {label === dict.contact.form.email ? (
                          <a href={`mailto:${value}`} className="text-sm text-foreground font-medium leading-relaxed hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : label === dict.contact.form.phone ? (
                          <a href={`tel:${value}`} className="text-sm text-foreground font-medium leading-relaxed hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground font-medium leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-6">
              <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-xl" />}>
                <ContactForm dict={dict} />
              </Suspense>
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-7">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                {isAiWebsiteAudit
                    ? (isZh ? '这一步不是立刻做网站，而是先判断 AI 能不能抓懂酒店信息' : 'This stage is not about building a website immediately; it is about judging whether AI can understand the hotel information')
                    : isPlan
                      ? (isZh ? '这一步不是立刻成交，而是先把判断做对' : 'This stage is about getting the judgment right before moving forward')
                    : (isZh ? '如果你已经在思考下一步，就从一次清晰的沟通开始' : 'If you are already thinking about the next move, start with one clear conversation')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isAiWebsiteAudit
                    ? (isZh ? '提交酒店名称、城市、是否已有官网、主要依赖平台和内容维护需求后，迈创兄弟C&T 会先判断酒店信息是否被 AI 和客人正确理解，再决定应新建轻量信息平台、优化已有入口，还是由我们代写、上传和维护可抓取内容。' : 'After you submit the hotel name, city, whether it has a website, the platforms it depends on, and content maintenance needs, MarvelBros C&T will first assess whether the hotel information can be understood by AI and guests before recommending a lightweight platform, stronger existing entry points, or managed AI-readable content operations.')
                    : isPlan
                      ? (isZh ? '提交项目情况后，MBCT 会先帮助你判断：更适合做项目判断、经营诊断，还是进入完整合作。' : 'After you submit the project situation, MBCT will first determine whether the right next step is project assessment, operational diagnosis, or a fuller engagement.')
                    : (isZh ? '比起先讨论很多方案，更重要的是先把项目真正的问题说清楚。MBCT 会先帮你判断问题本质，再决定更合适的推进方式。' : 'Before discussing many solutions, it is more important to clarify the real issue in the project. MBCT will first help identify the problem clearly, then choose the most suitable path forward.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
