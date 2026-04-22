export function FeaturedCardPastejando({ titulo, descricao, imagem, tag, tecnologias, icone }) {
  return (
    <div className="w-full h-[494px] bg-white rounded-[24px] flex flex-col overflow-hidden border border-[#B2B1BA33] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
      
      {/* Wrapper da Imagem */}
      <div className="w-full h-[256px] overflow-hidden rounded-t-[24px]">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover object-[center_32%]" 
        />
      </div>

      {/* Conteúdo Branco */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#323239] leading-8 m-0">
              {titulo}
            </h2>
            <span className="font-['Inter'] font-extrabold text-[14px] text-zinc-500 uppercase tracking-[1.4px]">
              {tag}
            </span>
          </div>

          {icone && (
            <img 
              src={icone} 
              alt="ícone" 
              className="w-[32px] h-[32px] object-contain" 
            />
          )}
      
        </div>

        <p className="max-w-[400px] font-['Inter'] text-[16px] leading-[26px] text-zinc-600 my-4">
          {descricao}
        </p>

        {/* Linha de Tecnologias */}
        <div className="flex gap-2">
          {tecnologias && tecnologias.map((tech) => (
            <span 
              key={tech} 
              className="font-['Inter'] font-medium text-[12px] text-[#5F5E67] bg-zinc-100 px-3 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}