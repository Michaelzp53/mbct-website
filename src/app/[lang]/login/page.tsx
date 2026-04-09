import { Metadata } from 'next'
import { getDict } from '@/lib/dicts'
import AuthPageClient from './AuthPageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'zh' ? '登录' : 'Log In'
  return { title }
}

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)

  return <AuthPageClient dict={dict} lang={lang} />
}
