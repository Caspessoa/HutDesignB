import { IoLink, IoSchoolSharp } from "react-icons/io5";

export default function EquipeSection2(){
    return(
        <section className="relative">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* PARTE INFERIOR: PROFESSORES ELO */}
                <div className="mt-32">

                    {/* Título com linha divisória lateral */}
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-[#6b0f9c] text-3xl font-extrabold whitespace-nowrap">Professores Elo</h2>
                        <div className="h-px bg-gray-200 w-full"></div>
                    </div>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
                        
                            {/* Fotos */}
                            <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
                                <img src="/src/assets/LandingEquipe/Professores/Dr. Marcos Silva.png" alt="Foto" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-900 font-bold text-xl">Dr. Marcos Silva</h3>
                                <span className="text-[#6B0F9C] text-sm font-semibold mt-1">Coordenador de Inovação</span>
                                <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                                Especialista em Inteligência Artificial com mais de 15 anos de atuação acadêmica e industrial. Lidera a visão tecnológica da Hut8.
                                </p>
                                <div className="flex gap-4 mt-4 text-gray-400">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B0F9C] transition-colors">
                                    <IoLink size={20} />
                                </a>
                                
                                {/* Link 2 (Ex: Currículo Lattes) */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B0F9C] transition-colors">
                                    <IoSchoolSharp size={20} />
                                </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
                        
                            {/* Fotos */}
                            <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
                                <img src="/src/assets/LandingEquipe/Professores/Dra. Helena Costa.png" alt="Foto" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-900 font-bold text-xl">Dr. Helena Costa</h3>
                                <span className="text-[#6B0F9C] text-sm font-semibold mt-1">Mentora de Engenharia</span>
                                <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                                Ph.D em Engenharia de Software, foca em escalabilidade e arquiteturas robustas para produtos de alto impacto.
                                </p>
                                <div className="flex gap-4 mt-4 text-gray-400">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B0F9C] transition-colors">
                                        <IoLink size={20} />
                                    </a>
                                    
                                    {/* Link 2 (Ex: Currículo Lattes) */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B0F9C] transition-colors">
                                        <IoSchoolSharp size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}