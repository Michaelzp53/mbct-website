'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown, CheckCircle, Clock, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Question {
  id: number
  title: string
  detail: string
  pillar: string
  waste_types: string[] | string
  nickname: string | null
  hotel_name: string | null
  created_at: string
  status: string | null
}

const pillarMap: Record<string, string> = {
  'guest-service': '宾客精益服务',
  'emotional-value': '人感服务与情绪价值',
  'diagnosis': '诊断与改善',
  'team-management': '团队精益管理',
  'cost-optimization': '成本与收益',
}

const wasteMap: Record<string, string> = {
  'waiting': '等待浪费',
  'defects': '缺陷浪费',
  'over-processing': '过度加工',
  'transportation': '搬运浪费',
  'inventory': '库存浪费',
  'motion': '动作浪费',
  'over-production': '过量生产',
}

export default function QuestionsAdminClient({ questions: initialQuestions }: { questions: Question[] }) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [updating, setUpdating] = useState<number | null>(null)

  const total = questions.length
  const positive = questions.filter(q => q.status === 'positive' || !q.status).length
  const negative = questions.filter(q => q.status === 'negative').length
  const answered = questions.filter(q => q.status === 'answered').length

  const updateStatus = useCallback(async (id: number, status: string) => {
    setUpdating(id)
    try {
      const res = await fetch(`/api/lean/questions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })

      if (res.ok) {
        setQuestions(prev =>
          prev.map(q => (q.id === id ? { ...q, status } : q))
        )
      } else {
        alert('更新失败，请重试')
      }
    } catch (err) {
      console.error('Update failed:', err)
      alert('网络错误')
    } finally {
      setUpdating(null)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/zh/lean"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回管享精道
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">提问管理后台</h1>
          <p className="text-muted-foreground">查看、筛选读者提问，挑选有价值的选题转化为文章</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground">{total}</div>
            <div className="text-sm text-muted-foreground">总提问数</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-green-500">{positive}</div>
            <div className="text-sm text-muted-foreground">正向/待筛选</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-red-500">{negative}</div>
            <div className="text-sm text-muted-foreground">已标记负面</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-[#f59e0b]">{answered}</div>
            <div className="text-sm text-muted-foreground">已回答/已转文章</div>
          </div>
        </div>

        <div className="space-y-4">
          {questions.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>暂无提问</p>
            </div>
          ) : (
            questions.map((q) => (
              <div
                key={q.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-[#f59e0b]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{q.title}</h3>
                      <Badge
                        className={
                          q.status === 'negative'
                            ? 'bg-red-500/10 text-red-500 border-red-500/30'
                            : q.status === 'answered'
                            ? 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30'
                            : 'bg-green-500/10 text-green-500 border-green-500/30'
                        }
                      >
                        {q.status === 'negative' ? '负面' : q.status === 'answered' ? '已回答' : '正向'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{q.detail}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      {q.pillar && (
                        <span className="px-2 py-1 rounded-md bg-muted">{pillarMap[q.pillar] || q.pillar}</span>
                      )}
                      {q.waste_types && (
                        <span className="px-2 py-1 rounded-md bg-muted">
                          {Array.isArray(q.waste_types)
                            ? q.waste_types.map((w: string) => wasteMap[w] || w).join(', ')
                            : q.waste_types}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(q.created_at).toLocaleDateString('zh-CN')}
                      </span>
                      {q.nickname && <span>提问者：{q.nickname}</span>}
                      {q.hotel_name && <span>酒店：{q.hotel_name}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={updating === q.id || q.status === 'positive'}
                      onClick={() => updateStatus(q.id, 'positive')}
                      className="text-green-500 border-green-500/30 hover:bg-green-500/10"
                    >
                      {updating === q.id ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <ThumbsUp className="w-4 h-4 mr-1" />}
                      正向
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={updating === q.id || q.status === 'negative'}
                      onClick={() => updateStatus(q.id, 'negative')}
                      className="text-red-500 border-red-500/30 hover:bg-red-500/10"
                    >
                      {updating === q.id ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <ThumbsDown className="w-4 h-4 mr-1" />}
                      负面
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={updating === q.id || q.status === 'answered'}
                      onClick={() => updateStatus(q.id, 'answered')}
                      className="text-[#f59e0b] border-[#f59e0b]/30 hover:bg-[#f59e0b]/10"
                    >
                      {updating === q.id ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <CheckCircle className="w-4 h-4 mr-1" />}
                      转文章
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
