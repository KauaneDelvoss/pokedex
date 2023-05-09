import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Container from './components/container';
import Pokedex from './pages/pokedex/index';
import Home from './pages/home/index';
import About from './pages/about/index';
import Pokemon from './pages/pokemon/index';

function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/tipos_produtos" element={<Tipos/>}/> */}
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />

        </Routes>
      </Container>

      {/* <Footer/> */}

    </Router>
  );
}

export default App;
