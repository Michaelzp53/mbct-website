interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage: string
  lang?: string
  titleSize?: string
}

export default function PageHero({ title, subtitle, bgImage, titleSize }: PageHeroProps) {
  return (
    <section className="relative min-h-[420px] overflow-hidden border-b border-slate-200 py-24 md:min-h-[500px] md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9, 32, 48, 0.9) 0%, rgba(9, 32, 48, 0.72) 48%, rgba(9, 32, 48, 0.28) 100%), url('${bgImage}')`,
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className={`${titleSize ?? 'text-4xl md:text-6xl'} max-w-4xl font-semibold leading-tight text-white`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
