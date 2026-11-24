import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { STAGE_PAGES } from '@/components/HotelTopicPage'
import { caseBySlug, publishedCases, propertyLabel, stageLabel } from '@/lib/case-studies'
import { pageAlternates, siteUrl } from '@/lib/page-seo'

const stageHref: Record<string, string> = {
  investment: '/hotel-investment',
  development: '/hotel-development',
  opening: '/hotel-opening',
  operation: '/hotel-operation-improvement',
  renovation: '/hotel-renovation',
  exit: '/hotel-exit',
}

export function generateStaticParams() {
  return publishedCases.flatMap((item) => [{ lang: 'zh', slug: item.slug }, { lang: 'en', slug: item.slug }])
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const item = caseBySlug(slug)
  if (!item) return { title: 'Case not found' }
  const copy = lang === 'en' ? item.en : item.zh
  return {
    title: `${copy.client}｜${lang === 'en' ? 'Case' : '案例'}`,
    description: copy.coreProblem,
    alternates: pageAlternates(lang, `/cases/${slug}`),
  }
}

export default async function CaseDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const item = caseBySlug(slug)
  if (!item) notFound()
  const isZh = lang === 'zh'
  const copy = isZh ? item.zh : item.en
  const serviceHref = `/${lang}${stageHref[item.stage]}`
  const serviceMeta = STAGE_PAGES.find((stage) => `/${stage.slug}` === stageHref[item.stage])
  const serviceLabel = isZh ? (serviceMeta?.titleZh || '阶段服务') : (serviceMeta?.titleEn || 'Stage service')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: copy.client,
    description: copy.result,
    url: `${siteUrl}/${lang}/cases/${slug}`,
  }

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <Link href={`/${lang}/cases`} className="text-sm font-semibold text-primary">{isZh ? '返回案例成果' : 'Back to case results'}</Link>
        <div className="relative mt-6 h-64 overflow-hidden rounded-2xl">
          <Image src={item.image} alt={copy.client} fill className="object-cover" sizes="800px" />
        </div>
        <p className="mt-6 text-sm font-semibold text-primary">{stageLabel(item.stage, lang)} · {propertyLabel(item.property, lang)}</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">{copy.client}</h1>
        <dl className="mt-10 space-y-6">
          {([
            [isZh ? '项目类型' : 'Project type', copy.projectType],
            [isZh ? '城市与体量' : 'City and scale', copy.cityScale],
            [isZh ? '核心问题' : 'Core problem', copy.coreProblem],
            [isZh ? '量化结果' : 'Quantified result', copy.result],
            [isZh ? '周期' : 'Timeline', copy.cycle],
            [isZh ? '客户授权说明' : 'Client authorization', copy.authorization],
          ] as Array<[string, string]>).map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</dt>
              <dd className="mt-2 text-lg leading-8">{value}</dd>
            </div>
          ))}
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{isZh ? '执行动作' : 'Actions'}</dt>
            <dd className="mt-2">
              <ul className="list-disc space-y-2 pl-5 text-lg leading-8">
                {copy.actions.map((action) => <li key={action}>{action}</li>)}
              </ul>
            </dd>
          </div>
        </dl>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link href={serviceHref} className="rounded-2xl border border-border p-5 font-semibold hover:border-primary">
            {isZh ? '对应阶段服务' : 'Related stage service'}
            <span className="mt-2 flex items-center gap-2 text-primary">{serviceLabel}<ArrowRight className="h-4 w-4" /></span>
          </Link>
          <Link href={`/${lang}${copy.relatedArticle.href}`} className="rounded-2xl border border-border p-5 font-semibold hover:border-primary">
            {isZh ? '相关方法文章' : 'Related method article'}
            <span className="mt-2 flex items-center gap-2 text-primary">{copy.relatedArticle.title}<ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </article>
    </main>
  )
}
