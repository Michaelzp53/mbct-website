import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, User, Eye, MessageSquare, ThumbsUp, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getArticleBySlug, getAllSlugs } from './articles-data'
import ArticleInteractions from './ArticleInteractions'
import { ArticleMarkdown } from '@/components/article-markdown'

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
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isZh ? '首页' : 'Home',
        item: `https://www.marvelbros.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isZh ? '管享精道' : 'Lean Insights',
        item: `https://www.marvelbros.com/${lang}/lean`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: articleTitle,
        item: articleUrl,
      },
    ],
  }
  const contentLines = articleContent.split('\n').map((line) => line.trim()).filter(Boolean)
  const faqStart = contentLines.findIndex((line) => /^(##\s*)?(常见问题|FAQ|Frequently Asked Questions)$/i.test(line))
  const faqJsonLd = faqStart >= 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: contentLines
          .slice(faqStart + 1)
          .reduce<Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>>((items, line, index, source) => {
            const text = line.replace(/^#+\s*/, '')
            const next = source[index + 1]?.replace(/^#+\s*/, '')
            if (text.endsWith('？') || text.endsWith('?')) {
              items.push({
                '@type': 'Question',
                name: text,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: next || '',
                },
              })
            }
            return items
          }, [])
          .slice(0, 8),
      }
    : null

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }}
      />
      {faqJsonLd?.mainEntity.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
        />
      ) : null}
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

        <div className="mt-10 rounded-2xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-6">
          <h2 className="text-xl font-bold text-foreground">
            {isZh ? '想让酒店官网、内容和 AI 搜索形成获客闭环？' : 'Want your website, content, and AI search to work as a growth loop?'}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {isZh
              ? '迈创兄弟C&T可以帮助酒店把内容资产、官网直订入口、AI 可读信息和私域承接路径连接起来，让更多客人从问题搜索走向咨询和预订。'
              : 'MarvelBros C&T helps hotels connect content assets, direct-booking paths, AI-readable information, and private traffic conversion so more guests move from search questions to inquiries and bookings.'}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${lang}/topics/ai-hotel-growth`} className="rounded-full bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-white">
              {isZh ? '酒店 AI 搜索获客专题' : 'AI Search Growth Hub'}
            </Link>
            <Link href={`/${lang}/services/ai-hotel-website`} className="rounded-full border border-[#f59e0b]/40 px-4 py-2 text-sm font-semibold text-[#b45309]">
              {isZh ? '查看服务' : 'View Service'}
            </Link>
            <Link href={`/${lang}/contact`} className="rounded-full border border-[#f59e0b]/40 px-4 py-2 text-sm font-semibold text-[#b45309]">
              {isZh ? '联系 MBCT' : 'Contact MBCT'}
            </Link>
          </div>
        </div>

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
