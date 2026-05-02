import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://marvelbros.com'),
  title: {
    template: '%s | MBCT',
    default: '迈创兄弟 - AI赋能酒店数字化转型',
  },
  description: '专注酒店行业数字化转型，提供酒店SaaS管理系统、管理咨询服务、可行性分析报告、运营诊断报告等全方位解决方案。',
  keywords: '酒店管理, SaaS系统, AI数字化, 酒店咨询, 可行性分析, 运营诊断',
  authors: [{ name: 'MBCT' }],
  openGraph: {
    type: 'website',
    siteName: 'MBCT',
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
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
