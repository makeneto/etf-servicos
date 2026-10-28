import React from "react"

import AboutUs from "@/components/home/about/about-us"
import Hero from "@/components/home/hero/hero"
import OurServices from "@/components/home/services/our-services"
import WhyUs from "@/components/home/why-us/why-choose-us"

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyUs />
    </React.Fragment>
  )
}
