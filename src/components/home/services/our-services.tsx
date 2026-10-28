import { SERVICES } from "@/data/services"
import { ServiceCard } from "./service-card"

export default function OurServices() {
  return (
    <section className="mx-auto flex w-7xl flex-col gap-10 border-x border-b border-slate-200 p-20">
      <div>
        <span className="flex items-center gap-2 text-sm font-medium">
          <div className="size-2 animate-pulse rounded-full bg-blue-500" />{" "}
          Pacote
        </span>
        <h2 className="mt-3 text-4xl font-medium">Nossos Serviços</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
