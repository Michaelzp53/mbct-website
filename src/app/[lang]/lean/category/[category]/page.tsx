import Link from 'next/link'
import { ArrowLeft, Search, Clock, User, Eye, ThumbsUp, MessageSquare, ChevronRight, Tag, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 7大分类
const categories = [
  { id: 'investment', labelZh: '投资决策', labelEn: 'Investment', color: '#ef4444', icon: '💰' },
  { id: 'preparation', labelZh: '筹备筹开', labelEn: 'Preparation', color: '#f97316', icon: '🏗️' },
  { id: 'team', labelZh: '团队建设', labelEn: 'Team Building', color: '#8b5cf6', icon: '👥' },
  { id: 'operations', labelZh: '运营升级', labelEn: 'Operations', color: '#22c55e', icon: '⚙️' },
  { id: 'marketing', labelZh: '营销策略', labelEn: 'Marketing', color: '#3b82f6', icon: '📢' },
  { id: 'digital', labelZh: '数字平台', labelEn: 'Digital', color: '#06b6d4', icon: '💻' },
  { id: 'cost', labelZh: '成本优化', labelEn: 'Cost Control', color: '#f59e0b', icon: '📊' },
]

// 文章数据
interface Article {
  id: number
  slug: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: number
  views: number
  likes: number
  comments: number
}

const articles: Article[] = [
  {
    id: 1,
    slug: 'hotel-investment-decision-guide',
    titleZh: '酒店投资决策指南：如何用三维模型选出最优方案',
    titleEn: 'Hotel Investment Decision Guide: How to Choose the Optimal Solution Using a 3D Model',
    summaryZh: '苏州投资人通过财务、运营、风险三维决策模型，从4个方案中选出最优解，投资回报期从4.2年缩短至3.1年。',
    summaryEn: 'A Suzhou investor selected the optimal solution from 4 options using financial, operational, and risk analysis.',
    category: 'investment',
    tags: ['投资分析', '选址评估', '加盟vs单体'],
    author: '迈创兄弟',
    date: '2026-05-20',
    readTime: 15,
    views: 1280,
    likes: 86,
    comments: 12,
  },
  {
    id: 2,
    slug: 'hotel-construction-pitfall-guide',
    titleZh: '酒店筹建避坑指南：从选址到开业的72个检查点',
    titleEn: 'Hotel Construction Pitfall Guide: 72 Checkpoints from Site Selection to Opening',
    summaryZh: '杭州投资人通过选址评估表、设计阶段避坑清单和施工过程管理，将筹建周期从14个月缩短至10个月。',
    summaryEn: 'A Hangzhou investor reduced construction cycle from 14 to 10 months through site evaluation and checklists.',
    category: 'preparation',
    tags: ['筹建管理', '选址', '设计审查'],
    author: '迈创兄弟',
    date: '2026-05-18',
    readTime: 18,
    views: 956,
    likes: 64,
    comments: 8,
  },
  {
    id: 3,
    slug: 'employee-turnover-optimization',
    titleZh: '90后员工流失率从45%降到15%：双轨职业体系实战',
    titleEn: 'Reducing Gen-Z Employee Turnover from 45% to 15%: Dual-Track Career System',
    summaryZh: '宁波单体酒店通过双轨职业体系、师徒制和成长仪表盘，将员工流失率从45%降至15%，内部晋升率达40%。',
    summaryEn: 'A Ningbo hotel reduced turnover from 45% to 15% through dual-track careers and mentorship.',
    category: 'team',
    tags: ['员工流失', '培训体系', '激励机制'],
    author: '迈创兄弟',
    date: '2026-05-15',
    readTime: 12,
    views: 2341,
    likes: 156,
    comments: 23,
  },
  {
    id: 4,
    slug: 'front-desk-wait-optimization',
    titleZh: '前台等待12分钟→3分钟：情绪预判系统实战',
    titleEn: 'Front Desk Wait Time: 12min to 3min with Emotional Anticipation System',
    summaryZh: '杭州商务酒店通过情绪预判系统、预退房系统和等待增值体验设计，将前台等待时间从12分钟降至3分钟。',
    summaryEn: 'A Hangzhou business hotel reduced front desk wait time from 12 to 3 minutes through emotional anticipation.',
    category: 'operations',
    tags: ['前台优化', '客户体验', '等待管理'],
    author: '迈创兄弟',
    date: '2026-05-12',
    readTime: 10,
    views: 1876,
    likes: 132,
    comments: 18,
  },
  {
    id: 5,
    slug: 'ota-commission-optimization',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战',
    titleEn: 'OTA Commissions Eating 900K Annually: Building Direct Booking System',
    summaryZh: '南京经济型酒店通过直订激励体系、生活方式社群和住宿积分系统，将直订比例从12%提升至35%。',
    summaryEn: 'A Nanjing economy hotel increased direct bookings from 12% to 35% through incentives and loyalty programs.',
    category: 'marketing',
    tags: ['OTA优化', '直订渠道', '会员体系'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 14,
    views: 3420,
    likes: 198,
    comments: 31,
  },
  {
    id: 6,
    slug: 'digital-transformation-human-touch',
    titleZh: '酒店数字化转型：从买系统到建生态的避坑指南',
    titleEn: 'Hotel Digital Transformation: From Buying Systems to Building Ecosystems',
    summaryZh: '成都精品酒店通过数字化成熟度评估、分阶段实施路线图和人机协同模型，将前台处理效率提升40%。',
    summaryEn: 'A Chengdu boutique hotel improved front desk efficiency by 40% through digital maturity assessment.',
    category: 'digital',
    tags: ['PMS系统', '收益管理', '人机协同'],
    author: '迈创兄弟',
    date: '2026-05-08',
    readTime: 16,
    views: 1567,
    likes: 98,
    comments: 15,
  },
  {
    id: 7,
    slug: 'energy-cost-optimization',
    titleZh: '酒店能耗成本占营收15%：用能画像系统实战',
    titleEn: 'Hotel Energy Costs at 15% of Revenue: Energy Profile System',
    summaryZh: '武汉会议型酒店通过用能场景画像、边缘计算传感器和能耗复盘机制，将年度电费从420万降至294万。',
    summaryEn: 'A Wuhan conference hotel reduced annual electricity costs from 4.2M to 2.94M yuan through energy profiling.',
    category: 'cost',
    tags: ['能耗管理', 'IoT传感器', '成本管控'],
    author: '迈创兄弟',
    date: '2026-05-05',
    readTime: 13,
    views: 1123,
    likes: 76,
    comments: 9,
  },
]

export async function generateStaticParams() {
  const categoryIds = ['investment', 'preparation', 'team', 'operations', 'marketing', 'digital', 'cost']
  
  return categoryIds.flatMap((category) => [
    { lang: 'zh', category },
    { lang: 'en', category },
  ])
}

export default async function CategoryPage({ params }: { params: Promise<{ lang: string; category: string }> }) {
  const { lang, category } = await params
  const isZh = lang === 'zh'

  const currentCategory = categories.find(c => c.id === category)
  const categoryArticles = articles.filter(a => a.category === category)

  const ui = {
    backToHome: isZh ? '返回管享精道首页' : 'Back to Lean Insights',
    allArticles: isZh ? '全部文章' : 'All Articles',
    searchPlaceholder: isZh ? '搜索本分类文章...' : 'Search articles in this category...',
    latest: isZh ? '最新' : 'Latest',
    hottest: isZh ? '最热' : 'Hottest',
    mostComments: isZh ? '最多评论' : 'Most Comments',
    official: isZh ? '迈创兄弟官方' : 'Official',
    readMore: isZh ? '阅读全文' : 'Read More',
    views: isZh ? '阅读' : 'Views',
    likes: isZh ? '点赞' : 'Likes',
    comments: isZh ? '评论' : 'Comments',
    minRead: isZh ? '分钟' : 'min',
    noResults: isZh ? '该分类暂无文章' : 'No articles in this category',
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div 
        className="border-b border-border"
        style={{ backgroundColor: `${currentCategory?.color}08` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.backToHome}
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${currentCategory?.color}15` }}
            >
              {currentCategory?.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {isZh ? currentCategory?.labelZh : currentCategory?.labelEn}
              </h1>
              <p className="text-muted-foreground mt-1">
                {categoryArticles.length} {ui.allArticles}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Other Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-bold text-foreground mb-3">
                  {isZh ? '其他分类' : 'Other Categories'}
                </h3>
                <div className="space-y-1">
                  {categories
                    .filter(c => c.id !== category)
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${lang}/lean/category/${cat.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-sm text-foreground group-hover:text-[#f59e0b] transition-colors">
                          {isZh ? cat.labelZh : cat.labelEn}
                        </span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {articles.filter(a => a.category === cat.id).length}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Article List */}
          <main className="flex-1">
            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={ui.searchPlaceholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-11"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] font-medium text-sm">
                  {ui.latest}
                </button>
                <button className="px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground font-medium text-sm transition-colors">
                  {ui.hottest}
                </button>
                <button className="px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground font-medium text-sm transition-colors">
                  {ui.mostComments}
                </button>
              </div>
            </div>

            {/* Article Cards */}
            <div className="space-y-4">
              {categoryArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-xl hover:border-[#f59e0b]/50 transition-all group"
                >
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-[#f59e0b]/50 text-[#f59e0b]">
                        {ui.official}
                      </Badge>
                      {article.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/${lang}/lean/article/${article.slug}`}>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#f59e0b] transition-colors"
                      >
                        {isZh ? article.titleZh : article.titleEn}
                      </h2>
                    </Link>

                    {/* Summary */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {isZh ? article.summaryZh : article.summaryEn}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {article.views} {ui.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {article.likes} {ui.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {article.comments} {ui.comments}
                      </span>
                      <span className="ml-auto">
                        {article.readTime} {ui.minRead}
                      </span>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href={`/${lang}/lean/article/${article.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors"
                      >
                        {ui.readMore}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {categoryArticles.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{ui.noResults}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
