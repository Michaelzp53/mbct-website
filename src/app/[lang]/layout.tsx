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
      title: 'MarvelBros C&T - Hotel Growth, Digital Enablement and AI Information Platform',
      description: 'MarvelBros C&T helps hotel investors and operating teams with investment judgment, operational diagnosis, digital enablement, and AI-ready information platforms that turn hotel content, data, and services into an executable growth system.',
      keywords: 'hotel management, hotel investment, hotel operational diagnosis, hotel digital enablement, AI information platform, hotel consulting, feasibility analysis, generative AI search',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Growth, Digital Enablement and AI Information Platform',
        description: 'Hospitality advisory, digital enablement, and AI-ready information platforms for hotel growth.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Growth, Digital Enablement and AI Information Platform',
        description: 'Hospitality advisory, digital enablement, and AI-ready information platforms for hotel growth.',
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
    title: '迈创兄弟C&T - 酒店增长、数字化赋能与AI信息平台建设',
    description: '迈创兄弟C&T（MarvelBros C&T）面向酒店投资人与经营团队，提供投前判断、经营诊断、数字化赋能与AI信息平台建设，帮助酒店把产品、服务、数据和内容转化为可执行的增长系统。',
    keywords: '酒店管理, 酒店投资, 酒店经营诊断, 酒店数字化赋能, AI信息平台, 酒店咨询, 可行性分析, 生成式AI搜索',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店增长、数字化赋能与AI信息平台建设',
      description: '面向酒店投资人与经营团队，提供投前判断、经营诊断、数字化赋能与AI信息平台建设。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店增长、数字化赋能与AI信息平台建设',
      description: '面向酒店投资人与经营团队，提供投前判断、经营诊断、数字化赋能与AI信息平台建设。',
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
