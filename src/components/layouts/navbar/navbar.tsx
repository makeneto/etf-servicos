import Image from "next/image"
import Link from "next/link"

type NavLink = {
  label: string
  href: string
  ariaLabel: string
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Go to home page"
  },
  {
    label: "Section",
    href: "/#section",
    ariaLabel: "Go to section"
  },
  {
    label: "Footer",
    href: "/#footer",
    ariaLabel: "Go to footer"
  }
]

export default function Navbar() {
  return (
    <div className="border-b border-slate-200">
      <nav className="w-7xl mx-auto p-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-3"
        >
          <Image
            src="/etf-logo.webp"
            alt="Etf Logo"
            width={300}
            height={50}
            className="w-auto h-9"
          />
          <p className="font-semibold mt-1">ETF Serviços</p>
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-label={link.ariaLabel}
              className="text-sm text-neutral-600 hover:text-black hover:underline underline-offset-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}
