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
      title: 'MarvelBros C&T - Hotel Digital Insight and AI Lean Management',
      description: 'MarvelBros C&T is a full-lifecycle hospitality advisory and solution partner focused on digital enablement, helping hotels grow through the dual track of efficiency and experience.',
      keywords: 'hotel management, hotel investment, AI lean management, hotel consulting, feasibility analysis, revenue management, RevPAR optimization, generative AI search',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Digital Insight and AI Lean Management',
        description: 'Full-lifecycle hospitality advisory and digital enablement for hotel growth through efficiency and experience.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Digital Insight and AI Lean Management',
        description: 'Full-lifecycle hospitality advisory and digital enablement for hotel growth through efficiency and experience.',
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
    title: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
    description: '迈创兄弟C&T（MarvelBros C&T）专注于数字化赋能酒店行业的全流程解决方案与咨询服务，通过效率 + 体验双轨提升，助力酒店业绩增长。',
    keywords: '酒店管理, 酒店投资, AI精益管理, 酒店咨询, 可行性分析, 运营诊断, 生成式AI搜索',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
      description: '专注酒店行业全流程解决方案与咨询服务，通过效率 + 体验双轨提升，助力酒店业绩增长。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
      description: '专注酒店行业全流程解决方案与咨询服务，通过效率 + 体验双轨提升，助力酒店业绩增长。',
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
