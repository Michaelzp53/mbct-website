export type OwnerDecision = {
  id: string
  group: 'invest' | 'prepare' | 'manage' | 'exit' | 'renew'
  zh: string
  en: string
  slug: string | null
}

export const ownerDecisionGroups = [
  {
    id: 'invest' as const,
    zh: '投资',
    en: 'Investment',
    summaryZh: '判断项目该不该做，以及品牌合同到期后如何选择。',
    summaryEn: 'Whether a project should proceed, and what to do when a brand contract expires.',
  },
  {
    id: 'prepare' as const,
    zh: '筹开',
    en: 'Pre-opening',
    summaryZh: '开业前必须先确定的事项。',
    summaryEn: 'What must be settled before opening.',
  },
  {
    id: 'manage' as const,
    zh: '经营管理',
    en: 'Operations',
    summaryZh: '收入、房价与渠道、人力成本、客诉、餐饮，以及县域酒店和城市酒店的差别。',
    summaryEn: 'Revenue, rate and channels, labor cost, complaints, food service, and how county hotels differ from city hotels.',
  },
  {
    id: 'exit' as const,
    zh: '退出',
    en: 'Exit',
    summaryZh: '酒店出现哪些情况应当出售或停止经营。',
    summaryEn: 'In which situations a hotel should be sold or closed.',
  },
  {
    id: 'renew' as const,
    zh: '改造',
    en: 'Renovation',
    summaryZh: '存量酒店改造怎么做，亏损老酒店怎么扭亏为赢。',
    summaryEn: 'How to renovate an existing hotel, and how a loss-making hotel returns to profit.',
  },
]

export const ownerDecisions: OwnerDecision[] = [
  { id: 'buy', group: 'invest', zh: '如何判断酒店项目该不该投资', en: 'How to judge whether a hotel project should proceed', slug: 'hotel-demand-stress-tests-investment-2026-08-12' },
  { id: 'brand', group: 'invest', zh: '品牌合同到期后，续约、更换品牌还是独立经营', en: 'When the brand contract expires: renew, change brand, or operate independently', slug: 'hotel-brand-contract-total-cost-2026-09-14' },
  { id: 'opening', group: 'prepare', zh: '酒店筹开之前必须先确定的事项', en: 'What must be settled before hotel pre-opening', slug: 'hotel-ramp-up-sequence-2026-05-23' },
  { id: 'revenue', group: 'manage', zh: '客房收入没有增长，怎么改善？', en: 'Room revenue is not growing. How can it be improved?', slug: 'urban-business-hotel-more-orders-less-profit-2026-07-03' },
  { id: 'price', group: 'manage', zh: '房价、渠道与利润如何一并管理', en: 'How to manage rate, channels, and profit together', slug: 'hotel-channel-price-authority-map-2026-09-16' },
  { id: 'labor', group: 'manage', zh: '优化人力成本应当怎么调整', en: 'How labor cost should be adjusted', slug: 'hotel-cost-optimization-dangers-2026-05-22' },
  { id: 'complaints', group: 'manage', zh: '哪类客诉必须提交并结合经营动作处理？', en: 'Which guest complaints must be submitted and handled with operating actions?', slug: 'hotel-quiet-departure-case-study-2026-06-10' },
  { id: 'fb', group: 'manage', zh: '酒店餐饮，自营还是外包', en: 'Hotel food and beverage: in-house or outsourced', slug: null },
  { id: 'county', group: 'manage', zh: '县域酒店与城市酒店的经营有何不同', en: 'How county hotels and city hotels differ in operation', slug: '40wan-hotel-sinking-market-investment-2026-05-24' },
  { id: 'exit', group: 'exit', zh: '酒店出现哪些情况应当出售或停止经营？', en: 'In which situations should a hotel be sold or closed?', slug: 'china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18' },
  { id: 'renovation', group: 'renew', zh: '存量酒店改造怎么做', en: 'How to renovate an existing hotel', slug: 'legacy-hotel-renovation-diagnosis-2026-06-03' },
  { id: 'turnaround', group: 'renew', zh: '亏损老酒店怎么扭亏为赢', en: 'How a loss-making hotel returns to profit', slug: 'hotel-2027-budget-gop-cash-flow-2026-09-21' },
]

export function ownerDecisionHref(lang: string, decision: OwnerDecision) {
  return decision.slug ? `/${lang}/knowledge/${decision.slug}` : null
}
