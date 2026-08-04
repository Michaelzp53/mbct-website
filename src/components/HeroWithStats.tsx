import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, ClipboardCheck, RefreshCw } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}
export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'
  const entryPoints = [
    { icon: Building2, label: isZh ? '准备投资' : 'Planning an investment', href: `/${lang}/hotel-investment` },
    { icon: ClipboardCheck, label: isZh ? '正在筹开' : 'Preparing to open', href: `/${lang}/hotel-opening` },
    { icon: RefreshCw, label: isZh ? '经营改善' : 'Improving operations', href: `/${lang}/hotel-operation-improvement` },
  ]

  return (
    <section className="relative min-h-[620px] overflow-hidden border-b border-slate-200 bg-[#17231f] text-white dark:border-slate-800 lg:min-h-[660px]">
      <Image
        src="/hero-hung-li-1HbWj9BDbjE-unsplash.jpg"
        alt={isZh ? '夜幕中的真实酒店建筑与接待空间' : 'A real hotel building and arrival space at night'}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,31,27,0.94)_0%,rgba(19,31,27,0.82)_43%,rgba(19,31,27,0.36)_72%,rgba(19,31,27,0.16)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#d98b28]" />

      <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[660px] lg:px-12 xl:px-16">
        <div className="min-w-0 max-w-[820px]">
          <p className="mb-6 text-sm font-semibold leading-6 text-amber-300 sm:text-base">
            {isZh ? '酒店投资｜酒店筹开｜酒店经营改善' : 'Hotel Investment | Pre-opening | Performance Improvement'}
          </p>
          <h1 className={`max-w-full font-semibold leading-[1.12] text-white [overflow-wrap:anywhere] ${isZh ? 'text-[38px] sm:text-[52px] lg:text-[58px]' : 'text-[36px] sm:text-5xl lg:text-[54px]'}`}>
            {isZh ? '酒店投资、筹开与经营改善专家' : 'Hotel Investment, Development and Operations Specialists'}
          </h1>
          <p className="mt-7 max-w-[720px] text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            {isZh
              ? '迈创兄弟C&T沉淀30多年酒店行业实战经验，帮助酒店投资人、业主和管理者判断项目价值、解决经营问题，实现酒店长期价值增长。'
              : 'Drawing on more than 30 years of practical hospitality experience, MarvelBros C&T helps hotel investors, owners, and managers assess project value, solve operating problems, and build long-term growth.'}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/${lang}/contact?type=diagnosis`}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d98b28] px-6 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-[#efaa4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              {isZh ? '交流酒店项目' : 'Discuss a Hotel Project'}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={`/${lang}/cases`}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/60 bg-black/15 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-black/30"
            >
              {isZh ? '查看案例成果' : 'View Case Results'}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-[820px] border-y border-white/25 sm:grid-cols-3">
          {entryPoints.map(({ icon: Icon, label, href }) => (
            <Link key={label} href={href} className="group flex min-h-16 items-center justify-between gap-3 border-b border-white/25 px-1 py-4 text-sm font-semibold text-white transition-colors hover:text-amber-300 sm:border-r sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:border-r-0">
              <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-amber-300" />{label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
