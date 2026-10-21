// Approved bilingual institutional identity, 2026-10-20.
export const brand = {
  zh: {
    name: '迈创兄弟C&T（MarvelBros C&T）',
    positioning: '酒店全生命周期价值提升咨询服务商',
    description: '迈创兄弟C&T（MarvelBros C&T）是一家酒店全生命周期价值提升咨询服务商，面向酒店投资人、业主和管理者，提供酒店投资、酒店筹开与酒店经营改善咨询服务。',
    services: '酒店投资｜酒店筹开｜酒店经营改善',
  },
  en: {
    name: 'MarvelBros C&T',
    positioning: 'Hotel Lifecycle Value Enhancement Consultancy',
    description: 'MarvelBros C&T is a hotel consultancy focused on value enhancement throughout the hotel lifecycle. We advise hotel investors, owners and managers on hotel investment, pre-opening and operational improvement.',
    services: 'Hotel Investment | Pre-opening | Operational Improvement',
  },
}

export const brandEmails = ['info@marvelbros.com', 'contactme@marvelbros.com'] as const
export const organizationId = 'https://www.marvelbros.com/#organization'

export const lifecycleServices = [
  { slug: 'hotel-investment', zh: '酒店投资', en: 'Hotel Investment', deliverableZh: '项目可行性判断、物业条件核查、投资假设与风险边界。', deliverableEn: 'Project feasibility assessment, property-condition review, investment assumptions and risk boundaries.' },
  { slug: 'hotel-opening', zh: '酒店筹开', en: 'Hotel Pre-opening', deliverableZh: '筹开任务与责任安排、运营准备检查及开业节奏建议。', deliverableEn: 'Pre-opening tasks and responsibilities, operational readiness checks and launch planning.' },
  { slug: 'hotel-operation-improvement', zh: '酒店经营改善', en: 'Operational Improvement', deliverableZh: '经营问题诊断、改善优先级、行动计划及结果复核。', deliverableEn: 'Operational diagnosis, improvement priorities, action plans and outcome reviews.' },
] as const
