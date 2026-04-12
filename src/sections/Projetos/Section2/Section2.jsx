import Computador from '../../../assets/section2-projetos/hut-admin-image.png';
import Vaca from '../../../assets/section2-projetos/pastejando-image.png';
import Imovel from '../../../assets/section2-projetos/toni-neutzling-image.png';
import Plantas from '../../../assets/section2-projetos/plante-saude-image.png';

function Section2() {
  return (
    <section>
      <h2>Teste de importação</h2>

      <div>

      <></>

      </div>
      
      <img src={Computador} alt="Dashboard Hut Admin" />
    
      <img src={Imovel} alt="Projeto Toni Neutzling" />
      
      <img src={Vaca} alt="Projeto pastejando" />

      <img src={Plantas} alt="Projeto Plant saude" />
    </section>
  );
}

export default Section2;