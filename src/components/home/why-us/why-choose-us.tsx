import { REASONS } from "@/data/reasons"
import { ReasonCard } from "./reaseon-card"

export default function WhyChooseUs() {
  return (
    <section className="mx-auto flex w-7xl flex-col gap-10 border-x border-b border-slate-200 p-20">
      <div>
        <span className="flex items-center gap-2 text-sm font-medium">
          <div className="size-2 animate-pulse rounded-full bg-blue-500" />{" "}
          Diferenciais
        </span>
        <h2 className="mt-3 text-4xl font-medium">Por quê nos escolher</h2>
      </div>

      <div className="relative grid grid-cols-4 gap-4">
        <div
          aria-hidden
          className="absolute inset-x-0 top-34 z-0 border-t border-dashed border-slate-300"
        />

        {REASONS.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </section>
  )
}
