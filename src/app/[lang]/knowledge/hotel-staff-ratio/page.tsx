import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default function ArticlePage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const isZh = lang === 'zh'

  const article = {
    title: '酒店人房比：增效还是降本？',
    summary: '人房比越低越好吗？数据揭示行业真相：服务和情绪价值是通过人传递的，但成本控制又不得不做。',
    author: 'MarvelBros - MBCT',
    date: '2026-04-19',
    readTime: '12分钟',
    tag: '行业报告',
    content: `
## 引言：一个被误解的运营指标

"你们酒店人房比多少？"这是酒店投资人最常问的问题之一。

人房比，这个被无数酒店业主、投资人、运营者挂在嘴边的数字，真的越低越好吗？

## 第一章：人房比的迷思与真相

**行业现状扫描：**

| 酒店类型 | 传统人房比 | 优化后人房比 | 关键差异 |
|---------|-----------|-------------|---------|
| 经济型酒店 | 0.18-0.25 | 0.15-0.20 | 标准化流程 |
| 中端酒店 | 0.30-0.40 | 0.25-0.30 | 智能化替代 |
| 高端酒店 | 0.80-1.20 | 0.60-0.80 | 服务密度保持 |
| 奢华酒店 | 2.00-4.00 | 1.50-2.50 | 体验溢价 |

**真相一：人房比不是越低越好**

过度压缩人房比会导致：
- **服务质量下降**：响应时间延长，客诉率上升
- **员工流失加剧**：工作负荷过重，人员流动率高
- **隐性成本增加**：培训成本、招聘成本、失误成本

**真相二：人房比的"甜蜜点"**

MBCT通过200+酒店数据分析发现：
- **经济型**：0.18-0.22 是最佳区间
- **中端**：0.28-0.32 能实现体验与效率平衡
- **高端**：0.65-0.85 才能维持服务标准

## 第二章：人房比优化的科学方法

**第一步：岗位价值分析**

不是所有岗位都应该被压缩：
- **高价值岗位**：前台、管家、礼宾（直接影响体验）
- **可优化岗位**：保洁、工程、安保（可通过技术替代）
- **弹性岗位**：餐饮、会议（可根据 occupancy 调整）

**第二步：人房比动态管理**

固定人房比是误区，应该建立动态模型：
- **旺季**：人房比上浮15-20%，保障服务
- **淡季**：人房比下浮10-15%，控制成本
- **过渡期**：灵活用工，兼职+外包

**第三步：技术替代人工**

人房比优化的正确打开方式：
- **自助入住机**：减少前台人员30%
- **智能房控**：减少工程人员20%
- **机器人配送**：减少客房服务15%
- **AI客服**：减少电话接线员50%

## 第三章：增效还是降本？这是一个伪命题

**增效与降本不是零和博弈**

真正的优化目标是：**人效提升**

计算公式：
**人效 = 营收 ÷ 人力成本**

案例对比：
- **酒店A**：人房比0.20，人效 3.5x
- **酒店B**：人房比0.35，人效 4.2x

**结论：人房比高的酒店，人效反而可能更高**

## 第四章：MBCT人房比优化四步法

**第一步：现状诊断（1周）**
- 岗位盘点：每个岗位的时间投入
- 流程梳理：哪些流程可以合并/简化
- 技术评估：哪些环节可以数字化

**第二步：方案设计（2周）**
- 人房比目标设定（分淡旺季）
- 岗位调整方案（合并、拆分、新增）
- 技术替代方案（ROI测算）

**第三步：试点运行（1个月）**
- 选择1-2个楼层/区域试点
- 监控关键指标：NPS、响应时间、投诉率
- 员工反馈收集与调整

**第四步：全面推广（3个月）**
- 分阶段 rollout
- 持续监控与优化
- 建立动态调整机制

## 结语：人房比的本质是人效

人房比只是一个数字，真正重要的是：**每一位员工创造的价值**。

酒店是服务行业，服务和情绪价值是通过人传递的。压缩人房比可以，但不能压缩到影响服务质量的程度。

> "降本增效的核心不是减少人，而是让每一个人创造更大的价值。" —— MBCT运营顾问
    `,
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-muted-foreground hover:text-[#22c55e] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isZh ? '返回行业前沿' : 'Back to Industry Insights'}
        </Link>

        <article className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">{article.tag}</span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.summary}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-[#22c55e] transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-[#22c55e] transition-colors"><Bookmark className="w-4 h-4" /></button>
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
                  .replace(/&gt; (.*)/g, '<blockquote class="border-l-4 border-[#22c55e] pl-4 my-6 italic text-muted-foreground">$1</blockquote>')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
