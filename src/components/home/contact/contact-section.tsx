import SectionHeader from "@/components/ui/section-header"
import { ContactCard } from "../contact/contact-card"
import ContactVideo from "./contact-video"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 sm:scroll-mt-17 2xl:scroll-mt-16 flex sm:w-[97%] 2xl:w-7xl sm:mx-auto lg:border-l border-b border-slate-200 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-0"
    >
      <div className="flex flex-col gap-10 px-6 lg:px-20 py-22">
        <SectionHeader
          label="Contacto"
          title="Fale connosco"
          description="Entre em contacto connosco e conheça as nossas soluções."
        />
        <ContactCard />
      </div>

      <ContactVideo />
    </section>
  )
}
