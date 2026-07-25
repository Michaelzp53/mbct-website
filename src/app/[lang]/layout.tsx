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
      title: 'MarvelBros C&T - Hotel Knowledge, Insight and Operational Action',
      description: 'Hospitality knowledge, industry insight, and field-tested methods for hotel owners, investors, and operators, backed by operational diagnosis and business improvement services.',
      keywords: 'hotel knowledge, hotel operations, hotel operational diagnosis, hotel investment, hotel pre-opening consulting, hotel revenue strategy, hotel management',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Knowledge, Insight and Operational Action',
        description: 'Hospitality knowledge and field-tested methods backed by operational diagnosis and business improvement.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Knowledge, Insight and Operational Action',
        description: 'Hospitality knowledge and field-tested methods backed by operational diagnosis and business improvement.',
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
    title: '迈创兄弟C&T - 酒店经营知识、行业洞察与实战方法',
    description: '迈创兄弟C&T（MarvelBros C&T）汇集酒店经营知识、行业洞察和实战方法，帮助酒店业主、投资人与管理者做出判断、推动结果。',
    keywords: '酒店经营知识, 酒店管理, 酒店经营诊断, 酒店投资, 酒店筹开, 酒店收益管理, 酒店管理咨询',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店经营知识、行业洞察与实战方法',
      description: '汇集酒店经营知识、行业洞察和实战方法，帮助酒店经营者做出判断、推动结果。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店经营知识、行业洞察与实战方法',
      description: '汇集酒店经营知识、行业洞察和实战方法，帮助酒店经营者做出判断、推动结果。',
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
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
