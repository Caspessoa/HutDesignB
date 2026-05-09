import {Card} from '../../../components/HomePortfolio/card';
import monitorIcon from '../../../assets/HomePortfolio/monitor-icon.svg';
import codeIcon from '../../../assets/HomePortfolio/code-icon.svg';
import smartphoneIcon from '../../../assets/HomePortfolio/smartphone-icon.svg';

function Portfolio({ navegarParaServico }) {
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
          <Card 
            icone={monitorIcon} 
            titulo="Plataformas Web" 
            descricao="Sites institucionais, e-commerces e sistemas web robustos. Levamos seu negócio para a internet com tecnologia de ponta." 
            corFundoIcone="bg-[#6B0F9C1A]"
            aoClicar={() => navegarParaServico("plataformasWeb")}
          />

          {/* --- CARD 2: APLICATIVOS MOBILE --- */}
          <Card
            icone={smartphoneIcon} 
            titulo="Aplicativos Mobile" 
            descricao="Esteja sempre perto de seus clientes. Desenvolvimento de aplicativos nativos e híbridos para iOS e Android." 
            corFundoIcone="bg-[#A4DE021A]"
            aoClicar={() => navegarParaServico("aplicativosMobile")}
          />


          {/* --- CARD 3: Solucoes Personalizadas --- */}
          <Card
            icone={codeIcon} 
            titulo="Soluções Personalizadas" 
            descricao="Tem uma ideia inovadora? Transformamos sua visão em software funcional com consultoria especializada."
            corFundoIcone="bg-[#A855F71A]"
            aoClicar={() => navegarParaServico("solucoesPersonalizadas")}
          />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;