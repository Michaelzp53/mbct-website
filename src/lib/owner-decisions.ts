export type OwnerDecision = {
  id: string
  zh: string
  en: string
  slug: string | null
}

export const ownerDecisions: OwnerDecision[] = [
  { id: 'buy', zh: '买还是不买', en: 'Buy, or walk away', slug: 'hotel-demand-stress-tests-investment-2026-08-12' },
  { id: 'brand', zh: '续约、换牌，还是独立经营', en: 'Renew, rebrand, or go independent', slug: 'hotel-brand-contract-total-cost-2026-09-14' },
  { id: 'renovation', zh: '改造做到哪一步停', en: 'How far a renovation should go', slug: 'legacy-hotel-renovation-diagnosis-2026-06-03' },
  { id: 'opening', zh: '筹开前钉死什么', en: 'What to lock before opening', slug: 'hotel-ramp-up-sequence-2026-05-23' },
  { id: 'revenue', zh: '收入上不去，先查哪三项', en: 'When revenue stalls, check these three', slug: 'urban-business-hotel-more-orders-less-profit-2026-07-03' },
  { id: 'price', zh: '价格和渠道一起看', en: 'Price and channels together', slug: 'hotel-channel-price-authority-map-2026-09-16' },
  { id: 'labor', zh: '人力成本先动哪一层', en: 'Which labor cost to move first', slug: 'hotel-cost-optimization-dangers-2026-05-22' },
  { id: 'fb', zh: '餐饮自营还是外包', en: 'Keep food and beverage in-house, or outsource it', slug: null },
  { id: 'complaints', zh: '哪些客诉进经营会', en: 'Which complaints belong in the operating meeting', slug: 'hotel-quiet-departure-case-study-2026-06-10' },
  { id: 'turnaround', zh: '老店扭亏的顺序', en: 'The order of a turnaround', slug: 'hotel-2027-budget-gop-cash-flow-2026-09-21' },
  { id: 'county', zh: '县域和城市哪里不同', en: 'Where county and city hotels differ', slug: '40wan-hotel-sinking-market-investment-2026-05-24' },
  { id: 'exit', zh: '什么信号该卖、该停', en: 'Signals to sell or stop', slug: 'china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18' },
]

export function ownerDecisionHref(lang: string, decision: OwnerDecision) {
  return decision.slug ? `/${lang}/knowledge/${decision.slug}` : null
}
