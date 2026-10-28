import { Button } from "@/components/ui/button"
import { Service } from "@/data/services"
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { category, title, description, features, featured } = service

  return (
    <article
      className={cn(
        "border p-8",
        featured
          ? "border-none bg-[#0865c9] text-white shadow-2xl"
          : "border-slate-200",
      )}
    >
      <span className="text-sm font-semibold">{category}</span>

      <div>
        <h3 className="mt-3.5 text-2xl font-semibold">{title}</h3>
        <p
          className={cn(
            "mt-1 text-sm",
            featured ? "text-slate-300" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      </div>

      <ul className="mt-7 grid gap-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle className="size-4" /> {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "secondary" : "outline"}
        className="mt-7 w-full rounded-none py-5"
      >
        Solicitar Serviço
      </Button>
    </article>
  )
}
