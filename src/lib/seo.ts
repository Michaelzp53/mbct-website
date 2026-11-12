export const siteOrigin = 'https://www.marvelbros.com'

/** Default social / AI share image. Keep a real hotel scene for hospitality identity. */
export const defaultOgImage = {
  url: `${siteOrigin}/hero-hung-li-1HbWj9BDbjE-unsplash.jpg`,
  width: 1920,
  height: 1079,
  alt: '迈创兄弟C&T · 酒店全生命周期价值提升咨询',
} as const

export const defaultOgImages = [defaultOgImage]

export const crawlKeywords = {
  zh: [
    '迈创兄弟C&T', 'MarvelBros', 'MBCT',
    '酒店全生命周期价值提升咨询',
    '酒店投资', '酒店筹开', '酒店筹建', '酒店经营改善',
    '酒店投、筹、管、退、改决议', '投管知识', '管享精道',
    '酒店业主', '酒店投资人', '酒店管理者',
    '酒店改造', '酒店退出', '酒店扭亏', '酒店餐饮', '酒店人力成本', '酒店收益管理',
  ],
  en: [
    'MarvelBros C&T', 'MBCT',
    'hotel investment', 'hotel pre-opening', 'hotel operating improvement',
    'hotel renovation', 'hotel exit', 'hotel turnaround', 'hotel food and beverage', 'hotel labor cost',
  ],
}
