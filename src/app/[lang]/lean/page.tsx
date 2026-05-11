import Link from 'next/link'
import { ArrowRight, ChevronRight, Search, Clock, Eye, ThumbsUp, BookOpen, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SearchBox from './SearchBox'

// 文章数据
const articlesData = [
  {
    id: 100,
    slug: '2025-jiudian-touzi-renqing-xingshi-zhao-zhun-saidao',
    titleZh: '2025酒店投资：认清形势，找准赛道',
    titleEn: 'Hotel Investment in 2025: Read the Market, Find Your Niche',
    summaryZh: '2025年的酒店投资市场，正在经历一场深刻的结构性调整。过去十年，酒店投资的核心逻辑是"地段+品牌=成功"，但在今天，这个公式已经不再成立。',
    summaryEn: 'The hotel investment market in 2025 is undergoing a profound structural adjustment. For the past decade, the core logic of hotel investment was "location + brand = success." Today, that formula no longer holds.',
    category: 'investment',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 101,
    slug: 'guanxiangjingdao-de-qingxujiazhi-cong-fuwu-dao-xinling-gongming',
    titleZh: '管享精道的情绪价值：从服务到心灵共鸣',
    titleEn: 'The Emotional Value of Lean Insights: From Service to Spiritual Resonance',
    summaryZh: '在标准化服务时代，酒店如何创造让人铭记的情绪价值？',
    summaryEn: 'In the era of standardized service, how can hotels create memorable emotional value?',
    category: 'investment',
    date: '2026-05-11',
    readTime: 12,
    views: 0,
    likes: 0,
  },
  {
    id: 102,
    slug: 'wenhua-chenjinshi-tiyan-jiudianye-de-xin-jingzhengli',
    titleZh: '文化沉浸式体验：酒店业的新竞争力',
    titleEn: 'Cultural Immersive Experience: The New Competitive Edge in Hospitality',
    summaryZh: '当硬件趋同，文化沉浸式体验成为酒店差异化的新战场。',
    summaryEn: 'When hardware converges, cultural immersive experiences become the new battlefield for hotel differentiation.',
    category: 'investment',
    date: '2026-05-11',
    readTime: 12,
    views: 0,
    likes: 0,
  },
  {
    id: 103,
    slug: 'jiudian-touzi-huibaolv-zenme-suan',
    titleZh: '酒店投资回报率怎么算？多数人第一步就错了',
    titleEn: 'How to Calculate Hotel ROI? Most People Get the First Step Wrong',
    summaryZh: '投资人算回报只算 RevPAR，忽略了隐性成本和退出机制。',
    summaryEn: 'Investors calculate returns using only RevPAR, ignoring hidden costs and exit mechanisms.',
    category: 'investment',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 104,
    slug: 'cunliang-gaoduan-jiudian-fanhong-zhinan',
    titleZh: '存量高端酒店翻红指南：华住"美好家族"模式拆解',
    titleEn: 'Revitalizing Legacy Upscale Hotels: Deconstructing Huazhu\'s "Meihao Family" Model',
    summaryZh: '大量存量高端酒店想改造但不知道从哪下手，没有资金又缺经验。',
    summaryEn: 'Numerous legacy upscale hotels want to renovate but don\'t know where to start, lacking both funds and experience.',
    category: 'preparation',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 105,
    slug: 'jiudian-gaizao-bikeng-zhinan',
    titleZh: '酒店改造避坑指南：那些年我们交过的学费',
    titleEn: 'Hotel Renovation Pitfall Guide: Lessons We Paid For',
    summaryZh: '改造失败的案例教训：设计不合理、机电不过关、预算超支。',
    summaryEn: 'Lessons from renovation failures: unreasonable design, inadequate M&E, budget overruns.',
    category: 'preparation',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 106,
    slug: 'jiudian-nenghao-chengben-shendu-pouxi',
    titleZh: '酒店能耗成本深度剖析：那些你以为正常的浪费，正在吃掉你的利润',
    titleEn: 'Hotel Energy Costs Under the Microscope: The Waste You Think Is Normal Is Eating Your Profits',
    summaryZh: '能源费用是酒店运营第二大成本，但多数业主只知道看账单，不知道能耗漏在哪、如何堵住。',
    summaryEn: 'Energy costs are the second largest operating expense for hotels, yet most owners only look at bills without knowing where energy leaks or how to plug them.',
    category: 'operations',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 107,
    slug: 'jiudian-renli-zi yuan-chengben-youhua',
    titleZh: '酒店人力资源成本优化：不是裁员，而是让每个人产生更多价值',
    titleEn: 'Hotel HR Cost Optimization: Not Layoffs, But Making Everyone More Valuable',
    summaryZh: '人力成本占运营成本30-40%，但简单裁员伤害服务品质；如何在保证服务质量的同时优化人力成本。',
    summaryEn: 'Labor costs account for 30-40% of operating expenses, but simple layoffs hurt service quality; how to optimize HR costs while maintaining service standards.',
    category: 'operations',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 108,
    slug: 'jiudian-shouru-zhiyou-fangfei',
    titleZh: '酒店收入只有房费？是你没看到这三座金矿',
    titleEn: 'Hotel Revenue Only from Room Rates? You\'re Missing Three Gold Mines',
    summaryZh: '过度依赖客房收入，淡旺季波动大，投资人需要稳定现金流。',
    summaryEn: 'Over-reliance on room revenue with high seasonal fluctuations; investors need stable cash flow.',
    category: 'marketing',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 109,
    slug: 'kefang-shangpinhua-guanli',
    titleZh: '客房商品化管理：被忽视的利润增长点',
    titleEn: 'Room Commoditization Management: An Overlooked Profit Growth Point',
    summaryZh: '客房Minibar/售货机长期管理混乱，库存不清、补货不及时。',
    summaryEn: 'Room minibar/vending machines are chronically mismanaged with unclear inventory and delayed restocking.',
    category: 'marketing',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 110,
    slug: 'jiudian-rencai-liushi-lu-gaoda-30',
    titleZh: '酒店人才流失率高达30%：老板们到底在痛什么？',
    titleEn: 'Hotel Talent Turnover at 30%: What Are Owners Really Worried About?',
    summaryZh: '一线员工流动性大，培训成本高，好不容易培养出来的人留不住。',
    summaryEn: 'High frontline turnover, expensive training costs, and difficulty retaining trained staff.',
    category: 'team',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 111,
    slug: 'cong-yongren-dao-yuren',
    titleZh: '从"用人"到"育人"：酒店人才培养的底层逻辑',
    titleEn: 'From "Using" to "Developing" People: The Fundamentals of Hotel Talent Development',
    summaryZh: '培训流于形式，员工知道但做不到，标准化执行难。',
    summaryEn: 'Training becomes formalistic; employees know but cannot execute, making standardization difficult.',
    category: 'team',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 112,
    slug: 'jiudian-fuwu-weishenme-yuelaiyue-leng',
    titleZh: '酒店服务为什么越来越"冷"？找回人感温度的三个支点',
    titleEn: 'Why Is Hotel Service Getting "Colder"? Three Pillars to Restore Human Warmth',
    summaryZh: '标准化流程让服务变机械，客人感受不到温度，复购率低。',
    summaryEn: 'Standardized processes make service mechanical; guests feel no warmth, leading to low repeat rates.',
    category: 'operations',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 113,
    slug: 'cong-biaozhunhua-dao-bei-ji-zhu',
    titleZh: '从"标准化"到"被记住"：酒店情绪价值设计指南',
    titleEn: 'From "Standardization" to "Being Remembered": A Hotel Emotional Value Design Guide',
    summaryZh: '酒店都在讲服务标准化，但客人记住的是"那个瞬间"，如何设计情绪峰值。',
    summaryEn: 'Hotels focus on service standardization, but guests remember "that moment" — how to design emotional peaks.',
    category: 'operations',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 114,
    slug: '2025-jiudianye-liu-da-qushi',
    titleZh: '2025酒店业六大趋势：非接触式技术成核心驱动力',
    titleEn: 'Six Major Trends in 2025 Hospitality: Contactless Technology as the Core Driver',
    summaryZh: '酒店从业者想了解行业最新趋势，特别是技术与服务融合的方向。',
    summaryEn: 'Hotel professionals want to understand the latest industry trends, especially the integration of technology and service.',
    category: 'digital',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
  },
  {
    id: 115,
    slug: 'zhongdang-jiudian-honghai-tuwei',
    titleZh: '中档酒店红海突围：连锁化、品牌化、差异化三大策略',
    titleEn: 'Mid-Scale Hotel Breakthrough in the Red Ocean: Three Strategies — Chain, Brand, Differentiation',
    summaryZh: '中档酒店数量最多、同质化最严重、投资人最难差异化竞争。',
    summaryEn: 'Mid-scale hotels are the most numerous, most homogenized, and hardest for investors to differentiate.',
    category: 'digital',
    date: '2026-05-11',
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
    articleCount: 4
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
    articleCount: 4
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
    articleCount: 0
  },
]

// 热门文章（显示在一级页面底部）
const hotArticles = [
  {
    id: 14,
    slug: 'hotel-ai-agent-intelligent-upgrade-2026',
    titleZh: 'AI智能体时代：酒店从"数字化"到"智能化"的跃迁',
    titleEn: 'The AI Agent Era: Hotels Making the Leap from Digital to Intelligent',
    category: 'operations',
    views: 0,
    likes: 0,
  },
  {
    id: 12,
    slug: 'hotel-social-media-marketing-2026',
    titleZh: '抖音小红书成酒店"白月光"：内容营销怎么玩才有效？',
    titleEn: 'TikTok & Xiaohongshu Become Hotels\' "Moonlight": How to Make Content Marketing Actually Work',
    category: 'marketing',
    views: 0,
    likes: 0,
  },
  {
    id: 10,
    slug: 'hotel-investment-pitfalls-2026',
    titleZh: '2026酒店投资：为什么有的酒店只赚热闹不赚钱？',
    titleEn: 'Hotel Investment in 2026: Why Some Hotels Pack the House but Still Don\'t Make Money',
    category: 'investment',
    views: 0,
    likes: 0,
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
          <SearchBox lang={lang} isZh={isZh} articlesData={articlesData} />
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
