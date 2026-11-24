import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export type TopicSlug = 'hotel-investment' | 'hotel-development' | 'hotel-opening' | 'hotel-operation-improvement' | 'hotel-renovation' | 'hotel-revenue' | 'hotel-exit'

export const STAGE_PAGES: Array<{ slug: TopicSlug; zh: string; en: string; titleZh: string; titleEn: string }> = [
  { slug: 'hotel-investment', zh: '投', en: 'Invest', titleZh: '酒店投资', titleEn: 'Investment' },
  { slug: 'hotel-development', zh: '建', en: 'Build', titleZh: '酒店开发建设', titleEn: 'Development' },
  { slug: 'hotel-opening', zh: '筹', en: 'Pre-open', titleZh: '酒店筹开', titleEn: 'Pre-opening' },
  { slug: 'hotel-operation-improvement', zh: '管', en: 'Operate', titleZh: '酒店经营改善', titleEn: 'Operating improvement' },
  { slug: 'hotel-renovation', zh: '改', en: 'Renew', titleZh: '酒店改造', titleEn: 'Renovation' },
  { slug: 'hotel-exit', zh: '退', en: 'Exit', titleZh: '酒店退出', titleEn: 'Exit' },
]

const contactTypeBySlug: Partial<Record<TopicSlug, string>> = {
  'hotel-development': 'development',
  'hotel-exit': 'exit',
  'hotel-renovation': 'renovation',
}

type TopicCopy = {
  title: string
  eyebrow: string
  summary: string
  problemTitle: string
  problem: string
  analysis: string[]
  method: string[]
  caseTitle: string
  caseBody: string
  faq: Array<[string, string]>
}

