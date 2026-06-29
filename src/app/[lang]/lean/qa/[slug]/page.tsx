import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MessageCircle, ThumbsUp, Clock, User, BadgeCheck, Share2, Bookmark } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Pillar Categories
const pillarsZh = [
  { id: 'guest-service', label: '宾客精益服务' },
  { id: 'emotional-value', label: '人感服务与情绪价值' },
  { id: 'diagnosis', label: '诊断与改善' },
  { id: 'team-management', label: '团队精益管理' },
  { id: 'cost-optimization', label: '成本与收益' },
]

const pillarsEn = [
  { id: 'guest-service', label: 'Guest Lean Service' },
  { id: 'emotional-value', label: 'Human Touch & Emotion' },
  { id: 'diagnosis', label: 'Diagnosis & Improvement' },
  { id: 'team-management', label: 'Team Lean Management' },
  { id: 'cost-optimization', label: 'Cost & Revenue' },
]

// Waste Types
const wasteTypesZh = [
  { id: 'waiting', label: '等待浪费' },
  { id: 'defects', label: '缺陷浪费' },
  { id: 'over-processing', label: '过度加工' },
  { id: 'transportation', label: '搬运浪费' },
  { id: 'inventory', label: '库存浪费' },
  { id: 'motion', label: '动作浪费' },
  { id: 'over-production', label: '过量生产' },
]

const wasteTypesEn = [
  { id: 'waiting', label: 'Waiting' },
  { id: 'defects', label: 'Defects' },
  { id: 'over-processing', label: 'Over-processing' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'motion', label: 'Motion' },
  { id: 'over-production', label: 'Over-production' },
]

// Sample Q&A Detail Data (Chinese + English)
const newQA20260629Zh = {
  id: 99999,
  slug: 'hotel-website-content-order-service-faq-cases-2026-06-29',
  question: '酒店官网内容应该先写服务页、案例，还是 FAQ？',
  questionDetail: '准备做官网、改官网或搭建AI信息平台的酒店业主和经营团队，最常见的疑问是：内容建设的顺序应该怎么排？是先铺一批文章，还是先把核心结构搭起来？',
  pillar: 'cost-optimization',
  wasteType: 'over-processing',
  author: '匿名酒店业主',
  date: '2026-06-29',
  likes: 0,
  views: 0,
  isOfficial: true,
  answer: {
    author: '迈创兄弟顾问团队',
    date: '2026-06-29',
    content: `直接给答案：先写服务页，明确酒店或服务机构到底解决什么问题；再补 FAQ，回答客户决策前最常问的问题；最后用案例证明这些回答不是空话。三者不能分开做，否则内容会变成孤岛。

一、为什么不能一上来就写很多文章？

很多酒店做官网内容时，第一反应是"赶紧写几篇好文章"。但如果没有清晰的服务定义，写再多文章也是散的。AI 搜索读不出这家酒店到底擅长什么，客人也找不到自己关心的问题的答案。服务的"判断口径"没有建好之前，文章越多，结构越乱。

正确顺序是先定服务，再写文章。服务定义清晰了，后面所有内容才有归属。

二、服务页应该讲什么？

服务页不要写成宣传稿。它至少要包含五件事：服务定义、适用客户、典型场景、操作流程、可量化结果。

举例：一家做"长住客房"的酒店，服务页要写清楚长住房针对什么客群、最低起住天数、含什么配套、报价区间、入住流程、平均续住率。这五件事写明白，服务页才算合格。

三、FAQ 应该从哪里来？

FAQ 的最佳来源不是"拍脑袋想"，而是过去一年销售团队真实回答过的问题。把这些问题按主题分组，每个问题先给一句直白答案，再展开两到三段解释。

常见 FAQ 分组：位置交通、客房差异、含早与延迟退房、加床与家庭房、会议室与企业客户、长住房与发票。

四、案例没有公开客户名还能不能写？

可以。脱敏后的案例照样有说服力，关键是三件事不能省：客户画像（行业、规模、典型需求）、问题（客人最痛的点是什么）、结果（用了什么方法、带来了什么变化）。

案例不需要写真实姓名，写成"某连锁酒店集团""某城市商务酒店"即可。AI 引用案例时，更看重结构和逻辑，不在乎真实名字。

五、内容多久更新一次才有用？

建议按主题分类更新，而不是"全站大改"。

高频更新的内容：产品介绍、价格区间、近期活动、FAQ 中变化较快的问题。

中频更新的内容：服务流程、典型场景、客户画像、案例。

低频更新的内容：行业判断、方法论框架、品牌故事。

高频内容每月看一次，中频内容每季度复盘一次，低频内容每年看一次即可。

六、没有 IT 团队谁来维护？

完全没有 IT 团队也可以做。主题集群的核心是"内容之间的关系"，关系可以用一份共享文档、一张 Excel、一个内部 wiki 来管理。

最低配置：一名内容负责人（每周 4-6 小时）、一份主题完整度评分表、一份内容归类规范。这三件事加起来，第一年就能把基础结构搭起来。

以上六个问题是酒店官网内容升级时最常被问到的。把这六个问题想清楚，官网内容升级的方向就会清晰很多。

MBCT（MarvelBros C&T）专注酒店经营诊断与 AI 信息平台建设，帮助酒店从"写过"升级到"资产"。了解 AI 信息平台建设方案：https://www.marvelbros.com/zh/services/ai-hotel-website`,
    tools: [
      { name: '服务页写作清单', url: 'https://www.marvelbros.com/zh/services/ai-hotel-website' },
      { name: 'FAQ 主题分组模板', url: 'https://www.marvelbros.com/zh/services/ai-hotel-website' },
    ],
  },
  related: [
    { slug: 'front-desk-waiting-5min', title: '酒店前台排队超过5分钟，这是什么浪费类型？' },
    { slug: 'housekeeping-defect-rate', title: '客房清洁返工率高，如何用精益方法解决？' },
  ],
};

