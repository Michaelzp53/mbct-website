import Link from 'next/link'
import { neighbors } from '@/lib/article-catalog'

export default function ArticleNeighbors({ lang, path, system }: { lang: string; path: string; system: 'knowledge' | 'lean' | 'qa' }) {
  const { prev, next } = neighbors(path, system)
  const isZh = lang !== 'en'
  if (!prev && !next) return null
  return (
    <nav aria-label={isZh ? '上一篇下一篇' : 'Previous and next'} className="mt-10 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 dark:border-slate-800">
      {prev ? <Link href={`/${lang}${prev.path}`} className="rounded-xl border border-slate-200 px-4 py-3 hover:border-[#0b4a6f] dark:border-slate-700"><span className="block text-xs text-slate-500">{isZh ? '上一篇' : 'Previous'}</span><span className="mt-1 block font-semibold">{isZh ? prev.titleZh : prev.titleEn}</span></Link> : <span />}
      {next ? <Link href={`/${lang}${next.path}`} className="rounded-xl border border-slate-200 px-4 py-3 text-right hover:border-[#0b4a6f] dark:border-slate-700"><span className="block text-xs text-slate-500">{isZh ? '下一篇' : 'Next'}</span><span className="mt-1 block font-semibold">{isZh ? next.titleZh : next.titleEn}</span></Link> : <span />}
    </nav>
  )
}
