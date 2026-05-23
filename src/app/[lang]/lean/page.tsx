import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Clock, Eye, ThumbsUp, BookOpen, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SearchBox from './SearchBox'
import PageHero from '@/components/PageHero'
import { allArticlesData } from './article/[slug]/articles-data'

// 7大分类（老马叔叔确认顺序）
const categories = [
  { 
    id: 'investment', 
    labelZh: '投资决策', 
    labelEn: 'Investment',
    descZh: '酒店投资、选址评估、加盟vs单体、资产价值分析、投资回报测算、融资顾问',
    descEn: 'Hotel investment, site evaluation, franchise vs independent, asset analysis, ROI calculation, financing advisory',
    color: '#ef4444',
    icon: '💰'
  },
  { 
    id: 'preparation', 
    labelZh: '筹备筹开', 
    labelEn: 'Preparation',
    descZh: '从选址到开业的全流程管理、筹建避坑、设计审查、施工管理',
    descEn: 'Full process from site selection to opening, construction pitfalls, design review, project management',
    color: '#f97316',
    icon: '🏗️'
  },
  { 
    id: 'team', 
    labelZh: '团队建设', 
    labelEn: 'Team Building',
    descZh: '员工培训、流失率控制、激励机制、企业文化、师徒制',
    descEn: 'Staff training, turnover control, incentive mechanisms, corporate culture, mentorship',
    color: '#8b5cf6',
    icon: '👥'
  },
  { 
    id: 'operations', 
    labelZh: '运营升级', 
    labelEn: 'Operations',
    descZh: '日常运营优化、服务提升、效率改进、客户体验、流程再造',
    descEn: 'Daily operations optimization, service enhancement, efficiency improvement, customer experience, process reengineering',
    color: '#22c55e',
    icon: '⚙️'
  },
  { 
    id: 'marketing', 
    labelZh: '营销策略', 
    labelEn: 'Marketing',
    descZh: '客源渠道、品牌建设、私域流量、OTA优化、会员体系',
    descEn: 'Guest acquisition channels, brand building, private domain traffic, OTA optimization, membership systems',
    color: '#3b82f6',
    icon: '📢'
  },
  { 
    id: 'digital', 
    labelZh: '数字平台', 
    labelEn: 'Digital',
    descZh: 'PMS系统、收益管理、数字化工具、智能设备、数据决策',
    descEn: 'PMS systems, revenue management, digital tools, smart devices, data-driven decisions',
    color: '#06b6d4',
    icon: '💻'
  },
  { 
    id: 'cost', 
    labelZh: '成本优化', 
    labelEn: 'Cost Control',
    descZh: '能耗管理、采购优化、人力成本、财务管控、预算管理',
    descEn: 'Energy management, procurement optimization, labor costs, financial control, budget management',
    color: '#f59e0b',
    icon: '📊'
  },
]

const categoryCounts: Record<string, number> = categories.reduce((acc, cat) => {
  acc[cat.id] = allArticlesData.filter(article => article.category === cat.id).length
  return acc
}, {} as Record<string, number>)

const latestArticlesByCategory: Record<string, typeof allArticlesData[number] | undefined> = categories.reduce((acc, cat) => {
  acc[cat.id] = [...allArticlesData]
    .filter(article => article.category === cat.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() || b.id - a.id)[0]
  return acc
}, {} as Record<string, typeof allArticlesData[number] | undefined>)


