import { FooterSocialLinks } from "./footer-social-links"
import { site } from "@/constants/site"

export function FooterBrand() {
  return (
    <div className="col-span-4">
      <p className="text-lg font-semibold text-slate-900">{site.companyName}</p>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
        {site.companyDescription}
      </p>
      <FooterSocialLinks />
    </div>
  )
}
