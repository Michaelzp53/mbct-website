import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'
import { CheckCircle, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'
import { pageAlternates, siteUrl } from '@/lib/page-seo'
import { ogImages } from '@/lib/seo'
import { publishedCases } from '@/lib/case-studies'
import CasesFilter from './CasesFilter'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  return {
    title: isZh ? '实践案例｜酒店问题如何被诊断并转化为结果？' : 'Case Studies | How Hotel Problems Become Results',
    description: isZh ? '查看迈创兄弟C&T酒店项目案例，了解核心问题、执行动作与量化结果。' : 'Review MarvelBros C&T hotel projects through the core problem, actions taken, and quantified results.',
    alternates: pageAlternates(lang, '/cases'),
    openGraph: {
      title: isZh ? '实践案例｜酒店问题如何被诊断并转化为结果？' : 'Case Studies | How Hotel Problems Become Results',
      description: isZh ? '查看迈创兄弟C&T酒店项目案例，了解核心问题、执行动作与量化结果。' : 'Review MarvelBros C&T hotel projects through the core problem, actions taken, and quantified results.',
      url: `https://www.marvelbros.com/${lang}/cases`,
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      images: ogImages(isZh ? 'zh' : 'en'),
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? '实践案例｜酒店问题如何被诊断并转化为结果？' : 'Case Studies | How Hotel Problems Become Results',
      description: isZh ? '查看迈创兄弟C&T酒店项目案例，了解核心问题、执行动作与量化结果。' : 'Review MarvelBros C&T hotel projects through the core problem, actions taken, and quantified results.',
      images: [ogImages(isZh ? 'zh' : 'en')[0].url],
    },
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
  const trustPoints = [
    isZh ? '案例不只讲结果，也讲当时面对的经营卡点。' : 'Each case shows the business bottleneck, not just the outcome.',
    isZh ? '从诊断、执行到复盘，强调完整动作链。' : 'From diagnosis to execution to review, we show the full action chain.',
    isZh ? '所有成果都回到一个问题：有没有真正改善酒店经营。' : 'Every win is measured against one question: did hotel performance truly improve?',
  ]
  const casesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: isZh ? '实践案例' : 'Case Studies',
    url: `${siteUrl}/${lang}/cases`,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: publishedCases.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: isZh ? item.zh.client : item.en.client,
        description: isZh ? item.zh.coreProblem : item.en.coreProblem,
        url: `${siteUrl}/${lang}/cases/${item.slug}`,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(casesJsonLd).replace(/</g, '\\u003c') }} />
      <PageHero
        title={isZh ? '酒店经营问题，如何找到原因并推进改善？' : 'How do we identify the causes of hotel operating problems and improve performance?'}
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
                {isZh ? '帮助酒店投资人与业主解决筹开和经营难题' : 'We help hotel investors close pre-opening and operating gaps'}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                {isZh
                  ? '每个案例都围绕三个关键事实展开：项目遇到了什么难题、团队采取了什么行动、经营结果发生了什么变化。'
                  : 'Each case is built around three essential facts: the business problem, the actions taken, and the operating change achieved.'}
              </p>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <p className="text-sm font-medium text-primary mb-4">{isZh ? '您能从这里看到什么' : 'What you will see here'}</p>
              <div className="space-y-4 text-sm md:text-base text-foreground">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <Link href={`/${lang}/contact?type=plan`} className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">
                  {isZh ? '让我们看一看您的项目' : 'Let us look at your project'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CasesFilter lang={lang} />
        </div>
      </section>

      <section className="py-16 section-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-primary mb-3">{isZh ? '合作反馈' : 'Client feedback'}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{dict.cases.testimonials.title}</h2>
            <p className="text-muted-foreground">{dict.cases.testimonials.subtitle}</p>
          </div>
          <div className="space-y-5">
            {dict.cases.testimonials.items.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-7 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl flex-shrink-0">{item.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-card-foreground mb-2">{item.role}</p>
                    <div className="flex items-start gap-2 mb-4">
                      <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
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
