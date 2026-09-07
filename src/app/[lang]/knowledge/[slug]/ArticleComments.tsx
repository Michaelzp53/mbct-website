'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function ArticleComments({ slug, lang }: { slug: string; lang: string }) {
  const zh = lang === 'zh'
  return (
    <section className="mt-8 border-t border-border pt-6">
      <h2 className="text-xl font-bold">{zh ? '这篇文章与您的酒店有关吗？' : 'Does this article relate to your hotel?'}</h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{zh ? '把项目阶段和最难判断的问题告诉我们。文章来源会随咨询一起提交，便于结合具体背景交流。' : 'Tell us your project stage and the question you find hardest to answer. The article reference will accompany your enquiry.'}</p>
      <Link href={`/${lang}/contact?type=diagnosis&article=${encodeURIComponent(slug)}`} onClick={() => trackEvent('article_to_contact_click', { from_article: slug, placement: 'article_question' })} className="mt-4 inline-flex rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400">{zh ? '就这篇文章提问' : 'Ask about this article'}</Link>
    </section>
  )
}
