'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, FolderKanban } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import type { PrimaryTopic } from '@/lib/knowledge-topics'
import { getTopicCopy } from '@/lib/knowledge-topics'

type RelatedArticle = {
  slug: string
  title: string
  titleEn?: string
  summary?: string
  summaryEn?: string
  readTime: string
  tag: string
}

export default function ContentPathway({
  lang,
  articleSlug,
  primaryTopic,
  relatedArticles,
  hasRelatedCase,
}: {
  lang: string
  articleSlug: string
  primaryTopic: PrimaryTopic
  relatedArticles: RelatedArticle[]
  hasRelatedCase: boolean
}) {
  const isZh = lang === 'zh'
  const topic = getTopicCopy(primaryTopic, isZh)
  const prefix = `/${lang}`

  return (
    <section className="mt-12 space-y-6 border-t border-border pt-10" aria-label={isZh ? '文章下一步阅读路径' : 'Next reading path'}>
      <div>
        <p className="text-sm font-medium text-primary">{isZh ? '继续判断' : 'Continue exploring'}</p>
        <h2 className="mt-2 text-2xl font-bold text-card-foreground">{isZh ? '下一步，你可能还需要判断' : 'The next questions worth answering'}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`${prefix}/knowledge/${encodeURIComponent(article.slug)}`}
            onClick={() => trackEvent('related_article_click', {
              from_article: articleSlug,
              to_article: article.slug,
              primary_topic: primaryTopic,
            })}
            className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <p className="text-xs font-medium text-primary">{isZh ? article.tag : article.tag.replace('行业报告', 'Industry Report').replace('行业分析', 'Industry Analysis').replace('案例研究', 'Case Study')}</p>
            <h3 className="mt-3 font-semibold leading-6 text-card-foreground group-hover:text-primary">
              {isZh ? article.title : article.titleEn || article.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
              {isZh ? article.summary : article.summaryEn || article.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              {isZh ? '继续阅读' : 'Read next'} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={`${prefix}${topic.href}`}
          onClick={() => trackEvent('topic_hub_click', { from_article: articleSlug, primary_topic: primaryTopic })}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-6 transition-colors hover:bg-primary/10"
        >
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="mt-4 text-sm font-medium text-primary">{isZh ? '对应专题 / 方法' : 'Related framework'}</p>
          <h3 className="mt-1 text-xl font-bold text-card-foreground">{topic.hub}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">{isZh ? '查看方法' : 'View framework'} <ArrowRight className="h-4 w-4" /></span>
        </Link>

        {hasRelatedCase ? (
          <Link
            href={`${prefix}/cases`}
            onClick={() => trackEvent('case_link_click', { from_article: articleSlug, primary_topic: primaryTopic })}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <FolderKanban className="h-5 w-5 text-primary" />
            <p className="mt-4 text-sm font-medium text-primary">{isZh ? '相关案例' : 'Related cases'}</p>
            <h3 className="mt-1 text-xl font-bold text-card-foreground">{isZh ? '查看类似酒店问题如何被拆解' : 'See how similar hotel issues are broken down'}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{isZh ? '案例仅呈现真实、可说明的项目背景、判断与方法；不以未经验证的数字替代证据。' : 'Cases focus on explainable context, judgment, and method rather than unverified numbers.'}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">{isZh ? '查看案例' : 'View cases'} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-6">
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
            <p className="mt-4 text-sm font-medium text-primary">{isZh ? '先把问题看清' : 'Clarify the problem first'}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{isZh ? '不是每个问题都需要立刻进入案例或方案。先用相关方法判断问题阶段，再决定下一步。' : 'Not every issue needs a case or solution immediately. Use the framework to identify the stage before deciding the next move.'}</p>
          </div>
        )}
      </div>

      <Link
        href={`${prefix}${topic.contactHref}`}
        onClick={() => trackEvent('article_to_contact_click', { from_article: articleSlug, primary_topic: primaryTopic })}
        className="flex items-center justify-between gap-5 rounded-2xl border border-border bg-muted/40 p-6 transition-colors hover:border-primary/50"
      >
        <div>
          <p className="text-sm font-medium text-primary">{isZh ? '低压力交流' : 'A low-pressure next step'}</p>
          <h3 className="mt-1 text-lg font-bold text-card-foreground">{topic.contact}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{isZh ? '先描述项目阶段和当前最难判断的问题，再决定是否需要进一步交流。' : 'Start with the project stage and the hardest question to answer, then decide whether a further conversation is useful.'}</p>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
      </Link>
    </section>
  )
}
