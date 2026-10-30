"use client"

import { useState, type FormEvent } from "react"

import { toast } from "@/components/ui/toast"
import { ContactFormData, sendContactForm } from "@/services/formspree"

const timeFormatter = new Intl.DateTimeFormat("pt-AO", {
  hour: "2-digit",
  minute: "2-digit",
})

function getFormData(form: HTMLFormElement): ContactFormData {
  const formData = new FormData(form)

  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  }
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    setIsSubmitting(true)

    try {
      await sendContactForm(getFormData(form))
      form.reset()
      toast.add({
        title: "Mensagem enviada com sucesso",
        description: `Enviada às ${timeFormatter.format(new Date())}`,
      })
    } catch {
      toast.add({
        type: "error",
        title: "Não foi possível enviar a mensagem",
        description: "Verifique a sua ligação e tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, handleSubmit }
}
