import Link from 'next/link'
import { ArrowLeft, MessageSquare, ThumbsUp, Clock, User, Eye, Send, ChevronRight, Tag, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 7大分类
const categories = [
  { id: 'investment', labelZh: '投资决策', labelEn: 'Investment', color: '#ef4444' },
  { id: 'preparation', labelZh: '筹备筹开', labelEn: 'Preparation', color: '#f97316' },
  { id: 'team', labelZh: '团队建设', labelEn: 'Team Building', color: '#8b5cf6' },
  { id: 'operations', labelZh: '运营升级', labelEn: 'Operations', color: '#22c55e' },
  { id: 'marketing', labelZh: '营销策略', labelEn: 'Marketing', color: '#3b82f6' },
  { id: 'digital', labelZh: '数字平台', labelEn: 'Digital', color: '#06b6d4' },
  { id: 'cost', labelZh: '成本优化', labelEn: 'Cost Control', color: '#f59e0b' },
]

// 评论数据结构
interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  date: string
  likes: number
  replies: Comment[]
  isOfficial: boolean
}

// 示例评论
const sampleComments: Comment[] = [
  {
    id: 1,
    author: '张经理',
    avatar: 'Z',
    content: '我们酒店也遇到了同样的问题，前台等待时间经常超过10分钟。请问情绪预判系统的具体实施步骤是什么？',
    date: '2026-05-21',
    likes: 8,
    replies: [
      {
        id: 11,
        author: '迈创兄弟',
        avatar: 'M',
        content: '实施步骤：1) 分析入住/退房高峰时段；2) 部署预退房系统（手机端）；3) 设置等待区增值体验（茶水+杂志+WiFi）；4) 培训前台"3分钟预警"机制。需要详细方案可以私信我们。',
        date: '2026-05-21',
        likes: 12,
        replies: [],
        isOfficial: true,
      }
    ],
    isOfficial: false,
  },
  {
    id: 2,
    author: '李老板',
    avatar: 'L',
    content: '文章写得很实用，特别是关于"等待增值体验"的部分。我们尝试后客人投诉确实减少了。',
    date: '2026-05-20',
    likes: 5,
    replies: [],
    isOfficial: false,
  },
]

// 示例文章数据
const articleData = {
  id: 4,
  slug: 'front-desk-wait-optimization',
  titleZh: '前台等待12分钟→3分钟：情绪预判系统实战',
  titleEn: 'Front Desk Wait Time: 12min to 3min with Emotional Anticipation System',
  contentZh: `## 问题背景

张老板在杭州经营一家120间客房的商务酒店，位置靠近会展中心，主要客源是出差商务人士。

**痛点**：
- 下午2-4点入住高峰，前台排队经常超过12分钟
- 客人投诉"等待太久"，携程评分从4.6降到4.2
- 前台员工压力大，流失率高

## 解决方案：情绪预判系统

### 第一步：数据分析

通过PMS系统分析一周入住数据：
- 高峰时段：14:00-16:00（占全天入住量40%）
- 平均办理时间：4.5分钟/人
- 高峰期同时到达：8-12人

### 第二步：预退房系统

部署手机端预退房功能：
- 客人离店前1小时收到短信链接
- 点击确认退房→系统自动查房→生成账单
- 前台只需确认收款，办理时间从4.5分钟降至1分钟

### 第三步：等待增值体验

在等候区设置：
- 免费茶水+小点心
- 当地旅游指南杂志
- 高速WiFi+充电站
- 电子屏显示预计等待时间

### 第四步：情绪预判机制

培训前台"3分钟预警"：
- 等待超过3分钟→主动道歉+赠送饮品券
- 等待超过5分钟→升级房型或延迟退房
- VIP客户→优先办理通道

## 实施效果

| 指标 | 实施前 | 实施后 | 改善 |
|------|--------|--------|------|
| 平均等待时间 | 12分钟 | 3分钟 | -75% |
| 前台投诉率 | 15% | 3% | -80% |
| 携程评分 | 4.2 | 4.6 | +0.4 |
| 员工满意度 | 3.2 | 4.1 | +28% |

## 关键洞察

> "客人不讨厌等待，讨厌的是**不确定的等待**。显示预计时间+提供增值体验，焦虑感降低70%。" —— 迈创兄弟

## 行动清单

- [ ] 分析入住高峰时段数据
- [ ] 部署预退房系统（可选手机端或小程序）
- [ ]  redesign 等候区为"体验区"
- [ ] 培训前台"3分钟预警"话术
- [ ] 设置VIP快速通道

---

**作者**：迈创兄弟  
**日期**：2026-05-12  
**阅读时长**：10分钟`,
  contentEn: `## Problem Background

Mr. Zhang operates a 120-room business hotel in Hangzhou near the convention center, primarily serving business travelers.

**Pain Points**:
- Check-in queue often exceeds 12 minutes during 2-4 PM peak hours
- Guest complaints about long waits dropped Ctrip rating from 4.6 to 4.2
- Front desk staff under high pressure, high turnover rate

## Solution: Emotional Anticipation System

### Step 1: Data Analysis

Analyzing one week of check-in data through PMS:
- Peak hours: 14:00-16:00 (40% of daily check-ins)
- Average processing time: 4.5 minutes per guest
- Simultaneous arrivals during peak: 8-12 guests

### Step 2: Pre-Checkout System

Deploying mobile pre-checkout:
- Guests receive SMS link 1 hour before departure
- Click to confirm checkout → automatic room check → bill generated
- Front desk only needs to confirm payment, processing time drops from 4.5 to 1 minute

### Step 3: Waiting Value-Added Experience

Setting up in waiting area:
- Free tea + snacks
- Local travel guide magazines
- High-speed WiFi + charging stations
- Digital display showing estimated wait time

### Step 4: Emotional Anticipation Mechanism

Training front desk "3-minute alert":
- Wait > 3 minutes → proactive apology + beverage voucher
- Wait > 5 minutes → room upgrade or late checkout
- VIP guests → priority processing channel

## Implementation Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Average wait time | 12 min | 3 min | -75% |
| Front desk complaints | 15% | 3% | -80% |
| Ctrip rating | 4.2 | 4.6 | +0.4 |
| Staff satisfaction | 3.2 | 4.1 | +28% |

## Key Insight

> "Guests don't hate waiting, they hate **uncertain waiting**. Displaying estimated time + providing value-added experiences reduces anxiety by 70%." — MarvelBros

## Action Checklist

- [ ] Analyze check-in peak hour data
- [ ] Deploy pre-checkout system (mobile app or mini-program)
- [ ] Redesign waiting area as "experience zone"
- [ ] Train front desk "3-minute alert" scripts
- [ ] Set up VIP express channel

---

**Author**: MarvelBros  
**Date**: 2026-05-12  
**Read Time**: 10 min`,
  category: 'operations',
  tags: ['前台优化', '客户体验', '等待管理'],
  author: '迈创兄弟',
  date: '2026-05-12',
  readTime: 10,
  views: 1876,
  likes: 132,
  comments: 18,
}

