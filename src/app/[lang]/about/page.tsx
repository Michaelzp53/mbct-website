import { Target, Compass, TrendingUp, Briefcase, Building2, Users, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const reasons = [
    {
      title: isZh ? '为什么只做酒店' : 'Why hospitality only',
      body: isZh
        ? '酒店不是只靠装修、流量或系统就能做好的行业。它同时牵涉投前判断、产品定位、运营效率、渠道结构、服务体验与长期复购。MBCT 选择专注酒店，不是缩小边界，而是把理解做深，把方法做实，把结果做得更稳定。'
        : 'Hotels are not improved by design, traffic, or software alone. The work sits at the intersection of investment judgment, positioning, operating efficiency, channel structure, guest experience, and repeat business. MBCT focuses on hospitality so the thinking can go deeper and the results can become more stable.',
      icon: Building2,
      color: '#f59e0b',
    },
    {
      title: isZh ? '我们如何理解增长' : 'How we define growth',
      body: isZh
        ? '真正健康的增长，不是短期数据冲高，而是项目逻辑、产品定位、经营动作与利润结构逐步对齐。我们不把增长理解成某一个爆点动作，而是看它能不能被诊断、被执行、被复盘，并最终形成系统能力。'
        : 'Healthy growth is not a temporary spike. It is the gradual alignment of project logic, positioning, operating actions, and profit structure. We do not treat growth as a one-off tactic. We care whether it can be diagnosed, executed, reviewed, and turned into a repeatable capability.',
      icon: TrendingUp,
      color: '#4285f4',
    },
    {
      title: isZh ? '我们如何进入项目' : 'How we enter a project',
      body: isZh
        ? '先判断项目阶段、现实约束和关键目标，再找出真正影响结果的核心问题。之后决定更适合先做可行性研究、运营诊断、AI 管理切入，还是专项支持。推进过程中持续复盘，而不是把一次交付当作结束。'
        : 'We begin by clarifying stage, constraints, and target outcomes. Then we isolate the issue that is truly holding results back. Only after that do we decide whether the right entry point is feasibility, operations diagnosis, AI management, or a focused intervention. Delivery is followed by review, not treated as the finish line.',
      icon: Compass,
      color: '#22c55e',
    },
  ]

  const steps = [
    {
      step: '01',
      title: isZh ? '判断现状' : 'Assess the situation',
      desc: isZh ? '先看项目阶段、现实约束与目标。' : 'Start with the project stage, operating reality, and target outcomes.',
    },
    {
      step: '02',
      title: isZh ? '找出核心问题' : 'Find the core issue',
      desc: isZh ? '不是把所有问题都做一遍，而是先找到真正影响结果的环节。' : 'Do not attack everything at once. Find the factor that is actually shaping results.',
    },
    {
      step: '03',
      title: isZh ? '确定切入方式' : 'Choose the right entry point',
      desc: isZh ? '判断更适合做诊断、方案、系统还是专项支持。' : 'Decide whether diagnosis, strategy, systems, or targeted support is the right next move.',
    },
    {
      step: '04',
      title: isZh ? '推进与复盘' : 'Execute and review',
      desc: isZh ? '围绕重点问题推进，并根据结果持续调整。' : 'Push on the critical issue and keep adjusting based on outcomes.',
    },
  ]

  const comparisons = [
    {
      title: isZh ? '不像传统顾问' : 'Not traditional consulting',
      desc: isZh ? '不是停在分析和报告里，而是更关心项目能不能真正往前推进。' : 'We do not stop at analysis and reports. We care whether the project actually moves forward.',
    },
    {
      title: isZh ? '也不像纯技术公司' : 'Not just a technology vendor',
      desc: isZh ? '不是部署完工具就结束，而是看它有没有进入经营现场并改善决策。' : 'We do not end with deployment. The question is whether the tool improves operating decisions in practice.',
    },
    {
      title: isZh ? '更像长期合作伙伴' : 'Closer to a long-term partner',
      desc: isZh ? '把判断、动作、节奏和结果真正串起来。' : 'We connect judgment, actions, rhythm, and results into one working path.',
    },
  ]

  const fitClients = [
    isZh ? '正在做投前判断的投资方或业主方。' : 'Investors or owners evaluating a project before committing capital.',
    isZh ? '品牌与经营方向都需要重新梳理的酒店项目。' : 'Hotel projects that need a clearer brand and operating direction.',
    isZh ? '已有团队，但经营改进始终不够稳定的管理者。' : 'Managers with a team in place but unstable operating improvement.',
    isZh ? '希望认真推进 AI 落地，而不是做表面数字化的经营者。' : 'Operators who want practical AI implementation rather than surface-level digitization.',
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={isZh ? 'MBCT 不是为了把酒店讲得更好听，而是为了把项目做得更明白' : 'MBCT exists to make hotel projects clearer, not just better presented'}
        titleSize="text-3xl md:text-4xl"
        subtitle={isZh ? '我们专注酒店行业，因为这个行业同时需要商业判断、经营理解与落地执行，而这三件事往往很少被真正放到一起解决。' : 'We focus on hospitality because this industry demands business judgment, operating understanding, and real execution at the same time — and those three things are rarely solved together.'}
        bgImage="/images/home-named/about-us.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {reasons.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl bg-card border border-border p-6 md:p-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-medium text-primary mb-3">
              {isZh ? '项目进入方式' : 'How we typically work'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isZh ? '我们通常这样进入一个项目' : 'We usually enter a project through four practical steps'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isZh
                ? '不是把所有问题都一次性铺开，而是先把真正影响结果的部分识别出来，再决定最合适的推进路径。'
                : 'We do not open every workstream at once. We first identify what is truly affecting outcomes, then choose the most appropriate path forward.'}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-primary font-bold text-sm mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-medium text-primary mb-3">
              {isZh ? '品牌立场' : 'Brand position'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isZh ? 'MBCT 更像什么，不像什么？' : 'What MBCT is closer to — and what it is not'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-card border border-border p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                  {index === 0 ? <Briefcase className="w-5 h-5 text-amber-400" /> : index === 1 ? <Target className="w-5 h-5 text-amber-400" /> : <Users className="w-5 h-5 text-amber-400" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {isZh ? '什么样的客户更适合和 MBCT 合作' : 'Who tends to be a strong fit for MBCT'}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {isZh
                  ? '如果你希望有人把项目讲得更漂亮，MBCT 未必合适。如果你希望有人和你一起把问题看清、路径定准、动作推进，MBCT 会更适合。'
                  : 'If you only want a better-looking narrative, MBCT may not be the right fit. If you want a partner to clarify the issue, choose the path, and push execution forward, the fit is much stronger.'}
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 md:p-7">
              <div className="space-y-4">
                {fitClients.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
