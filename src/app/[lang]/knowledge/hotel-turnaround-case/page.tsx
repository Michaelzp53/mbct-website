import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: '从亏损到溢价：一家区域酒店的体验重塑之路',
    summary: '2024年初，我接到了一位老朋友的电话。他在西南地区经营着一家开业十二年的商务酒店，曾经是当地的地标，但近年来陷入了严重的经营困境。',
    author: 'MarvelBros - MBCT',
    date: '2026-04-16',
    readTime: '20分钟',
    tag: '案例研究',
    content: `
## 一、项目背景：传统商务酒店的生存危机

2024年初，我接到了一位老朋友的电话。他在西南地区经营着一家开业十二年的商务酒店，曾经是当地的地标，但近年来陷入了严重的经营困境。

"入住率跌破40%，房价从四百多跌到两百出头，每个月都在亏钱。"

## 二、诊断分析：客群错位与产品老化双重困境

经过一周的深入调研，我找到了问题的根源——客群错位与产品老化的双重困境。

**困境一：客群错位**

十二年前，这家酒店开业时，定位是"高端商务酒店"。然而，十二年过去，市场格局发生了巨大变化。

**困境二：产品老化**

产品老化是另一个致命问题。十二年的运营，让酒店的硬件设施严重老化。

**核心洞察：从功能价值到情感价值的缺失**

这家酒店正在从消费者的生活中"消失"。

## 三、策略重构：聚焦商务精英的隐性需求洞察

基于诊断分析，我提出了体验重塑的核心策略——从"高端商务酒店"重新定位为"商务精英的效率与品质之选"。

**隐性需求的深度挖掘：**

**第一层：效率需求** - 商务精英最宝贵的资源是时间
**第二层：恢复需求** - 需要在酒店获得有效的身心恢复
**第三层：尊严需求** - 希望在酒店获得尊重和理解

**策略落地的三个核心举措：**

1. **极致效率体验** - 60秒极速入住、移动办公室、15分钟能量早餐
2. **深度恢复体验** - 深度睡眠房、商旅健康餐、商务健身中心
3. **个性化尊严体验** - 客户档案系统、记忆与关怀、惊喜时刻

## 四、体验设计：从入住到离店的触点优化

我们将客人的旅程拆解为十二个关键触点，逐一进行优化设计。

## 五、成效验证：品牌认知重构与收益结构改善

**经营指标的显著改善：**
- 入住率从38%提升到67%
- 平均房价从230元提升到380元
- RevPAR从87元提升到255元

**我的反思：体验重塑的本质是价值重塑**

这家酒店的问题不是设施老化，不是服务不好，而是价值定位的迷失。
    `,
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-gray-400 hover:text-[#22c55e] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isZh ? '返回行业前沿' : 'Back to Industry Insights'}
        </Link>

        <article className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-sm font-medium">{article.tag}</span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{article.summary}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#22c55e] transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#22c55e] transition-colors"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#22c55e]">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/^/, '<p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/$/, '</p>')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
