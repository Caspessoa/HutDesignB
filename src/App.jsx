import React from "react";
import { Header } from "./components/Header.jsx";
import { Historia } from "./sections/Landing2/Historia.jsx";
import { QuemSomos } from "./sections/Landing2/quemSomos.jsx";
import { Orcamento } from "./sections/Landing2/Orcamento.jsx";
import Footer from "./components/Footer.jsx";
import Section3 from './sections/Landing2/Section3/Section3';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Conteúdo principal */}
      <div className="flex-grow">
        <Header />
        <Historia />
        <QuemSomos />
        <Orcamento />
      </div>

      {/* Footer sempre no final */}
      <Footer />
      
    </div>
  );
}
export default App;