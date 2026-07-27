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
      title: { absolute: 'MarvelBros C&T - Hotel Lifecycle Value Advisory' },
      description: 'Hotel lifecycle advisory for investors, owners, and managers across investment research, brand positioning, development, pre-opening, operational diagnosis, product renewal, and market growth.',
      keywords: 'hotel lifecycle consulting, hotel investment consulting, hotel brand positioning, hotel pre-opening management, hotel operational diagnosis, hotel performance improvement, hotel product renewal',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Lifecycle Value Advisory',
        description: 'Professional judgment and advisory across hotel investment, brand positioning, development, operations, product renewal, and market growth.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Lifecycle Value Advisory',
        description: 'Professional judgment across the hotel lifecycle, from investment decisions to sustained operations.',
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
    title: { absolute: '迈创兄弟C&T - 酒店全生命周期价值提升咨询' },
    description: '迈创兄弟C&T面向酒店投资人、业主和管理者，提供酒店投资研究、品牌定位、筹建管理、经营诊断、产品升级与市场增长咨询。',
    keywords: '酒店全生命周期咨询, 酒店投资咨询, 酒店品牌定位, 酒店筹建管理, 酒店经营诊断, 酒店运营优化, 酒店产品升级, 酒店市场增长',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: '从投资决策到持续经营，为酒店投资人、业主和管理者提供覆盖全生命周期的专业判断与优化路径。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店全生命周期价值提升咨询',
      description: '从投资决策到持续经营，为酒店每一个阶段提供专业判断。',
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