export async function generateStaticParams() {
  const slugs = [
    'front-desk-wait-optimization',
    'ota-commission-optimization',
    'digital-transformation-human-touch',
    'employee-turnover-optimization',
    'investment-decision-guide',
    'hotel-construction-pitfall-guide',
    'energy-cost-optimization',
  ]
  
  return slugs.flatMap((slug) => [
    { lang: 'zh', slug },
    { lang: 'en', slug },
  ])
}

export default async function LeanArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const isZh = lang === 'zh'

  const ui = {
    backToList: isZh ? '返回文章列表' : 'Back to Articles',
    official: isZh ? '迈创兄弟官方' : 'Official',
    comments: isZh ? '评论交流' : 'Comments',
    commentsCount: isZh ? '条评论' : 'comments',
    writeComment: isZh ? '写下你的评论...' : 'Write your comment...',
    submit: isZh ? '发表' : 'Post',
    reply: isZh ? '回复' : 'Reply',
    like: isZh ? '点赞' : 'Like',
    loadMore: isZh ? '加载更多' : 'Load More',
    relatedArticles: isZh ? '相关文章' : 'Related Articles',
  }

  const category = categories.find(c => c.id === articleData.category)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#f59e0b]/10 via-background to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.backToList}
          </Link>

          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <Badge 
                className="text-white border-0"
                style={{ backgroundColor: category.color }}
              >
                {isZh ? category.labelZh : category.labelEn}
              </Badge>
            )}
            <Badge variant="outline" className="border-[#f59e0b]/50 text-[#f59e0b]">
              {ui.official}
            </Badge>
            {articleData.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isZh ? articleData.titleZh : articleData.titleEn}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {articleData.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {articleData.date}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {articleData.views}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5" />
              {articleData.likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              {articleData.comments} {ui.commentsCount}
            </span>
            <span className="ml-auto">
              {articleData.readTime} {isZh ? '分钟' : 'min'}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: (isZh ? articleData.contentZh : articleData.contentEn)
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\* (.*)/g, '<li class="ml-4 mb-1">$1</li>')
                .replace(/\[ \] (.*)/g, '<div class="flex items-center gap-2 mb-2"><input type="checkbox" class="w-4 h-4" /><span>$1</span></div>')
                .replace(/\| (.*?) \|/g, '<td class="border px-3 py-2">$1</td>')
                .replace(/\n\n/g, '<br/><br/>')
                .replace(/\n/g, '<br/>')
            }}
          />
        </article>

        {/* Like Button */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-[#f59e0b]/50 text-[#f59e0b] hover:bg-[#f59e0b]/10"
          >
            <Heart className="w-5 h-5" />
            <span>{articleData.likes} {isZh ? '点赞' : 'Likes'}</span>
          </Button>
          <Button 
            variant="outline"
            className="flex items-center gap-2 px-6 py-3"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{articleData.comments} {ui.commentsCount}</span>
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#f59e0b]" />
            {ui.comments}
            <span className="text-sm font-normal text-muted-foreground">
              ({sampleComments.length + sampleComments.reduce((acc, c) => acc + c.replies.length, 0)})
            </span>
          </h2>

          {/* Comment Input */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder={ui.writeComment}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] resize-none min-h-[100px]"
                />
                <div className="flex justify-end mt-3">
                  <Button className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold">
                    <Send className="w-4 h-4 mr-2" />
                    {ui.submit}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {sampleComments.map((comment) => (
              <div key={comment.id} className="bg-card border border-border rounded-xl p-6">
                {/* Main Comment */}
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold ${
                    comment.isOfficial ? 'bg-[#f59e0b]' : 'bg-muted'
                  }`}>
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-foreground">{comment.author}</span>
                      {comment.isOfficial && (
                        <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">
                          {ui.official}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-foreground leading-relaxed mb-3">{comment.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {comment.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        {ui.reply}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 ml-14 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ${
                            reply.isOfficial ? 'bg-[#f59e0b]' : 'bg-muted-foreground'
                          }`}>
                            {reply.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-sm text-foreground">{reply.author}</span>
                              {reply.isOfficial && (
                                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">
                                  {ui.official}
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">{reply.date}</span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed mb-2">{reply.content}</p>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors">
                              <ThumbsUp className="w-3.5 h-3.5" />
                              {reply.likes}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              {ui.loadMore}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
