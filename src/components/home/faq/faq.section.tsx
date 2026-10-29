import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionHeader from "@/components/ui/section-header"

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-16 w-[97%] 2xl:w-7xl mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-10 lg:border-x border-slate-200 px-6 lg:px-20 py-22 pb-32 lg:py-22"
    >
      <SectionHeader
        label="FAQ"
        title="Perguntas frequentes"
        description="Encontre respostas às perguntas mais frequentes sobre os nossos serviços."
      />

      <Accordion defaultValue={["shipping"]} className="max-w-lg flex justify-self-end">
        <AccordionItem value="shipping">
          <AccordionTrigger>What are your shipping options?</AccordionTrigger>
          <AccordionContent>
            We offer standard (5-7 days), express (2-3 days), and overnight
            shipping. Free shipping on international orders.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Returns accepted within 30 days. Items must be unused and in
            original packaging. Refunds processed within 5-7 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="teste">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Returns accepted within 30 days. Items must be unused and in
            original packaging. Refunds processed within 5-7 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="teste2">
          <AccordionTrigger>
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
