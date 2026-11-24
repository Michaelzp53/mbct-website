import { articlesData } from '@/app/[lang]/knowledge/[slug]/page'
import { allArticlesData } from '@/app/[lang]/lean/article/[slug]/articles-data'
import { legacyArticleSeo } from '@/lib/legacy-article-seo'
import { categoryForKnowledgeTopic, getLeanArticleCategory, knowledgeCategories, leanCategoryBySlug } from '@/lib/knowledge-taxonomy'
import { getPrimaryTopic } from '@/lib/knowledge-topics'

export type CatalogEntry = {
  slug: string
  system: 'knowledge' | 'lean' | 'qa'
  titleZh: string
  titleEn: string
  category: string
  stage: string
  path: string
  date: string
}

const stageRules: Array<[string, RegExp]> = [
  ['exit', /退出|出售|转让|停止经营|尽调|估值|exit|valuation/i],
  ['renovation', /改造|翻新|焕新|装修|renovat|refurbish/i],
  ['development', /建设|开发|施工|设计任务书|development|construction/i],
  ['opening', /筹开|开业|筹备|试营业|pre-opening|opening/i],
  ['investment', /投资|收购|可行性|invest|acquisition/i],
  ['operation', /经营|运营|收益|成本|定价|渠道|人力|餐饮|operation|revenue|cost/i],
]

export function stageForText(text: string) {
  return stageRules.find(([, rule]) => rule.test(text))?.[0] || ''
}

const qaEntries: CatalogEntry[] = [
  { slug: 'front-desk-waiting-5min', system: 'qa', titleZh: '酒店前台排队超过5分钟，这是什么浪费类型？', titleEn: 'Front desk queue exceeds 5 minutes — what waste type is this?', category: 'lean-governance', stage: 'operation', path: '/lean/qa/front-desk-waiting-5min', date: '' },
  { slug: 'hotel-website-content-order-service-faq-cases-2026-06-29', system: 'qa', titleZh: '酒店官网内容应该先写服务页、案例，还是 FAQ？', titleEn: 'Should a hotel website write the service page, cases, or the FAQ first?', category: 'lean-marketing', stage: 'operation', path: '/lean/qa/hotel-website-content-order-service-faq-cases-2026-06-29', date: '2026-06-29' },
]

function knowledgeCategory(title: string, slug: string) {
  const topic = getPrimaryTopic({ title, slug })
  const category = categoryForKnowledgeTopic(topic)
  return knowledgeCategories.some((item) => item.slug === category) ? category : 'hotel-diagnosis'
}

export function articleCatalog(): CatalogEntry[] {
  const knowledge = Object.entries(articlesData).map(([slug, article]) => ({
    slug,
    system: 'knowledge' as const,
    titleZh: article.title,
    titleEn: article.titleEn || article.title,
    category: knowledgeCategory(article.title, slug),
    stage: stageForText(`${article.title} ${slug}`),
    path: `/knowledge/${slug}`,
    date: article.date || '',
  }))
  const seen = new Set(knowledge.map((item) => item.path))
  const legacy = Object.entries(legacyArticleSeo).flatMap(([path, versions]) => {
    if (seen.has(path)) return []
    const slug = path.replace('/knowledge/', '')
    const titleZh = versions.zh?.title || slug
    return [{
      slug,
      system: 'knowledge' as const,
      titleZh,
      titleEn: versions.en?.title || titleZh,
      category: knowledgeCategory(titleZh, slug),
      stage: stageForText(`${titleZh} ${slug}`),
      path,
      date: versions.zh?.date || '',
    }]
  })
  const lean = allArticlesData.map((article) => ({
    slug: article.slug,
    system: 'lean' as const,
    titleZh: article.titleZh,
    titleEn: article.titleEn,
    category: getLeanArticleCategory(article),
    stage: stageForText(`${article.titleZh} ${article.slug}`),
    path: `/lean/article/${article.slug}`,
    date: article.date || '',
  }))
  return [...knowledge, ...legacy, ...lean, ...qaEntries]
}

export function neighbors(path: string, system: CatalogEntry['system']) {
  const items = articleCatalog().filter((item) => item.system === system).sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.slug.localeCompare(b.slug))
  const index = items.findIndex((item) => item.path === path)
  if (index < 0) return { prev: undefined, next: undefined }
  return { prev: items[index - 1], next: items[index + 1] }
}

export function categoryLabel(slug: string, lang: string) {
  const knowledge = knowledgeCategories.find((item) => item.slug === slug)
  if (knowledge) return lang === 'en' ? knowledge.en : knowledge.zh
  const lean = leanCategoryBySlug[slug as keyof typeof leanCategoryBySlug]
  if (lean) return lang === 'en' ? lean.en : lean.zh
  return slug
}
