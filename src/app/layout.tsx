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
    default: '迈创兄弟C&T｜酒店经营知识、行业洞察与实战方法',
  },
  description: '迈创兄弟C&T基于30多年酒店经验，分享酒店投资、筹开、经营诊断与运营优化知识。',
  keywords: '酒店投资咨询, 酒店筹开管理, 酒店经营诊断, 酒店运营优化, 酒店经营知识, 酒店管理',
  authors: [{ name: '迈创兄弟C&T' }],
  openGraph: {
    type: 'website',
    siteName: '迈创兄弟C&T',
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
    alternateName: ['迈创兄弟C&T', 'MarvelBros C&T'],
    url: 'https://www.marvelbros.com',
    logo: 'https://www.marvelbros.com/logo-new.png',
    email: 'contactme@marvelbros.com',
    telephone: '+86-189-4157-9333',
    description: 'MarvelBros C&T is a professional hotel investment, pre-opening, and performance improvement consultancy serving hotel investors, owners, and managers, grounded in more than 30 years of practical hospitality experience.',
    areaServed: 'International',
    knowsAbout: [
      'Hotel investment consulting',
      'Hotel pre-opening management',
      'Hotel operational diagnosis',
      'Hotel operations improvement',
      'Hotel revenue management',
      'Hotel market acquisition',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-189-4157-9333',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English'],
      areaServed: 'CN',
    },
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
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.marvelbros.com/zh/knowledge?query={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth">
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
