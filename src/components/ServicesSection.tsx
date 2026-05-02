import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, TrendingUp, Shield, Sparkles, BarChart3, Users, Megaphone, GraduationCap, Landmark, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Dict } from '@/lib/dicts'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, TrendingUp, Shield, Sparkles, BarChart3, Users, Megaphone, GraduationCap, Landmark, BookOpen,
}

interface ServicesSectionProps {
  dict: Dict
  lang: string
}

export function ServicesSection({ dict, lang }: ServicesSectionProps) {
  const icons = ['Building2', 'Sparkles', 'TrendingUp', 'BarChart3', 'Users', 'Shield', 'Megaphone', 'Landmark', 'BookOpen']

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{dict.services.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{dict.services.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.services.items.map((service, i) => {
            const Icon = iconMap[icons[i]] ?? Building2
            return (
              <Card key={service.title} className="border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card rounded-xl overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/${lang}/services`}>
            <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 rounded-lg">
              {dict.services.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
