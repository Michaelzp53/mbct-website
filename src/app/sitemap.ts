import type { MetadataRoute } from 'next'
import { articlesData as knowledgeArticlesData } from './[lang]/knowledge/[slug]/page'
import { allArticlesData as leanArticlesData } from './[lang]/lean/article/[slug]/articles-data'
import { knowledgeCategories, leanCategories } from '@/lib/knowledge-taxonomy'
import { legacyArticleSeo } from '@/lib/legacy-article-seo'

// Keep the root XML route independent of request-time locale handling.
export const dynamic = 'force-static'

const siteUrl = 'https://www.marvelbros.com'
const languages = ['zh', 'en'] as const
const aiGrowthTopicSlugs = [
  'why-hotels-need-ai-search-growth',
  'why-hotel-website-traffic-has-few-direct-bookings',
  'how-hotels-reduce-ota-dependence',
  'how-hotels-turn-ai-traffic-into-private-guests',
  'what-hotels-lose-without-ai-recommendations',
  'how-ai-recommends-hotel-dining-meetings-entertainment',
]

function toDate(value?: string) {
  if (!value) return undefined
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date
}

function localized(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], lastModified?: Date) {
  return languages.map((lang) => ({
    url: `${siteUrl}/${lang}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: {
      'zh-CN': `${siteUrl}/zh${path}`,
      'en-US': `${siteUrl}/en${path}`,
    } },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...localized('', 1, 'weekly'),
    ...localized('/services', 0.9, 'monthly'),
    ...localized('/services/ai-hotel-website', 0.95, 'weekly'),
    ...localized('/topics/ai-hotel-growth', 0.95, 'weekly'),
    ...localized('/knowledge', 0.9, 'daily'),
    ...localized('/lean', 0.9, 'daily'),
    ...localized('/cases', 0.7, 'monthly'),
    ...localized('/about', 0.6, 'monthly'),
    ...localized('/contact', 0.8, 'monthly'),
    ...localized('/privacy', 0.3, 'yearly'),
    ...localized('/terms', 0.3, 'yearly'),
    ...localized('/hotel-investment', 0.95, 'weekly'),
    ...localized('/hotel-opening', 0.95, 'weekly'),
    ...localized('/hotel-operation-improvement', 0.95, 'weekly'),
    ...localized('/hotel-revenue', 0.95, 'weekly'),
    ...knowledgeCategories.flatMap(({ slug }) => localized(`/knowledge/category/${slug}`, 0.85, 'weekly')),
    ...leanCategories.flatMap(({ slug }) => localized(`/lean/category/${slug}`, 0.85, 'weekly')),
  ]

  const knowledgeArticles = Object.entries(knowledgeArticlesData).flatMap(([slug, article]) =>
    localized(`/knowledge/${encodeURIComponent(slug)}`, 0.85, 'weekly', toDate(article.date))
  )

  const leanArticles = leanArticlesData.flatMap((article) =>
    localized(`/lean/article/${article.slug}`, 0.8, 'weekly', toDate(article.date))
  )
  const topicPages = aiGrowthTopicSlugs.flatMap((slug) => localized(`/topics/${slug}`, 0.9, 'weekly'))
  const legacyArticles = Object.entries(legacyArticleSeo).flatMap(([path, versions]) =>
    localized(path, 0.8, 'monthly', toDate(versions.zh?.date || versions.en?.date || undefined))
  )

  const urls = [...staticPages, ...topicPages, ...knowledgeArticles, ...leanArticles, ...legacyArticles,
    { url: `${siteUrl}/articles/hotel-renovation`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]
  const deduped = new Map(urls.map((entry) => [entry.url, entry]))

  return Array.from(deduped.values()).sort((a, b) => a.url.localeCompare(b.url))
}
