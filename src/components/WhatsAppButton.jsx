import React, { useState } from 'react';
import whatsAppIcon from '../assets/whatsAppIcon.svg';

const WhatsAppButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const link = `https://wa.me/5553999999999?text=Nome: ${formData.get('nome')}`;
    window.open(link, '_blank');
    setShowForm(false);
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
        
        {/* BOTÃO PRINCIPAL */}
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

        {showForm && (
          <div className="absolute top-full mt-4 right-0 bg-white w-80 rounded-2xl shadow-2xl p-6 
                          animate-in fade-in zoom-in slide-in-from-top-2 duration-300 origin-top-right">
            <h3 className="font-bold text-gray-800 mb-4">Hut8</h3>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <input 
                name="nome"
                required
                placeholder="Seu Nome"
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