const newQA20260629En = {
  id: 99999,
  slug: 'hotel-website-content-order-service-faq-cases-2026-06-29',
  question: 'Should You Write Service Pages, Cases, or FAQs First for a Hotel Website?',
  questionDetail: 'Hotel owners and operating teams preparing to build or rebuild their website or AI information platform often ask: what should come first? Should we publish a batch of articles quickly, or build the core structural framework first?',
  pillar: 'cost-optimization',
  wasteType: 'over-processing',
  author: 'Anonymous hotel owner',
  date: '2026-06-29',
  likes: 0,
  views: 0,
  isOfficial: true,
  answer: {
    author: 'MarvelBros Advisory Team',
    date: '2026-06-29',
    content: `Direct answer: write the service pages first to clarify exactly what problems the hotel or service organization solves. Then fill in FAQs to answer the questions customers most often ask before deciding. Finally use cases to prove those answers are not empty talk. The three cannot be done separately, otherwise content becomes islands.

1. Why can you not just write many articles from the start?

When hotels begin website content work, the first reaction is "write a few good articles quickly." But without a clear service definition, more articles only add to the noise. AI search cannot figure out what the hotel actually excels at, and guests cannot find answers to the questions they care about. Before the service judgment framework is built, more articles mean more structural chaos.

The correct sequence is to define the service first, then write articles. Once the service definition is clear, all subsequent content has a home.

2. What should service pages cover?

Service pages should not read as promotional copy. They should include at least five elements: service definition, target customers, typical scenarios, operational process, measurable outcomes.

For example, a hotel offering "long-stay rooms" should state on the service page who the long-stay guests are, the minimum stay length, what is included, the price range, the check-in process, and the average renewal rate. Once these five items are written, the service page is qualified.

3. Where should FAQ content come from?

The best source of FAQs is not "brainstorming." It is the questions the sales team has actually answered over the past year. Group these questions by topic, give each one a direct one-sentence answer first, then expand in two or three short paragraphs.

Common FAQ groupings: location and transport, room differences, breakfast and late checkout, extra bed and family rooms, meeting rooms and corporate clients, long stay and invoicing.

4. Can cases be written without revealing real customer names?

Yes. Anonymized cases remain persuasive, as long as three elements are not omitted: customer profile (industry, scale, typical need), problem (the guest's most painful point), result (what method was used and what changed).

Cases do not need real names. Phrases like "a chain hotel group" or "a city business hotel" work. When AI cites cases, it values structure and logic more than real names.

5. How often should content be updated to be useful?

Update by topic category rather than "full-site overhaul."

High-frequency updates: product introductions, price ranges, recent events, fast-changing FAQ entries.

Mid-frequency updates: service flow, typical scenarios, customer profiles, cases.

Low-frequency updates: industry judgments, methodology frameworks, brand stories.

High-frequency content is reviewed monthly, mid-frequency content quarterly, low-frequency content annually.

6. Who maintains content if there is no IT team?

It is entirely feasible without an IT team. The core of a topic cluster is "the relationships between content pieces," and those relationships can be managed through a shared document, an Excel sheet, or an internal wiki.

Minimum configuration: one content lead (4-6 hours per week), one topic completeness scoring table, one content classification standard. These three things together can build the basic structure in year one.

The six questions above are the most frequently asked when upgrading a hotel website. Once they are thought through, the upgrade direction becomes much clearer.

MBCT (MarvelBros C&T) focuses on hotel operations diagnostics and AI information platform construction, helping hotels move from "written" to "asset." Learn about AI information platform construction: https://www.marvelbros.com/en/services/ai-hotel-website`,
    tools: [
      { name: 'Service Page Writing Checklist', url: 'https://www.marvelbros.com/en/services/ai-hotel-website' },
      { name: 'FAQ Topic Grouping Template', url: 'https://www.marvelbros.com/en/services/ai-hotel-website' },
    ],
  },
  related: [
    { slug: 'front-desk-waiting-5min', title: 'Front desk queue exceeds 5 minutes — what waste type is this?' },
    { slug: 'housekeeping-defect-rate', title: 'High housekeeping rework rate — how to solve with Lean?' },
  ],
};

