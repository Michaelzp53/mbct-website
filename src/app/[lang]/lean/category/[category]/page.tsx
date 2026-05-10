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
  {
    id: 8,
    slug: 'hotel-energy-cost-optimization-2026',
    titleZh: '酒店能耗占营收15%：用能画像系统一年省126万实战',
    titleEn: 'Hotel Energy Costs at 15% of Revenue: How a Usage Profile System Saved 1.26M RMB',
    summaryZh: '方总在武汉经营一家200间客房的会议型酒店，客源结构是：60%会议团、30%旅游散客、10%长住客。',
    summaryEn: 'Mr. Fang runs a 200-room conference hotel in Wuhan. Guest mix: 60% conference groups, 30% tourist FITs, 10% long-stay.',
    category: 'cost',
    tags: ['能耗管理', '成本管控', 'IoT'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 9,
    slug: 'hotel-labor-cost-ai-collaboration-2026',
    titleZh: '存量时代的人工成本优化：AI替代还是人机协同？',
    titleEn: 'Labor Cost Optimization in the Stock Era: AI Replacement or Human-Machine Collaboration',
    summaryZh: '陈总在成都经营一家150间客房的商务酒店，员工编制58人。',
    summaryEn: 'Mr. Chen runs a 150-room business hotel in Chengdu with 58 staff members.',
    category: 'cost',
    tags: ['人力成本', 'AI协同', '效率提升'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 10,
    slug: 'hotel-investment-pitfalls-2026',
    titleZh: '2026酒店投资：为什么有的酒店只赚热闹不赚钱？',
    titleEn: 'Hotel Investment in 2026: Why Some Hotels Pack the House but Still Don\'t Make Money',
    summaryZh: '陈总在苏州看中了一个地铁上盖物业，3500平米，位置绝佳。他找了三个 "懂行" 的朋友帮忙参谋。',
    summaryEn: 'Mr. Chen had his eyes on a prime subway-adjacent property in Suzhou — 3,500 square meters, killer location.',
    category: 'investment',
    tags: ['投资分析', '选址评估', '投资回报'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 11,
    slug: 'hotel-reits-exit-strategy-2026',
    titleZh: '酒店资产REITs时代来临：持有型项目的退出新路径',
    titleEn: 'The Hotel Asset REITs Era: New Exit Paths for Held Properties',
    summaryZh: '王总在2019年收购了一栋上海外高桥的物业，改造成精品酒店，估值2.3亿。',
    summaryEn: 'Mr. Wang acquired a property in Shanghai\'s Waigaoqiao in 2019, converted it to a boutique hotel, valued at 230M yuan.',
    category: 'investment',
    tags: ['REITs', '资产退出', '持有型物业'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 12,
    slug: 'hotel-social-media-marketing-2026',
    titleZh: '抖音小红书成酒店"白月光"：内容营销怎么玩才有效？',
    titleEn: 'TikTok & Xiaohongshu Become Hotels\' "Moonlight": How to Make Content Marketing Actually Work',
    summaryZh: '赵总在重庆经营一家65间客房的精品民宿，开业两年，客源结构一直不健康——80%依赖携程，20%来自walk-in。',
    summaryEn: 'GM Zhao runs a 65-room boutique inn in Chongqing. After two years, 80% of guests came from Ctrip, 20% walked in.',
    category: 'marketing',
    tags: ['内容营销', '抖音', '小红书'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 13,
    slug: 'hotel-ota-commission-direct-booking-2026',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战手册',
    titleEn: 'OTA Commissions Eat 900K RMB a Year: A Practical Guide to Building a Direct Booking System',
    summaryZh: '李总在南京经营一家98间客房的经济型酒店，位置不错，靠近地铁口，客源以旅游和商务散客为主。',
    summaryEn: 'Mr. Li runs a 98-room economy hotel in Nanjing, near a subway exit, serving tourist and business travelers.',
    category: 'marketing',
    tags: ['OTA优化', '直订渠道', '成本控制'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 14,
    slug: 'hotel-ai-agent-intelligent-upgrade-2026',
    titleZh: 'AI智能体时代：酒店从"数字化"到"智能化"的跃迁',
    titleEn: 'The AI Agent Era: Hotels Making the Leap from Digital to Intelligent',
    summaryZh: '张总在杭州经营一家150间客房的会议型酒店，客源结构是60%会议团、30%旅游散客、10%长住客。',
    summaryEn: 'Mr. Zhang runs a 150-room conference hotel in Hangzhou. Guest mix: 60% conference groups, 30% tourist FITs, 10% long-stay.',
    category: 'operations',
    tags: ['AI智能体', '数字化转型', '智能化'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 15,
    slug: 'hotel-data-driven-operations-2026',
    titleZh: '从凭经验到凭数据：酒店运营决策的量化革命',
    titleEn: 'From Gut Feel to Data: The Quant Revolution in Hotel Operations Decision-Making',
    summaryZh: '陈总在成都经营一家100间客房的商务酒店，他在这个行业干了15年。',
    summaryEn: 'Mr. Chen runs a 100-room business hotel in Chengdu. He has been in the industry for 15 years.',
    category: 'operations',
    tags: ['数据驱动', '运营决策', '量化管理'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 16,
    slug: 'hotel-construction-timeline-72-checkpoints-2026',
    titleZh: '筹建周期从14个月缩到10个月：72个检查点实战手册',
    titleEn: 'Cutting Project Timelines from 14 Months to 10: A 72-Point Pre-Opening Checklist',
    summaryZh: '孙总在杭州投资了一个酒店改造项目，物业是之前的一个快捷酒店，2200平米，他想把改成中端精选酒店。',
    summaryEn: 'Mr. Sun invested in a hotel renovation project in Hangzhou, converting a former budget hotel to mid-scale.',
    category: 'preparation',
    tags: ['筹建管理', '检查清单', '项目管理'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 17,
    slug: 'hotel-pms-selection-guide-2026',
    titleZh: '新店PMS选型指南：2026年系统怎么选才不踩坑？',
    titleEn: 'New Hotel PMS Selection Guide: How to Pick a 2026 System Without Getting Burned',
    summaryZh: '张总在成都新开了一家80间客房的精品酒店，开业前三个月开始选PMS系统。',
    summaryEn: 'Mr. Zhang opened an 80-room boutique hotel in Chengdu and started selecting a PMS three months before opening.',
    category: 'preparation',
    tags: ['PMS系统', '系统选型', '筹建筹备'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 18,
    slug: 'hotel-gen-z-retention-dual-track-2026',
    titleZh: '90后员工干不满3个月就辞职？双轨职业体系实战',
    titleEn: 'Gen Z Employees Quitting Within 3 Months: A Dual-Track Career System That Actually Works',
    summaryZh: '周经理在宁波经营一家68间客房的城市商务酒店，属于单体店，没有连锁品牌背书。',
    summaryEn: 'Manager Zhou runs a 68-room urban business hotel in Ningbo, an independent property without chain brand backing.',
    category: 'team',
    tags: ['员工流失', '双轨体系', '职业发展'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 19,
    slug: 'hotel-training-system-lifelong-learning-2026',
    titleZh: '酒店培训体系：从"新兵训练营"到"终身学习"',
    titleEn: 'Hotel Training Systems: From Boot Camp to Lifetime Learning',
    summaryZh: '刘总在南京经营一家120间客房的商务酒店，员工60人。',
    summaryEn: 'Mr. Liu runs a 120-room business hotel in Nanjing with 60 employees.',
    category: 'team',
    tags: ['培训体系', '终身学习', '员工发展'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 20,
    slug: 'hotel-pms-ai-infrastructure-2026',
    titleZh: 'PMS从管理工具到AI基础设施：2026年系统进化论',
    titleEn: 'PMS Evolution: From Management Tool to AI Infrastructure in 2026',
    summaryZh: '王总在成都经营一家80间客房的精品酒店，2019年他花了8万块上了一套"智慧酒店系统"。',
    summaryEn: 'Mr. Wang runs an 80-room boutique hotel in Chengdu. In 2019, he spent 80K yuan on a "smart hotel system."',
    category: 'digital',
    tags: ['PMS系统', 'AI基础设施', '系统进化'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 21,
    slug: 'hotel-data-governance-standardization-2026',
    titleZh: '酒店数据治理：从"数据不准"到"决策可信"的三层标准化',
    titleEn: 'Hotel Data Governance: From Unreliable Data to Decisions You Can Trust',
    summaryZh: '张总在杭州经营一家120间客房的会议型酒店，他一直很重视数据——PMS有数据，财务有数据，OTA后台也有数据。',
    summaryEn: 'Mr. Zhang runs a 120-room conference hotel in Hangzhou. He values data — PMS, finance, OTA backends all have data.',
    category: 'digital',
    tags: ['数据治理', '标准化', '决策支持'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
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
