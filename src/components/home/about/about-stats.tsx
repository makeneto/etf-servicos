import { ABOUT_STATS } from "@/data/about-stats"

export default function AboutStats() {
  return (
    <dl className="mt-5 flex items-baseline justify-between gap-5 md:mt-6 md:gap-8">
      {ABOUT_STATS.map(({ number, label }) => (
        <div key={label}>
          <dd className="text-[1.83rem] font-semibold leading-none sm:text-3xl md:text-5xl">
            {number}
          </dd>
          <dt className="mt-2 text-[8px] text-white/75 md:text-sm">{label}</dt>
        </div>
      ))}
    </dl>
  )
}
