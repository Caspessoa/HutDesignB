import React, { useState } from 'react';
import whatsAppIcon from '../assets/whatsAppIcon.svg';

const WhatsAppButton = () => {

  // Controle de estado para abrir/fechar o formulário e expandir o botão
  const [showForm, setShowForm] = useState(false);

  // Impede o navegador de recarregar a página
  const handleFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  // Captura dos dados pelo 'name' do input
  const nome = formData.get('nomeUsuario');
  const empresa = formData.get('nomeEmpresa') || 'Não informada';
  const motivo = formData.get('motivoContato');
  const email = formData.get('email');
  const mensagem = formData.get('mensagem');

  // Esqueleto da mensagem (O %0A é a quebra de linha)
  const mensagemPronta = 
    `*Nome:* ${nome}%0A` +
    `*Empresa:* ${empresa}%0A` +
    `*E-mail:* ${email}%0A%0A`+
    `*Motivo do Contato:* ${motivo}%0A` +
    `*Mensagem:* ${mensagem}`;

  // Redireciona para a API do WhatsApp com o esqueleto da mensagem pronto (Numero genérico não funcional, quando for utilizar necessario mudar)
  const urlFinal = `https://wa.me/55539999999?text=${mensagemPronta}`;
  
  window.open(urlFinal, '_blank'); 
  setShowForm(false); // Fecha o formulário
};

  return (
    <>
      {showForm && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] animate-in fade-in duration-300"
          onClick={() => setShowForm(false)}
        />
      )}

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[200]">
        
        {/* BOTÃO PRINCIPAL - Apenas com a função de abrir o formulario para o usuário */}
        <button
          onClick={() => setShowForm(!showForm)}
          className={`h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center 
                    transition-all duration-500 ease-in-out overflow-hidden border-none cursor-pointer group
                    ${showForm ? 'w-44' : 'w-14 hover:w-44'}`}
          aria-label="Conversar no WhatsApp"
        >
          <div className="min-w-[56px] h-14 flex items-center justify-center">
            <img src={whatsAppIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
          </div>

          <span className={`transition-opacity duration-300 pr-6 font-bold text-white whitespace-nowrap
                          ${showForm ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            Fale conosco
          </span>
        </button>

        {/* Formulário - (quando aberto por meio do botão executa essa estrutura) */}
        {showForm && (
          <div className="absolute top-full mt-4 right-0 bg-white w-80 [@media(max-height:700px)]:w-[600px] rounded-2xl shadow-2xl p-6 max-h-[42vh] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent animate-in fade-in zoom-in slide-in-from-top-2 duration-300 origin-top-right z-[210]">

            <h3 className="font-bold text-gray-800 mb-4">Contato  Hut8</h3>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <input 
                name="nomeUsuario"
                required
                placeholder="Seu Nome"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#25D366] text-black"
              />
              <input 
                name="nomeEmpresa"
                placeholder="Sua empresa"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#25D366] text-black"
              />
              <input 
                name="motivoContato"
                required
                placeholder="Motivo do contato"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#25D366] text-black"
              />
              <input 
                name="email"
                type="email"
                required
                placeholder="e-mail"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#25D366] text-black"
              />
              <textarea 
                name="mensagem"
                required
                placeholder="Como podemos ajudar?"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl h-24 resize-none outline-none focus:ring-2 focus:ring-[#25D366] text-black"
              />
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:brightness-110 transition-all"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;