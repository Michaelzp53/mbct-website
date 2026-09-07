import Link from 'next/link'

export default function NewsletterSubscribe({ lang }: { lang: string }) {
  const zh = lang === 'zh'
  return (
    <aside className="mt-8 rounded-2xl border border-border bg-muted/40 p-6">
      <h2 className="text-xl font-bold">{zh ? '把方法用到下一次经营判断中' : 'Bring these methods to your next operating decision'}</h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{zh ? '按经营问题查找文章，或进入精益管理阅读具体方法。您可以收藏知识库，随时查看更新。' : 'Explore articles by operating problem or read practical lean management methods. Bookmark the knowledge base to return for updates.'}</p>
      <div className="mt-4 flex flex-wrap gap-4">
        <Link className="font-semibold text-primary hover:underline" href={`/${lang}/knowledge#problem-navigation`}>{zh ? '按问题找文章 →' : 'Browse by problem →'}</Link>
        <Link className="font-semibold text-primary hover:underline" href={`/${lang}/lean`}>{zh ? '阅读精益管理方法 →' : 'Explore lean management →'}</Link>
      </div>
    </aside>
  )
}
