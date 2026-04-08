import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            关于 MBCT
          </h1>
          <p className="text-xl text-[#f59e0b]">
            迈创兄弟商业科技有限公司
          </p>
        </div>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">使命</h2>
              <p className="text-3xl font-bold text-[#f59e0b] mb-4">
                "把AI数据精益管理植入每家酒店的DNA里"
              </p>
              <p className="text-gray-400">
                MBCT专注于酒店行业，以AI数字化能力和私域流量运营为核心，
                帮助酒店实现：投资决策有据可依、品牌建设有路可循、
                运营增长有技可依、收益提升有数据支撑。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">愿景</h2>
              <p className="text-3xl font-bold text-[#3b82f6] mb-4">
                "成为酒店行业最受信赖的AI数字化与私域流量增长专家"
              </p>
              <p className="text-gray-400">
                我们不只是提供工具，我们提供增长结果。
                通过AI技术与私域运营的深度结合，帮助酒店实现可持续增长。
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: '数据不说谎',
                desc: '每一个结论都有出处，每一个建议都可执行。我们不做"看起来专业"的事，只做"真正有效"的事。',
                color: '#f59e0b',
              },
              {
                icon: Award,
                title: '效果是最好的名片',
                desc: '我们敢签对赌，因为对自己的方案有信心。不增长，不收费——这是我们的底气。',
                color: '#22c55e',
              },
              {
                icon: Heart,
                title: '客户成功才是我们的成功',
                desc: '签单只是开始，增长才是终点。我们陪客户走完最后一公里，把增长落到实处。',
                color: '#3b82f6',
              },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#111827] border border-gray-800">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">MBCT团队</h2>
          <p className="text-gray-400 text-center mb-12">不是"顾问"，是并肩作战的战友</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: 'M',
                name: 'Marvel / Michael',
                title: '战略专家 X 创始人',
                quote: '酒店行业需要一次革命，而不是改良。',
                desc: '10年酒店咨询经验，服务过众多五星级酒店。坚信数据驱动的力量，致力于用AI重构酒店增长方法论。',
                color: '#f59e0b',
              },
              {
                letter: 'B',
                name: 'Bros & Team',
                title: '资深专家顾问',
                quote: '好的战略必须能落地，好的落地必须有效果。',
                desc: '前顶级投行分析师，擅长商业模型设计与资本运作。负责将MBCT的增长方法论转化为可量化的商业成果。',
                color: '#3b82f6',
              },
              {
                letter: 'C',
                name: 'Commercial Director',
                title: '商业策划总监',
                quote: '每一个数据背后，都是一个真实的人。',
                desc: '由5位10年+经验的酒店行业专家组成，分别专注投资、运营、品牌、数字化领域。',
                color: '#22c55e',
              },
              {
                letter: 'T',
                name: 'Technology & Tricker',
                title: '实施及优化总监',
                quote: '技术的价值，是让复杂变简单。',
                desc: '基于OpenClaw技术栈，自研MBCT AI Copilot系统。7×24小时在线，确保每一个客户都能获得持续的技术支持。',
                color: '#8b5cf6',
              },
            ].map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#111827] border border-gray-800">
                <div className="text-center mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-bold"
                    style={{ backgroundColor: `${member.color}20`, color: member.color }}
                  >
                    {member.letter}
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm" style={{ color: member.color }}>{member.title}</p>
                </div>
                <p className="text-[#f59e0b] text-sm italic mb-3">"{member.quote}"</p>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Chain */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">业务链说明</h2>
          <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { step: '01', title: '洞察', desc: 'AI数据挖掘' },
                { step: '02', title: '策略', desc: '定制化方案' },
                { step: '03', title: '执行', desc: '落地陪跑' },
                { step: '04', title: '增长', desc: '效果跟进' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-4xl font-bold text-[#f59e0b]/30 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-[#f59e0b]/30"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-[#111827] border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">商务咨询</p>
              <p className="text-white">michael@marvelbros.com</p>
            </div>
            <div className="p-6 rounded-xl bg-[#111827] border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">客户咨询</p>
              <p className="text-white">contact@marvelbros.com</p>
            </div>
            <div className="p-6 rounded-xl bg-[#111827] border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">官方网站</p>
              <p className="text-white">marvelbros.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}