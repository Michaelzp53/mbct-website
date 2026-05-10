import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "酒店能耗占营收15%：用能画像系统一年省126万实战",
    summary: "方总在武汉经营一家200间客房的会议型酒店，客源结构是：60%会议团、30%旅游散客、10%长住客。",
    content: `"""# 酒店能耗占营收15%：用能画像系统一年省126万实战

---

## 一、事件发生

方总在武汉经营一家200间客房的会议型酒店，客源结构是：60%会议团、30%旅游散客、10%长住客。

去年他做了一件让他后悔的事——在看到同行的电费账单后，跑去签了一个EMC（能源管理）合同。合同承诺"帮你省电，不省钱不要钱"。

结果是：节能设备装了，算法也上了，但一年下来，能耗费用只下降了8%，远低于合同承诺的25%。

方总结算账发现：EMC公司拿走了节省出来的电费的40%，他实际拿到的好处只有4.8%的成本下降。

"省下来的钱，有一大半进了他们的口袋。"方总说。

---

## 二、传统解决方案分析

面对能耗成本高的问题，传统做法有三种：

**方式一：EMC合同**

让专业的节能公司来做，"不省钱不要钱"。

问题：EMC公司的算法是通用模型，不一定适合你的酒店。而且合同条款往往有猫腻——省不省、省多少，都是他们说了算。

**方式二：简单关停**

人走灯灭、减少空调使用。"省电就是关电源"。

问题：这是以牺牲客人舒适度为代价的。客人投诉"房间太冷/太热"，口碑下降，得不偿失。

**方式三：设备升级**

换LED灯、换变频空调、换节能热水器。

问题：设备升级是一次性投入，但如果不配合精细化管理，节能效果有限。

这三种方式的共同问题是：**把"节能"当成一个技术问题来解决，而不是一个运营问题来解决**。

---

## 三、MBCT视角分析

我们接手这个项目后，首先做了一件事——梳理了这家酒店的电费结构。

**发现了三个关键问题：**

**问题一：能耗峰谷差巨大**

月度最高电费和最低电费相差40%。旺季的时候，每度电成本1.2元；淡季的时候，平均0.6元。

**问题二：区域能耗不均衡**

宴会厅和会议室占了总能耗的45%，但使用率只有30%。这些区域没有人实时监控，"开了就开着"。

**问题三：没有"用能画像"**

EMC公司给的是通用模型，但每家酒店的用能模式完全不同。用通用模型就等于"套公式"，效果自然打折。

**问题根源在哪里？**

传统酒店做能耗管理，逻辑是"监控+告警"——出了问题了报警，人去处理。

但真正有效的能耗管理应该是**"预测+前置干预"**——在问题发生之前就调整。

---

## 四、正确可行的解决方案

### 第一步：建立"用能场景画像"——定制算法

我们帮酒店建立了三个月的"用能场景画像"：

| 场景 | 供能策略 |
|------|----------|
| 宴会厅活动前2小时 | 提前开启空调，客人到场时温度刚好合适 |
| 会议室无预订时段 | 自动关闭灯光和空调 |
| 客房楼层淡季 | 只开启有入住的房间空调 |

### 第二步：安装"边缘计算传感器"——让设备自己会思考

我们在每个区域安装了温度传感器和人体感应传感器：
- 当某个区域温度超过设定值2度，且检测到有人，空调自动调低
- 当某个区域连续1小时无人体感应，灯光和空调自动进入节能模式

### 第三步：建立"能耗复盘机制"——让数据指导运营

每月给酒店管理层一份"用能报告"：
- 各区域能耗占比
- 能耗与营收的比率
- 异常峰值分析
- 优化建议

### 第四步：生活节律设计——让节能成为舒适体验

MBCT认为，节能的最高境界是**"客人感受不到节能，只感受到舒适"**。

方总的酒店重新设计了客房供能逻辑：
- **入住前**：预订系统同步房态，有预订的房间提前1小时预调温度
- **入住后**：门磁检测到客人外出，2小时后进入"节能模式"
- **睡眠时段**：晚上11点后，空调自动调至"睡眠曲线"

---

## 五、效果数据

实施一年后：
- 年度电费从420万降到294万，下降30%
- 客人投诉"房间太冷/太热"的次数下降67%
- 设备故障率下降40%
- 碳排放减少126吨

更重要的是，酒店建立了一套"用能最优解"模型——这不是一个静态的方案，而是一个持续优化的机制。

---

## 六、方法论总结

这个案例的核心启示是：**能耗管理的本质不是"省电"，而是"让能源使用和服务价值精准匹配"**。

传统做法是"监控+告警"，出了问题再处理。

MBCT的做法是：**建立用能场景画像，让设备自己知道该怎么做**。

核心原则：**节能不是牺牲舒适，而是精准匹配舒适**。"""`,
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
