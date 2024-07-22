import '../../App.css';
import Header from '../../Components/Header';
import Home from '../../Components/Home';
import Servicos from '../../Components/Servicos';
import Roadmap from '../../Components/Roadmap';
import Portifolio from '../../Components/Portifolio';
import Orcamento from '../../Components/Orcamento';
import Footer from '../../Components/Footer';
import "./HomPage.css"

const HomePg = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Servicos />
      <Roadmap />
      <Portifolio />
      <Orcamento />
      <Footer />
      <a href="https://wa.me/5511980211030?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20web%20projetos%20do%20DevForge.%20Como%20podemos%20come%C3%A7ar%3F%F0%9F%98%8A" className="whats-link">
      <i className="bx bxl-whatsapp" id="icon"></i>
    </a>

    </div>
  );
};

export default HomePg;
