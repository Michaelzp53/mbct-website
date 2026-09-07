export type KnowledgeCategory = {
  slug: string
  zh: string
  en: string
  descriptionZh: string
  descriptionEn: string
  color: string
  icon: string
}

export const knowledgeCategories: KnowledgeCategory[] = [
  { slug: 'hotel-investment', zh: '酒店投资判断', en: 'Hotel Investment Decisions', descriptionZh: '项目可行性、投资回报与收购退出。', descriptionEn: 'Project feasibility, investment returns, acquisitions, and exits.', color: '#b45309', icon: '◈' },
  { slug: 'hotel-opening', zh: '酒店筹备开业', en: 'Hotel Pre-opening', descriptionZh: '筹建协调、预算管理与开业准备。', descriptionEn: 'Development coordination, budgets, and opening readiness.', color: '#c2410c', icon: '◇' },
  { slug: 'hotel-diagnosis', zh: '酒店经营诊断', en: 'Hotel Operating Diagnosis', descriptionZh: '分析经营问题，找到影响服务、效率和利润的关键因素。', descriptionEn: 'Identify the factors affecting service, efficiency, and profit.', color: '#15803d', icon: '⌁' },
  { slug: 'hotel-revenue', zh: '酒店收益管理', en: 'Hotel Revenue Management', descriptionZh: '定价、客源结构、渠道与收入质量。', descriptionEn: 'Pricing, guest mix, distribution, and revenue quality.', color: '#0369a1', icon: '↗' },
  { slug: 'hotel-cost', zh: '酒店成本管理', en: 'Hotel Cost Management', descriptionZh: '人工、能耗、采购与服务成本。', descriptionEn: 'Labor, energy, procurement, and service costs.', color: '#a16207', icon: '⊙' },
  { slug: 'hotel-digital', zh: '酒店数字化', en: 'Hotel Digital Transformation', descriptionZh: '数字工具、AI应用、数据管理与线上获客。', descriptionEn: 'Digital tools, AI applications, data management, and online acquisition.', color: '#0f766e', icon: '⌘' },
  { slug: 'hotel-marketing', zh: '酒店市场营销', en: 'Hotel Marketing', descriptionZh: '品牌定位、客群需求、会员与市场增长。', descriptionEn: 'Brand positioning, guest needs, membership, and market growth.', color: '#be185d', icon: '✦' },
  { slug: 'hotel-governance', zh: '酒店经营治理', en: 'Hotel Operating Governance', descriptionZh: '明确业主、管理公司与团队的目标、权责和协作机制。', descriptionEn: 'Align objectives, responsibilities, and collaboration across owners, operators, and teams.', color: '#6d28d9', icon: '◎' },
  { slug: 'hotel-cultural-tourism', zh: '酒店与文旅融合', en: 'Hotels and Cultural Tourism', descriptionZh: '在地文化、旅行体验与酒店产品如何相互促进。', descriptionEn: 'Connect local culture, travel experiences, and hotel products.', color: '#9f1239', icon: '◇' },
  { slug: 'hotel-silver-economy', zh: '酒店与银发经济', en: 'Hotels and the Silver Economy', descriptionZh: '理解银发客群需求，改善适老设施、服务与旅居产品。', descriptionEn: 'Understand older travelers and improve age-friendly facilities, services, and extended-stay products.', color: '#475569', icon: '◈' },
]

export const categoryBySlug = Object.fromEntries(knowledgeCategories.map(category => [category.slug, category])) as Record<string, KnowledgeCategory>

const leanNames = [
  ['lean-invest', '精益投资', 'Lean Investment'],
  ['lean-opening', '精益筹开', 'Lean Pre-opening'],
  ['lean-diagnosis', '精益诊断', 'Lean Diagnosis'],
  ['lean-revenue', '精益收益', 'Lean Revenue Management'],
  ['lean-cost', '精益成本', 'Lean Cost Management'],
  ['lean-digital', '精益数字化', 'Lean Digital Transformation'],
  ['lean-marketing', '精益营销', 'Lean Marketing'],
  ['lean-governance', '精益治理', 'Lean Governance'],
]
export const leanCategories: KnowledgeCategory[] = leanNames.map(([slug, zh, en], index) => ({
  ...knowledgeCategories[index], slug, zh, en,
}))
export const leanCategoryBySlug = Object.fromEntries(leanCategories.map(category => [category.slug, category])) as Record<string, KnowledgeCategory>

const legacyLeanToCategory: Record<string, string> = {
  investment: 'lean-invest', preparation: 'lean-opening', operations: 'lean-diagnosis',
  revenue: 'lean-revenue', cost: 'lean-cost', digital: 'lean-digital', 'digital-platform': 'lean-digital',
  marketing: 'lean-marketing', team: 'lean-governance',
  'hotel-investment': 'lean-invest', 'hotel-opening': 'lean-opening', 'hotel-diagnosis': 'lean-diagnosis',
  'hotel-revenue': 'lean-revenue', 'hotel-cost': 'lean-cost', 'hotel-digital': 'lean-digital',
  'hotel-marketing': 'lean-marketing', 'hotel-governance': 'lean-governance',
}
export function normalizeLeanCategory(category?: string) {
  if (category && leanCategoryBySlug[category]) return category
  return legacyLeanToCategory[category || ''] || 'lean-diagnosis'
}
export function isLeanCategory(category: string) {
  return Boolean(leanCategoryBySlug[category] || legacyLeanToCategory[category])
}
export function getLeanArticleCategory(article: { category?: string; titleZh?: string }) {
  if (!article.category?.startsWith('lean-') && /收益|定价|房价|RevPAR|收入管理/iu.test(article.titleZh || '')) return 'lean-revenue'
  return normalizeLeanCategory(article.category)
}
export function categoryForKnowledgeTopic(topic: string) {
  const mapping: Record<string, string> = {
    investment: 'hotel-investment', 'hotel-opening': 'hotel-opening', operations: 'hotel-diagnosis',
    revenue: 'hotel-revenue', cost: 'hotel-cost', 'ai-search': 'hotel-digital', marketing: 'hotel-marketing',
    distribution: 'hotel-revenue', team: 'hotel-governance', governance: 'hotel-governance', renovation: 'hotel-investment',
    'cultural-tourism': 'hotel-cultural-tourism', 'silver-economy': 'hotel-silver-economy',
  }
  return mapping[topic] || 'hotel-diagnosis'
}
