import { Link } from 'react-router-dom';
import logo from '../assets/NivelCero-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container d-flex align-items-center px-3 py-2">
      <div className="header-content d-flex w-100 justify-content-between align-items-center">
        {/* Contenedor de logo */}
        <div className="header-logo flex-shrink-1">
          <Link to="/">
            <img src={logo} alt="Logo" className="img-fluid" />
          </Link>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          className="menu-button d-md-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Contenedor de links y redes para pantallas grandes */}
        <div className="header-nav d-none d-md-flex flex-shrink-1 justify-content-end align-items-center">
          <ul className="nav d-flex mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
          <div className="social-icons d-flex">
            <a href="https://wa.me/+5491165615460" className="social-icon" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/nivelceroarg/" className="social-icon" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {menuOpen && (
          <div className="menu-overlay d-md-none">
            {/* Botón de cierre (X) */}
            <button className="close-button" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </button>

            {/* Logo en la parte superior centrada */}
            <div className="menu-logo mb-4">
              <Link to="/" onClick={toggleMenu}>
                <img src={logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>

            <nav className="menu-nav">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={toggleMenu}>Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" onClick={toggleMenu}>Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" onClick={toggleMenu}>Nosotros</Link>
                </li>
              </ul>
              
              {/* Redes sociales al final */}
              <div className="social-icons d-flex justify-content-center mt-4">
                <a href="https://wa.me/+5491165615460" className="social-icon" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/nivelceroarg/" className="social-icon" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
