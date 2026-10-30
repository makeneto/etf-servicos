import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionHeader from "@/components/ui/section-header"
import { FAQ } from "@/data/faq"

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-17 2xl:scroll-mt-16 sm:w-[97%] 2xl:w-7xl sm:mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-10 lg:border-x border-slate-200 px-6 lg:px-20 py-22 pb-32 lg:py-22"
    >
      <SectionHeader
        label="FAQ"
        title="Perguntas frequentes"
        description="Encontre respostas às perguntas mais frequentes sobre os nossos serviços."
      />

      <Accordion
        defaultValue={["shipping"]}
        className="max-w-lg flex justify-self-end"
      >
        {FAQ.map(({ value, label, description }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
