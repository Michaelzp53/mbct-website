import Image from 'next/image'
import Link from 'next/link'
import { PROPERTY_FILTERS, publishedCases, stageLabel } from '@/lib/case-studies'
import { LIFECYCLE_STAGES } from '@/lib/lifecycle-stages'

export default function CasesFilter({ lang }: { lang: string }) {
  const isZh = lang === 'zh'
  const box = 'inline-flex min-h-16 min-w-24 items-center justify-center border border-white/50 px-4 text-center text-[1.75rem] font-semibold leading-none text-[#f5c518] hover:bg-white/10'

  return (
    <div>
      <div className="relative overflow-hidden bg-cover bg-center px-5 py-10" style={{ backgroundImage: "url('/images/home-named/solutions-dining.jpg')" }}>
        <div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" />
        <div className="relative flex flex-wrap gap-8">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-[#7dd3fc]">{isZh ? '按阶段' : 'By stage'}</legend>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${lang}/cases`} className={box}>{isZh ? '全部阶段' : 'All stages'}</Link>
              {LIFECYCLE_STAGES.map((item) => (
                <Link key={item.slug} href={`/${lang}/${item.slug}`} className={box}>
                  {isZh ? item.shortZh : item.shortEn}
                </Link>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-[#7dd3fc]">{isZh ? '按物业类型' : 'By property type'}</legend>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${lang}/cases`} className={box}>{isZh ? '全部物业' : 'All property types'}</Link>
              {PROPERTY_FILTERS.filter((item) => item.id).map((item) => (
                <Link key={item.id} href={`/${lang}/cases/property/${item.id}`} className={box}>
                  {isZh ? item.zh : item.en}
                </Link>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publishedCases.map((item) => {
          const copy = isZh ? item.zh : item.en
          return (
            <Link key={item.slug} href={`/${lang}/cases/${item.slug}`} className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="relative h-44">
                <Image src={item.image} alt={copy.client} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{stageLabel(item.stage, lang)}</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">{copy.result}</span>
                </div>
                <h3 className="text-lg font-semibold">{copy.client}</h3>
                <p className="text-sm text-muted-foreground">{copy.projectType}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
