export const ServicosCard = ({ id, title, description, topics, imageUrl, imageAlt}) => {
  return (
    <div id={id} className=
      "bg-white rounded-2xl shadow-md p-8 w-full hover:shadow-lg transition flex flex-col lg:flex-row gap-10 items-center scroll-mt-28">
      
      {/* Coluna do Conteúdo */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-center sm:text-left">
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