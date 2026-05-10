import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Clock, Eye, ThumbsUp, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 文章数据
const articlesData = [
  {
    id: 1,
    slug: 'hotel-investment-decision-guide',
    titleZh: '酒店投资决策指南：如何用三维模型选出最优方案',
    titleEn: 'Hotel Investment Decision Guide: How to Choose the Optimal Solution Using a 3D Model',
    summaryZh: '苏州投资人通过财务、运营、风险三维决策模型，从4个方案中选出最优解，投资回报期从4.2年缩短至3.1年。',
    summaryEn: 'A Suzhou investor selected the optimal solution from 4 options using financial, operational, and risk analysis.',
    category: 'investment',
    date: '2026-05-20',
    readTime: 15,
    views: 1280,
    likes: 86,
  },
  {
    id: 2,
    slug: 'hotel-construction-pitfall-guide',
    titleZh: '酒店筹建避坑指南：从选址到开业的72个检查点',
    titleEn: 'Hotel Construction Pitfall Guide: 72 Checkpoints from Site Selection to Opening',
    summaryZh: '杭州投资人通过选址评估表、设计阶段避坑清单和施工过程管理，将筹建周期从14个月缩短至10个月。',
    summaryEn: 'A Hangzhou investor reduced construction cycle from 14 to 10 months through site evaluation and checklists.',
    category: 'preparation',
    date: '2026-05-18',
    readTime: 18,
    views: 956,
    likes: 64,
  },
  {
    id: 3,
    slug: 'employee-turnover-optimization',
    titleZh: '90后员工流失率从45%降到15%：双轨职业体系实战',
    titleEn: 'Reducing Gen-Z Employee Turnover from 45% to 15%: Dual-Track Career System',
    summaryZh: '宁波单体酒店通过双轨职业体系、师徒制和成长仪表盘，将员工流失率从45%降至15%，内部晋升率达40%。',
    summaryEn: 'A Ningbo hotel reduced turnover from 45% to 15% through dual-track careers and mentorship.',
    category: 'team',
    date: '2026-05-15',
    readTime: 12,
    views: 2341,
    likes: 156,
  },
  {
    id: 4,
    slug: 'front-desk-wait-optimization',
    titleZh: '前台等待12分钟→3分钟：情绪预判系统实战',
    titleEn: 'Front Desk Wait Time: 12min to 3min with Emotional Anticipation System',
    summaryZh: '杭州商务酒店通过情绪预判系统、预退房系统和等待增值体验设计，将前台等待时间从12分钟降至3分钟。',
    summaryEn: 'A Hangzhou business hotel reduced front desk wait time from 12 to 3 minutes through emotional anticipation.',
    category: 'operations',
    date: '2026-05-12',
    readTime: 10,
    views: 1876,
    likes: 132,
  },
  {
    id: 5,
    slug: 'ota-commission-optimization',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战',
    titleEn: 'OTA Commissions Eating 900K Annually: Building Direct Booking System',
    summaryZh: '南京经济型酒店通过直订激励体系、生活方式社群和住宿积分系统，将直订比例从12%提升至35%。',
    summaryEn: 'A Nanjing economy hotel increased direct bookings from 12% to 35% through incentives and loyalty programs.',
    category: 'marketing',
    date: '2026-05-10',
    readTime: 14,
    views: 3420,
    likes: 198,
  },
  {
    id: 6,
    slug: 'digital-transformation-human-touch',
    titleZh: '酒店数字化转型：从买系统到建生态的避坑指南',
    titleEn: 'Hotel Digital Transformation: From Buying Systems to Building Ecosystems',
    summaryZh: '成都精品酒店通过数字化成熟度评估、分阶段实施路线图和人机协同模型，将前台处理效率提升40%。',
    summaryEn: 'A Chengdu boutique hotel improved front desk efficiency by 40% through digital maturity assessment.',
    category: 'digital',
    date: '2026-05-08',
    readTime: 16,
    views: 1567,
    likes: 98,
  },
  {
    id: 7,
    slug: 'energy-cost-optimization',
    titleZh: '酒店能耗成本占营收15%：用能画像系统实战',
    titleEn: 'Hotel Energy Costs at 15% of Revenue: Energy Profile System',
    summaryZh: '武汉会议型酒店通过用能场景画像、边缘计算传感器和能耗复盘机制，将年度电费从420万降至294万。',
    summaryEn: 'A Wuhan conference hotel reduced annual electricity costs from 4.2M to 2.94M yuan through energy profiling.',
    category: 'cost',
    date: '2026-05-05',
    readTime: 13,
    views: 1123,
    likes: 76,
  },
]

