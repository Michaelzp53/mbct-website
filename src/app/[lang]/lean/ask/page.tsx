import { redirect } from 'next/navigation'

export default async function AskPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang === 'en' ? 'en' : 'zh'}/contact?type=diagnosis&article=lean-question`)
}
