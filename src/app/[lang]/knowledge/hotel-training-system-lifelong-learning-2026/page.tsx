import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "酒店培训体系：从\"新兵训练营\"到\"终身学习\"",
    summary: "刘总在南京经营一家120间客房的商务酒店，员工60人。",
    content: `"""# 酒店培训体系：从"新兵训练营"到"终身学习"

---

## 一、事件发生

刘总在南京经营一家120间客房的商务酒店，员工60人。

他一直很重视培训——每年花在培训上的预算超过30万，新员工有"入职培训"，老员工有"月度培训"，管理层有"季度培训"。

但效果呢？

他做了一次内部调研，发现：
- 68%的员工认为"培训内容和工作关系不大"
- 55%的员工认为"培训只是走个过场"
- 42%的员工表示"培训完就忘了，下次遇到问题还是不会"

刘总很困惑："钱没少花，为什么效果这么差？"

HR的反馈是："员工不配合，培训的时候都想着早点结束。"

这个问题，我相信很多酒店管理者都遇到过。

---

## 二、传统解决方案分析

传统酒店培训有三种模式：

**模式一：集中填鸭式**

新员工入职，来一个3-5天的"封闭式培训"，内容涵盖企业文化、规章制度、服务流程、操作规范。

问题：信息量太大，员工根本消化不了。3天后上岗，发现学的全忘了。

**模式二：老带新**

老员工带新员工，手把手教操作，"看着做一遍就会了"。

问题：老员工的能力就是他的天花板。如果老员工本身方法就是错的，新人学到的也是错的。而且老员工带新人没有动力——教会徒弟饿死师傅。

**模式三：外聘讲师**

请外部讲师来做培训，"大师课"、"行业分享"、"最新理念"。

问题：理论听起来很美，但落地很难。讲师走了，工具和方法也一起走了。

这三种模式的共同问题是：**把培训当成"任务"来完成，而不是当成"能力建设"来设计。**

---

## 三、MBCT视角分析

我们观察了刘总酒店的培训现场，发现了一个核心问题：**培训内容是"通用的"，而不是"定制的"。**

60个员工，有前台、有客房、有销售、有工程、有财务。每个人的岗位职责不同，能力基础不同，学习节奏不同。

但他们的培训内容，是一样的。

这就是问题所在——**用统一的标准去培训不同的人，就像用同一套药方去治疗不同的病人。**

更深层的问题是什么？

培训部门在设计课程的时候，往往是从"我要教什么"出发，而不是从"学员需要什么"出发。

讲师想的是："这个知识点很重要，我要讲清楚。"
学员想的是："这个知识点对我有什么用？"

这两者之间，往往存在巨大的鸿沟。

从MBCT的视角来看，有效的培训体系，应该满足三个条件：
1. **与工作场景绑定**——学完就能用，用完就能记住
2. **与个人发展绑定**——学习是为自己学，不是为酒店学
3. **与绩效奖励绑定**——学了有用，学好有奖

---

## 四、正确可行的解决方案

### 第一步：岗位能力模型——"我要达到什么标准"

我们帮酒店建立了一套"岗位能力模型"：

每个岗位有5个能力等级，每个等级有明确的行为标准和考核标准。

以"前台接待"为例：

| 等级 | 能力描述 | 行为标准 |
|------|----------|----------|
| L1 | 基础操作 | 能独立完成入住/退房操作 |
| L2 | 规范服务 | 能按标准流程处理投诉 |
| L3 | 个性化服务 | 能根据客人特点提供差异化服务 |
| L4 | 问题解决 | 能处理复杂投诉和突发情况 |
| L5 | 培训他人 | 能独立带教新人 |

员工一入职，就知道自己"现在在哪"，"要去哪"。

### 第二步：学习路径设计——"我应该怎么学"

每个能力等级，对应一套学习内容：

- **L1（基础操作）**：集中培训2天+实操带教1周
- **L2（规范服务）**：月度案例研讨+情景模拟
- **L3（个性化服务）**：交叉培训+轮岗体验
- **L4（问题解决）**：外出交流+标杆学习
- **L5（培训他人）**：TTT培训（培训师培训）

学习路径的核心逻辑是：**先学基础，再学进阶；先做学生，再做老师。**

### 第三步：即学即用的"微培训"模式

我们建议酒店放弃"三天集中培训"，改为"每天10分钟微培训"：

- 每天班前会，前厅经理分享一个"今日案例"
- 每周一次"情景演练"，模拟一个投诉场景
- 每月一次"服务复盘"，总结本月做得好的三件事

这种"碎片化、场景化、即时化"的培训方式，比一次性的"填鸭培训"效果好得多。

### 第四步：学习与职业发展挂钩

最重要的改变是：**把培训和晋升打通**。

员工要晋升到L3，必须完成L2的学习内容并通过考核；
要晋升到L4，必须有带教记录；
要晋升到L5，必须独立完成一次内部培训。

当学习直接关系到晋升，员工的动力自然就来了。

---

## 五、效果数据

实施一年后：
- 员工对培训满意度从45%提升到82%
- 内部晋升率从18%提升到40%
- 客户满意度评分提升0.3分
- 培训成本反而下降了15%（因为减少了无效的外聘讲师）

刘总说："以前觉得培训是成本，现在发现培训是投资。"

---

## 六、方法论总结

这个案例的核心启示是：**培训不是"完成任务"，而是"能力建设"**。

传统做法是"花钱完成任务"，培训成了成本中心。

MBCT的做法是：**把培训和职业发展绑定，让员工为自己学，学了有用**。

核心原则：**最好的培训，是让学员感受不到在培训**。当学习融入了工作场景，变成了工作的一部分，培训就不再是负担。"""`,
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: '15分钟',
    tag: "团队发展",
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
