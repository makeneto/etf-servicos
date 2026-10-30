import type { ReactNode } from "react"

import Footer from "./footer/footer"
import Navbar from "./navbar/navbar"
import { Toaster, ToastProvider } from "../ui/toast"

interface SiteShellProps {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <ToastProvider>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </ToastProvider>
  )
}
