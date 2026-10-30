import { SERVICES } from "@/data/services"
import { ServiceCard } from "./service-card"
import SectionHeader from "@/components/ui/section-header"

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-12 2xl:scroll-mt-16 w-[97%] 2xl:w-7xl mx-auto flex flex-col gap-15 border-x border-b border-slate-200 px-6 lg:px-20 py-22"
    >
      <SectionHeader
        label="Pacotes"
        title="Nossos Serviços"
        description="Conheça os nossos serviços e soluções."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
