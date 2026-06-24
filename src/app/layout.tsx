import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marvelbros.com'),
  title: {
    template: '%s | 迈创兄弟C&T',
    default: '迈创兄弟C&T - 酒店数字化洞察与AI精益管理',
  },
  description: '迈创兄弟C&T（MarvelBros C&T）专注酒店投前决策、经营增长、数字化洞察与AI精益管理落地，帮助酒店投资人与经营团队形成可执行、可衡量的增长成果。',
  keywords: '酒店管理, 酒店投资, AI精益管理, 酒店咨询, 可行性分析, 运营诊断, 生成式AI搜索',
  authors: [{ name: '迈创兄弟C&T（MarvelBros C&T）' }],
  openGraph: {
    type: 'website',
    siteName: '迈创兄弟C&T（MarvelBros C&T）',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'baidu-site-verification': 'codeva-gQwRux4oUu',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.marvelbros.com/#organization',
    name: 'MarvelBros C&T',
    alternateName: ['迈创兄弟C&T', 'MBCT', 'MarvelBros Commercial Technology', '迈创兄弟商业科技'],
    url: 'https://www.marvelbros.com',
    logo: 'https://www.marvelbros.com/logo-new.png',
    foundingDate: '2018-08-14',
    email: 'contactme@marvelbros.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'HK',
    },
    sameAs: ['https://www.marvelbros.com'],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.marvelbros.com/#website',
    url: 'https://www.marvelbros.com',
    name: 'MarvelBros C&T',
    alternateName: '迈创兄弟C&T',
    publisher: {
      '@id': 'https://www.marvelbros.com/#organization',
    },
    inLanguage: ['zh-CN', 'en-US'],
  }

  return (
    <html suppressHydrationWarning>
      <head>
        <Script
          id="organization-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Google Analytics 4 - 优化配置 2026-06-16 (虾弟)
            - 添加 send_page_view:true (默认就有,显式说明)
            - 启用 enhanced measurement(滚动/外链/site search)
            - 启用 cookie_flags:'SameSite=None;Secure' (iOS 14+ 兼容) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DWV89MEG50" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DWV89MEG50', {
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure',
            // 增强测量:滚动深度/外链点击/site search 由 GA 后台配置控制
            // 这里只做基础配置
            transport_type: 'beacon'
          });`}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
