import { site } from "@/constants/site"
import { CurrentYear } from "./current-year"

export function FooterBottomBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between border-t border-slate-200 sm: px-6 lg:px-20 py-6 text-sm text-slate-500">
      <p className="text-center sm:text-start">
        © <CurrentYear /> - {site.companyName}.
      </p>
      <p className="text-center">Todos os direitos reservados.</p>
    </div>
  )
}
