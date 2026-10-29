import { CONTACT_ITEMS } from "@/data/footer"
import { getExternalLinkProps } from "@/lib/footer.utils"

const socialItems = CONTACT_ITEMS.filter((item) => item.showAsSocial)

export function FooterSocialLinks() {
  return (
    <div className="mt-6 flex items-center gap-3">
      {socialItems.map(({ id, label, href, icon: Icon, external }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          {...getExternalLinkProps(external)}
          className="group text-slate-700 transition-colors p-1"
        >
          <Icon className="size-4.5 group-hover:fill-blue-600" />
        </a>
      ))}
    </div>
  )
}
