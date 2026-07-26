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
      title: { absolute: 'MarvelBros C&T - Hotel Investment, Pre-opening and Operations' },
      description: 'Hotel investment, pre-opening, operational diagnosis, and performance improvement knowledge for hotel investors, owners, and leaders, grounded in 30+ years of hospitality experience.',
      keywords: 'hotel investment consulting, hotel pre-opening management, hotel operational diagnosis, hotel operations improvement, hotel knowledge, hotel management',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Investment, Pre-opening and Operations',
        description: 'Practical hotel knowledge and judgment grounded in 30+ years across investment, pre-opening, and operations.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Investment, Pre-opening and Operations',
        description: 'Practical hotel knowledge and judgment grounded in 30+ years across investment, pre-opening, and operations.',
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
    title: { absolute: '迈创兄弟C&T - 酒店投资、筹开与经营知识平台' },
    description: '迈创兄弟C&T基于30多年酒店经验，为酒店投资人、业主和管理者提供酒店投资咨询、酒店筹开管理、酒店经营诊断与酒店运营优化知识。',
    keywords: '酒店投资咨询, 酒店筹开管理, 酒店经营诊断, 酒店运营优化, 酒店经营知识, 酒店管理, 酒店收益管理',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店投资、筹开与经营知识平台',
      description: '基于30多年酒店经验，帮助酒店投资人、业主和管理者看清问题、判断方向。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店投资、筹开与经营知识平台',
      description: '基于30多年酒店经验，帮助酒店投资人、业主和管理者看清问题、判断方向。',
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
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang === 'zh' ? 'zh-CN' : 'en-US')}` }} />
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
