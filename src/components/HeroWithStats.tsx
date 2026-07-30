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
        className="absolute inset-0 bg-cover bg-[58%_center] lg:bg-center"
        style={{ backgroundImage: "url('/images/home-named/hotel-city-skyline-hero.webp')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_38%,rgba(255,255,255,0.42)_56%,rgba(255,255,255,0.08)_68%,rgba(255,255,255,0)_76%)] dark:bg-[linear-gradient(90deg,rgba(8,15,28,0.98)_0%,rgba(8,15,28,0.93)_46%,rgba(8,15,28,0.52)_72%,rgba(8,15,28,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] items-center px-5 py-14 sm:min-h-[720px] sm:px-8 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:px-12 xl:px-16">
        <div className="max-w-[860px] pb-14 pt-4 sm:pb-16 sm:pt-10 lg:pb-24">
          <p className="mb-5 text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">
            {isZh ? '酒店投资｜品牌落地｜筹建运营｜经营提升' : 'Investment | Brand | Development | Performance'}
          </p>
          <h1 className={`max-w-[1000px] font-semibold leading-[1.12] text-slate-950 dark:text-white sm:leading-[1.08] ${isZh ? 'text-[40px] sm:text-6xl lg:text-[60px] xl:text-[64px]' : 'text-[36px] sm:text-5xl lg:text-[54px] xl:text-[58px]'}`}>
            {isZh ? '从投资决策到持续经营，酒店每一个阶段都需要正确判断' : 'Sound judgment from hotel investment to sustained operations'}
          </h1>
          <p className="mt-6 max-w-[720px] text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8">
            {isZh
              ? '迈创兄弟C&T专注于酒店全生命周期价值提升，为投资人、业主及管理者提供覆盖项目投资、品牌落地、筹建运营、经营优化与持续增长的专业咨询服务。'
              : 'MarvelBros C&T advises hotel investors, owners, and managers across investment, brand implementation, development, operations, and sustainable growth.'}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#lifecycle-capabilities"
              className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#073a58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4a6f]"
            >
              <ArrowRight className="h-5 w-5" />
              {isZh ? '了解酒店价值提升路径' : 'Explore the hotel value path'}
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
            ? '投资研究｜品牌定位｜筹建管理｜经营诊断｜产品升级｜市场增长'
            : 'Investment research | Brand positioning | Development | Diagnosis | Product renewal | Market growth'}
        </div>
      </div>
    </section>
  )
}
