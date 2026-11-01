import { articlesData as knowledge } from '@/app/[lang]/knowledge/[slug]/page'
import { allArticlesData as lean } from '@/app/[lang]/lean/article/[slug]/articles-data'

// Used by server components only; homepage markup contains metadata, never full bodies.
export function getLatestArticles(lang: string, limit = 4) {
  const zh = lang === 'zh'
  const articles = [
    ...Object.entries(knowledge).map(([slug, article]) => ({
      href: `/${lang}/knowledge/${slug}`,
      title: zh ? article.title : article.titleEn || article.title,
      summary: zh ? article.description || '' : article.descriptionEn || '',
      date: article.date,
      section: zh ? '专业洞察' : 'Insights',
    })),
    ...lean.map(article => ({
      href: `/${lang}/lean/article/${article.slug}`,
      title: zh ? article.titleZh : article.titleEn,
      summary: zh ? article.summaryZh : article.summaryEn,
      date: article.date,
      section: zh ? '管享精道' : 'Lean Insights',
    })),
  ]
  return Array.from(new Map(articles.map(article => [article.href, article])).values())
    .filter(article => Number.isFinite(Date.parse(article.date)))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || a.href.localeCompare(b.href))
    .slice(0, limit)
}
