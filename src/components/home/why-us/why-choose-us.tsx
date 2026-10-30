import { REASONS } from "@/data/reasons"
import { ReasonCard } from "./reason-card"
import SectionHeader from "@/components/ui/section-header"

export default function WhyChooseUs() {
  return (
    <section
      id="differences"
      className="dotted-bg scroll-mt-17 2xl:scroll-mt-16 sm:w-[97%] 2xl:w-7xl sm:mx-auto flex flex-col gap-15 border-x border-b border-slate-200 px-5 lg:px-20 py-22"
    >
      <SectionHeader
        label="Diferenciais"
        title=" Por quê nos escolher"
        description="Descubra por que somos o parceiro ideal."
      />

      <div className="relative grid sm:grid-cols-3  lg:grid-cols-4 gap-4">
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
