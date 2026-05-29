interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage: string
  lang?: string
  titleSize?: string
}

export default function PageHero({ title, subtitle, bgImage, titleSize }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 100%), url('${bgImage}')`,
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`${titleSize ?? 'text-4xl md:text-5xl'} font-bold text-white mb-4 drop-shadow-lg`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
