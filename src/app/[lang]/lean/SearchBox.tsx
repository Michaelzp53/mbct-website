'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface Article {
  slug: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
}

export default function SearchBox({ lang, isZh, articlesData }: { lang: string; isZh: boolean; articlesData: Article[] }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = searchQuery
    ? articlesData.filter((article) =>
        (isZh ? article.titleZh : article.titleEn).toLowerCase().includes(searchQuery.toLowerCase()) ||
        (isZh ? article.summaryZh : article.summaryEn).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder={isZh ? '搜索文章标题、内容、标签...' : 'Search articles, content, tags...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-14"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>
      {searchQuery && (
        <div className="mt-4 bg-card border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-2">
            {isZh ? '搜索结果：' : 'Search Results:'}
          </p>
          {filteredArticles.length > 0 ? (
            <div className="space-y-2">
              {filteredArticles.map((article) => (
                <a
                  key={article.slug}
                  href={`/${lang}/lean/article/${article.slug}`}
                  className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <p className="font-medium text-foreground">{isZh ? article.titleZh : article.titleEn}</p>
                  <p className="text-xs text-muted-foreground">{(isZh ? article.summaryZh : article.summaryEn).substring(0, 100)}...</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {isZh ? '未找到相关文章' : 'No articles found'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
