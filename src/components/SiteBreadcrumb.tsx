import Link from 'next/link'

export default function SiteBreadcrumb({ lang, path, label }: { lang: string; path: string; label: string }) {
  const home = lang === 'zh' ? '首页' : 'Home'
  const items = [
    { '@type': 'ListItem', position: 1, name: home, item: `https://www.marvelbros.com/${lang}` },
    { '@type': 'ListItem', position: 2, name: label, item: `https://www.marvelbros.com/${lang}${path}` },
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }).replace(/</g, '\u003c') }} />
      <nav aria-label={lang === 'zh' ? '面包屑导航' : 'Breadcrumb'} className="mx-auto flex max-w-[1440px] flex-wrap gap-2 px-5 py-4 text-sm text-muted-foreground sm:px-8 lg:px-12 xl:px-16">
        <Link href={`/${lang}`} className="hover:text-primary">{home}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{label}</span>
      </nav>
    </>
  )
}
