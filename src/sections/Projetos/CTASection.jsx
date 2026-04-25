export default function CTASection() {
  return (
    <section className="max-w-[1700px] mx-auto relative mt-6 mb-40 py-20 px-6 overflow-hidden bg-[#0E0E12E5] rounded-[24px]">

      <div className="mx-auto text-center">
        
      {/* ESFERAS DESFOCADAS */}
      <div className="absolute top-5 right-5 h-60 w-60 rounded-full bg-[#813BBE33] opacity-100 blur-2xl"></div>
      <div className="absolute bottom-5 left-5 h-60 w-60 rounded-full bg-[#CAFF6F1A] opacity-100 blur-2xl"></div>    

        {/* HEADER E DESCRIÇÃO */}
        <div className="relative max-w-2xl mx-auto text-center">

          <h2 className="text-white font-bold text-3xl md:text-5xl">
            Pronto para tirar sua{" "}
            <span className="whitespace-nowrap ">ideia do papel?</span>
          </h2>

          <p className="mt-6 mx-auto text-[18px] text-[#FFFFFF99] font-normal">
            Seja você uma startup em crescimento ou uma empresa consolidada buscando inovação, 
            nossa equipe está pronta para construir o futuro com você.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <button className="bg-[#CAFF70] px-10 py-4 rounded-[24px] text-[18px] text-[#344E00] font-bold shadow-[0_20px_25px_-5px_#CAFF6F33] hover:bg-[#A0CC5A] cursor-pointer">
              Solicitar Orçamento
            </button>

            <button className="bg-[#FFFFFF0D] px-14 py-4 rounded-[24px] text-[18px] text-white font-semibold border border-[#FFFFFF1A] hover:bg-[#FFFFFF26] cursor-pointer">
              Falar com Consultor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}