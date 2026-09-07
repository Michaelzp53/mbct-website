import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { getDict } from '@/lib/dicts'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: lang === 'zh' ? '交流酒店经营问题 | 迈创兄弟C&T' : 'Discuss a hotel operating question | MarvelBros C&T' }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const zh = lang === 'zh'
  const dict = getDict(lang)
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold text-primary">{zh ? '迈创兄弟C&T · 专业交流' : 'MarvelBros C&T · Talk with us'}</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{zh ? '您的酒店，现在最想解决什么问题？' : 'What would you most like to resolve at your hotel?'}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{zh ? '从项目阶段和一个具体问题开始。我们结合实际背景交流判断，再确定是否需要进一步分析。' : 'Start with your project stage and one concrete question. We will discuss the context before deciding whether further analysis is useful.'}</p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-muted" />}><ContactForm dict={dict} lang={lang} /></Suspense>
        <aside className="space-y-6">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">{zh ? '也可以直接联系' : 'You can also contact us directly'}</h2>
            <a className="mt-4 block text-lg font-semibold text-primary hover:underline" href="tel:+8618941579333">+86 189 4157 9333</a>
            <p className="mt-1 text-sm text-muted-foreground">{zh ? '电话与微信同号' : 'Phone and WeChat use the same number'}</p>
            <a className="mt-4 block break-all text-primary hover:underline" href="mailto:info@marvelbros.com">info@marvelbros.com</a>
          </section>
          <section className="rounded-2xl border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-bold">{zh ? '第一次交流，先看清三件事' : 'Three starting points for our first conversation'}</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
              <li>{zh ? '您希望改善什么结果，目前卡在哪里。' : 'The result you want to improve and what is holding it back.'}</li>
              <li>{zh ? '已经尝试过哪些办法，现有信息能说明什么。' : 'What you have already tried and what the available information shows.'}</li>
              <li>{zh ? '下一步适合自行检查、补充数据，还是进一步诊断。' : 'Whether to start with a self-check, gather more data, or carry out a diagnosis.'}</li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{zh ? '首次留言不需要上传完整经营资料。若需要现场勘察，服务范围和费用会另行沟通确认。' : 'You do not need to upload complete operating records for an initial enquiry. Any site visit, scope, and fees will be discussed separately.'}</p>
          </section>
          <Link href={`/${lang}/knowledge#problem-navigation`} className="inline-block text-sm font-semibold text-primary hover:underline">{zh ? '还在了解问题？先阅读经营方法 →' : 'Still exploring the issue? Read our operating methods →'}</Link>
        </aside>
      </div>
    </div>
  )
}
