import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'
import { CheckCircle, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.cases }
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const isZh = lang === 'zh'

  const badgeGradients = [
    'linear-gradient(135deg, #4285f4, #34a853)',
    'linear-gradient(135deg, #34a853, #fbbc04)',
    'linear-gradient(135deg, #fbbc04, #ea4335)',
    'linear-gradient(135deg, #ea4335, #764ba2)',
    'linear-gradient(135deg, #764ba2, #4285f4)',
    'linear-gradient(135deg, #4285f4, #ea4335)',
  ]

  const trustPoints = [
    isZh ? '案例不只讲结果，也讲当时面对的经营卡点。' : 'Each case shows the business bottleneck, not just the outcome.',
    isZh ? '从诊断、执行到复盘，强调完整动作链。' : 'From diagnosis to execution to review, we show the full action chain.',
    isZh ? '所有成果都回到一个问题：有没有真正改善酒店经营。' : 'Every win is measured against one question: did hotel performance truly improve?',
  ]

  return (
    <>
      <PageHero
        title={dict.nav.cases}
        subtitle={dict.cases.subtitle}
        bgImage="/hero-franck-morisset-UFhM8kMuQbo-unsplash.jpg"
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-sm font-medium text-primary mb-4">
                {isZh ? '不是展示漂亮案例，而是展示可复制的方法' : 'Not polished stories — repeatable operating methods'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                {isZh ? '每一个案例，都对应一家酒店在现实里遇到过的问题' : 'Every case starts with a real hotel problem that had to be solved'}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                {isZh
                  ? '有的酒店困在渠道结构里，有的项目卡在筹开节奏里，也有团队明明很忙，却始终看不到利润改善。我们做案例，不是为了讲得热闹，而是为了让后来者知道：什么问题，应该用什么打法。'
                  : 'Some hotels were trapped by OTA dependence. Some projects were stuck before opening. Some teams were busy every day yet saw no profit improvement. We build case studies to show which playbook solves which problem.'}
              </p>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <p className="text-sm font-medium text-primary mb-4">
                {isZh ? '你能从这里看到什么' : 'What you will see here'}
              </p>
              <div className="space-y-4 text-sm md:text-base text-foreground">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <Link
                  href={`/${lang}/contact?type=plan`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                >
                  {isZh ? '让我们看一看你的项目' : 'Let us look at your project'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.cases.items.map((c, i) => (
              <Card key={c.client} className="border border-border bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-themed h-full">
                <div className="h-44 relative overflow-hidden">
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 left-4 text-white text-xs font-bold border-0" style={{ background: badgeGradients[i % badgeGradients.length] }}>
                    {c.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-card-foreground leading-snug">{c.client}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                    <p className="text-green-700 dark:text-green-300 font-medium text-sm">{isZh ? '结果：' : 'Outcome: '} {c.result}</p>
                  </div>
                  <p className="text-primary font-bold text-lg">{c.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-primary mb-3">
              {isZh ? '合作反馈' : 'Client feedback'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {dict.cases.testimonials.title}
            </h2>
            <p className="text-muted-foreground">{dict.cases.testimonials.subtitle}</p>
          </div>

          <div className="space-y-5">
            {dict.cases.testimonials.items.map((t, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-card-foreground">{t.name}</span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">{t.role}</span>
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                      <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">{t.content}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{t.time}</span>
                      <span className="flex items-center gap-1">👍 {t.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} lang={lang} />
    </>
  )
}
