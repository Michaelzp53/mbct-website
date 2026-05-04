import Link from 'next/link'
import { BookOpen, FileText, BarChart3, Newspaper, ArrowRight, Clock, User, Calendar } from 'lucide-react'

export default async function KnowledgePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  // 页面UI翻译
  const ui = {
    pageTitle: isZh ? '行业动态' : 'Industry Navigation',
    pageSubtitle: isZh
      ? '洞察行业趋势,分享实战经验,助力酒店数字化转型'
      : 'Insights into industry trends, sharing practical experience, empowering hotel digital transformation',
    academicTitle: isZh ? '行业分析' : 'Industry Analysis',
    academicDesc: isZh ? '学术研究论文,理论与实践结合' : 'Peer-reviewed research combining theory and practice',
    reportTitle: isZh ? '行业报告' : 'Industry Reports',
    reportDesc: isZh ? '行业深度报告,实战案例分析' : 'In-depth industry analysis with real cases',
    caseTitle: isZh ? '案例研究' : 'Case Studies',
    caseDesc: isZh ? '实战项目复盘,数据脱敏处理' : 'Real project retrospectives with anonymized data',
    blogTitle: isZh ? '博客文章' : 'Blog',
    blogDesc: isZh ? '最新趋势、方法论、实战经验' : 'Latest trends, methodologies, practical experience',
    searchPlaceholder: isZh ? '搜索文章...' : 'Search articles...',
    readMore: isZh ? '阅读全文' : 'Read More',
    minRead: isZh ? '分钟' : 'min read',
  }

  const articles = [
    {
      id: 317,
      type: 'article',
      title: '从"悦己"到"智性"：Z世代消费决策的双重逻辑演变',
      slug: 'gen-z-dual-logic-consumption',
      summary: 'Z世代消费决策已形成"悦己"与"智性"双重逻辑并存的框架。情绪价值负责决策触发，理性评估负责价值校验。近9成青年有过情绪消费，月均949元，但同时73%会进行深度比价研究。',
      firstLine: '当最后一届90后全部迈入25岁门槛，Z世代已无可争议地成为中国消费市场的核心驱动力。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '18分钟',
      tag: '行业分析',
      featured: false,
    },

    {
      id: -21,
      type: 'article',
      title: '酒店数字化转型六年了，为什么多数酒店还在原地踏步？',
      slug: 'hotel-digital-transformation-six-years-stuck',
      summary: '数字化成熟度评分64分，93%有预算但不到四成跑通。三个常见坑：买装饰品、数据孤岛、技术债。破局之道：先诊断，再动手，只改最痛的一点。',
      firstLine: '上周去西南一座三线城市出差，顺道看了看当地一家老牌三星级酒店。',
      author: '迈创兄弟',
      date: '2026-04-29',
      readTime: '12分钟',
      tag: '博客文章',
      featured: false,
    },
    {
      id: -11,
      type: 'article',
      title: '2026酒店业K型分化深水区：58.2%单体酒店面临出局的结构性真相',
      slug: 'hotel-k-shaped-divergence-deepwater-2026',
      summary: '中国饭店协会2026年报告核心解读：58.2%单体酒店面临出局，41.80%连锁化率背后的结构性分化。三条死亡路径、五个致命误区、三条生存法则。',
      firstLine: '2026年4月23日，中国饭店协会正式发布《2026年中国酒店业发展报告》。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '18分钟',
      tag: '行业分析',
      featured: true,
    },
    {
      id: -12,
      type: 'article',
      title: '2026酒店存量焕新：五种路径重构资产价值',
      slug: 'hotel-renewal-five-paths-2026',
      summary: '中国酒店业存量资产规模超400万间，五种经过验证的焕新路径：模块化轻改造、AI全链路赋能、私域流量与会员资产化、文化IP赋能、细分赛道精准定位。',
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
      title: '"效率崇拜"退烧：2026全球酒店业从KPI驱动到体验驱动的范式转移',
      slug: 'hotel-efficiency-to-experience-2026',
      summary: '万豪"客房瘦身"、四季"去标准化"、中国高端酒店"变慢"。效率崇拜的代价与体验价值的回归，全球信号与中国路径。',
      firstLine: '2025年，全球酒店业发生了几件值得深思的事情。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '14分钟',
      tag: '行业分析',
    },
    {
      id: -15,
      type: 'article',
      title: '文化积淀：文旅产业避免同质化的第一性原理',
      slug: 'hotel-cultural-accumulation-2026',
      summary: '文旅产业同质化困局：扎染体验、古镇夜游、非遗展览的复制粘贴。文化积淀理论：时间深度×在地浓度×表达精度。',
      firstLine: '过去五年，中国文旅产业经历了一轮史无前例的"文化复兴"。',
      author: '迈创兄弟',
      date: '2026-04-27',
      readTime: '12分钟',
      tag: '行业分析',
    },
    {
      id: 0,
      type: 'article',
      title: '2026酒店业"K型分化"：高端领跑与低端淘汰的结构性真相',
      slug: 'hotel-k-shaped-divergence-2026',
      summary: '2026年开年，中国酒店业呈现出清晰而残酷的市场图景：中高端连锁酒店入住率稳居70%以上，RevPAR持续攀升；而低端老旧单体酒店即便降价促销，也难以挽回客流。',
      firstLine: '2026年开年，中国酒店业呈现出一个清晰而残酷的市场图景。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '25分钟',
      tag: '行业分析',
    },
    {
      id: -3,
      type: 'article',
      title: '存量焕新进入"AI+模块化"时代：酒店资产价值重构的五种路径',
      slug: 'hotel-renewal-five-paths-ai-modular',
      summary: '中国酒店业正经历从增量扩张到存量优化的深刻转型。本文系统梳理存量焕新的五种路径：模块化轻改造、AI全链路赋能、私域流量与会员资产化、文化IP赋能、细分赛道精准定位。',
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
      title: '"效率崇拜"退烧：2026全球酒店业从KPI驱动到体验驱动的范式转移',
      slug: 'hotel-efficiency-to-experience-paradigm-shift',
      summary: '当"关店2000+"成为媒体头条，酒店业正在经历从"效率崇拜"到"体验驱动"的静默范式转移。从KPI到人房比，从NPS到情感连接，全球样本与中国路径。',
      firstLine: '2026年春天，全球酒店业正在经历一场静默的范式转移。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '25分钟',
      tag: '行业分析',
    },
    {
      id: -6,
      type: 'article',
      title: '2026全球酒店科技创新地图：30个趋势下的中国落地方略',
      slug: 'hotel-tech-innovation-map-2026',
      summary: '系统梳理2026年全球酒店科技30个关键趋势，聚焦AI渗透三大场景、智能RMS下一代进化、中国落地三座大山，提出轻量化三步路径。',
      firstLine: '如果要给2026年的全球酒店业提取一个最核心的关键词，"科技"二字几乎毫无争议地占据了榜首位置。',
      author: '迈创兄弟',
      date: '2026-04-24',
      readTime: '28分钟',
      tag: '行业分析',
    },
    {
      id: 1,
      type: 'article',
      title: '为什么80%的豪华酒店留不住回头客？——体验经济时代的三大认知陷阱',
      slug: 'why-luxury-hotels-cant-retain-guests',
      summary: '年年升级，为何客人还是只住一次？本文引入体验经济理论框架，系统分析酒店服务升级的三大认知陷阱，并提出可操作的行动路径。',
      firstLine: '中国某省会城市，一家开业十五年的国际品牌五星级酒店，2024年深秋迎来了一次"升级"。',
      author: '迈创兄弟',
      date: '2026-04-22',
      readTime: '20分钟',
      tag: '行业分析',
    },
    {
      id: -1,
      type: 'article',
      title: '酒店人房比:增效还是降本?',
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
      slug: '资源基础观视角下的酒店竞争优势研究',
      summary: '酒店四大核心资源:品牌、人才、技术、客户关系。从资源到动态能力,构建竞争护城河。',
      firstLine: '你有没有过这样的困惑:明明花了重金装修,客人却不买账?问题可能出在:你一直在模仿别人的「面子」,却没有建立自己的「里子」。',
      author: '迈创兄弟',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '行业分析',
    },
  ]

  // 行业报告 - 2026-04-22新增1篇
  const reports = [
    {
      id: 318,
      type: 'report',
      title: '2026青年旅居趋势报告："即时满足"时代下的酒店业新机遇',
      slug: 'youth-travel-trends-2026',
      summary: '74%的青年旅客习惯3天内临时预订，70%曾有当天订酒店经历。"疗愈型"住宿需求年增长率达128%。青年旅客对"情绪价值"的支付意愿高于其他年龄段23%。',
      firstLine: '2026年，青年消费群体已成为中国酒店业最具增长潜力的细分市场。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '15分钟',
      tag: '行业报告',
      featured: false,
    },
    {
      id: 311,
      type: 'report',
      title: '2026年中国酒店连锁化率深度报告：41.8%背后的结构性机会',
      slug: 'hotel-chain-rate-2026',
      summary: '2025年中国酒店业连锁化率41.80%，中档酒店连锁化率高达58.05%，经济型仅30.86%。一线城市59.66%逼近天花板，三四线35.34%成最大增量市场。',
      firstLine: '2025年中国酒店业连锁化率达到41.80%，客房连锁化率同样为41.80%，门店连锁化率为28.37%。',
      author: '迈创兄弟',
      date: '2026-04-28',
      readTime: '18分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: 101,
      type: 'report',
      title: '2026年中国酒店业数字化转型深水区攻坚报告',
      slug: 'digital-transformation-2026',
      summary: '中国酒店业的数字化转型已进入深水区。本报告识别数字化转型的阶段性特征与核心瓶颈,提出数据中台建设的实践路径、AI赋能运营决策的场景化策略。',
      firstLine: '中国酒店业的数字化转型可以划分为三个明显阶段,每个阶段都有其特定的任务与挑战。',
      author: '迈创兄弟',
      date: '2026-04-16',
      readTime: '22分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: 102,
      type: 'report',
      title: '2026年中国高端酒店存量改造投资分析报告',
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
      title: '本周酒店业5条热点速递（4.25-5.2）',
      slug: 'hotel-industry-weekly-0503',
      summary: '五一预订数据出炉确认品质化趋势；酒店人房比优化成行业热点；电竞酒店监管收紧；OTA佣金博弈持续。',
      firstLine: 'MBCT机构每周汇总酒店业热点。',
      author: 'MBCT机构研究中心',
      date: '2026-05-03',
      readTime: '5分钟',
      tag: '行业报告',
    },
  ]

  // 案例研究 - 2026-04-22新增1篇
  const cases = [
    {
      id: 319,
      type: 'case',
      title: '情绪消费浪潮下，酒店如何成为年轻人的"精神快充站"',
      slug: 'emotional-consumption-hotel-spirit-charging',
      summary: '2026年情绪消费市场规模预计达2.72万亿元。三个实战案例：精品酒店"疗愈系"产品溢价47%、连锁品牌"社交型"大堂年轻客群占比从34%升至51%、度假酒店"周五微度假"套餐复购率54%。',
      firstLine: '2026年，中国情绪消费市场规模预计将达到2.72万亿元，同比增长41.3%。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '15分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 315,
      slug: 'hotel-investor-pitfalls-guide',
      summary: '下沉市场翻番增长、电竞酒店合规化红利、OTA高佣金认命论——三个看起来很美的伪热点，实际分析后发现都是坑。',
      firstLine: '最近跟几位投资人喝茶，聊到今年的新项目，气氛有点微妙。',
      author: 'MBCT机构研究中心',
      date: '2026-05-02',
      readTime: '10分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 312,
      type: 'case',
      title: '三十年单体老酒店重生记：180天如何让RevPAR翻番',
      slug: 'old-hotel-revival-180-days',
      summary: '华中某四线城市三十年四星级酒店，入住率38%→62%，ADR 170元→218元，RevPAR 65元→138元(+112%)。模块化改造、文化唤醒、运营重塑的完整复盘。',
      firstLine: '这是一个真实的故事。华中地区某四线城市，1996年开业的老牌四星级酒店，三十年历史，曾经是当地最好的酒店。',
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
      slug: 'ai-hotel-service-restructure-72h',
      summary: 'AI上线后效率提升但复购率下降12%--一家高端酒店如何在72小时内完成服务重构,建立AI+人感双轨制,实现复购率回升9个百分点。',
      firstLine: '2026年3月,国内某高端酒店营销总监遇到了一个诡异的现象:AI预订系统上线第一周,转化率提升了8%。',
      author: '迈创兄弟',
      date: '2026-04-22',
      readTime: '15分钟',
      tag: '案例研究',
    },
  ]

  // 博客文章 - 2026-04-22新增1篇
  const blogs = [
    {
      id: 320,
      type: 'blog',
      title: '青年节特辑：这届年轻人住酒店，到底在买什么？',
      slug: 'youth-day-hotel-consumption-insights',
      summary: '五四青年节特辑。不为"住"为"感受"，不为"贵"为"值"，不为"标准"为"个性"。理解这届年轻人住酒店买什么，其实是在理解未来十年消费市场的方向。',
      firstLine: '今天是五四青年节。',
      author: '迈创兄弟',
      date: '2026-05-04',
      readTime: '8分钟',
      tag: '博客',
    },
    {
      id: 313,
      slug: 'podcast-hotel-investor-decade',
      summary: '李总，酒店投资十二年，4家酒店。选址选错了可能亏损，选对了才能盈利。加盟还是单体，要看自己的能力圈。耐心比什么都重要。',
      firstLine: '李总，酒店投资十二年，经历过行业最鼎盛时期，也扛过疫情三年。最深的感悟：酒店投资，最难的不是开业，是退出。',
      author: '迈创兄弟',
      date: '2026-04-28',
      readTime: '35分钟',
      tag: '博客',
    },
    {
      id: 301,
      type: 'blog',
      title: '酒店业"内卷"困局:差异化竞争的三个破局点',
      slug: 'differentiation-strategy',
      summary: '最近和几位酒店老板聊天,发现大家都有一个共同的焦虑:生意越来越难做了。降价吧,利润薄得像纸;不降价吧,客人被隔壁抢走。',
      firstLine: '最近和几位酒店老板聊天,发现大家都有一个共同的焦虑。',
      author: '迈创兄弟',
      date: '2026-04-16',
      readTime: '3分钟',
      tag: '博客',
    },
    {
      id: 302,
      type: 'blog',
      title: '带着孩子来酒店,没想到孩子比我还开心',
      slug: '带着孩子来酒店,没想到孩子比我还开心',
      summary: '亲子入住体验:细节打动人心',
      firstLine: '上周末带娃去成都玩,5岁的小朋友正处于"什么都要自己来"的年纪。',
      author: '游客',
      date: '2026-04-08',
      readTime: '3分钟',
      tag: '博客',
    },
    {
      id: 303,
      type: 'blog',
      title: '三个月改造,我的酒店RevPAR从120涨到180',
      slug: '三个月改造,我的酒店RevPAR从120涨到180',
      summary: '酒店老板视角:数据驱动的改造',
      firstLine: '我做酒店十年了,一直觉得自己挺懂行的。什么收益管理、价格策略,该做的都做了。',
      author: '酒店老板',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 304,
      type: 'blog',
      title: '从"工具人"到"故事主角"',
      slug: '从工具人到故事主角',
      summary: '前台员工视角:工作的意义',
      firstLine: '我在酒店前台干了三年多,最大的感受就是--累。不是身体累,是心累。',
      author: '前台员工',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 305,
      type: 'blog',
      title: 'AI帮我省了20万人工成本',
      slug: 'AI帮我省了20万人工成本',
      summary: '降本增效的真实故事',
      firstLine: '说实话,开酒店十几年,我从没想过有一天会被"数据"打动。',
      author: '酒店老板',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 306,
      type: 'blog',
      title: '90后员工流失率从80%降到20%',
      slug: '90后员工流失率从80%降到20%',
      summary: '员工管理:数据透明的力量',
      firstLine: '我当店长五年,最怕的就是招人。不是招不到,是留不住。',
      author: '酒店店长',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 307,
      type: 'blog',
      title: '入住"神奇"体验:从冷漠到温暖',
      slug: '入住神奇体验:从冷漠到温暖',
      summary: '被记住的感动',
      firstLine: '我是个出差党,一年住酒店不下100天。说实话,大部分酒店给我的感觉都差不多。',
      author: '游客',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 308,
      type: 'blog',
      title: '动态定价让我终于能睡个好觉',
      slug: '动态定价让我终于能睡个好觉',
      summary: '收益经理视角:技术解放',
      firstLine: '说实话,干我们这行的,哪个没熬过凌晨两三点的夜?',
      author: '收益经理',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 309,
      type: 'blog',
      title: '那些年烧在改造上的冤枉钱',
      slug: '那些年烧在改造上的冤枉钱',
      summary: '业主视角:数据诊断的教训',
      firstLine: '2019年,我第一家酒店开业第三年,生意开始下滑。我当时一拍大腿:装修老了,得改!',
      author: '酒店业主',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 310,
      type: 'blog',
      title: '入职第一天,师父教我的一件事',
      slug: '入职第一天,师父教我的一件事',
      summary: '新员工视角:传承的温度',
      firstLine: '2019年3月1日,我第一天到酒店报到,紧张得手心全是汗。',
      author: '新员工',
      date: '2026-04-08',
      readTime: '4分钟',
      tag: '博客',
    },
    {
      id: 401,
      type: 'blog',
      title: '我差点卖掉酒店,MBCT让我看到另一种可能',
      slug: 'hotel-near-sale-mbct-story',
      summary: '2023年秋天,我差点把自己的酒店卖掉。位置一般,OTA佣金高,客人留不住。直到朋友推荐了MBCT,一个问题改变了我的认知。',
      firstLine: '2023年秋天,我差点把自己的酒店卖掉。',
      author: '酒店业主',
      date: '2026-04-22',
      readTime: '3分钟',
      tag: '案例研究',
      featured: true,
    },
  ]

  const categories = [
    {
      id: 'academic',
      icon: FileText,
      title: ui.academicTitle,
      desc: ui.academicDesc,
      count: 26,
      color: '#f59e0b',
    },
    {
      id: 'industry-reports',
      icon: BarChart3,
      title: ui.reportTitle,
      desc: ui.reportDesc,
      count: 16,
      color: '#3b82f6',
    },
    {
      id: 'cases',
      icon: BookOpen,
      title: ui.caseTitle,
      desc: ui.caseDesc,
      count: 12,
      color: '#22c55e',
    },
    {
      id: 'blogs',
      icon: Newspaper,
      title: ui.blogTitle,
      desc: ui.blogDesc,
      count: 14,
      color: '#8b5cf6',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <BookOpen className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">{isZh ? '思想领导力' : 'Thought Leadership'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {ui.pageTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isZh ? 'MBCT研究院出品,用数据说话,为酒店行业提供前瞻洞察与实战指南' : 'From MBCT Institute - data-driven insights and practical guides for the hotel industry'}
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  热门话题
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {cases[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {cases[0].summary}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {cases[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {cases[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {cases[0].readTime}
                  </span>
                </div>
                <Link
                  href={`/${lang}/knowledge/${encodeURIComponent(articles[0].slug)}`}
                  className="inline-flex items-center px-6 py-3 text-foreground font-bold rounded-lg transition-all"
                  style={{ background: 'linear-gradient(135deg, #4285f4, #34a853, #fbbc04, #ea4335)' }}
                >
                  阅读全文
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
                key={article.id}
                href={`/${lang}/knowledge/${encodeURIComponent(article.slug)}`}
                className="block p-5 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium flex-shrink-0 mt-0.5">
                    {article.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#f59e0b] transition-colors">
                      {article.title}
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
                key={report.id}
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
                key={c.id}
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


        {/* Blogs Section */}
        <section id="blogs" className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#8b5cf6]" />
            {ui.blogTitle}
          </h2>
          <div className="space-y-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/${lang}/knowledge/${encodeURIComponent(blog.slug)}`}
                className="block p-5 rounded-xl bg-card border border-border hover:border-[#8b5cf6]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-medium flex-shrink-0 mt-0.5">
                    {blog.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#8b5cf6] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {blog.firstLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 text-xs text-muted-foreground">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
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
