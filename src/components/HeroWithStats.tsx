import { brand } from '@/lib/brand'
import Link from 'next/link'
import Image from 'next/image'
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
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#zone-invest" className="inline-flex min-h-12 items-center justify-center bg-[#d98b28] px-5 py-3 text-base font-semibold text-[#17120d] hover:bg-[#efaa4d]">{isZh ? '我要投建新酒店' : 'I want to develop a hotel'}</a>
            <a href="#zone-opening" className="inline-flex min-h-12 items-center justify-center border border-white/70 px-5 py-3 text-base font-semibold hover:bg-white/10">{isZh ? '酒店正在筹开期' : 'The hotel is pre-opening'}</a>
            <a href="#zone-stock" className="inline-flex min-h-12 items-center justify-center border border-white/70 px-5 py-3 text-base font-semibold hover:bg-white/10">{isZh ? '存量酒店亏损/改造' : 'An operating hotel is losing money or needs renewal'}</a>
          </div>
          <p className="mt-4 flex flex-wrap gap-x-3 text-sm font-semibold">
            {([
              ['hotel-investment', '投', 'Invest'],
              ['hotel-development', '建', 'Build'],
              ['hotel-opening', '筹', 'Pre-open'],
              ['hotel-operation-improvement', '管', 'Operate'],
              ['hotel-renovation', '改', 'Renew'],
              ['hotel-exit', '退', 'Exit'],
            ] as const).map(([slug, zh, en], index) => (
              <span key={slug}>{index > 0 && <span className="mr-3 text-white/50">·</span>}<Link href={`/${lang}/${slug}`} className="hover:text-amber-200">{isZh ? zh : en}</Link></span>
            ))}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {([
              ['30+', isZh ? '年行业实战积淀' : 'years of practice'],
              [isZh ? '超 3000 万元' : 'RMB 30 million+', isZh ? '已帮助开发商避免的潜在损失' : 'potential loss avoided for a developer'],
              ['25%', isZh ? '典型项目运营成本降幅' : 'operating-cost reduction on a typical project'],
              [isZh ? '投·建·筹·管·改·退' : 'Invest–Exit', isZh ? '六阶段全覆盖' : 'all six stages'],
            ] as const).map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-amber-300">{value}</dt>
                <dd className="mt-1 text-sm leading-5 text-slate-100">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