const copies: Record<TopicSlug, { zh: TopicCopy; en: TopicCopy }> = {
  'hotel-investment': {
    zh: {
      title: '酒店投资分析：先判断项目价值，再决定是否投入', eyebrow: '酒店投资',
      summary: '酒店投资不能只看市场热度、品牌名气或单一回报测算。迈创兄弟C&T从市场需求、物业条件、产品定位、投资结构和长期经营能力出发，帮助投资人识别项目价值与风险。',
      problemTitle: '酒店项目为什么容易在投资阶段判断失真？',
      problem: '市场预测过于乐观、建设投入被低估、品牌与客群错配，以及只算收入不算完整经营成本，都会让项目在开业前就埋下长期问题。',
      analysis: ['区域需求是否足以支撑目标房价与入住率', '物业条件能否匹配酒店产品与运营动线', '品牌、客群和投资规模是否相互匹配', '现金流、退出路径和下行情景是否经过检验'],
      method: ['建立市场与竞争项目基线', '核对物业、产品和建设投入边界', '验证收入、成本与现金流模型', '形成投资建议、风险清单与决策条件'],
      caseTitle: '代表性实践：筹开投资优化', caseBody: '在代表性筹开项目中，专业人员通过重新核对产品标准、建设边界和运营需求，形成超过3000万元的投资优化建议。',
      faq: [['酒店投资分析最先看什么？', '先看真实市场需求、物业基础和目标客群，再判断产品、品牌与投资模型是否成立。'], ['酒店品牌知名度高就值得投资吗？', '不一定。品牌必须与区域需求、物业条件、投资承受力和经营能力匹配。'], ['可行性研究能替投资人做决定吗？', '不能。专业分析的价值是把关键事实、风险与决策条件讲清楚，最终投资决定仍由投资人作出。']],
    },
    en: {
      title: 'Hotel Investment Analysis: Assess Value Before Committing Capital', eyebrow: 'Hotel Investment',
      summary: 'Hotel investment should not rely on market excitement, brand recognition, or a single return projection. MarvelBros C&T evaluates demand, property fundamentals, positioning, capital structure, and long-term operating capacity.',
      problemTitle: 'Why do hotel investment decisions become distorted?', problem: 'Overoptimistic demand assumptions, underestimated development costs, brand-market mismatch, and incomplete operating costs can lock in problems before a hotel opens.',
      analysis: ['Whether local demand supports the target rate and occupancy', 'Whether the property supports the intended product and operating flow', 'Whether brand, guest segment, and capital commitment align', 'Whether cash flow, downside scenarios, and exit options have been tested'],
      method: ['Establish the market and competitive baseline', 'Verify property, product, and development boundaries', 'Test revenue, cost, and cash-flow assumptions', 'Deliver an investment view, risk register, and decision conditions'],
      caseTitle: 'Representative practice: pre-opening investment optimization', caseBody: 'In a representative pre-opening engagement, specialists reviewed product standards, construction scope, and operating requirements and identified more than RMB 30 million in investment optimization.',
      faq: [['What should a hotel investment analysis examine first?', 'Start with real demand, property fundamentals, and target guests, then test whether product, brand, and investment assumptions align.'], ['Does a well-known hotel brand make a project investable?', 'Not by itself. The brand must fit local demand, the property, capital tolerance, and operating capacity.'], ['Does a feasibility study make the investment decision?', 'No. It clarifies facts, risks, and decision conditions; the investor retains the final decision.']],
    },
  },
  'hotel-opening': {
    zh: { title: '酒店筹开管理：把开业风险解决在营业之前', eyebrow: '酒店筹开', summary: '酒店筹开连接投资方案与真实经营。迈创兄弟C&T围绕建设投入、产品落地、组织搭建、运营标准和开业准备，帮助业主减少返工、延期与开业后的经营摩擦。', problemTitle: '为什么酒店按期建成，仍可能没有准备好开业？', problem: '工程完成不等于运营就绪。空间动线、设备交付、人员训练、供应链、系统数据和销售承诺任何一项脱节，都可能把筹开问题带到开业后。', analysis: ['设计与运营需求是否在施工前对齐', '关键设备、系统和物资是否具备交付条件', '组织岗位、标准流程和培训是否完成验证', '销售计划与酒店实际承载能力是否一致'], method: ['建立筹开总控表和关键路径', '按运营场景审查设计与工程交付', '同步推进人员、系统、供应链和市场准备', '通过模拟运营与问题清单验证开业条件'], caseTitle: '代表性实践：用运营视角减少筹开返工', caseBody: '在代表性筹开项目中，专业人员把产品标准、工程边界和后续运营需求放在同一张决策表中审查，并形成超过3000万元的投资优化建议。', faq: [['酒店筹开管理什么时候介入最好？', '越早越好，尤其应在设计和重大采购确定前介入，避免运营问题固化为建设成本。'], ['工程完工后还需要模拟运营吗？', '需要。模拟运营能检验人员、系统、设备和服务流程是否真正衔接。'], ['筹开最容易被忽视的是什么？', '往往是跨部门接口，例如设计与运营、销售承诺与现场能力、系统配置与实际流程之间的接口。']] },
    en: { title: 'Hotel Pre-opening Management: Resolve Opening Risk Before Trading', eyebrow: 'Hotel Pre-opening', summary: 'Pre-opening connects the investment plan with real operations. MarvelBros C&T aligns development, product delivery, organization, operating standards, and opening readiness to reduce rework, delay, and post-opening friction.', problemTitle: 'Why can a completed hotel still be unready to open?', problem: 'Construction completion is not operating readiness. Misalignment in flow, equipment, training, supply, systems, or sales promises can carry pre-opening failures into daily operations.', analysis: ['Whether design and operating requirements aligned before construction', 'Whether critical equipment, systems, and supplies are ready', 'Whether roles, procedures, and training have been tested', 'Whether sales commitments match operating capacity'], method: ['Create an integrated pre-opening critical path', 'Review design and delivery through operating scenarios', 'Coordinate people, systems, supply, and market preparation', 'Validate readiness through simulations and issue closure'], caseTitle: 'Representative practice: reducing rework through an operating lens', caseBody: 'In a representative engagement, specialists reviewed product standards, construction scope, and future operating needs on one decision framework and identified more than RMB 30 million in investment optimization.', faq: [['When should pre-opening management begin?', 'As early as possible, particularly before design and major procurement decisions lock in operating constraints.'], ['Is a mock operation necessary after construction?', 'Yes. It tests whether people, systems, equipment, and service processes work together.'], ['What is most often overlooked before opening?', 'Cross-functional interfaces, especially between design and operations, sales promises and delivery capacity, and system settings and real workflows.']] },
  },
  'hotel-operation-improvement': {
    zh: { title: '酒店经营改善：从经营症状找到利润问题的根因', eyebrow: '酒店经营改善', summary: '入住率、收入和忙碌程度并不等于经营质量。迈创兄弟C&T结合经营数据与现场诊断，识别影响收入、成本、服务和执行效率的关键因素。', problemTitle: '为什么入住率提高了，利润仍可能下降？', problem: '低质量客源、渠道成本、价格纪律、人工效率、能耗与服务补偿可能吞噬收入增长。只追单一指标，容易把经营症状误当成根因。', analysis: ['客源结构与渠道净贡献是否健康', '房价、入住率和利润是否同步变化', '人员配置与业务高峰是否匹配', '投诉、返工和能耗是否形成隐性成本'], method: ['统一收入、成本、服务与客户数据口径', '通过现场观察验证数据异常', '确定少数真正影响利润的优先问题', '设置责任、节奏和复盘指标推动改善'], caseTitle: '代表性实践：代表性运营成本改善', caseBody: '在代表性经营改善案例中，专业人员通过数据诊断、现场核查与执行复盘，实现25%的运营成本改善。该数据为职业项目经验，不代表对所有项目的承诺。', faq: [['酒店经营诊断与财务审计有什么不同？', '经营诊断不仅核对结果，还分析客源、流程、服务、组织与成本如何共同造成结果。'], ['入住率高为什么不一定赚钱？', '如果房价偏低、渠道成本高、附加承诺多或服务成本失控，高入住率仍可能对应低利润。'], ['经营改善一般先做什么？', '先统一数据口径并找出利润影响最大的少数问题，再决定现场动作。']] },
    en: { title: 'Hotel Performance Improvement: Find the Root Cause Behind the Numbers', eyebrow: 'Performance Improvement', summary: 'Occupancy, revenue, and activity do not automatically indicate operating quality. MarvelBros C&T combines operating data with field diagnosis to identify what materially affects revenue, cost, service, and execution.', problemTitle: 'Why can profit decline while occupancy rises?', problem: 'Low-quality demand, distribution cost, weak pricing discipline, labor inefficiency, energy use, and service recovery can consume revenue growth. A single metric often hides the root cause.', analysis: ['Whether guest and channel mix produce healthy net contribution', 'Whether rate, occupancy, and profit move together', 'Whether staffing matches operating peaks', 'Whether complaints, rework, and energy create hidden cost'], method: ['Align revenue, cost, service, and customer data', 'Use field observation to validate anomalies', 'Prioritize the few issues with material profit impact', 'Assign ownership, cadence, and review measures'], caseTitle: 'Representative practice: operating cost improvement', caseBody: 'In a representative engagement, data diagnosis, field verification, and implementation review contributed to a 25% operating cost improvement. This representative result is not a promise for every hotel.', faq: [['How is an operating diagnosis different from a financial audit?', 'It examines how customer mix, processes, service, organization, and cost combine to create the financial result.'], ['Why can high occupancy be unprofitable?', 'Low rates, high distribution cost, excessive inclusions, and uncontrolled service costs can make high occupancy low quality.'], ['What should performance improvement start with?', 'Align the data and identify the few issues with the largest profit impact before selecting actions.']] },
  },
  'hotel-revenue': {
    zh: { title: '酒店收益提升：从卖出更多房间转向提升收入质量', eyebrow: '酒店收益提升', summary: '酒店收益提升不是单纯涨价或追求满房，而是让价格、渠道、客群、产品和可交付能力形成更健康的组合。', problemTitle: '为什么团队很忙，收益结果却没有改善？', problem: '如果销售只看订单量、收益只看房价、运营只看入住率，各部门会在不同目标下忙碌，最终形成高成本、低净贡献和不稳定体验。', analysis: ['需求质量与客户终身价值是否被区分', '渠道费用和附加权益是否计入净贡献', '价格权限与底线是否清晰', '客房、餐饮、会议与复购是否联动'], method: ['按客群和渠道计算净贡献', '建立需求日历与价格边界', '将销售承诺与交付能力联动', '按周复盘价格、结构、取消与复购'], caseTitle: '实践框架：把销售、收益和运营放在同一张经营图上', caseBody: '迈创兄弟C&T使用统一经营视图检查订单质量、渠道净贡献、交付能力与复购预期，帮助管理者判断哪些收入真正创造长期价值。',       faq: [['收益提升等于提高房价吗？', '不等于。它还包括客群结构、渠道成本、产品组合、取消规则和附加消费。'], ['满房为什么不一定是好结果？', '如果满房建立在低房价、高渠道成本或超出服务承载力之上，利润与口碑都可能受损。'], ['小型酒店也需要收益管理吗？', '需要，但可以从需求日历、渠道净贡献和价格底线三个简单工具开始。']] },
    en: { title: 'Hotel Revenue Improvement: Move From More Rooms Sold to Better Revenue Quality', eyebrow: 'Revenue Improvement', summary: 'Revenue improvement is not simply raising rates or maximizing occupancy. It aligns pricing, channels, customer mix, product, and delivery capacity into a healthier commercial structure.', problemTitle: 'Why does a busy team fail to improve revenue results?', problem: 'When sales tracks volume, revenue tracks rate, and operations tracks occupancy, teams can work toward conflicting goals and produce high cost, weak net contribution, and inconsistent delivery.', analysis: ['Whether demand quality and customer lifetime value are distinguished', 'Whether channel fees and inclusions are counted in net contribution', 'Whether pricing authority and floors are clear', 'Whether rooms, dining, meetings, and repeat business connect'], method: ['Calculate net contribution by segment and channel', 'Build a demand calendar and pricing boundaries', 'Link sales commitments with delivery capacity', 'Review price, mix, cancellation, and repeat business weekly'], caseTitle: 'Operating framework: one view across sales, revenue, and operations', caseBody: 'MarvelBros C&T uses a unified operating view to examine order quality, channel net contribution, delivery capacity, and repeat-business potential so managers can judge which revenue creates durable value.', faq: [['Does revenue improvement mean raising room rates?', 'No. It also covers customer mix, channel cost, product combinations, cancellation terms, and ancillary spend.'], ['Why is full occupancy not always a good result?', 'If it depends on low rates, high distribution cost, or demand beyond service capacity, both profit and reputation can suffer.'], ['Does a small hotel need revenue management?', 'Yes, but it can begin with three simple tools: a demand calendar, channel net contribution, and pricing floors.']] },
  },
  'hotel-development': {
    zh: {
      title: '酒店开发建设：先把交付标准定死，再谈工期与造价', eyebrow: '酒店开发建设',
      summary: '开发阶段决定的不是图纸，是这家酒店未来十年的运营成本结构。',
      problemTitle: '为什么酒店项目在开发阶段就要用运营倒推设计？',
      problem: '设计阶段省下的钱，通常在运营期以更高的代价还回去——动线、机电、后勤空间一旦成型，后期只能靠人力和外包补。',
      analysis: ['用运营需求倒推设计任务书（客房比、餐饮配置、后勤面积）', '机电与后勤动线（洗衣、库房、员工通道、垃圾与收货）', '品牌标准与本地供应链的落差', '施工界面与筹开衔接（交付验收清单与责任划分）'],
      method: ['运营前置评审', '后勤与机电专项核查', '交付验收清单化', '与筹开计划对齐'],
      caseTitle: '代表性实践', caseBody: '',
      faq: [['开发阶段最容易被忽略的是什么？', '最容易被忽略的是运营需求对设计任务书的倒推，以及机电、后勤动线、品牌标准与本地供应链、施工与筹开交接这些一旦成型就很难改的接口。'], ['设计已经定了还能改吗？', '还能改接口和验收标准，但动线、机电和后勤空间一旦成型，后期只能靠人力和外包补，代价更高。'], ['开发与筹开的分界在哪？', '开发把交付标准、造价和运营接口定死；筹开把已交付的物业变成可营业状态。']],
    },
    en: {
      title: 'Hotel Development: Lock Delivery Standards Before Schedule and Cost', eyebrow: 'Hotel Development',
      summary: 'What development decides is not a drawing set. It is the hotel’s operating cost structure for the next decade.',
      problemTitle: 'Why must operations reverse-brief design during development?',
      problem: 'Money saved in design is usually repaid at a higher cost in operations. Once circulation, MEP, and back-of-house space are built, later fixes rely on labor and outsourcing.',
      analysis: ['Reverse-brief the design brief from operating need (room mix, F&B configuration, back-of-house area)', 'MEP and back-of-house flows (laundry, stores, staff routes, waste and receiving)', 'The gap between brand standards and the local supply chain', 'The construction-to-opening interface (handover checklist and accountability)'],
      method: ['Operating review before design lock', 'Back-of-house and MEP special review', 'Checklist the handover', 'Align with the pre-opening plan'],
      caseTitle: 'Representative practice', caseBody: 'Project practice at this stage is disclosed only with client authorization. Public cases are being prepared.',
      faq: [['What is most often missed in development?', 'The operating reverse-brief, plus MEP, back-of-house flow, brand-versus-local supply, and the construction-to-opening handoff—interfaces that are hard to change once built.'], ['Can the design still change after it is locked?', 'Interfaces and acceptance standards can still change. Once circulation, MEP, and back-of-house space are built, later fixes rely on labor and outsourcing at a higher cost.'], ['Where does development end and pre-opening begin?', 'Development locks delivery standards, cost, and operating interfaces. Pre-opening turns the delivered property into a hotel that can trade.']],
    },
  },
  'hotel-exit': {
    zh: {
      title: '酒店退出：先算清资产价值，再决定卖、转还是继续持有', eyebrow: '酒店退出',
      summary: '退出不是终点，是一次资产定价；定价依据在退出前十八个月的经营数据里。',
      problemTitle: '为什么多数酒店退出谈不成？',
      problem: '多数退出谈不成，不是买家压价，是卖方拿不出可核的经营与资产底账。',
      analysis: ['估值口径（收益法倍数 vs 单房重置成本）', '买方尽调常见扣分项（证照、消防、租约、员工安置、维修欠账）', '换牌与转让的合同约束与税负', '退出前经营准备（现金流、品牌合约剩余期、资产状况）'],
      method: ['三条路径对比（出售／转让／继续持有）', '底账与资料包整理', '退出时点与经营节奏匹配', '交易结构建议'],
      caseTitle: '代表性实践', caseBody: '',
      faq: [['什么时候该考虑退出？', '当资产定价、品牌合约剩余期和经营数据已经能支撑卖、转或继续持有的比较时，就应该开始准备，而不是等到不得不卖。定价依据在退出前十八个月的经营数据里。'], ['没有完整数据能卖吗？', '很难。多数退出谈不成，不是买家压价，是卖方拿不出可核的经营与资产底账。'], ['换牌和转让哪个更划算？', '没有统一答案。要看合同约束、税负、品牌剩余期和买方尽调扣分项，先把三条路径放到同一张对比表上。']],
    },
    en: {
      title: 'Hotel Exit: Price the Asset Before Selling, Transferring, or Holding', eyebrow: 'Hotel Exit',
      summary: 'Exit is not an ending. It is an asset pricing event. The pricing evidence sits in the operating data of the eighteen months before exit.',
      problemTitle: 'Why do most hotel exits fail to close?',
      problem: 'Most exits fail to close not because buyers talk the price down, but because sellers cannot produce verifiable operating and asset books.',
      analysis: ['Valuation basis (income multiple vs replacement cost per key)', 'Buyer due-diligence deductions (licenses, fire, leases, staff placement, maintenance backlog)', 'Contract constraints and tax on rebranding or transfer', 'Pre-exit operating preparation (cash flow, remaining brand term, asset condition)'],
      method: ['Compare three paths (sell / transfer / hold)', 'Assemble the books and the data room', 'Match the exit timing to the operating rhythm', 'Advise on transaction structure'],
      caseTitle: 'Representative practice', caseBody: 'Project practice at this stage is disclosed only with client authorization. Public cases are being prepared.',
      faq: [['When should an owner consider exit?', 'When asset pricing, remaining brand term, and operating data can support a comparison of sell, transfer, or hold. The pricing evidence sits in the eighteen months before exit.'], ['Can a hotel be sold without complete data?', 'It is hard. Most exits fail to close because the seller cannot produce verifiable operating and asset books.'], ['Is rebranding or transfer better value?', 'There is no single answer. Compare contract constraints, tax, remaining brand term, and due-diligence deductions on one sheet.']],
    },
  },
  'hotel-renovation': {
    zh: {
      title: '酒店改造：先判断该不该改，再决定改多少、停不停业', eyebrow: '酒店改造',
      summary: '改造是投资决策，不是装修决策；回收期算不清，改造就是赌。',
      problemTitle: '为什么酒店改造不能按装修来做？',
      problem: '改造的钱花在硬件上，回报却来自价格与入住率——两者不等价，必须先算边际产出。',
      analysis: ['改造时机（产品老化／竞争位移／换牌要求）', '停业改造与不停业改造的现金流代价', '改造范围与单房投入的边际产出', '改造期定价与渠道策略'],
      method: ['改造必要性三分法（不改／局部改／整体改）', '投入产出与回收期测算', '分期与不停业方案', '改造期价格与渠道安排'],
      caseTitle: '代表性实践', caseBody: '',
      faq: [['改造一定要停业吗？', '不一定。要比较停业改造与不停业改造的现金流代价，再定分期与停业窗口。'], ['局部改能救回价格吗？', '只有当局部改的单房投入能带来可核的价格或入住率边际产出时才成立。回收期算不清，改造就是赌。'], ['改造预算怎么定才不超？', '先用必要性三分法划范围，再按投入产出和回收期定预算，而不是按装修愿望定预算。']],
    },
    en: {
      title: 'Hotel Renovation: Decide Whether to Renovate Before Scope and Closure', eyebrow: 'Hotel Renovation',
      summary: 'Renovation is an investment decision, not a decoration decision. If payback cannot be calculated, renovation is a bet.',
      problemTitle: 'Why can hotel renovation not be treated as decoration?',
      problem: 'Renovation money is spent on hardware. The return comes from rate and occupancy. The two are not equivalent, so marginal output must be calculated first.',
      analysis: ['Timing (product aging / competitive shift / rebrand requirements)', 'The cash-flow cost of closing versus staying open', 'Scope versus marginal output per key', 'Pricing and channel strategy during works'],
      method: ['A three-way necessity test (do nothing / partial / full)', 'Input-output and payback calculation', 'Phased and stay-open options', 'Rate and channel arrangements during works'],
      caseTitle: 'Representative practice', caseBody: 'Project practice at this stage is disclosed only with client authorization. Public cases are being prepared.',
      faq: [['Must renovation close the hotel?', 'Not necessarily. Compare the cash-flow cost of closing versus staying open, then set the phasing and any closure window.'], ['Can a partial renovation recover rate?', 'Only if spend per key produces verifiable rate or occupancy marginal output. If payback cannot be calculated, renovation is a bet.'], ['How should the renovation budget be set without overrun?', 'Set the scope with the three-way necessity test, then set the budget from input-output and payback, not from a decoration wish list.']],
    },
  },
}

