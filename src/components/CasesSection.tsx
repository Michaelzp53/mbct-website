import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Dict } from '@/lib/dicts'

interface CasesSectionProps {
  dict: Dict
  lang: string
}

export function CasesSection({ dict, lang }: CasesSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">{dict.cases.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{dict.cases.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.cases.items.slice(0, 6).map((c) => (
            <Card key={c.client} className="border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden bg-white">
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-[#0f172a] to-[#3b82f6] flex items-center justify-center relative">
                <Building2 className="w-16 h-16 text-white/15" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#f59e0b]/90 text-[#0f172a] text-xs font-medium">
                    {c.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-[#0f172a]">{c.client}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{c.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-medium text-sm">📈 {c.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/${lang}/cases`}>
            <Button variant="outline" className="border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-semibold px-8 rounded-lg">
              {dict.cases.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
