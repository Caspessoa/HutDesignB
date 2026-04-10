import logoHut from '../assets/hut.svg';

export default function Header({ setSecaoAtiva }){
    return (
        <header className="border-b border-gray-200 w-full bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-17 py-2 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center">
                    <img 
                    src={logoHut} 
                    alt="Logo Hut8" 
                    className="w-15 h-15 drop-shadow-[0_5px_7px_rgba(132,204,22,0.3)]"/>
                    <span className="text-purple-800 text-2xl font-bold">Hut8</span>
                </div>
                
                <nav className="flex flex-wrap items-center gap-4 md:gap-10">
                    <ul className="flex flex-wrap gap-4 md:gap-6">
                        <li><button onClick={() => setSecaoAtiva('home')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Home</button></li>
                        <li><button onClick={() => setSecaoAtiva('projetos')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Projetos</button></li>
                        <li><button onClick={() => setSecaoAtiva('servicos')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Serviços</button></li>
                        <li><button onClick={() => setSecaoAtiva('equipe')} className="text-gray-600 font-medium hover:text-purple-800 cursor-pointer">Nossa Equipe</button></li>
                        
                    </ul>
                    <button onClick={() => setSecaoAtiva('contato')} className="bg-purple-800 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-purple-800/40 hover:bg-purple-900 cursor-pointer">
                    Fale Conosco
                    </button>
                </nav>  

            </div>
        </header>
    );
}