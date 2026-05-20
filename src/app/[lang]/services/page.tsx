import type { Metadata } from 'next'
import {
  Building2,
  TrendingUp,
  Shield,
  Sparkles,
  BarChart3,
  Users,
  Megaphone,
  Landmark,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  TrendingUp,
  Shield,
  Sparkles,
  BarChart3,
  Users,
  Megaphone,
  Landmark,
  BookOpen,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.services }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const isZh = lang === 'zh'
  const icons = ['Building2', 'Sparkles', 'TrendingUp', 'BarChart3', 'Users', 'Shield', 'Megaphone', 'Landmark', 'BookOpen']

  const iconGradients = [
    'linear-gradient(135deg, #4285f4, #34a853)',
    'linear-gradient(135deg, #34a853, #fbbc04)',
    'linear-gradient(135deg, #fbbc04, #ea4335)',
    'linear-gradient(135deg, #ea4335, #764ba2)',
    'linear-gradient(135deg, #764ba2, #4285f4)',
    'linear-gradient(135deg, #4285f4, #ea4335)',
    'linear-gradient(135deg, #4285f4, #34a853)',
    'linear-gradient(135deg, #34a853, #fbbc04)',
    'linear-gradient(135deg, #fbbc04, #ea4335)',
  ]

  const processSteps = [
    {
      step: '01',
      title: isZh ? '先看清问题' : 'Diagnose First',
      description: isZh
        ? '先把投资、运营、流量、组织的真实问题拆开，不急着给标准答案。'
        : 'We separate investment, operations, traffic, and team issues before prescribing solutions.',
    },
    {
      step: '02',
      title: isZh ? '再设计路径' : 'Design the Path',
      description: isZh
        ? '把顾问建议、数字工具与执行节奏拼成一张能落地的增长路线图。'
        : 'We turn strategy, digital systems, and execution rhythm into an actionable growth roadmap.',
    },
    {
      step: '03',
      title: isZh ? '最后盯住结果' : 'Track Outcomes',
      description: isZh
        ? '上线不是结束。我们持续跟踪关键指标，把方案变成结果。'
        : 'Launch is not the finish line. We keep tracking the metrics that turn plans into results.',
    },
  ]

  const serviceMeta = [
    {
      audience: isZh ? '投资人 / 业主 / 筹备中的项目方' : 'Investors / owners / projects in preparation',
      forWho: isZh ? '正在评估项目是否值得投资的决策方。' : 'Decision-makers evaluating whether a hotel project is worth pursuing.',
      problem: isZh ? '看清市场空间、回报逻辑、风险边界和投入产出关系。' : 'Clarify market room, return logic, risk boundaries, and capital efficiency.',
      deliverable: isZh ? '可行性判断、财务测算、风险分析与方向建议。' : 'Feasibility judgment, financial modeling, risk analysis, and directional advice.',
    },
    {
      audience: isZh ? '投资人 / 业主 / 筹开项目负责人' : 'Owners / investors / pre-opening leaders',
      forWho: isZh ? '筹开项目、老项目重塑、定位模糊的酒店项目。' : 'Pre-opening projects, repositioning efforts, or hotels with unclear identity.',
      problem: isZh ? '明确项目该服务谁、该卖给谁，以及该形成什么样的品牌认知。' : 'Define who the project serves, who it sells to, and what brand perception it should create.',
      deliverable: isZh ? '品牌方向、定位策略、叙事结构与执行框架。' : 'Brand direction, positioning strategy, narrative structure, and execution framework.',
    },
    {
      audience: isZh ? '总经理 / 经营团队 / 存量项目负责人' : 'General managers / operating teams / existing asset leaders',
      forWho: isZh ? '经营动作很多，但结果始终不够理想的项目。' : 'Projects where activity is high but business improvement remains weak.',
      problem: isZh ? '找出真正拖住经营改善的关键环节。' : 'Identify the bottleneck that is actually holding back operating improvement.',
      deliverable: isZh ? '诊断结论、优先级建议、增长动作清单与推进建议。' : 'Diagnostic findings, priority guidance, growth actions, and an execution path.',
    },
    {
      audience: isZh ? '收益负责人 / 业主 / 运营管理层' : 'Revenue leaders / owners / operations management',
      forWho: isZh ? '房价策略、渠道结构、库存效率需要优化的项目。' : 'Hotels that need better pricing, channel mix, or inventory efficiency.',
      problem: isZh ? '提升收益质量，而不是单纯压价冲量。' : 'Improve revenue quality instead of relying on blunt discounting.',
      deliverable: isZh ? '价格策略建议、渠道优化建议与收益管理机制。' : 'Pricing recommendations, channel optimization, and revenue-management routines.',
    },
    {
      audience: isZh ? '品牌方 / 经营团队 / 会员增长负责人' : 'Brand teams / operating teams / retention leaders',
      forWho: isZh ? '希望降低 OTA 依赖、提升会员与复购的项目。' : 'Projects that want less OTA dependency and stronger repeat business.',
      problem: isZh ? '把用户留存和复购从概念变成机制。' : 'Turn retention and repeat purchase from an idea into an operating mechanism.',
      deliverable: isZh ? '私域结构方案、会员路径、内容触点与运营建议。' : 'Private-domain structure, membership paths, content touchpoints, and operating guidance.',
    },
    {
      audience: isZh ? '管理团队 / 需要提效的项目方' : 'Management teams / projects seeking efficiency gains',
      forWho: isZh ? '希望让团队从重复性工作中解放出来的项目。' : 'Projects that want teams spending less time on repetitive work.',
      problem: isZh ? '提升效率、减少低价值重复工作、优化日常经营反馈。' : 'Raise efficiency, reduce low-value repetition, and improve operating feedback loops.',
      deliverable: isZh ? '系统配置、流程支持、应用场景设计与使用建议。' : 'System setup, workflow support, use-case design, and operating guidance.',
    },
    {
      audience: isZh ? '经营管理者 / 需要持续判断支持的团队' : 'Operators / teams that need ongoing judgment support',
      forWho: isZh ? '需要长期判断支持，但未必适合重型顾问项目的团队。' : 'Teams that need continuing decision support without a heavyweight engagement.',
      problem: isZh ? '为经营过程中的关键决策提供持续支持。' : 'Support critical operating decisions as they arise.',
      deliverable: isZh ? '月度诊断、重点问题建议与经营复盘支持。' : 'Monthly diagnosis, advice on critical issues, and review support.',
    },
    {
      audience: isZh ? '项目方 / 业主 / 资本对接负责人' : 'Project sponsors / owners / capital leads',
      forWho: isZh ? '需要资金结构设计、融资材料与对接支持的项目方。' : 'Projects that need capital structuring, financing materials, and investor coordination.',
      problem: isZh ? '让融资动作更专业、更有章法。' : 'Make the financing process more professional and better structured.',
      deliverable: isZh ? '财务表达、融资材料、对接建议与推进支持。' : 'Financial framing, financing materials, connection advice, and execution support.',
    },
    {
      audience: isZh ? '管理团队 / 投资方 / 需要持续行业判断的人' : 'Management teams / investors / leaders who need ongoing market judgment',
      forWho: isZh ? '希望持续理解行业变化与趋势的团队。' : 'Teams that want a clearer read on industry shifts and emerging trends.',
      problem: isZh ? '减少信息噪音，提高行业判断质量。' : 'Reduce noise and improve the quality of industry judgment.',
      deliverable: isZh ? '研究内容、案例复盘、趋势洞察与决策参考。' : 'Research, case reviews, trend insight, and decision support.',
    },
  ]

  return (
    <>
      <PageHero
        title={isZh ? '我们提供的不是零散服务，而是一条能推进结果的服务链' : 'What we provide is not a list of services, but a chain that moves results forward'}
        subtitle={isZh ? '从投前判断，到经营增长，再到 AI 落地，MBCT 的服务是为了让关键问题看得更清楚、推进得更有效。' : 'From pre-investment judgment to operating growth and AI implementation, MBCT is built to make critical issues clearer and progress more effective.'}
        bgImage="/hero-roberto-nickson-MA82mPIZeGI-unsplash.jpg"
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-sm font-medium text-primary mb-4">
                {isZh ? '不是堆服务，而是重建增长系统' : 'Not a menu of services — a rebuilt growth system'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                {isZh ? 'MBCT 用一套从诊断到落地的服务链，帮酒店把增长做实' : 'MBCT links diagnosis, execution, and follow-through into one hospitality growth system'}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                {isZh
                  ? '很多酒店的问题，不是缺一个工具，也不是缺一场培训，而是缺一套能把投资决策、经营动作、客户获取和团队执行串起来的方法。我们的服务不是零散外包，而是围绕经营结果组织起来的完整解决方案。'
                  : 'Most hotels do not fail because they lack one more tool or workshop. They struggle because investment decisions, operating actions, customer acquisition, and team execution are disconnected. Our services are built as one operating system around business outcomes.'}
              </p>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <p className="text-sm font-medium text-primary mb-4">
                {isZh ? '典型合作目标' : 'Typical engagement goals'}
              </p>
              <div className="space-y-4 text-sm md:text-base text-foreground">
                {[
                  isZh ? '新项目需要更稳的投资判断与筹开路线' : 'Sharper investment judgment and opening strategy for new projects',
                  isZh ? '存量酒店需要提升 RevPAR、直销和复购' : 'Higher RevPAR, direct bookings, and repeat business for existing assets',
                  isZh ? '团队执行分散，需要更清晰的数据和机制' : 'Clearer data discipline and operating cadence for fragmented teams',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <Link
                  href={`/${lang}/contact?type=plan`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                >
                  {isZh ? '把你的项目情况发给我们' : 'Tell us about your project'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-primary font-bold text-sm mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-medium text-primary mb-3">
              {isZh ? '核心服务模块' : 'Core service modules'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isZh ? '每一项服务都对应一个真实经营场景' : 'Each service exists to solve a real operating scenario'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isZh
                ? '不做为了看起来完整而堆砌的服务清单。每个模块都对应一个明确的经营问题、一个可执行的动作链，以及一组可追踪的结果。'
                : 'This is not a decorative service catalog. Each module maps to a concrete hotel challenge, a set of executable actions, and measurable outcomes.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.services.items.map((service, i) => {
              const Icon = iconMap[icons[i]] ?? Building2
              const meta = serviceMeta[i]
              return (
                <Card key={service.title} className="border border-border bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 card-themed h-full">
                  <CardHeader className="pb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: iconGradients[i % iconGradients.length] }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-card-foreground leading-snug">{service.title}</CardTitle>
                    <p className="text-xs font-medium text-primary">{meta.audience}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-3 rounded-xl bg-muted/40 p-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">{isZh ? '适合谁' : 'Best for'}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{meta.forWho}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">{isZh ? '解决什么' : 'What it solves'}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{meta.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">{isZh ? '交付什么' : 'What you receive'}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{meta.deliverable}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection dict={dict} lang={lang} />
    </>
  )
}
