import { FeaturedCardToni } from "/src/components/Section2-projetos/FeaturedCardToni.jsx";
import { FeaturedCardPastejando} from "/src/components/Section2-projetos/FeaturedCardPastejando.jsx";
import { FeaturedCardAdmin } from "/src/components/Section2-projetos/FeaturedCardAdmin.jsx";
import { FeaturedCardPlante } from "../../../components/Section2-projetos/FeaturedCardPlante";
import Computador from '../../../assets/section2-projetos/hut-admin-image.png';
import Vaca from '../../../assets/section2-projetos/pastejando-image.png';
import Imovel from '../../../assets/section2-projetos/toni-neutzling-image.png';
import Plantas from '../../../assets/section2-projetos/plante-saude-image.png';
import Trator from "../../../assets/section2-projetos/trator-icon.svg";

export function Section2() {
  return (
    <section className="w-full max-w-[1710px] mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-[32px] w-full">
       
        {/* FILA 1: Toni (8/12) e Plante (4/12) */}
        {/* Toni Neutzling: Antigo col-span-8 */}
        <div className="flex-[8] min-w-[min(100%,700px)]">
          <FeaturedCardToni
            tag="Imobiliária"
            tagsSecundarias={["React Native", "PostgreSQL"]}
            titulo="Toni Neutzling"
            descricao="Redefinindo a experiência de busca por imóveis com filtros inteligentes e tours virtuais de alta fidelidade."
            imagem={Imovel} 
            icone={Trator}
            metrica={{ valor: "+150%", label: "Leads Mensais" }}
            corSombra="rgba(14, 14, 18, 0.9)" 
          />
        </div>

        {/* Plante Saúde: Antigo col-span-4 */}
        <div className="flex-[4] min-w-[min(100%,450px)]">
          <FeaturedCardPlante
            tag="Agrotech"
            titulo="Plante Saúde"
            descricao="Monitoramento preditivo de safras através de análise foliar via IA."
            metrica={"Aumento de 50% na eficiência"}
            imagem={Plantas} 
            corSombra="rgba(14, 14, 18, 0.9)" 
          />
        </div>
      
        {/* FILA 2: Pastejando (5/12) e Hut Admin (7/12) */}
        {/* Pastejando: Antigo col-span-5 */}
        <div className="flex-[5] min-w-[min(100%,480px)]">
            <FeaturedCardPastejando
              titulo="Pastejando"
              tag="Gestão Rural"
              icone={Trator}
              descricao="Otimização de rotatividade de pasto para produtores de leite de médio porte."
              imagem={Vaca}
              tecnologias={['Flutter', 'Firebase', 'IoT']}
              />
        </div>
        
        {/* Hut Admin: Antigo col-span-7 */}
        <div className="flex-[7] min-w-[min(100%,600px)]">
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