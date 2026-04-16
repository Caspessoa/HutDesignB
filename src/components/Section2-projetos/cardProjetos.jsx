import './cardProjetos.css';

export function CardProjetos({ titulo, descricao, imagem, tag, corSombra }) {
  const estiloFundo = {
    backgroundImage: `linear-gradient(to top, ${corSombra || 'rgba(0,0,0,0.9)'} 0%, rgba(0,0,0,0) 70%), url(${imagem})`
  };

  return (
    <div className="project-card" style={estiloFundo}>
      <div className="project-content">
        
        {tag && (
          <div className="project-tag-container">
            <span className="project-tag">{tag}</span>
          </div>
        )}

        <h2 className="project-title">{titulo}</h2>

        <p className="project-description">
          {descricao}
        </p>

        <a href="#caso" className="project-link">
          <span className="linha-animada-projeto">Ver Caso</span>
          <span className="seta-projeto">→</span>
        </a>
      </div>
    </div>
  );
}