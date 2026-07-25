import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import type { Dict } from '@/lib/dicts'

interface FooterProps {
  lang: string
  dict: Dict
}

export function Footer({ lang, dict }: FooterProps) {
  const { footer } = dict
  const isZh = lang === 'zh'

  const knowledgeLinks = [
    { label: isZh ? '酒店知识库' : 'Hotel knowledge', href: `/${lang}/knowledge` },
    { label: isZh ? '管享精道' : 'Lean Insights', href: `/${lang}/lean` },
    { label: isZh ? '行业专题' : 'Industry topics', href: `/${lang}/topics/ai-hotel-growth` },
    { label: isZh ? '案例成果' : 'Case results', href: `/${lang}/cases` },
  ]

  const companyLinks = [
    { label: isZh ? '专业力量' : 'Capabilities', href: `/${lang}/about` },
    { label: isZh ? '解决方案' : 'Solutions', href: `/${lang}/services` },
    { label: isZh ? 'AI搜索获客' : 'AI search acquisition', href: `/${lang}/services/ai-hotel-website` },
    { label: isZh ? '联系我们' : 'Contact', href: `/${lang}/contact` },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="grid gap-12 border-b border-slate-300 pb-14 dark:border-slate-700 lg:grid-cols-[1.25fr_0.65fr_0.65fr_0.95fr] lg:gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/logo-new.png" alt={isZh ? '迈创兄弟C&T 标志' : 'MarvelBros C&T Logo'} width={48} height={48} className="object-contain" />
              <div>
                <p className="text-sm font-semibold">MarvelBros C&amp;T</p>
                <p className="mt-1 text-xs font-medium text-[#0b4a6f] dark:text-sky-300">{isZh ? '迈创兄弟C&T' : 'Hospitality Knowledge & Action'}</p>
              </div>
            </div>
            <p className="mt-6 text-lg font-semibold leading-7">
              {isZh ? '让酒店经营者找到答案，让专业判断推动结果。' : 'Find the answer. Make the judgment. Move the result.'}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {isZh
                ? 'MBCT（MarvelBros C&T）分享酒店经营知识，并提供经营诊断、筹开控制、经营改善与AI搜索获客服务。'
                : 'MarvelBros C&T shares hotel operating knowledge and delivers operational diagnosis, pre-opening control, business improvement, and AI search acquisition.'}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{isZh ? '知识' : 'Knowledge'}</h2>
            <ul className="mt-5 space-y-3">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{isZh ? 'MBCT' : 'MBCT'}</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{isZh ? '直接联系' : 'Direct contact'}</h2>
            <div className="mt-5 space-y-4">
              <a href="tel:18941579333" className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-[#0b4a6f] dark:text-slate-200 dark:hover:text-sky-300">
                <Phone className="h-4 w-4 text-[#d98b28]" />
                18941579333
              </a>
              <a href="mailto:info@marvelbros.com" className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-[#0b4a6f] dark:text-slate-200 dark:hover:text-sky-300">
                <Mail className="h-4 w-4 text-[#d98b28]" />
                info@marvelbros.com
              </a>
              <Link href={`/${lang}/contact?type=diagnosis`} className="mt-5 inline-flex items-center gap-2 border-b-2 border-[#d98b28] pb-1 text-sm font-semibold">
                {isZh ? '发起经营诊断' : 'Start a diagnosis'}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/${lang}/privacy`} className="hover:text-[#0b4a6f] dark:hover:text-sky-300">{footer.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-[#0b4a6f] dark:hover:text-sky-300">{footer.terms}</Link>
            <Link href="/sitemap.xml" className="hover:text-[#0b4a6f] dark:hover:text-sky-300">{footer.sitemap}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
