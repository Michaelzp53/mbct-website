import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getArticleBySlug, getAllSlugs } from './articles-data'
import ArticleComments from '../../../knowledge/[slug]/ArticleComments'
import NewsletterSubscribe from '../../../knowledge/[slug]/NewsletterSubscribe'
import ArticleEngagementTracker from '@/components/knowledge/ArticleEngagementTracker'
import { ArticleMarkdown } from '@/components/article-markdown'
import { leanCategoryBySlug, getLeanArticleCategory } from '@/lib/knowledge-taxonomy'

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
    notFound()
  }

  const ui = {
    backToList: isZh ? '返回文章列表' : 'Back to Articles',
    official: isZh ? '迈创兄弟C&T' : 'Official',
    comments: isZh ? '评论交流' : 'Comments',
    commentsCount: isZh ? '条评论' : 'comments',
    writeComment: isZh ? '写下你的评论...' : 'Write your comment...',
    submit: isZh ? '发表' : 'Post',
    reply: isZh ? '回复' : 'Reply',
    like: isZh ? '点赞' : 'Like',
    loadMore: isZh ? '加载更多' : 'Load More',
  }

  const category = leanCategoryBySlug[getLeanArticleCategory(articleData)]
  const articleTitle = isZh ? articleData.titleZh : articleData.titleEn
  const articleContent = isZh ? articleData.contentZh : (articleData.contentEn?.trim() || articleData.contentZh)
  const displayContent = (() => {
    if (slug === 'hotel-overdue-corporate-accounts-new-credit-bookings-2026-10-24') {
      const headings = isZh ? ["先确认逾期，别把账龄当成付款期限", "新订单要和已有未收款放在一起看", "在三种处理方式之间作出具体选择", "让批准条件进入预订与结算环节", "把客户挂账决策写在同一张表上", "先用一个客户检验这套决定是否能执行"] : ["Check the due date before treating an aged balance as overdue", "Review new bookings alongside existing unpaid exposure", "Choose a specific response from three options", "Carry approved conditions into reservations and settlement", "Record the corporate credit decision on one sheet", "Test whether the decision can be implemented with one client"]
      let text = articleContent.slice(articleTitle.length).trim()
      for (const heading of headings) text = text.replace(`

${heading}

`, `

## ${heading}

`)
      const relatedTitle = isZh ? '酒店月底周转紧，回款和付款要排到同一张表' : 'Hotel Cash Is Tight at Month-end: Put Collections and Payments on the Same Schedule'
      text = text.replace(relatedTitle, `[${relatedTitle}](/${lang}/lean/article/hotel-cash-collection-payment-calendar-2026-08-17)`)
      text = text.replace('Oracle OPERA Cloud 26.2', '[Oracle OPERA Cloud 26.2](https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_accounts_receivable_creating_account_receivables_accounts.htm)')
      if (!isZh) text = text.replace('OPERA Cloud 26.2', '[OPERA Cloud 26.2](https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_accounts_receivable_creating_account_receivables_accounts.htm)')
      return text
    }
    if (slug === 'hotel-group-arrival-pre-check-in-queues-2026-10-23') return articleContent.slice(articleTitle.length).trim()
    if (slug === 'hotel-guest-supply-overstock-purchasing-quantities-2026-10-21') {
      const headings = isZh ? ['先把客用品库存分清楚', '怎样看清实际消耗', '酒店客用品采购，要同时算数量和到货日', '把采购量核对表带进审批', '先试调一组常用品'] : ['Clarify the guest supply inventory', 'Establish actual consumption', 'Calculate quantities alongside delivery dates', 'Bring a purchasing quantity checklist into approval', 'Trial an adjustment with a small group of common items']
      let text = articleContent.slice(articleTitle.length).trim()
      for (const heading of headings) text = text.replace(`\n\n${heading}\n\n`, `\n\n## ${heading}\n\n`)
      return text
    }
    const energyArticle = slug === 'hotel-energy-management-after-golden-week-2026-10-07'
    if (!energyArticle && slug !== 'hotel-orders-cash-shortage-operating-loan-2026-09-29') return articleContent
    const sectionTitles = energyArticle
      ? (isZh
          ? ['客人少了，设备未必跟着少开', '先调整运行，再讨论投入', '一份能落实到现场的运行调整单', '账单变小，还要解释为什么', '节能升级，应当同时守住服务']
          : ['Fewer guests do not necessarily mean less equipment running', 'Adjust operations before discussing investment', 'An operating adjustment sheet that can be used on site', 'A smaller bill still needs an explanation', 'Better energy management must also protect service'])
      : isZh
      ? ['订单多，为什么还会缺现金', '政策说了什么，没说什么', '借款前五问：把焦虑变成可核对的问题', '先走完这笔现金，再决定是否开口借款']
      : ['Why can bookings rise while cash runs short?', 'What the policy says—and does not say', 'Five questions before borrowing', 'Follow the cash before approaching a lender']
    let content = articleContent.startsWith(`${articleTitle}\n\n`)
      ? articleContent.slice(articleTitle.length + 2)
      : articleContent
    for (const heading of sectionTitles) {
      content = content.replace(`\n\n${heading}\n\n`, `\n\n## ${heading}\n\n`)
    }
    return content
  })()
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
      name: isZh ? '迈创兄弟C&T' : 'MarvelBros C&T',
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
    articleSection: category ? (isZh ? category.zh : category.en) : articleData.category,
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
                {isZh ? category.zh : category.en}
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
            <span className="ml-auto">
              {articleData.readTime} {isZh ? '分钟' : 'min'}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div data-article-body className="min-w-0 [overflow-wrap:anywhere]"><ArticleMarkdown content={displayContent} /></div>
        <ArticleEngagementTracker articleSlug={slug} articleType="lean" />
        <ArticleComments slug={`lean/${slug}`} lang={lang} />
        <NewsletterSubscribe lang={lang} />
      </div>
    </div>
  )
}
