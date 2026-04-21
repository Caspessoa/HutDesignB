import './FeaturedCardClassic.css';

export function FeaturedCardClassic({ titulo, descricao, imagem, tag, tecnologias, icone}) {
  return (
    <div className="FeaturedCardClassic">
      <div className="card-image-wrapper">
        <img src={imagem} alt={titulo} />
      </div>

      <div className="card-content-white">
        <div className="card-header-row">
          <div className="card-titles">
            <h2 className="card-main-title">{titulo}</h2>
            <span className="card-category">{tag}</span>
         </div>
          {icone && <img src={icone} alt="ícone" className="card-icon-svg" />}
        </div>

        <p className="card-description-text">{descricao}</p>

        <div className="card-tags-row">
          {tecnologias && tecnologias.map((tech) => (
            <span key={tech} className="tag-item">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}