import ServicosCard from '../../components/ComponentesServicos/ServicosCard';

const PaginaServicos = () => {
    {/* Conteudo dos cards */}
  const servicos = [
    {
      title: "Plataformas Web",
      description: "Desenvolvimento de aplicações web robustas, escaláveis e focadas na experiência do utilizador final.",
      imageUrl: "url-da-tua-imagem-1.jpg"
    },
    {
      title: "Plataformas Mobile",
      description: "Criação de apps nativas ou híbridas que oferecem performance e design intuitivo para iOS e Android.",
      imageUrl: "url-da-tua-imagem-2.jpg"
    },
    {
      title: "Soluções Digitais",
      description: "Consultoria e implementação de ferramentas digitais personalizadas para otimizar os processos do seu negócio.",
      imageUrl: "url-da-tua-imagem-3.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Nossos Serviços
      </h2>
      
      <div className="flex flex-col gap-8"> {/*gap para os cards não colarem */}
        {servicos.map((service, index) => (
          <ServicosCard 
            key={index}
            title={service.title}
            description={service.description}
            /* Props da imagem
            imageUrl={service.imageUrl}
            imageAlt={service.title}*/
           
          />
        ))}
      </div>
    </section>
  );
};

export default PaginaServicos;