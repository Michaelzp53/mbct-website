interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage: string
  lang?: string
  titleSize?: string
}

export default function PageHero({ title, subtitle, bgImage, titleSize }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[340px] items-center overflow-hidden border-b border-[#e4ded4] py-20 dark:border-white/10 md:min-h-[420px] md:py-24">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/90 via-[#0f172a]/78 to-[#0b0f17]/70" />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-5 h-px w-12 bg-[#c9a66b]" />
        <h1 className={`${titleSize ?? 'text-3xl md:text-5xl'} max-w-4xl font-serif font-semibold leading-tight tracking-tight text-[#f8f6f2]`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-slate-200 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a66b] to-transparent opacity-80" />
    </section>
  )
}
