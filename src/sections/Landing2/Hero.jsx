export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        
        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}

        <div className="flex-1">
          <div className="inline-flex items-center bg-purple-100 px-3 py-1 rounded-full border border-purple-200 mb-4">
            <span className="text-purple-700 font-medium text-sm">
              Inovação em Tecnologia
            </span>
          </div>

          <h1 className="text-gray-900 font-bold text-4xl md:text-5xl leading-tight">
            Empresa Júnior de Computação - UFPel
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            Desenvolvemos soluções tecnológicas personalizadas e inovadoras por um melhor custo-benefício, aproximando jovens universitários do mercado de trabalho.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-lime-400 px-6 py-3 rounded-md font-bold">
              Entre para a Hut ➜
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md font-medium text-gray-700">
              Ver Portfólio
            </button>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}

        <div className="relative w-full max-w-[582px] aspect-square flex-shrink-1">
          <img
            src="./src/assets/sample-img.png"
            alt="Equipe"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}