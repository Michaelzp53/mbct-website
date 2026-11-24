import Link from 'next/link'

interface HeroWithStatsProps {
  lang: string
}

export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'
  const cards = [
    { href: `/${lang}/hotel-investment`, zh: '投资新店', en: 'Invest in a new hotel' },
    { href: `/${lang}/hotel-opening`, zh: '正在筹开', en: 'Pre-opening now' },
  ]
  return (
    <section data-screen="1" className="border-b border-white/15 text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="max-w-4xl text-[32px] font-semibold leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.55)] sm:text-5xl">
          {isZh ? '酒店全生命周期价值提升咨询，从当前这一步做判断' : 'Sound judgment across the hotel lifecycle, from the current stage'}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg">
          {isZh
            ? '迈创兄弟C&T 做酒店全生命周期价值提升咨询，先按你所处的阶段分流。'
            : 'MarvelBros C&T advises on hotel value across the lifecycle, starting from the stage you are in.'}
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="border border-white/40 px-4 py-5 text-lg font-semibold hover:border-amber-300">
              {isZh ? card.zh : card.en}
            </Link>
          ))}
          <div className="border border-white/40 px-4 py-5">
            <Link href={`/${lang}/hotel-operation-improvement`} className="text-lg font-semibold hover:text-amber-200">
              {isZh ? '存量亏损或改造' : 'Operating loss or renovation'}
            </Link>
            <p className="mt-3 text-sm">
              <Link href={`/${lang}/hotel-renovation`} className="hover:text-amber-200">
                {isZh ? '只想改造升级 →' : 'Renovation only →'}
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">
          <Link href={`/${lang}/knowledge`} className="hover:text-amber-200">{isZh ? '先查知识库 →' : 'Search the knowledge library first →'}</Link>
        </p>
      </div>
    </section>
  )
}
