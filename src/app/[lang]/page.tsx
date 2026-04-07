import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Sparkles, Users, Target, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section - AI原生植入的酒店全域"数据精益化管理"孵化器 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-16">
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-lg font-medium">让数据成为增长的灯塔</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI原生植入的酒店全域"数据精益化管理"孵化器
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            我们不是一家"用AI的咨询公司"
          </p>
          <p className="text-lg text-[#f59e0b] mb-8 max-w-2xl mx-auto">
            我们是第一家从DNA里就是AI原生的酒店增长服务机构
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/zh/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all transform hover:scale-105"
            >
              预约增长诊断
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/zh/guarantee"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#f59e0b] text-[#f59e0b] font-bold rounded-lg hover:bg-[#f59e0b]/10 transition-all"
            >
              了解效果跟进
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '25-50%+', label: '平均增长' },
              { value: '100+', label: '服务酒店' },
              { value: '50%+', label: '节省佣金' },
              { value: '60%+', label: '续签率' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section - 我们懂你的困境 */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge like Hero section */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 mb-8">
              <Users className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-[#3b82f6] text-lg font-medium">理解 · 共情 · 解决</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">我们懂你的困境</h2>
            <p className="text-xl text-gray-400">三种角色，三种痛点，一种解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '投资人',
                subtitle: '孤独的决策者',
                quote: '几千万的投资，市场调研的数据却停留在半年前。您需要的不是另一个写报告的顾问，而是一个能陪您扛结果的伙伴。',
              },
              {
                title: '经营管理者',
                subtitle: '被困住的总经理',
                quote: 'OTA的账单像流水，70%的订单，15%的佣金，一年200万就这么流走了。您需要的不是更多工具，是一个7×24小时的AI运营团队。',
              },
              {
                title: '创始人',
                subtitle: '理想主义者的困境',
                quote: '您想做一家有故事、有温度、有灵魂的酒店。情怀和盈利，可以兼得。我们用数据找到您的"审美niche"。',
              },
            ].map((persona, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#0f172a] border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-2">{persona.title}</h3>
                <p className="text-[#f59e0b] mb-4">{persona.subtitle}</p>
                <p className="text-gray-400 italic leading-relaxed">"{persona.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Flywheel Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MBCT增长飞轮</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">从洞察到规模化，构建酒店增长的完整闭环</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: '洞察模块',
                subtitle: '科学决策层',
                description: 'AI投资可行性研究、存量酒店诊断，让每一个决策都有数据支撑',
                color: '#3b82f6',
              },
              {
                icon: TrendingUp,
                title: '增长引擎',
                subtitle: '系统驱动层',
                description: 'AI管理系统、私域流量运营，用系统替代人工，用数据驱动增长',
                color: '#22c55e',
              },
              {
                icon: Shield,
                title: '规模化模块',
                subtitle: '资产沉淀层',
                description: '品牌创建、效果跟进陪跑，把增长能力变成可复用的资产',
                color: '#f59e0b',
              },
              {
                icon: Users,
                title: '支撑服务',
                subtitle: '基础服务层',
                description: '轻量顾问、融资顾问、行业研究，全生命周期陪伴',
                color: '#8b5cf6',
              },
            ].map((module, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[#f59e0b]/50 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${module.color}20` }}
                >
                  <module.icon className="w-6 h-6" style={{ color: module.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                <p className="text-sm text-[#f59e0b] mb-3">{module.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Effect Guarantee Section */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
                <Shield className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-[#f59e0b] text-lg font-medium">效果跟进</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                以结果为尺，量增长之路
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                我们相信，真正的伙伴关系建立在共同的成果之上。当您的酒店增长时，我们才值得被认可。
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  '诊断阶段：免费/低价，确诊增长机会',
                  '方案阶段：成本价，客户认可机会',
                  '敢于承诺可量化的业务结果，直到达标为止',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0f172a] text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/zh/guarantee"
                className="inline-flex items-center text-[#f59e0b] font-medium hover:underline"
              >
                了解对赌详情
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-[#0f172a] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">效果跟进/评估模式示例</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">结果导向目标</span>
                  <span className="text-white font-medium">年综合运营指数递增增长6-15%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">基础服务费</span>
                  <span className="text-white font-medium">按照项目收费（样板工程仅基础服务成本费）</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">超额奖励</span>
                  <span className="text-[#f59e0b] font-medium">评估指数超出，加收20%奖励金</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">未达标</span>
                  <span className="text-green-400 font-medium">仅收50%基础服务成本费，风险共担！</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MBCT团队</h2>
            <p className="text-gray-400">不是"顾问"，是并肩作战的战友</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: 'M',
                title: 'Marvel / 创始人',
                desc: '酒店行业需要一次革命，而不是改良。10年咨询经验，坚信数据驱动的力量。',
                color: '#f59e0b',
              },
              {
                letter: 'B',
                title: 'Business / 商业筹划总监',
                desc: '好的战略必须能落地，好的落地必须有效果。前顶级投行分析师。',
                color: '#3b82f6',
              },
              {
                letter: 'C',
                title: 'Consultant / 资深顾问团队',
                desc: '每一个数据背后，都是一个真实的人。5位10年+经验酒店行业专家。',
                color: '#22c55e',
              },
              {
                letter: 'T',
                title: 'Technical / 技术交付团队',
                desc: '技术的价值，是让复杂变简单。基于OpenClaw自研AI Copilot系统。',
                color: '#8b5cf6',
              },
            ].map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#111827] border border-gray-800 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: `${member.color}20`, color: member.color }}
                >
                  {member.letter}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.title}</h3>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好让酒店增长了吗？
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            预约一次免费的增长诊断，看看您的酒店有多少增长机会
          </p>
          <Link
            href="/zh/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all transform hover:scale-105"
          >
            立即预约诊断
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}