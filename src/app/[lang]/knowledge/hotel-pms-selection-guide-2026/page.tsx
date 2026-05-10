import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: "新店PMS选型指南：2026年系统怎么选才不踩坑？",
    summary: "张总在成都新开了一家80间客房的精品酒店，开业前三个月开始选PMS系统。",
    content: `"""# 新店PMS选型指南：2026年系统怎么选才不踩坑？

---

## 一、事件发生

张总在成都新开了一家80间客房的精品酒店，开业前三个月开始选PMS系统。

他找了四家供应商：
- **供应商A**：国际大牌，OPERA，功能强大，但报价是他预算的3倍
- **供应商B**：国内老牌，石基，子系统很多，但接口不稳定
- **供应商C**：新型云PMS，订单来了，价格适中，但不知道能不能撑5年
- **供应商D**：AI原生PMS，Mews海外版，有AI功能，但国内支持薄弱

张总最后选了供应商B——国内老牌，"觉得靠谱"。

开业第一个月，问题就来了：
- 入住系统每天崩溃2-3次，前台只能手动登记
- 客房系统无法实时同步，客人投诉"房间还没打扫好为什么显示可入住"
- 财务系统导出的数据格式和税务系统不匹配，会计每次都要手工调整

张总后来算了一笔账：**系统问题导致的额外人力成本+客人投诉赔偿+延迟开业损失，加起来超过了PMS采购价的40%。**

"省了小钱，亏了大钱。"张总说。

---

## 二、传统解决方案分析

酒店PMS选型，传统的做法有三种：

**方式一：看品牌**

选大品牌、国际品牌，"贵一定有贵的道理"。

问题：国际大牌的本地化往往不够好，售后响应慢，而且价格虚高。很多功能是中国酒店根本用不到的。

**方式二：看价格**

选便宜的，"PMS不都差不多吗，能用就行"。

问题：PMS是酒店运营的核心系统，一旦出问题，前台、客房、财务、收益全部受影响。低质量PMS的隐性成本，往往比采购价更高。

**方式三：看功能**

选功能最全的，"一次性买齐，以后不用再加"。

问题：功能越多，学习成本越高，员工上手越慢。而且很多功能可能是"看起来有，实际用不上"的。

这三种方式的共同问题是：**没有从酒店实际运营需求出发，而是被供应商的营销牵着走。**

---

## 三、MBCT视角分析

我们介入张总的项目后，首先做了一件事：**梳理酒店的运营场景**。

我们发现，张总的80间客房精品酒店，实际上只用了PMS不到30%的功能。

那70%的功能，是供应商"免费赠送"的，但实际是用不到的。

更重要的是，张总真正需要的功能，供应商B做得并不好：
- 微信开锁（客人高频需求）——接口不稳定，经常失效
- 移动端查房（客房部高频需求）——只有PC端
- 财务自动对账（财务高频需求）——导出格式不兼容

**PMS选型的第一性原理是什么？**

不是"什么系统最先进"，而是**"什么系统最适合我的酒店规模、业务场景和团队能力"**。

好的PMS选型，是先梳理运营场景，再匹配合适的系统；而不是先确定系统，再让运营去适应系统。

**更深层的问题在哪里？**

张总选供应商B，还有一个心理因素：**"老牌子倒闭风险低"**。

这个考虑其实有道理，但不完全对。

PMS市场正在洗牌：传统OPERA系面临云化转型，国内老牌面临新型PMS的挑战，新型PMS虽然灵活但资金实力参差不齐。

2026年的PMS市场，没有"绝对安全"的选择，只有"相对合适"的选择。

---

## 四、正确可行的解决方案

### 第一步：梳理运营场景——"我要什么"比"有什么"更重要

我们帮张总结了一张"运营场景清单"：

**入住场景（前台）**

- 扫码入住：是否需要微信/支付宝扫码开房？
- 会员识别：是否有会员体系，需要自动识别会员等级？
- 公安对接：是否需要直连公安入住系统？

**客房场景（客房部）**

- 房态同步：PC端+移动端是否都能实时查看？
- 查房记录：移动端是否支持查房拍照上传？
- 维修派单：是否能和工程维修系统打通？

**财务场景（财务部）**

- 报表自动生成：是否支持自定义报表？
- 税务对接：导出格式是否兼容金税系统？
- 应收账款：是否支持挂账管理？

**收益场景（销售部）**

- 动态定价：是否支持OTA价格实时同步？
- 库存管理：多平台库存是否能统一管理？

### 第二步：建立五维评估模型

基于运营场景，我们帮张总结了一套PMS评估模型：

| 维度 | 权重 | 评估内容 |
|------|------|----------|
| 功能匹配度 | 30% | 是否覆盖核心运营场景？ |
| 系统稳定性 | 25% | 是否稳定可靠，故障率低？ |
| 接口开放度 | 20% | 能否和现有系统打通？ |
| 实施成本 | 15% | 采购+实施+培训总成本？ |
| 供应商能力 | 10% | 售后响应速度+持续迭代能力？ |

### 第三步：不同规模酒店的PMS选择逻辑

| 规模 | 推荐类型 | 代表产品 | 选择逻辑 |
|------|----------|----------|----------|
| <50间 | 轻量型云PMS | 订单来了、番茄来了 | 价格低，上手快 |
| 50-150间 | 中端云PMS | 石基西软、美团 | 功能全，服务好 |
| 150-300间 | 高端云PMS/混合部署 | OPERA云版、Mews | 功能强大，可定制 |
| >300间 | 国际高端系统 | OPERA、Infor | 全球通用，接口完善 |

张总的80间客房，匹配的是"中端云PMS"类型。供应商B虽然品牌老，但这个细分市场的产品力反而不如新型PMS。

### 第四步：实施前的"试运行"机制

我们建议张总在上线前，做一个月的并行试运行：

- 新系统和老系统同时运行，对比数据差异
- 发现问题及时反馈给供应商，要求在开业前解决
- 员工培训要充分，不要等到开业当天还在学系统

---

## 五、情绪价值视角

张总后来跟我说，他选PMS的时候，最难受的不是"选错了"，而是**"不知道该信谁"**。

每个供应商都说自己好，都说自己"专业"，都说别人"不行"。他一个非专业人士，根本判断不了谁说的是真话。

这种感觉，我相信很多投资人都经历过。

从MBCT的视角来看，PMS选型的情绪价值在于：**确定性**。

当你的决策有方法论支撑，当你知道自己为什么选这个而不是那个，你的心里是安定的。

MBCT能提供的，正是这种确定性——不是替你做决定，而是告诉你"怎么做才能不后悔"。

---

## 六、方法论总结

这个案例的核心启示是：**PMS选型是"需求导向"，不是"品牌导向"或"价格导向"**。

传统做法是被供应商的营销牵着走，买了贵的不一定合适。

MBCT的做法是：**先梳理运营场景，再匹配合适的系统，最后用评估模型做量化比较**。

核心原则：**PMS是酒店运营的核心，选错了代价很高**。用科学的方法选型，是对自己和时间负责任。"""`,
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: '15分钟',
    tag: "筹建筹备",
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
