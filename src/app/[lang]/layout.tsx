import { brand } from '@/lib/brand'
import RootDocument, { siteMetadata } from '@/components/RootDocument'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getDict } from '@/lib/dicts'
import { crawlKeywords, defaultOgImages } from '@/lib/seo'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  
  if (lang === 'en') {
    return {
      ...siteMetadata,
      title: { absolute: 'MarvelBros C&T - Hotel Lifecycle Value Enhancement Consultancy' },
      description: brand.en.description,
      keywords: crawlKeywords.en.join(', '),
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Lifecycle Value Enhancement Consultancy',
        description: brand.en.description,
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
        images: defaultOgImages,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Lifecycle Value Enhancement Consultancy',
        description: brand.en.description,
        images: [defaultOgImages[0].url],
      },
      alternates: {
        canonical: 'https://www.marvelbros.com/en',
        languages: {
          'en': 'https://www.marvelbros.com/en',
          'zh': 'https://www.marvelbros.com/zh',
          'x-default': 'https://www.marvelbros.com/zh',
        },
      },
    }
  }
  
  return {
    ...siteMetadata,
    title: { absolute: '迈创兄弟C&T - 酒店全生命周期价值提升咨询' },
    description: brand.zh.description,
    keywords: crawlKeywords.zh.join(', '),
    authors: [{ name: '迈创兄弟C&T' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: brand.zh.description,
      siteName: '迈创兄弟C&T',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
      images: defaultOgImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: brand.zh.description,
      images: [defaultOgImages[0].url],
    },
    alternates: {
      canonical: 'https://www.marvelbros.com/zh',
      languages: {
        'zh': 'https://www.marvelbros.com/zh',
        'en': 'https://www.marvelbros.com/en',
        'x-default': 'https://www.marvelbros.com/zh',
      },
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!['zh', 'en'].includes(lang)) {
    notFound()
  }
  const dict = getDict(lang)

  return (
    <RootDocument lang={lang === 'zh' ? 'zh-CN' : 'en-US'}>
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
    </RootDocument>
  )
}
