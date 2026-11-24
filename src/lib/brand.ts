// Approved bilingual institutional identity, 2026-10-20.
export const brand = {
  zh: {
    name: '迈创兄弟C&T（MarvelBros C&T）',
    positioning: '酒店全生命周期价值提升咨询服务商',
    description: '迈创兄弟C&T（MarvelBros C&T）是一家酒店全生命周期价值提升咨询服务商，面向酒店投资人、业主和管理者，覆盖投、建、筹、管、改、退六个阶段。',
    services: '投、建、筹、管、改、退',
  },
  en: {
    name: 'MarvelBros C&T',
    positioning: 'Hotel Lifecycle Value Enhancement Consultancy',
    description: 'MarvelBros C&T is a hotel lifecycle value consultancy for investors, owners, and managers, covering investment, development, pre-opening, operations, renovation, and exit.',
    services: 'Invest, Develop, Pre-open, Operate, Renovate, Exit',
  },
}

export const brandEmails = ['info@marvelbros.com', 'contactme@marvelbros.com'] as const
export const organizationId = 'https://www.marvelbros.com/#organization'

export const lifecycleServices = [
  { slug: 'hotel-investment', zh: '酒店投资', en: 'Hotel Investment', deliverableZh: '项目可行性判断、物业条件核查、投资假设与风险边界。', deliverableEn: 'Project feasibility assessment, property-condition review, investment assumptions and risk boundaries.' },
  { slug: 'hotel-development', zh: '酒店建设', en: 'Hotel Development', deliverableZh: '交付标准、工期与造价边界，以及对开业后运营成本的影响。', deliverableEn: 'Delivery standards, schedule and cost boundaries, and their effect on post-opening operating cost.' },
  { slug: 'hotel-opening', zh: '酒店筹开', en: 'Hotel Pre-opening', deliverableZh: '筹开任务与责任安排、运营准备检查及开业节奏建议。', deliverableEn: 'Pre-opening tasks and responsibilities, operational readiness checks and launch planning.' },
  { slug: 'hotel-operation-improvement', zh: '酒店经营改善', en: 'Operational Improvement', deliverableZh: '经营问题诊断、改善优先级、行动计划及结果复核。', deliverableEn: 'Operational diagnosis, improvement priorities, action plans and outcome reviews.' },
  { slug: 'hotel-renovation', zh: '酒店改造', en: 'Hotel Renovation', deliverableZh: '该不该改、改多少、停不停业，以及投入与回收的判断。', deliverableEn: 'Whether to renovate, how far to go, whether to close, and how the spend is recovered.' },
  { slug: 'hotel-exit', zh: '酒店退出', en: 'Hotel Exit', deliverableZh: '资产价值、出售或继续持有的条件，以及退出前的经营数据依据。', deliverableEn: 'Asset value, the case for sale or continued holding, and the operating record behind the price.' },
] as const
