import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header.jsx';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importar los componentes de productos
import PAceites from './components/P-aceites';
import PAgua from './components/P-agua';
import PAntic from './components/P-antic';
import PLimpia from './components/P-limpia';
import PLubricantes from './components/P-lubricantes';
import PRya from './components/P-rya';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Rutas para las páginas de productos */}
        <Route path="/products/aceites" element={<PAceites />} />
        <Route path="/products/agua-desmineralizada" element={<PAgua />} />
        <Route path="/products/anticorrosivos" element={<PAntic />} />
        <Route path="/products/limpiaparabrisas" element={<PLimpia />} />
        <Route path="/products/lubricantes" element={<PLubricantes />} />
        <Route path="/products/refrigerantes" element={<PRya />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

