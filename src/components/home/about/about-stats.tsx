import { ABOUT_STATS } from "@/data/about-stats"

export default function AboutStats() {
  return (
    <dl className="mt-8 sm:mt-11 flex items-baseline justify-between gap-5 sm:gap-8">
      {ABOUT_STATS.map(({ number, label }) => (
        <div key={label}>
          <dd className="text-[1.83rem] sm:text-4xl lg:text-5xl font-semibold leading-none">
            {number}
          </dd>
          <dt className="mt-2 text-[8px] text-white/75 md:text-sm">{label}</dt>
        </div>
      ))}
    </dl>
  )
}
