import { CardProjetos } from '../../../components/Section2-projetos/cardProjetos';
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
          <CardProjetos 
            tag="Imobiliária"
            titulo="Toni Neutzling"
            descricao="Redefinindo a experiência de busca por imóveis com filtros inteligentes."
            imagem={Imovel} 
            corSombra="rgba(14, 14, 18, 0.9)" 
          />
        </div>

        {/* Card 2: Plante Saúde */}
        <div className="md:col-span-4">
          <div 
              style={{
                backgroundColor: '#F5F2F9',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)'
              }}
              className="w-full max-w-[548px] h-[400px] md:h-[500px] rounded-[24px] border border-[#B2B1BA1A] flex flex-col p-6 md:p-8 relative overflow-hidden mx-auto"
            >
              {/* imagem do card */}
              <img src={Plantas} alt="Projeto Plant saude" />
              <div className="relative z-10">
                {/* textos */}
              </div>
            </div>
        </div>
      
        {/* Card 3: Pastejando */}
        <div className="md:col-span-5">
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              className="w-full max-w-[694px] h-[400px] md:h-[494px] rounded-[24px] border border-[#B2B1BA33] flex flex-col p-6 md:p-8 relative overflow-hidden mx-auto"
            >
              {/* Imagem do card*/}
              <img src={Vaca} alt="Projeto pastejando" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* textos */}
              </div>
          </div>
        </div>  
        
        {/* Card 4: Hut Admin */}
        <div className="md:col-span-7">
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            className="w-full max-w-[984px] h-[400px] md:h-[494px] rounded-[24px] border border-[#B2B1BA33] flex flex-col p-6 md:p-10 relative overflow-hidden mx-auto"
          >
            {/* imagem do card */}
             <img src={Computador} alt="Hut Admin" />
    
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* texto */}
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}