type ServiceModule = {
  id: string
  title: string
  audience: string
  problem: string
  deliverable: string
  firstStep: string
}

const topicServiceModules: Partial<Record<TopicSlug, { zh: ServiceModule[]; en: ServiceModule[] }>> = {
  'hotel-investment': {
    zh: [
      { id: 'project-feasibility', title: '项目可行性与风险判断', audience: '投资人 / 业主', problem: '验证市场需求、物业条件和投资假设是否能够支撑目标房价、入住率与现金流。', deliverable: '市场与竞争基线、情景测算、风险清单和继续、调整或暂停的决策条件。', firstStep: '先整理物业资料、投资边界和目标客群，再核对测算中的关键假设。' },
      { id: 'brand-positioning', title: '品牌与定位选择', audience: '业主 / 项目负责人', problem: '判断品牌承诺、目标客群、产品标准和投资承受力是否真正匹配。', deliverable: '品牌与定位比较、客群逻辑、产品边界和落地原则。', firstStep: '先说明项目要服务哪类客人，以及物业能够稳定交付什么体验。' },
      { id: 'product-renewal', title: '改造与资本安排', audience: '存量资产持有人', problem: '确定先改哪里、投入多少，以及哪些改造能够改善现金流和资产竞争力。', deliverable: '改造优先级、阶段预算、经营影响判断和资本安排建议。', firstStep: '先把必须修复、能够增收和只改善外观的项目分开。' },
    ],
    en: [
      { id: 'project-feasibility', title: 'Feasibility and risk judgment', audience: 'Investors / owners', problem: 'Test whether demand, property fundamentals, and investment assumptions support the target rate, occupancy, and cash flow.', deliverable: 'A market baseline, scenarios, risk register, and decision conditions to proceed, adjust, or pause.', firstStep: 'Start with the property facts, capital boundary, target guests, and the assumptions carrying the model.' },
      { id: 'brand-positioning', title: 'Brand and positioning choice', audience: 'Owners / project leaders', problem: 'Judge whether the brand promise, target guests, product standard, and capital tolerance genuinely fit.', deliverable: 'Brand and positioning comparison, guest logic, product boundaries, and delivery principles.', firstStep: 'Define who the hotel must serve and what experience the property can deliver consistently.' },
      { id: 'product-renewal', title: 'Renovation and capital planning', audience: 'Existing asset owners', problem: 'Decide what to change first, how much to commit, and which improvements can strengthen cash flow and asset competitiveness.', deliverable: 'Renovation priorities, phased budget, operating impact, and capital planning recommendations.', firstStep: 'Separate mandatory repairs, revenue-producing improvements, and cosmetic upgrades.' },
    ],
  },
  'hotel-opening': {
    zh: [
      { id: 'pre-opening-budget', title: '筹开预算与里程碑', audience: '筹开负责人 / 业主', problem: '防止预算、工程节点、采购和开业承诺彼此脱节。', deliverable: '筹开总控表、阶段预算、关键路径、责任人和检查标准。', firstStep: '先把影响开业日期的关键节点与对应预算放进同一张表。' },
      { id: 'service-readiness', title: '运营流程与服务准备', audience: '总经理 / 部门负责人', problem: '检验人员、系统、设备和服务流程是否已经能够共同运转。', deliverable: '核心流程清单、岗位接口、模拟运营安排和问题关闭记录。', firstStep: '从一次完整客人旅程开始，逐项验证预订、入住、在店和离店流程。' },
      { id: 'opening-team', title: '团队组织与开业节奏', audience: '业主 / 人力与运营团队', problem: '避免岗位、培训、排班和现场需求不匹配，导致开业后持续救火。', deliverable: '组织分工、人员到岗计划、培训重点、排班原则和开业复盘节奏。', firstStep: '先按真实业务高峰确认关键岗位、到岗时间和培训验收人。' },
    ],
    en: [
      { id: 'pre-opening-budget', title: 'Opening budget and milestones', audience: 'Pre-opening leaders / owners', problem: 'Prevent the budget, construction milestones, procurement, and opening promises from drifting apart.', deliverable: 'An integrated opening plan, phased budget, critical path, owners, and review criteria.', firstStep: 'Put every date-critical milestone and its budget on one control sheet.' },
      { id: 'service-readiness', title: 'Operating process and service readiness', audience: 'General managers / department leaders', problem: 'Test whether people, systems, equipment, and service processes can operate together.', deliverable: 'Core process checklists, role interfaces, mock-operation plans, and issue-closure records.', firstStep: 'Walk through one complete guest journey from booking to departure and test every handoff.' },
      { id: 'opening-team', title: 'Team organization and launch cadence', audience: 'Owners / HR and operations teams', problem: 'Avoid roles, training, rosters, and field demand becoming misaligned after opening.', deliverable: 'Organization roles, arrival plan, training priorities, roster principles, and post-opening reviews.', firstStep: 'Confirm the critical roles, arrival dates, and training owners against real operating peaks.' },
    ],
  },
  'hotel-operation-improvement': {
    zh: [
      { id: 'operating-diagnosis', title: '经营诊断与改善优先级', audience: '总经理 / 经营团队', problem: '区分表面症状和真正影响利润、服务与效率的少数关键问题。', deliverable: '问题分层、优先级、责任人、行动路线和复盘指标。', firstStep: '先统一收入、成本、服务和客户数据口径，再决定现场动作。' },
      { id: 'revenue-channel-cost', title: '收益、渠道与成本协同', audience: '收益 / 销售 / 财务团队', problem: '解决订单增长但净收入、价格纪律和渠道结构没有同步改善的问题。', deliverable: '净贡献指标、价格边界、渠道协同机制和周度复盘口径。', firstStep: '先按客群和渠道重算净收入，而不是继续只看订单量。' },
      { id: 'market-information', title: '市场、会员与信息承接', audience: '市场销售 / 运营团队', problem: '让客群、产品、渠道、官网信息和复购触点不再彼此脱节。', deliverable: '客群与产品表达、渠道触点地图、信息维护责任和复购路径。', firstStep: '先选择一个重点客群，核对从搜索、预订到离店后的全部信息是否一致。' },
    ],
    en: [
      { id: 'operating-diagnosis', title: 'Operating diagnosis and priorities', audience: 'General managers / operating teams', problem: 'Separate visible symptoms from the few issues materially affecting profit, service, and efficiency.', deliverable: 'An issue hierarchy, priorities, owners, action path, and review measures.', firstStep: 'Align revenue, cost, service, and customer data before choosing field actions.' },
      { id: 'revenue-channel-cost', title: 'Revenue, channel, and cost alignment', audience: 'Revenue / sales / finance teams', problem: 'Fix the gap between order growth and weak net revenue, pricing discipline, or channel structure.', deliverable: 'Net-contribution measures, pricing boundaries, channel coordination, and a weekly review cadence.', firstStep: 'Recalculate net revenue by segment and channel instead of tracking volume alone.' },
      { id: 'market-information', title: 'Market, membership, and information capture', audience: 'Sales, marketing, and operating teams', problem: 'Reconnect guest segments, products, channels, website information, and repeat-business touchpoints.', deliverable: 'Guest and product articulation, channel touchpoint map, information ownership, and retention path.', firstStep: 'Choose one priority guest segment and audit information from search and booking through post-stay follow-up.' },
    ],
  },
  'hotel-development': {
    zh: [
      { id: 'development', title: '投资边界与设计任务书对齐', audience: '业主与投资人', problem: '投资边界与设计任务书对齐', deliverable: '开发阶段决策清单、投资边界表', firstStep: '先做设计任务书评审' },
      { id: 'development-handover', title: '运营接口与验收标准', audience: '设计与工程团队', problem: '运营接口与验收标准', deliverable: '运营接口清单、交付验收表', firstStep: '介入施工图运营评审' },
    ],
    en: [
      { id: 'development', title: 'Align the capital boundary with the design brief', audience: 'Owners and investors', problem: 'Align the capital boundary with the design brief', deliverable: 'Development decision list and capital-boundary sheet', firstStep: 'Review the design brief first' },
      { id: 'development-handover', title: 'Operating interfaces and handover standards', audience: 'Design and engineering teams', problem: 'Operating interfaces and handover standards', deliverable: 'Operating-interface list and handover checklist', firstStep: 'Join the working-drawing operating review' },
    ],
  },
  'hotel-exit': {
    zh: [
      { id: 'exit', title: '卖、转还是持有的判断', audience: '业主与资方', problem: '卖、转还是持有的判断', deliverable: '退出路径对比表、估值区间测算', firstStep: '先做资产底账体检' },
      { id: 'exit-diligence', title: '可核的资产与经营资料包', audience: '接手方与顾问', problem: '可核的资产与经营资料包', deliverable: '尽调资料清单、经营底账整理', firstStep: '按尽调清单补齐资料' },
    ],
    en: [
      { id: 'exit', title: 'Sell, transfer, or hold', audience: 'Owners and capital partners', problem: 'Sell, transfer, or hold', deliverable: 'Exit-path comparison and valuation range', firstStep: 'Start with an asset-book health check' },
      { id: 'exit-diligence', title: 'A verifiable asset and operating pack', audience: 'Buyers and advisers', problem: 'A verifiable asset and operating pack', deliverable: 'Due-diligence list and operating books', firstStep: 'Complete the data room against the diligence list' },
    ],
  },
  'hotel-renovation': {
    zh: [
      { id: 'renovation', title: '该不该改、改多少', audience: '业主与经营团队', problem: '该不该改、改多少', deliverable: '改造决策表、投入产出测算', firstStep: '先做改造必要性评估' },
      { id: 'renovation-phasing', title: '停不停业与分期实施', audience: '工程与运营接口', problem: '停不停业与分期实施', deliverable: '分期实施方案、改造期运营预案', firstStep: '定分期与停业窗口' },
    ],
    en: [
      { id: 'renovation', title: 'Whether to renovate, and how much', audience: 'Owners and operating teams', problem: 'Whether to renovate, and how much', deliverable: 'Renovation decision sheet and input-output calculation', firstStep: 'Assess necessity first' },
      { id: 'renovation-phasing', title: 'Closure versus phasing', audience: 'Engineering and operations interface', problem: 'Closure versus phasing', deliverable: 'Phased plan and operating plan during works', firstStep: 'Set the phasing and any closure window' },
    ],
  },
}

