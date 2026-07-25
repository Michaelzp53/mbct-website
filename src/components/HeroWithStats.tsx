import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}

export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'

  return (
    <section className="relative min-h-[680px] overflow-hidden border-b border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:min-h-[calc(100vh-72px)]">
      <div
        className="absolute inset-0 bg-cover bg-[62%_center] lg:bg-center"
        style={{ backgroundImage: "url('/images/home-named/home-3.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_42%,rgba(255,255,255,0.56)_66%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(90deg,rgba(8,15,28,0.98)_0%,rgba(8,15,28,0.93)_46%,rgba(8,15,28,0.52)_72%,rgba(8,15,28,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 py-16 sm:min-h-[720px] sm:px-8 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:px-12 xl:px-16">
        <div className="max-w-[820px] pb-8 pt-6 sm:pb-16 sm:pt-10 lg:pb-24">
          <h1 className="max-w-[820px] text-[44px] font-semibold leading-[1.05] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl xl:text-[76px]">
            {isZh ? '让专业力量推动酒店全生命周期价值增长' : 'Professional strength for value growth across the hotel lifecycle'}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            {isZh
              ? 'MBCT（MarvelBros C&T）贯穿酒店全生命周期：前期策划、投资判断、筹建筹开、经营诊断、翻牌改造、业绩提升、全面托管，以及AI搜索获客与数据精益化管理。我们把判断变成策略，把策略变成结果。'
              : 'MarvelBros C&T works across the hotel lifecycle: strategy, investment judgment, development, pre-opening, operational diagnosis, rebranding, performance improvement, full management, AI search acquisition, and data-led lean management. We turn judgment into strategy and strategy into results.'}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/${lang}/knowledge`}
              className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#073a58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4a6f]"
            >
              <BookOpen className="h-5 w-5" />
              {isZh ? '进入酒店经营知识库' : 'Explore the hotel knowledge base'}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="inline-flex min-h-13 items-center justify-center gap-2 border-b-2 border-[#d98b28] px-1 py-3 text-base font-semibold text-slate-950 transition-colors hover:text-[#0b4a6f] dark:text-white dark:hover:text-amber-300"
            >
              {isZh ? '了解我们的专业能力' : 'See what we bring'}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-0 hidden border-t border-slate-900/15 py-5 text-sm font-medium text-slate-700 dark:border-white/20 dark:text-slate-200 sm:inset-x-8 sm:block lg:inset-x-12 xl:inset-x-16">
          {isZh
            ? '专业覆盖：策划｜筹建筹开｜经营诊断｜翻牌改造｜经营提升｜全面托管｜AI搜索获客｜数据精益化管理'
            : 'Strategy | Development | Pre-opening | Diagnosis | Rebranding | Improvement | Management | AI Search | Lean Data'}
        </div>
      </div>
    </section>
  )
}
