export type CaseStage = 'investment' | 'development' | 'opening' | 'operation' | 'renovation' | 'exit'
export type PropertyType = 'city-business' | 'resort' | 'economy' | 'state-reception' | 'county'

export type CaseStudy = {
  slug: string
  stage: CaseStage
  property: PropertyType
  image: string
  zh: {
    client: string
    cityScale: string
    projectType: string
    coreProblem: string
    actions: string[]
    result: string
    cycle: string
    authorization: string
    relatedArticle: { href: string; title: string }
  }
  en: {
    client: string
    cityScale: string
    projectType: string
    coreProblem: string
    actions: string[]
    result: string
    cycle: string
    authorization: string
    relatedArticle: { href: string; title: string }
  }
}

export const STAGE_FILTERS: Array<{ id: CaseStage | ''; zh: string; en: string }> = [
  { id: '', zh: '全部阶段', en: 'All stages' },
  { id: 'investment', zh: '投', en: 'Invest' },
  { id: 'development', zh: '建', en: 'Build' },
  { id: 'opening', zh: '筹', en: 'Pre-open' },
  { id: 'operation', zh: '管', en: 'Operate' },
  { id: 'renovation', zh: '改', en: 'Renew' },
  { id: 'exit', zh: '退', en: 'Exit' },
]

export const PROPERTY_FILTERS: Array<{ id: PropertyType | ''; zh: string; en: string }> = [
  { id: '', zh: '全部物业', en: 'All property types' },
  { id: 'city-business', zh: '城市商务', en: 'Urban business' },
  { id: 'resort', zh: '度假', en: 'Resort' },
  { id: 'economy', zh: '经济型', en: 'Economy' },
  { id: 'state-reception', zh: '国企接待', en: 'State reception' },
  { id: 'county', zh: '县域', en: 'County' },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sanya-luxury-resort',
    stage: 'renovation',
    property: 'resort',
    image: '/images/cases/case1.png',
    zh: {
      client: '三亚某高端度假酒店',
      cityScale: '三亚 · 体量未公开',
      projectType: '高端度假酒店品牌焕新与复购增长项目',
      coreProblem: '旺季表现良好，但复购偏弱，品牌记忆点不足，度假体验缺少可传播的差异化。',
      actions: ['重塑品牌叙事与客群表达', '优化关键服务触点与度假体验流程', '围绕会员与老客建立复购激活机制'],
      result: '复购率 35%+',
      cycle: '周期按客户授权披露',
      authorization: '项目实践按客户授权披露，部分细节已脱敏。',
      relatedArticle: { href: '/knowledge/legacy-hotel-renovation-diagnosis-2026-06-03', title: '存量酒店改造应该怎么做' },
    },
    en: {
      client: 'A luxury beachfront resort, Sanya',
      cityScale: 'Sanya · scale not disclosed',
      projectType: 'Luxury resort brand refresh and repeat-guest growth program',
      coreProblem: 'Strong peak-season demand but weak guest retention, limited brand memorability, and an undifferentiated resort experience.',
      actions: ['Reframed brand narrative and target-guest messaging', 'Redesigned core service touchpoints and resort journey', 'Built repeat-guest activation around members and past visitors'],
      result: 'Repeat-guest rate above 35%',
      cycle: 'Timeline disclosed only with client authorization',
      authorization: 'Project practice is disclosed with client authorization. Some details are anonymized.',
      relatedArticle: { href: '/knowledge/legacy-hotel-renovation-diagnosis-2026-06-03', title: 'How an existing hotel should be renovated' },
    },
  },
  {
    slug: 'northwest-state-guesthouse',
    stage: 'operation',
    property: 'state-reception',
    image: '/images/cases/case5.png',
    zh: {
      client: '西北某国企迎宾馆',
      cityScale: '西北 · 体量未公开',
      projectType: '国企迎宾馆市场化焕新与客群重构项目',
      coreProblem: '传统接待模式难以支撑市场化增长，客群结构老化，成本与制度效率偏低。',
      actions: ['重塑市场化产品结构与银发客群策略', '优化服务与出品体系', '同步推进人事制度与成本控制改革'],
      result: '银发客群满意度 90%+',
      cycle: '周期按客户授权披露',
      authorization: '项目实践按客户授权披露，部分细节已脱敏。',
      relatedArticle: { href: '/knowledge/hotel-cost-optimization-dangers-2026-05-22', title: '酒店人力成本应当怎么优化' },
    },
    en: {
      client: 'A state-owned guesthouse, Northwest China',
      cityScale: 'Northwest China · scale not disclosed',
      projectType: 'State-owned guesthouse repositioning and market renewal program',
      coreProblem: 'Legacy reception logic could not support market growth, guest mix was aging, and institutional cost structures were inefficient.',
      actions: ['Reshaped the offer for market demand and senior segments', 'Upgraded service and catering experience', 'Reformed HR mechanisms and cost control routines'],
      result: 'Senior guest satisfaction above 90%',
      cycle: 'Timeline disclosed only with client authorization',
      authorization: 'Project practice is disclosed with client authorization. Some details are anonymized.',
      relatedArticle: { href: '/knowledge/hotel-cost-optimization-dangers-2026-05-22', title: 'How hotel labor cost should be optimized' },
    },
  },
  {
    slug: 'qingdao-economy-hotel',
    stage: 'operation',
    property: 'economy',
    image: '/images/cases/case6.png',
    zh: {
      client: '青岛某经济型酒店',
      cityScale: '青岛 · 体量未公开',
      projectType: '经济型酒店降本增效与标准化项目',
      coreProblem: '成本压力持续上升，价格策略粗放，服务稳定性难以兼顾。',
      actions: ['引入自动化工具与动态调价机制', '优化标准化服务流程', '聚焦清洁、前台与人效关键环节'],
      result: '运营成本降低 25%+',
      cycle: '周期按客户授权披露',
      authorization: '项目实践按客户授权披露，部分细节已脱敏。',
      relatedArticle: { href: '/knowledge/hotel-cost-optimization-dangers-2026-05-22', title: '酒店人力成本应当怎么优化' },
    },
    en: {
      client: 'An economy hotel, Qingdao',
      cityScale: 'Qingdao · scale not disclosed',
      projectType: 'Economy hotel cost-efficiency and standardization program',
      coreProblem: 'Persistent cost pressure, rough pricing decisions, and unstable service consistency limited profitability.',
      actions: ['Introduced automation tools and dynamic pricing logic', 'Refined standardized service workflows', 'Focused on housekeeping, front desk, and labor efficiency'],
      result: 'Operating costs reduced by more than 25%',
      cycle: 'Timeline disclosed only with client authorization',
      authorization: 'Project practice is disclosed with client authorization. Some details are anonymized.',
      relatedArticle: { href: '/knowledge/hotel-cost-optimization-dangers-2026-05-22', title: 'How hotel labor cost should be optimized' },
    },
  },
]

export const publishedCases = caseStudies.filter((item) => item.zh.result.trim().length > 0)

export function caseBySlug(slug: string) {
  return publishedCases.find((item) => item.slug === slug)
}

export function stageLabel(stage: CaseStage, lang: string) {
  return STAGE_FILTERS.find((item) => item.id === stage)?.[lang === 'en' ? 'en' : 'zh'] || stage
}

export function propertyLabel(property: PropertyType, lang: string) {
  return PROPERTY_FILTERS.find((item) => item.id === property)?.[lang === 'en' ? 'en' : 'zh'] || property
}
