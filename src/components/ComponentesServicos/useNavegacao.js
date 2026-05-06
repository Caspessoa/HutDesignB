// hooks/useNavegacao.js
export const useNavegacao = (setSecaoAtiva) => {
  const navegarParaServico = (idAlvo) => {
    // 1. Troca a aba
    setSecaoAtiva("servicos");

    // 2. Aguarda a renderização e faz o scroll
    setTimeout(() => {
      const elemento = document.getElementById(idAlvo);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return { navegarParaServico };
};