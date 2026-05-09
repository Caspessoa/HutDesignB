import React from "react";
import { useState } from "react";
import { useNavegacao } from "./components/ServicosCards/useNavegacao.js";
import Header from "./components/Header.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Footer from "./components/Footer.jsx";
import Bg1 from "./components/Backgrounds/Bg1.jsx";
import Bg2 from "./components/Backgrounds/Bg2.jsx";

import HomeHero from "./sections/Home/Hero.jsx"
import HomeStats from "./sections/Home/Stats.jsx";
import HomeAbout from "./sections/Home/About.jsx";
import HomePortfolio from './sections/Home/Features/Portfolio';
import HomeContact from "./sections/Home/Contact.jsx";

import ProjetosHero from './sections/Projetos/Hero.jsx';
import ProjetosCTA from './sections/Projetos/CTA.jsx';
import ProjetosPortfolio from "./sections/Projetos/Portfolio.jsx";

import ServicosHero from "./sections/Servicos/Hero.jsx" 
import ServicosCards from './sections/Servicos/Cards.jsx'
import ServicosCTA from "./sections/Servicos/CTA.jsx";

import EquipeHero from './sections/Equipe/Hero.jsx';
import EquipeMembers from './sections/Equipe/Members.jsx';
import EquipeGallery from './sections/Equipe/Gallery.jsx';


function App() {
  // página inicial padrão
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  
  const { navegarParaServico } = useNavegacao(setSecaoAtiva);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <Header setSecaoAtiva={setSecaoAtiva} />

      {/* Conteúdo principal */}
      <div className="grow">
        {/* renderiza apenas o bloco correspondente atual */}

        {secaoAtiva === "home" && (
          <>
          <HomeHero />
          <WhatsAppButton />
          <HomeStats />
          <HomeAbout />
          <HomePortfolio navegarParaServico={navegarParaServico} />
          <HomeContact />
          </>
        )}

        {secaoAtiva === "projetos" && (
          <>
          <Bg1>
            <WhatsAppButton />
            <ProjetosHero /> {/* section1 da landing projetos */}
            <ProjetosPortfolio />
            <ProjetosCTA />
          </Bg1>
          </>
        )}
        {secaoAtiva === "servicos" && (
          <>
          <ServicosHero/>
          <WhatsAppButton />
          <ServicosCards/>
          <ServicosCTA/>
          </>
        )}
        {secaoAtiva === "equipe" && (
          <>
          <Bg2>
            <EquipeHero />
            <WhatsAppButton />
            <EquipeMembers />
            <EquipeGallery />
          </Bg2>
          </>
        )}
        
      </div>

      {/* Footer sempre no final */}
      <Footer />
      
    </div>
  );
}
export default App;