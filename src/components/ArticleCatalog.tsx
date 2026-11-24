import Link from 'next/link'
import { articleCatalog, categoryLabel } from '@/lib/article-catalog'

const stageOrder = ['investment', 'development', 'opening', 'operation', 'renovation', 'exit', '']
const stageName: Record<string, [string, string]> = {
  investment: ['投', 'Invest'],
  development: ['建', 'Build'],
  opening: ['筹', 'Pre-open'],
  operation: ['管', 'Operate'],
  renovation: ['改', 'Renew'],
  exit: ['退', 'Exit'],
  '': ['未归阶段', 'Unassigned stage'],
}

export default function ArticleCatalog({ lang }: { lang: string }) {
  const isZh = lang !== 'en'
  const items = articleCatalog()
  return (
    <section className="mt-16" aria-label={isZh ? '全部文章索引' : 'Full article index'}>
      <h2 className="text-2xl font-semibold">{isZh ? '全部文章索引' : 'Full article index'}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{isZh ? `${items.length} 篇，链接都在本页源码里。` : `${items.length} articles. Every link is in this page’s HTML.`}</p>
      {stageOrder.map((stage) => {
        const group = items.filter((item) => item.stage === stage)
        if (!group.length) return null
        const [zh, en] = stageName[stage]
        return (
          <div key={stage || 'none'} className="mt-8">
            <h3 className="text-lg font-semibold">{isZh ? zh : en}</h3>
            <ul className="mt-3 space-y-1">
              {group.map((item) => (
                <li key={`${item.system}-${item.slug}`}>
                  <Link href={`/${lang}${item.path}`} className="text-sm leading-6 hover:underline">
                    {isZh ? item.titleZh : item.titleEn}
                  </Link>
                  <span className="ml-2 text-xs text-slate-500">{item.system} · {categoryLabel(item.category, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
