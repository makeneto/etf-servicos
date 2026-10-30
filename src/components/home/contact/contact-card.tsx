"use client"

import { Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/use-contact-form"

export function ContactCard() {
  const { isSubmitting, handleSubmit } = useContactForm()

  return (
    <div className="w-full max-w-sm px-6 sm:px-0 pt-4 lg:py-5">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field orientation="horizontal">
                <Field>
                  <FieldLabel htmlFor="contact-name">Nome Completo</FieldLabel>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Eduardo Jamba"
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="contact-phone">Telefone</FieldLabel>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="987654321"
                    autoComplete="tel"
                    required
                  />
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="exemplo@gmail.com"
                  autoComplete="email"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Solicite algum serviço..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="grid grid-cols-2">
            <Button
              type="submit"
              className="rounded-none"
              disabled={isSubmitting}
            >
              <Send className="size-3" />
              {isSubmitting ? "A enviar..." : "Enviar"}
            </Button>
            <Button
              variant="outline"
              type="reset"
              className="rounded-none"
              disabled={isSubmitting}
            >
              <X className="size-3.5" />
              Limpar
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
