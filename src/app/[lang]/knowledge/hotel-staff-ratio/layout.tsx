import { legacyMetadata, legacyStructuredData } from '@/lib/page-seo'
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return legacyMetadata(lang, '/knowledge/hotel-staff-ratio')
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return <>{legacyStructuredData(lang, '/knowledge/hotel-staff-ratio').map((data, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />)}{children}</>
}
