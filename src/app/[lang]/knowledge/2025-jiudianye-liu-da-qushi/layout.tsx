import { legacyMetadata, legacyStructuredData } from '@/lib/page-seo'
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return legacyMetadata(lang, '/knowledge/2025-jiudianye-liu-da-qushi')
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return <>{legacyStructuredData(lang, '/knowledge/2025-jiudianye-liu-da-qushi').map((data, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />)}{children}</>
}
