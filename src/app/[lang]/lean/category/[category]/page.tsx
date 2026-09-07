import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allArticlesData } from '../../article/[slug]/articles-data'
import { leanCategories, leanCategoryBySlug, normalizeLeanCategory, getLeanArticleCategory, isLeanCategory } from '@/lib/knowledge-taxonomy'

export async function generateMetadata({ params }: { params: Promise<{ lang: string; category: string }> }): Promise<Metadata> {
  const { lang, category } = await params
  const item = leanCategoryBySlug[normalizeLeanCategory(category)]
  return {
    title: `${lang === 'zh' ? item.zh : item.en} | ${lang === 'zh' ? '管享精道' : 'Lean Insights'}`,
    alternates: { canonical: `https://www.marvelbros.com/${lang}/lean/category/${item.slug}` },
  }
}
export default async function CategoryPage({ params, searchParams }: {
  params: Promise<{ lang: string; category: string }>
  searchParams?: Promise<{ q?: string; sort?: string }>
}) {
  const { lang, category } = await params
  if (!isLeanCategory(category)) notFound()
  const query = await searchParams
  const zh = lang === 'zh'
  const canonical = normalizeLeanCategory(category)
  const item = leanCategoryBySlug[canonical]
  const q = (query?.q || '').trim()
  const articles = allArticlesData.filter(article => getLeanArticleCategory(article) === canonical)
    .filter(article => !q || [article.titleZh, article.titleEn, article.summaryZh, article.summaryEn, ...(article.tags || [])].join(' ').toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => b.date.localeCompare(a.date))
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href={`/${lang}/lean`} className="text-sm text-primary hover:underline">{zh ? '← 返回管享精道' : '← Back to Lean Insights'}</Link>
      <header className="my-6">
        <h1 className="text-3xl font-bold sm:text-4xl">{zh ? item.zh : item.en}</h1>
        <p className="mt-3 leading-7 text-muted-foreground">{zh ? item.descriptionZh : item.descriptionEn}</p>
      </header>
      <nav aria-label={zh ? '管享精道栏目' : 'Lean Insights categories'} className="mb-6 flex flex-wrap gap-2">
        {leanCategories.map(section => <Link key={section.slug} href={`/${lang}/lean/category/${section.slug}`} aria-current={section.slug === canonical ? 'page' : undefined} className={`rounded-lg border px-3 py-2 text-sm ${section.slug === canonical ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary'}`}>{zh ? section.zh : section.en}</Link>)}
      </nav>
      <form className="mb-6 flex gap-2" action={`/${lang}/lean/category/${canonical}`}>
        <input aria-label={zh ? '搜索本栏目文章' : 'Search this category'} placeholder={zh ? '搜索本栏目标题、摘要或标签' : 'Search titles, summaries, or tags'} name="q" defaultValue={q} className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3" />
        <button className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-950">{zh ? '搜索' : 'Search'}</button>
      </form>
      <p className="mb-5 text-sm text-muted-foreground">{zh ? `共 ${articles.length} 篇文章，按发布日期排序` : `${articles.length} articles, newest first`}</p>
      <section className="grid gap-5 md:grid-cols-2" aria-label={zh ? '文章列表' : 'Articles'}>
        {articles.map(article => <article key={article.slug} className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs text-muted-foreground">{article.date} · {article.readTime} {zh ? '分钟阅读' : 'min read'}</p>
          <h2 className="mt-3 text-xl font-semibold leading-8"><Link className="hover:text-primary" href={`/${lang}/lean/article/${article.slug}`}>{zh ? article.titleZh : article.titleEn}</Link></h2>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">{zh ? article.summaryZh : article.summaryEn}</p>
          <Link className="mt-4 inline-block text-sm font-semibold text-primary" href={`/${lang}/lean/article/${article.slug}`}>{zh ? '阅读全文 →' : 'Read article →'}</Link>
        </article>)}
      </section>
      {!articles.length && <p className="rounded-lg bg-muted p-6">{q ? (zh ? '没有找到匹配的文章，请试试其他关键词。' : 'No matching articles. Try another keyword.') : (zh ? '本栏目内容正在整理，您可以先浏览其他栏目。' : 'Content for this category is being prepared. Explore another category in the meantime.')}</p>}
    </div>
  )
}
