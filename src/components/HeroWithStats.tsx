import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}
export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'
  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-slate-200 bg-brand-blue text-white dark:border-slate-800 lg:min-h-[640px]">
      <Image
        src="/hero-hung-li-1HbWj9BDbjE-unsplash.jpg"
        alt={isZh ? '夜幕中的真实酒店建筑与接待空间' : 'A real hotel building and arrival space at night'}
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,34,52,0.82)_0%,rgba(6,34,52,0.58)_40%,rgba(6,34,52,0.24)_68%,rgba(6,34,52,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gold" />

      <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[640px] lg:px-12 xl:px-16">
        <div className="min-w-0 max-w-[820px]">
          <p className="mb-4 text-sm font-semibold leading-6 text-amber-300 sm:text-base">
            {isZh ? '迈创兄弟C&T' : 'MarvelBros C&T'}
          </p>
          <h1 className={`max-w-full font-semibold leading-[1.12] text-white ${isZh ? 'text-[38px] sm:text-[52px] lg:text-[58px]' : 'text-[36px] sm:text-5xl lg:text-[54px]'}`}>
            {isZh ? (
              <>
                <span className="block">酒店投资、筹建筹开</span>
                <span className="block">与经营改善</span>
              </>
            ) : (
              'Hotel investment, pre-opening, and operating improvement'
            )}
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            {isZh
              ? '面向酒店投资人、业主和管理者。投资前判断项目该不该做，筹开时把开业事项定下来，在营后改善收入、成本和现场管理。'
              : 'For hotel investors, owners, and managers. Judge a project before capital is committed, settle what must be decided before opening, and improve revenue, cost, and daily operations once the hotel is running.'}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={`/${lang}/contact?type=diagnosis`}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d98b28] px-6 py-3 text-base font-semibold text-[#17120d] transition-colors hover:bg-[#efaa4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              {isZh ? '交流酒店项目' : 'Discuss a hotel project'}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href={`/${lang}/knowledge`} className="text-base font-semibold text-white underline-offset-4 hover:underline">
              {isZh ? '酒店投、筹、管、退、改决议' : 'Investment, opening, operation, exit, and renovation'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
