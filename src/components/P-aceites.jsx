import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aceite1 from '../assets/Aceite4T.png'; 
import Aceite2 from '../assets/Aceite10W30.png'; 
import Aceite3 from '../assets/AceiteCadena.png'; 
import Aceite4 from '../assets/Aceite2TL.png'; 
import Aceite5 from '../assets/Aceite2T-100c.png'; 
import Aceite6 from '../assets/aceitera.png'; 

const PAceites = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const aceites = [
    { id: 1, img: Aceite1, name: "•	Aceite 4T ( Monogrado para carter)", description: "El aceite Monogrado para cárter 4T es un lubricante diseñado específicamente para motores de cuatro tiempos (4T) que requiere un solo tipo de viscosidad. Este aceite proporciona una lubricación constante y eficiente, manteniendo el motor funcionando suavemente y protegiendo sus componentes del desgaste y la corrosión." },
    { id: 2, img: Aceite2, name: "•	Aceite SAE 10W30 (GENERADOR)", description: "El aceite SAE 10W-30 para generadores es un lubricante multiviscoso que proporciona una protección confiable en una amplia gama de temperaturas. Su formulación está diseñada para mantener la viscosidad y el rendimiento del aceite tanto en arranques en frío como en condiciones de operación a alta temperatura." },
    { id: 3, img: Aceite3, name: "•	Aceite (Cadenas para motosierra) ", description: "El aceite para cadenas FMG está diseñado específicamente para lubricar y proteger la cadena y la barra de la motosierra. Su formulación especial asegura una adhesión óptima a las piezas en movimiento, minimizando el desgaste y la fricción." },
    { id: 4, img: Aceite4, name: "• Aceite 2T 1L", description: "El aceite 2T Extrema está formulado para ofrecer una lubricación superior en motores de dos tiempos. Diseñado para mezclarse con combustible, proporciona una excelente protección contra el desgaste, la corrosión y la formación de depósitos." },
    { id: 5, img: Aceite5, name: "Aceite 2T 100cc", description: "NUEVO ENVASE 100cc del Aceite 2T." },
    { id: 6, img: Aceite6, name: "Aceitera h40 multiuso", description: "Formulado para ser utilizado en una amplia variedad de aplicaciones. Es una mezcla de aceites base de alta calidad y fortificado con aditivos cuidadosamente seleccionados para proveer máxima protección." },
  ];

  const openModal = (product) => {
    setModal({ isOpen: true, product });
  };

  const closeModal = () => {
    setModal({ isOpen: false, product: null });
  };

  return (
    <section className="custom-products-section">
    <Link to="/products" className="back-arrow">
        ← Volver a Productos
      </Link>
      <div className="container">
        <h2>Aceites</h2>
        <div className="row">
          {aceites.map((producto) => (
            <div key={producto.id} className="col-md-4">
              <div className="custom-product-card" onClick={() => openModal(producto)}>
                <img src={producto.img} alt={producto.name} className="custom-product-image" />
                <h5>{producto.name}</h5>
                <p>{producto.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal.isOpen && (
        <div className="product-modal-overlay active" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={modal.product.img} alt={modal.product.name} />
            <h5>{modal.product.name}</h5>
            <p>{modal.product.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PAceites;