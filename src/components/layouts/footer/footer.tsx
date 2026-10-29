import { COMPANY_LINKS, SERVICE_LINKS } from "@/data/footer"
import { FooterBottomBar } from "./footer-bottom-bar"
import { FooterBrand } from "./footer-brand"
import { FooterColumnTitle } from "./footer-column-title"
import { FooterContactList } from "./footer-contact-list"
import { FooterLinkList } from "./footer-link-list"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="w-[97%] 2xl:w-7xl mx-auto border-x border-slate-200">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 px-6 lg:px-20 py-15 lg:py-22">
          <FooterBrand />

          <div className="mt-15 lg:mt-0 flex flex-wrap sm:justify-between gap-20 gap-y-10">
            <div>
              <FooterColumnTitle>Serviços</FooterColumnTitle>
              <FooterLinkList links={SERVICE_LINKS} />
            </div>
            <div>
              <FooterColumnTitle>Empresa</FooterColumnTitle>
              <FooterLinkList links={COMPANY_LINKS} />
            </div>
            <div>
              <FooterColumnTitle>Contacto</FooterColumnTitle>
              <FooterContactList />
            </div>
          </div>
        </div>

        <FooterBottomBar />
      </div>
    </footer>
  )
}
