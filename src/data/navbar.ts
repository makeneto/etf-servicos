export type NavLink = {
  id: string
  label: string
  href: string
  ariaLabel: string
}

export const NAV_LINKS: NavLink[] = [
  {
    id: "home",
    label: "Início",
    href: "/#hero",
    ariaLabel: "Ir para o início da página",
  },
  {
    id: "services",
    label: "Serviços",
    href: "/#services",
    ariaLabel: "Conhecer os nossos serviços",
  },
  {
    id: "about",
    label: "Sobre nós",
    href: "/#about",
    ariaLabel: "Conhecer a ETF Serviços",
  },
  {
    id: "contact",
    label: "Contacto",
    href: "/#contact",
    ariaLabel: "Entrar em contacto com a ETF Serviços",
  },
]
