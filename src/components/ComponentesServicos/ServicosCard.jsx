


const ServicosCard = ({ title, description, imageUrl, imageAlt, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8`}>
      
      {/* Lado do Conteúdo (Texto) */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Lado da Imagem */}
      <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-100 flex items-center justify-center border-l border-gray-200">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Espaço para Imagem</span>
        )}
      </div>
      
    </div>
  );
};

export default ServicosCard;