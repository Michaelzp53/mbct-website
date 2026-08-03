import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

interface HeroWithStatsProps {
  lang: string
}
export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'
  const capabilities = isZh
    ? ['投资研究', '品牌定位', '筹建管理', '经营诊断', '产品升级', '市场增长']
    : ['Investment research', 'Brand positioning', 'Development', 'Diagnosis', 'Product renewal', 'Market growth']

  return (
    <section className="relative min-h-[650px] overflow-hidden border-b border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:min-h-[calc(100vh-72px)]">
      <div
        className="absolute inset-0 bg-cover bg-[58%_center] lg:bg-center"
        style={{ backgroundImage: "url('/images/home-named/hotel-city-skyline-hero.webp')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_38%,rgba(255,255,255,0.42)_56%,rgba(255,255,255,0.08)_68%,rgba(255,255,255,0)_76%)] dark:bg-[linear-gradient(90deg,rgba(8,15,28,0.98)_0%,rgba(8,15,28,0.93)_46%,rgba(8,15,28,0.52)_72%,rgba(8,15,28,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-center px-5 py-14 sm:min-h-[720px] sm:px-8 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:px-12 xl:px-16">
        <div className="min-w-0 max-w-[980px] py-4 sm:py-8 lg:-translate-y-[4.5rem]">
          <p className="mb-[60px] text-[21px] font-semibold leading-8 text-[#0b4a6f] dark:text-sky-300">
            {isZh ? '酒店投资｜酒店筹开｜酒店经营改善' : 'Hotel Investment | Pre-opening | Performance Improvement'}
          </p>
          <h1 className={`max-w-full font-semibold leading-[1.12] text-slate-950 [overflow-wrap:anywhere] dark:text-white sm:max-w-[1000px] sm:leading-[1.08] ${isZh ? 'text-[40px] sm:text-6xl lg:text-[60px] xl:text-[64px]' : 'text-[36px] sm:text-5xl lg:text-[54px] xl:text-[58px]'}`}>
            {isZh ? '酒店投资筹开与经营改善专家' : 'Hotel Investment and Operations Specialists'}
          </h1>
          <p className="mt-12 max-w-[760px] text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8">
            {isZh
              ? '迈创兄弟C&T沉淀30多年酒店行业实战经验，帮助酒店投资人、业主和管理者判断项目价值、解决经营问题，实现酒店长期价值增长。'
              : 'Drawing on more than 30 years of practical hospitality experience, MarvelBros C&T helps hotel investors, owners, and managers assess project value, solve operating problems, and build long-term growth.'}
          </p>
          <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/${lang}/hotel-investment`}
              className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#073a58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4a6f]"
            >
              <ArrowRight className="h-5 w-5" />
              {isZh ? '了解酒店投资如何判断' : 'How to assess a hotel investment'}
            </Link>
            <Link
              href={`/${lang}/knowledge`}
              className="inline-flex min-h-13 items-center justify-center gap-2 border-b-2 border-[#d98b28] bg-slate-950/80 px-5 py-3 text-base font-semibold text-white! transition-colors hover:bg-slate-950 hover:text-amber-300! dark:bg-white/10 dark:hover:bg-white/15"
            >
              <BookOpen className="h-5 w-5" />
              {isZh ? '进入酒店经营知识库' : 'Enter the hotel knowledge base'}
            </Link>
          </div>
        </div>

        <div className="mt-8 w-full border-y border-slate-900/15 py-5 text-slate-700 dark:border-white/20 dark:text-slate-200 sm:mt-10 sm:py-6">
          <div className="grid grid-cols-2 text-[21px] font-bold leading-9 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((item) => (
              <span key={item} className="border-l border-[#d98b28]/45 px-3 py-1 first:border-l-0 sm:px-4 lg:first:border-l-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
