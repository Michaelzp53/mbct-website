import { brand } from '@/lib/brand'
import { LIFECYCLE_STAGES, lifecycleNavLinks } from '@/lib/lifecycle-stages'
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
    { label: isZh ? '决策文库' : 'Decision Library', href: `/${lang}/knowledge` },
    { label: isZh ? '管享精道' : 'Operational Excellence', href: `/${lang}/lean` },
    { label: isZh ? '专题' : 'Topics', href: `/${lang}/topics` },
    { label: isZh ? '实践案例' : 'Case Studies', href: `/${lang}/cases` },
  ]

  const companyLinks = [
    { label: isZh ? '关于我们' : 'About Us', href: `/${lang}/about` },
    { label: isZh ? '服务清单' : 'Services', href: `/${lang}/services` },
    { label: isZh ? '联系我们' : 'Contact', href: `/${lang}/contact` },
  ]
  const stageLinks = lifecycleNavLinks(lang)

  return (
    <footer className="border-t border-[#e4ded4] bg-[#f1ede6] text-[#0f172a] dark:border-white/10 dark:bg-[#080c13] dark:text-[#f1f5f9]">
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="grid gap-12 border-b border-[#ddd6ca] pb-14 dark:border-white/10 lg:grid-cols-[1.3fr_0.65fr_0.75fr_0.9fr] lg:gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3.5">
              <Image src="/logo-new.png" alt={isZh ? '迈创兄弟C&T 标志' : 'MarvelBros C&T Logo'} width={44} height={44} className="object-contain" />
              <div>
                <p className="font-serif text-lg font-semibold tracking-wide">MarvelBros C&amp;T</p>
                <p className="mt-0.5 text-xs font-medium text-[#8c6b39] dark:text-[#c9a66b]">
                  {isZh ? '迈创兄弟C&T · 酒店全生命周期价值提升咨询服务商' : 'Hotel Lifecycle Value Enhancement Consultancy'}
                </p>
              </div>
            </div>
            <p className="mt-6 font-serif text-xl font-semibold leading-snug text-[#0f172a] dark:text-white">
              {isZh ? '从投资决策到持续经营，让专业判断推动酒店价值提升。' : 'From investment underwriting to sustained operations, institutional judgment drives hotel value.'}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {isZh ? brand.zh.description : brand.en.description}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c6b39] dark:text-[#c9a66b]">
              {isZh ? '知识与洞察' : 'Insights'}
            </h2>
            <ul className="mt-5 space-y-3">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c6b39] dark:text-[#c9a66b]">
              {isZh ? '全周期方案' : 'Lifecycle Advisory'}
            </h2>
            <ul className="mt-5 space-y-3">
              {stageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-3 border-t border-[#ddd6ca] pt-5 dark:border-white/10">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c6b39] dark:text-[#c9a66b]">
              {isZh ? '直接联系' : 'Direct Contact'}
            </h2>
            <div className="mt-5 space-y-3.5">
              <a href="tel:+8618941579333" className="flex items-center gap-3 text-sm font-medium text-slate-800 transition-colors hover:text-[#b08d57] dark:text-slate-200 dark:hover:text-[#c9a66b]">
                <Phone className="h-4 w-4 text-[#b08d57] dark:text-[#c9a66b]" />
                +86 189 4157 9333
              </a>
              <a href="mailto:info@marvelbros.com" className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]">
                <Mail className="h-4 w-4 text-[#b08d57] dark:text-[#c9a66b]" />
                info@marvelbros.com
              </a>
              <a href="mailto:contactme@marvelbros.com" className="flex items-center gap-3 break-all text-sm text-slate-600 transition-colors hover:text-[#b08d57] dark:text-slate-400 dark:hover:text-[#c9a66b]">
                <Mail className="h-4 w-4 shrink-0 text-[#b08d57]/75 dark:text-[#c9a66b]/75" />
                contactme@marvelbros.com
              </a>
              <Link
                href={`/${lang}/contact?type=diagnosis`}
                className="mt-4 inline-flex items-center gap-1.5 border-b border-[#b08d57] pb-1 text-sm font-medium text-[#0f172a] transition-colors hover:text-[#b08d57] dark:border-[#c9a66b] dark:text-white dark:hover:text-[#c9a66b]"
              >
                {isZh ? '预约项目诊断' : 'Book a Project Diagnostic'}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <p className="pt-7 text-xs leading-6 text-slate-600 dark:text-slate-400">
          <span className="font-medium text-slate-800 dark:text-slate-200">{isZh ? '全生命周期覆盖：' : 'Lifecycle Coverage: '}</span>
          {LIFECYCLE_STAGES.map((stage, index, list) => (
            <span key={stage.slug}>
              <Link
                href={`/${lang}/${stage.slug}`}
                className="font-medium text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]"
              >
                {isZh ? `${stage.shortZh}（${stage.fullZh}）` : `${stage.shortEn} (${stage.fullEn})`}
              </Link>
              {index < list.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>

        <div className="flex flex-col gap-4 pt-4 text-xs text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/${lang}/privacy`} className="hover:text-[#b08d57] dark:hover:text-[#c9a66b]">{footer.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-[#b08d57] dark:hover:text-[#c9a66b]">{footer.terms}</Link>
            <Link href="/sitemap.xml" className="hover:text-[#b08d57] dark:hover:text-[#c9a66b]">{footer.sitemap}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
