import './FeaturedCardFull.css';

export function FeaturedCardFull({ titulo, descricao, imagem, tag, corSombra }) {
  const estiloFundo = {
    backgroundImage: `linear-gradient(to top, ${corSombra || 'rgba(0,0,0,0.9)'} 0%, rgba(0,0,0,0) 70%), url(${imagem})`,
    height: '494px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="FeaturedCardFull" style={estiloFundo}>
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