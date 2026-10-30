export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
const FORMSPREE_BASE_URL = "https://formspree.io/f"

export async function sendContactForm(data: ContactFormData): Promise<void> {
  if (!FORMSPREE_FORM_ID) {
    throw new Error("NEXT_PUBLIC_FORMSPREE_FORM_ID is not defined")
  }

  const response = await fetch(`${FORMSPREE_BASE_URL}/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Formspree request failed with status ${response.status}`)
  }
}
