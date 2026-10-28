export default function AboutUs() {
  return (
    <section className="relative flex min-h-72 items-center px-4 py-8 sm:px-10 lg:px-20">
      <div className="relative z-10 mx-auto grid min-h-64 w-full grid-cols-1 overflow-hidden rounded-lg bg-[#0865c9] text-white sm:grid-cols-[24%_76%] md:min-h-72">
        <div
          className="relative min-h-56 bg-cover bg-center sm:min-h-72"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85')"
          }}
          role="img"
          aria-label="Escritório moderno"
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="flex flex-col justify-center px-8 py-8 sm:px-10 md:px-14 lg:px-16">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95">
            About
          </p>

          <h1 className="max-w-md text-2xl font-semibold leading-tight md:text-[30px]">
            Innovative Digital Solutions
            <br />
            to Accelereate Your
            <br />
            Business Growth.
          </h1>

          <p className="mt-4 max-w-[390px] text-[10px] leading-relaxed text-white/85 md:text-xs">
            We are a dynamic and forward-thinking team, dedicated to helping
            businesses achieve their digital aspirations.
          </p>

          <div className="mt-5 grid max-w-[480px] grid-cols-3 gap-5 md:mt-6 md:gap-8">
            <div>
              <p className="text-3xl leading-none md:text-[34px]">
                2.3K <span className="text-lg">+</span>
              </p>
              <p className="mt-2 text-[8px] text-white/75 md:text-[9px]">
                satisfied customers
              </p>
            </div>
            <div>
              <p className="text-3xl leading-none md:text-[34px]">20</p>
              <p className="mt-2 text-[8px] text-white/75 md:text-[9px]">
                industries served
              </p>
            </div>
            <div>
              <p className="text-3xl leading-none md:text-[34px]">1.9K</p>
              <p className="mt-2 text-[8px] text-white/75 md:text-[9px]">
                completed projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
