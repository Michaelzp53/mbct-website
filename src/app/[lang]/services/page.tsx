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
import Script from 'next/script'

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
  const isZh = lang === 'zh'
  const title = isZh ? '酒店增长解决方案｜投前判断、经营诊断与AI信息平台' : 'Hotel Growth Solutions | Investment Judgment, Operations Diagnosis and AI Information Platform'
  const description = isZh
    ? '迈创兄弟C&T围绕酒店投前决策、经营增长、数字化赋能与AI信息平台建设，帮助投资人与经营团队把判断、动作和结果连成可执行路径。'
    : 'MarvelBros C&T connects hotel investment judgment, operating growth, digital enablement, and AI-ready information platforms into executable paths for investors and operators.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.marvelbros.com/${lang}/services`,
      languages: {
        zh: 'https://www.marvelbros.com/zh/services',
        en: 'https://www.marvelbros.com/en/services',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      alternateLocale: isZh ? 'en_US' : 'zh_CN',
      url: `https://www.marvelbros.com/${lang}/services`,
      siteName: isZh ? '迈创兄弟C&T（MarvelBros C&T）' : 'MarvelBros C&T',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const isZh = lang === 'zh'
  // icons reordered to match new 3-group service layout: 投前决策 → 经营增长 → AI落地
  const icons = ['Building2', 'Sparkles', 'Landmark', 'TrendingUp', 'Users', 'Megaphone', 'BookOpen', 'BarChart3', 'Shield']

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
      title: isZh ? '诊断现状，锁定真问题' : 'Diagnose & Pinpoint',
      description: isZh
        ? '不急着给方案。先围绕投前决策、经营增长或AI落地场景，数据化地拆清项目当前的真实卡点和机会所在。'
        : 'No rush to solutions. We first use data to break down the real bottlenecks and opportunities—whether in pre-investment, operations, or AI implementation.',
    },
    {
      step: '02',
      title: isZh ? '设计路径，匹配能力链' : 'Design & Align',
      description: isZh
        ? '根据诊断结论，从三大能力群组中组合最适配的服务模块，生成一条从策略到执行的可交付路线图。'
        : 'Based on findings, we assemble the right modules from three capability clusters into a delivery roadmap from strategy to execution.',
    },
    {
      step: '03',
      title: isZh ? '落地执行，守住结果' : 'Execute & Deliver',
      description: isZh
        ? '每项建议都有明确的执行路径、责任节点与可验证的成果标准。我们陪跑到结果闭环，而非交付报告就结束。'
        : 'Every recommendation has a clear execution path, milestones, and verifiable success criteria. We partner through to results closure, not just report delivery.',
    },
  ]

  const serviceMeta = [
    // ===== Group 1: 投前决策 =====
    {
      audience: isZh ? '投资人 / 业主 / 筹备中的项目方' : 'Investors / owners / projects in preparation',
      forWho: isZh
        ? '正在评估一个酒店项目是否值得投入、以及以什么条件投入的决策方。'
        : 'Decision-makers evaluating whether and on what terms a hotel project is worth pursuing.',
      problem: isZh
        ? '帮你看清市场空间到底有多大、什么回报水平算合理、风险边界在哪里、资本效率是否达标。'
        : 'Clarify market room, reasonable return benchmarks, risk boundaries, and capital efficiency thresholds.',
      deliverable: isZh
        ? '基于数据的可投性判断、多情景财务测算、风险量化分析与落地方向建议。'
        : 'Data-driven go/no-go judgment, multi-scenario financial modeling, quantified risk analysis, and directional recommendations.',
    },
    {
      audience: isZh ? '投资人 / 业主 / 筹开项目负责人' : 'Owners / investors / pre-opening leaders',
      forWho: isZh
        ? '筹开新项目、老项目重塑、或品牌定位模糊、在同质化竞争中缺乏差异化的项目。'
        : 'Pre-opening projects, rebranding efforts, or hotels struggling with unclear positioning and commoditized competition.',
      problem: isZh
        ? '明确项目到底该服务谁、卖给谁，以及应该建立什么样的品牌认知来支撑溢价。'
        : 'Define who the project serves, who it sells to, and what brand perception supports premium pricing.',
      deliverable: isZh
        ? '品牌方向与定位策略、叙事结构与VI体系、以及一份可量化的落地执行框架。'
        : 'Brand direction, positioning strategy, narrative structure, VI system, and a quantifiable execution framework.',
    },
    {
      audience: isZh ? '项目方 / 业主 / 资本对接负责人' : 'Project sponsors / owners / capital leads',
      forWho: isZh
        ? '项目方向明确、但需要设计最优资本结构、准备融资材料并推进资金到位的团队。'
        : 'Teams with a clear project direction that need optimal capital structuring, financing materials, and investor engagement.',
      problem: isZh
        ? '让融资动作更专业、更有章法——不只是拿到钱，而是以合理的条件拿到对的钱。'
        : 'Make the financing process professional and structured—not just getting funded, but getting the right capital on the right terms.',
      deliverable: isZh
        ? '财务表达与估值建议、投委会级融资材料、精准对接渠道与全程谈判推进支持。'
        : 'Financial framing, investment-grade materials, targeted investor matching, and full negotiation support.',
    },
    // ===== Group 2: 经营增长 =====
    {
      audience: isZh ? '总经理 / 经营团队 / 存量项目负责人' : 'General managers / operating teams / existing asset leaders',
      forWho: isZh
        ? '经营动作不少但结果不够理想，需要第三方客观视角找出真正瓶颈的酒店项目。'
        : 'Hotels where activity is high but business improvement remains weak—needing an objective third-party view to find the real bottleneck.',
      problem: isZh
        ? '系统化地找出那些拖住经营改善的关键环节，而不是凭经验猜测。'
        : 'Systematically identify the specific factors holding back operating improvement—no guesswork.',
      deliverable: isZh
        ? '全维度诊断结论、分级改善优先级、增长动作清单与推进路线图。'
        : 'Full-dimension diagnostic findings, prioritized remediation plan, growth action list, and execution roadmap.',
    },
    {
      audience: isZh ? '品牌方 / 经营团队 / 会员增长负责人' : 'Brand teams / operating teams / retention leaders',
      forWho: isZh
        ? '希望真正降低对OTA的依赖、建立自有获客与复购体系的品牌或项目。'
        : 'Brands or projects that want genuine OTA independence and a proprietary acquisition and retention system.',
      problem: isZh
        ? '把"做私域"这个想法落地成一个有明确动作、可追踪效果的系统性工程。'
        : 'Turn "build private domain" from an idea into a systematic program with clear actions and measurable impact.',
      deliverable: isZh
        ? '私域体系结构方案、会员路径设计、内容触点矩阵与运营执行建议。'
        : 'Private domain structure, membership path design, content touchpoint matrix, and operating playbook.',
    },
    {
      audience: isZh ? '经营管理者 / 需要持续判断支持的团队' : 'Operators / teams that need ongoing judgment support',
      forWho: isZh
        ? '需要长期专业判断支持、但不一定适合或需要重型顾问驻场的经营团队。'
        : 'Teams that need ongoing professional judgment support without the weight of a full-time consultancy engagement.',
      problem: isZh
        ? '确保关键经营决策有数据与经验支撑，而不是管理层独自判断。'
        : 'Ensure critical operating decisions are backed by data and experience, not gut feel alone.',
      deliverable: isZh
        ? '月度运营诊断、关键决策分析建议与定期经营复盘报告。'
        : 'Monthly operational diagnostics, critical decision analysis, and periodic business review reports.',
    },
    {
      audience: isZh ? '管理团队 / 投资方 / 需要持续行业判断的人' : 'Management teams / investors / leaders who need ongoing market judgment',
      forWho: isZh
        ? '希望持续理解行业变化趋势、减少信息噪音、提高判断准确率的行业从业者。'
        : 'Industry professionals who want a clearer signal amid market noise and sharper strategic judgment.',
      problem: isZh
        ? '把散落的信息整理成有结构的判断框架，而不是堆砌报告数量。'
        : 'Transform fragmented information into structured judgment frameworks—not more reports, better insight.',
      deliverable: isZh
        ? '深度行业研究报告、头部案例复盘、区域市场数据分析与决策参考。'
        : 'In-depth industry reports, benchmark case reviews, regional market data, and strategic decision reference.',
    },
    // ===== Group 3: AI落地 =====
    {
      audience: isZh ? '收益负责人 / 业主 / 运营管理层' : 'Revenue leaders / owners / operations management',
      forWho: isZh
        ? '希望用AI把团队从重复性工作中解放出来、提升定价效率与经营反馈速度的管理者。'
        : 'Leaders who want AI to free their teams from repetitive work, improve pricing efficiency, and speed up operating feedback.',
      problem: isZh
        ? '让日常经营决策从"凭经验感觉"升级为"看数据说话"，同时把低价值重复工作降到最低。'
        : 'Upgrade daily decision-making from instinct to data-driven, while minimizing low-value repetitive tasks.',
      deliverable: isZh
        ? '系统部署与配置、流程对接方案、应用场景设计与持续使用指导。'
        : 'System deployment and configuration, workflow integration, use-case design, and ongoing operating guidance.',
    },
    {
      audience: isZh ? '管理团队 / 需要提效的项目方' : 'Management teams / projects seeking efficiency gains',
      forWho: isZh
        ? '方案已经确定，但需要有人系统性跟进落地执行、管理里程碑并保障效果的项目方。'
        : 'Teams that have a plan but need systematic follow-through on execution, milestone management, and results assurance.',
      problem: isZh
        ? '确保方案不只是停留在纸面上——落地过程有人盯、关键节点有复盘、最终效果有验证。'
        : 'Ensure the plan doesn\'t stay on paper-someone tracks execution, reviews milestones, and verifies outcomes.',
      deliverable: isZh
        ? '透明执行看板、阶段性复盘报告、效果追踪与持续优化建议。'
        : 'Transparent execution dashboard, phase-based review reports, outcome tracking, and continuous improvement guidance.',
    },
  ]

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.marvelbros.com/${lang}/services#service`,
    name: isZh ? '迈创兄弟C&T酒店咨询与AI精益管理服务' : 'MarvelBros C&T Hotel Advisory and AI Lean Management Services',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.marvelbros.com/#organization',
      name: 'MarvelBros C&T',
    },
    areaServed: ['Hong Kong', 'Mainland China', 'Southeast Asia'],
    serviceType: isZh
      ? ['酒店投前决策', '酒店经营增长', '酒店数字化与AI精益管理']
      : ['Hotel investment decision support', 'Hotel operating growth', 'Hotel digitalization and AI lean management'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isZh ? '迈创兄弟C&T核心服务模块' : 'MarvelBros C&T Core Service Modules',
      itemListElement: dict.services.items.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          audience: serviceMeta[index]?.audience,
        },
      })),
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isZh ? '迈创兄弟C&T适合哪些酒店项目？' : 'What hotel projects are suitable for MarvelBros C&T?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isZh
            ? '适合酒店投资人、业主、筹开项目负责人、存量酒店经营团队，以及希望通过数字化和AI精益管理提升经营结果的团队。'
            : 'We work with hotel investors, owners, pre-opening teams, existing hotel operators, and teams seeking measurable improvement through digital intelligence and AI lean management.',
        },
      },
      {
        '@type': 'Question',
        name: isZh ? '服务重点是报告还是落地执行？' : 'Is the focus reports or execution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isZh
            ? '迈创兄弟C&T强调从诊断、路径设计到执行闭环，每项建议都对应明确动作、责任节点和可验证成果。'
            : 'MarvelBros C&T emphasizes diagnosis, roadmap design, and execution closure. Each recommendation is tied to clear actions, milestones, and verifiable outcomes.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id={`services-json-ld-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id={`services-faq-json-ld-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title={isZh ? '三个能力群组，覆盖酒店增长最关键的事' : 'Three capability clusters covering what matters most for hotel growth'}
        subtitle={isZh ? '围绕投前决策、经营增长与AI落地三大方向，MBCT把每个服务模块组织成从诊断到执行的可交付能力链——不是零散产品，而是推进结果的完整系统。' : 'Organized around pre-investment decisions, operational growth, and AI implementation—each module is a link in a deliverable chain from diagnosis to execution, not a standalone product.'}
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
