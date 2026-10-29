import React, { ReactNode } from "react"
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
