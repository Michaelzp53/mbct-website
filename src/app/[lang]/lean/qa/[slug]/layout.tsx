import { legacyMetadata, legacyStructuredData } from '@/lib/page-seo'
export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  return legacyMetadata(lang, `/lean/qa/${slug}`)
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  return <>{legacyStructuredData(lang, `/lean/qa/${slug}`).map((data, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }} />)}{children}</>
}
