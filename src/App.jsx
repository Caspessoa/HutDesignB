import React from "react";
import { Header } from "./components/Header.jsx";
import { Historia } from "./sections/Landing2/Historia.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Conteúdo principal */}
      <div className="flex-grow">
        <Header />
        <Historia />
      </div>

      {/* Footer sempre no final */}
      <Footer />
      
    </div>
  );
}

export default App;