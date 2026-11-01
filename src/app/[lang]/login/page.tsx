import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: lang === 'zh' ? '账户服务说明' : 'Account services',
    robots: { index: false, follow: true },
    alternates: { canonical: `https://www.marvelbros.com/${lang}/login` },
  }
}

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const zh = lang === 'zh'
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-3xl font-semibold">{zh ? '账户服务暂未开放' : 'Account services are not yet available'}</h1>
      <p className="mt-5 leading-7 text-muted-foreground">{zh ? '目前无需登录或注册即可阅读公开文章。您可以继续浏览酒店经营知识，或通过联系页面交流项目问题。' : 'You can read our public articles without signing in or registering. Explore our hotel knowledge or contact us to discuss a project.'}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href={`/${lang}/knowledge`} className="inline-flex min-h-12 items-center bg-primary px-5 py-3 font-semibold text-primary-foreground">{zh ? '阅读经营知识' : 'Explore hotel knowledge'}</Link>
        <Link href={`/${lang}/contact`} className="inline-flex min-h-12 items-center border border-border px-5 py-3 font-semibold text-primary">{zh ? '联系我们' : 'Contact us'}</Link>
      </div>
    </section>
  )
}
