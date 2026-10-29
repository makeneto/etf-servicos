import Link from "next/link"

import { NAV_LINKS } from "@/data/navbar"

export default function NavbarLinkList() {
  return (
    <ul className="flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-label={link.ariaLabel}
            className="text-[0.9rem] font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
