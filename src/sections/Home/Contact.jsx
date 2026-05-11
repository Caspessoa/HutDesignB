import React from "react";

export default function Contact(){
    return (
        <section className="w-full py-20 pt-40 pb-30 bg-[#F9FAFB]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 rounded-xl flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-[#6B0F9C] min-h-[13.5rem] py-8 md:py-0">
                <div className="px-4 text-center md:text-left">
                    <h2 className="text-white text-2xl font-bold">Pronto para tirar sua ideia do papel?</h2>
                    <p className="text-gray-300 text-base mt-4">Nossa equipe está pronta para desenvolver a solução perfeita para o seu negócio.</p>
                </div>
                <div className="flex-none md:flex-1 flex justify-center md:justify-end px-4">
                    <a href="#contato" className="inline-block px-6 py-3 bg-[#A4DE02] text-[#6B0F9C] font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300 whitespace-nowrap">
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </section>
    )
}