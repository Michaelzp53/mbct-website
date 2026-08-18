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
  { slug: 'hotel-investment', zh: '酒店投资判断', en: 'Hotel Investment', descriptionZh: '项目可行性、回报模型与收购退出判断。', descriptionEn: 'Project feasibility, return models, acquisitions and exits.', color: '#b45309', icon: '◈' },
  { slug: 'hotel-opening', zh: '酒店筹建开业', en: 'Hotel Opening', descriptionZh: '筹建管理、开业准备与品牌定位。', descriptionEn: 'Development management, opening readiness and brand positioning.', color: '#c2410c', icon: '◇' },
  { slug: 'hotel-diagnosis', zh: '经营诊断改善', en: 'Hotel Diagnosis', descriptionZh: '经营诊断、效益提升与净利润下降的原因判断。', descriptionEn: 'Operating diagnosis, performance improvement and profit recovery.', color: '#15803d', icon: '⌁' },
  { slug: 'hotel-revenue', zh: '收益与定价', en: 'Revenue & Pricing', descriptionZh: 'RevPAR、OTA、收益管理与客源结构。', descriptionEn: 'RevPAR, OTAs, revenue management and demand mix.', color: '#0369a1', icon: '↗' },
  { slug: 'hotel-cost', zh: '成本与人效', en: 'Cost & Productivity', descriptionZh: '人力、运营成本与人效管理。', descriptionEn: 'Labor, operating cost and productivity management.', color: '#a16207', icon: '⊙' },
  { slug: 'hotel-digital', zh: '数字化与AI获客', en: 'Digital & AI Acquisition', descriptionZh: 'AI 搜索、数字化与新媒体获客。', descriptionEn: 'AI search, digital operations and new-media acquisition.', color: '#0f766e', icon: '⌘' },
  { slug: 'hotel-marketing', zh: '品牌与营销', en: 'Brand & Marketing', descriptionZh: '品牌定位、营销策略与市场增长。', descriptionEn: 'Brand positioning, marketing strategy and market growth.', color: '#be185d', icon: '✦' },
  { slug: 'hotel-governance', zh: '管理与组织', en: 'Governance & Organization', descriptionZh: '决策机制、团队管理与业主沟通。', descriptionEn: 'Decision systems, team management and owner communication.', color: '#6d28d9', icon: '◎' },
]

export const categoryBySlug = Object.fromEntries(knowledgeCategories.map((category) => [category.slug, category])) as Record<string, KnowledgeCategory>

const legacyLeanToCategory: Record<string, string> = {
  investment: 'hotel-investment', preparation: 'hotel-opening', operations: 'hotel-diagnosis',
  revenue: 'hotel-revenue', cost: 'hotel-cost', digital: 'hotel-digital',
  'digital-platform': 'hotel-digital', marketing: 'hotel-marketing', team: 'hotel-governance',
}

export function normalizeLeanCategory(category?: string) {
  return legacyLeanToCategory[category || ''] || 'hotel-diagnosis'
}

export function categoryForKnowledgeTopic(topic: string) {
  const mapping: Record<string, string> = {
    investment: 'hotel-investment', 'hotel-opening': 'hotel-opening', operations: 'hotel-diagnosis',
    revenue: 'hotel-revenue', cost: 'hotel-cost', 'ai-search': 'hotel-digital', marketing: 'hotel-marketing',
    distribution: 'hotel-revenue', team: 'hotel-governance', governance: 'hotel-governance', renovation: 'hotel-investment',
  }
  return mapping[topic] || 'hotel-diagnosis'
}
