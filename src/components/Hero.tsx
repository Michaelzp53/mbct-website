import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Dict } from '@/lib/dicts'

interface HeroProps {
  dict: Dict
  lang: string
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-slate-900 to-[#0f172a] py-16 md:py-24">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-[#3b82f6]/10 rounded-full blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-8">
            <span className="text-[#f59e0b] text-sm font-medium">{dict.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {dict.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-[#f59e0b] to-yellow-300 bg-clip-text text-transparent">
              {dict.hero.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`}>
              <Button size="lg" className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#fbbf24] font-semibold text-base px-8 rounded-lg w-full sm:w-auto">
                {dict.hero.cta1} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={`/${lang}/services`}>
              <Button size="lg" variant="outline" className="text-base px-8 rounded-lg border-slate-600 text-white hover:bg-white hover:text-[#0f172a] w-full sm:w-auto">
                {dict.hero.cta2}
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-20">
          {dict.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f59e0b] to-yellow-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
