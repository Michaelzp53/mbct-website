import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'
import { CheckCircle, ArrowRight, Quote, Target, AlertTriangle, ListChecks, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  return {
    title: isZh ? '案例成果｜酒店问题如何被诊断并转化为结果？' : 'Case Results | How Hotel Problems Become Results',
    description: isZh ? '查看迈创兄弟C&T酒店项目案例，了解核心问题、执行动作与量化结果。' : 'Review MarvelBros C&T hotel projects through the core problem, actions taken, and quantified results.',
  }
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const isZh = lang === 'zh'
  const orderedCases = [5, 4, 0, 1, 2, 3].map((index) => dict.cases.items[index]).filter(Boolean)

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
        title={isZh ? '经营问题如何从判断到验证直至改善结果？' : 'How do operating problems move from judgment to verification and measurable improvement?'}
        subtitle={isZh ? '从核心问题、关键行动到量化结果，以下项目案例展示迈创兄弟C&T如何推动酒店经营改善。' : 'From core problems and decisive actions to quantified results, these project cases show how MarvelBros C&T advances hotel performance.'}
        bgImage="/images/home-named/solutions-dining.jpg"
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-sm font-medium text-primary mb-4">
                {isZh ? '项目成果，以问题、行动和结果为证' : 'Project results evidenced by problems, actions, and outcomes'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                {isZh ? '我们为酒店投资者，补足筹开和经营短板' : 'We help hotel investors close pre-opening and operating gaps'}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                {isZh
                  ? '每个案例都围绕三个关键事实展开：项目遇到了什么难题、团队采取了什么行动、经营结果发生了什么变化。'
                  : 'Each case is built around three essential facts: the business problem, the actions taken, and the operating change achieved.'}
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
            {orderedCases.map((c, i) => (
              <Card key={c.client} className="border border-border bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-themed h-full flex flex-col">
                <div className="h-44 relative overflow-hidden flex-shrink-0">
                  <Image src={c.image} alt={c.client} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <Badge className="absolute top-4 left-4 text-white text-xs font-bold border-0" style={{ background: badgeGradients[i % badgeGradients.length] }}>
                    {c.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-card-foreground leading-snug">{c.client}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5 flex-1">
                  {/* 四要素：项目类型 */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {isZh ? '项目类型' : 'PROJECT TYPE'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-card-foreground leading-snug">{c.projectType}</p>
                  </div>

                  {/* 四要素：核心问题 */}
                  <div>
                    <div className="flex items-start gap-2 mb-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        {isZh ? '核心问题' : 'CORE PROBLEM'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.coreProblem}</p>
                  </div>

                  {/* 四要素：执行动作 */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <ListChecks className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {isZh ? '执行动作' : 'ACTIONS'}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {c.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 四要素：量化结果 */}
                  <div className="mt-auto">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider">
                          {isZh ? '量化结果' : 'QUANTIFIED RESULT'}
                        </span>
                      </div>
                      <p className="text-green-700 dark:text-green-300 font-semibold text-sm leading-relaxed">{c.result}</p>
                    </div>
                    <p className="text-primary font-bold text-lg mt-3">{c.metric}</p>
                  </div>
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
                    <div className="mb-2">
                      <span className="font-semibold text-card-foreground">{t.role}</span>
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                      <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">{t.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{isZh ? '项目反馈，聚焦实际改善结果' : 'Project feedback focused on measurable improvement'}</p>
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
