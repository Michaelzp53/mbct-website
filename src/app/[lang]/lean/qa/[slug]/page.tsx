import Link from 'next/link'
import { ArrowLeft, MessageCircle, ThumbsUp, Clock, User, BadgeCheck, Share2, Bookmark } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 支柱分类
const pillars = [
  { id: 'guest-service', label: '客人精益化服务', labelEn: 'Guest Lean Service' },
  { id: 'emotional-value', label: '人感服务与情绪价值', labelEn: 'Human Touch & Emotion' },
  { id: 'diagnosis', label: '问题诊断与改善', labelEn: 'Diagnosis & Improvement' },
  { id: 'team-management', label: '团队精益化管理', labelEn: 'Team Lean Management' },
  { id: 'cost-optimization', label: '成本收益优化', labelEn: 'Cost & Revenue' },
]

// 浪费类型
const wasteTypes = [
  { id: 'waiting', label: '等待' },
  { id: 'defects', label: '缺陷' },
  { id: 'over-processing', label: '过度处理' },
  { id: 'transportation', label: '搬运' },
  { id: 'inventory', label: '库存' },
  { id: 'motion', label: '动作' },
  { id: 'over-production', label: '过量生产' },
]

// 示例Q&A详情数据
const qaDetail = {
  id: 1,
  slug: 'front-desk-waiting-5min',
  question: '我酒店前台经常排队超过5分钟，客人抱怨很大，这是哪种浪费？怎么改善？',
  questionEn: 'My hotel front desk queue often exceeds 5 minutes. What waste type is this and how to improve?',
  questionDetail: '我们是一家120间房的商务酒店，前台只有2个人值班。每到下午2-4点入住高峰，客人排队经常超过5分钟，投诉很多。我们已经尝试过增加1个临时工，但效果不明显，因为培训成本高，临时工效率低。请问这是精益中的哪种浪费？有没有系统性的改善方法？',
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
    content: `您好，这是非常典型的**「等待浪费」**，也是酒店业最常见的精益改善切入点。

## 问题诊断

您描述的场景符合等待浪费的三个特征：
1. **客人等待**：排队超过5分钟，体验受损
2. **员工等待**：非高峰时段前台人员闲置
3. **资源等待**：房间已准备好但无法及时交付

## 改善方案

### 第一步：数据化现状（1周）
- 记录每小时的入住/退房数量
- 统计每位客人的办理时长（平均、最长、最短）
- 识别真正的瓶颈环节（是登记？是付款？是房卡制作？）

### 第二步：流程优化（2周）
1. **预入住机制**：提前电话确认到店时间，错峰办理
2. **自助入住机**：投资1台自助机，分流30%简单入住
3. **移动前台**：高峰时段用平板在大堂流动办理
4. **并行作业**：一人负责登记，一人负责房卡和讲解

### 第三步：弹性排班（持续）
- 根据入住曲线调整班次：13:00-15:00安排3人，15:00-17:00安排4人
- 交叉培训：客房部、礼宾部员工兼职前台高峰支援

### 第四步：标准作业（SOP）
- 制定「高峰时段前台作业指导书」
- 目标：简单入住3分钟完成，复杂入住5分钟完成

## 预期效果

按我们服务过的类似酒店经验：
- 排队时间从5分钟降至2分钟以内
- 前台人力成本不增加（通过弹性排班）
- 客人满意度提升15-20个百分点

如需更详细的「前台精益改善工具包」，可以在评论区留下您的邮箱，我们发送给您。`,
    tools: [
      { name: '前台等待时间分析表', url: '#' },
      { name: '弹性排班模板', url: '#' },
    ],
  },
  related: [
    { slug: 'housekeeping-defect-rate', title: '客房清洁检查总有疏漏，如何用精益方法降低缺陷率？' },
    { slug: 'ota-commission-optimization', title: 'OTA佣金越来越高，有没有精益化的收益管理思路？' },
    { slug: 'staff-turnover-lean', title: '90后员工流失率太高，培训完就离职怎么办？' },
  ],
}

export default async function QADetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const isZh = lang === 'zh'
  const qa = qaDetail // 实际应从数据库或API获取

  const ui = {
    back: isZh ? '返回精益问答' : 'Back to Lean Q&A',
    officialAnswer: isZh ? '迈创兄弟官方回复' : 'Official Answer',
    likes: isZh ? '共鸣' : 'Resonates',
    views: isZh ? '浏览' : 'Views',
    related: isZh ? '相关精益问答' : 'Related Q&A',
    askQuestion: isZh ? '我有类似问题' : 'I have a similar question',
    bookmark: isZh ? '收藏' : 'Bookmark',
    share: isZh ? '分享' : 'Share',
    tools: isZh ? '改善工具' : 'Improvement Tools',
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
            {isZh ? qa.question : qa.questionEn}
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
                  {qa.answer.tools.map((tool, idx) => (
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
            {qa.related.map((item, idx) => (
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
            {isZh ? '还有疑问？' : 'Still have questions?'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {isZh
              ? '向迈创兄弟提问，我们将在48小时内为您娓娓道来'
              : 'Ask MarvelBros. We will respond within 48 hours.'}
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

// 静态导出需要 generateStaticParams
export function generateStaticParams() {
  return [
    { lang: 'zh', slug: 'front-desk-waiting-5min' },
    { lang: 'en', slug: 'front-desk-waiting-5min' },
    { lang: 'zh', slug: 'housekeeping-defect-rate' },
    { lang: 'en', slug: 'housekeeping-defect-rate' },
    { lang: 'zh', slug: 'staff-turnover-lean' },
    { lang: 'en', slug: 'staff-turnover-lean' },
    { lang: 'zh', slug: 'ota-commission-optimization' },
    { lang: 'en', slug: 'ota-commission-optimization' },
    { lang: 'zh', slug: 'emotional-service-design' },
    { lang: 'en', slug: 'emotional-service-design' },
  ]
}
