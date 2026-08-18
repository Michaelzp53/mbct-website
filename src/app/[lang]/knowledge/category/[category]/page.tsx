import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { articlesData } from '../../[slug]/page'
import { categoryBySlug, categoryForKnowledgeTopic, knowledgeCategories } from '@/lib/knowledge-taxonomy'
import { getPrimaryTopic } from '@/lib/knowledge-topics'

export function generateStaticParams() {
  return knowledgeCategories.flatMap(({ slug: category }) => [{ lang: 'zh', category }, { lang: 'en', category }])
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; category: string }> }): Promise<Metadata> {
  const { lang, category } = await params
  const item = categoryBySlug[category]
  const name = item ? (lang === 'zh' ? item.zh : item.en) : 'Knowledge Category'
  return { title: `${name} | ${lang === 'zh' ? '迈创兄弟C&T' : 'MarvelBros C&T'}`, alternates: { canonical: `https://www.marvelbros.com/${lang}/knowledge/category/${category}` } }
}

export default async function KnowledgeCategoryPage({ params }: { params: Promise<{ lang: string; category: string }> }) {
  const { lang, category } = await params
  const item = categoryBySlug[category]
  const isZh = lang === 'zh'
  if (!item) return <main className="mx-auto max-w-3xl px-6 py-32 text-center"><h1 className="text-3xl font-bold">{isZh ? '栏目未找到' : 'Category not found'}</h1></main>
  const articles = Object.entries(articlesData).filter(([, article]) => categoryForArticle(article) === category).sort(([, a], [, b]) => b.date.localeCompare(a.date))
  return <main className="min-h-screen bg-[#fffdf8] px-4 py-24 text-[#2f261f] dark:bg-slate-950 dark:text-white sm:px-8">
    <div className="mx-auto max-w-5xl">
      <nav aria-label={isZh ? '面包屑' : 'Breadcrumb'} className="mb-8 text-sm text-[#7c6b5b] dark:text-slate-400"><Link href={`/${lang}`}>{isZh ? '首页' : 'Home'}</Link> <span className="mx-2">/</span><Link href={`/${lang}/knowledge`}>{isZh ? '知识库' : 'Knowledge'}</Link> <span className="mx-2">/</span><span>{isZh ? item.zh : item.en}</span></nav>
      <header className="border-b border-[#eadfce] pb-10 dark:border-slate-800"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: item.color }}>{isZh ? '知识库栏目' : 'Knowledge category'}</p><h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{isZh ? item.zh : item.en}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#6b5a4b] dark:text-slate-300">{isZh ? item.descriptionZh : item.descriptionEn}</p></header>
      <section className="mt-10 grid gap-5 md:grid-cols-2" aria-label={isZh ? '同栏目文章' : 'Articles in this category'}>{articles.map(([slug, article]) => <article key={slug} className="rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-white/[0.04]"><p className="text-sm text-[#8a7663]">{article.date} · {article.tag}</p><h2 className="mt-3 text-xl font-bold leading-8"><Link className="hover:underline" href={`/${lang}/knowledge/${slug}`}>{isZh || !article.titleEn ? article.title : article.titleEn}</Link></h2><p className="mt-3 line-clamp-3 leading-7 text-[#6b5a4b] dark:text-slate-300">{isZh ? article.description : article.descriptionEn}</p><Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: item.color }} href={`/${lang}/knowledge/${slug}`}>{isZh ? '阅读全文' : 'Read article'} <ArrowRight className="h-4 w-4" /></Link></article>)}</section>
    </div>
  </main>
}

function categoryForArticle(article: { title: string; titleEn?: string; summary?: string; summaryEn?: string; tag?: string }) {
  return categoryBySlug[categoryForKnowledgeTopic(getPrimaryTopic(article))] ? categoryForKnowledgeTopic(getPrimaryTopic(article)) : 'hotel-diagnosis'
}
