import Link from "next/link"

import { NAV_LINKS } from "@/data/navbar"

interface NavbarLinkListProps {
  className?: string
  linkClassName?: string
  onLinkClick?: () => void
}

export default function NavbarLinkList({
  className = "flex items-center gap-8",
  linkClassName = "",
  onLinkClick,
}: NavbarLinkListProps) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-label={link.ariaLabel}
            onClick={onLinkClick}
            className={`text-[0.9rem] font-medium text-slate-500 transition-colors hover:text-blue-600 ${linkClassName}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
