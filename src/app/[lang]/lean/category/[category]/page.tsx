import Link from 'next/link'
import { ArrowLeft, Search, Clock, User, Eye, ThumbsUp, MessageSquare, ChevronRight, Tag, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { articlesData } from '../../article/[slug]/articles-data'

type SortMode = 'latest' | 'hottest' | 'mostComments'

// 7大分类
const categories = [
  { id: 'investment', labelZh: '投资决策', labelEn: 'Investment', color: '#ef4444', icon: '💰' },
  { id: 'preparation', labelZh: '筹备筹开', labelEn: 'Preparation', color: '#f97316', icon: '🏗️' },
  { id: 'team', labelZh: '团队建设', labelEn: 'Team Building', color: '#8b5cf6', icon: '👥' },
  { id: 'operations', labelZh: '运营升级', labelEn: 'Operations', color: '#22c55e', icon: '⚙️' },
  { id: 'marketing', labelZh: '营销策略', labelEn: 'Marketing', color: '#3b82f6', icon: '📢' },
  { id: 'digital', labelZh: '数字平台', labelEn: 'Digital', color: '#06b6d4', icon: '💻' },
  { id: 'cost', labelZh: '成本优化', labelEn: 'Cost Control', color: '#f59e0b', icon: '📊' },
]

function sortArticles(mode: SortMode) {
  return [...articlesData].sort((a, b) => {
    if (mode === 'hottest') {
      if (b.views !== a.views) return b.views - a.views
      if (b.likes !== a.likes) return b.likes - a.likes
      if (b.comments !== a.comments) return b.comments - a.comments
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }

    if (mode === 'mostComments') {
      if (b.comments !== a.comments) return b.comments - a.comments
      if (b.likes !== a.likes) return b.likes - a.likes
      if (b.views !== a.views) return b.views - a.views
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}


export async function generateStaticParams() {
  const categoryIds = ['investment', 'preparation', 'team', 'operations', 'marketing', 'digital', 'cost']
  
  return categoryIds.flatMap((category) => [
    { lang: 'zh', category },
    { lang: 'en', category },
  ])
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ lang: string; category: string }>; searchParams?: Promise<{ sort?: string }> }) {
  const { lang, category } = await params
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const isZh = lang === 'zh'

  const currentCategory = categories.find(c => c.id === category)
  const latestArticles = sortArticles('latest').filter(a => a.category === category)
  const hottestArticles = sortArticles('hottest').filter(a => a.category === category)
  const mostCommentedArticles = sortArticles('mostComments').filter(a => a.category === category)
  const requestedSort = resolvedSearchParams?.sort
  const activeSort: SortMode = requestedSort === 'hottest' || requestedSort === 'mostComments' ? requestedSort : 'latest'
  const categoryArticles = activeSort === 'hottest' ? hottestArticles : activeSort === 'mostComments' ? mostCommentedArticles : latestArticles

  const ui = {
    backToHome: isZh ? '返回管享精道首页' : 'Back to Lean Insights',
    allArticles: isZh ? '全部文章' : 'All Articles',
    searchPlaceholder: isZh ? '搜索本分类文章...' : 'Search articles in this category...',
    latest: isZh ? '最新' : 'Latest',
    hottest: isZh ? '最热' : 'Hottest',
    mostComments: isZh ? '最多评论' : 'Most Comments',
    official: isZh ? '迈创兄弟官方' : 'Official',
    readMore: isZh ? '阅读全文' : 'Read More',
    views: isZh ? '阅读' : 'Views',
    likes: isZh ? '点赞' : 'Likes',
    comments: isZh ? '评论' : 'Comments',
    minRead: isZh ? '分钟' : 'min',
    noResults: isZh ? '该分类暂无文章' : 'No articles in this category',
    hottestList: isZh ? '热门话题' : 'Trending Topics',
    mostCommentedList: isZh ? '讨论最多' : 'Most Discussed',
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div 
        className="border-b border-border"
        style={{ backgroundColor: `${currentCategory?.color}08` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.backToHome}
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${currentCategory?.color}15` }}
            >
              {currentCategory?.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {isZh ? currentCategory?.labelZh : currentCategory?.labelEn}
              </h1>
              <p className="text-muted-foreground mt-1">
                {categoryArticles.length} {ui.allArticles}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Other Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-bold text-foreground mb-3">
                  {isZh ? '其他分类' : 'Other Categories'}
                </h3>
                <div className="space-y-1">
                  {categories
                    .filter(c => c.id !== category)
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${lang}/lean/category/${cat.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-sm text-foreground group-hover:text-[#f59e0b] transition-colors">
                          {isZh ? cat.labelZh : cat.labelEn}
                        </span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {articlesData.filter(a => a.category === cat.id).length}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Article List */}
          <main className="flex-1">
            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={ui.searchPlaceholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] transition-colors pl-11"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/${lang}/lean/category/${category}`}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeSort === 'latest' ? 'bg-[#f59e0b]/10 text-[#f59e0b]' : 'hover:bg-muted text-muted-foreground'}`}
                >
                  {ui.latest}
                </Link>
                <Link
                  href={`/${lang}/lean/category/${category}?sort=hottest`}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeSort === 'hottest' ? 'bg-[#f59e0b]/10 text-[#f59e0b]' : 'hover:bg-muted text-muted-foreground'}`}
                  title={isZh ? '按阅读、点赞、评论综合排序' : 'Ranked by views, likes, and comments'}
                >
                  {ui.hottest}
                </Link>
                <Link
                  href={`/${lang}/lean/category/${category}?sort=mostComments`}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeSort === 'mostComments' ? 'bg-[#f59e0b]/10 text-[#f59e0b]' : 'hover:bg-muted text-muted-foreground'}`}
                  title={isZh ? '按评论、点赞、阅读排序' : 'Ranked by comments, likes, and views'}
                >
                  {ui.mostComments}
                </Link>
              </div>
            </div>

            {/* Article Cards */}
            <div className="space-y-4">
              {categoryArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-xl hover:border-[#f59e0b]/50 transition-all group"
                >
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-[#f59e0b]/50 text-[#f59e0b]">
                        {ui.official}
                      </Badge>
                      {article.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/${lang}/lean/article/${article.slug}`}>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#f59e0b] transition-colors"
                      >
                        {isZh ? article.titleZh : article.titleEn}
                      </h2>
                    </Link>

                    {/* Summary */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {isZh ? article.summaryZh : article.summaryEn}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {article.views} {ui.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {article.likes} {ui.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {article.comments} {ui.comments}
                      </span>
                      <span className="ml-auto">
                        {article.readTime} {ui.minRead}
                      </span>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href={`/${lang}/lean/article/${article.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors"
                      >
                        {ui.readMore}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {categoryArticles.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{ui.noResults}</p>
              </div>
            )}

            {categoryArticles.length > 0 && (
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <section className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-[#f59e0b]" />
                    <h3 className="font-bold text-foreground">{ui.hottest}</h3>
                  </div>
                  <div className="space-y-4">
                    {hottestArticles.slice(0, 3).map((article, index) => (
                      <Link
                        key={`hot-${article.slug}`}
                        href={`/${lang}/lean/article/${article.slug}`}
                        className="block rounded-lg border border-border p-4 hover:border-[#f59e0b]/40 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-sm font-bold text-[#f59e0b]">#{index + 1}</span>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-foreground line-clamp-2">
                              {isZh ? article.titleZh : article.titleEn}
                            </h4>
                            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{article.views}</span>
                              <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{article.likes}</span>
                              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{article.comments}</span>
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-4 h-4 text-[#f59e0b]" />
                    <h3 className="font-bold text-foreground">{ui.mostComments}</h3>
                  </div>
                  <div className="space-y-4">
                    {mostCommentedArticles.slice(0, 3).map((article, index) => (
                      <Link
                        key={`comment-${article.slug}`}
                        href={`/${lang}/lean/article/${article.slug}`}
                        className="block rounded-lg border border-border p-4 hover:border-[#f59e0b]/40 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-sm font-bold text-[#f59e0b]">#{index + 1}</span>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-foreground line-clamp-2">
                              {isZh ? article.titleZh : article.titleEn}
                            </h4>
                            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{article.comments}</span>
                              <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{article.likes}</span>
                              <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{article.views}</span>
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
