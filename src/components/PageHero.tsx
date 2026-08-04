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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(24, 34, 30, 0.92) 0%, rgba(24, 34, 30, 0.72) 52%, rgba(24, 34, 30, 0.24) 100%), url('${bgImage}')`,
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className={`${titleSize ?? 'text-4xl md:text-[56px]'} max-w-4xl font-semibold leading-[1.12] text-white`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-[780px] text-base leading-7 text-slate-100 md:text-lg md:leading-8">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#d98b28]" />
    </section>
  )
}