const qaDetailZhMap: Record<string, any> = {
  'front-desk-waiting-5min': {
  slug: 'front-desk-waiting-5min',
  question: '酒店前台排队经常超过5分钟，客人投诉很多。这是什么浪费类型？如何改善？',
  questionDetail: `我们是一家120间客房的商务酒店，前台只有2名员工。高峰入住时段（下午2-4点）客人经常要等5分钟以上，产生很多投诉。我们试过增加1名临时工，但效果不大，因为培训成本高且临时工效率低。这是精益管理中的什么浪费？有没有系统性的改善方法？`,
  pillar: 'guest-service',
  wasteType: 'waiting',
  author: '匿名酒店业主',
  date: '2026-05-08',
  likes: 12,
  views: 156,
  isOfficial: true,
  answer: {
    author: '迈创兄弟顾问团队',
    date: '2026-05-08',
    content: `您好，这是非常典型的**"等待浪费"**——也是酒店行业最常见的精益改善切入点。

## 问题诊断

您的场景体现了等待浪费的三个特征：
1. **客人等待**：排队超过5分钟，体验受损
2. **员工等待**：前台员工在非高峰时段闲置
3. **资源等待**：房间已准备好但无法及时交付

## 改善方案

### 第一步：数据采集（1周）
- 记录每小时入住/退房量
- 计算平均、最长、最短处理时间
- 找出真正瓶颈（登记？付款？房卡制作？）

### 第二步：流程优化（2周）
1. **预入住机制**：提前电话确认到店时间，错峰入住
2. **自助入住机**：投入1台自助机，分流30%简单入住
3. **移动前台**：高峰时段用平板在大厅移动办理
4. **并行作业**：一人负责登记，另一人负责房卡和介绍

### 第三步：弹性排班（持续）
- 根据入住曲线调整班次：下午1-3点3人，3-5点4人
- 交叉培训：客房部和礼宾部员工高峰时支援前台

### 第四步：标准作业（SOP）
- 制定《高峰时段前台作业指南》
- 目标：简单入住3分钟完成，复杂入住5分钟完成

## 预期效果

根据我们服务过的类似酒店经验：
- 排队时间从5分钟降到2分钟以内
- 前台人力成本不变（通过弹性排班）
- 客人满意度提升15-20个百分点

如需更详细的《前台精益改善工具包》，请在评论中留下邮箱，我们将发送给您。`,
    tools: [
      { name: '前台等待时间分析表', url: '#' },
      { name: '弹性排班模板', url: '#' },
    ],
  },
  related: [
    { slug: 'housekeeping-defect-rate', title: '客房检查总有遗漏，如何用精益方法降低返工率？' },
    { slug: 'ota-commission-optimization', title: 'OTA佣金不断上涨，有什么精益收益管理策略？' },
    { slug: 'staff-turnover-lean', title: '95后员工流失率太高，培训投入感觉白费，怎么办？' },
  ],
  },
  [newQA20260629Zh.slug]: {
    id: newQA20260629Zh.id,
    slug: newQA20260629Zh.slug,
    question: newQA20260629Zh.question,
    questionDetail: newQA20260629Zh.questionDetail,
    pillar: newQA20260629Zh.pillar,
    wasteType: newQA20260629Zh.wasteType,
    author: newQA20260629Zh.author,
    date: newQA20260629Zh.date,
    likes: newQA20260629Zh.likes,
    views: newQA20260629Zh.views,
    isOfficial: newQA20260629Zh.isOfficial,
    answer: newQA20260629Zh.answer,
    related: newQA20260629Zh.related,
  },
};

