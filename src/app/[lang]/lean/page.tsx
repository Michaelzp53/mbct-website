import Link from 'next/link'
import { MessageCircle, HelpCircle, ArrowRight, Clock, User, ThumbsUp, Filter, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// 支柱分类
const pillars = [
  { id: 'all', label: '全部', labelEn: 'All' },
  { id: 'guest-service', label: '客人精益化服务', labelEn: 'Guest Lean Service' },
  { id: 'emotional-value', label: '人感服务与情绪价值', labelEn: 'Human Touch & Emotion' },
  { id: 'diagnosis', label: '问题诊断与改善', labelEn: 'Diagnosis & Improvement' },
  { id: 'team-management', label: '团队精益化管理', labelEn: 'Team Lean Management' },
  { id: 'cost-optimization', label: '成本收益优化', labelEn: 'Cost & Revenue' },
]

// 浪费类型
const wasteTypes = [
  { id: 'waiting', label: '等待' },
  { id: 'defects', label: '缺陷' },
  { id: 'over-processing', label: '过度' },
  { id: 'transportation', label: '搬运' },
  { id: 'inventory', label: '库存' },
  { id: 'motion', label: '动作' },
  { id: 'over-production', label: '过量' },
]

// 示例Q&A数据
const qaList = [
  {
    id: 1,
    slug: 'front-desk-waiting-5min',
    question: '我酒店前台经常排队超过5分钟，客人抱怨很大，这是哪种浪费？怎么改善？',
    questionEn: 'My hotel front desk queue often exceeds 5 minutes. What waste type is this?',
    answer: '这是典型的「等待浪费」。建议：1) 分析高峰时段入住/退房规律，弹性排班；2) 引入自助入住机分流；3) 提前电话确认到店时间，错峰办理。',
    pillar: 'guest-service',
    wasteType: 'waiting',
    author: '匿名酒店业主',
    date: '2026-05-08',
    likes: 12,
    isOfficial: true,
  },
  {
    id: 2,
    slug: 'housekeeping-defect-rate',
    question: '客房清洁检查总有疏漏，客人投诉卫生问题，如何用精益方法降低缺陷率？',
    questionEn: 'Housekeeping inspections always miss something. How to reduce defect rate?',
    answer: '建议建立「标准化作业指导书(SOP)」+「检查清单(Checklist)」双保险。将客房分为12个检查区域，每区设置照片标准，新员工培训从对照照片开始。',
    pillar: 'diagnosis',
    wasteType: 'defects',
    author: '某连锁店长',
    date: '2026-05-07',
    likes: 8,
    isOfficial: true,
  },
  {
    id: 3,
    slug: 'staff-turnover-lean',
    question: '90后员工流失率太高，培训完就离职，感觉投入都浪费了，怎么办？',
    questionEn: 'Gen-Z staff turnover is too high. Training investment feels wasted.',
    answer: '这是「人才动作浪费」。建议从三方面入手：1) 入职即配导师制，降低适应期焦虑；2) 建立技能可视化成长路径，让员工看到未来；3) 月度「改善提案」机制，给年轻人参与感。',
    pillar: 'team-management',
    wasteType: 'motion',
    author: '人力资源经理',
    date: '2026-05-06',
    likes: 15,
    isOfficial: true,
  },
  {
    id: 4,
    slug: 'ota-commission-optimization',
    question: 'OTA佣金越来越高，直销渠道做不起来，有没有精益化的收益管理思路？',
    questionEn: 'OTA commission keeps rising. Any lean revenue management ideas?',
    answer: '核心思路：把「客人触点」从OTA转移到私域。具体：1) 入住时引导加企业微信，送延迟退房；2) 离店后3天内发送「专属会员价」；3) 建立「老客专属预订通道」，价格与OTA持平但含早餐。',
    pillar: 'cost-optimization',
    wasteType: 'over-processing',
    author: '单体酒店老板',
    date: '2026-05-05',
    likes: 23,
    isOfficial: true,
  },
  {
    id: 5,
    slug: 'emotional-service-design',
    question: '想做人感服务，但员工觉得"假"，客人觉得"尬"，怎么设计自然的情绪价值？',
    questionEn: 'Want human-touch service but feels fake. How to design natural emotional value?',
    answer: '情绪价值不是「演出来」的，是「设计出来」的。三步：1) 识别客人旅程中的3个「情绪低谷时刻」；2) 在这些时刻设计「超预期小触点」；3) 给员工「授权额度」，允许他们为客人创造惊喜。',
    pillar: 'emotional-value',
    wasteType: 'over-processing',
    author: '精品酒店投资人',
    date: '2026-05-04',
    likes: 19,
    isOfficial: true,
  },
]

export default async function LeanPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const ui = {
    pageTitle: isZh ? '管享精道 · 精益问答' : 'Lean Insights · Q&A',
    pageSubtitle: isZh
      ? '酒店管理者提问，迈创兄弟娓娓道来——用精益思维解决真实管理难题'
      : 'Hotel managers ask, MarvelBros answers — solving real management challenges with lean thinking',
    askButton: isZh ? '向迈创兄弟提问' : 'Ask MarvelBros',
    searchPlaceholder: isZh ? '搜索问题...' : 'Search questions...',
    filterPillar: isZh ? '支柱分类' : 'Pillars',
    filterWaste: isZh ? '浪费类型' : 'Waste Types',
    officialAnswer: isZh ? '迈创兄弟官方回复' : 'Official Answer',
    viewDetail: isZh ? '查看详情' : 'View Detail',
    likes: isZh ? '共鸣' : 'Resonates',
    noMore: isZh ? '— 更多问答即将上线 —' : '— More Q&A coming soon —',
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">
              {isZh ? '迈创兄弟 · 娓娓道来' : 'MarvelBros · Lean Insights'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {ui.pageTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {ui.pageSubtitle}
          </p>
        </div>

        {/* Ask Button */}
        <div className="text-center mb-12">
          <Link href={`/${lang}/lean/ask`}>
            <Button
              size="lg"
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 py-6 text-lg rounded-xl"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              {ui.askButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Search + Filter Bar */}
        <div className="mb-10 space-y-4">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Pillar Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground mr-1" />
            {pillars.map((pillar) => (
              <Badge
                key={pillar.id}
                variant="outline"
                className="cursor-pointer hover:bg-[#f59e0b]/10 hover:text-[#f59e0b] hover:border-[#f59e0b]/50 transition-all text-sm px-3 py-1"
              >
                {isZh ? pillar.label : pillar.labelEn}
              </Badge>
            ))}
          </div>

          {/* Waste Type Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {wasteTypes.map((waste) => (
              <Badge
                key={waste.id}
                variant="secondary"
                className="cursor-pointer hover:bg-[#f59e0b]/20 transition-all text-xs"
              >
                {waste.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Q&A List */}
        <div className="space-y-6">
          {qaList.map((qa) => (
            <div
              key={qa.id}
              className="rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all overflow-hidden"
            >
              {/* Question Section */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#f59e0b] font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {isZh ? qa.question : qa.questionEn}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {qa.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {qa.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {qa.likes} {ui.likes}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 ml-11">
                  <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-0">
                    {pillars.find(p => p.id === qa.pillar)?.label}
                  </Badge>
                  <Badge variant="secondary" className="border-0">
                    {wasteTypes.find(w => w.id === qa.wasteType)?.label}
                  </Badge>
                </div>
              </div>

              {/* Official Answer Section */}
              {qa.isOfficial && (
                <div className="border-l-4 border-l-[#f59e0b] bg-[#f59e0b]/5 px-6 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30">
                      🏷️ {ui.officialAnswer}
                    </Badge>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {qa.answer}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/${lang}/lean/qa/${qa.slug}`}
                      className="inline-flex items-center text-sm font-medium text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors"
                    >
                      {ui.viewDetail}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More / Coming Soon */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>{ui.noMore}</p>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {isZh ? '还没找到答案？' : 'Not finding your answer?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isZh
                ? '向迈创兄弟提问，我们将在48小时内为您娓娓道来'
                : 'Ask MarvelBros. We will respond within 48 hours.'}
            </p>
            <Link href={`/${lang}/lean/ask`}>
              <Button
                size="lg"
                className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-8 rounded-xl"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                {ui.askButton}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
