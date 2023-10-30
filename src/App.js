import './App.css';
import Google from './componentes/Google';
import Nav from './componentes/Nav'
import Caixa from './componentes/Caixa'
import Pesquisa from './componentes/Pesquisa'
import Verify from './componentes/Verify'
import Footer from './componentes/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Google/>
      <Caixa/>
      <Pesquisa/>
      <Verify/>
      <Footer/>
    </div>
  );
}

export default App;
