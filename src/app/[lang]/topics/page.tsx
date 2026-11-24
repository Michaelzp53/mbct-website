import Link from 'next/link'
import type { Metadata } from 'next'
import SiteBreadcrumb from '@/components/SiteBreadcrumb'
import { topics } from './[topicSlug]/page'
import ArticleCatalog from '@/components/ArticleCatalog'
import { ogImages } from '@/lib/seo'

const siteUrl = 'https://www.marvelbros.com'

const hub = {
  slug: 'ai-hotel-growth',
  zh: {
    title: '酒店 AI 搜索获客专题',
    description: '客人先问 AI 时，酒店怎样被看见、被推荐，并接到官网与私域。',
  },
  en: {
    title: 'Hotel AI Search Growth Hub',
    description: 'How a hotel stays visible when guests ask AI first, then reaches the website and owned guests.',
  },
  articles: 3,
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isZh = lang === 'zh'
  const title = isZh ? '专题｜酒店问题索引' : 'Topics | Hotel Question Index'
  const description = isZh
    ? '迈创兄弟C&T专题索引：按问题进入酒店 AI 搜索、官网直订与 OTA 依赖等专题。'
    : 'MarvelBros C&T topic index for hotel AI search, direct booking, and OTA dependence.'
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${lang}/topics`,
      languages: {
        'zh-CN': `${siteUrl}/zh/topics`,
        'en-US': `${siteUrl}/en/topics`,
        'x-default': `${siteUrl}/zh/topics`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}/topics`,
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      images: ogImages(isZh ? 'zh' : 'en'),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImages(isZh ? 'zh' : 'en')[0].url],
    },
  }
}

const samples = [
  { path: '/knowledge/why-ai-search-does-not-recommend-your-hotel-2026-07-06', zh: '为什么你的酒店没有被 AI 推荐？', en: 'Why Is Your Hotel Not Recommended by AI?' },
  { path: '/knowledge/hotel-website-traffic-but-few-direct-bookings-2026-07-07', zh: '官网有访问量，为什么直订很少？', en: 'Why Traffic Does Not Become Direct Booking' },
  { path: '/lean/article/hotel-website-necessity-2026', zh: '酒店官网还有必要做吗？', en: 'Is a Hotel Website Still Necessary?' },
]

export default async function TopicsIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { lang } = await params
  const { page: requestedPage } = await searchParams
  const isZh = lang === 'zh'
  const parsedPage = Number(requestedPage)
  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : 1
  const items = [
    {
      href: `/${lang}/topics/${hub.slug}`,
      title: isZh ? hub.zh.title : hub.en.title,
      description: isZh ? hub.zh.description : hub.en.description,
      count: hub.articles,
    },
    ...Object.entries(topics).map(([slug, topic]) => ({
      href: `/${lang}/topics/${slug}`,
      title: isZh ? topic.zh.title : topic.en.title,
      description: isZh ? topic.zh.description : topic.en.description,
      count: 1,
    })),
  ]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: isZh ? '专题索引' : 'Topic index',
    url: `${siteUrl}/${lang}/topics`,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${siteUrl}${item.href}`,
      })),
    },
  }

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <SiteBreadcrumb lang={lang} path="/topics" label={isZh ? '专题' : 'Topics'} />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold leading-snug sm:text-4xl">{isZh ? '专题' : 'Topics'}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f5142] dark:text-slate-300">
          {isZh
            ? '按一个问题进入一个专题。每条给出标题、一句摘要和现有文章篇数。'
            : 'Each topic starts from one question, with a title, a one-line summary, and the current article count.'}
        </p>
        <ul className="mt-10 space-y-4">
          {items.map((item) => (
            <li key={item.href}>
              <div className="rounded-2xl border border-[#92400e]/15 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <h2 className="text-xl font-semibold leading-7"><Link href={item.href} className="hover:underline">{item.title}</Link></h2>
                <p className="mt-2 text-base leading-7 text-[#5f5142] dark:text-slate-300">{item.description}</p>
                <p className="mt-3 text-sm font-medium text-[#92400e] dark:text-amber-300">
                  {isZh ? `${item.count} 篇` : `${item.count} article${item.count > 1 ? 's' : ''}`}
                </p>
                <ul className="mt-4 space-y-1 border-t border-slate-200 pt-3 dark:border-slate-700">
                  {samples.map((sample) => (
                    <li key={sample.path}>
                      <Link href={`/${lang}${sample.path}`} className="text-sm leading-6 hover:underline">
                        {isZh ? sample.zh : sample.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <ArticleCatalog lang={lang} page={page} />
      </section>
    </main>
  )
}
