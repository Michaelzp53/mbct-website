import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: isZh ? '中档酒店红海突围：连锁化、品牌化、差异化三大策略' : 'Mid-Scale Hotel Breakthrough in the Red Ocean: Three Strategies',
    summary: isZh 
      ? '中国酒店业中，中档酒店（客房单价200-400元）数量最多、竞争最激烈、同质化最严重。本文从连锁化、品牌化、差异化三大策略，为中档酒店投资人提供突围路径。'
      : 'Mid-scale hotels are the most numerous and competitive in China. This article provides three strategies for breakthrough.',
    author: 'MBCT内容团队',
    date: '2026-05-11',
    readTime: isZh ? '15分钟' : '15 min',
    tag: isZh ? '行业分析' : 'Industry Analysis',
    content: isZh ? `
## 引言：中档酒店数量最多、同质化最严重

中国酒店业中，中档酒店（客房单价200-400元）数量最多、竞争最激烈、同质化最严重。

**数据**：
- 中档酒店占中国酒店总数的40%以上
- 中档酒店品牌超过100个
- 中档酒店平均入住率仅60-65%

对于中档酒店投资人而言，**差异化是唯一的出路**。

---

## 一、策略1：连锁化——借力品牌，降低风险

### 1.1 连锁化的价值

**对投资人**：
- 品牌背书：降低获客成本
- 管理体系：降低运营风险
- 供应链优势：降低采购成本
- 会员体系：提升复购率

**数据**：
- 连锁酒店获客成本比单体酒店低30-40%
- 连锁酒店采购成本比单体酒店低15-20%
- 连锁酒店会员复购率比单体酒店高25-35%

### 1.2 连锁化路径

**路径1：加盟头部品牌**
- 华住、锦江、首旅如家等
- 优点：品牌力强，管理体系成熟
- 缺点：加盟费高，自主权低

**路径2：加盟区域品牌**
- 区域性连锁品牌
- 优点：加盟费低，更了解本地市场
- 缺点：品牌力弱，会员体系小

**路径3：自创品牌**
- 自己打造品牌，逐步扩张
- 优点：完全自主，品牌溢价归自己
- 缺点：投入大，风险高，成功概率低

### 1.3 MBCT建议

**对于新手投资人**：选择头部品牌加盟，降低风险
**对于有经验的投资人**：可以考虑区域品牌或自创品牌

---

## 二、策略2：品牌化——打造记忆点，建立认知

### 2.1 品牌化的核心

**不是"logo+口号"，而是"记忆点+认知"**。

**品牌化的三个层次**：

| 层次 | 内容 | 案例 |
|-----|------|------|
| 视觉层 | logo、颜色、设计风格 | 全季酒店的"禅意"风格 |
| 体验层 | 服务特色、文化元素 | 亚朵酒店的"人文"体验 |
| 情感层 | 价值观、情感连接 | 维也纳酒店的"音乐"情感 |

### 2.2 如何打造品牌记忆点

**方法1：聚焦一个"关键词"**
- 全季：禅意
- 亚朵：人文
- 维也纳：音乐
- 你的酒店：？

**方法2：设计一个"超级符号"**
- 视觉符号：独特的颜色、图案、造型
- 行为符号：独特的服务动作、问候语
- 空间符号：独特的大堂、客房设计

**方法3：讲一个"品牌故事"**
- 品牌起源故事
- 创始人故事
- 客人故事

---

## 三、策略3：差异化——找到你的"独特卖点"

### 3.1 差异化的方向

| 差异化方向 | 具体做法 | 适合酒店 |
|-----------|---------|---------|
| 文化主题 | 本地文化、历史主题 | 旅游城市 |
| 生活方式 | 健康、运动、艺术 | 城市商务 |
| 科技智能 | 智能客房、无人服务 | 年轻客群 |
| 亲子家庭 | 儿童设施、亲子活动 | 度假区 |
| 宠物友好 | 宠物设施、宠物服务 | 城市休闲 |
| 绿色环保 | 环保材料、可持续 | 高端客群 |

### 3.2 差异化的实施

**不是"什么都做"，而是"把一个点做透"**。

**案例**：
某中档酒店，选择"茶文化"作为差异化方向：
- 大堂：茶室设计，提供免费茶饮
- 客房：配备茶具和本地茶叶
- 餐厅：推出"茶宴"（以茶入菜）
- 活动：定期举办茶艺体验
- 零售：销售自有品牌茶叶

结果：
- ADR比同档次酒店高15%
- 入住率比同档次酒店高10%
- 客人复购率比同档次酒店高20%

---

## 四、中档酒店突围的"三要三不要"

### 三要

**1. 要聚焦**
- 不要试图满足所有人
- 聚焦一个客群，做深做透

**2. 要特色**
- 不要跟风做"标准化"
- 找到一个独特卖点，做到极致

**3. 要持续**
- 不要"一阵风"
- 差异化需要长期坚持，才能形成品牌认知

### 三不要

**1. 不要低价竞争**
- 中档酒店打价格战，只会陷入"红海"
- 低价吸引的客人，没有忠诚度

**2. 不要过度投资**
- 中档酒店不是高端酒店，不需要豪华装修
- 把钱花在"客人能感受到的地方"

**3. 不要忽视运营**
- 品牌、差异化只是"吸引客人"
- 运营才是"留住客人"

---

## 3个今天就能做的行动清单

1. **分析你的竞争对手**：列出你周边3公里内的5家中档酒店，分析它们的定位和卖点
2. **找到你的"关键词"**：用一个词描述你的酒店，看看是否独特
3. **设计一个"差异化体验"**：结合你的"关键词"，设计一个客人体验项目

---

*文章来源：管享精道 | MBCT迈创兄弟商业科技*
    ` : `
## Introduction

Mid-scale hotels (room rates 200-400 RMB) are the most numerous and competitive segment in China's hotel industry.

**Data:**
- Mid-scale hotels account for over 40% of total supply
- Over 100 mid-scale brands compete
- Average occupancy rate only 60-65%

For investors, **differentiation is the only way out**.

---

## Strategy 1: Chain Affiliation

**Value for investors:**
- Brand recognition reduces customer acquisition costs
- Management systems reduce operational risk
- Supply chain advantages reduce procurement costs
- Membership systems improve repeat rates

**Data:**
- Chain hotels have 30-40% lower customer acquisition costs
- Chain hotels have 15-20% lower procurement costs
- Chain hotels have 25-35% higher member repeat rates

---

## Strategy 2: Brand Building

**Not "logo + slogan", but "memory point + recognition"**.

**Three levels of branding:**
| Level | Content | Example |
|-------|---------|---------|
| Visual | Logo, color, design | Hanting's "Zen" style |
| Experience | Service features, culture | Atour's "humanistic" experience |
| Emotional | Values, connection | Vienna's "music" emotion |

---

## Strategy 3: Differentiation

**Not "do everything", but "do one thing extremely well"**.

**Case study:**
A mid-scale hotel chose "tea culture" as differentiation:
- Lobby: Tea room design with free tea
- Rooms: Tea sets and local tea leaves
- Restaurant: Tea-themed dishes
- Activities: Regular tea ceremony workshops
- Retail: Own-brand tea products

Results:
- ADR 15% higher than competitors
- Occupancy 10% higher than competitors
- Repeat rate 20% higher than competitors

---

## Three Dos and Three Don'ts

### Dos
1. **Focus**: Don't try to serve everyone
2. **Differentiate**: Don't follow the "standardization" trend
3. **Persist**: Differentiation requires long-term commitment

### Don'ts
1. **Don't compete on price**: Price wars only lead to red ocean
2. **Don't over-invest**: Mid-scale doesn't need luxury decoration
3. **Don't neglect operations**: Brand attracts, operations retain

---

## Action Checklist

1. Analyze your competitors within 3km
2. Find your "keyword" — one word to describe your hotel
3. Design a differentiated experience

---

*Source: Lean Insights | MBCT Marvel Bros Commercial Technology*
    `,
  }

  // 解析markdown内容
  const parseContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let inTable = false
    let tableRows: string[] = []
    let inList = false
    let listItems: string[] = []
    let key = 0

    const flushTable = () => {
      if (tableRows.length === 0) return
      const headerCells = tableRows[0].split('|').filter(c => c.trim()).map(c => c.trim())
      const dataRows = tableRows.slice(2)
      elements.push(
        <div key={`table-${key++}`} className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-navy text-white">
                {headerCells.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => {
                const cells = row.split('|').filter(c => c.trim()).map(c => c.trim())
                return (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-sm border-b">{cell}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
      tableRows = []
      inTable = false
    }

    const flushList = () => {
      if (listItems.length === 0) return
      elements.push(
        <ul key={`list-${key++}`} className="list-disc pl-6 space-y-2 my-4">
          {listItems.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">{item}</li>
          ))}
        </ul>
      )
      listItems = []
      inList = false
    }

    for (const line of lines) {
      const trimmed = line.trim()
      
      if (trimmed.startsWith('## ')) {
        flushTable()
        flushList()
        elements.push(
          <h2 key={`h2-${key++}`} className="text-2xl font-bold text-brand-navy mt-12 mb-6">
            {trimmed.replace('## ', '')}
          </h2>
        )
      } else if (trimmed.startsWith('### ')) {
        flushTable()
        flushList()
        elements.push(
          <h3 key={`h3-${key++}`} className="text-xl font-bold text-brand-navy mt-8 mb-4">
            {trimmed.replace('### ', '')}
          </h3>
        )
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 100) {
        flushTable()
        flushList()
        elements.push(
          <p key={`bold-${key++}`} className="font-bold text-brand-navy my-4">{trimmed.replace(/\*\*/g, '')}</p>
        )
      } else if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList()
        inTable = true
        tableRows.push(trimmed)
      } else if (trimmed.startsWith('- ')) {
        flushTable()
        inList = true
        listItems.push(trimmed.replace('- ', ''))
      } else if (trimmed.startsWith('---')) {
        flushTable()
        flushList()
        elements.push(<hr key={`hr-${key++}`} className="my-8 border-gray-200" />)
      } else if (trimmed.length > 0) {
        flushTable()
        flushList()
        elements.push(
          <p key={`p-${key++}`} className="text-gray-700 leading-relaxed my-4">{trimmed}</p>
        )
      }
    }
    
    flushTable()
    flushList()
    return elements
  }

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
            <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-brand-gold hover:text-brand-gold/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {isZh ? '返回文章列表' : 'Back to Articles'}
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-[#f97316] text-white rounded-full">
                {article.tag}
              </span>
              <span className="text-gray-400 text-sm">{article.date} · {article.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300">
              {article.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-a:text-brand-gold">
            {parseContent(article.content)}
          </div>
          
          {/* Author */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-semibold text-brand-navy">{article.author}</p>
                <p className="text-sm text-gray-500">{isZh ? 'MBCT内容团队' : 'MBCT Content Team'}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
