import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="py-4 w-7xl mx-auto border-x border-b border-slate-200">
      <div className="p-20">
        <h1 className="text-5xl max-w-3xl uppercase font-semibold">
          The Digital Innovation Studio,{" "}
          <span className="text-slate-500">
            Where creativity Meets Technology
          </span>
        </h1>

        <div className="mt-10 space-x-2">
          <Button className="rounded-none py-4.5 px-4 bg-[#0a73e4] hover:bg-[#0a66c9] text-base">
            Ver Serviços
          </Button>
          <Button variant="ghost" className="rounded-none py-4.5 px-4 text-base">
            Sobre Nós
          </Button>
        </div>
      </div>

      {/* <Image
        src="/image.png"
        alt=""
        width={1000}
        height={1000}
        className="mt-10 w-full grayscale-30 rounded-sm"
      /> */}
    </header>
  )
}
