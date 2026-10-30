import StartButton from "./start-button"

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="px-6 lg:px-0 2xl:px-4 2xl:border-x border-b border-slate-200"
    >
      <div className="sm:w-[97%] 2xl:w-7xl sm:mx-auto lg:px-20 pt-40 pb-25 sm:pt-40 sm:pb-30 lg:pt-40 lg:pb-22 lg:border-x border-slate-200">
        <div>
          <h1 className="text-3xl lg:text-[3rem] max-w-2xl font-semibold">
            Soluções Empresariais,{" "}
            <span className="text-slate-500">
              Onde a Eficiência Encontra a Qualidade.
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-slate-600">
            Contabilidade, Recursos Humanos e Limpeza Profissional para empresas
            que valorizam a qualidade.
          </p>
        </div>

        <StartButton />
      </div>
    </header>
  )
}
