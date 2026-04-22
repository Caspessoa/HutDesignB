

export function FeaturedCardToni({ titulo, descricao, imagem, tag, tagsSecundarias = [], metrica, corSombra, icone }) {

  const estiloFundo = {
    backgroundImage: `linear-gradient(to top, ${corSombra || 'rgba(0,0,0,0.9)'} 0%, rgba(0,0,0,0) 70%), url(${imagem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div 
      style={estiloFundo}
      className="relative flex-1 min-w-[320px] h-[494px] rounded-[40px] overflow-hidden flex flex-col justify-end p-10 transition-all duration-500 cursor-pointer border border-white/10 hover:scale-[1.01] group transform-gpu"
    >
      <div className="relative z-10 flex flex-col gap-[10px] mt-auto">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center">
          {tag && (
            <span className="bg-[#D4FF37] text-[#344E00] text-[12px] font-[800] px-3 py-1 h-[24px] flex items-center justify-center rounded-full uppercase leading-[16px]">
              {tag}
            </span>
          )}

          {tagsSecundarias.map((t, index) => (
            <span key={index} className="bg-white/10 backdrop-blur-[12px] text-white text-[11px] font-[500] px-3 py-1 h-[24px] flex items-center justify-center rounded-full border border-white/10 whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>

        {/* Título */}
        <h2 className="text-white text-[2.2rem] font-[700] leading-tight m-0">
          {titulo}
        </h2>

        {/* Descrição */}
        <p className="text-white/80 text-[0.95rem] font-[400] leading-[1.6] max-w-[440px] mb-4">
          {descricao}
        </p>

        {/* Rodapé */}
        <div className="flex justify-between items-end w-full">
          {metrica ? (
            <div className="bg-[#CAFF6F33] border border-[#CAFF6F4D] backdrop-blur-[12px] rounded-[16px] px-4 py-2 flex flex-col justify-center min-h-[55px]">
              <span className="text-[#CAFF6F] font-[700] text-[18px] leading-[22.5px] font-['Inter']">
                {metrica.valor}
              </span>
              <span className="text-white/60 font-[700] text-[10px] uppercase font-['Inter']">
                {metrica.label}
              </span>
            </div>
          ) : <div />}

          <a href="#caso" className="text-[#CAFF6F] font-[600] flex items-center gap-[10px] whitespace-nowrap group">
            <span className="border-b border-trnsparent group-hover:border-[#CAFF6F] transition-all">Ver Caso</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}