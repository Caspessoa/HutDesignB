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

## Estrutura de Pastas (genérico por enquanto)

```text
├── public/             # Arquivos estáticos não processados
├── src/
│   ├── assets/         # Imagens, vetores e mídias do projeto
│   ├── components/     # Componentes globais e reutilizáveis (Header, Footer, Backgrounds)
│   ├── sections/       # Estruturas de seção divididas por páginas (Home, Projetos, Equipe)
│   ├── App.jsx         # Componente raiz e controle de estado de renderização
│   ├── main.jsx        # Ponto de entrada e injeção do React no DOM
│   └── index.css       # Diretivas do Tailwind e estilos globais
├── index.html          # Template HTML principal
├── package.json        # Mapeamento de dependências e scripts
├── tailwind.config.js  # Configurações de design system e tema
└── vite.config.js      # Configurações do bundler
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
