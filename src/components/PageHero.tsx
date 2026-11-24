interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage: string
  lang?: string
  titleSize?: string
}

export default function PageHero({ title, subtitle, bgImage, titleSize }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[370px] items-center overflow-hidden border-b border-slate-200 py-20 md:min-h-[460px] md:py-24">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="absolute inset-0 bg-[#0c1614]/30 dark:bg-[#01060c]/30" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className={`${titleSize ?? 'text-3xl md:text-4xl'} max-w-4xl font-semibold leading-snug text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.75)] md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#d98b28]" />
    </section>
  )
}
