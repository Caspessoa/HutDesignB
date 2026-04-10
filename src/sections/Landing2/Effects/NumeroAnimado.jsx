import { useState, useEffect } from 'react';

export function NumeroAnimado({ alvo, sufixo }) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    let atual = 0;
    const duracao = 2000; // Tempo total da animação (2 segundos)
    const taxaAtualizacao = 16; // Aproximadamente 60 frames por segundo
    const passos = duracao / taxaAtualizacao;
    const incremento = alvo / passos;

    const timer = setInterval(() => {
      atual += incremento;
      if (atual >= alvo) {
        setValor(alvo);
        clearInterval(timer);
      } else {
        setValor(Math.ceil(atual));
      }
    }, taxaAtualizacao);

    // Limpa a memória quando a animação termina ou o componente some
    return () => clearInterval(timer);
  }, [alvo]);

  return (
    <span className="text-[#6A1B9A] text-5xl font-black tracking-tighter inline-block scale-y-90 scale-x-105">
      {valor}{sufixo}
    </span>
  );
}