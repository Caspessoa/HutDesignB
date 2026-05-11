import { useState } from 'react';
import logoHut from '../assets/Header/hut.svg';

export default function Header({ setSecaoAtiva, setShowForm  }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função auxiliar para fechar o menu ao clicar em um link no mobile
    const handleNav = (secao) => {
        setSecaoAtiva(secao);
        setIsMenuOpen(false);
    };
    
    return (
        <header className="border-b border-gray-200 w-full bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center gap-4">
                <div className="flex items-center">
                    <img 
                    src={logoHut} 
                    alt="Logo Hut8" 
                    className="w-15 h-15 drop-shadow-[0_5px_7px_rgba(132,204,22,0.3)]"/>
                    <span className="text-purple-800 text-2xl font-bold">Hut8</span>
                </div>
                
                {/* Botão Mobile (Hambúrguer) visível apenas em telas menores */}
                <button 
                    className="md:hidden p-2 text-gray-600 focus:outline-none cursor-pointer"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Navegação Desktop (Escondida no mobile) */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-6">
                        <li><button onClick={() => handleNav('home')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Home</button></li>
                        <li><button onClick={() => handleNav('projetos')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Projetos</button></li>
                        <li><button onClick={() => handleNav('servicos')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Serviços</button></li>
                        <li><button onClick={() => handleNav('equipe')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Nossa Equipe</button></li>
                    </ul>
                    <button onClick={() => { setShowForm(true); setIsMenuOpen(false); }} className="bg-purple-800 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-purple-800/40 hover:bg-purple-900 cursor-pointer">
                        Fale Conosco
                    </button>
                </nav>
            </div>

            {/* Fundo escurecido ao abrir o menu lateral */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden" 
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
            
            {/* Menu Lateral Mobile */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                
                {/* Botão de Fechar */}
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Links Mobile */}
                <ul className="flex flex-col gap-6 px-6">
                    <li><button onClick={() => handleNav('home')} className="text-xl text-gray-600 font-medium hover:text-purple-800 w-full text-left cursor-pointer">Home</button></li>
                    <li><button onClick={() => handleNav('projetos')} className="text-xl text-gray-600 font-medium hover:text-purple-800 w-full text-left cursor-pointer">Projetos</button></li>
                    <li><button onClick={() => handleNav('servicos')} className="text-xl text-gray-600 font-medium hover:text-purple-800 w-full text-left cursor-pointer">Serviços</button></li>
                    <li><button onClick={() => handleNav('equipe')} className="text-xl text-gray-600 font-medium hover:text-purple-800 w-full text-left cursor-pointer">Nossa Equipe</button></li>
                    <li className="mt-4">
                        <button onClick={() => { setShowForm(true); setIsMenuOpen(false); }} className="bg-purple-800 text-white font-medium w-full py-3 rounded-full shadow-lg cursor-pointer">
                            Fale Conosco
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}