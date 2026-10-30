import {
  RiFacebookBoxLine,
  RiMailAddLine,
  RiPhoneLine,
  RiWhatsappLine,
} from "@remixicon/react"

import { ContactItem, FooterLink } from "@/interfaces/footer.types"
import { site } from "@/constants/site"

export const SERVICE_LINKS: FooterLink[] = [
  {
    label: "Recursos Humanos",
    href: "/#services",
    ariaLabel: "Ir para a sessão dos recursos humanos",
  },
  {
    label: "Contabilidade",
    href: "/#services",
    ariaLabel: "Ir para a sessão da contabilidade",
  },
  {
    label: "Limpeza",
    href: "/#services",
    ariaLabel: "Ir para a sessão do serviço de limpeza",
  },
]

export const COMPANY_LINKS: FooterLink[] = [
  {
    label: "Sobre nós",
    href: "/#about",
    ariaLabel: "Ir para a sessão Sobre nós",
  },
  {
    label: "Por que nos escolher",
    href: "/#differences",
    ariaLabel: "Ir para a sessão por que nos escolher",
  },
  {
    label: "Perguntas frequentes",
    href: "/#faq",
    ariaLabel: "Ir para a sessão de perguntas frequentes",
  },
  {
    label: "Contacto",
    href: "/#contact",
    ariaLabel: "Ir para a sessão de contacto",
  },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "phone",
    label: site.phoneLabel,
    href: site.phoneLink,
    ariaLabel: "Ligar para nós",
    icon: RiPhoneLine,
  },
  {
    id: "email",
    label: site.email,
    href: `mailto:${site.email}`,
    ariaLabel: "Enviar um e-mail",
    icon: RiMailAddLine,
    showAsSocial: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/244942555423",
    ariaLabel: "Contactar pelo WhatsApp",
    icon: RiWhatsappLine,
    external: true,
    showAsSocial: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/share/1DuJf3KaJ9/?mibextid=wwXlfr",
    ariaLabel: "Visitar a nossa página no Facebook",
    icon: RiFacebookBoxLine,
    external: true,
    showAsSocial: true,
  },
]
