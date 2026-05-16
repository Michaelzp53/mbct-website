import Link from 'next/link'
import { ArrowLeft, Clock, User, Eye, MessageSquare, ThumbsUp, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getArticleBySlug, getAllSlugs } from './articles-data'
import ArticleInteractions from './ArticleInteractions'

// 7大分类
const categories = [
  { id: 'investment', labelZh: '投资决策', labelEn: 'Investment', color: '#ef4444' },
  { id: 'preparation', labelZh: '筹备筹开', labelEn: 'Preparation', color: '#f97316' },
  { id: 'team', labelZh: '团队建设', labelEn: 'Team Building', color: '#8b5cf6' },
  { id: 'operations', labelZh: '运营升级', labelEn: 'Operations', color: '#22c55e' },
  { id: 'marketing', labelZh: '营销策略', labelEn: 'Marketing', color: '#3b82f6' },
  { id: 'digital', labelZh: '数字平台', labelEn: 'Digital', color: '#06b6d4' },
  { id: 'cost', labelZh: '成本优化', labelEn: 'Cost Control', color: '#f59e0b' },
]

export async function generateStaticParams() {
  const slugs = getAllSlugs()

  return slugs.flatMap((slug) => [
    { lang: 'zh', slug },
    { lang: 'en', slug },
  ])
}

export default async function LeanArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const isZh = lang === 'zh'

  // 获取文章数据
  const articleData = getArticleBySlug(slug)

  // 如果文章不存在，显示404
  if (!articleData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {isZh ? '文章未找到' : 'Article Not Found'}
          </h1>
          <Link
            href={`/${lang}/lean`}
            className="text-[#f59e0b] hover:underline"
          >
            {isZh ? '返回文章列表' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    )
  }

  const ui = {
    backToList: isZh ? '返回文章列表' : 'Back to Articles',
    official: isZh ? '迈创兄弟官方' : 'Official',
    comments: isZh ? '评论交流' : 'Comments',
    commentsCount: isZh ? '条评论' : 'comments',
    writeComment: isZh ? '写下你的评论...' : 'Write your comment...',
    submit: isZh ? '发表' : 'Post',
    reply: isZh ? '回复' : 'Reply',
    like: isZh ? '点赞' : 'Like',
    loadMore: isZh ? '加载更多' : 'Load More',
  }

  const category = categories.find(c => c.id === articleData.category)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#f59e0b]/10 via-background to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href={`/${lang}/lean`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {ui.backToList}
          </Link>

          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <Badge
                className="text-white border-0"
                style={{ backgroundColor: category.color }}
              >
                {isZh ? category.labelZh : category.labelEn}
              </Badge>
            )}
            <Badge variant="outline" className="border-[#f59e0b]/50 text-[#f59e0b]">
              {ui.official}
            </Badge>
            {articleData.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isZh ? articleData.titleZh : articleData.titleEn}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {articleData.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {articleData.date}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {articleData.views}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5" />
              {articleData.likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              {articleData.comments} {ui.commentsCount}
            </span>
            <span className="ml-auto">
              {articleData.readTime} {isZh ? '分钟' : 'min'}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: (isZh ? articleData.contentZh : (articleData.contentEn?.trim() || articleData.contentZh))
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\* (.*)/g, '<li class="ml-4 mb-1">$1</li>')
                .replace(/\[ \] (.*)/g, '<div class="flex items-center gap-2 mb-2"><input type="checkbox" class="w-4 h-4" /><span>$1</span></div>')
                .replace(/\| (.*?) \|/g, '<td class="border px-3 py-2">$1</td>')
                .replace(/\n\n/g, '<br/><br/>')
                .replace(/\n/g, '<br/>')
            }}
          />
        </article>

        {/* Interactive: Like & Comment (Client Component) */}
        <ArticleInteractions
          slug={slug}
          initialLikes={articleData.likes}
          initialComments={[]}
          isZh={isZh}
        />
      </div>
    </div>
  )
}