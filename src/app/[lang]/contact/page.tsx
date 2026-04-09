import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { getDict } from '@/lib/dicts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.contact }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.contact.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{dict.contact.title}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f172a]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0f172a]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{dict.contact.form.phone}</p>
                    <p className="text-[#0f172a] font-semibold">{dict.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f172a]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0f172a]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{dict.contact.form.email}</p>
                    <p className="text-[#0f172a] font-semibold">{dict.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0f172a]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0f172a]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Address</p>
                    <p className="text-[#0f172a] font-semibold">{dict.contact.info.address}</p>
                  </div>
                </div>
              </div>

              {/* 24h promise */}
              <div className="mt-10 p-6 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-xl">
                <p className="text-[#0f172a] font-semibold mb-1">
                  {lang === 'zh' ? '⏰ 24小时回复承诺' : '⏰ 24-Hour Response Guarantee'}
                </p>
                <p className="text-slate-500 text-sm">
                  {lang === 'zh' 
                    ? '我们将在24小时内回复您的咨询，请保持联系方式畅通。' 
                    : 'We will respond to your inquiry within 24 hours. Please keep your contact information accessible.'}
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-2">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
