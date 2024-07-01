import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Servicos from "./Components/Servicos"
import Roadmap from './Components/Roadmap';
import Portifolio from './Components/Portifolio';
import Orcamento from './Components/Orcamento';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Servicos />
      <Roadmap />
      <Portifolio />
      <Orcamento />
      <Footer />
    </div>

  )
}

export default App
