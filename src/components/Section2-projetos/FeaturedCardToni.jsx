export function FeaturedCardToni({ titulo, descricao, imagem, tag, tagsSecundarias = [], metrica, corSombra, icone }) {

  const estiloFundo = {
    backgroundImage: `linear-gradient(to top, ${corSombra || 'rgba(0,0,0,0.9)'} 0%, rgba(0,0,0,0) 70%), url(${imagem})`,
  };

  return (
    <div 
      style={estiloFundo}
      className="relative w-full h-[494px] rounded-[40px] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-end p-10 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer border border-white/10 hover:scale-[1.01]"
    >
      <div className="relative z-10 flex flex-col gap-[10px]">
        
        {/* Wrapper de Tags */}
        <div className="flex flex-wrap gap-2 items-center">
          {tag && (
            <span className="bg-[#D4FF37] text-[#344E00] text-[12px] font-[800] px-3 py-1 h-[24px] flex items-center justify-center rounded-full uppercase tracking-wider leading-[16px]">
              {tag}
            </span>
          )}

          {tagsSecundarias.map((t, index) => (
            <span 
              key={index} 
              className="bg-white/10 backdrop-blur-[12px] text-white text-[11px] font-[500] px-3 py-1 h-[24px] flex items-center justify-center rounded-full border border-white/10 whitespace-nowrap leading-none"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Título */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-white text-[2.2rem] font-[700] m-0 leading-tight">
            {titulo}
          </h2>
        </div>

        <p className="text-white/80 text-[0.95rem] font-[400] leading-[1.6] max-w-[55%] mb-4">
          {descricao}
        </p>

        {/* Rodapé: Métrica e Link */}
        <div className="flex justify-between items-end w-full">
          {metrica ? (
            <div className="bg-[#CAFF6F33] border border-[#CAFF6F4D] backdrop-blur-[12px] rounded-[16px] px-4 py-2 flex flex-col justify-center min-h-[55px]">
              <span className="text-[#CAFF6F] font-[700] text-[18px] leading-[22.5px] font-['Inter']">
                {metrica.valor}
              </span>
              <span className="text-white/60 font-[700] text-[10px] leading-[15px] font-['Inter'] uppercase tracking-[-0.5px]">
                {metrica.label}
              </span>
            </div>
          ) : <div />}

          <a href="#caso" className="text-[#CAFF6F] font-[600] flex items-center gap-[10px] whitespace-nowrap group ">
            <span className="border-b border-transparent group-hover:border-white transition-all">Ver Caso</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}