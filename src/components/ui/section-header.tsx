interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header>
      <span className="flex items-center gap-2 text-sm font-medium">
        <div className="size-2 animate-pulse rounded-full bg-blue-500" />{" "}
        {label}
      </span>
      <h2 className="mt-3 text-[1.98rem] 2xl:text-4xl font-medium">{title}.</h2>

      {description && <p className="mt-2 text-slate-700 max-w-sm">{description}</p>}
    </header>
  )
}
