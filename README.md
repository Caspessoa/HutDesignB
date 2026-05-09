# Hut8 - Processo Seletivo (Etapa Final)

Repositório dedicado ao desenvolvimento do site da **Hut8** (Empresa Júnior de Computação da UFPel). Este projeto integra a etapa final do processo seletivo de estágio.

## Tecnologias Utilizadas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

## Equipe

* [Cassiano Pessoa](https://github.com/Caspessoa)
* [Alan Farias](https://github.com/AlanF4rias)
* [Pedro Bortoli](https://github.com/PedroMBortoli)
* [Kenzo Takahashi](https://github.com/KenzoTakas)

## Estrutura de Pastas

```text
├── public/                 # Arquivos estáticos globais
├── src/
│   ├── assets/             # Mídias modularizadas por componente/seção
│   │   ├── EquipeGallery/
│   │   ├── EquipeMembers/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HomeAbout/
│   │   ├── HomeHero/
│   │   ├── HomePortfolio/
│   │   ├── ProjetosHero/
│   │   ├── ProjetosPortfolio/
│   │   ├── ServicosCards/
│   │   └── WhatsAppButton/
│   ├── components/         # Componentes globais e reutilizáveis
│   ├── data/               # Arquivos de dados estáticos ou mocks
│   ├── sections/           # Páginas e suas seções específicas
│   │   ├── Equipe/
│   │   ├── Home/
│   │   ├── Projetos/
│   │   └── Servicos/
│   ├── App.jsx             # Componente raiz
│   ├── index.css           # Estilos globais e Tailwind
│   └── main.jsx            # Ponto de entrada do React
├── .gitignore
├── eslint.config.js        # Configuração do linter
├── index.html              # Template base
├── LICENSE                 # Licença do projeto
├── package-lock.json       # Árvore de dependências travada
├── package.json            # Scripts e dependências do projeto
├── README.md               # Documentação principal
└── vite.config.js          # Configuração do bundler
``` 

## Como Executar Localmente

### Pré-requisitos
* **[Node.js](https://nodejs.org/)** instalado.
* **[Git](https://git-scm.com/)** instalado.

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Caspessoa/HutDesignB.git
   ```

2. **Acesse o diretório do projeto**
   ```bash
   cd HutDesignB
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

Acesse o link local gerado no terminal (ex: `http://localhost:5173/`) no seu navegador.
