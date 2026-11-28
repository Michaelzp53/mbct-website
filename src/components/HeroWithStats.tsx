import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}

export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang !== 'en'

  const quickPaths = [
    { href: `/${lang}/hotel-investment`, zh: '投资新店', en: 'New Investment' },
    { href: `/${lang}/hotel-opening`, zh: '正在筹开', en: 'Pre-Opening' },
    { href: `/${lang}/hotel-operation-improvement`, zh: '存量提效与扭亏', en: 'Operational Turnaround' },
    { href: `/${lang}/hotel-renovation`, zh: '存量改造升级', en: 'Hotel Renovation' },
  ]

  return (
    <section data-screen="1" className="relative overflow-hidden border-b border-[#e4ded4] bg-[#f8f6f2] dark:border-white/10 dark:bg-[#0b0f17]">
      <div className="mx-auto max-w-[1360px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* Left Editorial Column */}
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6b39] dark:text-[#c9a66b]">
              <span className="h-px w-8 bg-[#b08d57] dark:bg-[#c9a66b]" />
              <span>{isZh ? '酒店全生命周期价值提升咨询' : 'Hotel Lifecycle Asset Advisory'}</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.18] tracking-tight text-[#0f172a] dark:text-[#f8f6f2] sm:text-5xl lg:text-[52px]">
              {isZh
                ? '酒店全生命周期价值提升咨询，从当前这一步做判断'
                : 'Institutional Judgment Across Every Stage of the Hotel Lifecycle'}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {isZh
                ? '迈创兄弟C&T（MBCT）面向酒店投资人、业主与资产管理者，覆盖「投、建、筹、管、改、退」六大阶段，用真实财务底账与一线运营诊断，把复杂难题转化为可落地的价值提升路径。'
                : 'MarvelBros C&T partners with hotel investors, owners, and asset managers across investment, development, pre-opening, operations, renovation, and exit—turning audited data and field diagnostics into sustained asset value.'}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                href={`/${lang}/contact?type=diagnosis`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0f172a] px-7 py-3 text-sm font-medium text-[#f8f6f2] shadow-sm transition-all hover:bg-[#b08d57] hover:text-white dark:bg-[#c9a66b] dark:text-[#0b0f17] dark:hover:bg-[#dfbf86]"
              >
                <span>{isZh ? '预约项目初步诊断' : 'Book a Project Diagnostic'}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${lang}/knowledge`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d5cdc0] bg-white px-7 py-3 text-sm font-medium text-[#0f172a] transition-all hover:border-[#b08d57] hover:text-[#b08d57] dark:border-white/15 dark:bg-[#131924] dark:text-slate-100 dark:hover:border-[#c9a66b] dark:hover:text-[#c9a66b]"
              >
                <span>{isZh ? '先查决策文库' : 'Explore Decision Library'}</span>
              </Link>
            </div>

            {/* Clean Quick Stage Triage */}
            <div className="mt-10 border-t border-[#e4ded4] pt-6 dark:border-white/10">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {isZh ? '按您当前所处阶段快速分流' : 'Navigate Directly by Asset Stage'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {quickPaths.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#e4ded4] bg-white px-3.5 py-2 text-sm font-medium text-[#0f172a] shadow-[0_1px_4px_rgba(15,23,42,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#b08d57] hover:text-[#b08d57] dark:border-white/10 dark:bg-[#131924] dark:text-slate-200 dark:hover:border-[#c9a66b] dark:hover:text-[#c9a66b]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b08d57] dark:bg-[#c9a66b]" />
                    <span>{isZh ? item.zh : item.en}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Architectural Visual Frame */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#dfd8cc] bg-[#0f172a] shadow-[0_24px_60px_rgba(15,23,42,0.14)] dark:border-[#c9a66b]/25 dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/12]">
                <Image
                  src="/images/home-named/homepage-night-hotel.jpg"
                  alt={isZh ? '高端酒店建筑夜景与到达空间' : 'Luxury hotel architectural twilight arrival courtyard'}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/85 via-[#0b0f17]/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#dfbf86]">
                  {isZh ? 'MBCT 咨询准则' : 'MBCT ADVISORY PRINCIPLE'}
                </p>
                <p className="mt-2 font-serif text-lg font-medium leading-snug text-[#f8f6f2] sm:text-xl">
                  {isZh
                    ? '“没有真实财务底账与一线运营洞察，我们绝不凭经验下结论。”'
                    : '“Every recommendation is anchored in audited financials and on-site operational diagnostics.”'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
