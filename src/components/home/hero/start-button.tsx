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
    </Link>
  )
}
