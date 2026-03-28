import monitorIcon from '../../assets/solucoes-cards-icons/monitor-icon.svg';
import codeIcon from '../../assets/solucoes-cards-icons/code-icon.svg';
import smartphoneIcon from '../../assets/solucoes-cards-icons/smartphone-icon.svg';

export default function SolucoesDigitais() {
  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-4 text-center">
        
        <h4 className="text-[#A4DE02] font-bold tracking-widest mb-2">
            O QUE FAZEMOS
        </h4>

        <h2 className="text-4xl font-bold text-[#1F2937] mb-8">
          Soluções Digitais Completas
        </h2>

        <p className="text-[#4B5563]">Temos a solução e as ferramentas perfeitas a sua necessidade, do conceito ao código.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* --- CARD 1: PLATAFORMAS WEB --- */}
          <div className="card1 p-6 border rounded-lg shadow-sm">
            
            <div className='iconeMonitor'>
              <img src={monitorIcon} alt='Monitor'/>
            </div>

            <h2 className="text-xl font-bold text-[#1F2937] mb-3">Plataformas Web</h2>

            <p className="text-[#4B5563]">Sites institucionais, e-commerces e sistemas web robustos. Levamos seu negócio para a internet com tecnologia de ponta.</p>

            <a href="#contato" 
                className="mt-auto inline-flex items-center text-[#6B0F9C] font-bold hover:underline transition-all text-sm group">
                Saiba mais
                <span className="ml-2">
                  →
                </span>
              </a>
            
          </div>

          {/* --- CARD 2: APLICATIVOS MOBILE --- */}
          <div className="card2 p-6 border rounded-lg shadow-sm">

            <div className='iconeSmartphone'>
              <img src={smartphoneIcon} alt='Smartphone'/>
            </div>
            
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">Aplicativos Mobile</h2>

            <p className="text-[#4B5563]">Esteja sempre perto de seus clientes. Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.</p>

             <a href="#contato" 
                className="mt-auto inline-flex items-center text-[#6B0F9C] font-bold hover:underline transition-all text-sm group">
                Saiba mais
                <span className="ml-2">
                  →
                </span>
              </a>

          </div>

          {/* --- CARD 3: Solucoes Personalizadas --- */}
          <div className="card3 p-6 border rounded-lg shadow-sm">

            <div className='iconeCode'>
              <img src={codeIcon} alt='Code'/>
            </div>

            <h2 className="text-xl font-bold text-[#1F2937] mb-3">Soluções Personalizadas</h2>

            <p className="text-[#4B5563]">Tem uma ideia inovadora? Transformamos sua visão em software funcional com consultoria especializada.</p>

             <a href="#contato" 
                className="mt-auto inline-flex items-center text-[#6B0F9C] font-bold hover:underline transition-all text-sm group">
                Saiba mais
                <span className="ml-2">
                  →
                </span>
              </a>

          </div>

        </div>
      </div>
    </section>
  );
}