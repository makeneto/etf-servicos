"use client"

import { useEffect, useState } from "react"

export default function useNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return { isOpen, setIsOpen, closeMenu }
}
