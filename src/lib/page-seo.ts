import type { Metadata } from 'next'
import { legacyArticleSeo } from './legacy-article-seo'

export const siteUrl = 'https://www.marvelbros.com'
export function pageAlternates(lang: string, path: string) {
  return { canonical: `${siteUrl}/${lang}${path}`, languages: {
    'zh-CN': `${siteUrl}/zh${path}`, 'en-US': `${siteUrl}/en${path}`,
  } }
}
export function legacyMetadata(lang: string, path: string): Metadata {
  const article = legacyArticleSeo[path]?.[lang]
  return {
    ...(article ? { title: { absolute: `${article.title} | MarvelBros C&T` } } : {}),
    alternates: pageAlternates(lang, path),
  }
}
export function legacyStructuredData(lang: string, path: string) {
  const entry = legacyArticleSeo[path]?.[lang]
  if (!entry) return []
  const url = `${siteUrl}/${lang}${path}`
  const section = path.startsWith('/knowledge/') ? '/knowledge' : '/lean'
  return [{
    '@context': 'https://schema.org', '@type': 'Article', headline: entry.title,
    url, mainEntityOfPage: url, inLanguage: lang === 'zh' ? 'zh-CN' : 'en-US',
    ...(entry.date ? { datePublished: entry.date, dateModified: entry.date } : {}),
    author: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'MarvelBros C&T', url: `${siteUrl}/${lang}/about` },
    publisher: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'MarvelBros C&T', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-new.png` } },
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首页' : 'Home', item: `${siteUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: section === '/knowledge' ? (lang === 'zh' ? '专业洞察' : 'Knowledge') : (lang === 'zh' ? '管享精道' : 'Lean Insights'), item: `${siteUrl}/${lang}${section}` },
      { '@type': 'ListItem', position: 3, name: entry.title, item: url },
    ],
  }]
}
