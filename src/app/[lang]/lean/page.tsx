import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Clock, Eye, ThumbsUp, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 文章数据
const articlesData = [
  {
    id: 21,
    slug: 'hotel-data-governance-standardization-2026',
    titleZh: '酒店数据治理：从"数据不准"到"决策可信"的三层标准化',
    titleEn: 'Hotel Data Governance: From Unreliable Data to Decisions You Can Trust',
    summaryZh: '张总在杭州经营一家120间客房的会议型酒店，他一直很重视数据——PMS有数据，财务有数据，OTA后台也有数据。',
    summaryEn: 'Mr. Zhang runs a 120-room conference hotel in Hangzhou. He values data — PMS, finance, OTA backends all have data.',
    category: 'digital',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 20,
    slug: 'hotel-pms-ai-infrastructure-2026',
    titleZh: 'PMS从管理工具到AI基础设施：2026年系统进化论',
    titleEn: 'PMS Evolution: From Management Tool to AI Infrastructure in 2026',
    summaryZh: '王总在成都经营一家80间客房的精品酒店，2019年他花了8万块上了一套"智慧酒店系统"。',
    summaryEn: 'Mr. Wang runs an 80-room boutique hotel in Chengdu. In 2019, he spent 80K yuan on a "smart hotel system."',
    category: 'digital',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 19,
    slug: 'hotel-training-system-lifelong-learning-2026',
    titleZh: '酒店培训体系：从"新兵训练营"到"终身学习"',
    titleEn: 'Hotel Training Systems: From Boot Camp to Lifetime Learning',
    summaryZh: '刘总在南京经营一家120间客房的商务酒店，员工60人。',
    summaryEn: 'Mr. Liu runs a 120-room business hotel in Nanjing with 60 employees.',
    category: 'team',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 18,
    slug: 'hotel-gen-z-retention-dual-track-2026',
    titleZh: '90后员工干不满3个月就辞职？双轨职业体系实战',
    titleEn: 'Gen Z Employees Quitting Within 3 Months: A Dual-Track Career System That Actually Works',
    summaryZh: '周经理在宁波经营一家68间客房的城市商务酒店，属于单体店，没有连锁品牌背书。',
    summaryEn: 'Manager Zhou runs a 68-room urban business hotel in Ningbo, an independent property without chain brand backing.',
    category: 'team',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 17,
    slug: 'hotel-pms-selection-guide-2026',
    titleZh: '新店PMS选型指南：2026年系统怎么选才不踩坑？',
    titleEn: 'New Hotel PMS Selection Guide: How to Pick a 2026 System Without Getting Burned',
    summaryZh: '张总在成都新开了一家80间客房的精品酒店，开业前三个月开始选PMS系统。',
    summaryEn: 'Mr. Zhang opened an 80-room boutique hotel in Chengdu and started selecting a PMS three months before opening.',
    category: 'preparation',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 16,
    slug: 'hotel-construction-timeline-72-checkpoints-2026',
    titleZh: '筹建周期从14个月缩到10个月：72个检查点实战手册',
    titleEn: 'Cutting Project Timelines from 14 Months to 10: A 72-Point Pre-Opening Checklist',
    summaryZh: '孙总在杭州投资了一个酒店改造项目，物业是之前的一个快捷酒店，2200平米，他想把改成中端精选酒店。',
    summaryEn: 'Mr. Sun invested in a hotel renovation project in Hangzhou, converting a former budget hotel to mid-scale.',
    category: 'preparation',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 15,
    slug: 'hotel-data-driven-operations-2026',
    titleZh: '从凭经验到凭数据：酒店运营决策的量化革命',
    titleEn: 'From Gut Feel to Data: The Quant Revolution in Hotel Operations Decision-Making',
    summaryZh: '陈总在成都经营一家100间客房的商务酒店，他在这个行业干了15年。',
    summaryEn: 'Mr. Chen runs a 100-room business hotel in Chengdu. He has been in the industry for 15 years.',
    category: 'operations',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 14,
    slug: 'hotel-ai-agent-intelligent-upgrade-2026',
    titleZh: 'AI智能体时代：酒店从"数字化"到"智能化"的跃迁',
    titleEn: 'The AI Agent Era: Hotels Making the Leap from Digital to Intelligent',
    summaryZh: '张总在杭州经营一家150间客房的会议型酒店，客源结构是60%会议团、30%旅游散客、10%长住客。',
    summaryEn: 'Mr. Zhang runs a 150-room conference hotel in Hangzhou. Guest mix: 60% conference groups, 30% tourist FITs, 10% long-stay.',
    category: 'operations',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 13,
    slug: 'hotel-ota-commission-direct-booking-2026',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战手册',
    titleEn: 'OTA Commissions Eat 900K RMB a Year: A Practical Guide to Building a Direct Booking System',
    summaryZh: '李总在南京经营一家98间客房的经济型酒店，位置不错，靠近地铁口，客源以旅游和商务散客为主。',
    summaryEn: 'Mr. Li runs a 98-room economy hotel in Nanjing, near a subway exit, serving tourist and business travelers.',
    category: 'marketing',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 12,
    slug: 'hotel-social-media-marketing-2026',
    titleZh: '抖音小红书成酒店"白月光"：内容营销怎么玩才有效？',
    titleEn: 'TikTok & Xiaohongshu Become Hotels\' "Moonlight": How to Make Content Marketing Actually Work',
    summaryZh: '赵总在重庆经营一家65间客房的精品民宿，开业两年，客源结构一直不健康——80%依赖携程，20%来自walk-in。',
    summaryEn: 'GM Zhao runs a 65-room boutique inn in Chongqing. After two years, 80% of guests came from Ctrip, 20% walked in.',
    category: 'marketing',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 11,
    slug: 'hotel-reits-exit-strategy-2026',
    titleZh: '酒店资产REITs时代来临：持有型项目的退出新路径',
    titleEn: 'The Hotel Asset REITs Era: New Exit Paths for Held Properties',
    summaryZh: '王总在2019年收购了一栋上海外高桥的物业，改造成精品酒店，估值2.3亿。',
    summaryEn: 'Mr. Wang acquired a property in Shanghai\'s Waigaoqiao in 2019, converted it to a boutique hotel, valued at 230M yuan.',
    category: 'investment',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 10,
    slug: 'hotel-investment-pitfalls-2026',
    titleZh: '2026酒店投资：为什么有的酒店只赚热闹不赚钱？',
    titleEn: 'Hotel Investment in 2026: Why Some Hotels Pack the House but Still Don\'t Make Money',
    summaryZh: '陈总在苏州看中了一个地铁上盖物业，3500平米，位置绝佳。他找了三个 "懂行" 的朋友帮忙参谋。',
    summaryEn: 'Mr. Chen had his eyes on a prime subway-adjacent property in Suzhou — 3,500 square meters, killer location.',
    category: 'investment',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 9,
    slug: 'hotel-labor-cost-ai-collaboration-2026',
    titleZh: '存量时代的人工成本优化：AI替代还是人机协同？',
    titleEn: 'Labor Cost Optimization in the Stock Era: AI Replacement or Human-Machine Collaboration',
    summaryZh: '陈总在成都经营一家150间客房的商务酒店，员工编制58人。',
    summaryEn: 'Mr. Chen runs a 150-room business hotel in Chengdu with 58 staff members.',
    category: 'cost',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 8,
    slug: 'hotel-energy-cost-optimization-2026',
    titleZh: '酒店能耗占营收15%：用能画像系统一年省126万实战',
    titleEn: 'Hotel Energy Costs at 15% of Revenue: How a Usage Profile System Saved 1.26M RMB',
    summaryZh: '方总在武汉经营一家200间客房的会议型酒店，客源结构是：60%会议团、30%旅游散客、10%长住客。',
    summaryEn: 'Mr. Fang runs a 200-room conference hotel in Wuhan. Guest mix: 60% conference groups, 30% tourist FITs, 10% long-stay.',
    category: 'cost',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
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
    articleCount: 2
  },
  { 
    id: 'preparation', 
    labelZh: '筹备筹开', 
    labelEn: 'Preparation',
    descZh: '从选址到开业的全流程管理、筹建避坑、设计审查、施工管理',
    descEn: 'Full process from site selection to opening, construction pitfalls, design review, project management',
    color: '#f97316',
    icon: '🏗️',
    articleCount: 2
  },
  { 
    id: 'team', 
    labelZh: '团队建设', 
    labelEn: 'Team Building',
    descZh: '员工培训、流失率控制、激励机制、企业文化、师徒制',
    descEn: 'Staff training, turnover control, incentive mechanisms, corporate culture, mentorship',
    color: '#8b5cf6',
    icon: '👥',
    articleCount: 2
  },
  { 
    id: 'operations', 
    labelZh: '运营升级', 
    labelEn: 'Operations',
    descZh: '日常运营优化、服务提升、效率改进、客户体验、流程再造',
    descEn: 'Daily operations optimization, service enhancement, efficiency improvement, customer experience, process reengineering',
    color: '#22c55e',
    icon: '⚙️',
    articleCount: 2
  },
  { 
    id: 'marketing', 
    labelZh: '营销策略', 
    labelEn: 'Marketing',
    descZh: '客源渠道、品牌建设、私域流量、OTA优化、会员体系',
    descEn: 'Guest acquisition channels, brand building, private domain traffic, OTA optimization, membership systems',
    color: '#3b82f6',
    icon: '📢',
    articleCount: 2
  },
  { 
    id: 'digital', 
    labelZh: '数字平台', 
    labelEn: 'Digital',
    descZh: 'PMS系统、收益管理、数字化工具、智能设备、数据决策',
    descEn: 'PMS systems, revenue management, digital tools, smart devices, data-driven decisions',
    color: '#06b6d4',
    icon: '💻',
    articleCount: 2
  },
  { 
    id: 'cost', 
    labelZh: '成本优化', 
    labelEn: 'Cost Control',
    descZh: '能耗管理、采购优化、人力成本、财务管控、预算管理',
    descEn: 'Energy management, procurement optimization, labor costs, financial control, budget management',
    color: '#f59e0b',
    icon: '📊',
    articleCount: 2
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
