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
      description: 'MarvelBros C&T helps hotel investors and operators turn strategic judgment, growth, and AI-driven lean management into measurable results through digital intelligence and industry insight.',
      keywords: 'hotel management, hotel investment, AI lean management, hotel consulting, feasibility analysis, revenue management, RevPAR optimization, generative AI search',
      authors: [{ name: 'MarvelBros C&T' }],
      openGraph: {
        title: 'MarvelBros C&T - Hotel Digital Insight and AI Lean Management',
        description: 'Digital intelligence, industry insight, and AI lean execution for measurable hotel growth.',
        siteName: 'MarvelBros C&T',
        locale: 'en_US',
        alternateLocale: 'zh_CN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'MarvelBros C&T - Hotel Digital Insight and AI Lean Management',
        description: 'Digital intelligence, industry insight, and AI lean execution for measurable hotel growth.',
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
    description: '迈创兄弟C&T（MarvelBros C&T）用数字化与行业洞察，帮助酒店投资人与经营团队把战略判断、增长路径与AI精益管理转化为可衡量成果。',
    keywords: '酒店管理, 酒店投资, AI精益管理, 酒店咨询, 可行性分析, 运营诊断, 生成式AI搜索',
    authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
    openGraph: {
      title: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
      description: '数字化洞察、行业判断与AI精益执行，助力酒店增长结果可衡量。',
      siteName: '迈创兄弟C&T（MarvelBros C&T）',
      locale: 'zh_CN',
      alternateLocale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
      description: '数字化洞察、行业判断与AI精益执行，助力酒店增长结果可衡量。',
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
