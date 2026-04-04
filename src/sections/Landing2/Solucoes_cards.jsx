import monitorIcon from '../../assets/solucoes-cards-icons/monitor-icon.svg';
import codeIcon from '../../assets/solucoes-cards-icons/code-icon.svg';
import smartphoneIcon from '../../assets/solucoes-cards-icons/smartphone-icon.svg';

export default function SolucoesDigitais() {
  return (
    <section className="py-16 bg-[#FFFFFF]">

      <div className="max-w-[1280px] mx-auto px-[32px] flex flex-col items-center gap-[64px]">
        
        <div className="textos flex flex-col items-center text-center px-4">

          {/* Subtitulo verde */}
           <span className="text-[#A4DE02] font-semibold text-[14px] leading-[20px] uppercase tracking-[0.7px] mb-1">
              O QUE FAZEMOS
            </span>

          {/* Título da seção*/}
          <h2 className="text-[#1F2937] font-bold text-[36px] leading-[40px] text-center mb-2">
            Soluções Digitais Completas
          </h2>

          {/* Parágrafo de descrição */}
          <p className="text-[#4B5563] font-normal text-base md:text-[20px] leading-relaxed max-w-[672px] text-center mx-auto pt-[6.5px]">
            Temos a solução e as ferramentas perfeitas a sua necessidade, do<br></br> conceito ao código.
          </p>

        </div>

       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center mt-2">

          {/* --- CARD 1: PLATAFORMAS WEB --- */}
          <div className="card1 w-full md:max-w-[384px] min-h-[346px] p-8 rounded-[16px] border border-gray-100 bg-white flex flex-col items-center text-center  shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] bg-white rounded-[16px] hover:-translate-y-2 transition-all duration-300">
            
            <div className="iconeMonitor w-16 h-16 rounded-[16px] flex items-center justify-center bg-[#6B0F9C1A] mb-6">
              <img src={monitorIcon} alt='Monitor'/>
            </div>

            <h2 className="text-[#1F2937] font-bold text-[20px] leading-[28px] text-center mb-3">Plataformas Web</h2>

            <p className="text-[#4B5563] font-normal text-[16px] leading-[23px] text-center max-w-[296px] mx-auto">Sites institucionais, e-commerces e sistemas web robustos. Levamos seu negócio para a internet com tecnologia de ponta.</p>

           <a href="#contato" 
                className="relative text-[#6B0F9C] font-semibold text-[16px] leading-[24px] text-center inline-flex items-center group mt-auto w-fit">
                <span className="relative">
                  Saiba mais
                  {/* Linha que anima */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B0F9C] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
          </a>
            
          </div>

          {/* --- CARD 2: APLICATIVOS MOBILE --- */}
          <div className="card2 w-full md:max-w-[384px] min-h-[346px] p-8 rounded-[16px] border border-gray-100 bg-white flex flex-col items-center text-center shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] bg-white rounded-[16px] hover:-translate-y-2 transition-all duration-300">

            <div className="iconeSmartphone w-16 h-16 rounded-[16px] flex items-center justify-center bg-[#A4DE021A] mb-6">
              <img src={smartphoneIcon} alt='Smartphone'/>
            </div>
            
            <h2 className="text-[#1F2937] font-bold text-[20px] leading-[28px] text-center mb-3">Aplicativos Mobile</h2>

            <p className="text-[#4B5563] font-normal text-[16px] leading-[23px] text-center max-w-[296px] mx-auto">Esteja sempre perto de seus clientes. Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.</p>

             <a href="#contato" 
                className="relative text-[#6B0F9C] font-semibold text-[16px] leading-[24px] text-center inline-flex items-center group mt-auto w-fit">
                <span className="relative">
                  Saiba mais
                  {/* Linha que anima */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B0F9C] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
            </a>
          </div>

          {/* --- CARD 3: Solucoes Personalizadas --- */}
          <div className="card3 w-full md:max-w-[384px] min-h-[346px] p-8 rounded-[16px] border border-gray-100 bg-white flex flex-col items-center text-center shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] bg-white rounded-[16px] hover:-translate-y-2 transition-all duration-300">

            <div className="iconeCode w-16 h-16 rounded-[16px] flex items-center justify-center bg-[#A855F71A] mb-6 mb-6">
              <img src={codeIcon} alt='Code'/>
            </div>

            <h2 className="text-[#1F2937] font-bold text-[20px] leading-[28px] text-center mb-3">Soluções Personalizadas</h2>

            <p className="text-[#4B5563] font-normal text-[16px] leading-[23px] text-center max-w-[296px] mx-auto">Tem uma ideia inovadora? Transformamos sua visão em software funcional com consultoria especializada.</p>

             <a href="#contato" 
                className="relative text-[#6B0F9C] font-semibold text-[16px] leading-[24px] text-center inline-flex items-center group mt-auto w-fit">
                <span className="relative">
                  Saiba mais
                  {/* Linha que anima */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B0F9C] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}