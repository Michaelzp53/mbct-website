import { articlesData } from '@/app/[lang]/knowledge/[slug]/page'
import { plainArticleText } from '@/lib/article-labels'

// Existing article URLs omitted from the manually maintained hub index.
// Read their original metadata and text; do not duplicate or rewrite their bodies.
export const supplementalKnowledgeSlugs = [
  'hotel-180-day-revpar-double-case',
  'youth-day-hotel-consumption-insights',
  '技术范式转移视角下的酒店业创新路径研究',
  'podcast-hotel-investor-decade',
  'china-midscale-hotel-market-q1-2026-analysis',
  'china-midscale-hotel-q1-2026',
  'china-midscale-hotel-q1-2026-en',
  'china-hotel-opening-q1-2026',
]

export function getKnowledgeIndexSupplements() {
  return supplementalKnowledgeSlugs.map(slug => {
    const article = articlesData[slug]
    const firstLine = plainArticleText(article.content.find(text => text.trim() && text !== article.title && !text.startsWith('#')) || '').slice(0, 220)
    const type = /报告|report/iu.test(article.tag) ? 'report' : /案例|case/iu.test(article.tag) ? 'case' : 'article'
    return {
      id: article.id, slug, type,
      title: article.title, titleEn: article.titleEn || article.title,
      summary: article.description || firstLine,
      summaryEn: article.descriptionEn || article.description || firstLine,
      firstLine, author: article.author, date: article.date,
      readTime: article.readTime, tag: article.tag,
      category: type === 'report' ? 'industry-report' : type === 'case' ? 'case-study' : 'industry-analysis',
      featured: false, image: '',
    }
  })
}
