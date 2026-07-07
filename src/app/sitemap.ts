import type { MetadataRoute } from 'next'
import { articlesData as knowledgeArticlesData } from './[lang]/knowledge/[slug]/page'
import { allArticlesData as leanArticlesData } from './[lang]/lean/article/[slug]/articles-data'

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
  const date = value ? new Date(value) : new Date()
  return Number.isNaN(date.getTime()) ? new Date() : date
}

function localized(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], lastModified = new Date()) {
  return languages.map((lang) => ({
    url: `${siteUrl}/${lang}${path}`,
    lastModified,
    changeFrequency,
    priority,
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
  ]

  const knowledgeArticles = Object.entries(knowledgeArticlesData).flatMap(([slug, article]) =>
    localized(`/knowledge/${slug}`, 0.85, 'weekly', toDate(article.date))
  )

  const leanArticles = leanArticlesData.flatMap((article) =>
    localized(`/lean/article/${article.slug}`, 0.8, 'weekly', toDate(article.date))
  )
  const topicPages = aiGrowthTopicSlugs.flatMap((slug) => localized(`/topics/${slug}`, 0.9, 'weekly'))

  const urls = [...staticPages, ...topicPages, ...knowledgeArticles, ...leanArticles]
  const deduped = new Map(urls.map((entry) => [entry.url, entry]))

  return Array.from(deduped.values()).sort((a, b) => a.url.localeCompare(b.url))
}