export function topicMetadata(slug: TopicSlug, lang: string): Metadata {
  const copy = copies[slug][lang === 'en' ? 'en' : 'zh']
  const canonical = `https://www.marvelbros.com/${lang}/${slug}`
  return { title: copy.title, description: copy.summary, alternates: { canonical, languages: { 'zh-CN': `https://www.marvelbros.com/zh/${slug}`, 'en-US': `https://www.marvelbros.com/en/${slug}`, 'x-default': `https://www.marvelbros.com/zh/${slug}` } }, openGraph: { title: copy.title, description: copy.summary, url: canonical, type: 'website' } }
}

export default function HotelTopicPage({ slug, lang }: { slug: TopicSlug; lang: string }) {
  const isZh = lang === 'zh'; const copy = copies[slug][isZh ? 'zh' : 'en']; const url = `https://www.marvelbros.com/${lang}/${slug}`
  const serviceModules = topicServiceModules[slug]?.[isZh ? 'zh' : 'en'] ?? []
  const related = slug === 'hotel-exit'
    ? [
        { slug: 'china-hotel-asset-exit-window-2026-2028-legacy-high-star-2026-06-18', zh: '酒店经营中出现哪些情况应当出售或停止经营', en: 'In which operating situations a hotel should be sold or closed' },
        { slug: 'leased-hotel-remaining-lease-term-payback-valuation-2026-11-11', zh: '租赁物业做酒店，剩余租期怎样约束回本和估值？', en: 'Running a Hotel in Leased Premises: How Does the Remaining Lease Term Constrain Payback and Valuation?' },
      ]
    : slug === 'hotel-renovation'
      ? [
          { slug: 'legacy-hotel-renovation-diagnosis-2026-06-03', zh: '存量酒店改造应该怎么做', en: 'How an existing hotel should be renovated' },
          { slug: 'hotel-pre-sale-renovation-three-options-2026-11-13', zh: '酒店预售改造的三条路径', en: 'Three options for pre-sale hotel renovation' },
        ]
      : slug === 'hotel-development'
        ? [
            { slug: 'hotel-investor-pitfalls-guide', zh: '酒店投资中容易被忽视的关键风险', en: 'Critical risks hotel investors often overlook' },
            { slug: 'family-room-operational-readiness-2026-07-28', zh: '亲子房为什么留不住家庭客？', en: 'Why do family rooms struggle to retain family guests?' },
          ]
        : [
            ...(slug === 'hotel-investment' ? [{ slug: 'leased-hotel-remaining-lease-term-payback-valuation-2026-11-11', zh: '租赁物业做酒店，剩余租期怎样约束回本和估值？', en: 'Running a Hotel in Leased Premises: How Does the Remaining Lease Term Constrain Payback and Valuation?' }] : []),
            { slug: 'hotel-investor-pitfalls-guide', zh: '酒店投资中容易被忽视的关键风险', en: 'Critical risks hotel investors often overlook' },
            { slug: 'family-room-operational-readiness-2026-07-28', zh: '亲子房为什么留不住家庭客？', en: 'Why do family rooms struggle to retain family guests?' },
            { slug: 'summer-escape-hotels-air-conditioned-room-2026-07-29', zh: '酒店如何把季节需求转化为完整体验？', en: 'How can hotels turn seasonal demand into a complete experience?' },
          ]
  const topicPhoto: Record<TopicSlug, string> = {
    'hotel-investment': '/images/home-named/hotel-city-skyline-hero.webp',
    'hotel-development': '/images/home-refresh/hero-hotel-entrance.jpeg',
    'hotel-opening': '/images/home-refresh/front-desk-service.jpg',
    'hotel-operation-improvement': '/images/home-modern/sky-restaurant.jpeg',
    'hotel-revenue': '/images/home-modern/sky-restaurant.jpeg',
    'hotel-renovation': '/images/home-refresh/spa-suite.jpeg',
    'hotel-exit': '/images/home-modern/urban-waterfront.jpeg',
  }
  const ctaType = contactTypeBySlug[slug] || 'diagnosis'
  const otherStages = STAGE_PAGES.filter((item) => item.slug !== slug)
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }
  const pageJsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: copy.title, description: copy.summary, url, provider: { '@id': 'https://www.marvelbros.com/#organization' }, areaServed: 'International', serviceType: copy.eyebrow, audience: { '@type': 'Audience', audienceType: isZh ? '酒店投资人、业主和管理者' : 'Hotel investors, owners, and managers' } }
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: isZh ? '首页' : 'Home', item: `https://www.marvelbros.com/${lang}` }, { '@type': 'ListItem', position: 2, name: copy.eyebrow, item: url }] }
  return <div className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />
    <header className="relative border-b border-slate-200 bg-cover bg-center py-20 dark:border-slate-800 md:py-28" style={{ backgroundImage: `url('${topicPhoto[slug]}')` }}><div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" /><div className="relative mx-auto max-w-6xl px-5 sm:px-8"><p className="text-sm font-semibold tracking-wide text-white">{copy.eyebrow}</p><h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-snug text-white md:text-4xl">{copy.title}</h1><p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white md:text-lg">{copy.summary}</p><Link href={`/${lang}/contact?type=${ctaType}`} className="mt-9 inline-flex items-center gap-2 bg-[#0b4a6f] px-6 py-3.5 font-semibold text-white">{isZh ? '交流项目现状' : 'Discuss your situation'}<ArrowRight className="size-5" /></Link></div></header>
    <main><section className="border-b border-slate-200 py-16 dark:border-slate-800 md:py-24"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2"><div><h2 className="text-3xl font-semibold">{copy.problemTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{copy.problem}</p></div><div><h2 className="text-3xl font-semibold">{isZh ? '专业分析重点' : 'Professional analysis'}</h2><ul className="mt-5 space-y-4">{copy.analysis.map(x => <li key={x} className="flex gap-3 leading-7 text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-1 size-5 shrink-0 text-[#d98b28]" />{x}</li>)}</ul></div></div></section>
    {serviceModules.length > 0 && <section className="border-b border-[#d8b98a]/60 bg-[#fff8ec] py-16 dark:border-slate-800 dark:bg-slate-900 md:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="font-semibold text-[#8a5a16] dark:text-amber-300">{isZh ? '具体服务模块' : 'Specific service modules'}</p><h2 className="mt-3 text-3xl font-semibold">{isZh ? '从经营问题进入对应的解决路径' : 'Move from the operating problem to the right service path'}</h2><div className={`mt-9 grid gap-6 ${serviceModules.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>{serviceModules.map((service, index) => <article id={service.id} key={service.id} className="scroll-mt-24 border border-[#d8b98a] bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"><div className="flex items-start justify-between gap-4"><span className="text-sm font-bold text-[#d98b28]">0{index + 1}</span><span className="text-right text-xs font-semibold text-[#8a5a16] dark:text-amber-300">{service.audience}</span></div><h3 className="mt-5 text-2xl font-semibold leading-snug text-[#0b4a6f] dark:text-sky-200">{service.title}</h3><div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300"><div><p className="font-semibold text-slate-950 dark:text-white">{isZh ? '重点解决' : 'Focus'}</p><p>{service.problem}</p></div><div><p className="font-semibold text-slate-950 dark:text-white">{isZh ? '主要交付' : 'Deliverable'}</p><p>{service.deliverable}</p></div><div><p className="font-semibold text-slate-950 dark:text-white">{isZh ? '建议第一步' : 'First step'}</p><p>{service.firstStep}</p></div></div><Link href={`/${lang}/contact?type=${contactTypeBySlug[slug] || service.id}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8a5a16] hover:text-[#0b4a6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79a3b] dark:text-amber-300 dark:hover:text-sky-200">{isZh ? '提交这个问题' : 'Discuss this service'}<ArrowRight className="size-4" aria-hidden="true" /></Link></article>)}</div></div></section>}
    <section className="bg-[#f4f7f8] py-16 dark:bg-slate-900 md:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><h2 className="text-3xl font-semibold">{isZh ? '解决方法' : 'Method'}</h2><ol className="mt-8 grid border-y border-slate-300 dark:border-slate-700 md:grid-cols-2">{copy.method.map((x,i)=><li key={x} className="grid grid-cols-[3rem_1fr] border-b border-slate-300 py-6 md:odd:border-r dark:border-slate-700"><span className="font-bold text-[#d98b28]">0{i+1}</span><span className="pr-6 font-semibold">{x}</span></li>)}</ol></div></section>
    {copy.caseBody ? <section className="relative border-b border-slate-200 bg-cover bg-center py-16 dark:border-slate-800 md:py-24" style={{ backgroundImage: "url('/images/photography/team-advisory.jpg')" }}><div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" /><div className="relative mx-auto max-w-6xl px-5 sm:px-8"><p className="text-sm font-semibold tracking-wide text-white">{isZh ? '项目实践' : 'Project practice'}</p><h2 className="mt-2 text-2xl font-semibold leading-snug text-white md:text-3xl">{copy.caseTitle}</h2><p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white">{copy.caseBody}</p></div></section> : null}
    <section className="relative border-b border-slate-200 bg-cover bg-center py-16 dark:border-slate-800 md:py-24" style={{ backgroundImage: "url('/images/home-modern/resort-pool.jpeg')" }}><div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" /><div className="relative mx-auto max-w-6xl px-5 sm:px-8"><h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">{isZh ? '相关阶段' : 'Related stages'}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-5">{otherStages.map((item) => <Link key={item.slug} href={`/${lang}/${item.slug}`} className="border border-slate-300 bg-white/80 px-4 py-4 font-semibold hover:border-[#0b4a6f] dark:border-slate-700 dark:bg-slate-950/70"><span className="block text-sm text-[#d98b28]">{isZh ? item.zh : item.en}</span><span className="mt-1 block">{isZh ? item.titleZh : item.titleEn}</span></Link>)}</div></div></section>
    <section className="relative border-b border-slate-200 bg-cover bg-center py-16 dark:border-slate-800 md:py-24" style={{ backgroundImage: "url('/images/home-named/industry-insights.jpg')" }}><div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" /><div className="relative mx-auto max-w-6xl px-5 sm:px-8"><h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">{isZh ? '相关文章' : 'Related articles'}</h2><div className="mt-8 grid border-t border-slate-300 dark:border-slate-700 md:grid-cols-3">{related.map(item=><Link key={item.slug} href={`/${lang}/knowledge/${item.slug}`} className="group flex min-h-36 items-center justify-between gap-4 border-b border-slate-300 bg-white/75 py-6 pr-6 md:border-r dark:border-slate-700 dark:bg-slate-950/65"><span className="font-semibold leading-7">{isZh ? item.zh : item.en}</span><ArrowRight className="size-5 shrink-0 transition group-hover:translate-x-1" /></Link>)}</div></div></section>
    <section className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><h2 className="text-3xl font-semibold">{isZh ? '常见问题' : 'Frequently Asked Questions'}</h2><div className="mt-8 divide-y divide-slate-300 border-y border-slate-300 dark:divide-slate-700 dark:border-slate-700">{copy.faq.map(([q,a])=><div key={q} className="py-7"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 max-w-4xl leading-7 text-slate-600 dark:text-slate-300">{a}</p></div>)}</div><Link href={`/${lang}/knowledge`} className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '进入酒店经营知识库' : 'Explore the hotel knowledge base'}<ArrowRight className="size-5" /></Link></div></section></main>
  </div>
}
