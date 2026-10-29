import { CONTACT_ITEMS } from "@/data/footer"
import { getExternalLinkProps } from "@/lib/footer.utils"

export function FooterContactList() {
  return (
    <ul className="space-y-3 text-sm text-slate-500">
      {CONTACT_ITEMS.map(
        ({ id, label, href, ariaLabel, icon: Icon, external }) => (
          <li key={id}>
            <a
              href={href}
              aria-label={ariaLabel}
              {...getExternalLinkProps(external)}
              className="flex items-center gap-2 break-all transition-colors hover:text-blue-600"
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </a>
          </li>
        ),
      )}
    </ul>
  )
}
