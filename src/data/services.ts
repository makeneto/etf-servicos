export type Service = {
  id: string
  category: string
  title: string
  description: string
  features: string[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    id: "recursos-humanos",
    category: "Consultoria",
    title: "Recursos Humanos",
    description:
      "Apoio completo na gestão e no desenvolvimento das suas equipas.",
    features: [
      "Recrutamento e Seleção",
      "Processamento Salarial",
      "Gestão de pessoas",
      "Cedência de Pessoal",
      "INSS",
    ],
  },
  {
    id: "contabilidade",
    category: "Consultoria",
    title: "Contabilidade",
    description: "Organização financeira e fiscal para o seu negócio crescer.",
    features: [
      "Contabilidade Geral",
      "Planeamento Fiscal",
      "Consultoria Financeira",
      "Auditoria",
      "Assessoria Empresarial",
    ],
    featured: true,
  },
  {
    id: "limpeza",
    category: "Higienização",
    title: "Limpeza",
    description: "Ambientes limpos e seguros para empresas e residências.",
    features: [
      "Limpeza de Escritórios",
      "Limpeza Pós-Obra",
      "Higienização de Estofos",
      "Limpeza de Vidros",
      "Desinfeção de Ambientes",
    ],
  },
]
