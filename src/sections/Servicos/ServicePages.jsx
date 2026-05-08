import { ServicosCard } from '../../components/ComponentesServicos/ServicosCard';
import WebImagem from '../../assets/LandingServiços/plataformaWeb.png'
import MobileImagem from '../../assets/LandingServiços/aplicativoMobile.png'
import personalizadaImagem from '../../assets/LandingServiços/solucoesPersonalizadas.png'


const PaginaServicos = () => {

  const servicos = [
    {
      title: "Plataformas Web",
      id: "plataformasWeb",
      description: "Criamos sites e sistemas web rápidos, modernos e preparados para gerar resultados reais.",
      imageUrl: WebImagem,
      
      topics: [
        {
          title: "Problemas que resolvemos",
         
          items: [
            "Sites lentos e desatualizados",
            "Baixa conversão",
            "Falta de estrutura digital"
          ]
        },
        {
          title: "O que desenvolvemos",
          items: [
            "Sites institucionais",
            "E-commerces",
            "Sistemas personalizados"
          ]
        },
        {
          title: "Como trabalhamos",
          items: [
            "Entendimento do projeto",
            "Planejamento",
            "Desenvolvimento",
            "Testes e entrega"
          ]
        },
        {
          title: "Resultados",
          items: [
            "Mais clientes",
            "Melhor conversão",
            "Presença profissional"
          ]
        }
      ]
    },

    {
      title: "Aplicativos Mobile",
      id: "aplicativosMobile",
      imageUrl: MobileImagem,
      description: "Desenvolvemos aplicativos modernos para Android e iOS com foco em performance e experiência do usuário.",

      topics: [
        {
          title: "Problemas que resolvemos",
          items: [
            "Falta de presença mobile",
            "Baixo engajamento com clientes",
            "Sistemas não integrados"
          ]
        },
        {
          title: "O que desenvolvemos",
          items: [
            "Apps nativos",
            "Apps híbridos",
            "Integração com APIs"
          ]
        },
        {
          title: "Como trabalhamos",
          items: [
            "Definição de funcionalidades",
            "Design da interface",
            "Desenvolvimento",
            "Publicação nas lojas"
          ]
        },
        {
          title: "Resultados",
          items: [
            "Mais engajamento",
            "Maior retenção de clientes",
            "Experiência moderna"
          ]
        }
      ]
    },

    {
      title: "Soluções Personalizadas",
      id: "solucoesPersonalizadas",
      imageUrl: personalizadaImagem,
      description: "Criamos sistemas sob medida para resolver problemas específicos e otimizar processos do seu negócio.",

      topics: [
        {
          title: "Problemas que resolvemos",
          items: [
            "Processos manuais",
            "Falta de organização",
            "Ferramentas limitadas"
          ]
        },
        {
          title: "O que desenvolvemos",
          items: [
            "Sistemas sob medida",
            "Automação de processos",
            "Dashboards e relatórios"
          ]
        },
        {
          title: "Como trabalhamos",
          items: [
            "Análise do negócio",
            "Definição da solução",
            "Desenvolvimento",
            "Implementação"
          ]
        },
        {
          title: "Resultados",
          items: [
            "Mais produtividade",
            "Redução de erros",
            "Maior controle"
          ]
        }
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      
      <div className="flex flex-col gap-8">
        {servicos.map((service, index) => (
          <ServicosCard
            key={index}
            id={service.id}
            title={service.title}
            description={service.description}
            topics={service.topics}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>

    </section>
  );    
};

export default PaginaServicos;