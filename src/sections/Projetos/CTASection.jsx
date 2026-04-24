export default function CTASection() {
  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6 overflow-hidden bg-[#0E0E12E5] rounded-[24px] ">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER E DESCRIÇÃO */}
        <div className="relative max-w-xl mx-auto text-center">

          <h2 className="text-white font-[700] text-5xl ">
            Pronto para tirar sua{" "}
            <span className="whitespace-nowrap ">ideia do papel?</span>
          </h2>

          <p className="mt-6 mx-auto text-[#FFFFFF] font-normal">
            Seja você uma startup em crescimento ou uma empresa consolidada buscando inovação, 
            nossa equipe está pronta para construir o futuro com você.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <button className="bg-[#CAFF70] px-10 py-4 rounded-[24px] cursor-pointer">
              Solicitar Orçamento
            </button>

            <button className="bg-[#FFFFFF0D] px-10 py-4 rounded-[24px] cursor-pointer">
              Falar com Consultor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}