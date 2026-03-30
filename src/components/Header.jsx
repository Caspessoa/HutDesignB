import logoHut from '../assets/hut.svg';

export function Header(){
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
                        <li><a href="#home" className="text-gray-600 font-medium">Home</a></li>
                        <li><a href="#projetos" className="text-gray-600 font-medium">Projetos</a></li>
                        <li><a href="#servicos" className="text-gray-600 font-medium">Serviços</a></li>
                        <li><a href="#equipe" className="text-gray-600 font-medium">Nossa Equipe</a></li>
                    </ul>
                    <a href="#contato" className="bg-purple-800 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-purple-800/40 hover:bg-purple-900 transition-colors">
                    Fale Conosco
                    </a>
                </nav>  

            </div>
        </header>
    );
}