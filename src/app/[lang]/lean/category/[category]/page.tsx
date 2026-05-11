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
    id: 100,
    slug: '2025-jiudian-touzi-renqing-xingshi-zhao-zhun-saidao',
    titleZh: '2025酒店投资：认清形势，找准赛道',
    titleEn: 'Hotel Investment in 2025: Read the Market, Find Your Niche',
    summaryZh: '2025年的酒店投资市场，正在经历一场深刻的结构性调整。过去十年，酒店投资的核心逻辑是"地段+品牌=成功"，但在今天，这个公式已经不再成立。',
    summaryEn: 'The hotel investment market in 2025 is undergoing a profound structural adjustment.',
    category: 'investment',
    tags: ['投资分析', '选址评估', '投资回报'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 101,
    slug: 'guanxiangjingdao-de-qingxujiazhi-cong-fuwu-dao-xinling-gongming',
    titleZh: '管享精道的情绪价值：从服务到心灵共鸣',
    titleEn: 'The Emotional Value of Lean Insights: From Service to Spiritual Resonance',
    summaryZh: '在标准化服务时代，酒店如何创造让人铭记的情绪价值？',
    summaryEn: 'In the era of standardized service, how can hotels create memorable emotional value?',
    category: 'investment',
    tags: ['情绪价值', '服务体验', '品牌建设'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 12,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 102,
    slug: 'wenhua-chenjinshi-tiyan-jiudianye-de-xin-jingzhengli',
    titleZh: '文化沉浸式体验：酒店业的新竞争力',
    titleEn: 'Cultural Immersive Experience: The New Competitive Edge in Hospitality',
    summaryZh: '当硬件趋同，文化沉浸式体验成为酒店差异化的新战场。',
    summaryEn: 'When hardware converges, cultural immersive experiences become the new battlefield for hotel differentiation.',
    category: 'investment',
    tags: ['文化体验', '差异化', '品牌建设'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 12,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 103,
    slug: 'jiudian-touzi-huibaolv-zenme-suan',
    titleZh: '酒店投资回报率怎么算？多数人第一步就错了',
    titleEn: 'How to Calculate Hotel ROI? Most People Get the First Step Wrong',
    summaryZh: '投资人算回报只算 RevPAR，忽略了隐性成本和退出机制。',
    summaryEn: 'Investors calculate returns using only RevPAR, ignoring hidden costs and exit mechanisms.',
    category: 'investment',
    tags: ['投资回报', 'RevPAR', '成本分析'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 104,
    slug: 'cunliang-gaoduan-jiudian-fanhong-zhinan',
    titleZh: '存量高端酒店翻红指南：华住"美好家族"模式拆解',
    titleEn: 'Revitalizing Legacy Upscale Hotels: Deconstructing Huazhu\'s "Meihao Family" Model',
    summaryZh: '大量存量高端酒店想改造但不知道从哪下手，没有资金又缺经验。',
    summaryEn: 'Numerous legacy upscale hotels want to renovate but don\'t know where to start.',
    category: 'preparation',
    tags: ['存量改造', '品牌升级', '华住模式'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 105,
    slug: 'jiudian-gaizao-bikeng-zhinan',
    titleZh: '酒店改造避坑指南：那些年我们交过的学费',
    titleEn: 'Hotel Renovation Pitfall Guide: Lessons We Paid For',
    summaryZh: '改造失败的案例教训：设计不合理、机电不过关、预算超支。',
    summaryEn: 'Lessons from renovation failures: unreasonable design, inadequate M&E, budget overruns.',
    category: 'preparation',
    tags: ['改造避坑', '设计审查', '预算控制'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 106,
    slug: 'jiudian-nenghao-chengben-shendu-pouxi',
    titleZh: '酒店能耗成本深度剖析：那些你以为正常的浪费，正在吃掉你的利润',
    titleEn: 'Hotel Energy Costs Under the Microscope: The Waste You Think Is Normal Is Eating Your Profits',
    summaryZh: '能源费用是酒店运营第二大成本，但多数业主只知道看账单，不知道能耗漏在哪、如何堵住。',
    summaryEn: 'Energy costs are the second largest operating expense for hotels.',
    category: 'operations',
    tags: ['能耗管理', '成本管控', '效率提升'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 107,
    slug: 'jiudian-renli-zi-yuan-chengben-youhua',
    titleZh: '酒店人力资源成本优化：不是裁员，而是让每个人产生更多价值',
    titleEn: 'Hotel HR Cost Optimization: Not Layoffs, But Making Everyone More Valuable',
    summaryZh: '人力成本占运营成本30-40%，但简单裁员伤害服务品质；如何在保证服务质量的同时优化人力成本。',
    summaryEn: 'Labor costs account for 30-40% of operating expenses.',
    category: 'operations',
    tags: ['人力成本', '效率提升', '服务品质'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 108,
    slug: 'jiudian-shouru-zhiyou-fangfei',
    titleZh: '酒店收入只有房费？是你没看到这三座金矿',
    titleEn: 'Hotel Revenue Only from Room Rates? You\'re Missing Three Gold Mines',
    summaryZh: '过度依赖客房收入，淡旺季波动大，投资人需要稳定现金流。',
    summaryEn: 'Over-reliance on room revenue with high seasonal fluctuations.',
    category: 'marketing',
    tags: ['收入优化', '非房收入', '现金流'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 109,
    slug: 'kefang-shangpinhua-guanli',
    titleZh: '客房商品化管理：被忽视的利润增长点',
    titleEn: 'Room Commoditization Management: An Overlooked Profit Growth Point',
    summaryZh: '客房Minibar/售货机长期管理混乱，库存不清、补货不及时。',
    summaryEn: 'Room minibar/vending machines are chronically mismanaged.',
    category: 'marketing',
    tags: ['客房管理', '利润增长', '库存优化'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 110,
    slug: 'jiudian-rencai-liushi-lu-gaoda-30',
    titleZh: '酒店人才流失率高达30%：老板们到底在痛什么？',
    titleEn: 'Hotel Talent Turnover at 30%: What Are Owners Really Worried About?',
    summaryZh: '一线员工流动性大，培训成本高，好不容易培养出来的人留不住。',
    summaryEn: 'High frontline turnover, expensive training costs.',
    category: 'team',
    tags: ['人才流失', '员工保留', '培训成本'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 111,
    slug: 'cong-yongren-dao-yuren',
    titleZh: '从"用人"到"育人"：酒店人才培养的底层逻辑',
    titleEn: 'From "Using" to "Developing" People: The Fundamentals of Hotel Talent Development',
    summaryZh: '培训流于形式，员工知道但做不到，标准化执行难。',
    summaryEn: 'Training becomes formalistic; employees know but cannot execute.',
    category: 'team',
    tags: ['人才培养', '标准化', '执行力'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 112,
    slug: 'jiudian-fuwu-weishenme-yuelaiyue-leng',
    titleZh: '酒店服务为什么越来越"冷"？找回人感温度的三个支点',
    titleEn: 'Why Is Hotel Service Getting "Colder"? Three Pillars to Restore Human Warmth',
    summaryZh: '标准化流程让服务变机械，客人感受不到温度，复购率低。',
    summaryEn: 'Standardized processes make service mechanical.',
    category: 'operations',
    tags: ['服务温度', '客户体验', '复购率'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 113,
    slug: 'cong-biaozhunhua-dao-bei-ji-zhu',
    titleZh: '从"标准化"到"被记住"：酒店情绪价值设计指南',
    titleEn: 'From "Standardization" to "Being Remembered": A Hotel Emotional Value Design Guide',
    summaryZh: '酒店都在讲服务标准化，但客人记住的是"那个瞬间"，如何设计情绪峰值。',
    summaryEn: 'Hotels focus on service standardization, but guests remember "that moment".',
    category: 'operations',
    tags: ['情绪价值', '服务设计', '客户记忆'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 114,
    slug: '2025-jiudianye-liu-da-qushi',
    titleZh: '2025酒店业六大趋势：非接触式技术成核心驱动力',
    titleEn: 'Six Major Trends in 2025 Hospitality: Contactless Technology as the Core Driver',
    summaryZh: '酒店从业者想了解行业最新趋势，特别是技术与服务融合的方向。',
    summaryEn: 'Hotel professionals want to understand the latest industry trends.',
    category: 'digital',
    tags: ['行业趋势', '非接触技术', '数字化'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 115,
    slug: 'zhongdang-jiudian-honghai-tuwei',
    titleZh: '中档酒店红海突围：连锁化、品牌化、差异化三大策略',
    titleEn: 'Mid-Scale Hotel Breakthrough in the Red Ocean: Three Strategies',
    summaryZh: '中档酒店数量最多、同质化最严重、投资人最难差异化竞争。',
    summaryEn: 'Mid-scale hotels are the most numerous, most homogenized.',
    category: 'digital',
    tags: ['中档酒店', '差异化', '品牌化'],
    author: '迈创兄弟',
    date: '2026-05-11',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  // 2026-05-10 旧文章（14篇）
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    slug: 'hotel-construction-timeline-72-checkpoints-2026',
    titleZh: '筹建周期从14个月缩到10个月：72个检查点实战手册',
    titleEn: 'Cutting Project Timelines from 14 Months to 10: A 72-Point Pre-Opening Checklist',
    summaryZh: '孙总在杭州投资了一个酒店改造项目，物业是之前的一个快捷酒店，2200平米，他想把改成中端精选酒店。',
    summaryEn: 'Mr. Sun invested in a hotel renovation project in Hangzhou, converting a former budget hotel to mid-scale.',
    category: 'preparation',
    tags: ['筹建管理', '检查点', '项目周期'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 4,
    slug: 'hotel-pms-selection-guide-2026',
    titleZh: '新店PMS选型指南：2026年系统怎么选才不踩坑？',
    titleEn: 'New Hotel PMS Selection Guide: How to Pick a 2026 System Without Getting Burned',
    summaryZh: '张总在成都新开了一家80间客房的精品酒店，开业前三个月开始选PMS系统。',
    summaryEn: 'Mr. Zhang opened an 80-room boutique hotel in Chengdu and started selecting a PMS three months before opening.',
    category: 'preparation',
    tags: ['PMS选型', '系统评估', '避坑指南'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 5,
    slug: 'hotel-gen-z-retention-dual-track-2026',
    titleZh: '90后员工干不满3个月就辞职？双轨职业体系实战',
    titleEn: 'Gen Z Employees Quitting Within 3 Months: A Dual-Track Career System That Actually Works',
    summaryZh: '周经理在宁波经营一家68间客房的城市商务酒店，属于单体店，没有连锁品牌背书。',
    summaryEn: 'Manager Zhou runs a 68-room urban business hotel in Ningbo, an independent property without chain brand backing.',
    category: 'team',
    tags: ['员工保留', '双轨制', '职业发展'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    slug: 'hotel-data-driven-operations-2026',
    titleZh: '从凭经验到凭数据：酒店运营决策的量化革命',
    titleEn: 'From Gut Feel to Data: The Quant Revolution in Hotel Operations Decision-Making',
    summaryZh: '陈总在成都经营一家100间客房的商务酒店，他在这个行业干了15年。',
    summaryEn: 'Mr. Chen runs a 100-room business hotel in Chengdu. He has been in the industry for 15 years.',
    category: 'operations',
    tags: ['数据驱动', '量化决策', '运营优化'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 9,
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
    id: 10,
    slug: 'hotel-ota-commission-direct-booking-2026',
    titleZh: 'OTA佣金一年吃掉90万：直订体系搭建实战手册',
    titleEn: 'OTA Commissions Eat 900K RMB a Year: A Practical Guide to Building a Direct Booking System',
    summaryZh: '李总在南京经营一家98间客房的经济型酒店，位置不错，靠近地铁口，客源以旅游和商务散客为主。',
    summaryEn: 'Mr. Li runs a 98-room economy hotel in Nanjing, near a subway exit, serving tourist and business travelers.',
    category: 'marketing',
    tags: ['OTA佣金', '直订体系', '渠道优化'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 11,
    slug: 'hotel-pms-ai-infrastructure-2026',
    titleZh: 'PMS从管理工具到AI基础设施：2026年系统进化论',
    titleEn: 'PMS Evolution: From Management Tool to AI Infrastructure in 2026',
    summaryZh: '王总在成都经营一家80间客房的精品酒店，2019年他花了8万块上了一套"智慧酒店系统"。',
    summaryEn: 'Mr. Wang runs an 80-room boutique hotel in Chengdu. In 2019, he spent 80K yuan on a "smart hotel system."',
    category: 'digital',
    tags: ['PMS进化', 'AI基础设施', '系统升级'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 12,
    slug: 'hotel-data-governance-standardization-2026',
    titleZh: '酒店数据治理：从"数据不准"到"决策可信"的三层标准化',
    titleEn: 'Hotel Data Governance: From Unreliable Data to Decisions You Can Trust',
    summaryZh: '张总在杭州经营一家120间客房的会议型酒店，他一直很重视数据——PMS有数据，财务有数据，OTA后台也有数据。',
    summaryEn: 'Mr. Zhang runs a 120-room conference hotel in Hangzhou. He values data — PMS, finance, OTA backends all have data.',
    category: 'digital',
    tags: ['数据治理', '标准化', '决策可信'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 13,
    slug: 'hotel-energy-cost-optimization-2026',
    titleZh: '酒店能耗占营收15%：用能画像系统一年省126万实战',
    titleEn: 'Hotel Energy Costs at 15% of Revenue: How a Usage Profile System Saved 1.26M RMB',
    summaryZh: '方总在武汉经营一家200间客房的会议型酒店，客源结构是：60%会议团、30%旅游散客、10%长住客。',
    summaryEn: 'Mr. Fang runs a 200-room conference hotel in Wuhan. Guest mix: 60% conference groups, 30% tourist FITs, 10% long-stay.',
    category: 'cost',
    tags: ['能耗管理', '成本优化', '用能画像'],
    author: '迈创兄弟',
    date: '2026-05-10',
    readTime: 15,
    views: 0,
    likes: 0,
    comments: 0,
  },
  {
    id: 14,
    slug: 'hotel-labor-cost-ai-collaboration-2026',
    titleZh: '存量时代的人工成本优化：AI替代还是人机协同？',
    titleEn: 'Labor Cost Optimization in the Stock Era: AI Replacement or Human-Machine Collaboration',
    summaryZh: '陈总在成都经营一家150间客房的商务酒店，员工编制58人。',
    summaryEn: 'Mr. Chen runs a 150-room business hotel in Chengdu with 58 staff members.',
    category: 'cost',
    tags: ['人工成本', 'AI协同', '效率提升'],
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
