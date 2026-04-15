import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  services: [
    { title: '酒店SaaS管理系统', href: '/services/saas' },
    { title: '管理咨询服务', href: '/services/consulting' },
    { title: '可行性分析报告', href: '/services/feasibility' },
    { title: '运营诊断报告', href: '/services/diagnosis' },
  ],
  company: [
    { title: '关于我们', href: '/about' },
    { title: '团队介绍', href: '/team' },
    { title: '合作伙伴', href: '/partners' },
    { title: '加入我们', href: '/careers' },
  ],
  resources: [
    { title: '解决方案', href: '/solutions' },
    { title: '成功案例', href: '/cases' },
    { title: '行业报告', href: '/reports' },
    { title: '知识库', href: '/knowledge' },
  ],
  support: [
    { title: '帮助中心', href: '/help' },
    { title: '联系我们', href: '/contact' },
    { title: '常见问题', href: '/faq' },
    { title: '留言反馈', href: '/feedback' },
  ],
}

export function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/MBCT_final_gold.png" alt="MBCT Logo" width={58} height={58} className="object-contain" />
              <div>
                <span className="font-bold text-xl">MBCT</span>
                <p className="text-sm text-gray-400">Marvelbros Commercial Technology</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              专注酒店行业数字化转型，提供专业的酒店管理咨询、AI数字化管理和可行性分析服务。
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@marvelbros.com" className="text-gray-400 hover:text-brand-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:18941579333" className="text-gray-400 hover:text-brand-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">服务项目</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">关于我们</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">资源</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2026 MBCT (Marvelbros Commercial Technology). All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-brand-gold transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-brand-gold transition-colors">
              服务条款
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-brand-gold transition-colors">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
