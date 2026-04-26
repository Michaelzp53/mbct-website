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
      title: 'MBCT - Hotel Digital Transformation Expert | AI-Powered Hotel Management',
      description: 'MBCT is a specialist in hotel digital transformation—delivering end-to-end solutions from pre-opening feasibility studies to SaaS deployment, revenue optimization, and private domain growth.',
      keywords: 'hotel management, hotel SaaS, AI digital transformation, hotel consulting, feasibility analysis, revenue management, RevPAR optimization, hotel technology',
      authors: [{ name: 'MBCT Marvel Bros Commercial Technology' }],
      openGraph: {
        title: 'MBCT - Hotel Digital Transformation Expert',
        description: 'AI-powered hotel management solutions. From feasibility analysis to SaaS deployment and revenue optimization.',
        siteName: 'MBCT',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MBCT - Hotel Digital Transformation Expert',
        description: 'AI-powered hotel management solutions. From feasibility analysis to SaaS deployment and revenue optimization.',
      },
      alternates: {
        canonical: 'https://marvelbros.com/en',
        languages: {
          'en': 'https://marvelbros.com/en',
          'zh': 'https://marvelbros.com/zh',
        },
      },
    }
  }
  
  return {
    title: 'MBCT 迈创兄弟 - AI赋能酒店数字化转型',
    description: '专注酒店行业数字化转型，提供酒店SaaS管理系统、管理咨询服务、可行性分析报告、运营诊断报告等全方位解决方案。',
    keywords: '酒店管理, SaaS系统, AI数字化, 酒店咨询, 可行性分析, 运营诊断',
    authors: [{ name: '迈创兄弟' }],
    openGraph: {
      title: 'MBCT 迈创兄弟 - AI赋能酒店数字化转型',
      description: '专注酒店行业数字化转型，提供酒店SaaS管理系统、管理咨询服务、可行性分析报告、运营诊断报告等全方位解决方案。',
      siteName: 'MBCT',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MBCT 迈创兄弟 - AI赋能酒店数字化转型',
      description: '专注酒店行业数字化转型，提供酒店SaaS管理系统、管理咨询服务、可行性分析报告、运营诊断报告等全方位解决方案。',
    },
    alternates: {
      canonical: 'https://marvelbros.com/zh',
      languages: {
        'zh': 'https://marvelbros.com/zh',
        'en': 'https://marvelbros.com/en',
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
