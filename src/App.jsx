import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Servicos from "./Components/Servicos"
import Roadmap from './Components/Roadmap';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Servicos />
      <Roadmap />
    </div>

  )
}

export default App
