import "./FeaturedCardAdmin.css";

export function FeaturedCardAdmin({ titulo, descricao, imagem }) {
  return (
    <div className="FeaturedCardAdmin">
      {/* Lado Esquerdo: Laptop */}
      <div className="admin-image-container">
        <img src={imagem} alt={titulo} className="admin-laptop-img" />
      </div>

      {/* Lado Direito: Texto */}
      <div className="admin-text-container">
        <div className="admin-header">
          <h2 className="admin-main-title">{titulo}</h2>
          <p className="admin-description">{descricao}</p>
        </div>

        <ul className="admin-list">
          <li>
            <span className="check-icon">✓</span> Conciliação Automática
          </li>
          <li>
            <span className="check-icon">✓</span> Integração com APIs Bancárias
          </li>
        </ul>

        <button className="admin-details-btn">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}