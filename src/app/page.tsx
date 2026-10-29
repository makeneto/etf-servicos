import React from "react"

import HeroSection from "@/components/home/hero/hero-section"
import AboutSection from "../components/home/about/about-section"
import ServicesSection from "../components/home/services/services-section"
import WhyUs from "@/components/home/why-us/why-choose-us"
import ContactSection from "@/components/home/contact/contact-section"
import FaqSection from "@/components/home/faq/faq.section"

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <ContactSection />
      <FaqSection />
    </React.Fragment>
  )
}
