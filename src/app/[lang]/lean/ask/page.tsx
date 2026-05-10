import Link from 'next/link'
import { ArrowLeft, MessageCircle, HelpCircle, Send, User, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// 支柱分类
const pillars = [
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
  { id: 'over-processing', label: '过度处理' },
  { id: 'transportation', label: '搬运' },
  { id: 'inventory', label: '库存' },
  { id: 'motion', label: '动作' },
  { id: 'over-production', label: '过量生产' },
]

export default async function AskPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const ui = {
    back: isZh ? '返回精益问答' : 'Back to Lean Q&A',
    title: isZh ? '向迈创兄弟提问' : 'Ask MarvelBros',
    subtitle: isZh
      ? '描述您酒店管理中遇到的问题，越具体回答越精准'
      : 'Describe your hotel management challenge. The more specific, the better the answer.',
    questionTitle: isZh ? '问题标题' : 'Question Title',
    titlePlaceholder: isZh ? '一句话概括您的问题（不超过50字）' : 'Summarize your question in one sentence',
    titleRequired: isZh ? '必填' : 'Required',
    questionDetail: isZh ? '问题详情' : 'Question Details',
    detailPlaceholder: isZh
      ? '请详细描述：\n1. 您的酒店类型和规模\n2. 遇到的具体问题\n3. 已尝试过的解决方法\n4. 期望达到的效果'
      : 'Please describe:\n1. Your hotel type and scale\n2. Specific problem\n3. Solutions already tried\n4. Desired outcome',
    pillarLabel: isZh ? '支柱分类' : 'Pillar Category',
    pillarRequired: isZh ? '必选：选择最相关的精益支柱' : 'Required: Select the most relevant lean pillar',
    wasteLabel: isZh ? '浪费类型（可选）' : 'Waste Type (Optional)',
    wasteHint: isZh ? '如果您能识别问题对应的浪费类型，有助于更精准回复' : 'Identifying the waste type helps us respond more precisely',
    nickname: isZh ? '您的昵称（可选）' : 'Your Nickname (Optional)',
    nicknamePlaceholder: isZh ? '如何称呼您？' : 'How should we address you?',
    hotelName: isZh ? '酒店名称（可选）' : 'Hotel Name (Optional)',
    hotelPlaceholder: isZh ? '例：XX精品酒店' : 'e.g., XX Boutique Hotel',
    submit: isZh ? '提交问题' : 'Submit Question',
    privacy: isZh
      ? '提交即表示您同意公开此问题（匿名展示），便于其他酒店管理者参考学习'
      : 'By submitting, you agree to make this question public (anonymized) for other hotel managers to learn from',
    successTitle: isZh ? '问题已收到！' : 'Question Received!',
    successMessage: isZh
      ? '迈创兄弟将在48小时内为您娓娓道来。精选问答将展示在精益问答板块。'
      : 'MarvelBros will respond within 48 hours. Selected Q&A will be featured in the Lean Q&A section.',
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.back}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">
              {isZh ? '迈创兄弟 · 娓娓道来' : 'MarvelBros · Lean Insights'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {ui.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {ui.subtitle}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Question Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionTitle}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <input
              type="text"
              maxLength={50}
              placeholder={ui.titlePlaceholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
            />
            <p className="text-xs text-muted-foreground">{isZh ? '0/50' : '0/50'}</p>
          </div>

          {/* Question Detail */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              {ui.questionDetail}
              <Badge variant="secondary" className="text-xs">{ui.titleRequired}</Badge>
            </label>
            <textarea
              rows={8}
              placeholder={ui.detailPlaceholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors resize-y"
            />
          </div>

          {/* Pillar Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {ui.pillarLabel}
            </label>
            <p className="text-xs text-muted-foreground">{ui.pillarRequired}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <label
                  key={pillar.id}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 transition-all cursor-pointer"
                >
                  <input
                    type="radio"
                    name="pillar"
                    value={pillar.id}
                    className="w-4 h-4 accent-[#f59e0b]"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {isZh ? pillar.label : pillar.labelEn}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Waste Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {ui.wasteLabel}
            </label>
            <p className="text-xs text-muted-foreground">{ui.wasteHint}</p>
            <div className="flex flex-wrap gap-2">
              {wasteTypes.map((waste) => (
                <label
                  key={waste.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 transition-all cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="wasteTypes"
                    value={waste.id}
                    className="w-4 h-4 accent-[#f59e0b] rounded"
                  />
                  <span className="text-sm text-foreground">{waste.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nickname + Hotel Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                {ui.nickname}
              </label>
              <input
                type="text"
                placeholder={ui.nicknamePlaceholder}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                {ui.hotelName}
              </label>
              <input
                type="text"
                placeholder={ui.hotelPlaceholder}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors"
              />
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground text-center">
            {ui.privacy}
          </p>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold px-10 py-6 text-lg rounded-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              {ui.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
