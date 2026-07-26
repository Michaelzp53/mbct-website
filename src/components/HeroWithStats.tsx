import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}

export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'

  return (
    <section className="relative min-h-[650px] overflow-hidden border-b border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:min-h-[calc(100vh-72px)]">
      <div
        className="absolute inset-0 bg-cover bg-[62%_center] lg:bg-center"
        style={{ backgroundImage: "url('/images/home-named/home-3.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_42%,rgba(255,255,255,0.56)_66%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(90deg,rgba(8,15,28,0.98)_0%,rgba(8,15,28,0.93)_46%,rgba(8,15,28,0.52)_72%,rgba(8,15,28,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] items-center px-5 py-14 sm:min-h-[720px] sm:px-8 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:px-12 xl:px-16">
        <div className="max-w-[860px] pb-14 pt-4 sm:pb-16 sm:pt-10 lg:pb-24">
          <p className="mb-5 text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">
            {isZh ? '30多年酒店投资、筹开与运营经验' : '30+ years across hotel investment, pre-opening, and operations'}
          </p>
          <h1 className="max-w-[860px] text-[40px] font-semibold leading-[1.12] text-slate-950 dark:text-white sm:text-6xl sm:leading-[1.08] lg:text-[68px]">
            {isZh ? '酒店投资、筹开与经营，最重要的是先把方向判断对' : 'Better hotel decisions start with the right direction'}
          </h1>
          <p className="mt-6 max-w-[720px] text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8">
            {isZh
              ? '很多经营结果，在投资定位、产品设计和管理决策阶段就已经埋下原因。迈创兄弟C&T帮助投资人、业主和管理者看清问题本质，减少试错。'
              : 'Many operating outcomes are shaped much earlier, in positioning, product design, and management decisions. MarvelBros C&T helps investors, owners, and hotel leaders find the real issue and reduce costly trial and error.'}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#hotel-problems"
              className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#073a58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4a6f]"
            >
              <ArrowRight className="h-5 w-5" />
              {isZh ? '查看我的酒店问题' : 'Find my hotel challenge'}
            </Link>
            <Link
              href={`/${lang}/knowledge`}
              className="inline-flex min-h-13 items-center justify-center gap-2 border-b-2 border-[#d98b28] px-1 py-3 text-base font-semibold text-slate-950 transition-colors hover:text-[#0b4a6f] dark:text-white dark:hover:text-amber-300"
            >
              <BookOpen className="h-5 w-5" />
              {isZh ? '进入酒店经营知识库' : 'Enter the hotel knowledge base'}
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-0 hidden border-t border-slate-900/15 py-5 text-sm font-medium text-slate-700 dark:border-white/20 dark:text-slate-200 sm:inset-x-8 sm:block lg:inset-x-12 xl:inset-x-16">
          {isZh
            ? '酒店投资判断｜筹建筹开｜经营诊断｜运营提升｜收益管理｜市场获客'
            : 'Investment judgment | Pre-opening | Diagnosis | Operations | Revenue | Market acquisition'}
        </div>
      </div>
    </section>
  )
}
