import AskForm from './AskForm'

export default async function AskPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return <AskForm lang={lang} />
}