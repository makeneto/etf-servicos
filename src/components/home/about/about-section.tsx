export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 w-[97%] 2xl:w-7xl mx-auto lg:border-x border-b border-slate-200 p-0 lg:px-6 lg:py-4"
    >
      <div className="relative z-10 mx-auto grid min-h-64 w-full grid-cols-1 sm:grid-cols-[30%_auto] overflow-hidden bg-[#0865c9] px-6 py-10 lg:p-20 text-white">
        <div className="relative min-h-56 sm:min-h-110">
          <div className="absolute -left-20 -top-22 lg:-top-20 h-full w-full bg-black" />

          <div
            className="relative z-10 h-full min-h-56 bg-cover bg-center sm:min-h-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85')",
            }}
            role="img"
            aria-label="Escritório moderno"
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        <div className="flex flex-col justify-between py-5 sm:py-0 px-6 sm:px-10 md:px-14 lg:px-16">
          <div>
            <p className="mb-3 text-sm text-white/80">Sobre nós</p>

            <h1 className="text-2xl leading-tight md:text-[2.6rem]">
              Innovative Digital Solutions to Accelerate Your Business Growth.
            </h1>

            <p className="mt-4 max-w-xl text-[10px] leading-relaxed text-white/85 md:text-base">
              We are a dynamic and forward-thinking team, dedicated to helping
              businesses achieve their digital aspirations.
            </p>
          </div>

          <div className="mt-5 flex items-baseline justify-between gap-5 md:mt-6 md:gap-8">
            <div>
              <p className="flex items-center gap-2 text-3xl leading-none font-semibold md:text-5xl">
                2.3K <span className="mb-2 text-lg md:text-5xl">+</span>
              </p>

              <p className="mt-2 text-[8px] text-white/75 md:text-sm">
                Satisfied customers
              </p>
            </div>

            <div>
              <p className="text-3xl leading-none font-semibold md:text-5xl">
                20
              </p>

              <p className="mt-2 text-[8px] text-white/75 md:text-sm">
                Industries served
              </p>
            </div>

            <div>
              <p className="text-3xl leading-none font-semibold md:text-5xl">
                1.9K
              </p>

              <p className="mt-2 text-[8px] text-white/75 md:text-sm">
                Completed projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
