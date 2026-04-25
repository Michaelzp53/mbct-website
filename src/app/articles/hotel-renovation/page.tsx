import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HotelRenovationArticle() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Link href="/articles" className="inline-flex items-center text-brand-gold hover:text-brand-gold/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回文章列表
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-100 text-red-800 border-red-200">🔥 热门报道</Badge>
              <span className="text-gray-400 text-sm">2026-04-19 · 15分钟阅读</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              30年老酒店的逆袭之路：从濒临倒闭到一房难求的MBCT改造实录
            </h1>
            
            <p className="text-xl text-gray-300">
              一座城市记忆的重生，一场存量资产的革命
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-a:text-brand-gold">
            
            <h2>引言：当"老"成为原罪</h2>
            <p>2022年春天，一家位于历史文化街区、始建于1993年的三十年历史酒店，正面临着严峻的生存危机。这家曾经辉煌的三星级酒店，OTA评分跌破3.8分，入住率常年徘徊在45%左右。</p>
            
            <blockquote className="border-l-4 border-brand-gold pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
              <p className="text-gray-700 italic">"隔壁新开的设计师民宿每晚售价1200元还一房难求，我们的标准间挂牌价380元却无人问津。"——业主老王回忆道。</p>
            </blockquote>

            <h2>第一章：存量时代的酒店困境</h2>
            <p>在中国酒店业，像这家三十年历史酒店这样的故事每天都在上演。据不完全统计，全国有超过12万家运营超过15年的酒店，它们中相当一部分正面临相似的困境：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>设施老化：装修陈旧、设备故障频发、能耗居高不下</li>
              <li>客源流失：年轻客群被新兴民宿、精品酒店抢走</li>
              <li>成本压力：人工成本年增8-10%，能耗成本占营收比例超过15%</li>
              <li>品牌褪色：曾经的区域标杆逐渐淡出消费者记忆</li>
            </ul>

            <h2>第二章：MBCT存量更新策略</h2>
            <p>当老王找到MBCT时，团队给出的建议是："不要关，而是改。不是大改，而是巧改。"</p>
            
            <div className="bg-brand-navy/5 rounded-xl p-6 my-8 border-l-4 border-brand-gold">
              <h3 className="font-bold text-brand-navy mb-3">三大认知转变</h3>
              <ol className="space-y-3">
                <li><strong>存量不是包袱，而是资产</strong>——拥有新酒店无法复制的时间资产</li>
                <li><strong>改造不是装修，而是体验重构</strong>——重新设计体验流程，而非简单装修</li>
                <li><strong>投入不是成本，而是投资</strong>——追求体验的有效触达，而非表面豪华</li>
              </ol>
            </div>

            <h2>第三章：180天蜕变实录</h2>
            <p>2022年6月，改造工程正式启动。MBCT团队进驻，开始了为期6个月的"酒店重生计划"。</p>
            
            <h3>第一步：深度诊断（第1-30天）</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>访谈120位住店客人，发现核心痛点</li>
              <li>与45位员工交流，发现本地知识宝藏</li>
              <li>盘点发现隐藏宝藏：后院古井、清代砖雕墙</li>
            </ul>

            <h3>第二步：精准定位（第31-45天）</h3>
            <p>新品牌定位：<strong>"江南客栈——住在市区的千年时光里"</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>文化沉浸：不是住酒店，而是住进当地历史</li>
              <li>现代舒适：保留古意，绝不牺牲居住品质</li>
              <li>社区连接：成为文化生态的一部分</li>
            </ul>

            <h3>第三步：三原主义改造（第46-180天）</h3>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-navy mb-2">原址保留</h4>
                <p className="text-sm">不拆承重结构，保留历史元素，古井成为庭院景观</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-navy mb-2">原材利用</h4>
                <p className="text-sm">旧木地板翻新，旧窗框改造，老员工制服改良</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-navy mb-2">原境再造</h4>
                <p className="text-sm">每层设计不同主题：茶馆听书、园林雅集、传统手工艺</p>
              </div>
            </div>

            <h2>第四章：投资回报分析</h2>
            <table className="w-full border-collapse my-8">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-4 py-3 text-left">指标</th>
                  <th className="px-4 py-3 text-left">改造前</th>
                  <th className="px-4 py-3 text-left">改造后</th>
                  <th className="px-4 py-3 text-left">变化</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">平均房价</td>
                  <td className="px-4 py-3">328元</td>
                  <td className="px-4 py-3">698元</td>
                  <td className="px-4 py-3 text-green-600 font-bold">+113%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">入住率</td>
                  <td className="px-4 py-3">47%</td>
                  <td className="px-4 py-3">82%</td>
                  <td className="px-4 py-3 text-green-600 font-bold">+35pct</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">RevPAR</td>
                  <td className="px-4 py-3">154元</td>
                  <td className="px-4 py-3">572元</td>
                  <td className="px-4 py-3 text-green-600 font-bold">+271%</td>
                </tr>
                <tr className="bg-brand-gold/10">
                  <td className="px-4 py-3 font-bold">投资回收期</td>
                  <td className="px-4 py-3" colSpan={3}>2.7年</td>
                </tr>
              </tbody>
            </table>

            <h2>结语：存量时代的酒店改造哲学</h2>
            <p>老酒店的价值不在于"新"，而在于"独特"。改造不是装修工程，而是体验设计。在这个增量红利消失的时代，存量更新不是退而求其次的选择，而是酒店业进化的必经之路。</p>
            
            <blockquote className="border-l-4 border-brand-gold pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
              <p className="text-gray-700 italic font-medium">"每一座老酒店，都是一座等待被唤醒的城市记忆。我们的工作，就是让这些记忆在当代重新发光。"——MBCT创始人</p>
            </blockquote>

          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-brand-navy">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">需要存量酒店改造咨询？</h3>
          <p className="text-gray-300 mb-6">MBCT 提供免费初步评估，帮您测算投资回报周期</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gold" size="lg">
              获取免费评估 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              📞 400-888-8888
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
