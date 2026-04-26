function CTASection() {
  return (
    <section className="max-w-[1700px] mx-auto relative mt-6 mb-40 py-20 px-6 overflow-hidden bg-[#0E0E12E5] rounded-[24px]">
      
      {/* ESFERAS DESFOCADAS */}
      <div aria-hidden="true" className="absolute top-5 right-5 h-60 w-60 rounded-full bg-[#813BBE33] blur-2xl"></div>
      <div aria-hidden="true" className="absolute bottom-5 left-5 h-60 w-60 rounded-full bg-[#CAFF6F1A] blur-2xl"></div>   

      {/* HEADER E DESCRIÇÃO */}
      <div className="relative max-w-2xl mx-auto text-center">

        <h2 className="text-white font-bold text-3xl md:text-5xl">
          Pronto para tirar sua{" "}
          <span className="whitespace-nowrap">ideia do papel?</span>
        </h2>

        <p className="mt-6 mx-auto text-lg text-[#FFFFFF99]">
          Seja você uma startup em crescimento ou uma empresa consolidada buscando inovação, 
          nossa equipe está pronta para construir o futuro com você.
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <a href="#orcamento" className="inline-flex items-center justify-center bg-[#CAFF70] px-10 py-4 rounded-[24px] text-lg text-[#344E00] font-bold shadow-[0_20px_25px_-5px_#CAFF6F33] hover:bg-[#A0CC5A] transition-colors duration-200">
            Solicitar Orçamento
          </a>

          <a href="#contato" className="inline-flex items-center justify-center bg-[#FFFFFF0D] px-14 py-4 rounded-[24px] text-lg text-white font-semibold border border-[#FFFFFF1A] hover:bg-[#FFFFFF26] transition-colors duration-200">
            Falar com Consultor
          </a>
        </div>

      </div>
    </section>
  );
} export default CTASection;