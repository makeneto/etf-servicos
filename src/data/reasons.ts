import type { LucideIcon } from "lucide-react"
import { BadgeCheck, Clock, Users, Wallet } from "lucide-react"

export type Reason = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  actionLabel: string
  featured?: boolean
}

export const REASONS: Reason[] = [
  {
    id: "equipa-qualificada",
    icon: Users,
    title: "Equipa Qualificada",
    description: "Especialistas que entregam resultados desde o primeiro dia.",
    actionLabel: "Conhecer a equipa",
    featured: true,
  },
  {
    id: "credibilidade",
    icon: BadgeCheck,
    title: "Credibilidade",
    description: "Anos de mercado a servir empresas como a sua.",
    actionLabel: "Ver casos de sucesso",
  },
  {
    id: "resposta-rapida",
    icon: Clock,
    title: "Resposta Rápida",
    description: "Prazos cumpridos. Sem desculpas, sem demoras.",
    actionLabel: "Falar connosco",
  },
  {
    id: "precos-justos",
    icon: Wallet,
    title: "Preços Justos",
    description: "Valores claros, sem surpresas na fatura.",
    actionLabel: "Pedir proposta",
  },
]
