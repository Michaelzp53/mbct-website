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
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e8] mb-4">{dict.contact.title}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#e8e8e8] mb-8">{dict.contact.title}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0] mb-1">{dict.contact.form.phone}</p>
                    <p className="text-sm text-[#e8e8e8] font-medium">{dict.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #34a853, #fbbc04)' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0] mb-1">{dict.contact.form.email}</p>
                    <p className="text-sm text-[#e8e8e8] font-medium">{dict.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #fbbc04, #ea4335)' }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0] mb-1">Address</p>
                    <p className="text-sm text-[#e8e8e8] font-medium">{dict.contact.info.address}</p>
                  </div>
                </div>
              </div>

              {/* 24h promise */}
              <div className="mt-10 p-6 bg-[#4285f4]/10 border border-[#4285f4]/30 rounded-xl">
                <p className="text-[#e8e8e8] font-semibold mb-1">
                  {lang === 'zh' ? '⏰ 24 小时回复承诺' : '⏰ 24-Hour Response Guarantee'}
                </p>
                <p className="text-[#a0a0a0] text-sm">
                  {lang === 'zh' 
                    ? '我们将在 24 小时内回复您的咨询，请保持联系方式畅通。' 
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
