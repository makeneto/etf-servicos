"use client"

import NavbarLinkList from "./navbar-link-list"
import Logo from "./logo"
import useNavbar from "@/hooks/use-navbar"
import NavbarButton from "./navbar-button"
import NavbarPanel from "./navbar-panel"

export default function Navbar() {
  const { isOpen, setIsOpen, closeMenu } = useNavbar()

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white transition-shadow duration-300 md:shadow-none ${
        isOpen ? "shadow-lg shadow-slate-800/10" : "shadow-none"
      }`}
    >
      <div className="mx-auto w-[97%] border-x border-slate-200 2xl:max-w-7xl">
        <div className="flex items-center justify-between px-6 py-4 lg:px-20">
          <Logo />
          <NavbarLinkList className="hidden items-center gap-8 md:flex" />
          <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <NavbarPanel isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  )
}
