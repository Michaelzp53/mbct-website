export type OwnerDecision = {
  id: string
  zh: string
  en: string
  slug: string | null
  href?: string
  stage?: 'hotel-investment' | 'hotel-development' | 'hotel-opening' | 'hotel-operation-improvement' | 'hotel-revenue' | 'hotel-renovation' | 'hotel-exit'
}

export const ownerDecisions: OwnerDecision[] = [
  { id: 'buy', zh: '如何判断一个酒店项目该不该投资？', en: 'How to Evaluate the Investment Feasibility of a Hotel Project', slug: 'hotel-demand-stress-tests-investment-2026-08-12', stage: 'hotel-investment' },
  { id: 'brand', zh: '续约、换牌，还是独立经营？', en: 'Brand Renewal, Rebranding, or Independent Operation', slug: 'hotel-brand-contract-total-cost-2026-09-14' },
  { id: 'renovation', zh: '存量酒店改造应该怎么做？', en: 'How Should an Existing Hotel Be Renovated?', slug: 'legacy-hotel-renovation-diagnosis-2026-06-03', stage: 'hotel-renovation' },
  { id: 'opening', zh: '筹开前有哪些必看重点？', en: 'Key Pre-opening Priorities', slug: null, href: '/lean/article/new-hotel-ramp-up-sequence-2026-05-23', stage: 'hotel-opening' },
  { id: 'revenue', zh: '客房收入没有增长，怎么改善？', en: 'How Should Room Revenue Be Improved When It Stops Growing?', slug: 'urban-business-hotel-more-orders-less-profit-2026-07-03', stage: 'hotel-revenue' },
  { id: 'price', zh: '房价体系与分销渠道如何协同？', en: 'Aligning Pricing Strategy with Distribution Channels', slug: 'hotel-channel-price-authority-map-2026-09-16', stage: 'hotel-revenue' },
  { id: 'labor', zh: '酒店人力成本应当怎么优化？', en: 'How Should Hotel Labor Cost Be Optimized?', slug: 'hotel-cost-optimization-dangers-2026-05-22', stage: 'hotel-revenue' },
  { id: 'fb', zh: '酒店餐饮，该自营还是外包？', en: 'Should Hotel Food and Beverage Be Operated or Outsourced?', slug: 'hotel-fb-operate-or-outsource-2026-11-12', stage: 'hotel-revenue' },
  { id: 'complaints', zh: '哪类客诉必须结合经营动作处理？', en: 'Which Guest Complaints Require Structural Operational Interventions', slug: 'hotel-quiet-departure-case-study-2026-06-10', stage: 'hotel-revenue' },
  { id: 'turnaround', zh: '亏损老酒店如何扭亏为赢？', en: 'Turnaround Strategies for Loss-Making Legacy Hotels', slug: 'hotel-2027-budget-gop-cash-flow-2026-09-21', stage: 'hotel-revenue' },
  { id: 'county', zh: '县域市场与一二线城市的投资逻辑有何不同？', en: 'Key Differences Between County-Level and Urban Hotel Markets', slug: '40wan-hotel-sinking-market-investment-2026-05-24' },
  { id: 'exit', zh: '酒店经营中出现哪些情况应当出售或停止经营？', en: 'When Should a Hotel Be Sold or Closed?', slug: 'china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18', stage: 'hotel-exit' },
]

export function ownerDecisionHref(lang: string, decision: OwnerDecision) {
  if (decision.href) return `/${lang}${decision.href.startsWith('/') ? decision.href : `/${decision.href}`}`
  return decision.slug ? `/${lang}/knowledge/${decision.slug}` : null
}
