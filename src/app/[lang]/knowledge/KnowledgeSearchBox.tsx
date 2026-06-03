'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

type KnowledgeArticle = {
  id: number
  slug: string
  title: string
  titleEn?: string
  summary?: string
  summaryEn?: string
  firstLine?: string
  author: string
  date: string
  readTime: string | number
  tag: string
}

export default function KnowledgeSearchBox({
  lang,
  isZh,
  articles,
  placeholder,
}: {
  lang: string
  isZh: boolean
  articles: KnowledgeArticle[]
  placeholder: string
}) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!normalizedQuery) return []

    return articles
      .filter((article) => {
        const searchable = [
          article.title,
          article.titleEn,
          article.summary,
          article.summaryEn,
          article.firstLine,
          article.author,
          article.tag,
          article.date,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        return searchable.includes(normalizedQuery)
      })
      .slice(0, 8)
  }, [articles, normalizedQuery])

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
          aria-label={placeholder}
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>

      {query.trim() && (
        <div className="mt-4 bg-card border border-border rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-3">
            <p className="text-sm font-medium text-foreground">
              {isZh ? `搜索结果（${results.length}）` : `Search Results (${results.length})`}
            </p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-muted-foreground hover:text-[#f59e0b] transition-colors"
            >
              {isZh ? '清空' : 'Clear'}
            </button>
          </div>

          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((article) => (
                <Link
                  key={`${article.slug}-${article.id}`}
                  href={`/${lang}/knowledge/${encodeURIComponent(article.slug)}`}
                  className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium">
                      {article.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <p className="font-medium text-foreground line-clamp-1">
                    {isZh ? article.title : article.titleEn || article.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {isZh ? article.summary || article.firstLine : article.summaryEn || article.summary || article.firstLine}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {isZh ? '未找到相关文章，请换一个关键词。' : 'No articles found. Try another keyword.'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
