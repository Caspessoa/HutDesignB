const ServicosCard = ({ title, description, topics }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">

      {/* Título */}
      <h3 className="text-2xl font-bold mb-3 text-gray-800">
        {title}
      </h3>

      {/* Descrição curta */}
      <p className="text-gray-600 mb-6">
        {description}
      </p>

      {/* Tópicos */}
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
  );
};

export default ServicosCard;