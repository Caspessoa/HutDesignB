import monitorIcon from '../../../assets/section3-icons/monitor-icon.svg';
import codeIcon from '../../../assets/section3-icons/code-icon.svg';
import smartphoneIcon from '../../../assets/section3-icons/smartphone-icon.svg';

export default function Section3() {
  return (
    <section className="py-16 bg-[#FFFFFF]">

      <div className="max-w-[1280px] mx-auto px-[32px] flex flex-col items-center gap-[64px]">
        
        <div className="estilo-container-texto-secao">

          {/* Subtitulo */}
           <span className="text-[#A4DE02] estilo-subtitulo-secao">
              O QUE FAZEMOS
            </span>

          {/* Título da seção*/}
          <h2 className="text-[#1F2937] estilo-titulo-secao">
            Soluções Digitais Completas
          </h2>

          {/* Parágrafo de descrição */}
          <p className="text-[#4B5563] ">
            Temos a solução e as ferramentas perfeitas a sua necessidade, do<br></br> conceito ao código.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center mt-2">

          {/* --- CARD 1: PLATAFORMAS WEB --- */}
          <div className="estilo-cards">
            
            <div className="IconeMonitor estilo-icones bg-[#6B0F9C1A]">
              <img src={monitorIcon} alt='Monitor'/>
            </div>

            <h2 className="estilo-titulo-card">Plataformas Web</h2> 

            <p className="TextoCard1 estilo-texto-card">
              Sites institucionais, e-commerces e sistemas web robustos. Levamos seu negócio para a internet com tecnologia de ponta.
            </p>

           <a href="#contato" className="link-saiba-mais">
                <span className ="linha-animada"> Saiba mais </span>
                <span className = "seta">→</span>
          </a>
            
          </div>

          {/* --- CARD 2: APLICATIVOS MOBILE --- */}
          <div className="estilo-cards">

            <div className="iconeSmartphone estilo-icones bg-[#A4DE021A]">
              <img src={smartphoneIcon} alt='Smartphone'/>
            </div>
            
            <h2 className="estilo-titulo-card">Aplicativos Mobile</h2>

            <p className="TextoCard2 estilo-texto-card">
              Esteja sempre perto de seus clientes. Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.
            </p>

            <a href="#contato" className="link-saiba-mais">
                <span className ="linha-animada"> Saiba mais </span>
                <span className = "seta">→</span>
            </a>

          </div>

          {/* --- CARD 3: Solucoes Personalizadas --- */}
          <div className="estilo-cards">

            <div className="iconeCode estilo-icones bg-[#A855F71A]">
              <img src={codeIcon} alt='Code'/>
            </div>

            <h2 className="estilo-titulo-card">Soluções Personalizadas</h2>

            <p className="TextoCard3 estilo-texto-card">
              Tem uma ideia inovadora? Transformamos sua visão em software funcional com consultoria especializada.
            </p>

            <a href="#contato" className="link-saiba-mais">
                <span className ="linha-animada"> Saiba mais </span>
                <span className = "seta">→</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}