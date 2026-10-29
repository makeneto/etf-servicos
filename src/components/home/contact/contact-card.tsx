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
import { Send, X } from "lucide-react"

export function ContactCard() {
  return (
    <div className="w-full max-w-sm px-6 sm:px-0 pt-4 lg:py-5">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field orientation="horizontal">
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-name-43j">
                    Nome Completo
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-name-43j"
                    placeholder="Eduardo Jamba"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-phone-number-uw1">
                    Telefone
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-phone-number-uw1"
                    placeholder="987654321"
                    required
                  />
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-email-uw1">Email</FieldLabel>
                <Input
                  id="checkout-7j9-email-uw1"
                  placeholder="exemplo@gmail.com"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Mensagem
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Solicite algum serviço..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="grid grid-cols-2">
            <Button type="submit" className="rounded-none">
              <Send className="size-3" />
              Enviar
            </Button>
            <Button variant="outline" type="reset" className="rounded-none">
              <X className="size-3.5" />
              Limpar
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
