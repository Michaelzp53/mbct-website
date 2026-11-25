import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PROPERTY_FILTERS, publishedCases, type PropertyType } from '@/lib/case-studies'
import { pageAlternates } from '@/lib/page-seo'

const PROPERTY_COPY: Record<
  PropertyType,
  { zh: { title: string; summary: string; focus: string[] }; en: { title: string; summary: string; focus: string[] }; image: string }
> = {
  'city-business': {
    image: '/images/home-named/hotel-city-skyline-hero.webp',
    zh: {
      title: '城市商务物业',
      summary: '城市商务酒店比的是净贡献、企业客承接和高峰交付，而不是单纯满房。',
      focus: ['客源与渠道净贡献', '企业与会议询价承接', '工作日与周末的定价纪律'],
    },
    en: {
      title: 'Urban business properties',
      summary: 'Urban business hotels compete on net contribution, corporate capture, and peak delivery—not occupancy alone.',
      focus: ['Guest and channel net contribution', 'Corporate and meeting inquiry capture', 'Weekday and weekend pricing discipline'],
    },
  },
  resort: {
    image: '/images/home-modern/resort-pool.jpeg',
    zh: {
      title: '度假物业',
      summary: '度假酒店的关键不只是旺季卖房，而是复购、体验差异和淡季承接。',
      focus: ['旺淡季产品组合', '复购与会员激活', '体验触点与口碑沉淀'],
    },
    en: {
      title: 'Resort properties',
      summary: 'Resort hotels win on repeat demand, differentiated experience, and shoulder-season capture—not peak nights alone.',
      focus: ['Peak and shoulder product mix', 'Repeat-guest and membership activation', 'Experience touchpoints and reputation'],
    },
  },
  economy: {
    image: '/images/home-refresh/front-desk-service.jpg',
    zh: {
      title: '经济型物业',
      summary: '经济型酒店先稳住成本、标准和人效，再谈价格与流量。',
      focus: ['清洁与前台标准', '动态定价与渠道成本', '班次与人效匹配'],
    },
    en: {
      title: 'Economy properties',
      summary: 'Economy hotels first stabilize cost, standards, and labor efficiency, then price and traffic.',
      focus: ['Housekeeping and front-desk standards', 'Dynamic pricing and channel cost', 'Shift planning and labor efficiency'],
    },
  },
  'state-reception': {
    image: '/images/photography/team-advisory.jpg',
    zh: {
      title: '国企接待物业',
      summary: '迎宾馆与接待型物业需要在制度约束下完成市场化客群重构。',
      focus: ['接待与市场化双轨产品', '银发与协议客群', '制度效率与成本结构'],
    },
    en: {
      title: 'State reception properties',
      summary: 'Guesthouses and reception assets must rebuild market demand inside institutional constraints.',
      focus: ['Dual reception and market offers', 'Senior and contracted segments', 'Institutional efficiency and cost structure'],
    },
  },
  county: {
    image: '/images/home-named/homepage-city-night.jpg',
    zh: {
      title: '县域物业',
      summary: '县域酒店不能套用城市假设，要按本地客源、价格带和运营承载力判断。',
      focus: ['本地客源真实性', '价格带与竞争半径', '团队与供应链承载力'],
    },
    en: {
      title: 'County properties',
      summary: 'County hotels cannot reuse city assumptions; demand, price bands, and operating capacity must be local.',
      focus: ['Real local demand', 'Price band and competitive radius', 'Team and supply-chain capacity'],
    },
  },
}

export function generateStaticParams() {
  return (Object.keys(PROPERTY_COPY) as PropertyType[]).flatMap((type) => [
    { lang: 'zh', type },
    { lang: 'en', type },
  ])
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; type: string }> }): Promise<Metadata> {
  const { lang, type } = await params
  const copy = PROPERTY_COPY[type as PropertyType]
  if (!copy) return { title: 'Not found' }
  const text = lang === 'en' ? copy.en : copy.zh
  return {
    title: text.title,
    description: text.summary,
    alternates: pageAlternates(lang, `/cases/property/${type}`),
  }
}

export default async function PropertyFilterPage({ params }: { params: Promise<{ lang: string; type: string }> }) {
  const { lang, type } = await params
  const meta = PROPERTY_COPY[type as PropertyType]
  if (!meta) notFound()
  const isZh = lang !== 'en'
  const copy = isZh ? meta.zh : meta.en
  const filterMeta = PROPERTY_FILTERS.find((item) => item.id === type)
  const related = publishedCases.filter((item) => item.property === type)

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="relative border-b border-slate-200 py-20 dark:border-slate-800 md:py-28">
        <Image src={meta.image} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-semibold tracking-wide text-[#fbbf24]">{isZh ? '物业类型' : 'Property type'}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-snug text-white md:text-4xl">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white md:text-lg">{copy.summary}</p>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-2xl font-semibold">{isZh ? '这类物业通常先看什么' : 'What this property type usually needs first'}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {copy.focus.map((item) => (
              <li key={item} className="border border-slate-200 px-4 py-5 font-semibold dark:border-slate-700">{item}</li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href={`/${lang}/cases`} className="inline-flex min-h-11 items-center border border-slate-300 px-4 font-semibold dark:border-slate-700">
              {isZh ? '返回案例筛选' : 'Back to case filters'}
            </Link>
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-11 items-center bg-[#0b4a6f] px-4 font-semibold text-white">
              {isZh ? '交流项目现状' : 'Discuss your situation'}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <h2 className="mt-16 text-2xl font-semibold">
            {isZh ? `已披露的「${filterMeta?.zh || copy.title}」案例` : `Disclosed ${filterMeta?.en || copy.title} cases`}
          </h2>
          {related.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => {
                const caseCopy = isZh ? item.zh : item.en
                return (
                  <Link key={item.slug} href={`/${lang}/cases/${item.slug}`} className="border border-slate-200 p-5 hover:border-[#0b4a6f] dark:border-slate-700">
                    <p className="text-sm font-semibold text-[#d98b28]">{caseCopy.result}</p>
                    <h3 className="mt-2 text-lg font-semibold">{caseCopy.client}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{caseCopy.coreProblem}</p>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="relative mt-6 min-h-[220px] overflow-hidden border border-slate-200 dark:border-slate-700">
              <Image src={meta.image} alt="" fill className="object-cover" sizes="100vw" />
              <div className="pointer-events-none absolute inset-0 bg-[#163044]/75" />
              <div className="relative flex min-h-[220px] items-center justify-center px-6 text-center text-white">
                <p className="max-w-lg text-base font-semibold leading-7">
                  {isZh
                    ? '该物业类型的量化案例仍在整理。可先从阶段方案或项目诊断切入。'
                    : 'Quantified cases for this property type are still being prepared. Start from a lifecycle stage page or a diagnosis.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
