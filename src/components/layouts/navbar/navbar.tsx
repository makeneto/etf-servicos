import Image from "next/image"
import Link from "next/link"

import NavbarLinkList from "./navbar-link-list"

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="w-[97%] 2xl:max-w-7xl mx-auto flex items-center justify-between border-x border-slate-200 px-6 py-4 2xl:py-4 2xl:px-20">
        <Link
          href="/"
          aria-label="Ir para a página inicial"
          className="flex items-center gap-3"
        >
          <Image
            src="/etf-logo.webp"
            alt="Etf Logo"
            width={300}
            height={50}
            className="h-9 w-auto"
          />
          <p className="mt-1 font-semibold">Comércio e Serviços</p>
        </Link>

        <NavbarLinkList />
      </nav>
    </header>
  )
}
