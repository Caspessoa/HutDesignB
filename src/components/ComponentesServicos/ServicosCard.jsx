// Adicionei a prop "reverse" aqui
const ServicosCard = ({ title, description, topics, imageUrl, imageAlt, reverse }) => {
  return (
    <div className={`
      bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition 
      flex flex-col lg:flex-row gap-10 items-center
      ${reverse ? 'lg:flex-row-reverse' : ''} // Isso faz a mágica da inversão
    `}>
      
      {/* Coluna do Conteúdo */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {topics?.map((topic, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-800 mb-2">
                {topic.title}
              </h4>

              <ul className="space-y-1 text-gray-600 text-sm">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna da Imagem */}
      {imageUrl && (
        <div className="w-full lg:w-1/3 flex justify-center flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={imageAlt || title}
            className="w-full max-w-[320px] h-auto object-contain rounded-xl"
          />
        </div>
      )}

    </div>
  );
};

export default ServicosCard;