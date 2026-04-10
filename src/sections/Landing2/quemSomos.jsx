import React from 'react';
import TeamMetting from '../../assets/TeamMetting.png';
import ufpel from '../../assets/ufpel.png';
import { IoSchoolSharp } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export function QuemSomos() {
  return (
        <section className="w-full py-20 pt-20 pb-20 bg-[#F9FAFB]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="relative flex flex-col md:flex-row items-center justify-center bg-gray-50 rounded-lg p-4 md:p-6 w-full lg:w-auto">
                    {/* Imagem da Esquerda */}
                    <div className="w-full md:w-[280px] h-[200px] md:h-[250px] overflow-hidden flex-shrink-0 transform md:translate-y-8 mb-4 md:mb-0">
                    <img src={TeamMetting} alt="Equipe trabalhando" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    {/* Imagem da Direita */}
                    <div className="w-full md:w-[230px] h-[200px] md:h-[250px] rounded-xl overflow-hidden flex-shrink-0 transform md:-translate-y-8 md:ml-4">
                        <img src={ufpel} alt="Fachada UFPEL" className="w-full h-full object-cover"/>
                    </div>
                    {/* Ícone Central*/}
                    <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-[10px] shadow-lg">
                        <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#65158a]">
                            <IoSchoolSharp size={20} md:size={24} color="#fff" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-sm font-semibold text-[#A4DE02]">QUEM SOMOS</h2>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1F2937] mt-2 mb-4">Trazemos o mercado de trabalho para dentro do meio acadêmico</h1>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">Fundada em maio de 2014, a Hut8 é a empresa júnior dos cursos de Ciência e engenharia da computação, vinculada a Universidade Federal de Pelotas.</p>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4">Sem fins lucrativos, somos constituídos por uma equipe de jovens universitários que buscam obter conhecimento e experiência de mercado além das grades curriculares.</p>
                    <div className="flex flex-col gap-6 md:gap-8 py-6 md:py-8">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#A4DE02]/20 mx-auto sm:mx-0">
                                <IoCheckmarkCircle size={20} color="#A4DE02" />
                            </div>
                            <div className="flex flex-col gap-1 text-center sm:text-left">
                                <h3 className="text-lg font-semibold text-[#1F2937]">Qualidade Garantida</h3>
                                <p className="text-gray-500 text-sm">Processos supervisionados por Professores Doutores da UFPel.</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#A4DE02]/20 mx-auto sm:mx-0">
                                <RiMoneyDollarCircleFill size={20} color="#A4DE02" />
                            </div>
                            <div className="flex flex-col gap-1 text-center sm:text-left">
                                <h3 className="text-lg font-semibold text-[#1F2937]">Custo-Benefício</h3>
                                <p className="text-gray-500 text-sm">Valores acessíveis e investimento no futuro da tecnologia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 );
}