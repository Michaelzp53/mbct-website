import { brand } from '@/lib/brand'
import RootDocument, { siteMetadata } from '@/components/RootDocument'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getDict } from '@/lib/dicts'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  
  if (lang === 'en') {
    return {
      ...siteMetadata,
      title: { absolute: 'MarvelBros C&T - Hotel Lifecycle Value Advisory' },
      description: brand.en.description,
      keywords: 'hotel lifecycle consulting, hotel investment consulting, hotel brand positioning, hotel pre-opening management, hotel operational diagnosis, hotel performance improvement, hotel product renewal',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Lifecycle Value Advisory',
        description: brand.en.description,
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Lifecycle Value Advisory',
        description: brand.en.description,
      },
      alternates: {
        canonical: 'https://www.marvelbros.com/en',
        languages: {
          'en': 'https://www.marvelbros.com/en',
          'zh': 'https://www.marvelbros.com/zh',
        },
      },
    }
  }
  
  return {
    ...siteMetadata,
    title: { absolute: '迈创兄弟C&T - 酒店全生命周期价值提升咨询' },
    description: brand.zh.description,
    keywords: '酒店全生命周期咨询, 酒店投资咨询, 酒店品牌定位, 酒店筹建管理, 酒店经营诊断, 酒店运营优化, 酒店产品升级, 酒店市场增长',
    authors: [{ name: '迈创兄弟C&T' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: brand.zh.description,
      siteName: '迈创兄弟C&T',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: brand.zh.description,
    },
    alternates: {
      canonical: 'https://www.marvelbros.com/zh',
      languages: {
        'zh': 'https://www.marvelbros.com/zh',
        'en': 'https://www.marvelbros.com/en',
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
