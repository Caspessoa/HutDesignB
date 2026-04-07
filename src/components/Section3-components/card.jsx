import React from 'react';
import './card.css';

export default function CardServico({ icone, titulo, descricao, corFundoIcone }) {
  return (
    <div className="estilo-cards">
      
      <div className={`estilo-icones ${corFundoIcone}`}>
        <img src={icone} alt={titulo} />
      </div>

      <h2 className="estilo-titulo-card">{titulo}</h2>

      <p className="estilo-texto-card">
        {descricao}
      </p>

      <a href="#contato" className="link-saiba-mais">
        <span className="linha-animada">Saiba mais</span>
        <span className="seta">→</span>
      </a>
    </div>
  );
}