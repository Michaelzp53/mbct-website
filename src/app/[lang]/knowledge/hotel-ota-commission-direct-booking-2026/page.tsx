import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "OTA佣金一年吃掉90万：直订体系搭建实战手册",
    summary: "李总在南京经营一家98间客房的经济型酒店，位置不错，靠近地铁口，客源以旅游和商务散客为主。",
    content: `"""# OTA佣金一年吃掉90万：直订体系搭建实战手册

---

## 一、事件发生

李总在南京经营一家98间客房的经济型酒店，位置不错，靠近地铁口，客源以旅游和商务散客为主。

去年他算了一笔账，光是携程和美团两个平台，一年的佣金支出就接近90万，占到营业额的8%。

"等于说，每10个客人进来，有将近2个是在给平台打工。"李总说。

他的第一反应是"自救"——让前台员工推会员卡、在退房时引导客人关注公众号。但效果甚微，愿意办卡的客人不到5%。

核心问题是：他已经习惯了OTA的流量模式，不知道该怎么摆脱。

---

## 二、传统解决方案分析

面对OTA佣金压力，传统做法有三种：

**方式一：提高价格，弥补佣金**

把房价提高8%，让客人来承担佣金成本。

问题：价格高了，客人去比价的时候发现你比别人贵，订单更少了。

**方式二：减少OTA依赖，强制推会员卡**

前台推、房间推、退房推，三令五申让客人办会员卡。

问题：客人办卡是因为划算，但划算这件事，OTA可以比你做得更大。客人办完卡，下次打开OTA一搜，还是谁便宜买谁。

**方式三：all in 私域**

全靠微信、公众号、企业微信，放弃OTA。

问题：私域是要养的，短期内没有流量进来，酒店可能撑不到私域成熟的那一天。

这三种方式的共同问题是：**把OTA和直销当成"非此即彼"的对立关系**。

---

## 三、MBCT视角分析

我们介入这个项目后，首先对客源结构做了详细分析。

**发现了一个关键数据：**

在这家酒店的历史客人中，有35%是"回头客"——他们曾经通过OTA下单，但第二次、第三次来的时候，是直接打电话或者直接过来的。

这说明什么？

说明酒店的服务本身没有问题，客人认可这个产品，只是第二次转化的时候，酒店没有提供足够的"理由"让客人跳过OTA。

**问题根源在哪里？**

OTA是一个"中间商"——它帮你找到客人，但它也在你和客人之间建立了一道墙。每次交易完成后，客人和酒店之间就断了联系。

而OTA要的就是这个——让你和客人之间永远无法直接对话。

更深层的问题是什么？

客人不想被OTA绑定，但酒店也没有给客人一个"留在酒店私域"的理由。

会员卡、打折券、积分兑换——这些传统手段解决的是利益问题，但没有解决"情感连接"的问题。

从MBCT的视角来看，真正的问题不是如何"抢客人"，而是**如何让客人离开酒店之后，依然对你有生活方式上的记忆和归属**。

---

## 四、正确可行的解决方案

### 第一步：重新定义"私域"——不是收集数据，而是建立情感连接

我们给酒店做了一套"离店关怀系统"：

**客人退房后30分钟内**：收到一条专属消息：
"张先生您好，今天退房顺利。今天南京气温有点低，您路上注意保暖。如果您下次来南京，欢迎直接联系我们，我们给您留一个不涨价的专属房间。"

这条消息的目的不是推销，而是让客人感受到："这家酒店记得我，而且关心我。"

**客人离店后第三天**：发送第二天当地天气的提醒。

**客人离店后第七天**：推送一个当地的小众旅行攻略。

这套系统的核心逻辑是：**持续出现在客人的视线里，但不是以"推销"的身份，而是以"朋友"的身份**。

### 第二步：建立"生活方式社群"——让客人"住在你的圈子里"

我们帮酒店建立了"南京生活家"微信群：
- 群里不发房价促销，而是分享"本周南京最值得去的5个地方"
- 每月一次"线下小聚"

三个月后，酒店的微信客服号有2000多个活跃联系人。再次来南京时，超过70%会直接通过微信订房。

### 第三步：设计"直订专属权益"——让跳过OTA成为自然选择

- 直订客人享受"免查房"待遇
- 直订客人享受"延迟退房"权益
- 直订客人享受"专属欢迎礼"

这些权益的核心不是打折，而是"体验升级"。

---

## 五、效果数据

实施半年后：
- 直订比例从12%提升到35%
- OTA佣金支出从90万降到47万
- 酒店净利润增加43万
- 客人复购率提升41%

---

## 六、方法论总结

这个案例的核心启示是：**私域运营的本质不是"收集数据"，而是"经营生活方式关系"**。

传统做法是"用利益换客户"，但利益是暂时的。

MBCT的做法是：**让客人在离店之后，依然对你有生活方式上的记忆和归属**。

核心原则：**最好的私域，是让客人感受不到"被营销"**——他只是觉得"这家酒店挺有意思的，下次还来"。"""`,
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: '15分钟',
    tag: "市场营销",
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
