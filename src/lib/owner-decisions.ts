export type OwnerDecision = {
  id: string
  zh: string
  en: string
  slug: string | null
}

export const ownerDecisions: OwnerDecision[] = [
  { id: 'buy', zh: '如何判断一个酒店项目该不该投资', en: 'How to judge whether a hotel project should proceed', slug: 'hotel-demand-stress-tests-investment-2026-08-12' },
  { id: 'brand', zh: '续约、换牌，还是独立经营', en: 'Renew, rebrand, or go independent', slug: 'hotel-brand-contract-total-cost-2026-09-14' },
  { id: 'renovation', zh: '存量酒店改造应该怎么做', en: 'How an existing hotel should be renovated', slug: 'legacy-hotel-renovation-diagnosis-2026-06-03' },
  { id: 'opening', zh: '筹开前必看重点', en: 'Priorities to check before opening', slug: null },
  { id: 'revenue', zh: '客房收入没有增长，怎么改善', en: 'Room revenue is not growing. How to improve it', slug: 'urban-business-hotel-more-orders-less-profit-2026-07-03' },
  { id: 'price', zh: '价格和渠道一起看', en: 'Price and channels together', slug: 'hotel-channel-price-authority-map-2026-09-16' },
  { id: 'labor', zh: '酒店人力成本应当怎么优化', en: 'How hotel labor cost should be optimized', slug: 'hotel-cost-optimization-dangers-2026-05-22' },
  { id: 'fb', zh: '酒店餐饮，该自营还是外包', en: 'Hotel food and beverage: operate it, or outsource it', slug: 'hotel-fb-operate-or-outsource-2026-11-12' },
  { id: 'complaints', zh: '哪类客诉必须结合经营动作处理', en: 'Which guest complaints must be handled with operating actions', slug: 'hotel-quiet-departure-case-study-2026-06-10' },
  { id: 'turnaround', zh: '亏损老酒店怎么扭亏为赢', en: 'How a loss-making hotel returns to profit', slug: 'hotel-2027-budget-gop-cash-flow-2026-09-21' },
  { id: 'county', zh: '县域和城市哪里不同', en: 'Where county and city hotels differ', slug: '40wan-hotel-sinking-market-investment-2026-05-24' },
  { id: 'exit', zh: '酒店经营中出现哪些情况应当出售或停止经营', en: 'In which operating situations a hotel should be sold or closed', slug: 'china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18' },
]

export function ownerDecisionHref(lang: string, decision: OwnerDecision) {
  return decision.slug ? `/${lang}/knowledge/${decision.slug}` : null
}