const qaDetailEnMap: Record<string, any> = {
  'front-desk-waiting-5min': {
  slug: 'front-desk-waiting-5min',
  question: 'My hotel front desk queue often exceeds 5 minutes. Guests complain a lot. What type of waste is this and how can I improve?',
  questionDetail: `We are a 120-room business hotel with only 2 front desk staff. During peak check-in hours (2-4 PM), guests often wait over 5 minutes, generating many complaints. We tried adding 1 temporary worker, but the effect was minimal because training costs are high and temporary staff efficiency is low. What type of lean waste is this? Are there systematic improvement methods?`,
  pillar: 'guest-service',
  wasteType: 'waiting',
  author: 'Anonymous Hotel Owner',
  date: '2026-05-08',
  likes: 12,
  views: 156,
  isOfficial: true,
  answer: {
    author: 'MarvelBros Advisory Team',
    date: '2026-05-08',
    content: `Hello, this is a very typical example of **"Waiting Waste"** — also the most common lean improvement entry point in the hotel industry.

## Problem Diagnosis

Your scenario exhibits three characteristics of waiting waste:
1. **Guest waiting**: Queue exceeds 5 minutes, experience damaged
2. **Staff waiting**: Front desk staff idle during non-peak hours
3. **Resource waiting**: Rooms ready but cannot be delivered promptly

## Improvement Plan

### Step 1: Data Collection (1 week)
- Record hourly check-in/check-out volumes
- Calculate average, longest, and shortest processing time per guest
- Identify the true bottleneck (registration? payment? key card production?)

### Step 2: Process Optimization (2 weeks)
1. **Pre-check-in mechanism**: Call ahead to confirm arrival time and stagger check-ins
2. **Self-check-in kiosk**: Invest in 1 kiosk to divert 30% of simple check-ins
3. **Mobile front desk**: Use tablets in the lobby during peak hours for mobile processing
4. **Parallel operations**: One staff handles registration, another handles key cards and briefing

### Step 3: Flexible Scheduling (ongoing)
- Adjust shifts based on check-in curves: 3 staff 1:00-3:00 PM, 4 staff 3:00-5:00 PM
- Cross-training: Housekeeping and concierge staff support front desk during peaks

### Step 4: Standard Work (SOP)
- Develop "Peak Hour Front Desk Operation Guide"
- Target: Simple check-in completed in 3 minutes, complex check-in in 5 minutes

## Expected Results

Based on our experience with similar hotels:
- Queue time reduced from 5 minutes to under 2 minutes
- Front desk labor cost unchanged (through flexible scheduling)
- Guest satisfaction improved by 15-20 percentage points

For a more detailed "Front Desk Lean Improvement Toolkit," leave your email in the comments and we will send it to you.`,
    tools: [
      { name: 'Front Desk Waiting Time Analysis Sheet', url: '#' },
      { name: 'Flexible Scheduling Template', url: '#' },
    ],
  },
  related: [
    { slug: 'housekeeping-defect-rate', title: 'Housekeeping inspections always miss something. How to reduce defect rate using lean methods?' },
    { slug: 'ota-commission-optimization', title: 'OTA commissions keep rising. Any lean revenue management strategies?' },
    { slug: 'staff-turnover-lean', title: 'Gen-Z staff turnover is too high. Training investment feels wasted. What to do?' },
  ],
  },
  [newQA20260629En.slug]: {
    id: newQA20260629En.id,
    slug: newQA20260629En.slug,
    question: newQA20260629En.question,
    questionDetail: newQA20260629En.questionDetail,
    pillar: newQA20260629En.pillar,
    wasteType: newQA20260629En.wasteType,
    author: newQA20260629En.author,
    date: newQA20260629En.date,
    likes: newQA20260629En.likes,
    views: newQA20260629En.views,
    isOfficial: newQA20260629En.isOfficial,
    answer: newQA20260629En.answer,
    related: newQA20260629En.related,
  },
};

