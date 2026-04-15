import { Target, Heart, Lightbulb, Award, TrendingUp } from 'lucide-react'
import { getDict } from '@/lib/dicts'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDict(lang)

  const values = [
    {
      icon: Lightbulb,
      title: lang === 'zh' ? '数据不说谎' : 'Data Does Not Lie',
      desc: lang === 'zh' 
        ? '每一个结论都有出处，每一个建议都可执行。我们不做"看起来专业"的事，只做"真正有效"的事。'
        : 'Every conclusion has a source. Every recommendation is actionable. We don\'t do things that "look professional"—we do what actually works.',
      color: '#f59e0b',
    },
    {
      icon: Award,
      title: lang === 'zh' ? '效果是最好的名片' : 'Results Are Our Best Reference',
      desc: lang === 'zh'
        ? '我们提供效果保障，因为对自己的方案有信心。效果不达标，服务免费——这是我们的承诺。'
        : 'We provide performance guarantees because we believe in our solutions. Results not met, service free—that\'s our commitment.',
      color: '#22c55e',
    },
    {
      icon: Heart,
      title: lang === 'zh' ? '客户成功才是我们的成功' : 'Customer Success Is Our Success',
      desc: lang === 'zh'
        ? '签单只是开始，增长才是终点。我们陪客户走完最后一公里，把增长落到实处。'
        : 'Signing is just the beginning. Growth is the destination. We walk our clients to the finish line and make growth happen.',
      color: '#3b82f6',
    },
  ]

  const team = [
    {
      letter: 'M',
      name: 'Marvel / Michael',
      title: lang === 'zh' ? '战略专家 X 创始人' : 'Strategy Expert / Founder',
      quote: lang === 'zh' 
        ? '酒店行业需要一次革命，而不是改良。' 
        : 'The hotel industry needs a revolution, not incremental improvements.',
      color: '#f59e0b',
    },
    {
      letter: 'B',
      name: 'Business',
      title: lang === 'zh' ? '商业筹划总监' : 'Business Director',
      quote: lang === 'zh'
        ? '好的战略必须能落地，好的落地必须有效果。'
        : 'Good strategy means nothing without execution. Good execution means nothing without results.',
      color: '#3b82f6',
    },
    {
      letter: 'C',
      name: 'Consultant',
      title: lang === 'zh' ? '资深顾问团队' : 'Senior Advisory Team',
      quote: lang === 'zh'
        ? '每一个数据背后，都是一个真实的人。'
        : 'Behind every data point is a real person.',
      color: '#22c55e',
    },
    {
      letter: 'T',
      name: 'Technical',
      title: lang === 'zh' ? '技术交付团队' : 'Tech Delivery Team',
      quote: lang === 'zh'
        ? '技术的价值，是让复杂变简单。'
        : 'The value of technology is making the complex simple.',
      color: '#8b5cf6',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {lang === 'zh' ? '关于 MBCT' : 'About MBCT'}
          </h1>
          <p className="text-lg md:text-xl text-[#f59e0b]">
            {lang === 'zh' ? 'MBCT有限公司' : 'Marvelbros Commercial Technology'}
          </p>
        </div>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 rounded-2xl bg-[#111827] border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {lang === 'zh' ? '使命' : 'Mission'}
              </h2>
              <p className="text-lg md:text-xl font-bold text-[#f59e0b] mb-3">
                {lang === 'zh' 
                  ? '"把AI数据精益管理植入每家酒店的DNA里"' 
                  : '"Embedding AI-powered data-driven management into every hotel\'s DNA"'}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                {lang === 'zh'
                  ? 'MBCT专注于酒店行业，以AI数字化能力和私域流量运营为核心，帮助酒店实现：投资决策有据可依，品牌建设有路可循，运营增长有技可依、收益提升有数据支撑。'
                  : 'MBCT specializes in the hotel industry, leveraging AI digital capabilities and private domain operations to help hotels make data-driven investment decisions, build recognizable brands, achieve operational growth, and improve revenue with measurable data.'}
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-[#111827] border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {lang === 'zh' ? '愿景' : 'Vision'}
              </h2>
              <p className="text-lg md:text-xl font-bold text-[#3b82f6] mb-3">
                {lang === 'zh'
                  ? '"成为酒店行业最受信赖的AI数字化与私域流量增长专家"'
                  : '"Becoming the most trusted AI digital transformation and private domain growth expert in the hotel industry"'}
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                {lang === 'zh'
                  ? '我们不只是提供工具，我们提供增长结果。通过AI技术与私域运营的深度结合，帮助酒店实现可持续增长。'
                  : 'We don\'t just provide tools—we deliver growth results. Through deep integration of AI technology and private domain operations, we help hotels achieve sustainable growth.'}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            {lang === 'zh' ? '核心价值观' : 'Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-5 md:p-6 rounded-xl bg-[#111827] border border-gray-800">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            {lang === 'zh' ? 'MBCT团队' : 'The MBCT Team'}
          </h2>
          <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
            {lang === 'zh' ? '不是"顾问"，是并肩作战的战友' : 'Not just consultants—battle-tested partners'}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, index) => (
              <div key={index} className="p-4 md:p-6 rounded-xl bg-[#111827] border border-gray-800 text-center">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold"
                  style={{ backgroundColor: `${member.color}20`, color: member.color }}
                >
                  {member.letter}
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs md:text-sm text-[#f59e0b] mb-2">{member.title}</p>
                <p className="text-xs text-gray-400 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Chain */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            {lang === 'zh' ? '业务链' : 'Business Chain'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                title: lang === 'zh' ? '咨询' : 'Consulting', 
                desc: lang === 'zh' ? '战略规划' : 'Strategic Planning',
                color: '#f59e0b'
              },
              { 
                title: lang === 'zh' ? '分析' : 'Analysis', 
                desc: lang === 'zh' ? '数据驱动' : 'Data-Driven',
                color: '#3b82f6'
              },
              { 
                title: lang === 'zh' ? '执行' : 'Execution', 
                desc: lang === 'zh' ? '落地实施' : 'Implementation',
                color: '#22c55e'
              },
              { 
                title: lang === 'zh' ? '增长' : 'Growth', 
                desc: lang === 'zh' ? '持续优化' : 'Continuous Optimization',
                color: '#8b5cf6'
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-[#111827] border border-gray-800 text-center">
                <div 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
