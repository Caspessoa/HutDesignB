export function FeaturedCardAdmin({ titulo, descricao, imagem }) {
  return (
    
    <div className="flex w-full max-w-[984.17px] h-[494px] bg-white rounded-[24px] overflow-hidden border border-[#B2B1BA33] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.01] transform-gpu cursor-pointer">
      
      {/* Lado Esquerdo: Imagem estática */}
      <div className="w-1/2 bg-[#F4F4F5] flex items-center justify-center">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Lado Direito: Conteúdo */}
      <div className="w-1/2 p-8 flex flex-col justify-center gap-4">
        <div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#18181B] mb-2">
            {titulo}
          </h2>
          <p className="font-['Inter'] text-[14px] leading-5 text-[#71717A]">
            {descricao}
          </p>
        </div>

        {/* Lista de benefícios */}
        <ul className="list-none p-0 flex flex-col gap-2 font-['Inter'] text-[13px] font-semibold text-[#18181B]">
          <li className="flex items-center">
            <span className="text-[#65A30D] mr-2 font-bold">✓</span> Conciliação Automática
          </li>
          <li className="flex items-center">
            <span className="text-[#65A30D] mr-2 font-bold">✓</span> Integração com APIs Bancárias
          </li>
        </ul>

        {/* Botão */}
        <button className="mt-2 w-full py-[10px] border-[1.5px] border-[#813BBE] bg-transparent text-[#813BBE] rounded-[12px] font-['Inter'] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#813BBE] hover:text-white">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}