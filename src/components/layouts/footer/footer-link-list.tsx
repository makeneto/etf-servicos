import Link from "next/link"

import { FooterLink } from "@/interfaces/footer.types"

type FooterLinkListProps = {
  links: FooterLink[]
}

export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className="space-y-2 lg:space-y-3">
      {links.map(({ label, href, ariaLabel }) => (
        <li key={label}>
          <Link
            href={href}
            aria-label={ariaLabel}
            className="text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
