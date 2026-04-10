export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB] py-12 md:py-16 lg:py-20 px-4 md:px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 items-center">

        {/* BOLAS DESFOCADAS NO BACKGROUND */}
        <div className="absolute -top-5 md:-top-10 -right-5 md:-right-10 h-48 w-48 md:h-72 md:w-72 rounded-full bg-[#6B0F9C] opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-5 md:-bottom-10 -left-5 md:-left-10 h-48 w-48 md:h-72 md:w-72 rounded-full bg-[#A4DE02] opacity-20 blur-3xl"></div>

        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1">
                    
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border-1 border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
            <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px] bg-[]">Inovação em Tecnologia</span>
          </div>

          <h1 className="text-[#1F2937] font-extrabold text-3xl md:text-4xl lg:text-[60px] leading-tight md:leading-[50px] lg:leading-[60px] tracking-[0.7px]">
            Empresa Júnior de{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Computação - UFPel</span>
          </h1>

          <p className="text-[#4B5563] text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-[26px] lg:leading-[28px] mt-6">
            Desenvolvemos soluções tecnológicas personalizadas e inovadoras
            por um melhor custo-benefício, aproximando jovens universitários
            do mercado de trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-[#A4DE02] px-6 py-3 rounded-lg font-bold hover:bg-[#8CC800] cursor-pointer text-center">
              <div className="text-[#6B0F9C]">Entre para a Hut ➜</div>
            </button>

            <button className="border border-[#D1D5DB] px-6 py-3 rounded-lg hover:bg-gray-200 cursor-pointer text-center">
              <div className="text-[#1F2937] text-sm md:text-base font-medium">Ver Portfólio</div> 
            </button>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[582px] aspect-square flex-shrink-0 mt-8 md:mt-0">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="absolute -top-5 md:-top-10 -right-5 md:-right-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          <div className="absolute -bottom-5 md:-bottom-10 -left-5 md:-left-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-[#6B0F9C] opacity-25 blur-md"></div>
          
          <img
            src="./src/assets/estudantes.png"
            alt="Equipe"
            className="relative w-full h-full object-cover rounded-lg shadow-lg"
          />

          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
              <span className="w-3 h-3 bg-[#EAB308] rounded-full"></span>
              <span className="w-3 h-3 bg-[#22C55E] rounded-full"></span>
            </div>

            <code className="text-xs md:text-sm text-[#4B5563]">
              <span className="text-[#6B0F9C]">const </span>hut = {"{"} <br />
              &nbsp;&nbsp;founded: <span className="text-[#A4DE02]">2014</span>, <br />
              &nbsp;&nbsp;mission: <span className="text-[#A4DE02]">"Innovate"</span> <br />
              {"}"};
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}