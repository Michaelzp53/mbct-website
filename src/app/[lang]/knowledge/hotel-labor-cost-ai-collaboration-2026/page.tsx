import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "存量时代的人工成本优化：AI替代还是人机协同？",
    summary: "陈总在成都经营一家150间客房的商务酒店，员工编制58人。",
    content: `"""# 存量时代的人工成本优化：AI替代还是人机协同？

---

## 一、事件发生

陈总在成都经营一家150间客房的商务酒店，员工编制58人。

去年，他发现人工成本占营收的比例已经达到38%，而且每年还在以5%的速度上涨。"再不控制人工成本，酒店的利润就被吃光了。"

他的第一反应是：**用AI替代人**。

他上了自助入住机，替代前台的一半工作量；上了AI客服，替代电话接线员；上了智能排班系统，减少夜班人手。

一年后，人力从58人降到了42人。但陈总结账发现：**人工成本只下降了12%，远低于预期。而且，客户满意度从4.5降到了4.1，投诉率上升了40%。**

问题出在哪里？

他请了一个咨询顾问来诊断，顾问说了句话让他印象深刻："你用AI替代了人，但你替代的是人的手，不是人的脑子。"

---

## 二、传统解决方案分析

面对人工成本压力，传统做法有三种：

**方式一：裁员**

减少员工数量，压缩编制。"一个萝卜一个坑"，甚至"一个萝卜两个坑"。

问题：短期效果明显，但长期伤害更大——员工工作量加大，工作质量下降，离职率上升，形成恶性循环。

**方式二：自动化替代**

上自助机、上机器人、上AI客服。"能用机器的就不用人"。

问题：自动化适合"标准化"的工作，但酒店服务有大量"非标准化"的部分——客人的情绪、特殊的需求、突发的情况，这些都需要人来处理。

**方式三：灵活用工**

用小时工、外包、实习生替代全职员工。"需要多少用多少"。

问题：灵活用工可以降低显性成本，但会提高隐性成本——培训成本、质量风险、管控难度。

这三种方式的共同问题是：**把"人工成本"当成一个静态的数字来控制，而不是一个动态的系统来优化。**

---

## 三、MBCT视角分析

我们介入陈总的项目后，首先做了一件事：**岗位价值盘点**。

我们把58个员工的工作分成两类：

**第一类：标准化工作**（可替代）
- 入住登记（60%可替代）
- 房态更新（80%可替代）
- 简单咨询（70%可替代）
- 数据录入（90%可替代）

**第二类：情感性工作**（不可替代）
- 投诉处理（20%可替代）
- 客户关怀（10%可替代）
- 突发应对（5%可替代）
- 关系维护（0%可替代）

我们发现：**陈总酒店的58人中，有32人做的是标准化工作，26人做的是情感性工作。**

但问题是，26个做情感性工作的人，有40%的时间被标准化工作占用了——他们本来应该"做服务"，却被迫"做录入"。

**更深层的问题是什么？**

AI替代的正确逻辑，不是"用机器替换人"，而是**"让AI做AI擅长的事，让人做人擅长的事"**。

AI擅长：重复性、数据性、规则性的工作。
人擅长：情感性、创造性、复杂性的工作。

当AI承担了标准化工作，人才能真正做"有温度的服务"。

---

## 四、正确可行的解决方案

### 第一步：人机协同模型设计——"AI做标准化，人做情感化"

我们帮陈总结了一套"人机协同模型"：

**前台场景**

| 工作环节 | AI处理 | 人工处理 |
|----------|--------|----------|
| 入住登记 | ✅ 自助机/扫脸 | 处理复杂情况 |
| 简单咨询 | ✅ AI客服 | 复杂问题升级 |
| 投诉处理 | ❌ | ✅ 人工处理 |
| 客户关怀 | ❌ | ✅ 人工处理 |

**核心原则**：AI处理80%的标准化事务，人处理20%的情感事务。

### 第二步：岗位重设——从"执行者"到"决策者"

我们把酒店的岗位从"执行型"转变为"决策型"：

**原来的前台**：做入住登记、接电话、录入数据。
**现在的前台**：处理AI无法处理的复杂情况，做"有温度的服务"。

原来的前台是"操作员"，每天重复同样的动作。
现在的前台是"体验官"，每天解决客人的特殊需求。

这个转变的关键是：**培训**。我们帮酒店做了"AI时代服务技能培训"，教员工如何在AI辅助下做更高价值的服务。

### 第三步：绩效考核调整——从"工作量"到"满意度"

原来的绩效考核：接待了多少客人、录入了几条数据。

现在的绩效考核：客人满意度是多少、产生了多少回头客、解决了多少复杂投诉。

当考核标准变了，员工的行为自然就变了——他们不再追求"快"，而是追求"好"。

### 第四步：组织文化升级——从"控制"到"赋能"

最关键的一步，是改变管理理念。

原来：老板控制员工，员工执行命令。
现在：员工赋能AI，AI服务员工，员工服务客人。

陈总后来跟我说，他发现一个有趣的现象：**当员工从繁琐的事务中解放出来，他们的工作热情反而更高了。**

因为他们不再是"机器的延伸"，而是"服务的主人"。

---

## 五、效果数据

实施一年后：
- 前台人力减少35%（从11人降到7人），但客户满意度从4.1提升到4.7
- 整体人工成本下降18%，但人效提升45%
- 员工流失率从38%降到15%
- 客人复购率提升22%

更重要的是，酒店形成了一种新的服务文化——**人+AI协同的服务模式**。

---

## 六、方法论总结

这个案例的核心启示是：**AI替代的正确逻辑，不是"换人"，而是"分工"**。

传统做法是"用机器替换人"，结果是"人机对立"。

MBCT的做法是：**AI做标准化，人做情感化；AI提高效率，人创造价值**。

核心原则：**最好的AI化，是让人从疲惫中解脱出来，而不是让人失业**。当员工不再被繁琐的事务消耗，他们才能真正做"有温度的服务"。"""`,
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: '15分钟',
    tag: "成本管控",
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
