import { FeaturedCardFull } from "/src/components/Section2-projetos/FeaturedCardFull/FeaturedCardFull.jsx";
import { FeaturedCardClassic } from "/src/components/Section2-projetos/FeaturedCardClassic/FeaturedCardClassic.jsx";
import { FeaturedCardAdmin } from "/src/components/Section2-projetos/FeaturedCardAdmin/FeaturedCardAdmin.jsx";
import Computador from '../../../assets/section2-projetos/hut-admin-image.png';
import Vaca from '../../../assets/section2-projetos/pastejando-image.png';
import Imovel from '../../../assets/section2-projetos/toni-neutzling-image.png';
import Plantas from '../../../assets/section2-projetos/plante-saude-image.png';

export function Section2() {
  return (
    <section className="w-full max-w-[1710px] mx-auto px-4 py-10">

      <div className="container-cards grid grid-cols-1 md:grid-cols-12 gap-[32px]" >
       
       {/* Card 1: Toni Neutzling */}
        <div className="md:col-span-8">
          <FeaturedCardFull
            tag="Imobiliária"
            titulo="Toni Neutzling"
            descricao="Redefinindo a experiência de busca por imóveis com filtros inteligentes."
            imagem={Imovel} 
            corSombra="rgba(14, 14, 18, 0.9)" 
          />
        </div>

        {/* Card 2: Plante Saúde */}
        <div className="md:col-span-4">
          <FeaturedCardFull
            tag="Agrotech"
            titulo="Plante Saúde"
            descricao="Monitoramento preditivo de safras através de análise foliar via IA.."
            imagem={Plantas} 
            corSombra="rgba(14, 14, 18, 0.9)" 
          />
        </div>
      
        {/* Card 3: Pastejando */}
        <div className="md:col-span-5">
            <FeaturedCardClassic
            tag="Gestão Rural"
            titulo="Pastejando"
            descricao="Otimização de rotatividade de pasto para produtores de leite de médio porte."
            imagem={Vaca}
            />
              
        </div>  
        
        {/* Card 4: Hut Admin */}
        <div className="md:col-span-7">
          <FeaturedCardAdmin
          titulo="Hut Admin"
          descricao="Dashboard centralizado para gerenciamento de fluxo de caixa e RH corporativo."
          imagem={Computador}
          />
        </div>
      </div>    
    </section>
  );
}
