import TeamMetting from '../../assets/TeamMetting.png';

export function QuemSomos() {
  return (
    <section className="w-full py-20 pt-20 pb-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="relative flex items-center gap-6">
                {/* Imagem esquerda */}
                <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow">
                    <img src={TeamMetting} alt="Antes" className="w-full h-full object-cover"/>
                </div>
                {/* Imagem direita */}
                <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow">
                    <img src="/assets/.png" alt="Depois" className="w-full h-full object-cover"/>
                </div>
                {/* Botão central */}
                <button className="absolute left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"></button>
            </div>
            <div>

            </div>
        </div>
    </section>
);
}