import React from 'react';
import { MessageCircle } from 'lucide-react';
import whatsAppIcon from '../assets/whatsAppIcon.svg';

const WhatsAppButton = () => {
  // Ajuste o número (DDI + DDD + Número) e a mensagem
  const phoneNumber = "5553999999999"; 
  const message = "Olá! Gostaria de falar com a Hut8.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] 
             w-14 h-14 hover:w-44 bg-[#25D366] 
             rounded-full shadow-2xl flex items-center 
             transition-all duration-500 ease-in-out group overflow-hidden"
  aria-label="Conversar no WhatsApp"
>
  {/* Container do ícone: mantém ele fixo na esquerda mesmo com o botão crescendo */}
  <div className="min-w-[56px] h-14 flex items-center justify-center">
    <img 
      src={whatsAppIcon} 
      alt="WhatsApp" 
      className="w-7 h-7 object-contain group-hover:rotate-12 transition-transform" 
    />
  </div>
  
  {/* Texto que "aparece" quando a div estica */}
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6 font-bold text-white whitespace-nowrap">
    Fale conosco
  </span>
</a>
  );
};

export default WhatsAppButton;