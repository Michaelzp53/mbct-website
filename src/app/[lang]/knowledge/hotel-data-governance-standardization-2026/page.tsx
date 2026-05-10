import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "酒店数据治理：从\"数据不准\"到\"决策可信\"的三层标准化",
    summary: "张总在杭州经营一家120间客房的会议型酒店，他一直很重视数据——PMS有数据，财务有数据，OTA后台也有数据。",
    content: `"""# 酒店数据治理：从"数据不准"到"决策可信"的三层标准化

---

## 一、事件发生

张总在杭州经营一家120间客房的会议型酒店，他一直很重视数据——PMS有数据，财务有数据，OTA后台也有数据。

但他发现一个问题：**数据对不上。**

比如，PMS显示的月度入住率是78%，但财务系统显示的入住率是82%。张总问财务，财务说"PMS数据有问题"；问前厅，前厅说"财务算错了"。

最后谁也说不清楚哪个是对的。

这种情况在酒店行业非常普遍——**系统多、数据散、口径乱**。

张总后来做了一次全面审计，发现数据问题五花八门：
- 同一个"入住率"，PMS、财务、OTA三个系统三个数字
- 同一个"客户姓名"，有的系统是全名，有的系统是拼音
- 同一个"房型"，这家OTA叫"豪华房"，那家OTA叫"高级豪华房"

"我有一堆数据，但不知道该信哪个。"张总说。

---

## 三、传统解决方案分析

面对数据质量问题，传统做法有三种：

**方式一：忽略**

"数据有点出入没关系，大方向对就行。"

问题：差之毫厘，谬以千里。错误的决策，往往源于错误的数据。

**方式二：人工核对**

安排专员每天核对各系统数据，发现不一致就调整。

问题：人工核对成本高，而且人的注意力是有限的，总有疏漏。

**方式三：换系统**

换一套"更先进"的系统，以为新系统就能解决数据问题。

问题：新系统如果不用统一的标准定义数据，问题只是换个地方存在。

这三种方式的共同问题是：**治标不治本**——数据质量问题的根源是"没有标准"，而不是"系统不行"。

---

## 三、MBCT视角分析

我们帮张总的酒店做了一次数据审计，发现问题的根源在于"三层标准缺失"：

**第一层：代码标准缺失**

同样的房间类型，在不同系统里代码不一样：
- PMS：RM202
- OTA：type_b
- 财务：F02

导致数据无法关联。

**第二层：流程标准缺失**

入住率的计算方式不统一：
- 有的系统按"售出房间÷总房间"算
- 有的系统按"入住人數÷总容入住人数"算

导致同一指标不同结果。

**第三层：口径标准缺失**

"有效客人"的定义不统一：
- 有的系统包括长住客
- 有的系统不包括

导致统计数据偏差。

数据质量问题的本质是：**标准不统一**。解决这个问题，不能靠换系统，只能靠建立标准。

---

## 四、正确可行的解决方案

### 第一步：建立"数据字典"——统一代码标准

我们帮张总结了一套"数据字典"，定义每个数据的标准代码和口径：

| 数据项 | 标准代码 | 标准定义 | 数据来源 |
|--------|----------|----------|----------|
| 房间类型 | ROOM_STANDARD | 统一使用"经济型/舒适型/豪华型" | PMS |
| 客人类型 | GUEST_TYPE | 散客/团队/会员/协议 | PMS |
| 销售渠道 | CHANNEL | OTA/直销/团队/散客 | PMS |
| 入住率 | OCC_RATE | 入住房间数÷可用房间数 | PMS统一计算 |

### 第二步：建立"数据核对机制"——流程标准化

每天早上9点，系统自动生成"数据核对报表"，展示各系统的关键指标：

\`\`\`
入住率：PMS 78% / 财务 82% / OTA 79% — 均值79%，偏差3%
平均房价：PMS 268元 / 财务 265元 / OTA 270元 — 均值268元，偏差2%
\`\`\`

系统自动标注偏差超过5%的指标，发送给数据负责人排查。

### 第三步：建立"数据归属"制度——责任明确化

每个数据指标，归口到一个部门负责：

- 入住率、RevPAR：归口前厅部
- GOP、GOP率：归口财务部
- 会员复购率：归口销售部

哪个部门的数据出了问题，这个部门负责排查和修正。

---

## 五、效果数据

实施一年后：
- 数据不一致率从35%降到5%
- 决策效率提升50%（因为不需要花时间核对数据）
- 酒店RevPAR提升8%（因为定价决策基于可信数据）

更重要的是，张总终于知道"该信哪个数据"了。

---

## 六、方法论总结

这个案例的核心启示是：**数据治理的本质是"建立标准"，不是"换系统"**。

传统做法是"数据有问题就换系统"，结果是换汤不换药。

MBCT的做法是：**建立三层标准化（代码→流程→口径），让数据真正可信**。

核心原则：**没有标准的数据是垃圾，有标准的数据才是资产**。"""`,
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: '15分钟',
    tag: "技术应用",
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a]">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isZh ? '返回知识库' : 'Back to Knowledge'}
          </Link>
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            {article.tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg text-white/90 mb-6">{article.summary}</p>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-[#111827] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 md:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>
      </div>
    </div>
  )
}
