import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, User, Eye, MessageSquare, ThumbsUp, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getArticleBySlug, getAllSlugs } from './articles-data'
import ArticleInteractions from './ArticleInteractions'
import { ArticleMarkdown } from '@/components/article-markdown'
import Script from 'next/script'

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

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const isZh = lang === 'zh'
  const articleData = getArticleBySlug(slug)

  if (!articleData) {
    return {
      title: isZh ? '文章未找到 | 迈创兄弟C&T' : 'Article Not Found | MarvelBros C&T',
      robots: { index: false, follow: false },
    }
  }

  const title = isZh ? articleData.titleZh : articleData.titleEn
  const description = isZh ? articleData.summaryZh : articleData.summaryEn
  const canonical = `https://www.marvelbros.com/${lang}/lean/article/${slug}`

  return {
    title: `${title} | ${isZh ? '迈创兄弟C&T' : 'MarvelBros C&T'}`,
    description,
    keywords: articleData.tags,
    alternates: {
      canonical,
      languages: {
        'zh-CN': `https://www.marvelbros.com/zh/lean/article/${slug}`,
        'en-US': `https://www.marvelbros.com/en/lean/article/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: 'MarvelBros C&T',
      locale: isZh ? 'zh_CN' : 'en_US',
    },
  }
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
  const articleTitle = isZh ? articleData.titleZh : articleData.titleEn
  const articleContent = isZh ? articleData.contentZh : (articleData.contentEn?.trim() || articleData.contentZh)
  const articleUrl = `https://www.marvelbros.com/${lang}/lean/article/${slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: isZh ? articleData.summaryZh : articleData.summaryEn,
    datePublished: articleData.date,
    dateModified: articleData.date,
    author: {
      '@type': 'Organization',
      '@id': 'https://www.marvelbros.com/#organization',
      name: isZh ? '迈创兄弟C&T（MarvelBros C&T）' : 'MarvelBros C&T',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.marvelbros.com/#organization',
      name: 'MarvelBros C&T',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.marvelbros.com/logo-new.png',
      },
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    articleSection: category ? (isZh ? category.labelZh : category.labelEn) : articleData.category,
    keywords: articleData.tags,
  }

  return (
    <div className="min-h-screen bg-background">
      <Script
        id={`lean-article-json-ld-${slug}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
            {articleTitle}
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
        <ArticleMarkdown
          content={articleContent}
        />

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