// 7大分类（老马叔叔确认顺序）
const categories = [
  { 
    id: 'investment', 
    labelZh: '投资决策', 
    labelEn: 'Investment',
    descZh: '酒店投资、选址评估、加盟vs单体、资产价值分析、投资回报测算、融资顾问',
    descEn: 'Hotel investment, site evaluation, franchise vs independent, asset analysis, ROI calculation, financing advisory',
    color: '#ef4444',
    icon: '💰',
    articleCount: 12
  },
  { 
    id: 'preparation', 
    labelZh: '筹备筹开', 
    labelEn: 'Preparation',
    descZh: '从选址到开业的全流程管理、筹建避坑、设计审查、施工管理',
    descEn: 'Full process from site selection to opening, construction pitfalls, design review, project management',
    color: '#f97316',
    icon: '🏗️',
    articleCount: 8
  },
  { 
    id: 'team', 
    labelZh: '团队建设', 
    labelEn: 'Team Building',
    descZh: '员工培训、流失率控制、激励机制、企业文化、师徒制',
    descEn: 'Staff training, turnover control, incentive mechanisms, corporate culture, mentorship',
    color: '#8b5cf6',
    icon: '👥',
    articleCount: 15
  },
  { 
    id: 'operations', 
    labelZh: '运营升级', 
    labelEn: 'Operations',
    descZh: '日常运营优化、服务提升、效率改进、客户体验、流程再造',
    descEn: 'Daily operations optimization, service enhancement, efficiency improvement, customer experience, process reengineering',
    color: '#22c55e',
    icon: '⚙️',
    articleCount: 20
  },
  { 
    id: 'marketing', 
    labelZh: '营销策略', 
    labelEn: 'Marketing',
    descZh: '客源渠道、品牌建设、私域流量、OTA优化、会员体系',
    descEn: 'Guest acquisition channels, brand building, private domain traffic, OTA optimization, membership systems',
    color: '#3b82f6',
    icon: '📢',
    articleCount: 10
  },
  { 
    id: 'digital', 
    labelZh: '数字平台', 
    labelEn: 'Digital',
    descZh: 'PMS系统、收益管理、数字化工具、智能设备、数据决策',
    descEn: 'PMS systems, revenue management, digital tools, smart devices, data-driven decisions',
    color: '#06b6d4',
    icon: '💻',
    articleCount: 14
  },
  { 
    id: 'cost', 
    labelZh: '成本优化', 
    labelEn: 'Cost Control',
    descZh: '能耗管理、采购优化、人力成本、财务管控、预算管理',
    descEn: 'Energy management, procurement optimization, labor costs, financial control, budget management',
    color: '#f59e0b',
    icon: '📊',
    articleCount: 11
  },
]

// 热门文章（显示在一级页面底部）
const hotArticles = [
  {
    id: 4,
    slug: 'front-desk-wait-optimization',
    titleZh: '前台等待12分钟→3分钟：情绪预判系统实战',
    titleEn: 'Front Desk Wait Time: 12min to 3min with Emotional Anticipation System',
    category: 'operations',
    views: 1876,
    likes: 132,
  },
  {
    id: 5,
    slug: 'ota-commission-optimization',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战',
    titleEn: 'OTA Commissions Eating 900K Annually: Building Direct Booking System',
    category: 'marketing',
    views: 3420,
    likes: 198,
  },
  {
    id: 3,
    slug: 'employee-turnover-optimization',
    titleZh: '90后员工流失率从45%降到15%：双轨职业体系实战',
    titleEn: 'Reducing Gen-Z Employee Turnover from 45% to 15%: Dual-Track Career System',
    category: 'team',
    views: 2341,
    likes: 156,
  },
]

export default async function LeanPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const ui = {
    pageTitle: isZh ? '管享精道' : 'Lean Insights',
    pageSubtitle: isZh 
      ? '酒店管理者精益问答——迈创兄弟娓娓道来'
      : 'Lean management Q&A for hotel leaders — MarvelBros shares insights',
    searchPlaceholder: isZh ? '搜索文章标题、内容、标签...' : 'Search articles, content, tags...',
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
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder={ui.searchPlaceholder}
                className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Sections - Vertical Layout */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const latestArticle = articlesData.find(a => a.category === cat.id)
            
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
                      {cat.articleCount}{ui.articleCount}
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
                        className="text-white border-0 text-xs"
                        style={{ backgroundColor: cat.color }}
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
