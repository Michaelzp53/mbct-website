/** Shared lifecycle stage labels for nav, footer, topic pages, and case filters. */

export type LifecycleSlug =
  | 'hotel-investment'
  | 'hotel-development'
  | 'hotel-opening'
  | 'hotel-operation-improvement'
  | 'hotel-renovation'
  | 'hotel-exit'

export type CaseStageId = 'investment' | 'development' | 'opening' | 'operation' | 'renovation' | 'exit'

export const LIFECYCLE_STAGES: Array<{
  slug: LifecycleSlug
  caseStage: CaseStageId
  shortZh: string
  shortEn: string
  /** Full name in parentheses per screenshot checklist */
  fullZh: string
  fullEn: string
  /** Nav / submenu label — keep identical across all 全周期方案 menus */
  navZh: string
  navEn: string
  /** Bright accent for dark overlays / night hero bands */
  accent: string
  /** Darker accent for light surfaces (footer, white cards) */
  accentOnLight: string
}> = [
  {
    slug: 'hotel-investment',
    caseStage: 'investment',
    shortZh: '投',
    shortEn: 'Invest',
    fullZh: '项目投资',
    fullEn: 'Investment',
    navZh: '酒店投资',
    navEn: 'Investment',
    accent: '#f59e0b',
    accentOnLight: '#b45309',
  },
  {
    slug: 'hotel-development',
    caseStage: 'development',
    shortZh: '建',
    shortEn: 'Build',
    fullZh: '项目建设',
    fullEn: 'Development',
    navZh: '酒店建设',
    navEn: 'Development',
    accent: '#38bdf8',
    accentOnLight: '#0369a1',
  },
  {
    slug: 'hotel-opening',
    caseStage: 'opening',
    shortZh: '筹',
    shortEn: 'Pre-open',
    fullZh: '项目筹备',
    fullEn: 'Pre-opening',
    navZh: '酒店筹开',
    navEn: 'Pre-Opening',
    accent: '#34d399',
    accentOnLight: '#047857',
  },
  {
    slug: 'hotel-operation-improvement',
    caseStage: 'operation',
    shortZh: '管',
    shortEn: 'Operate',
    fullZh: '项目管理',
    fullEn: 'Operations',
    navZh: '经营改善',
    navEn: 'Operations',
    accent: '#a78bfa',
    accentOnLight: '#6d28d9',
  },
  {
    slug: 'hotel-renovation',
    caseStage: 'renovation',
    shortZh: '改',
    shortEn: 'Renew',
    fullZh: '项目改造',
    fullEn: 'Renovation',
    navZh: '改造升级',
    navEn: 'Renovation',
    accent: '#fb7185',
    accentOnLight: '#be123c',
  },
  {
    slug: 'hotel-exit',
    caseStage: 'exit',
    shortZh: '退',
    shortEn: 'Exit',
    fullZh: '退出机制',
    fullEn: 'Exit',
    navZh: '资产退出',
    navEn: 'Exit',
    accent: '#fbbf24',
    accentOnLight: '#a16207',
  },
]

export function lifecycleNavLinks(lang: string) {
  return LIFECYCLE_STAGES.map((stage) => ({
    href: `/${lang}/${stage.slug}`,
    label: lang === 'en' ? stage.navEn : stage.navZh,
  }))
}

export function stageDisplayLabel(stage: (typeof LIFECYCLE_STAGES)[number], lang: string) {
  if (lang === 'en') return `${stage.shortEn} (${stage.fullEn})`
  return `${stage.shortZh}（${stage.fullZh}）`
}

/** Two-line label for narrow six-column grids (avoids EN overflow). */
export function stageDisplayParts(stage: (typeof LIFECYCLE_STAGES)[number], lang: string) {
  if (lang === 'en') return { primary: stage.shortEn, secondary: `(${stage.fullEn})` }
  return { primary: stage.shortZh, secondary: `（${stage.fullZh}）` }
}
