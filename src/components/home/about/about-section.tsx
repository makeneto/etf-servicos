import AboutContent from "./about-content"
import AboutImage from "./about-image"
import AboutStats from "./about-stats"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[97%] scroll-mt-17 border-b border-slate-200 p-0 lg:border-x lg:p-6 2xl:w-7xl 2xl:scroll-mt-16"
    >
      <div className="relative z-10 mx-auto grid min-h-64 w-full grid-cols-1 overflow-hidden bg-[#0865c9] p-6 pb-10 text-white lg:grid-cols-[30%_auto] lg:p-14">
        <AboutImage />

        <div className="flex flex-col justify-between px-6 pt-8 sm:px-10 sm:pt-15 sm:pb-10 lg:py-0 md:px-14 lg:px-16">
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </section>
  )
}
