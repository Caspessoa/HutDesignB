import React from "react";
import { useState } from "react";
import { useNavegacao } from "./components/ComponentesServicos/useNavegacao.js";
import Header from "./components/Header.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Hero from "./sections/Landing2/Hero.jsx"
import Historia from "./sections/Landing2/Historia.jsx";
import QuemSomos from "./sections/Landing2/QuemSomos.jsx";
import Orcamento from "./sections/Landing2/Orcamento.jsx";
import Footer from "./components/Footer.jsx";
import Section3 from './sections/Landing2/Section3/Section3';
import Section1 from './sections/Projetos/Section1.jsx';
import CTASection from './sections/Projetos/CTASection.jsx';
import Section2 from "./sections/Projetos/Section2/Section2.jsx";
import EquipeSection1 from './sections/Equipe/EquipeSection1.jsx';
import EquipeSection2 from './sections/Equipe/EquipeSection2.jsx';
import EquipeSection3 from './sections/Equipe/EquipeSection3.jsx';
import Bg1 from "./components/Backgrounds/Bg1.jsx";
import Bg2 from "./components/Backgrounds/Bg2.jsx";
import HeroServicos from "./sections/Servicos/HeroServicos.jsx" 
import CardServicos from './sections/Servicos/ServicePages.jsx'
import CTAServicos from "./sections/Servicos/CTAServicos.jsx";

function App() {
  // página inicial padrão
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  
  const { navegarParaServico } = useNavegacao(setSecaoAtiva);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <Header setSecaoAtiva={setSecaoAtiva} />

      {/* Conteúdo principal */}
      <div className="flex-grow">
        {/* renderiza apenas o bloco correspondente atual */}

        {secaoAtiva === "home" && (
          <>
          <Hero />
          <WhatsAppButton />
          <Historia />
          <QuemSomos />
          <Section3 navegarParaServico={navegarParaServico} />
          <Orcamento />
          </>
        )}

        {secaoAtiva === "projetos" && (
          <>
          <Bg1>
            <WhatsAppButton />
            <Section1 /> {/* section1 da landing projetos */}
            <Section2 />
            <CTASection />
          </Bg1>
          </>
        )}
        {secaoAtiva === "servicos" && (
          <>
          <HeroServicos/>
          <WhatsAppButton />
          <CardServicos/>
          <CTAServicos/>
          </>
        )}
        {secaoAtiva === "equipe" && (
          <>
          <Bg2>
            <EquipeSection1 />
            <WhatsAppButton />
            <EquipeSection2 />
            <EquipeSection3 />
          </Bg2>
          </>
        )}
        {secaoAtiva === "contato" && (
          <>
          <Hero />
          <WhatsAppButton />
          <Historia />
          <QuemSomos />
          <Section3 />
          <Orcamento />
          </>
        )}
        
      </div>

      {/* Footer sempre no final */}
      <Footer />
      
    </div>
  );
}
export default App;