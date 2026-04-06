import Link from 'next/link'

interface FooterProps {
  lang: string
}

export function Footer({ lang }: FooterProps) {
  const dict = lang === 'en' ? {
    description: 'Specializing in hotel industry digital transformation with professional management consulting, AI solutions, and feasibility analysis services.',
    copyright: '© 2026 Marvel Bros Commercial and Technology (MBCT). All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    sitemap: 'Sitemap',
    services: 'Services',
    company: 'Company',
    resources: 'Resources',
  } : {
    description: '专注酒店行业数字化转型，提供专业的酒店管理咨询、AI数字化管理和可行性分析服务。',
    copyright: '© 2026 迈创兄弟商业科技有限公司 (MBCT). All rights reserved.',
    privacy: '隐私政策',
    terms: '服务条款',
    sitemap: '网站地图',
    services: '服务项目',
    company: '关于我们',
    resources: '资源',
  }

  const serviceLinks = [
    { label: '酒店SaaS管理系统', href: `/${lang}/services` },
    { label: '可行性分析报告', href: `/${lang}/services` },
    { label: '运营诊断报告', href: `/${lang}/services` },
    { label: 'AI数字化转型', href: `/${lang}/services` },
  ]

  const companyLinks = [
    { label: dict.company, href: `/${lang}/about` },
    { label: '团队介绍', href: `/${lang}/about` },
    { label: '合作伙伴', href: `/${lang}/cases` },
    { label: '加入我们', href: `/${lang}/contact` },
  ]

  const resourceLinks = [
    { label: dict.resources, href: `/${lang}/cases` },
    { label: '成功案例', href: `/${lang}/cases` },
    { label: '行业报告', href: `/${lang}/cases` },
    { label: '知识库', href: `/${lang}/services` },
  ]

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-yellow-300 rounded-lg flex items-center justify-center">
                <span className="text-[#0f172a] font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-bold text-xl">MBCT</span>
                <p className="text-xs text-slate-400">迈创兄弟商业科技</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {dict.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="mailto:contact@marvelbros.com" className="text-slate-400 hover:text-[#f59e0b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:400-888-8888" className="text-slate-400 hover:text-[#f59e0b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{dict.services}</h3>
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
            <h3 className="font-semibold text-sm mb-4">{dict.company}</h3>
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
            <h3 className="font-semibold text-sm mb-4">{dict.resources}</h3>
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
            <p className="text-slate-500 text-sm">{dict.copyright}</p>
            <div className="flex gap-6 text-sm">
              <Link href={`/${lang}/privacy`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {dict.privacy}
              </Link>
              <Link href={`/${lang}/terms`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {dict.terms}
              </Link>
              <Link href={`/${lang}/sitemap`} className="text-slate-500 hover:text-[#f59e0b] transition-colors">
                {dict.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
