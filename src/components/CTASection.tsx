import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Dict } from '@/lib/dicts'

interface CTASectionProps {
  dict: Dict
  lang: string
}

export function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4285f4]/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8e8] mb-6 max-w-2xl mx-auto leading-tight">
          {dict.cta.title}
        </h2>
        <p className="text-[#a0a0a0] text-lg mb-10 max-w-xl mx-auto">
          {dict.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang}/contact`}>
            <Button size="lg" className="btn-gradient-primary font-semibold text-base px-8 rounded-lg w-full sm:w-auto">
              {dict.cta.cta1} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="tel:18941579333">
            <Button size="lg" variant="outline" className="text-base px-8 rounded-lg border-[rgba(255,255,255,0.2)] text-[#e8e8e8] hover:bg-[#4285f4] hover:text-[#ffffff] w-full sm:w-auto">
              {dict.cta.cta2}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
