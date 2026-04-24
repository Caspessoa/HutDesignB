import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Landing2/Hero.jsx"
import Historia from "./sections/Landing2/Historia.jsx";
import { QuemSomos } from "./sections/Landing2/QuemSomos.jsx";
import { Orcamento } from "./sections/Landing2/Orcamento.jsx";
import Footer from "./components/Footer.jsx";
import Section3 from './sections/Landing2/Section3/Section3';
import Section1 from './sections/Projetos/Section1.jsx';
import CTASection from "./sections/Projetos/CTASection.jsx";

function App() {
  // página inicial padrão
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <Header setSecaoAtiva={setSecaoAtiva} />

      {/* Conteúdo principal */}
      <div className="flex-grow">
        {/* renderiza apenas o bloco correspondente atual */}

        {secaoAtiva === "home" && (
          <>
          <Hero />
          <Historia />
          <QuemSomos />
          <Section3 />
          <Orcamento />
          </>
        )}

        {secaoAtiva === "projetos" && (
          <>
          <Section1 /> {/* section1 da landing projetos */}
          {/* <Historia /> */}
          <CTASection />
          </>
        )}
        {secaoAtiva === "servicos" && (
          <>
          <Hero />
          <Historia />
          <QuemSomos />
          <Section3 />
          <Orcamento />
          </>
        )}
        {secaoAtiva === "equipe" && (
          <>
          <Hero />
          <Historia />
          <QuemSomos />
          <Section3 />
          <Orcamento />
          </>
        )}
        {secaoAtiva === "contato" && (
          <>
          <Hero />
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