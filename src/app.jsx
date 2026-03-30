import React from 'react';
import Footer from './components/footer.jsx'; // Importa o Footer que você criou

function App() {
  return (
    // Essa div com min-h-screen serve apenas para o Footer ir lá pro final da tela, 
    // mesmo que a página esteja vazia agora.
    <div className="min-h-screen flex flex-col justify-end bg-gray-50">
      
      {/* Aqui você pode colocar um texto temporário só pra ver o espaço da página */}
      <div className="flex-grow p-10 text-center text-gray-400">
        Aqui vai entrar o conteúdo da página no futuro...
      </div>

      {/* O seu Footer renderizado aqui */}
      <Footer />
      
    </div>
  );
}

export default App;