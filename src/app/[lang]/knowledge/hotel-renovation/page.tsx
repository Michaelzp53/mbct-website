import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default function ArticlePage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const isZh = lang === 'zh'

  const article = {
    title: '30年老酒店的逆袭之路：从濒临倒闭到一房难求的MBCT改造实录',
    summary: '一家三十年历史酒店如何用1800万改造实现271% RevPAR提升？看MBCT如何用"微手术"激活沉睡资产。',
    author: 'MarvelBros - MBCT',
    date: '2026-04-19',
    readTime: '15分钟',
    tag: '案例研究',
    content: `
## 引言：当"老"成为原罪

2022年春天，一家位于历史文化街区、始建于1993年的三十年历史酒店，正面临着严峻的生存危机。这家曾经辉煌的三星级酒店，OTA评分跌破3.8分，入住率常年徘徊在45%左右。

## 第一章：存量时代的酒店困境

在中国酒店业，像这家三十年历史酒店这样的故事每天都在上演。据不完全统计，全国有超过12万家运营超过15年的酒店，它们中相当一部分正面临相似的困境：

**设施老化：** 装修陈旧、设备故障频发、能耗居高不下
**客源流失：** 年轻客群被新兴民宿、精品酒店抢走
**成本压力：** 人工成本年增8-10%，能耗成本占营收比例超过15%
**品牌褪色：** 曾经的区域标杆逐渐淡出消费者记忆

## 第二章：MBCT存量更新策略

当业主找到MBCT时，团队给出的建议是："不要关，而是改。不是大改，而是巧改。"

**三大认知转变：**
1. **存量不是包袱，而是资产** - 拥有新酒店无法复制的时间资产
2. **改造不是装修，而是体验重构** - 重新设计体验流程，而非简单装修
3. **投入不是成本，而是投资** - 追求体验的有效触达，而非表面豪华

## 第三章：180天蜕变实录

2022年6月，改造工程正式启动。MBCT团队进驻，开始了为期6个月的"酒店重生计划"。

**第一步：深度诊断（第1-30天）**
- 访谈120位住店客人，发现核心痛点
- 与45位员工交流，发现本地知识宝藏
- 盘点发现隐藏宝藏：后院古井、清代砖雕墙

**第二步：精准定位（第31-45天）**
新品牌定位："江南客栈——住在市区的千年时光里"
- 文化沉浸：不是住酒店，而是住进当地历史
- 现代舒适：保留古意，绝不牺牲居住品质
- 社区连接：成为文化生态的一部分

**第三步：三原主义改造（第46-180天）**
- **原址保留**：不拆承重结构，保留历史元素
- **原材利用**：旧木地板翻新，旧窗框改造，古井成为庭院景观
- **原境再造**：每层设计不同主题：茶馆听书、园林雅集、传统手工艺

## 第四章：投资回报分析

**改造前后对比：**

| 指标 | 改造前 | 改造后 | 变化 |
|------|--------|--------|------|
| 平均房价 | 328元 | 698元 | +113% |
| 入住率 | 47% | 82% | +35pct |
| RevPAR | 154元 | 572元 | +271% |
| **投资回收期** | - | - | **2.7年** |

## 结语：存量时代的酒店改造哲学

老酒店的价值不在于"新"，而在于"独特"。改造不是装修工程，而是体验设计。在这个增量红利消失的时代，存量更新不是退而求其次的选择，而是酒店业进化的必经之路。

> "每一座老酒店，都是一座等待被唤醒的城市记忆。我们的工作，就是让这些记忆在当代重新发光。" —— MBCT创始人
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
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">🔥 {article.tag}</span>
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
                  .replace(/&gt; (.*)/g, '<blockquote class="border-l-4 border-[#22c55e] pl-4 my-6 italic text-gray-400">$1</blockquote>')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