export default async function LeanPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const ui = {
    pageTitle: isZh ? '管享精道' : 'Lean Insights',
    pageSubtitle: isZh
      ? '酒店管理者精益问答——听迈创兄弟娓娓道来'
      : 'Lean management Q&A for hotel leaders — MarvelBros shares insights',
    allArticles: isZh ? '全部文章' : 'All Articles',
    articleCount: isZh ? '篇' : ' articles',
    views: isZh ? '阅读' : 'Views',
    likes: isZh ? '点赞' : 'Likes',
    askButton: isZh ? '向迈创兄弟提问' : 'Ask MarvelBros',
    askDesc: isZh ? '遇到管理难题？迈创兄弟48小时内回复' : 'Management challenge? MarvelBros replies within 48 hours',
    minRead: isZh ? '分钟' : 'min',
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={ui.pageTitle}
        subtitle={ui.pageSubtitle}
        bgImage="/hero-hung-li-1HbWj9BDbjE-unsplash.jpg"
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#f59e0b]/10 via-background to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
              <BookOpen className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-[#f59e0b] text-sm font-medium">
                {isZh ? 'MBCT · 知识库' : 'MBCT · Knowledge Base'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {ui.pageTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {ui.pageSubtitle}
            </p>
          </div>

          {/* Search Bar */}
          <SearchBox lang={lang} isZh={isZh} allArticlesData={allArticlesData} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Sections - Vertical Layout */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const latestArticle = latestArticlesByCategory[cat.id]
            
            return (
              <section
                key={cat.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-[#f59e0b]/30 transition-all"
              >
                {/* Category Header */}
                <div 
                  className="flex items-center gap-4 p-6 border-b border-border"
                  style={{ backgroundColor: `${cat.color}08` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground">
                      {isZh ? cat.labelZh : cat.labelEn}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {categoryCounts[cat.id] ?? 0}{ui.articleCount}
                    </p>
                  </div>
                  <Link href={`/${lang}/lean/category/${cat.id}`}>
                    <Button
                      variant="outline"
                      className="font-medium"
                      style={{ 
                        borderColor: `${cat.color}40`,
                        color: cat.color
                      }}
                    >
                      {ui.allArticles}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Category Description */}
                <div className="px-6 pt-4 pb-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isZh ? cat.descZh : cat.descEn}
                  </p>
                </div>

                {/* Latest Article Preview */}
                {latestArticle && (
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge 
                        variant="secondary"
                        className="text-xs"
                        style={{
                          backgroundColor: `${cat.color}15`,
                          color: cat.color,
                          borderColor: `${cat.color}35`,
                        }}
                      >
                        {isZh ? '最新' : 'Latest'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {latestArticle.date}
                      </span>
                    </div>
                    
                    <Link href={`/${lang}/lean/article/${latestArticle.slug}`}>
                      <h3 className="text-lg font-bold text-foreground hover:text-[#f59e0b] transition-colors mb-2">
                        {isZh ? latestArticle.titleZh : latestArticle.titleEn}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {isZh ? latestArticle.summaryZh : latestArticle.summaryEn}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {latestArticle.readTime} {ui.minRead}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {latestArticle.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {latestArticle.likes}
                      </span>
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>

        {/* Featured Q&A Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#f59e0b]" />
            {isZh ? '精选问答' : 'Featured Q&A'}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <a
              href={`/${lang}/lean/qa/front-desk-waiting-5min`}
              className="block p-6 hover:bg-muted/30 transition-colors border-b border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {isZh ? '前台排队超过5分钟，这是什么浪费类型？' : 'Front desk queue exceeds 5 minutes — what waste type is this?'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isZh ? '迈创兄弟解答：这是典型的"等待浪费"...' : 'MarvelBros: This is typical "Waiting" waste...'}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            </a>
            <a
              href={`/${lang}/lean/qa/housekeeping-defect-rate`}
              className="block p-6 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {isZh ? '客房清洁返工率高，如何用精益方法解决？' : 'High housekeeping rework rate — how to solve with Lean?'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isZh ? '迈创兄弟解答：建立标准化检查清单...' : 'MarvelBros: Establish standardized checklists...'}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            </a>
          </div>
          <div className="mt-4 text-center">
            <a
              href={`/${lang}/lean/qa/front-desk-waiting-5min`}
              className="text-sm text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors"
            >
              {isZh ? '查看更多问答 →' : 'View more Q&A →'}
            </a>
          </div>
        </div>


        {/* Ask Button */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isZh ? '没找到你要的答案？' : 'Not finding your answer?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {ui.askDesc}
            </p>
            <Link href={`/${lang}/lean/ask`}>
              <Button
                size="lg"
                className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 rounded-xl"
              >
                {ui.askButton}
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
