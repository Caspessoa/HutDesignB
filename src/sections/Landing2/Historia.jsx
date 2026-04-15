import { NumeroAnimado } from "./Effects/NumeroAnimado";

export default function Historia() {
  return (
    // Container principal: centraliza todos os blocos na tela
    
    <section className="flex flex-wrap justify-center items-center py-8 w-full border-t border-gray-200 bg-white border-b border-gray-200 gap-8">
    
        {/* Com borda na direita */}
        <div className="flex flex-col items-center px-12 md:px-16 border-r border-gray-200">
            <NumeroAnimado alvo={10} sufixo="+" />
            {/* mt-2 dá um respiro entre o número e o texto */}
            <span className="text-gray-500 text-sm font-medium mt-2 tracking-wider">ANOS DE HISTÓRIA</span>
        </div>

        {/*Com borda na direita */}
        <div className="flex flex-col items-center px-12 md:px-16 border-r border-gray-200">
            <NumeroAnimado alvo={50} sufixo="+" />
            <span className="text-gray-500 text-sm font-medium mt-2 tracking-wider">PROJETOS ENTREGUES</span>
        </div>

        {/*(com borda) */}
        <div className="flex flex-col items-center px-12 md:px-16 border-r border-gray-200">
            <NumeroAnimado alvo={100} sufixo="+" />
            <span className="text-gray-500 text-sm font-medium mt-2 tracking-wider">MEMBROS IMPACTADOS</span>
        </div>
        
        {/* (SEM borda direita, pois é o último) */}
        <div className="flex flex-col items-center px-12 md:px-16">
            <NumeroAnimado alvo={100} sufixo="%" />
            <span className="text-gray-500 text-sm font-medium mt-2 tracking-wider">CLIENTES SATISFEITOS</span>
        </div>

    </section>
  );
}