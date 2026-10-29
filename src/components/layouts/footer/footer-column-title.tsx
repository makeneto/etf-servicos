import type { ReactNode } from "react"

type FooterColumnTitleProps = {
  children: ReactNode
}

export function FooterColumnTitle({ children }: FooterColumnTitleProps) {
  return (
    <p className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-900">
      <span className="size-1.5 rounded-full bg-blue-600" />
      {children}
    </p>
  )
}
