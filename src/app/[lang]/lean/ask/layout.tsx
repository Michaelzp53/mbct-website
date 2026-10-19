import { pageAlternates } from '@/lib/page-seo'
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return { alternates: pageAlternates(lang, '/lean/ask'), robots: { index: false, follow: true } }
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
