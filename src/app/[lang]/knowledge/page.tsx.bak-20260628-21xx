import Link from 'next/link'
import { BookOpen, FileText, BarChart3, ArrowRight, Clock, User, Calendar } from 'lucide-react'
import PageHero from '@/components/PageHero'
import KnowledgeSearchBox from './KnowledgeSearchBox'

export default async function KnowledgePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  // 页面UI翻译
  const ui = {
    pageTitle: isZh ? '行业洞察' : 'Industry Insights',
    pageSubtitle: isZh
      ? '以数据驱动的前瞻视角，深度解析酒店行业趋势、投资逻辑与运营变革'
      : 'Data-driven foresight — in-depth analysis of hotel industry trends, investment logic, and operational transformation',
    heroSubtitle: isZh
      ? 'MBCT研究院出品，以数据驱动的前瞻视角，为酒店行业提供深度洞察与实战指南'
      : 'By MBCT Institute — data-driven strategic foresight, delivering deep insights and practical guidance for the hospitality industry',
    leanBannerTitle: isZh ? '管享精道 · 专题栏目' : 'Lean Insights · Special Column',
    leanBannerDesc: isZh
      ? '专为酒店管理者打造的精益管理知识体系 —— 从投资决策到运营升级，7大模块系统赋能。独立入口，直达实战精华。'
      : 'A Lean management knowledge system built for hotel executives — 7 modules empowering decisions from investment to operations. Independent entry to a world of practical wisdom.',
    enterLean: isZh ? '进入管享精道' : 'Enter Lean Insights',
    academicTitle: isZh ? '行业分析' : 'Industry Analysis',
    academicDesc: isZh ? '学术研究论文,理论与实践结合' : 'Peer-reviewed research combining theory and practice',
    reportTitle: isZh ? '行业报告' : 'Industry Reports',
    reportDesc: isZh ? '行业深度报告,实战案例分析' : 'In-depth industry analysis with real cases',
    caseTitle: isZh ? '案例研究' : 'Case Studies',
    caseDesc: isZh ? '实战项目复盘,数据脱敏处理' : 'Real project retrospectives with anonymized data',
    leanTitle: isZh ? '管享精道' : 'Lean Insights',
    leanDesc: isZh ? '酒店管理者精益问答--听迈创兄弟娓娓道来' : 'Lean management Q&A for hotel leaders',
    searchPlaceholder: isZh ? '搜索文章...' : 'Search articles...',
    readMore: isZh ? '阅读全文' : 'Read More',
    minRead: isZh ? '分钟' : 'min read',
  }

  const articles = [
    

        {
      id: 414,
      type: 'article',
      title: '酒店竞争正在从"拼硬件"转向"拼组织"：为什么同样的房间数，结果却完全不同',
      titleEn: 'Hotel Competition Is Shifting from "Hardware" to "Organizational Capability": Why the Same Room Count Produces Radically Different Outcomes',
      slug: 'hotel-competition-shifts-from-hardware-to-organization-2026-06-01',
      summary: '当硬件差距被抹平之后，真正拉开酒店经营差距的不是"房间长什么样"，而是"这家酒店内部怎么运转"。本文从响应速度、交付标准稳定性、管理颗粒度与利润质量三个维度，系统分析酒店行业从"拼硬件"到"拼组织"的竞争范式转移。',
      summaryEn: 'When hardware gaps have been leveled, what truly separates a hotel\'s operating performance is not "what the rooms look like," but "how the hotel runs internally." This article systematically analyzes the shift from hardware-based to organization-based competition across three dimensions: response speed, delivery standard stability, and management granularity.',
      firstLine: "如果你在过去两年里走进过任何一家新开的中高端酒店，你会发现一个有趣的现象：大堂的设计语言越来越趋同，客房的配置清单越来越相似。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-01',
      readTime: 16,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 413,
      type: 'article',
      title: '2026年酒店投资回报正在回归理性:RevPAR修复的三条主线',
      titleEn: 'Hotel Investment Returns in 2026 Are Returning to Rationality: Three Main Lines of RevPAR Repair',
      slug: 'revpar-recovery-three-tracks-2026-05-20',
      summary: '2026年中国酒店行业正在从"拼扩张"转向"拼回报",RevPAR修复有三条主线:价格修复、渠道效率修复、产品与服务修复。本文深度分析三条主线的逻辑与实操路径,为投资人和运营管理者提供决策框架。',
      firstLine: '真正决定回报的,不是入住率的单一复苏,而是RevPAR的修复方式。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-20',
      readTime: 12,
      tag: isZh ? '趋势分析' : 'Trend Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 412,
      type: 'article',
      title: '万豪希尔顿押注疗愈经济:国际酒店集团为何集体涌入康养赛道?',
      titleEn: 'Marriott and Hilton Bet Big on the Wellness Economy: Why International Hotel Groups Are Flooding Into the Wellness Track',
      slug: 'marriott-hilton-wellness-economy-2026-05-19',
      summary: '2026年5月,万豪与Lefay合资、希尔顿西嘉亚太首店落地,全球康养疗愈酒店市场规模161.8亿美元预计2032年突破280.5亿美元。本文深度分析国际品牌战略逻辑、中国市场的供需错配机会,以及对投资人和运营管理者的实战启示。',
      firstLine: '万豪与Lefay合资、希尔顿西嘉亚太首店落地,全球康养疗愈酒店市场窗口期正在进行。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-19',
      readTime: 15,
      tag: isZh ? '热点解读' : 'Hotspot Analysis',
      tagColor: 'bg-[#ef4444]',
      tagTextColor: 'text-white',
    },
    {
      id: 411,
      type: 'article',
      title: 'AI驱动的酒店业投资决策:从私域运营到成本优化的全链路策略',
      titleEn: 'AI-Driven Hotel Investment Decision: From Private Domain Operations to Cost Optimization',
      slug: 'ai-driven-hotel-investment-decision-2026-05-15',
      summary: '提供系统化的AI驱动投资决策框架,涵盖私域运营、内容生产、直播带看等全链路策略,帮助酒店业投资人抓住价值增长点。',
      firstLine: '本文提供AI驱动的酒店业投资决策全链路策略,包括私域运营、内容生产、直播带看等关键环节。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-15',
      readTime: 15,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 410,
      type: 'article',
      title: 'AI赋能酒店业:从"活人感"到"情绪价值"的创新路径',
      titleEn: 'AI Empowers Hospitality: From "Human Feel" to "Emotional Value" Innovation Path',
      slug: 'ai-empowers-hospitality-emotional-value-2026-05-15',
      summary: '探索AI在酒店业中的应用,包括智能客服、AI预订推荐、客房环境感知等场景,以及情绪价值驱动的创新路径。',
      firstLine: '本文聚焦AI技术在酒店运营中的落地案例,并提出将情绪价值纳入KPI的路径设计。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-15',
      readTime: 12,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 409,
      type: 'article',
      title: 'AI赋能酒旅业:从"活人感"到"情绪价值"的创新路径',
      titleEn: 'AI Empowers Hospitality: From "Human Feel" to "Emotional Value" Innovation Path',
      slug: 'ai-empowers-hospitality-emotional-value-2026-05-15-zh',
      summary: '解析2026年网络热词"活人感""情绪价值"等在酒旅消费场景的映射,并展示AI提升客房入住率、客单价的具体数字。',
      firstLine: 'AI技术在酒旅运营中的四大场景落地案例,结合情绪价值转化为可量化KPI。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-15',
      readTime: 12,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },

    {
      id: 406,
      type: 'article',
      title: '北京酒店业大洗牌:禁止新开三星以下酒店,2030年打造10个高端集群',
      titleEn: 'Beijing\'s Hotel Shakeout: No New 3-Star Hotels Allowed',
      slug: 'beijing-hotel-policy-2026',
      summary: '2026年4月,北京正式出台酒店业"限星令"--停止批准新建三星级及以下酒店。目标2030年打造10个高端酒店集群、600家高品质酒店、连锁化率60%。',
      summaryEn: 'In April 2026, Beijing officially banned new 3-star-and-below hotels. Targets: 10 premium clusters, 600 high-quality hotels, 60% chain rate by 2030.',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-10',
      readTime: 8,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 407,
      type: 'article',
      title: '2025酒店业六大趋势:非接触式技术成核心驱动力',
      titleEn: 'Six Major Trends in 2025 Hospitality: Contactless Technology as the Core Driver',
      slug: '2025-jiudianye-liu-da-qushi',
      summary: '2025年的酒店业,正在经历一场由技术驱动的深刻变革。非接触式技术、个性化服务、可持续发展、健康安全、本地化体验、灵活空间六大趋势正在重塑行业。',
      summaryEn: 'In 2025, the hotel industry is undergoing a profound technology-driven transformation. Six major trends are reshaping the industry.',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-11',
      readTime: 15,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 408,
      type: 'article',
      title: '中档酒店红海突围:连锁化、品牌化、差异化三大策略',
      titleEn: 'Mid-Scale Hotel Breakthrough in the Red Ocean: Three Strategies',
      slug: 'zhongdang-jiudian-honghai-tuwei',
      summary: '中国酒店业中,中档酒店数量最多、竞争最激烈、同质化最严重。本文从连锁化、品牌化、差异化三大策略,为中档酒店投资人提供突围路径。',
      summaryEn: 'Mid-scale hotels are the most numerous and competitive in China. This article provides three strategies for breakthrough.',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-11',
      readTime: 15,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 405,
      type: 'article',
      title: '万豪希尔顿首次警告:ChatGPT等AI平台正在威胁酒店直订渠道',
      titleEn: 'Marriott and Hilton Warn: AI Platforms Threaten Direct Bookings',
      slug: 'marriott-hilton-ai-ota-threat-2026',
      summary: '万豪和希尔顿在SEC文件中首次将AI平台列为风险因素。AI可能将客户导向OTA,佣金率15-25%。MBCT分析两种结局:酒店沦为内容供应商,或AI成为直订利器。',
      summaryEn: 'Marriott and Hilton first list AI platforms as risk factors in SEC filings. AI may redirect customers to OTAs with 15-25% commission rates. MBCT analyzes two outcomes.',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-09',
      readTime: 6,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
    },
    {
      id: 404,
      type: 'article',
      title: 'STR数据解读:2026年Q1中国酒店市场复苏超预期,但结构性分化加剧',
      titleEn: 'STR Data Analysis: 2026 Q1 China Hotel Market Recovery Exceeds Expectations with Structural Divergence',
      slug: 'str-q1-2026',
      summary: 'STR发布2026年Q1中国酒店市场数据:入住率68.5%,ADR同比+3.8%,RevPAR同比+10.6%。但复苏呈现明显的K型结构性特征--高端市场ADR+5.3%,三四线城市ADR-2.3%。',
      firstLine: 'STR发布2026年Q1中国酒店市场数据:入住率、ADR、RevPAR三项核心指标均高于2025年同期,上海高端酒店ADR达1078元(+5.3%)。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-09',
      readTime: '8分钟',
      tag: '行业报告',
      featured: true,
    },

    {
      id: 403,
      type: 'article',
      title: '万豪与阿里巴巴AI战略合作升级:酒店业AI应用进入"智能体"时代',
      titleEn: 'Marriott and Alibaba AI Strategic Partnership Upgrade: Hotel Industry Enters the "Agent" Era',
      slug: 'marriott-alibaba-ai-agent-2026',
      summary: '万豪国际与阿里巴巴宣布AI战略合作升级,飞猪旗舰店启用AI智能体为客人规划个性化行程,万丽酒店AI礼宾服务RENAI正式上线。这意味着酒店业AI应用正从"聊天工具"升级为"运营基础设施"。',
      firstLine: '2026年4月,万豪国际与阿里巴巴宣布AI战略合作升级,万豪飞猪旗舰店成为首批接入阿里巴巴"通义"大模型的国际酒店品牌。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-08',
      readTime: '8分钟',
      tag: '行业分析',
      featured: true,
    },

    {
      id: 321,
      type: 'article',
      title: '中国酒店业连锁化率40.09%背后的结构性机遇:下沉市场与存量改造双轮驱动',
      titleEn: 'Structural Opportunities Behind China\'s 40.09% Hotel Chain Penetration Rate: Lower-Tier Markets and Inventory Renovation Dual Drivers',
      slug: 'hotel-chain-penetration-40-percent-structural-opportunity',
      summary: '中国酒店业连锁化率达40.09%,但距欧美70%+仍有显著差距。本文从下沉市场蓝海与存量改造两条主线剖析结构性机遇,为行业投资者提供决策参考。',
      firstLine: '截至2024年底,中国酒店业连锁化率已达到40.09%,较上年提升2.45个百分点,但与欧美成熟市场70%以上的连锁化率相比,仍存在显著差距。',
      author: '迈创兄弟',
      date: '2026-05-07',
      readTime: '20分钟',
      tag: '行业报告',
      featured: true,
    },

    {
      id: 402,
      type: 'article',
      title: '情绪价值驱动下的酒店业转型:从"空间供给"到"体验创造"',
      titleEn: 'Hospitality Transformation Driven by Emotional Value: From "Space Supply" to "Experience Creation"',
      slug: 'emotional-value-hotel-transformation',
      summary: '2026年五一假期,"蓝眼泪"现象揭示情绪价值正在重塑旅行决策。县域高星酒店预订量同比增长逾三成,年轻人愿为"一朵蓝眼泪"奔赴一座城。本文系统分析酒店业从"空间供给"向"体验创造"的转型路径。',
      firstLine: '2026年五一假期,中国旅游市场呈现出与过往截然不同的消费图景:游客不再涌向传统热门景点,而是为"一朵蓝眼泪"奔赴一座此前无人问津的沿海小城。',
      author: '迈创兄弟',
      date: '2026-05-06',
      readTime: '25分钟',
      tag: '行业分析',
      featured: true,
    },

    {
      id: 317,
      type: 'article',
      title: '从"悦己"到"智性":Z世代消费决策的双重逻辑演变',
      titleEn: 'From "Self-Pleasing" to "Intellectual": The Dual Logic Evolution of Gen Z Consumption Decisions',
      slug: 'gen-z-dual-logic-consumption',
      summary: 'Z世代消费决策已形成"悦己"与"智性"双重逻辑并存的框架。情绪价值负责决策触发,理性评估负责价值校验。近9成青年有过情绪消费,月均949元,但同时73%会进行深度比价研究。',
      firstLine: '当最后一届90后全部迈入25岁门槛,Z世代已无可争议地成为中国消费市场的核心驱动力。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '18分钟',
      tag: '行业分析',
      featured: false,
    },

    {
      id: -21,
      type: 'article',
      title: '酒店数字化转型六年了,为什么多数酒店还在原地踏步?',
      titleEn: 'Six Years of Hotel Digital Transformation: Why Are Most Hotels Still Stuck in Place?',
      slug: 'hotel-digital-transformation-six-years-stuck',
      summary: '数字化成熟度评分64分,93%有预算但不到四成跑通。三个常见坑:买装饰品、数据孤岛、技术债。破局之道:先诊断,再动手,只改最痛的一点。',
      firstLine: '上周去西南一座三线城市出差,顺道看了看当地一家老牌三星级酒店。',
      author: '迈创兄弟',
      date: '2026-04-29',
      readTime: '12分钟',
      tag: '博客文章',
      featured: false,
    },
    {
      id: -11,
      type: 'article',
      title: '2026酒店业K型分化深水区:58.2%单体酒店面临出局的结构性真相',
      titleEn: '2026 Hotel K-Shaped Divergence Deep Water Zone: The Structural Truth Behind 58.2% Independent Hotels Facing Exit',
      slug: 'hotel-k-shaped-divergence-deepwater-2026',
      summary: '中国饭店协会2026年报告核心解读:58.2%单体酒店面临出局,41.80%连锁化率背后的结构性分化。三条死亡路径、五个致命误区、三条生存法则。',
      firstLine: '2026年4月23日,中国饭店协会正式发布《2026年中国酒店业发展报告》。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '18分钟',
      tag: '行业分析',
      featured: true,
    },
    {
      id: -12,
      type: 'article',
      title: '2026酒店存量焕新:五种路径重构资产价值',
      titleEn: '2026 Hotel Inventory Renewal: Five Paths to Reconstruct Asset Value',
      slug: 'hotel-renewal-five-paths-2026',
      summary: '中国酒店业存量资产规模超400万间,五种经过验证的焕新路径:模块化轻改造、AI全链路赋能、私域流量与会员资产化、文化IP赋能、细分赛道精准定位。',
      firstLine: '中国酒店业正站在一个历史性的转折点。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '15分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: -14,
      type: 'article',
      title: '"效率崇拜"退烧:2026全球酒店业从KPI驱动到体验驱动的范式转移',
      titleEn: 'The "Efficiency Worship" Fever Breaks: Global Hospitality\'s Paradigm Shift from KPI-Driven to Experience-Driven in 2026',
      slug: 'hotel-efficiency-to-experience-2026',
      summary: '万豪"客房瘦身"、四季"去标准化"、中国高端酒店"变慢"。效率崇拜的代价与体验价值的回归,全球信号与中国路径。',
      firstLine: '2025年,全球酒店业发生了几件值得深思的事情。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '14分钟',
      tag: '行业分析',
    },
    {
      id: -15,
      type: 'article',
      title: '文化积淀:文旅产业避免同质化的第一性原理',
      titleEn: 'Cultural Accumulation: The First Principle for Culture and Tourism Industry to Avoid Homogenization',
      slug: 'hotel-cultural-accumulation-2026',
      summary: '文旅产业同质化困局:扎染体验、古镇夜游、非遗展览的复制粘贴。文化积淀理论:时间深度×在地浓度×表达精度。',
      firstLine: '过去五年,中国文旅产业经历了一轮史无前例的"文化复兴"。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '12分钟',
      tag: '行业分析',
    },
    {
      id: 0,
      type: 'article',
      title: '2026酒店业"K型分化":高端领跑与低端淘汰的结构性真相',
      titleEn: '2026 Hotel "K-Shaped Divergence": The Structural Truth of Premium Leading and Budget Elimination',
      slug: 'hotel-k-shaped-divergence-2026',
      summary: '2026年开年,中国酒店业呈现出清晰而残酷的市场图景:中高端连锁酒店入住率稳居70%以上,RevPAR持续攀升;而低端老旧单体酒店即便降价促销,也难以挽回客流。',
      firstLine: '2026年开年,中国酒店业呈现出一个清晰而残酷的市场图景。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '25分钟',
      tag: '行业分析',
    },
    {
      id: -3,
      type: 'article',
      title: '存量焕新进入"AI+模块化"时代:酒店资产价值重构的五种路径',
      titleEn: 'Inventory Renewal Enters the "AI + Modular" Era: Five Paths for Hotel Asset Value Reconstruction',
      slug: 'hotel-renewal-five-paths-ai-modular',
      summary: '中国酒店业正经历从增量扩张到存量优化的深刻转型。本文系统梳理存量焕新的五种路径:模块化轻改造、AI全链路赋能、私域流量与会员资产化、文化IP赋能、细分赛道精准定位。',
      firstLine: '中国酒店业正经历一场静默而深刻的变革。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '22分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: -5,
      type: 'article',
      title: '"效率崇拜"退烧:2026全球酒店业从KPI驱动到体验驱动的范式转移',
      titleEn: 'The "Efficiency Worship" Fever Breaks: Global Hospitality\'s Paradigm Shift from KPI-Driven to Experience-Driven',
      slug: 'hotel-efficiency-to-experience-paradigm-shift',
      summary: '当"关店2000+"成为媒体头条,酒店业正在经历从"效率崇拜"到"体验驱动"的静默范式转移。从KPI到人房比,从NPS到情感连接,全球样本与中国路径。',
      firstLine: '2026年春天,全球酒店业正在经历一场静默的范式转移。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '25分钟',
      tag: '行业分析',
    },
    {
      id: -6,
      type: 'article',
      title: '2026全球酒店科技创新地图:30个趋势下的中国落地方略',
      titleEn: '2026 Global Hotel Technology Innovation Map: China Implementation Strategies Under 30 Trends',
      slug: 'hotel-tech-innovation-map-2026',
      summary: '系统梳理2026年全球酒店科技30个关键趋势,聚焦AI渗透三大场景、智能RMS下一代进化、中国落地三座大山,提出轻量化三步路径。',
      firstLine: '如果要给2026年的全球酒店业提取一个最核心的关键词,"科技"二字几乎毫无争议地占据了榜首位置。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '28分钟',
      tag: '行业分析',
    },
    {
      id: 1,
      type: 'article',
      title: '为什么80%的豪华酒店留不住回头客?--体验经济时代的三大认知陷阱',
      titleEn: 'Why Can\'t 80% of Luxury Hotels Retain Repeat Guests? Three Cognitive Traps in the Experience Economy Era',
      slug: 'why-luxury-hotels-cant-retain-guests',
      summary: '年年升级,为何客人还是只住一次?本文引入体验经济理论框架,系统分析酒店服务升级的三大认知陷阱,并提出可操作的行动路径。',
      firstLine: '中国某省会城市,一家开业十五年的国际品牌五星级酒店,2024年深秋迎来了一次"升级"。',
      author: '迈创兄弟',
      date: '2026-04-22',
      readTime: '20分钟',
      tag: '行业分析',
    },
    {
      id: -1,
      type: 'article',
      title: '酒店人房比:增效还是降本?',
      titleEn: 'Hotel Staff-to-Room Ratio: Increasing Efficiency or Reducing Costs?',
      slug: 'hotel-staff-ratio',
      summary: '人房比越低越好吗?数据揭示行业真相:服务和情绪价值是通过人传递的,但成本控制又不得不做。',
      firstLine: '人房比,这个被无数酒店业主、投资人、运营者挂在嘴边的数字,真的越低越好吗?',
      author: '迈创兄弟',
      date: '2026-04-19',
      readTime: '12分钟',
      tag: '行业报告',
    },
    {
      id: -2,
      type: 'article',
      title: '文化灵魂:为什么文旅产业正在经历一场静默革命?',
      titleEn: 'Cultural Soul: Why Is the Culture and Tourism Industry Experiencing a Silent Revolution?',
      slug: 'culture-soul',
      summary: '当"网红打卡地"成为标配,中国文旅行业正陷入前所未有的同质化困境。迈创兄弟提出文化积淀理论。',
      firstLine: '你有没有发现,现在的文旅项目越来越像了?',
      author: '迈创兄弟',
      date: '2026-04-19',
      readTime: '10分钟',
      tag: '行业分析',
    },
    // 行业分析 - 原有文章
    {
      id: 1,
      type: 'article',
      title: '体验经济视域下酒店空间叙事的价值重构',
      titleEn: 'Value Reconstruction of Hotel Space Narrative from the Perspective of Experience Economy',
      slug: 'spatial-narrative',
      summary: '在体验经济时代,酒店业正经历着从功能导向向情感导向的深刻转型。本文以空间叙事理论为分析框架,探讨酒店空间如何从单纯的功能容器转变为承载情感记忆与品牌价值的叙事载体。',
      firstLine: '在体验经济时代,酒店业正经历着从功能导向向情感导向的深刻转型。',
      author: '迈创兄弟',
      date: '2026-04-16',
      readTime: '18分钟',
      tag: '行业分析',
    },
    {
      id: 3,
      type: 'article',
      title: '老龄化人口对酒店服务需求的弹性影响研究',
      titleEn: 'Study on the Elastic Impact of Aging Population on Hotel Service Demand',
      slug: '老龄化人口对酒店服务需求的弹性影响研究',
      summary: '银发经济崛起,酒店如何服务银发客群?康养度假、候鸟旅居、代际旅行三大方向深度分析。',
      firstLine: '中国正在快速变老。根据第七次全国人口普查数据,60岁及以上人口已超过2.64亿。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '行业分析',
    },
    {
      id: 4,
      type: 'article',
      title: '代际消费价值观对住宿选择的影响机制',
      titleEn: 'The Influence Mechanism of Intergenerational Consumption Values on Accommodation Choices',
      slug: '代际消费价值观对住宿选择的影响机制',
      summary: '60后、80后、00后消费差异深度剖析,满足多元客群需求的实战策略。',
      firstLine: '我做过一个有趣的实验:让60后、80后、00后三个人描述他们理想中的酒店。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '行业分析',
    },
    {
      id: 5,
      type: 'article',
      title: '人工智能对酒店运营决策的影响机制研究',
      titleEn: 'Research on the Impact Mechanism of AI on Hotel Operational Decisions',
      slug: '人工智能对酒店运营决策的影响机制研究',
      summary: 'AI如何帮助酒店做更聪明的决策?智能收益管理、客户关系管理、运营优化三大应用场景详解。',
      firstLine: 'AI来了,酒店人该何去何从?会取代的,是那些重复性、机械性的工作。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '行业分析',
    },
    {
      id: 6,
      type: 'article',
      title: '物联网采纳对民宿绩效的影响',
      titleEn: 'The Impact of IoT Adoption on Homestay Performance',
      slug: '物联网采纳对民宿绩效的影响',
      summary: '智能门锁、能耗管理、安全监控如何提升民宿运营效率?成本效益分析与实操路径。',
      firstLine: '凌晨三点,民宿老板老李的手机突然响了。客人门锁出了问题,老李懊恼--要是当初装个智能门锁就好了。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '行业分析',
    },
    {
      id: 7,
      type: 'article',
      title: '组织变革理论视角下的酒店数字化转型',
      titleEn: 'Hotel Digital Transformation from the Perspective of Organizational Change Theory',
      slug: '组织变革理论视角下的酒店数字化转型',
      summary: '数字化转型为何总是雷声大雨点小?一把手工程、试点策略、赋能文化三大破局关键。',
      firstLine: '每逢行业论坛,必谈数字化转型。但真正落地的时候,系统买了一堆,用起来的没几个。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '14分钟',
      tag: '行业分析',
    },
    {
      id: 8,
      type: 'article',
      title: '区块链技术对资产价值评估模型的优化研究',
      titleEn: 'Research on Blockchain Technology Optimizing Asset Value Assessment Models',
      slug: '区块链技术对资产价值评估模型的优化研究',
      summary: '区块链如何解决酒店资产估值难题?数据可信、动态估值、资产证券化三大应用方向。',
      firstLine: '想象一下,你是一家精品酒店的投资人,想要准确评估手中这栋楼的真实价值。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '行业分析',
    },
    {
      id: 9,
      type: 'article',
      title: '虚拟体验经济视角下的目的地营销创新',
      titleEn: 'Destination Marketing Innovation from the Perspective of Virtual Experience Economy',
      slug: '虚拟体验经济视角下的目的地营销创新',
      summary: 'VR、AR,元宇宙如何改变旅游营销?从打卡到沉浸,目的地营销的下一站。',
      firstLine: '你有多久没有真正「到达」一个地方了?不是那种订好机票酒店、打卡签到就算完事的那种「到达」。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '行业分析',
    },
    {
      id: 10,
      type: 'article',
      title: '消费者体验层次模型的实证检验',
      titleEn: 'Empirical Test of Consumer Experience Hierarchy Model',
      slug: '消费者体验层次模型的实证检验',
      summary: '派恩与吉尔摩四层次模型在酒店场景中的验证,娱乐、教育、逃避、审美体验设计框架。',
      firstLine: '「您的酒店入住体验如何?」面对这个问题,大多数人的回答可能是「挺好的」或者「一般般」。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '14分钟',
      tag: '行业分析',
    },
    {
      id: 11,
      type: 'article',
      title: '可持续发展理论框架下的中国旅游实践',
      titleEn: 'China Tourism Practice Under the Framework of Sustainable Development Theory',
      slug: '可持续发展理论框架下的中国旅游实践',
      summary: 'ESG时代酒店竞争力,能源管理、一次性用品减量、本地采购、绿色溢价四大实践路径。',
      firstLine: '当「碳达峰」「碳中和」成为全民议题,中国旅游业也站在了绿色转型的十字路口。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '行业分析',
    },
    {
      id: 12,
      type: 'article',
      title: '服务接触中情绪劳动对溢价支付意愿的影响',
      titleEn: 'Impact of Emotional Labor in Service Encounters on Willingness to Pay Premium',
      slug: '服务接触中情绪劳动对溢价支付意愿的影响',
      summary: '情绪价值如何转化为商业价值?从满意到心动,创造惊喜时刻的四大原则。',
      firstLine: '「您的入住体验如何?」「挺好的,满意。」这是酒店业最常听到的评价,也是最让业者沮丧的评价。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '行业分析',
    },
    {
      id: 13,
      type: 'article',
      title: '资源基础观视角下的酒店竞争优势研究',
      titleEn: 'Research on Hotel Competitive Advantage from the Resource-Based View',
      slug: '资源基础观视角下的酒店竞争优势研究',
      summary: '酒店四大核心资源:品牌、人才、技术、客户关系。从资源到动态能力,构建竞争护城河。',
      firstLine: '你有没有过这样的困惑:明明花了重金装修,客人却不买账?问题可能出在:你一直在模仿别人的「面子」,却没有建立自己的「里子」。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '行业分析',
    },
    {
        "id": 426,
        "type": "article",
        "title": "存量酒店改造前，为什么必须先做经营诊断？",
        "titleEn": "Why Operational Diagnostics Must Precede Renovation of Existing Hotels",
        "slug": "renovation-operating-diagnosis-2026-06-05",
        "summary": "在中国的酒店行业里，有一种很常见的信心：只要把酒店重新装修一遍，生意自然就会好起来。",
        "summaryEn": "There is a widely held assumption in China's hotel sector: renovate the property, and business will automatically improve.",
        "firstLine": "1",
        "author": "迈创兄弟C&T（MarvelBros C&T）",
        "date": "2026-06-05",
        "readTime": 16,
        "tag": "行业报告",
        "tagColor": "bg-[#f97316]",
        "tagTextColor": "text-white",
        "featured": true
    },
      {
      id: 415,
      type: 'article',
      title: 'AI搜索正在改写酒店获客入口:官网、内容和OTA的关系要重排',
      titleEn: 'AI Search Is Rewriting Hotel Demand Capture: Why Websites, Content and OTAs Need a New Relationship',
      slug: 'hotel-ai-search-demand-capture-2026-06-12',
      summary: 'AI搜索不会简单替代OTA或官网,但会改变客人"发现酒店、比较酒店、信任酒店"的路径;酒店需要从"买流量"转向"让内容被AI和人同时理解"。',
      summaryEn: 'AI search will not simply replace OTAs or hotel websites, but it will change how guests discover, compare, and trust hotels. Hotels need to shift from "buying traffic" to "making content understood by both AI and humans."',
      firstLine: "2026年的春天,一个在深圳做金融的年轻人计划带父母去杭州旅行。他没有打开携程,也没有在搜索框输入'杭州酒店推荐'。他打开了自己常用的AI助手。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-12',
      category: 'industry-analysis',
      tag: '行业分析',
      readTime: 28,
      featured: false,
      image: '',
    }
  ]

  // 行业报告 - 2026-06-10新增1篇（案例研究）
  const reports = [
    {
      id: 452,
      type: "report",
      title: "AI搜索时代，酒店为什么需要一份可信实体档案？",
      titleEn: "Why Hotels Need a Trustworthy Entity Profile in the AI Search Era",
      slug: "hotel-ai-entity-profile-2026-06-24",
      summary: "答案很直接：AI搜索引擎判断一家酒店是否值得推荐，依据的不是网页排名，而是它能否从公开网络中提取到一个完整的、一致的、真实可信的实体档案。缺了这份档案，酒店在AI眼里就是一团模糊的信息拼图，随时会被略过。",
      summaryEn: "Hotels are not ignored by AI search because they fail to exist. They are ignored because AI cannot confirm they are real, identifiable, and worth recommending.",
      firstLine: "答案很直接：AI搜索引擎判断一家酒店是否值得推荐，依据的不是网页排名，而是它能否从公开网络中提取到一个完整的、一致的、真实可信的实体档案。缺了这份档案，酒店在AI眼里就是一团模糊的信息拼图，随时会被略过。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-24",
      readTime: 9,
      tag: isZh ? "案例研究" : "Case Study",
      tagColor: "bg-[#10b981]",
      tagTextColor: "text-white",
      featured: false,
    },
    {
      id: 451,
      type: "report",
      title: "2026存量酒店二次筹开报告：业主该先重排产品，还是先重装空间？",
      titleEn: "2026 Existing-Hotel Relaunch Report: Should Owners Redesign the Product Before Renovating the Space?",
      slug: "hotel-relaunch-existing-2026-06-23",
      summary: "很多老酒店准备重新开业时，会议桌上最先出现的是效果图、施工表、软装清单和品牌方案。它们都重要，但它们解决的只是“酒店能不能变新”。真正决定开业后生意质量的，是另一件事：今天的客人为什么还会选择这家酒店？",
      summaryEn: "When an older hotel prepares to reopen, the first items placed on the meeting table are usually design renderings, construction schedules, soft-goods lists, and brand options. They are all important, but they mainly answer one question: can the hotel",
      firstLine: "很多老酒店准备重新开业时，会议桌上最先出现的是效果图、施工表、软装清单和品牌方案。它们都重要，但它们解决的只是“酒店能不能变新”。真正决定开业后生意质量的，是另一件事：今天的客人为什么还会选择这家酒店？",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-23",
      readTime: 14,
      tag: "行业报告",
      tagColor: "bg-[#3b82f6]",
      tagTextColor: "text-white",
      featured: true,
    },
        {
      id: 447,
      type: "report",
      title: "商旅 AI 正在跨过 2 个门槛：从\u201c单点助手\u201d到\u201c协同 Agent\u201d，酒店必须做对这 3 件事",
      titleEn: "Business Travel AI Is Crossing Two Thresholds: From Single-Point Assistant to Collaborative Agent \u2014 3 Things Hotels Must Get Right",
      slug: "business-travel-ai-crossing-two-thresholds-hotels-three-things-2026-06-19",
      summary: "2026 年 6 月，商旅 AI 的重点不再是\u201c机器人能否回答问题\u201d，而是 AI Agent 是否开始进入企业差旅的真实工作流。",
      summaryEn: "In June 2026, AI in business travel stopped being only a customer-service layer. The question now is whether AI agents are starting to enter real corporate travel workflows. Two thresholds \u2014 entry-point and capability \u2014 are being crossed at the same time, and hotels that cannot keep pace with collaborative agents may not merely rank lower; they may never enter the shortlist.",
      firstLine: "2026 年 6 月，商旅 AI 的重点不再是\u201c机器人能否回答问题\u201d，而是 AI Agent 是否开始进入企业差旅的真实工作流。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-19",
      readTime: 16,
      tag: "行业报告",
      tagColor: "bg-[#3b82f6]",
      tagTextColor: "text-white",
      featured: true,
    },
    {
      id: 446,
      type: "report",
      title: "酒店资产退出窗口期：2026-2028 老牌高星单店的 3 条路与 1 个决策框架",
      titleEn: "Hotel Asset Exit Window 2026-2028: Three Paths for Legacy High-Star Hotels and a Decision Framework",
      slug: "china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18",
      summary: "2026 年一季度的酒店财务数据里，最值得警惕的不是谁涨得最快，而是谁在一个整体修复的周期里仍然下滑。金陵饭店一季度营收同比下滑 7.6%，放在头部酒店集团普遍修复的背景下，不只是单家企业经营波动，更像一个行业信号：一批老牌高星单店正在走到资产命运的分岔口。",
      summaryEn: "In the first-quarter hotel financial data of 2026, the most important signal is not simply which companies grew fastest. The more important question is which assets still declined ",
      firstLine: "2026 年一季度的酒店财务数据里，最值得警惕的不是谁涨得最快，而是谁在一个整体修复的周期里仍然下滑。金陵饭店一季度营收同比下滑 7.6%，放在头部酒店集团普遍修复的背景下，不只是单家企业经营波动，更像一个行业信号：一批老牌高星单店正在走到资产命运的分岔口。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-18",
      readTime: 16,
      tag: "行业报告",
      tagColor: "bg-[#3b82f6]",
      tagTextColor: "text-white",
      featured: true,
    },
    {
      id: 444,
      type: "report",
      title: "2026 Q1 财报看酒店业洗牌:4 家头部 4 条路径 + 1 个罕见下滑样本",
      titleEn: "China Hotel Q1 2026 Financials: 4 Industry Leaders, 4 Models, 1 Warning",
      slug: "china-hotel-q1-2026-financials-leader-divergence-2026-06-17",
      summary: "2026 Q1 中国酒店业财报出齐。表面看是普涨——华住 59.96 亿、亚朵 28.11 亿、锦江 31.21 亿、首旅 17.77 亿,4 家头部都报正增长。但拆开看数据,5 家里只有 4 家真正\"涨得明白\"。金陵饭店 2026 Q1 营收同比 -7.6%,是 5 家里罕见下滑的样本(数据来源:迈点研究院《2026 一季度酒店集团财务分析报告》)。",
      summaryEn: "China's hotel industry Q1 2026 earnings reports are out. On the surface, the picture looks like universal growth — Huazhu at 5.996 billion RMB, Atour at 2.811 billion, Jinjiang at 3.121 billion, and BTG Homeinns at 1.777 billion, all four l",
      firstLine: "2026 Q1 中国酒店业财报出齐。表面看是普涨——华住 59.96 亿、亚朵 28.11 亿、锦江 31.21 亿、首旅 17.77 亿,4 家头部都报正增长。但拆开看数据,5 家里只有 4 家真正\"涨得明白\"。金陵饭店 2026 Q1 营收同比 -7.6%,是 5 家里罕见下滑的样本(数据来源:迈点研究院《2026 一季度酒店集团财务分析报告》)。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-17",
      readTime: 18,
      tag: "行业分析",
      tagColor: "bg-[#10b981]",
      tagTextColor: "text-white",
      featured: true,
    },
    {
      id: 443,
      type: 'report',
      title: "有限服务酒店为什么重新成为 2026 投资人首选：当资本开始为“现金流确定性”付费",
      titleEn: "Why Select-Service Hotels Became Investors' First Choice in 2026: When Capital Starts Paying for Cash-Flow Certainty",
      slug: "select-service-hotels-cash-flow-certainty-2026-06-16",
      summary: "2026 年酒店投资正在从规模叙事转向经营清晰度。本文以 Colliers、JLL、Choice Hotels 与中国酒店连锁化数据为基础，分析有限服务酒店为何重新获得资本关注。",
      summaryEn: "Hotel investment in 2026 is shifting from scale narratives to operating clarity. This report explains why select-service hotels are regaining investor attention with data from Colliers, JLL, Choice Hotels, and China's chain-penetration context.",
      firstLine: "一位酒店投资人面前放着两份商业计划书。第一份写满全业态，第二份只有 120 间客房、早餐、洗衣、简餐和小型会客区。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-16',
      readTime: 18,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 441,
      type: 'article',
      title: "酒店经营诊断的5个盲区:不是看不见数据,而是看不见人",
      titleEn: "Five Blind Spots in Hotel Diagnosis: The Problem Is Not Missing Data, But Missing Guests",
      slug: "hotel-diagnosis-five-blind-spots-2026-06-15",
      summary: "酒店经营诊断的5个盲区:不是看不见数据,而是看不见人",
      summaryEn: "Five Blind Spots in Hotel Diagnosis: The Problem Is Not Missing Data, But Missing Guests",
      firstLine: "1. 先看见人,再解释数据",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-15',
      readTime: 18,
      tag: isZh ? '趋势分析' : 'Trend Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 442,
      type: 'report',
      title: "2026年中国酒店经营诊断需求报告:中小单体为何觉醒",
      titleEn: "2026 China Hotel Diagnosis Demand Report: Why Independent Hotels Are Waking Up",
      slug: "china-hotel-diagnosis-demand-report-2026-06-15",
      summary: "2026年中国酒店经营诊断需求报告:中小单体为何觉醒",
      summaryEn: "2026 China Hotel Diagnosis Demand Report: Why Independent Hotels Are Waking Up",
      firstLine: "1. 先看见人,再解释数据",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-15',
      readTime: 18,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 440,
      type: 'report',
      title: "量增价减时代，酒店真正缺的不是客流，而是价值感定价能力",
      titleEn: "In a High-Volume, Low-Price Market, Hotels Lack Not Demand but Value-Based Pricing Capability",
      slug: "hotel-value-pricing-era-2026-06-14",
      summary: "量增价减时代，酒店真正缺的不是客流，而是价值感定价能力\n\n一家城市商务酒店的老板，最近打开系统看到周末连续三晚满房，他应该高兴。但他打开账本，笑不出来。满房背后，房价跌到了三年前的七成；餐饮上座率被外卖和便利店不断抽走；会议室一周只订出去两次；前台告诉他的\"回头客\"，其实只来过一次，还是因为 OTA 送了一张升房券。他越看越觉得哪里不对——客人明明越来越多，账上的钱却越来越少。",
      summaryEn: "In a High-Volume, Low-Price Market, Hotels Lack Not Demand but Value-Based Pricing Capability",
      firstLine: "量增价减时代，酒店真正缺的不是客流，而是价值感定价能力\n\n一家城市商务酒店的老板，最近打开系统看到周末连续三晚满房，他应该高兴。但他打开账本，笑不出来。满房背后，房价跌到了三年前的七成；餐饮上座率被外卖和便利店不断抽走；会议室一周只订出去两次；前台告诉他的\"回头客\"，其实只来过一次，还是因为 OTA 送了一张升房券。他越看越觉得哪里不对——客人明明越来越多，账上的钱却越来越少。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-14',
      readTime: 15,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
        id: 439,
        type: 'report',
        title: "周末体验经济正在重写酒店服务：从客房出租到城市停留时间运营",
        titleEn: "Weekend Experience Economy Is Rewriting Hotel Service: From Selling Rooms to Managing Urban Stay Time",
        slug: "weekend-experience-economy-2026-06-13",
        summary: "MBCT 从城市酒店与度假酒店的项目诊断中观察到，周末客人正在从“住一晚”转向“度一个完整周末”。酒店竞争力不再只是客房出租，而是能否设计到店前、入住中、离店后的连续体验链，并把客人的停留时间转化为非房收入、复购线索和口碑传播。",
        summaryEn: "From diagnostics across urban and resort hotels, MBCT has observed a structural shift: weekend guests are no longer simply booking a room for one night; they are buying a fuller weekend experience. Hotel competitiveness is moving from selling rooms to designing an experience chain before arrival, during the stay, and after departure, turning guest stay time into non-room revenue, repeat leads, and word-of-mouth.",
        firstLine: "一个深圳的年轻妈妈周五晚上带着6岁的女儿坐高铁去长沙，原本只想住一晚、逛一下岳麓书院，周日上午就回。但她在小红书上刷到一家开在湘江边的老酒店，正好有\"周六早茶+非遗手作+湘江夜游\"组合套餐。她改了行程，在那家酒店住了两晚，带女儿做了扎染、听了花鼓戏、坐了夜游船。周一回到深圳，她在大众点评写了一条详细的评价，配了几张照片，最后一句是\"这趟周末，比我想象中多了一倍。\"",
        author: '迈创兄弟C&T（MarvelBros C&T）',
        date: '2026-06-13',
        readTime: 22,
        tag: isZh ? '行业报告' : 'Industry Report',
        tagColor: 'bg-[#3b82f6]',
        tagTextColor: 'text-white',
        featured: true,
    },
    {
      id: 438,
      type: 'report',
      title: '酒店AI不是噱头：2026年经营看板如何重构服务、收益与复购',
      titleEn: 'Hotel AI Is Not a Gimmick: How Operating Dashboards Reshape Service, Revenue and Repeat Business in 2026',
      slug: 'hotel-ai-dashboard-2026-06-11',
      summary: '2025年是中国酒店业"AI元年"的说法甚嚣尘上。从连锁集团到单体酒店，从前台自助入住到客房语音管家，从智能定价到机器人送物，各类AI应用场景的宣传铺天盖地。但一个尴尬的现实是：行业平均出租率和RevPAR并没有因为"AI化"而出现显著改善。',
      summaryEn: 'For the past two years, "AI" has been the most overused word in the Chinese hotel industry. From chain groups to independent properties, from front-desk self-check-in to in-room voice assistants, from smart pricing to robot deliveries, every kind of AI use case has been promoted at full volume. Yet one uncomfortable reality stands: industry-wide average occupancy and RevPAR have not seen meaningful improvement because of "AI-fication."',
      firstLine: "一、为什么酒店谈AI很热闹，但经营结果没有变化",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-11',
      readTime: 22,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 437,
      type: 'report',
      title: '一家酒店没有明显差评，为什么客人还是安静离开？',
      titleEn: 'Why Guests Quietly Leave a Hotel Even When There Are Few Bad Reviews',
      slug: 'hotel-quiet-departure-case-study-2026-06-10',
      summary: "一家酒店没有明显差评，为什么客人还是安静离开？  某省会城市火车站商圈，一家开业五年的中端商务酒店，160间客房，OTA平台上综合评分稳定在4.5分左右。然而这家酒店的客源结构里有一个安静但致命的数据：商务客人的首次入住后三个月内复购率不足8%。同一商圈内，定位相似的一家竞品酒店，这个数字是15%以上。  流失的客人并没有给出差评。他们只是在下一次订房时，打开App，滑过了这一家。这不是极端案例。MBCT项目团队在过去三年接触的四十余家单体酒店中，类似的情况出现在超过一半的酒店身上——评分不差，差评不多，但客人就是不再回来。  本文系统拆解这一行业普遍忽视的隐性危机：酒店不差，但也没有被记住的理由。",
      summaryEn: "Why Guests Quietly Leave a Hotel Even When There Are Few Bad Reviews  In a provincial capital's train station commercial district, a five-year-old midscale business hotel with 160 rooms maintains a steady aggregate rating of around 4.5 on OTA platforms. Yet buried in this hotel's guest-source structure is a quiet but devastating number: the three-month repeat-booking rate for business travelers after their first stay is below 8%. In the same commercial district, a comparable hotel with a similar positioning and even lower brand recognition posts a figure above 15%.  What is more telling is that the guests who leave do not leave bad reviews. They simply, the next time they book a room, open the app and scroll past this one. This is not an extreme case. Among more than forty independent hotels that the MBCT project team has worked with over the past three years, a similar pattern has appeared in more than half of them — ratings that are not bad, very few negative reviews, but guests simply do not come back.",
      firstLine: "某省会城市火车站商圈，一家开业五年的中端商务酒店，160间客房，OTA平台上综合评分稳定在4.5分左右。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-10',
      readTime: 24,
      tag: isZh ? '案例研究' : 'Case Study',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 435,
      type: 'report',
      title: '2026 酒店业绩回暖背后：为什么增长不等于经营变轻',
      titleEn: 'Behind the 2026 Hotel Performance Recovery: Why Growth Does Not Mean Operations Are Getting Easier',
      slug: '2026-hotel-recovery-not-easier-2026-06-08',
      summary: '如果只看 RevPAR 回暖，2026 年像是一个轻松年份。\nCoStar 与 Tourism Economics 在 2026 年 6 月的联合预测（"U.S. Hotel Forecast Assumptions – June 2026"）中，将美国酒店全年的 RevPAR 增长预期从年初的水平上调到 +2.8%，各档位酒店同步获益，奢华档位涨幅更明显。Business Travel News 跟进报道时也用了类似口径：预测在向好，但 ADR 与 RevPAR 的增长仍可能跑不赢通胀压力。Hotel Dive 在同期给出的解读更直接：业绩好不等于压力小，奢华与中端、单体与连锁的分化正在被放大。\n但真正坐在酒店经营桌前的人知道：收入数字变好，并不意味着经营难度下降。增长是不是高质量增长，现金流是否同步修复，组织是否能接住更高要求，渠道结构是否更健康——这些才是 2026 年真正决定一家酒店能不能穿越周期的判断题。',
      summaryEn: 'If you only look at RevPAR, 2026 feels like an easy year.\nIn the joint June 2026 forecast from CoStar and Tourism Economics, the U.S. hotel industry\' full-year RevPAR growth expectation was revised up to +2.8 percent from the level set at the beginning of the year, with growth expected across all chain scales and luxury tiers leading the way. Business Travel News, in its coverage of the same revision, used similar language: the forecast is improving, but ADR and RevPAR growth may still fail to outrun inflationary pressure. Hotel Dive, in its parallel coverage, was even more direct: better numbers do not equal less pressure, and the gap between luxury and mid-tier, between chains and independents, is being amplified.\nBut the people who actually sit at the operating table of a hotel know that better revenue numbers do not mean easier operations. Whether growth is high quality, whether cash flow is improving in parallel, whether the organization can absorb the higher expectations, whether the channel mix is getting healthier — these are the questions that will actually decide whether a hotel in 2026 can outlast the cycle.',
      firstLine: '如果只看 RevPAR 回暖，2026 年像是一个轻松年份。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-08',
      readTime: 18,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 434,
      type: 'report',
      title: '酒店正在进入AI搜索时代：未来客人如何先问AI，再选择住哪家酒店',
      titleEn: 'Hotels Are Entering the AI Search Era: How Guests Will Ask AI Before Choosing Where to Stay',
      slug: 'hotels-are-entering-ai-search-era-2026-06-07',
      summary: '过去十年，酒店行业一直被一种逻辑主导：客人找酒店，先在OTA或搜索引擎里输入一个宽泛的关键词，比如“杭州酒店”“成都五星酒店”“适合亲子出三亚酒店”，然后在搜索结果里逐家点开看价格、看图、看评论、对比位置，再决定住哪家。这条决策路径的起点是“关键词”，中间是“对比”，终点是“下单”。但最近两年，客人的搜索行为正在悄悄发生一次底层重构——从关键词搜索变成答案搜索。',
      summaryEn: 'For the past decade, the hotel industry has been dominated by one logic. Guests would search for hotels by typing broad keywords like “Hangzhou hotel,” “Chengdu five-star hotel,” or “family-friendly Sanya hotel” into OTAs or search engines. But over the past two years, guest search behavior has been quietly undergoing a fundamental restructuring—from keyword search to answer search.',
      firstLine: '但最近两年，客人的搜索行为正在悄悄发生一次底层重构。越来越多的客人不再输入关键词，而是直接问出一个完整的、自然语言的问题。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-07',
      readTime: 18,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 433,
      type: 'report',
      title: '2026酒店AI搜索可见度报告：未来客人先问AI，再决定住哪家酒店',
      titleEn: '2026 Hotel AI Search Visibility Report: Guests Will Ask AI Before Choosing Where to Stay',
      slug: '2026-hotel-ai-search-visibility-report-2026-06-06',
      summary: '本报告系统分析AI搜索对酒店获客的颠覆性影响：当客人开始用AI询问"周末去杭州住哪里更适合亲子/商务/轻度假"，酒店官网、OTA、地图、点评与社交内容已成为AI判断"是否值得推荐"的信息源。报告拆解AI可见度建设的五类内容、信息完整度/场景匹配度/结构化清晰度/评价一致性/直接预订承接力五大诊断维度，以及单体酒店在AI答案中获取高可见度的实操路径。',
      summaryEn: 'This report systematically analyzes how AI search is reshaping hotel customer acquisition. When guests begin asking AI tools questions like "which Hangzhou hotel is better for a family-friendly weekend," hotel websites, OTA pages, maps, reviews, and social content have become the information sources AI uses to decide whether a hotel deserves recommendation. The report breaks down the five content types needed for AI visibility, five diagnostic dimensions (information completeness, scenario matching, structural clarity, review consistency, direct booking conversion), and practical paths for independent hotels to gain high visibility in AI answers.',
      firstLine: '周五晚上，一个在上海工作的年轻父亲拿起手机，对着他的AI助手说：带孩子去杭州过周末，两晚，不要太贵，最好靠近西湖，要亲子设施友好，帮我找三家酒店。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-06',
      readTime: 18,
      tag: isZh ? '行业报告' : 'Industry Report',
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 432,
      type: 'report',
      title: "2026年酒店价值感消费报告：客人不是不花钱，而是不再为无感体验买单",
      titleEn: "2026 Hotel Value-Driven Consumption Report: Guests Are Not Spending Less, They Are Rejecting Experiences That Offer No Value",
      slug: "hotel-value-driven-consumption-report-2026-06-04",
      summary: "2026年酒店客人的消费逻辑正在变化：他们不是不花钱，而是不再为没有感受、没有记忆点、没有兑现承诺的体验买单。本文从价值感消费、价格失灵、体验溢价与经营动作重构四个角度，分析酒店如何从“降价换入住率”转向“用可感知价值换复购和溢价”。",
      summaryEn: "Hotel guests in 2026 are not simply spending less. They are rejecting experiences that fail to feel valuable, memorable, or consistent with the promise. This report analyzes value-driven consumption, price discount fatigue, experience premiums, and the operating shifts hotels need to rebuild perceived value.",
      firstLine: "2026年已经过半，酒店行业正在经历一场静默的价值重构。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-04",
      readTime: 17,
      tag: isZh ? "行业报告" : "Industry Report",
      tagColor: 'bg-[#3b82f6]',
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 431,
      type: 'report',
      title: "一家存量酒店为什么不能先急着装修",
      titleEn: "Why a Legacy Hotel Should Not Rush Into Renovation",
      slug: "legacy-hotel-renovation-diagnosis-2026-06-03",
      summary: "一家存量酒店OTA评分下滑，业主准备先投800万装修。MBCT诊断发现真正问题并不在墙纸和硬件，而在客群变化、前台识别、服务动线、早餐节奏与销售口径错位。本文用入住第一分钟拆解经营诊断如何避免装修误判，并提供六组发布前复盘指标。",
      summaryEn: "A legacy hotel saw OTA ratings decline and the owner planned to invest RMB 8 million in renovation first. MBCT found the real issue was not wallpaper or hardware, but misalignment across guest segments, front-desk recognition, service flow, breakfast rhythm, and sales messaging. This case study shows why operating diagnosis must come before renovation.",
      firstLine: "很多存量酒店经营下滑时，第一反应都是装修。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-03",
      readTime: 12,
      tag: isZh ? "案例研究" : "Case Study",
      tagColor: "bg-[#f97316]",
      tagTextColor: 'text-white',
      featured: true,
    },
    {
      id: 430,
      type: 'report',
      title: '存量翻牌潮下，酒店改造为什么越来越像一场经营体检',
      titleEn: 'Why Hotel Rebranding in 2026 Is Really an Operating Diagnostic Exercise',
      slug: 'hotel-rebranding-operating-diagnostic-2026-06-02',
      summary: '近2000家酒店在一年内完成品牌变更，但翻牌结果冰火两重天：部分酒店RevPAR立竿见影，部分投入大量装修资金后收入曲线几无变化。本文提出：存量翻牌的本质不是换招牌或翻新装修，而是对客群结构、产品定位、组织能力、渠道组合和回本模型的系统性复盘与重新计算——翻牌应该是一次建立在诊断数据之上的经营体检。',
      summaryEn: 'In 2025-2026, nearly 2,000 midscale+ hotels in China underwent brand changes, yet outcomes vary drastically. Some saw immediate RevPAR gains, while others invested heavily only to find revenue unchanged or below pre-renovation levels. The essence of rebannering is not swapping signs or redecorating, but a systematic recalibration of guest mix, product positioning, organizational capability, channel mix, and ROI model. Treat rebannering as a comprehensive operational health check.',
      firstLine: '根据公开行业研究资料，近年中国中档及以上酒店中，有接近两千家发生了品牌变更，涉及客房近二十万间，同比实现双位数增长。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-02',
      readTime: '15分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: 427,
      type: 'report',
      title: '2026年中国酒店业绿色转型：ESG不是口号，是下一个竞争壁垒',
      titleEn: 'China Hotel Green Transformation 2026: ESG Is Not a Slogan—It\'s the Next Competitive Moat',
      slug: 'china-hotel-esg-green-transformation-2026',
      summary: '2026年，ESG正以肉眼可见的速度变成中国酒店业的准入门槛。万豪、洲际、希尔顿等国际品牌已通过特许经营合同和采购协议将ESG标准向中国市场传导；携程、美团等OTA平台用搜索算法奖励绿色认证。本文基于中国饭店协会370家酒店调研数据、OtelCiro全球报告等多方来源，揭示绿色认证对RevPAR（溢价8-12%）和OTA排名（流量提升15%）的实际影响，并为中小酒店提供MBCT三步行动框架：能源审计、可视化绿色指标、供应链绿色认证。',
      summaryEn: 'In 2026, ESG is rapidly becoming an entry barrier for China hotel industry. Marriott, IHG, Hilton are transmitting ESG standards through franchise contracts. OTA platforms reward green certification with search algorithms. This article, based on 370-hotel survey data and multiple authoritative sources, reveals green certification impact on RevPAR (8-12% premium) and OTA ranking (15% traffic boost), with MBCT three-step framework: energy audit, visible green metrics, supply chain green certification.',
      firstLine: '如果你最近和酒店圈的同行聊过天，大概率会听到一个关键词反复出现——ESG。三年前，这还是少数国际品牌公关稿里的概念词；今天，它正以肉眼可见的速度变成中国酒店业的准入门槛。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-31',
      readTime: '15分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: 426,
      type: 'report',
      title: '当AI开始"读懂"住客：2026年酒店个性化服务的技术边界与人文底线',
      titleEn: 'When AI Begins to "Understand" Guests: The Technological Frontier and Humanistic Boundary of Hotel Personalization in 2026',
      slug: 'ai-understands-guests-2026',
      summary: '2026年，一组数据正在重塑酒店行业的认知地图：98%的酒店业主已将AI融入业务运营，但仅有32%的业主将AI部署到了大多数业务环节；74%的旅行者渴望个性化服务体验，但46%的酒店决策者将数据隐私与安全列为AI部署的首要障碍（Wyndham Hotels & Resorts 2026 酒店业主趋势报告；Amadeus Travel Dreams 2026报告）。',
      summaryEn: 'In 2026, a set of data points is reshaping the cognitive map of the hotel industry: 98% of hotel owners have incorporated AI into their business operations, yet only 32% have deployed it across most operational areas.',
      firstLine: '2026年，一组数据正在重塑酒店行业的认知地图：98%的酒店业主已将AI融入业务运营，但仅有32%的业主将AI部署到了大多数业务环节；74%的旅行者渴望个性化服务体验，但46%的酒店决策者将数据隐私与安全列为AI部署的首要障碍（Wyndham Hotels & Resorts 2026 酒店业主趋势报告；Amadeus Travel Dreams 2026报告）。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-30',
      readTime: '15分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 424,
      type: 'report',
      title: '2026年中国酒店业人力成本结构重塑：从"人房比"到"效能比"的管理转型',
      titleEn: '2026 China Hotel Industry Labor Cost Restructuring: From "Staff-to-Room Ratio" to "Efficiency Ratio"',
      slug: 'hotel-labor-cost-restructuring-2026',
      summary: '2026年中国酒店业正经历K型分化：高端酒店人力成本持续攀升，经济型酒店加速压缩人员配置。本文提出"效能比"概念替代传统"人房比"，从行业数据、典型案例、结构性建议三个维度，为酒店管理者和投资人提供人力成本优化的新思路。',
      summaryEn: 'China hotel industry in 2026 is experiencing K-shaped divergence: rising labor costs in luxury hotels vs. aggressive staff reduction in budget segment. This article introduces "efficiency ratio" to replace traditional "staff-to-room ratio", providing new perspectives on labor cost optimization.',
      firstLine: '2026年的中国酒店业，正站在一个关键的历史分水岭上。从供给端看，近1,873万间客房的存量规模已形成竞争红海；从需求端看，消费分级加剧，K型分化已成定局。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-28',
      readTime: '15分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 423,
      type: 'report',
      title: '2026年中国酒店投资白皮书解读:40万+酒店如何在贴身肉博中突围',
      titleEn: '2026 China Hotel Investment White Paper: How 400,000+ Hotels Break Through Brutal Competition',
      slug: '2026-china-hotel-investment-whitepaper-interpretation',
      summary: '2026年中国酒店业正经历前所未有的深度调整期。全国住宿设施总量已突破40万家,供需失衡已成行业新常态。本文深度解读《2026年中国酒店投资白皮书》核心洞察,为投资人和运营管理者提供三条突围路径。',
      summaryEn: 'China hotel industry is experiencing unprecedented adjustment. With 400,000+ properties nationwide, supply-demand imbalance is the new normal. This article provides three breakthrough paths for investors and operators.',
      firstLine: '中国酒店业正经历前所未有的深度调整期。据中国饭店协会2026年初统计,全国住宿设施总量已突破40万家,标准化酒店房间数超过2000万间,而全国平均客房入住率仅为55%-65%,供需失衡已成行业新常态。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-26',
      readTime: '16分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 422,
      type: 'report',
      title: '数字化进入实战兑现期:2026年中国酒店业技术投入的三大转变',
      titleEn: 'Digitalization Hits the Implementation Phase: Three Major Shifts in Hotel Technology Investment in 2026',
      slug: 'digitalization-three-shifts-2026-05-25',
      summary: '2024年至2026年是中国酒店业数字化进程中最具转折意义的三年。70.4%的酒店计划增加技术投入,领先型企业意愿91.7% vs 中小企业63.3%。三大转变:从硬件驱动到数据驱动,从部门应用到全域协同,从大型酒店优先到中腰部补课。',
      firstLine: '2024年至2026年,是中国酒店业数字化进程中最具转折意义的三年。进入2025年,随着PMS系统普及率突破85%、OTA平台数据接口标准化程度提升,以及生成式AI在客户服务场景的批量落地,数字化开始从"配置题"真正转向"经营题"。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-25',
      readTime: '12分钟',
      tag: '行业分析',
      featured: false,
    },
    {
      id: 421,
      type: 'report',
      title: '40万家酒店贴身肉博,下沉市场的投资逻辑为什么和一二线完全不同',
      titleEn: '400,000 Hotels in Brutal Competition: Why the Investment Logic of Lower-Tier Markets is Completely Different',
      slug: '40wan-hotel-sinking-market-investment-2026-05-24',
      summary: '2025年,全国酒店数量突破40.48万家,三线及以下城市新增供给占比超过55%。本文结合《2026中国酒店投资白皮书》核心洞察,系统拆解三四线城市投资框架、头部集团下沉失败根因,以及可跑通的本地化运营模型。',
      firstLine: '2025年,全国酒店数量突破40.48万家,客房规模达1979万间。这个数字意味着中国每3300人就拥有一家酒店,意味着行业已经从前些年的增量时代,全面转入存量厮杀的贴身肉搏。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-24',
      readTime: '25分钟',
      tag: '行业分析',
      featured: false,
    },
    {
      id: 420,
      type: 'report',
      title: '2026年酒店开业爬坡期:不是流量不够,而是筹备顺序错了',
      titleEn: 'Hotel Ramp-Up in 2026: The Problem Is Not Traffic, but the Wrong Pre-Opening Sequence',
      slug: 'hotel-ramp-up-sequence-2026-05-23',
      summary: '新酒店开业后表现不稳,根因通常不是单纯缺流量,而是筹开动作先后失衡。本文系统拆解新酒店开业爬坡期的常见误判、被动局面形成的底层逻辑,以及一套经过实战验证的正确筹备顺序。',
      firstLine: '每一年,都有大量新酒店带着充足的预算、精心设计的装修、周密的营销计划开业。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-23',
      readTime: '20分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 414,
      type: 'report',
      title: '存量时代,酒店增长不靠多开店,而靠把单店模型做厚',
      titleEn: 'In the Inventory Era, Hotel Growth Relies Not on Opening More Stores, But on Thickening the Single-Store Model',
      slug: 'inventory-era-hotel-growth-2026-05-21',
      summary: '2026年,中国酒店业正站在一个前所未有的十字路口。行业规模持续膨胀,但无数业主的真实体感是:酒店越开越多,利润却没有同步变厚。本文深度分析存量时代酒店增长的核心逻辑--把单店模型做厚。',
      firstLine: '2026年,中国酒店业正站在一个前所未有的十字路口。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-21',
      readTime: '15分钟',
      tag: '趋势分析',
      featured: false,
    },
    {
      id: 409,
      type: 'report',
      title: '2026年Q2酒店行业趋势报告:存量竞争深水区,谁在突围?',
      titleEn: '2026 Q2 Hotel Industry Trend Report: Who Is Breaking Through in the Deep Water Zone of Inventory Competition?',
      slug: 'q2-hotel-industry-trends-2026',
      summary: '2026年Q2全国酒店市场景气指数-9,较Q1回升12点。存量改造成主战场:69.3%存量酒店运营超5年,改造项目占新开业45%。三大趋势:品牌连锁化加速、资产价值重构、资产证券化加速。',
      firstLine: '2026年第二季度,全国酒店市场景气指数录得-9,较上季度回升12个指数点,市场信心正在缓慢修复。',
      author: 'MBCT秘书处',
      date: '2026-05-14',
      readTime: '15分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 319,
      type: 'report',
      title: '下沉市场连锁化率19%,单体酒店出路在哪?',
      titleEn: 'Lower-Tier Market Chain Penetration Rate at 19%: Where Is the Way Out for Independent Hotels?',
      slug: 'downmarket-hotel-chain-19-percent',
      summary: '下沉市场酒店连锁化率仅19%,但增速连续三年超30%。五年内可能突破35%,15万+单体酒店面临抉择。四条破局路径:主动连锁、特色化经营、本地联盟、精细化运营。',
      firstLine: '当你看到"下沉市场酒店连锁化率仅为19%"这个数据时,你会想到什么?',
      author: '迈创兄弟',
      date: '2026-05-05',
      readTime: '18分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 318,
      type: 'report',
      title: '2026青年旅居趋势报告:"即时满足"时代下的酒店业新机遇',
      titleEn: '2026 Youth Travel Trend Report: New Opportunities for Hospitality in the "Instant Gratification" Era',
      slug: 'youth-travel-trends-2026',
      summary: '74%的青年旅客习惯3天内临时预订,70%曾有当天订酒店经历。"疗愈型"住宿需求年增长率达128%。青年旅客对"情绪价值"的支付意愿高于其他年龄段23%。',
      firstLine: '2026年,青年消费群体已成为中国酒店业最具增长潜力的细分市场。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '15分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 311,
      type: 'report',
      title: '2026年中国酒店连锁化率深度报告:41.8%背后的结构性机会',
      titleEn: '2026 China Hotel Chain Penetration Rate Deep Report: Structural Opportunities Behind 41.8%',
      slug: 'hotel-chain-rate-2026',
      summary: '2025年中国酒店业连锁化率41.80%,中档酒店连锁化率高达58.05%,经济型仅30.86%。一线城市59.66%逼近天花板,三四线35.34%成最大增量市场。',
      firstLine: '2025年中国酒店业连锁化率达到41.80%,客房连锁化率同样为41.80%,门店连锁化率为28.37%。',
      author: '迈创兄弟',
      date: '2026-04-28',
      readTime: '18分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 101,
      type: 'report',
      title: '2026年中国酒店业数字化转型深水区攻坚报告',
      titleEn: '2026 China Hotel Industry Digital Transformation Deep Water Zone Assault Report',
      slug: 'digital-transformation-2026',
      summary: '中国酒店业的数字化转型已进入深水区。本报告识别数字化转型的阶段性特征与核心瓶颈,提出数据中台建设的实践路径、AI赋能运营决策的场景化策略。',
      firstLine: '中国酒店业的数字化转型可以划分为三个明显阶段,每个阶段都有其特定的任务与挑战。',
      author: '迈创兄弟',
      date: '2026-04-16',
      readTime: '22分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 102,
      type: 'report',
      title: '2026年中国高端酒店存量改造投资分析报告',
      titleEn: '2026 China Premium Hotel Inventory Renovation Investment Analysis Report',
      slug: '2026年中国高端酒店存量改造投资分析报告',
      summary: '存量改造是未来十年酒店行业的主战场,改造路径,投资测算、案例复盘完整指南。',
      firstLine: '增量时代终结,存量时代开启。中国酒店行业正在经历一场深刻的大洗牌。',
      author: '迈创兄弟',
      date: '2026-04-14',
      readTime: '22分钟',
      tag: '行业报告',
    },
    {
      id: 103,
      type: 'report',
      title: '存量改造:老酒店如何焕发新生',
      titleEn: 'Inventory Renovation: How Old Hotels Can Rejuvenate',
      slug: '存量改造:老酒店如何焕发新生',
      summary: '潮流化产品升级、情绪价值传递、轻资产模式、翻牌改造实操案例--老酒店翻红的完整作战手册。',
      firstLine: '上周去长沙出差,住进一家老牌酒店。大堂还是90年代的装修,地毯灰扑扑的,前台小姐姐穿着不合身的制服...',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '30分钟',
      tag: '行业报告',
    },
    {
      id: 104,
      type: 'report',
      title: '酒店会员体系:从积分到生态',
      titleEn: 'Hotel Membership System: From Points to Ecosystem',
      slug: '酒店会员体系:从积分到生态',
      summary: '私域流量建设、积分体系优化、等级权益设计、复购率提升策略、异业联盟--从0到1搭建会员生态。',
      firstLine: '我认识一位酒店老板,他的酒店位置一般,设施一般,价格也不便宜。但他的会员复购率达到了惊人的70%。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '28分钟',
      tag: '行业报告',
    },
    {
      id: 105,
      type: 'report',
      title: '文旅融合:酒店的场景革命',
      titleEn: 'Culture-Tourism Integration: The Scene Revolution of Hotels',
      slug: '文旅融合:酒店的场景革命',
      summary: '沉浸式体验设计、剧本酒店、目的地营销、文化IP植入、周边配套开发--文化搭台、产品唱戏的实战方法论。',
      firstLine: '去年去成都,我特意去了一家网红酒店。不是为了住,而是为了"玩"。这家酒店把整个大堂做成了一个沉浸式剧本体验空间...',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '35分钟',
      tag: '行业报告',
    },
    {
      id: 106,
      type: 'report',
      title: '选址密码:好位置的科学评估',
      titleEn: 'Location Code: Scientific Evaluation of Prime Locations',
      slug: '选址密码:好位置的科学评估',
      summary: '商圈分析方法、人流热力图解读、竞争半径评估、坪效预测模型、市场容量测算--用数据选对位置。',
      firstLine: '我见过太多酒店倒在"选址"上。有人觉得,找个人流量大的地方就行;有人觉得,跟着商业综合体走准没错...',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '32分钟',
      tag: '行业报告',
    },
    {
      id: 107,
      type: 'report',
      title: '民宿进化论:从标准化到特色化',
      titleEn: 'Homestay Evolution: From Standardization to Specialization',
      slug: '民宿进化论:从标准化到特色化',
      summary: '非标住宿崛起、精品民宿设计趋势、乡村民宿发展、差异化竞争策略--民宿下半场的生存指南。',
      firstLine: '十年前,民宿还是个新鲜词。那时候开民宿的都是文艺青年,情怀满满,但口袋空空...',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '22分钟',
      tag: '行业报告',
    },
    {
      id: 108,
      type: 'report',
      title: '酒店资产价值重估与品牌升级路径研究',
      titleEn: 'Research on Hotel Asset Value Reassessment and Brand Upgrade Paths',
      slug: '酒店资产价值重估与品牌升级路径研究',
      summary: '存量时代,酒店如何通过品牌升级实现资产价值重估?三种品牌升级路径深度剖析。',
      firstLine: '2024年深秋,我受邀前往西南某省会城市,诊断一家开业十五年的国际品牌五星级酒店。',
      author: '迈创兄弟',
      date: '2026-04-14',
      readTime: '15分钟',
      tag: '行业报告',
    },
    {
      id: 109,
      type: 'report',
      title: '动态定价与收益管理系统对酒店GOP影响研究',
      titleEn: 'Research on the Impact of Dynamic Pricing and Revenue Management Systems on Hotel GOP',
      slug: '动态定价与收益管理系统对酒店GOP影响研究',
      summary: 'AI动态定价如何提升酒店GOP?收益管理系统的原理、效果与实操指南。',
      firstLine: '收益管理是酒店运营的核心,但传统收益管理依赖经验,AI正在改变这一切。',
      author: '迈创兄弟',
      date: '2026-04-14',
      readTime: '18分钟',
      tag: '行业报告',
    },
    {
      id: 110,
      type: 'report',
      title: '中国银发经济背景下高端酒店投资机遇白皮书',
      titleEn: 'White Paper on Premium Hotel Investment Opportunities in the Context of China\'s Silver Economy',
      slug: '中国银发经济背景下高端酒店投资机遇白皮书-深度版',
      summary: '银发经济万亿市场,酒店如何抓住3-5年窗口期?需求画像、供给错配,投资策略全面解析。',
      firstLine: '中国正在经历人类历史上规模最大、速度最快的人口老龄化进程。',
      author: '迈创兄弟',
      date: '2026-04-14',
      readTime: '20分钟',
      tag: '行业报告',
    },
    {
      id: 111,
      type: 'report',
      title: '中国高端酒店正在"变慢":一场针对效率焦虑的反叛',
      titleEn: 'China\'s Premium Hotels Are "Slowing Down": A Rebellion Against Efficiency Anxiety',
      slug: 'human-touch-service-revolution',
      summary: '当酒店业卷完速度、硬件、价格,下一个战场在哪里?"人感服务"正在成为中国高端酒店的新赛道,从东方本源到当代诠释,从投资回报到失败教训的深度行业报告。',
      firstLine: '凌晨两点,你落地一座陌生的城市。',
      author: '迈创兄弟',
      date: '2026-04-20',
      readTime: '15分钟',
      tag: '行业报告',
    },
    {
      id: 112,
      type: 'report',
      title: '40万+酒店贴身肉搏:2026年存量争夺战的七个结构性变量',
      titleEn: '400,000+ Hotels in Brutal Combat: Seven Structural Variables in the 2026 Inventory Battle',
      slug: 'hotel-market-2026-seven-variables',
      summary: '40万+酒店,1,979万间客房,存量市场足够大。但机会不是分蛋糕,而是重新切蛋糕。七个结构性变量分析,三条被忽视的投资方向。',
      firstLine: '2026年4月,中国酒店行业有两组数据同时发布:全国酒店数40.48万家,客房数1,979万间。',
      author: '迈创兄弟',
      date: '2026-04-22',
      readTime: '20分钟',
      tag: '行业报告',
    },
    {
      id: 316,
      type: 'report',
      title: '本周酒店业5条热点速递(4.25-5.2)',
      titleEn: 'Five Hotel Industry Hot Updates This Week (4.25-5.2)',
      slug: 'hotel-industry-weekly-0503',
      summary: '五一预订数据出炉确认品质化趋势;酒店人房比优化成行业热点;电竞酒店监管收紧;OTA佣金博弈持续。',
      firstLine: 'MBCT机构每周汇总酒店业热点。',
      author: 'MBCT机构研究中心',
      date: '2026-05-03',
      readTime: '5分钟',
      tag: '行业报告',
    },
    {
      id: 425,
      type: 'report',
      title: '2026年中国酒店业并购潮：谁在买，谁在卖，中小业主该怎么看？',
      titleEn: '2026 China Hotel M&A Wave: Who\'s Buying, Who\'s Selling, and What Should Small Hotel Owners Do?',
      slug: '2026-china-hotel-ma-wave',
      summary: '2026年中国酒店业正在经历一场前所未有的并购潮：国际巨头剥离非核心资产、国资平台整合地方酒店、连锁品牌并购中小单体。本文分析趋势背后的逻辑与中小业主的应对策略。',
      firstLine: '2026年上半年，中国酒店业并购交易额已突破500亿元，超过2024年全年总和。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-05-29',
      readTime: '12分钟',
      tag: '行业报告',
    },
  ]

  // 案例研究 - 2026-04-22新增1篇
  const cases = [
    {
      id: 470,
      type: "case",
      title: "没有 IT 团队的酒店,为什么更需要一套 AI 可读的信息运营机制?",
      titleEn: "Why Hotels Without IT Teams Need an AI-Readable Information Operations System",
      slug: "hotel-without-it-team-needs-ai-readable-information-operations-2026-06-27",
      summary: '2026 年 3 月,华东某中端商务酒店总经理在季度复盘会上翻到一组数据:过去六个月,携程、美团带来的订单占比稳定在 62%,但直接通过搜索引擎进入酒店官网(一个三年前搭建的单页)并完成预订的订单,从月均 11 单降到了 2 单。',
      summaryEn: 'October 2025. A mid-scale business hotel in East China — 178 rooms, two meeting rooms, three blocks from the convention center — watched weekday occupancy slide to 47%, an 11-point drop year-over-year',
      firstLine: '2026 年 3 月,华东某中端商务酒店总经理在季度复盘会上翻到一组数据:过去六个月,携程、美团带来的订单占比稳定在 62%,但直接通过搜索引擎进入酒店官网(一个三年前搭建的单页)并完成预订的订单,从月均 11 单降到了 2 单。',
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-27",
      readTime: 14,
      tag: "案例研究",
      tagColor: "bg-[#dc2626]",
      tagTextColor: "text-white",
      featured: true,
    },


    {
      id: 449,
      type: "case",
      title: "一家度假酒店为什么好评不少,却没有被系统推荐给真正合适的客人",
      titleEn: "Why a Resort with Good Reviews Still Fails to Be Recommended to the Right Guests",
      slug: "hotel-good-reviews-not-recommended-2026-06-20",
      summary: "有一家度假酒店，OTA 评分 4.6，点评数量过千，差评比同行少六成。老板觉得数据还不错。直到有一天做诊断，把过去六个月的经营数据摊开：淡季出租率只有四成出头，高价值客群占比不足两成，复购率低于百分之十五，官方私域流量几乎没有起色。",
      summaryEn: "A resort hotel scores 4.6 on OTA platforms, with over a thousand reviews and sixty percent fewer negative comments than peers. The owner considers the data healthy. Until a diagnostic review lays out ",
      firstLine: "有一家度假酒店，OTA 评分 4.6，点评数量过千，差评比同行少六成。老板觉得数据还不错。直到有一天做诊断，把过去六个月的经营数据摊开：淡季出租率只有四成出头，高价值客群占比不足两成，复购率低于百分之十五，官方私域流量几乎没有起色。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-20",
      readTime: 14,
      tag: "案例研究",
      tagColor: "bg-[#dc2626]",
      tagTextColor: "text-white",
      featured: true,
    },

    {
      id: 445,
      type: "case",
      title: "金陵饭店:Q1 罕见下滑样本,一家\"单旗舰+国资+高星\"老牌的结构性死局",
      titleEn: "Jinling Hotel: A Rare Q1 Decline Case and the Structural Deadlock of an Old High-Star Flagship",
      slug: "jinling-hotel-q1-2026-decline-structural-case-2026-06-17",
      summary: "2026 Q1 中国酒店业财报出齐,5 家头部 4 家普涨、1 家罕见下滑——金陵饭店 Q1 营收同比 -7.6%(数据来源:迈点研究院《2026 一季度酒店集团财务分析报告》)。这家 A 股上市国资控股高星老牌、总部位于南京、单旗舰 + 少量副牌模式,是 5 家里罕见下滑的样本。",
      summaryEn: "In China's Q1 2026 hotel financials, four of the five sampled leading companies recorded growth, while one showed a rare decline: Jinling Hotel's Q1 revenue fell 7.6% year on year (Source: Meadin Research Institute, *Q1 2026 Hotel Group Fin",
      firstLine: "2026 Q1 中国酒店业财报出齐,5 家头部 4 家普涨、1 家罕见下滑——金陵饭店 Q1 营收同比 -7.6%(数据来源:迈点研究院《2026 一季度酒店集团财务分析报告》)。这家 A 股上市国资控股高星老牌、总部位于南京、单旗舰 + 少量副牌模式,是 5 家里罕见下滑的样本。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-17",
      readTime: 18,
      tag: "案例研究",
      tagColor: "bg-[#dc2626]",
      tagTextColor: "text-white",
      featured: true,
    },
    {
      id: 426,
      type: 'case',
      title: '从亏损到盈利:一家县城单体酒店的18个月翻牌实录',
      slug: 'county-hotel-18-month-turnaround-2026',
      summary: '华中地区某县城商务酒店,60间客房,入住率长期低于45%。MBCT介入后,18个月实现入住率从45%到68%、RevPAR翻倍、累计回正。',
      firstLine: '2024年初,华中地区某县城。老周在这座县城经营一家商务酒店已经五年了。60间客房,开业之初也曾热闹过一阵,可如今情况每况愈下。',
      author: 'MBCT',
      date: '2026-05-27',
      readTime: '18分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 404,
      type: 'case',
      title: '从亏损80万到盈利120万:杭州中端酒店18个月成本重构实录',
      titleEn: 'From Losing 800K to Earning 1.2M: Hangzhou Mid-Scale Hotel 18-Month Cost Restructuring Record',
      slug: 'hangzhou-hotel-cost-restructuring-18-months',
      summary: '杭州某中端酒店120间客房,2019年开业,2024年亏损80万,2026年盈利120万。18个月里,它没有做大规模翻新,没有更换品牌,只是系统性地重构了成本结构。',
      firstLine: '2026年酒店行业进入存量竞争时代,成本压力成为悬在每一家酒店头上的达摩克利斯之剑。',
      author: 'MBCT迈创兄弟',
      date: '2026-05-13',
      readTime: '12分钟',
      tag: '案例研究',
      featured: true,
      hot: true,
    },

    {
      id: 403,
      type: 'case',
      title: '当"老酒店"遇上"新需求":21天模块化焕新实录',
      titleEn: 'When "Old Hotel" Meets "New Demand": 21-Day Modular Renewal Record',
      slug: 'old-hotel-new-demand-renovation',
      summary: '面对存量时代的市场变局,运营超过二十年的老旧酒店面临定位失焦、客群流失与收益下滑的多重困境。本文通过MBCT实际参与的一座三十年物业焕新全过程,呈现从"定位重塑"到"21天模块化改造"的完整路径。',
      firstLine: '第一次走进华泰饭店,是2024年的一个雨天下午。大堂的水晶灯亮着有些发黄的光,旋转楼梯的扶手锈迹斑斑,墙上挂着的还是十年前的风景画。',
      author: '迈创兄弟',
      date: '2026-05-06',
      readTime: '20分钟',
      tag: '案例研究',
      featured: true,
    },

    {
      id: 401,
      type: 'case',
      title: '情绪消费浪潮下,酒店如何成为年轻人的"精神快充站"',
      titleEn: 'Under the Wave of Emotional Consumption, How Can Hotels Become Young People\'s "Spiritual Fast Charging Stations"',
      slug: 'emotional-consumption-hotel-spirit-charging',
      summary: '2026年情绪消费市场规模预计达2.72万亿元。三个实战案例:精品酒店"疗愈系"产品溢价47%、连锁品牌"社交型"大堂年轻客群占比从34%升至51%、度假酒店"周五微度假"套餐复购率54%。',
      firstLine: '2026年,中国情绪消费市场规模预计将达到2.72万亿元,同比增长41.3%。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '15分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 315,
      title: '酒店投资三大伪热点避坑指南',
      titleEn: 'Hotel Investment: Three False Hotspots to Avoid',
      slug: 'hotel-investor-pitfalls-guide',
      summary: '下沉市场翻番增长、电竞酒店合规化红利、OTA高佣金认命论--三个看起来很美的伪热点,实际分析后发现都是坑。',
      firstLine: '最近跟几位投资人喝茶,聊到今年的新项目,气氛有点微妙。',
      author: 'MBCT机构研究中心',
      date: '2026-05-02',
      readTime: '10分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 312,
      type: 'case',
      title: '三十年单体老酒店重生记:180天如何让RevPAR翻番',
      titleEn: 'The Revival Story of a 30-Year Independent Hotel: How to Double RevPAR in 180 Days',
      slug: 'old-hotel-revival-180-days',
      summary: '华中某四线城市三十年四星级酒店,入住率38%→62%,ADR 170元→218元,RevPAR 65元→138元(+112%)。模块化改造、文化唤醒、运营重塑的完整复盘。',
      firstLine: '这是一个真实的故事。华中地区某四线城市,1996年开业的老牌四星级酒店,三十年历史,曾经是当地最好的酒店。',
      author: '迈创兄弟',
      date: '2026-04-28',
      readTime: '20分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 201,
      type: 'case',
      title: '从亏损到溢价:一家区域酒店的体验重塑之路',
      titleEn: 'From Loss to Premium: A Regional Hotel\'s Experience Remodeling Journey',
      slug: 'hotel-turnaround-case',
      summary: '2024年初,我接到了一位老朋友的电话。他在西南地区经营着一家开业十二年的商务酒店,曾经是当地的地标,但近年来陷入了严重的经营困境。',
      firstLine: '2024年初,我接到了一位老朋友的电话。',
      author: '迈创兄弟',
      date: '2026-04-16',
      readTime: '20分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 202,
      type: 'case',
      title: '存量新生:老酒店改造的精准手术',
      titleEn: 'Inventory Rebirth: Precision Surgery for Old Hotel Renovation',
      slug: '存量新生:老酒店改造的精准手术',
      summary: '存量改造三步法:诊断→定位→手术。改什么比怎么改更重要,轻硬件重体验的实战分享。',
      firstLine: '做酒店这行这么多年,我见过太多老板一拍脑袋就要改造。翻新的本质不是硬件升级,而是产品重新定位。',
      author: '迈创兄弟',
      date: '2026-04-08',
      readTime: '18分钟',
      tag: '案例研究',
    },
    {
      id: 203,
      type: 'case',
      title: '智慧酒店管理:效率革命的下一站',
      titleEn: 'Smart Hotel Management: The Next Stop of the Efficiency Revolution',
      slug: '智慧酒店管理:效率革命的下一站',
      summary: 'AI赋能管理:收益管理、排班优化、能耗控制。餐饮智能化、亲子数字化体验,智慧酒店升级实战。',
      firstLine: '老王凌晨三点被电话吵醒,客房马桶堵了。他一边处理一边想:什么时候才能不用这么累?',
      author: '迈创兄弟',
      date: '2026-04-08',
      readTime: '20分钟',
      tag: '案例研究',
    },
    {
      id: 204,
      type: 'case',
      title: '未来酒店:物质到精神的消费升级',
      titleEn: 'Future Hotels: Consumption Upgrade from Material to Spiritual',
      slug: '未来酒店:物质到精神的消费升级',
      summary: '从物质需求到精神需求,客人需求五次跃迁。情绪价值四层次:认同感、归属感、仪式感、心动时刻。',
      firstLine: '我住过一家酒店,退房的时候,前台小姑娘说了一句话,让我记到现在。',
      author: '迈创兄弟',
      date: '2026-04-08',
      readTime: '16分钟',
      tag: '案例研究',
    },
    {
      id: 205,
      type: 'case',
      title: '酒店二百年:从驿站到精神港湾',
      titleEn: 'Two Hundred Years of Hotels: From Post Houses to Spiritual Harbors',
      slug: '酒店二百年:从驿站到精神港湾',
      summary: '1800年代到2020后的酒店演变史,每个时代的核心需求与代表事件,抛问题收尾启发思考。',
      firstLine: '1821年,伦敦一家小旅馆贴出一张告示:本店提供干净床铺、热洗澡水和一杯黑咖啡。这是酒店业的起点吗?',
      author: '迈创兄弟',
      date: '2026-04-08',
      readTime: '22分钟',
      tag: '案例研究',
    },
    {
      id: 206,
      type: 'case',
      title: '未来五千天的酒店:科技与人文的交汇点',
      titleEn: 'Hotels in the Next 5,000 Days: The Intersection of Technology and Humanity',
      slug: '未来五千天的酒店:科技与人文的交汇点',
      summary: '凯文·凯利式前瞻思考:AI渗透、空间重构、服务重生、数据即体验、酒店作为社区中心。',
      firstLine: '凯文·凯利说:未来5000天内,世界上至少有一样东西会变得非常便宜--真实。我想说:温度会变得非常昂贵。',
      author: '迈创兄弟',
      date: '2026-04-08',
      readTime: '18分钟',
      tag: '案例研究',
    },
    {
      id: 207,
      type: 'case',
      title: '一家酒店如何用"人感管家"让你后悔只订一晚',
      titleEn: 'How One Hotel Makes You Regret Booking Only One Night with "Human-Touch Butler" Service',
      slug: 'human-touch-butler-case',
      summary: '好的服务,是"看不见的服务"。从进门那一刻开始,这家酒店如何用东方待客之道,创造让人"后悔只订一晚"的体验?',
      firstLine: '三年后,你再次踏入那家酒店。还没等你走到门口,门童已经迎了上来:"周先生,好久不见。"',
      author: '迈创兄弟',
      date: '2026-04-20',
      readTime: '14分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 204,
      type: 'case',
      title: 'AI接管预订之后:一家高端酒店的72小时服务重构实验',
      titleEn: 'After AI Takes Over Bookings: A 72-Hour Service Restructuring Experiment at a Premium Hotel',
      slug: 'ai-hotel-service-restructure-72h',
      summary: 'AI上线后效率提升但复购率下降12%--一家高端酒店如何在72小时内完成服务重构,建立AI+人感双轨制,实现复购率回升9个百分点。',
      firstLine: '2026年3月,国内某高端酒店营销总监遇到了一个诡异的现象:AI预订系统上线第一周,转化率提升了8%。',
      author: '迈创兄弟',
      date: '2026-04-22',
      readTime: '15分钟',
      tag: '案例研究',
    },



      {
        id: 415,
        title: '酒店店总最难带的,不是新人,而是"知道很多却不愿协同的人"',
        titleEn: "The Hardest Hotel GM Challenge: Not New Hires, But 'Know-It-Alls' Who Won't Collaborate",
        slug: 'hotel-general-manager-team-building-2026-05-22',
        date: '2026-05-22',
        readTime: '8分钟',
        tag: '团队建设',
        tagColor: 'bg-[#10b981]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: false,
      },
      {
        id: 416,
        title: '酒店降本最危险的动作,是把"短期省钱"当成"长期效率"',
        titleEn: 'The Most Dangerous Cost-Cutting Mistake: Treating Short-Term Savings as Long-Term Efficiency',
        slug: 'hotel-cost-optimization-dangers-2026-05-22',
        date: '2026-05-22',
        readTime: '8分钟',
        tag: '成本优化',
        tagColor: 'bg-[#6366f1]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: false,
      },
      {
        id: 417,
        title: '酒店投资最怕的，不是市场冷，而是"每一项都差不多"',
        titleEn: "Hotel Investment's Biggest Fear: Not a Cold Market, But 'Everything Is Just Average'",
        slug: 'hotel-investment-average-risk-2026-05-22',
        date: '2026-05-22',
        readTime: '8分钟',
        tag: '投资决策',
        tagColor: 'bg-[#f59e0b]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: false,
      },
      {
        id: 418,
        title: '酒店营销越来越贵,问题往往不在预算,而在流量结构',
        titleEn: 'Hotel Marketing Costs Keep Climbing - The Problem Is Rarely the Budget, It\'s the Traffic Structure',
        slug: 'hotel-marketing-traffic-structure-2026-05-22',
        date: '2026-05-22',
        readTime: '20分钟',
        tag: '营销策略',
        tagColor: 'bg-[#ec4899]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: false,
      },
      {
        id: 419,
        title: '2026年酒店投资正在告别\"规模冲动\",进入\"精算时代\"',
        titleEn: '2026 Hotel Investment: Bidding Farewell to \"Scale Impulse,\" Entering the Era of \"Precision Calculation\"',
        slug: '2026-hotel-investment-precision-era-2026-05-22',
        date: '2026-05-22',
        readTime: '20分钟',
        tag: '趋势分析',
        tagColor: 'bg-[#f97316]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: true,
      },
      {
        id: 425,
        title: '酒店数字化总是落不了地,问题往往不在系统,而在管理动作没接上',
        titleEn: 'Hotel Digitalization Often Fails Not Because of the System, but Because Management Actions Never Catch Up',
        slug: 'hotel-digitalization-management-2026-05-23',
        date: '2026-05-23',
        readTime: '10分钟',
        tag: '数字平台',
        tagColor: 'bg-[#8b5cf6]',
        author: '迈创兄弟C&T（MarvelBros C&T）',
        featured: false,
      },
      {
      id: 416,
      type: 'case',
      title: '一家老酒店想翻牌,真正该先改的不是门头',
      titleEn: 'Before Rebranding an Older Hotel, the First Thing to Fix Is Not the Signboard',
      slug: 'hotel-rebranding-diagnostic-case-2026-06-12',
      summary: '本文以悦途酒店脱敏虚拟案例为基础,系统分析老酒店翻牌前必须完成的四项诊断:资产、客群、渠道、现金流,并对比三种翻牌路径的投资回收。',
      summaryEn: 'Based on an anonymized fictional case study, this article systematically analyzes the four diagnostics—asset, guest profile, channel, and cash flow—that every older hotel must complete before rebranding, and compares the payback of three rebranding paths.',
      firstLine: "过去两年,中国酒店行业的翻牌潮一直在加速。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-12',
      category: 'case-study',
      tag: '案例研究',
      readTime: 18,
      featured: false,
      image: '',
    },
    {
      id: 450,
      type: 'article',
      title: '酒店进入AI智能体协同时代',
      titleEn: 'Hotels Enter the AI Agent Collaboration Era',
      slug: 'hotel-ai-agent-collaboration-2026-06-22',
      summary: '未来一次企业员工出差,不再先打开OTA,而是让企业AI助手在预算、位置、发票、协议价、取消政策和企业偏好之间自动推荐酒店。本文从入口、竞争内核、链条重组三个层面分析,给出酒店失去触发率的5个断点和6个准备动作。',
      summaryEn: 'A future corporate trip will no longer start with an OTA. An enterprise AI assistant will filter hotels automatically across budget, location, invoicing, corporate rates, cancellation policy, and company preferences. This article analyzes the gateway shift, competition core, and chain reassembly, then delivers five trigger-loss break points and six preparation moves.',
      firstLine: '设想一次再普通不过的企业出差。员工不再打开任何一家OTA,不再在十几个房型之间反复比价,只对企业AI助手说一句:下周三去上海,预算800以内,靠近陆家嘴,要能开专票。',
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-22',
      readTime: 18,
      tag: isZh ? '行业分析' : 'Industry Analysis',
      tagColor: 'bg-[#f97316]',
      tagTextColor: 'text-white',
      featured: true,
    },
        {
      id: 462,
      type: "report",
      title: "2026酒店直订承接力报告：AI 把人送到门口，你怎么接",
      titleEn: "2026 Hotel Direct Booking Conversion Capability Report: AI Brings Guests to the Door — How Will You Welcome Them In?",
      slug: "hotel-direct-booking-conversion-capability-2026",
      summary: "酒店在 AI 搜索中被推荐了，不等于被预订了。酒店数字化真正的卡点，已经从\"能不能被搜到\"变成了\"被搜到以后能不能被订走\"。如果官网没有一个能直接预订的页面、没有清晰的价格逻辑、没有企业客户入口和可信联系方式，AI 带来的客人大概率回到 OTA 完成交易。直订承接力，是酒店在 AI 时代必须回答的能力问题。",
      summaryEn: "Being Recommended by AI Doesn't Mean Being Booked. The Real Bottleneck in Hotel Digitalization Has Shifted from \"Can We Be Found?\" to \"Can We Be Booked After Being Found?\"",
      firstLine: "酒店在 AI 搜索中被推荐了，不等于被预订了。",
      author: "迈创兄弟C&T（MarvelBros C&T）",
      date: "2026-06-26",
      readTime: 18,
      tag: isZh ? "行业报告" : "Industry Report",
      tagColor: "bg-[#3b82f6]",
      tagTextColor: "text-white",
      featured: false,
    },
{
      id: 452,
      type: 'case',
      title: 'AI 搜索时代，酒店为什么需要一份可信实体档案？',
      titleEn: 'Why Hotels Need a Trustworthy Entity Profile in the AI Search Era',
      slug: 'hotel-ai-entity-profile-2026-06-24',
      summary: "答案很直接：AI搜索引擎判断一家酒店是否值得推荐，依据的不是网页排名，而是它能否从公开网络中提取到一个完整的、一致的、真实可信的实体档案。缺了这份档案，酒店在AI眼里就是一团模糊的信息拼图，随时会被略过。",
      summaryEn: "Hotels are not ignored by AI search because they fail to exist. They are ignored because AI cannot confirm they are real, identifiable, and worth recommending.",
      firstLine: "答案很直接：AI搜索引擎判断一家酒店是否值得推荐，依据的不是网页排名，而是它能否从公开网络中提取到一个完整的、一致的、真实可信的实体档案。缺了这份档案，酒店在AI眼里就是一团模糊的信息拼图，随时会被略过。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-24',
      category: 'case-study',
      tag: '案例研究',
      readTime: 18,
      featured: false,
      image: '',
    },

        {
      id: 463,
      type: 'case',
      title: '城市商务酒店为什么 AI 可见但直订不足：从曝光到承接的四步补齐',
      titleEn: 'Why City Business Hotels Are Visible to AI but Struggle with Direct Booking: Four Steps from Exposure to Conversion',
      slug: 'city-business-hotel-ai-visible-direct-booking-deficit-2026',
      summary: "一家城市商务酒店为什么被 AI 看见了，却没有拿到更多直订？",
      summaryEn: "Why a City Business Hotel Was Seen by AI—But Still Couldn't Get More Direct Bookings",
      firstLine: "一家城市商务酒店为什么被 AI 看见了，却没有拿到更多直订？",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-26',
      category: 'case-study',
      tag: '案例研究',
      readTime: 16,
      featured: false,
      image: '',
    },
{
      id: 460,
      type: 'case',
      title: '华东某中端酒店 OTA 依赖突破复盘：12 个月把客源主动权重新拿回来',
      titleEn: 'Breaking Free from OTA Dependency: How a Mid-Range Hotel in Eastern China Reclaimed Guest Ownership Over 12 Months',
      slug: 'hotel-east-china-midscale-ota-breakthrough-2026',
      summary: "如果一家酒店超过一半订单长期来自 OTA，问题通常不只是佣金高，而是客户关系、定价权和复购能力都在被渠道重新定义。OTA 不是敌人，但过度依赖 OTA，会让酒店从经营者慢慢变成平台上的房源供应商。",
      summaryEn: "When more than half of a hotel's orders consistently come from online travel agencies over an extended period, the problem is rarely confined to commission costs alone. What is really at stake is something deeper: guest relationships, pricing power, and repeat-booking capability are all being progressively redefined by platforms that sit between the hotel and its guests. OTAs are not the enemy. They provide genuine value in visibility, reach, and convenience. But excessive OTA dependency has a quiet, corrosive effect: it gradually turns a hotel from an independent operator into little more than a room supplier on someone else's marketplace, with diminishing control over how its product is presented, priced, and remembered by guests.",
      firstLine: "如果一家酒店超过一半订单长期来自 OTA，问题通常不只是佣金高，而是客户关系、定价权和复购能力都在被渠道重新定义。OTA 不是敌人，但过度依赖 OTA，会让酒店从经营者慢慢变成平台上的房源供应商。",
      author: '迈创兄弟C&T（MarvelBros C&T）',
      date: '2026-06-25',
      category: 'case-study',
      tag: '案例研究',
      readTime: 14,
      featured: false,
      image: '',
    },


  ]

  // 热门话题:自动选择所有文章中日期最新的文章
  const allArticles = [...articles, ...reports, ...cases]
  const featuredArticle = allArticles.reduce((latest, article) => {
    return new Date(article.date) > new Date(latest.date) ? article : latest
  }, allArticles[0])

  const categories = [
    {
      id: 'academic',
      icon: FileText,
      title: ui.academicTitle,
      desc: ui.academicDesc,
      count: articles.length,
      color: '#f59e0b',
    },
    {
      id: 'industry-reports',
      icon: BarChart3,
      title: ui.reportTitle,
      desc: ui.reportDesc,
      count: reports.length,
      color: '#3b82f6',
    },
    {
      id: 'cases',
      icon: BookOpen,
      title: ui.caseTitle,
      desc: ui.caseDesc,
      count: cases.length,
      color: '#22c55e',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={ui.pageTitle}
        subtitle={ui.heroSubtitle}
        bgImage="/hero-pexels-jimmy-liao.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <BookOpen className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">{isZh ? '思想领导力' : 'Thought Leadership'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {ui.pageTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {ui.heroSubtitle}
          </p>
        </div>

        <KnowledgeSearchBox
          lang={lang}
          isZh={isZh}
          articles={allArticles}
          placeholder={ui.searchPlaceholder}
        />

        {/* 管享精道 · 专题栏目入口 */}
        <section className="mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 dark:from-amber-900/20 dark:to-yellow-900/20 dark:border-amber-500/30">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 text-sm font-medium mb-3">
                  <BookOpen className="w-4 h-4" />
                  {isZh ? '专题栏目' : 'Special Column'}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {ui.leanTitle}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {ui.leanBannerDesc}
                </p>
                <Link
                  href={`/${lang}/lean`}
                  className="inline-flex items-center px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-all"
                >
                  {ui.enterLean}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center w-48 h-48 rounded-2xl bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200/30 dark:border-amber-500/20">
                <BookOpen className="w-24 h-24 text-amber-500/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all group text-center block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cat.title}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold" style={{ color: cat.color }}>
                    {cat.count}
                  </span>
                  <span className="text-muted-foreground text-sm">篇</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Article - 热门话题 */}
        <section id="featured" className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 border border-amber-200 dark:from-[#1e3a5f] dark:to-[#0f172a] dark:border-[#f59e0b]/30">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-[#f59e0b]/20 dark:text-[#f59e0b] text-sm font-medium mb-4">
                  {isZh ? '热门话题' : 'Featured'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {isZh ? featuredArticle.title : ((featuredArticle as {titleEn?: string}).titleEn || featuredArticle.title)}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {isZh ? featuredArticle.summary : ((featuredArticle as {summaryEn?: string}).summaryEn || featuredArticle.summary)}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}{isZh ? '分钟' : ' min read'}
                  </span>
                </div>
                <Link
                  href={`/${lang}/knowledge/${encodeURIComponent(featuredArticle.slug)}`}
                  className="inline-flex items-center px-6 py-3 text-foreground font-bold rounded-lg transition-all"
                  style={{ background: 'linear-gradient(135deg, #4285f4, #34a853, #fbbc04, #ea4335)' }}
                >
                  {isZh ? '阅读全文' : 'Read More'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="lg:w-1/3 flex items-center justify-center">
                <div className="w-full h-64 rounded-xl bg-card flex items-center justify-center border border-border">
                  <FileText className="w-24 h-24 text-[#f59e0b]/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Articles Section */}
        <section id="academic" className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#f59e0b]" />
            {ui.academicTitle}
          </h2>
          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={`${article.slug}-${article.id}`}
                href={`/${lang}/knowledge/${encodeURIComponent(article.slug)}`}
                className="block p-5 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium flex-shrink-0 mt-0.5">
                    {article.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#f59e0b] transition-colors">
                      {isZh ? article.title : ((article as {titleEn?: string}).titleEn || article.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {article.firstLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 text-xs text-muted-foreground">
                    <span>{article.author.split(' - ')[0]}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Industry Reports Section */}
        <section id="industry-reports" className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#3b82f6]" />
            {ui.reportTitle}
          </h2>
          <div className="space-y-3">
            {reports.map((report) => (
              <Link
                key={`${report.slug}-${report.id}`}
                href={`/${lang}/knowledge/${encodeURIComponent(report.slug)}`}
                className="block p-5 rounded-xl bg-card border border-border hover:border-[#3b82f6]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium flex-shrink-0 mt-0.5">
                    {report.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#3b82f6] transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {report.firstLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 text-xs text-muted-foreground">
                    <span>{report.author.split(' - ')[0]}</span>
                    <span>{report.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}

        {/* Case Studies Section */}
        <section id="cases" className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#22c55e]" />
            {ui.caseTitle}
          </h2>
          <div className="space-y-3">
            {cases.map((c) => (
              <Link
                key={`${c.slug}-${c.id}`}
                href={`/${lang}/knowledge/${encodeURIComponent(c.slug)}`}
                className="block p-5 rounded-xl bg-card border border-border hover:border-[#22c55e]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-medium flex-shrink-0 mt-0.5">
                    {c.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#22c55e] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {c.firstLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 text-xs text-muted-foreground">
                    <span>{c.author.split(' - ')[0]}</span>
                    <span>{c.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>



        <section className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              订阅行业洞察
            </h2>
            <p className="text-muted-foreground mb-6">
              每周获取最新研究报告与行业分析,领先一步洞察趋势
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b]"
              />
              <button className="px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all whitespace-nowrap">
                立即订阅
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
