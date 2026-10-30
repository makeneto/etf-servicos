import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function StartButton() {
  return (
    <Link href="/#services" aria-label="Conheça os nossos serviços">
      <button className="learn-more mt-10">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>

        <span className="button-text">Começar</span>
      </button>

      <Button className="lg:hidden mt-10 rounded-none text-base p-5">
        Ver serviços <ChevronDown />
      </Button>
    </Link>
  )
}
