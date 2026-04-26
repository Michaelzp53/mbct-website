import Link from 'next/link'
import Image from 'next/image'
import type { Dict } from '@/lib/dicts'

interface FooterProps {
  lang: string
  dict: Dict
}

export function Footer({ lang, dict }: FooterProps) {
  const { footer: f, services: s } = dict

  const serviceLinks = s.items.slice(0, 4).map((item) => ({
    label: item.title,
    href: `/${lang}/services`,
  }))

  const companyLinks = [
    { label: lang === 'zh' ? '关于我们' : 'About Us', href: `/${lang}/about` },
    { label: lang === 'zh' ? '团队' : 'Team', href: `/${lang}/about` },
    { label: lang === 'zh' ? '合作伙伴' : 'Partners', href: `/${lang}/cases` },
    { label: lang === 'zh' ? '联系我们' : 'Contact Us', href: `/${lang}/contact` },
  ]

  const resourceLinks = [
    { label: 'Case Studies', href: `/${lang}/cases` },
    { label: 'Industry Reports', href: `/${lang}/cases` },
    { label: 'Industry Navigation', href: `/${lang}/knowledge` },
    { label: 'Blog', href: `/${lang}/knowledge` },
  ]

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/MBCT_final_gold.png" alt="MBCT Logo" width={58} height={58} className="object-contain" />
              <div>
                <span className="font-bold text-xl">MBCT</span>
                <p className="text-xs text-slate-400">迈创兄弟商业科技</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {f.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="mailto:contact@marvelbros.com" className="text-slate-400 hover:text-[#f59e0b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0 2 .9 2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:18941579333" className="text-slate-400 hover:text-[#f59e0b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{s.title}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-[#f59e0b] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{lang === 'zh' ? '关于我们' : 'Company'}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-[#f59e0b] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{lang === 'zh' ? '资源' : 'Resources'}</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-[#f59e0b] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">{f.copyright}</p>
            <div className="flex gap-6 text-sm">
              <Link href={`/${lang}/privacy`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {f.privacy}
              </Link>
              <Link href={`/${lang}/terms`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {f.terms}
              </Link>
              <Link href={`/${lang}/sitemap`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {f.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
