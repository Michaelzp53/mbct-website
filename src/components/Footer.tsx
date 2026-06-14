import Link from 'next/link'
import Image from 'next/image'
import type { Dict } from '@/lib/dicts'

interface FooterProps {
  lang: string
  dict: Dict
}

export function Footer({ lang, dict }: FooterProps) {
  const { footer: f } = dict
  const isZh = lang === 'zh'

  const primaryLinks = [
    { label: isZh ? '关于我们' : 'About Us', href: `/${lang}/about` },
    { label: isZh ? '解决方案' : 'Solutions', href: `/${lang}/services` },
    { label: isZh ? '行业洞察' : 'Industry Insights', href: `/${lang}/knowledge` },
    { label: isZh ? '案例成果' : 'Case Results', href: `/${lang}/cases` },
    { label: isZh ? '管享精道' : 'Lean Insights', href: `/${lang}/lean` },
    { label: isZh ? '联系我们' : 'Contact', href: `/${lang}/contact` },
  ]

  return (
    <footer className="bg-slate-100 dark:bg-[#1a1a2e] text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.9fr_0.95fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-new.png" alt="MBCT Logo" width={52} height={52} className="object-contain" />
              <div>
                <span className="font-bold text-lg text-foreground">MarvelBros C&amp;T</span>
                <p className="text-[10px] sm:text-xs text-gradient-rainbow font-medium">{isZh ? '迈创兄弟商业科技' : 'Hotel Operations Advisory'}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isZh
                ? '帮助酒店投资人和经营团队，把项目判断、经营增长和 AI 落地做成可执行结果。'
                : 'Helping hotel investors and operators turn project judgment, operating growth, and AI implementation into measurable results.'}
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <a href="mailto:info@marvelbros.com" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0 2 .9 2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@marvelbros.com</span>
              </a>
              <a href="tel:18941579333" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>18941579333</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">{isZh ? '网站导航' : 'Navigation'}</h3>
            <ul className="space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">{isZh ? '联系与说明' : 'Contact & Legal'}</h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{isZh ? '聚焦酒店投资判断、经营增长与 AI 落地。' : 'Focused on hotel investment judgment, operating growth, and AI implementation.'}</p>
              <p>{isZh ? '主转化入口：获取方案' : 'Primary conversion path: Get a Plan'}</p>
              <p>{isZh ? '支持项目沟通、经营诊断与数字化落地咨询。' : 'Supporting project conversations, diagnostics, and digital execution.'}</p>
            </div>
            <div className="flex gap-6 text-sm mt-6">
              <Link href={`/${lang}/privacy`} className="text-muted-foreground hover:text-primary transition-colors">
                {f.privacy}
              </Link>
              <Link href={`/${lang}/terms`} className="text-muted-foreground hover:text-primary transition-colors">
                {f.terms}
              </Link>
              <Link href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">
                {f.sitemap}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">{f.copyright}</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>{isZh ? '酒店投资判断' : 'Investment Judgment'}</span>
              <span>{isZh ? '经营增长' : 'Operating Growth'}</span>
              <span>{isZh ? 'AI 落地' : 'AI Implementation'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
