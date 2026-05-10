import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: isZh ? '北京酒店业大洗牌：禁止新开三星以下酒店，2030年打造10个高端集群' : 'Beijing\'s Hotel Shakeout: No New 3-Star Hotels Allowed',
    summary: isZh 
      ? '2026年4月，北京正式出台酒店业"限星令"——停止批准新建三星级及以下酒店。这项政策指向2030年目标：10个高端酒店集群、600家高品质酒店、连锁化率60%。'
      : 'In April 2026, Beijing officially banned new 3-star-and-below hotels. The policy targets 10 premium clusters, 600 high-quality hotels, and 60% chain rate by 2030.',
    author: 'MBCT内容团队',
    date: '2026-05-10',
    readTime: isZh ? '8分钟' : '8 min',
    tag: isZh ? '行业分析' : 'Industry Analysis',
    content: isZh ? `
## 一、政策出台：三星以下新酒店，停了

2026年4月，北京市文化和旅游局联合市规划委员会正式发布《关于推动北京市酒店业高质量发展的实施方案》。这份文件最核心的内容只有一条：**停止批准新建三星级及以下星级酒店**。

这不是征求意见稿，而是一份已经开始执行的红头文件。

**停止批准的新建酒店类型：**
- 三星级及以下新建酒店
- 未纳入连锁品牌体系的经济型酒店
- 不符合城市规划功能分区的酒店项目

**允许新建的酒店类型：**
- 四星级及以上新建酒店
- 纳入连锁品牌体系的精品酒店
- 符合城市功能定位的主题酒店
- 城市更新项目中的酒店改造

**存量酒店的出路：**
- 现有三星级及以下酒店鼓励升级改造
- 符合条件的可申请"品质提升"认证
- 不符合升级条件的，纳入"有序退出"名单

北京不需要更多的经济型酒店，北京需要的是能与首都地位匹配的高端酒店供给。

## 二、目标：2030年，10个高端集群，600家高品质酒店

禁止新开低星级酒店只是手段，真正的目标在后面。

**目标一：连锁化率60%**

目前北京酒店连锁化率约为45%，低于上海的52%和深圳的55%。新政要求2030年前提升至60%，未来4年将有约15个百分点的增量来自连锁品牌。

**目标二：高品质酒店600家**

目前北京高品质酒店约400家，缺口约200家。这意味着未来4年，北京市场每年将新增50家高品质酒店，平均每周约1家。

**目标三：10个高端酒店集群**

根据已公布的规划，10个高端酒店集群分布在北京不同区域：

| 集群名称 | 区域定位 | 功能特色 |
|---------|---------|---------|
| CBD核心集群 | 朝阳国贸区域 | 商务会议首选 |
| 副中心政务集群 | 通州城市副中心 | 政务接待保障 |
| 环球影城度假集群 | 通州文化旅游区 | 文旅目的地配套 |
| 首都机场临空集群 | 顺义临空经济区 | 航空商旅服务 |
| 中关村科技集群 | 海淀中关村区域 | 科技创新人群 |
| 怀柔会展集群 | 怀柔科学城+雁栖湖 | 会议会展目的地 |
| 延庆冰雪集群 | 延庆冬奥板块 | 冰雪运动配套 |
| 新机场临空集群 | 大兴国际机场周边 | 国际交往门户 |
| 冬奥遗产集群 | 石景山首钢园 | 赛事遗产利用 |
| 生态涵养集群 | 密云/怀柔/平谷 | 休闲度假目的地 |

这10个集群覆盖了北京从商务到文旅、从政务到体育、从科技到生态的全场景需求。

## 三、存量酒店的三种命运

对于北京现有的约1800家三星级及以下酒店，新政带来了三种命运。

**命运一：升级改造**

具备升级的硬件条件和区位优势。通过重新装修、提升服务、纳入连锁品牌体系，转型为四星级及以上酒店或精品酒店。

政策支持：政府将提供升级改造补贴，优先审批升级项目，提供连锁品牌对接服务。

**命运二：品质认证**

不符合升星条件但有特色的酒店，可申请"北京品质"认证，在官方渠道获得推荐。

**命运三：有序退出**

既不具备升级条件，也不符合品质认证标准的酒店，将被纳入"有序退出"名单。

## 四、供需分析：为什么政策敢于"限制低星"？

理解北京"限星令"，不能只看供给侧，还要看需求侧。

**需求侧的变化：**

北京每年接待入境商务和旅游客人约500万人次。客源结构正在发生变化：

- **高端客群占比提升**：2025年五星级酒店平均RevPAR达到680元，四星级酒店平均RevPAR达到420元，均创历史新高。
- **体验式需求崛起**：年轻客群和入境客人追求有设计感、有文化内涵、有体验价值的住宿产品。
- **会议会展需求复苏**：2025年北京举办国际会议约280场，全国占比约18%。

基于以上分析，北京高端酒店的市场缺口约为200家。这是政策敢于"限制低星"的底气所在。

## 五、行业格局：巨头们正在如何布局？

**国际酒店集团：**

- **万豪国际**：在北京拥有约25家酒店，策略是"高端+精选"——JW万豪、丽思卡尔顿占据顶级市场，万枫、AC酒店拓展精选服务市场。
- **希尔顿**：在北京拥有约18家酒店，策略是"品牌矩阵"——用不同品牌覆盖从奢华到中端的全价格带。
- **洲际酒店集团**：在北京拥有约15家酒店，策略是"商务为核心"——主打会议会展和商务出行市场。

**国内酒店集团：**

- **华住集团**：在北京拥有约120家酒店，策略是"品质升级"——将存量经济型酒店升级为中高端品牌。
- **锦江酒店**：在北京拥有约80家酒店，策略是"高端突破"——通过锦江酒店品牌拓展高端市场。
- **亚朵集团**：在北京拥有约30家酒店，定位"人文精品酒店"，用差异化与人文体验与国际品牌竞争。

## 六、应对策略：不同角色的行动指南

**对酒店业主的建议：**

第一，评估物业条件。你的酒店位于哪个区域？物业条件能否支持升级到四星级？如果能，需要投入多少资金？回报周期多长？

第二，关注政策窗口期。2026-2027年是政策落地的关键期，也是存量酒店升级的最佳时机。越早行动，越能享受政策红利。

第三，慎重选择品牌加盟。选择哪个品牌要考虑区域定位、客源结构、管理能力、加盟费用等多个因素。

**对酒店管理者的建议：**

第一，提升运营效率。数字化、智能化的运营管理工具将成为必备能力。

第二，强化服务差异化。高端化不等于"贵"，而是"值"。

第三，关注人才结构转型。未来酒店需要的不再是"标准化的服务操作员"，而是"个性化的体验设计者"。

**对酒店投资者的建议：**

第一，关注城市更新项目。北京老旧物业的改造升级将成为新的投资机会。

第二，关注品牌加盟机会。北京高端酒店市场的品牌加盟需求增长，将带来管理输出、特许经营等轻资产投资机会。

第三，关注酒店集群周边配套。酒店集群的发展将带动周边商业、服务、地产的价值提升。

## 结语

北京不再批准新开三星级以下酒店了。这不是一道简单的行政命令，而是中国酒店业供给侧改革的政策信号。

**你的酒店在升级名单里，还是淘汰名单里？**

答案不在政策里，在你的选择里。

---

**免责声明**：本文数据来源为政府公开文件、行业研究报告及媒体报道，部分数据为估算值，仅供参考。投资决策需自行判断。

**关于MBCT**：卖创兄弟商业科技，专注于酒店业资讯与分析。

※ 本文部分内容由 AI 辅助生成
    ` : `
## I. The Policy: No New 3-Star-and-Below Hotels

In April 2026, the Beijing Municipal Cultural and Tourism Bureau officially released the "Implementation Plan for Promoting High-Quality Development of Beijing's Hotel Industry" — with one core mandate: **Stop approving new 3-star and below hotels**.

This isn't a draft for comment. It's a live policy directive already in execution.

**Prohibited new hotel types:**
- 3-star and below new hotels
- Economy hotels not in chain brand systems
- Hotel projects not matching urban planning zones

**Permitted new hotel types:**
- 4-star and above new hotels
- Boutique hotels in chain brand systems
- Theme hotels matching urban positioning
- Hotel renovations in urban renewal projects

**Options for existing hotels:**
- Encourage upgrade and renovation
- Apply for "Quality Enhancement" certification
- Enter "orderly exit" list if not upgradable

## II. Targets for 2030

**Target 1: 60% Chain Rate**

Currently Beijing's hotel chain rate is ~45%, below Shanghai's 52%. The policy aims for 60% by 2030 — meaning ~15 percentage points of market share will shift to chain brands in the next 4 years.

**Target 2: 600 High-Quality Hotels**

Beijing currently has ~400 "high-quality" hotels. The gap is ~200 hotels — roughly 50 new high-quality hotels per year.

**Target 3: 10 Premium Hotel Clusters**

Ten clusters will anchor different districts:

| Cluster | District | Focus |
|---------|----------|-------|
| CBD Core | Chaoyang | Business & Conference |
| Sub-center Government | Tongzhou | Government Services |
| Universal Studios | Tongzhou | Cultural Tourism |
| Capital Airport | Shunyi | Aviation Business |
| Zhongguancun Tech | Haidian | Tech Professionals |
| Huairou MICE | Huairou | Conferences & Events |
| Yanqing Ice & Snow | Yanqing | Winter Sports |
| New Airport | Daxing | International Gateway |
| Winter Olympics Legacy | Shijingshan | Event Heritage |
| Ecological Conservation | Miyun/Huairou/Pinggu | Leisure & Resort |

## III. Three Fates for Existing Hotels

Beijing's ~1,800 existing 3-star-and-below hotels face three paths:

**Path 1: Upgrade**
Hotels with viable conditions can renovate and join chain brands, targeting 4-star or above. Government offers subsidies and priority approvals.

**Path 2: Quality Certification**
Hotels that can't star-up but have character can apply for "Beijing Quality" certification.

**Path 3: Orderly Exit**
Hotels with neither upgrade potential nor special character will be guided to exit.

## IV. Why Is the Policy Confident?

Because demand is strong:

- 5-star average RevPAR reached ¥680 in 2025 — historical high
- 4-star average RevPAR reached ¥420 in 2025 — historical high
- Beijing receives ~5 million international business/tourist visitors annually
- 280 international conferences held in Beijing in 2025

The premium demand is real. The policy is designed to let supply catch up.

## V. Industry Landscape

**International Chains:**
- **Marriott**: ~25 hotels in Beijing, "high-end + select-service" strategy
- **Hilton**: ~18 hotels in Beijing, full brand portfolio
- **IHG**: ~15 hotels in Beijing, business/MICE focus

**Domestic Chains:**
- **Huazhu**: ~120 hotels in Beijing, quality upgrade strategy
- **Jinjiang**: ~80 hotels in Beijing, premium push
- **Atour**: ~30 hotels in Beijing, cultural differentiation

## VI. Actionable Recommendations

**For Hotel Owners:**
1. Assess your property: Can it realistically upgrade to 4-star? What's the ROI?
2. Act in the window: 2026-2027 is the optimal timing for upgrades
3. Choose your brand wisely: Franchise decisions require careful analysis

**For Hotel Managers:**
1. Digitize operations: Smart management tools are becoming essential
2. Differentiate through service: Premium isn't about being expensive — it's about being worth it
3. Reinvent your talent model: Future hotels need "experience designers"

**For Investors:**
1. Watch urban renewal projects: Old property conversions offer policy-backed opportunities
2. Explore franchise opportunities: Growing demand for chain brands
3. Monitor cluster peripherals: Hotel clusters drive value in surrounding areas

## Conclusion

Beijing's "star-rating ban" is a signal of supply-side reform arriving in China's hotel industry.

Going forward in Beijing:
- No new economy hotels
- Only 4-star+ or authentically differentiated boutique
- Brand value is increasing

**Is your property on the upgrade list or the exit list?**

The answer isn't in the policy. It's in your choices.

---

**Disclaimer**: Data sourced from government documents, industry research, and media reports. Some figures are estimates. Investment decisions require independent judgment.

**About MBCT**: Marvel Bros. Commercial Technology — Hotel Industry Insights & Analysis.

※ Portions of this article were AI-assisted.
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
