import { Reason } from "@/data/reasons"
import { cn } from "@/lib/utils"

type ReasonCardProps = {
  reason: Reason
}

export function ReasonCard({ reason }: ReasonCardProps) {
  const { icon: Icon, title, description, featured } = reason

  return (
    <article
      className={cn(
        "relative z-10 flex flex-col border p-6",
        featured
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white",
      )}
    >
      <Icon className="size-8" strokeWidth={1.5} />

      <div className="mt-8">
        <h3 className="text-lg lg:text-xl font-medium">{title}</h3>
        <p
          className={cn(
            "mt-1 text-sm",
            featured ? "text-slate-300" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      </div>
    </article>
  )
}
