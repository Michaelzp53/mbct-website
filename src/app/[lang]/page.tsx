import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp, Shield } from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'
import BentoServices from '@/components/BentoServices'
import { getDict } from '@/lib/dicts'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDict(lang)
  
  const personas = [
    {
      title: lang === 'zh' ? '投资人' : 'Investors',
      subtitle: lang === 'zh' ? '孤独的决策者' : 'The Lone Decision Maker',
      quote: lang === 'zh' 
        ? '几千万的投资，市场调研的数据却停留在半年前。您需要的不是另一个写报告的顾问，而是一个能陪您扛结果的伙伴。'
        : 'Your feasibility study data is six months stale. What you need isn\'t another report-writing consultant—it\'s a partner who shares your risk.',
    },
    {
      title: lang === 'zh' ? '经营管理者' : 'Hotel Managers',
      subtitle: lang === 'zh' ? '被困住的总经理' : 'The Trapped GM',
      quote: lang === 'zh'
        ? 'OTA的账单像流水，70%的订单，15%的佣金，一年200万就这么流走了。您需要的不是更多工具，是一个7×24小时的AI运营团队。'
        : '70% of your bookings through OTAs at 15% commission—that\'s ¥2M flowing out the door annually. What you need isn\'t more tools, it\'s a 24/7 AI operations team.',
    },
    {
      title: lang === 'zh' ? '创始人' : 'Founders',
      subtitle: lang === 'zh' ? '理想主义者的困境' : 'The Idealist\'s Dilemma',
      quote: lang === 'zh'
        ? '您想做一家有故事、有温度、有灵魂的酒店。情怀和盈利，可以兼得。我们用数据找到您的"审美niche"。'
        : 'You want to build a hotel with soul—story, warmth, and character. Profit and passion don\'t have to be opposites. We find your aesthetic niche through data.',
    },
  ]
  
  const team = [
    {
      letter: 'M',
      title: lang === 'zh' ? 'Marvel / 创始人' : 'Marvel / Founder',
      desc: lang === 'zh' 
        ? '酒店行业需要一次革命，而不是改良。10年咨询经验，坚信数据驱动的力量。'
        : 'The hotel industry needs a revolution, not incremental tweaks. 10 years of consulting experience, unwavering belief in data-driven decisions.',
      color: '#f59e0b',
    },
    {
      letter: 'B',
      title: lang === 'zh' ? 'Business / 商业筹划总监' : 'Business / Business Director',
      desc: lang === 'zh'
        ? '好的战略必须能落地，好的落地必须有效果。前顶级投行分析师。'
        : 'Good strategy means nothing without execution. Good execution means nothing without results. Former top-tier investment bank analyst.',
      color: '#3b82f6',
    },
    {
      letter: 'C',
      title: lang === 'zh' ? 'Consultant / 资深顾问团队' : 'Consultant / Senior Advisory Team',
      desc: lang === 'zh'
        ? '每一个数据背后，都是一个真实的人。5位10年+经验酒店行业专家。'
        : 'Behind every data point is a real person. 5 senior hotel industry experts with over a decade of experience each.',
      color: '#22c55e',
    },
    {
      letter: 'T',
      title: lang === 'zh' ? 'Technical / 技术交付团队' : 'Technical / Tech Delivery Team',
      desc: lang === 'zh'
        ? '技术的价值，是让复杂变简单。基于OpenClaw自研AI Copilot系统。'
        : 'The value of technology is making the complex simple. Built on OpenClaw\'s proprietary AI Copilot system.',
      color: '#8b5cf6',
    },
  ]

  const ctaLink = `/${lang}/contact`
  const guaranteeLink = `/${lang}/guarantee`
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Stats */}
      <HeroWithStats lang={lang} />
      
      {/* Bento Grid Services */}
      <BentoServices lang={lang} />
      
      {/* Pain Points Section */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                {lang === 'zh' ? '理解 · 共情 · 解决' : 'Understand · Empathize · Solve'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {lang === 'zh' ? '我们懂你的困境' : 'We Understand Your Challenges'}
            </h2>
            <p className="text-muted-foreground">
              {lang === 'zh' ? '三种角色，三种痛点，一种解决方案' : 'Three Roles, Three Pain Points, One Solution'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-themed">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{persona.title}</h3>
                <p className="text-primary mb-3 text-sm">{persona.subtitle}</p>
                <p className="text-muted-foreground text-sm italic leading-relaxed">"{persona.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Flywheel Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {lang === 'zh' ? '迈创兄弟增长飞轮' : 'The Marvelbros Growth Flywheel'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              {lang === 'zh' 
                ? '从洞察到规模化，构建酒店增长的完整闭环'
                : 'From insight to scale—building the complete hotel growth loop'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border card-themed">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#4285f420' }}>
                <Target className="w-5 h-5" style={{ color: '#4285f4' }} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-1">
                {lang === 'zh' ? '洞察模块' : 'Insight Module'}
              </h3>
              <p className="text-xs text-primary mb-2">
                {lang === 'zh' ? '科学决策层' : 'Data-Driven'}
              </p>
              <p className="text-muted-foreground text-xs">
                {lang === 'zh' 
                  ? 'AI 可行性研究、诊断，让决策有数据支撑'
                  : 'AI feasibility studies and diagnostics'}
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border card-themed">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#34a85320' }}>
                <TrendingUp className="w-5 h-5" style={{ color: '#34a853' }} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-1">
                {lang === 'zh' ? '增长引擎' : 'Growth Engine'}
              </h3>
              <p className="text-xs text-primary mb-2">
                {lang === 'zh' ? '系统驱动层' : 'System-Driven'}
              </p>
              <p className="text-muted-foreground text-xs">
                {lang === 'zh'
                  ? 'AI 管理、私域运营，数据驱动增长'
                  : 'AI PMS and private domain ops'}
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border card-themed">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#f59e0b20' }}>
                <Shield className="w-5 h-5" style={{ color: '#f59e0b' }} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-1">
                {lang === 'zh' ? '规模化模块' : 'Scale Module'}
              </h3>
              <p className="text-xs text-primary mb-2">
                {lang === 'zh' ? '资产沉淀层' : 'Asset Building'}
              </p>
              <p className="text-muted-foreground text-xs">
                {lang === 'zh'
                  ? '品牌创建、效果跟进，增长能力资产化'
                  : 'Brand building and growth assets'}
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-card border border-border card-themed">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#764ba220' }}>
                <Users className="w-5 h-5" style={{ color: '#764ba2' }} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-1">
                {lang === 'zh' ? '支撑服务' : 'Support'}
              </h3>
              <p className="text-xs text-primary mb-2">
                {lang === 'zh' ? '基础服务层' : 'Foundation'}
              </p>
              <p className="text-muted-foreground text-xs">
                {lang === 'zh'
                  ? '顾问、融资、行业研究，全周期陪伴'
                  : 'Consulting, financing, research'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-4">
                <Shield className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-[#f59e0b] text-sm font-medium">
                  {lang === 'zh' ? '效果跟进' : 'Performance Tracking'}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {lang === 'zh' ? '以结果为尺，量增长之路' : 'Measured by Results, Growth by Design'}
              </h2>
              <p className="text-muted-foreground mb-5 text-sm">
                {lang === 'zh'
                  ? '真正的伙伴关系建立在共同的成果之上。当您的酒店增长时，我们才值得被认可。'
                  : 'True partnerships are built on shared outcomes. We only earn our worth when your hotel grows.'}
              </p>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-xs font-bold">1</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {lang === 'zh' ? '诊断阶段：免费/低价，确诊增长机会' : 'Diagnosis: Free/low cost to identify opportunities'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-xs font-bold">2</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {lang === 'zh' ? '方案阶段：成本价，客户认可机会' : 'Solution: Cost-plus—only succeeds if you succeed'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-xs font-bold">3</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {lang === 'zh' ? '承诺可量化的结果，直到达标为止' : 'We commit to measurable results'}
                  </p>
                </div>
              </div>
              
              <Link href={guaranteeLink} className="inline-flex items-center text-[#f59e0b] font-medium hover:underline text-sm">
                {lang === 'zh' ? '了解效果保障详情 →' : 'Learn about our guarantee →'}
              </Link>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-card-foreground mb-4">
                {lang === 'zh' ? '我们的承诺' : 'Our Commitment'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-[#f59e0b]" />
                  </div>
                  <div>
                    <h4 className="text-card-foreground font-medium text-sm">
                      {lang === 'zh' ? '目标导向' : 'Goal Oriented'}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {lang === 'zh' ? '以可量化的增长目标为合作基础' : 'Measurable growth targets as partnership foundation'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#34a853]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-[#34a853]" />
                  </div>
                  <div>
                    <h4 className="text-card-foreground font-medium text-sm">
                      {lang === 'zh' ? '风险共担' : 'Risk Sharing'}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {lang === 'zh' ? '效果未达预期，我们共同复盘调整，直到达成目标' : 'If results fall short, we review and adjust together until targets are met'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="text-card-foreground font-medium text-sm">
                      {lang === 'zh' ? '持续精进' : 'Continuous Improvement'}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {lang === 'zh' ? '达成目标后，我们继续寻找提升空间，追求更好表现' : 'After reaching targets, we keep finding ways to improve and perform even better'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {lang === 'zh' ? '迈创兄弟团队' : 'The Marvelbros Team'}
            </h2>
            <p className="text-muted-foreground text-sm">
              {lang === 'zh' ? '不是"顾问"，是并肩作战的战友' : 'Not just consultants—battle-tested partners'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border card-themed text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                  style={{ backgroundColor: `${member.color}20`, color: member.color }}
                >
                  {member.letter}
                </div>
                <h3 className="text-sm font-bold text-card-foreground mb-1">{member.title}</h3>
                <p className="text-muted-foreground text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {lang === 'zh' ? '准备好让酒店增长了吗？' : 'Ready to Grow Your Hotel?'}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            {lang === 'zh'
              ? '预约一次免费的增长诊断'
              : 'Book a free growth diagnosis'}
          </p>
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center px-6 py-3 btn-gradient-primary font-bold rounded-lg"
          >
            {lang === 'zh' ? '立即预约诊断' : 'Book Free Diagnosis'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
