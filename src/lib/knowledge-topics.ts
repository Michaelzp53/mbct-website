export type PrimaryTopic =
  | 'investment'
  | 'hotel-opening'
  | 'operations'
  | 'revenue'
  | 'cost'
  | 'marketing'
  | 'distribution'
  | 'renovation'
  | 'team'
  | 'ai-search'

export type KnowledgeLike = {
  title: string
  titleEn?: string
  slug?: string
  summary?: string
  summaryEn?: string
  firstLine?: string
  tag?: string
}

export const topicOrder: PrimaryTopic[] = [
  'investment',
  'hotel-opening',
  'operations',
  'revenue',
  'cost',
  'marketing',
  'distribution',
  'renovation',
  'team',
  'ai-search',
]

const topicKeywords: Array<[PrimaryTopic, RegExp]> = [
  ['ai-search', /\bai\b|人工智能|ai搜索|ai可见|geo|digital transformation|information platform|信息平台/iu],
  ['hotel-opening', /筹开|筹建|开业|pre-opening|opening budget|hotel opening/iu],
  ['investment', /投资|可行性|融资|品牌选择|加盟|investment|feasibility|financing|franchise/iu],
  ['renovation', /改造|焕新|翻新|重塑|renovation|renewal|reposition/iu],
  ['cost', /成本|人工|能耗|采购|人效|cost|labor|efficiency|energy/iu],
  ['team', /团队|组织|岗位|排班|培训|绩效|交接|team|staff|organization|training|handover/iu],
  ['distribution', /ota|渠道|直订|分销|distribution|direct booking|channel/iu],
  ['revenue', /收益|房价|revpar|adr|报价|利润|revenue|rate|pricing|profit/iu],
  ['marketing', /获客|市场|推广|会员|客人|营销|搜索|marketing|acquisition|guest awareness|member/iu],
  ['operations', /经营|运营|服务|投诉|客房|入住|体验|operations|operating|service|occupancy|review/iu],
]

export function getPrimaryTopic(article: KnowledgeLike): PrimaryTopic {
  const source = [article.title, article.titleEn, article.slug, article.summary, article.summaryEn, article.firstLine, article.tag]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return topicKeywords.find(([, pattern]) => pattern.test(source))?.[0] ?? 'operations'
}

export function getTopicCopy(topic: PrimaryTopic, isZh: boolean) {
  const copy = {
    investment: {
      title: ['准备投资酒店', 'Hotel investment decisions'],
      description: ['项目值不值得投、品牌怎么选、回报与风险怎么判断。', 'Assess project viability, brand choice, returns, and risk.'],
      hub: ['酒店投资判断框架', 'Hotel investment framework'],
      href: '/hotel-investment',
      contact: ['正在判断一个酒店项目？', 'Assessing a hotel project?'],
      contactHref: '/contact?type=plan',
    },
    'hotel-opening': {
      title: ['酒店正在筹开', 'Hotel pre-opening'],
      description: ['预算、工程接口、团队与开业节奏如何控制。', 'Control budget, operating interfaces, teams, and opening readiness.'],
      hub: ['筹开风险检查框架', 'Pre-opening risk checklist'],
      href: '/hotel-opening',
      contact: ['酒店正在筹开？', 'Preparing to open a hotel?'],
      contactHref: '/contact?type=plan',
    },
    operations: {
      title: ['酒店经营诊断', 'Hotel operating diagnosis'],
      description: ['从服务、流程与经营数据判断真正的瓶颈。', 'Find the real bottleneck across service, process, and operating data.'],
      hub: ['经营诊断方法', 'Operating diagnosis method'],
      href: '/hotel-operation-improvement',
      contact: ['经营动作很多，结果却不稳定？', 'Lots of activity, but unstable results?'],
      contactHref: '/contact?type=diagnosis',
    },
    revenue: {
      title: ['入住率不低但利润不好', 'Revenue and rate decisions'],
      description: ['从房价、RevPAR、渠道与成本看真正原因。', 'Read rate, RevPAR, channel, and cost together.'],
      hub: ['收益与房价判断方法', 'Revenue and rate framework'],
      href: '/hotel-revenue',
      contact: ['入住率不错，但利润没有留下？', 'Occupancy is healthy, but profit is not?'],
      contactHref: '/contact?type=diagnosis',
    },
    cost: {
      title: ['成本越来越高', 'Cost and efficiency'],
      description: ['人工、能耗、采购和隐性服务成本怎么管。', 'Manage labor, energy, procurement, and hidden service cost.'],
      hub: ['成本与效率专题', 'Cost and efficiency framework'],
      href: '/hotel-operation-improvement',
      contact: ['成本越来越高，不确定先动哪里？', 'Costs are rising, but where should you start?'],
      contactHref: '/contact?type=diagnosis',
    },
    marketing: {
      title: ['酒店怎么获得更多客户', 'Market and guest acquisition'],
      description: ['内容、会员、产品表达与需求承接如何连起来。', 'Connect content, membership, product clarity, and demand capture.'],
      hub: ['市场与获客方法', 'Market and acquisition method'],
      href: '/hotel-operation-improvement',
      contact: ['客房卖不动，先判断是哪一段出了问题。', 'Rooms are not selling. First locate the broken step.'],
      contactHref: '/contact?type=diagnosis',
    },
    distribution: {
      title: ['OTA与渠道', 'OTA and distribution'],
      description: ['直订、OTA与渠道成本应该怎样一起判断。', 'Assess direct booking, OTAs, and channel cost together.'],
      hub: ['渠道与直订判断方法', 'Distribution and direct-booking method'],
      href: '/hotel-revenue',
      contact: ['渠道订单多，但不确定利润留在哪里？', 'Orders are coming in, but where is the profit going?'],
      contactHref: '/contact?type=diagnosis',
    },
    renovation: {
      title: ['老酒店准备改造', 'Hotel renovation'],
      description: ['改什么、投多少钱、多久回本。', 'Decide what to change, what to invest, and how to judge payback.'],
      hub: ['酒店改造判断框架', 'Renovation decision framework'],
      href: '/hotel-investment',
      contact: ['老酒店准备改造？', 'Preparing to renovate an existing hotel?'],
      contactHref: '/contact?type=plan',
    },
    team: {
      title: ['团队很忙但效率不高', 'Team and organization'],
      description: ['从组织、流程、岗位和管理机制找到问题。', 'Find the issue in organization, process, roles, and management cadence.'],
      hub: ['团队与组织管理方法', 'Team and organization method'],
      href: '/hotel-operation-improvement',
      contact: ['团队很忙，但服务和效率没有改善？', 'The team is busy, but service and efficiency are not improving?'],
      contactHref: '/contact?type=diagnosis',
    },
    'ai-search': {
      title: ['AI搜索与数字化', 'AI search and digital readiness'],
      description: ['只有信息表达与新搜索入口直接相关时，才从这里开始。', 'Start here only when the question is directly about information clarity and new search entry points.'],
      hub: ['AI搜索专题', 'AI search hub'],
      href: '/topics/ai-hotel-growth',
      contact: ['酒店在新搜索入口里几乎看不到？', 'Is the hotel hard to find in new search entry points?'],
      contactHref: '/contact?type=ai-website-audit',
    },
  } satisfies Record<PrimaryTopic, { title: [string, string]; description: [string, string]; hub: [string, string]; href: string; contact: [string, string]; contactHref: string }>

  const item = copy[topic]
  const index = isZh ? 0 : 1
  return {
    ...item,
    title: item.title[index],
    description: item.description[index],
    hub: item.hub[index],
    contact: item.contact[index],
  }
}