export default async function QADetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const isZh = lang === 'zh'
  const qa = (isZh ? qaDetailZhMap : qaDetailEnMap)[slug]

  if (!qa) {
    notFound()
  }
  const pillars = isZh ? pillarsZh : pillarsEn
  const wasteTypes = isZh ? wasteTypesZh : wasteTypesEn

  const ui = {
    back: isZh ? '返回管享精道' : 'Back to Lean Q&A',
    officialAnswer: isZh ? '迈创兄弟官方解答' : 'Official Answer from MarvelBros',
    likes: isZh ? '人共鸣' : 'Resonates',
    views: isZh ? '阅读' : 'Views',
    related: isZh ? '相关问答' : 'Related Q&A',
    askQuestion: isZh ? '我有类似问题' : 'I have a similar question',
    bookmark: isZh ? '收藏' : 'Bookmark',
    share: isZh ? '分享' : 'Share',
    tools: isZh ? '改善工具' : 'Improvement Tools',
    stillQuestions: isZh ? '还有疑问？' : 'Still have questions?',
    askDesc: isZh ? '向迈创兄弟提问，我们将在48小时内用精益思维为您答疑解惑。' : 'Ask MarvelBros. We will respond within 48 hours with lean insights tailored to your challenge.',
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.back}
          </Link>
        </div>

        {/* Question Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-0">
              {pillars.find(p => p.id === qa.pillar)?.label}
            </Badge>
            <Badge variant="secondary" className="border-0">
              {wasteTypes.find(w => w.id === qa.wasteType)?.label}
            </Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {qa.question}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {qa.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {qa.date}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {qa.likes} {ui.likes}
            </span>
            <span>{qa.views} {ui.views}</span>
          </div>
        </div>

        {/* Question Detail */}
        <div className="p-6 rounded-xl bg-card border border-border mb-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[#f59e0b] font-bold text-sm">Q</span>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {qa.questionDetail}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" className="gap-2">
            <ThumbsUp className="w-4 h-4" />
            {qa.likes} {ui.likes}
          </Button>
          <Button variant="outline" className="gap-2">
            <Bookmark className="w-4 h-4" />
            {ui.bookmark}
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            {ui.share}
          </Button>
        </div>

        {/* Official Answer */}
        {qa.isOfficial && (
          <div className="border-l-4 border-l-[#f59e0b] bg-[#f59e0b]/5 rounded-xl p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-sm px-3 py-1">
                <BadgeCheck className="w-4 h-4 mr-1" />
                {ui.officialAnswer}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {qa.answer.author} · {qa.answer.date}
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {qa.answer.content}
              </div>
            </div>

            {/* Tools */}
            {qa.answer.tools && qa.answer.tools.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#f59e0b]/20">
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
                  {ui.tools}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {qa.answer.tools.map((tool: any, idx: number) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="text-[#f59e0b] border-[#f59e0b]/30 hover:bg-[#f59e0b]/10"
                    >
                      {tool.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Q&A */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#f59e0b]" />
            {ui.related}
          </h3>
          <div className="space-y-3">
            {qa.related.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={`/${lang}/lean/qa/${item.slug}`}
                className="block p-4 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all"
              >
                <span className="text-foreground hover:text-[#f59e0b] transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/30">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Ask MarvelBros. We will respond within 48 hours with lean insights tailored to your challenge.
          </p>
          <Link href={`/${lang}/lean/ask`}>
            <Button
              size="lg"
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 rounded-xl"
            >
              {ui.askQuestion}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Static export requires generateStaticParams
export function generateStaticParams() {
  return [
    { lang: 'zh', slug: 'front-desk-waiting-5min' },
    { lang: 'en', slug: 'front-desk-waiting-5min' },
    { lang: 'zh', slug: 'hotel-website-content-order-service-faq-cases-2026-06-29' },
    { lang: 'en', slug: 'hotel-website-content-order-service-faq-cases-2026-06-29' },
  ]
}