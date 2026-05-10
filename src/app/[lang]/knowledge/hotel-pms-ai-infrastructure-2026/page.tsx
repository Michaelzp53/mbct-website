import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "PMS从管理工具到AI基础设施：2026年系统进化论",
    summary: "王总在成都经营一家80间客房的精品酒店，2019年他花了8万块上了一套\"智慧酒店系统\"。",
    content: `"""# PMS从管理工具到AI基础设施：2026年系统进化论

---

## 一、事件发生

王总在成都经营一家80间客房的精品酒店，2019年他花了8万块上了一套"智慧酒店系统"。

三年后，这套系统成了他的噩梦：前台要用3套软件，客房系统无法实时同步，财务系统导出的数据格式和税务系统不兼容。每次系统一出问题，整个酒店运营就瘫痪。

"花了几十万，买了设备和软件，但真正用起来的没几个功能。"王总说。

这是酒店数字化转型中最典型的问题——**系统孤岛**。

---

## 二、传统解决方案分析

面对系统孤岛，传统做法有三种：

**方式一：继续买买买**

哪个功能缺了，就买一个供应商的产品来补。5年下来，有的酒店上了七八套系统，但彼此之间不连通。

**方式二：做系统集成**

找一家集成商，把所有系统用API接起来。

问题：集成是临时性的，当某个系统升级，接口可能就失效了。维护成本极高。

**方式三：换大品牌**

换一个"什么都有"的大系统。

问题：大品牌的系统往往功能繁重、学习成本高，而且本地化不够好。

这三种方式的共同问题是：**治标不治本**——系统孤岛的本质是"选型思路"的问题，而不是"集成技术"的问题。

---

## 三、MBCT视角分析

2026年，PMS赛道正在经历一次根本性的变革：**从"管理工具"到"AI基础设施"**。

传统PMS的设计逻辑是"管理"——帮酒店记录房间状态、处理订单、管理会员。

AI原生PMS的设计逻辑是"赋能"——帮酒店理解客人、优化运营、预测未来。

**两者的核心区别是什么？**

| 维度 | 传统PMS | AI原生PMS |
|------|---------|-----------|
| 数据 | 记录过去 | 预测未来 |
| 决策 | 人做 | 人+AI协作 |
| 个性化 | 标准化服务 | 千人千面 |
| 迭代 | 功能迭代 | 智能迭代 |

举个例子：传统PMS告诉你"上周入住率是75%"。
AI原生PMS告诉你"根据本周预订进度和竞品价格，预计周三入住率会下降到68%，建议今天把价格下调5%，可以多带来8个订单。"

这就是"从记录到预测"的跃迁。

---

## 四、正确可行的解决方案

### 第一步：选择"平台型"系统，而不是"功能型"系统

我们给王总的第一个建议是：选一个"平台型"PMS，能和其他工具连接，形成数据互通。

具体来说：
- 选接口丰富、API完善的PMS
- 以PMS为核心，逐步接入其他工具
- 核心原则：**先打通数据，再优化功能**

### 第二步：分阶段上线——"小步快跑"

我们建议王总分三个阶段：

**第一阶段（1-3个月）**：核心流程数字化
- 自助入住+智能门锁打通
- PMS实现客史数据记录

**第二阶段（4-6个月）**：效率工具接入
- 微信客服接入
- 能源管理系统接入

**第三阶段（7-12个月）**：数据驱动优化
- 基于数据分析，优化定价策略
- 基于客人画像，实施精准营销

### 第三步：人感数字化——让技术释放人的情感能力

MBCT最关键的建议是：**技术负责"不犯错"，人负责"打动人"**。

我们帮王总的酒店做了一个"客人记忆卡"：
- 客人第二次入住：前台屏幕弹出"张先生，欢迎回来，已为您安排18楼"
- 客人第三次入住：系统提示"张先生前两次都喝了龙井，茶包已备好"

这个设计的成本：PMS自带功能，无需额外投入。

---

## 五、效果数据

王总按照这个方案重新做数字化转型，两年后：
- 酒店数字化覆盖率从30%提升到85%
- 前台平均入住办理时间从8分钟降到3分钟
- 客人评分从4.5提升到4.8

更重要的是，员工不再抱怨"系统难用"。

---

## 六、方法论总结

这个案例的核心启示是：**PMS选型要从"功能思维"转向"平台思维"**。

传统思路是"什么功能缺了，买什么"——这是碎片化的思维。

MBCT的思路是：**先选平台，再选工具，最后优化流程**。

核心原则：**技术可以标准化，但人感必须个性化**。"""`,
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
