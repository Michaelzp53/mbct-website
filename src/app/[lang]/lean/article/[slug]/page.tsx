import Link from 'next/link'
import { ArrowLeft, MessageSquare, ThumbsUp, Clock, User, Eye, Send, ChevronRight, Tag, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getArticleBySlug, getAllSlugs, ArticleData } from './articles-data'

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

// 评论数据结构
interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  date: string
  likes: number
  replies: Comment[]
  isOfficial: boolean
}

// 示例评论（空数组，等待真实评论系统）
const sampleComments: Comment[] = []

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
    relatedArticles: isZh ? '相关文章' : 'Related Articles',
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
              __html: (isZh ? articleData.contentZh : articleData.contentEn)
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

        {/* Like Button */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-[#f59e0b]/50 text-[#f59e0b] hover:bg-[#f59e0b]/10"
          >
            <Heart className="w-5 h-5" />
            <span>{articleData.likes} {isZh ? '点赞' : 'Likes'}</span>
          </Button>
          <Button 
            variant="outline"
            className="flex items-center gap-2 px-6 py-3"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{articleData.comments} {ui.commentsCount}</span>
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#f59e0b]" />
            {ui.comments}
            <span className="text-sm font-normal text-muted-foreground">
              ({sampleComments.length + sampleComments.reduce((acc, c) => acc + c.replies.length, 0)})
            </span>
          </h2>

          {/* Comment Input */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder={ui.writeComment}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] resize-none min-h-[100px]"
                />
                <div className="flex justify-end mt-3">
                  <Button className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold">
                    <Send className="w-4 h-4 mr-2" />
                    {ui.submit}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {sampleComments.map((comment) => (
              <div key={comment.id} className="bg-card border border-border rounded-xl p-6">
                {/* Main Comment */}
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold ${
                    comment.isOfficial ? 'bg-[#f59e0b]' : 'bg-muted'
                  }`}>
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-foreground">{comment.author}</span>
                      {comment.isOfficial && (
                        <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">
                          {ui.official}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-foreground leading-relaxed mb-3">{comment.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {comment.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        {ui.reply}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 ml-14 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ${
                            reply.isOfficial ? 'bg-[#f59e0b]' : 'bg-muted-foreground'
                          }`}>
                            {reply.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-sm text-foreground">{reply.author}</span>
                              {reply.isOfficial && (
                                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">
                                  {ui.official}
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">{reply.date}</span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed mb-2">{reply.content}</p>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-[#f59e0b] transition-colors">
                              <ThumbsUp className="w-3.5 h-3.5" />
                              {reply.likes}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              {ui.loadMore}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
