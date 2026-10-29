import type { ComponentType } from "react"

export type FooterLink = {
  label: string
  href: string
  ariaLabel: string
}

export type IconComponent = ComponentType<{ className?: string }>

export type ContactItem = {
  id: string
  label: string
  href: string
  ariaLabel: string
  icon: IconComponent
  external?: boolean
  showAsSocial?: boolean
}
