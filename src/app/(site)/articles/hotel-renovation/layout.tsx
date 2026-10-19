import type { Metadata } from 'next'
const url = 'https://www.marvelbros.com/articles/hotel-renovation'
const title = '30年老酒店的逆袭之路：从濒临倒闭到一房难求的迈创兄弟C&T改造实录'
export const metadata: Metadata = { title: { absolute: title }, alternates: { canonical: url } }
export default function Layout({ children }: { children: React.ReactNode }) {
  const data = [{
    '@context': 'https://schema.org', '@type': 'Article', headline: title, url,
    mainEntityOfPage: url, inLanguage: 'zh-CN',
    author: { '@type': 'Organization', name: 'MarvelBros C&T', url: 'https://www.marvelbros.com/zh/about' },
    publisher: { '@type': 'Organization', '@id': 'https://www.marvelbros.com/#organization', name: 'MarvelBros C&T' },
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.marvelbros.com/zh' },
      { '@type': 'ListItem', position: 2, name: title, item: url },
    ],
  }]
  return <>{data.map((item, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}{children}</>
}
