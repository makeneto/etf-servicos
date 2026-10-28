import React, { ReactNode } from "react"
import Navbar from "./navbar/navbar"
// import Footer from "./footer/footer"

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="w-7xl mx-auto border-x border-slate-200 px-4">
        {children}
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  )
}
