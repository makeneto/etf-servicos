"use client"

import type { Dispatch, SetStateAction } from "react"

interface NavbarButtonProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavbarButton({ isOpen, setIsOpen }: NavbarButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
    >
      <span className="relative block h-3 w-6">
        <span
          className={`absolute left-0 block h-0.5 w-full rounded-full bg-slate-700 transition-all duration-300 ${
            isOpen ? "top-1.25 rotate-45" : "top-0 rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 block h-0.5 w-full rounded-full bg-slate-700 transition-all duration-300 ${
            isOpen ? "top-1.25 -rotate-45" : "top-2.5 rotate-0"
          }`}
        />
      </span>
    </button>
  )
}
