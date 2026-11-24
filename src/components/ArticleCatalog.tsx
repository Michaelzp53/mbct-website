import Link from 'next/link'
import { articleCatalog, categoryLabel } from '@/lib/article-catalog'

export const catalogPageSize = 36

const stageName: Record<string, [string, string]> = {
  investment: ['投', 'Invest'],
  development: ['建', 'Develop'],
  opening: ['筹', 'Pre-open'],
  operation: ['管', 'Operate'],
  renovation: ['改', 'Renovate'],
  exit: ['退', 'Exit'],
  '': ['未归阶段', 'Unassigned stage'],
}

export default function ArticleCatalog({ lang, page = 1 }: { lang: string; page?: number }) {
  const isZh = lang !== 'en'
  const items = articleCatalog()
  const pageCount = Math.max(1, Math.ceil(items.length / catalogPageSize))
  const current = Math.min(Math.max(page, 1), pageCount)
  const slice = items.slice((current - 1) * catalogPageSize, current * catalogPageSize)
  return (
    <section className="mt-16" aria-label={isZh ? '全部文章索引' : 'Full article index'}>
      <h2 className="text-2xl font-semibold leading-snug">{isZh ? '全部文章索引' : 'Full article index'}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {isZh
          ? `共 ${items.length} 篇，第 ${current}/${pageCount} 页。`
          : `${items.length} articles, page ${current} of ${pageCount}.`}
      </p>
      <ul className="mt-6 space-y-2">
        {slice.map((item) => {
          const stage = stageName[item.stage] || stageName['']
          return (
            <li key={`${item.system}-${item.slug}`}>
              <Link href={`/${lang}${item.path}`} className="text-base leading-7 hover:underline">
                {isZh ? item.titleZh : item.titleEn}
              </Link>
              <span className="ml-2 text-sm text-slate-500">{isZh ? stage[0] : stage[1]} · {categoryLabel(item.category, lang)}</span>
            </li>
          )
        })}
      </ul>
      <nav className="mt-8 flex flex-wrap gap-2" aria-label={isZh ? '文章索引分页' : 'Article index pages'}>
        {Array.from({ length: pageCount }, (_, index) => {
          const number = index + 1
          const href = number === 1 ? `/${lang}/topics` : `/${lang}/topics?page=${number}`
          return (
            <Link key={number} href={href} className={`px-3 py-2 text-sm font-semibold ${number === current ? 'bg-[#0b4a6f] text-white' : 'border border-slate-300 dark:border-slate-700'}`} aria-current={number === current ? 'page' : undefined}>
              {number}
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
