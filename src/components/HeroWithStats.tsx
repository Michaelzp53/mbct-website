import { brand } from '@/lib/brand'
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
            {isZh ? '酒店投资｜酒店筹开｜酒店经营改善' : 'Hotel Investment | Pre-opening | Performance Improvement'}
          </p>
          <h1 className={`max-w-full font-semibold leading-[1.12] text-white ${isZh ? 'text-[38px] sm:text-[52px] lg:text-[58px]' : 'text-[36px] sm:text-5xl lg:text-[54px]'}`}>
            {isZh ? (
              <>
                <span className="block">让酒店经营问题</span>
                <span className="block whitespace-nowrap">有判断、有方法</span>
              </>
            ) : (
              'Practical answers to hotel operating questions'
            )}
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            {isZh ? brand.zh.description : brand.en.description}
          </p>
          <div className="mt-6">
            <Link
              href={`/${lang}/knowledge#decisions`}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d98b28] px-6 py-3 text-base font-semibold text-[#17120d] transition-colors hover:bg-[#efaa4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              {isZh ? '查找经营问题与方法' : 'Find answers and methods'}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
