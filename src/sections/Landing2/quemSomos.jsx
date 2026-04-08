import React from 'react';
import TeamMetting from '../../assets/TeamMetting.png';
import ufpel from '../../assets/ufpel.png';
import { IoSchoolSharp } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export function QuemSomos() {
  return (
        <section className="w-full py-20 pt-20 pb-20 bg-[#F9FAFB]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center gap-6">
                <div className="relative flex items-center justify-center bg-gray-50">
                    {/* Imagem da Esquerda */}
                    <div className="w-[280px] h-[250px] overflow-hidden flex-shrink-0 transform translate-y-8">
                    <img src={TeamMetting} alt="Equipe trabalhando" className="w-full h-full object-cover"/>
                    </div>
                    {/* Imagem da Direita */}
                    <div className="w-[230px] h-[250px] rounded-xl overflow-hidden flex-shrink-0 transform -translate-y-8">
                        <img src={ufpel} alt="Fachada UFPEL" className="w-full h-full object-cover"/>
                    </div>
                    {/* Ícone Central*/}
                    <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-[10px] shadow-lg">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#65158a]">
                            <IoSchoolSharp size={24} color="#fff" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-sm font-semibold text-[#A4DE02]">QUEM SOMOS</h2>
                    <h1 className="text-3xl font-bold text-[#1F2937] mt-2 mb-4">Trazemos o mercado de trabalho para dentro do meio acadêmico</h1>
                    <p className="text-gray-500 text-base leading-relaxed">Fundada em maio de 2014, a Hut8 é a empresa júnior dos cursos de Ciência e engenharia da computação, vinculada a Universidade Federal de Pelotas.</p>
                    <p className="text-gray-500 text-base leading-relaxed mt-4">Sem fins lucrativos, somos constituídos por uma equipe de jovens universitários que buscam obter conhecimento e experiência de mercado além das grades curriculares.</p>
                    <div className="flex flex-col gap-8 py-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#A4DE02]/20">
                                <IoCheckmarkCircle size={20} color="#A4DE02" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-[#1F2937]">Qualidade Garantida</h3>
                                <p className="text-gray-500 text-sm">Processos supervisionados por Professores Doutores da UFPel.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#A4DE02]/20">
                                <RiMoneyDollarCircleFill size={20} color="#A4DE02" />
                            </div>
                            <div className="flex flex-col gap-1">
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