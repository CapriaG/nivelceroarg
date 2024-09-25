import { useState } from 'react';
import { Link } from 'react-router-dom';
import Agua1 from '../assets/agua1.png'; 
import Agua2 from '../assets/agua5.png'; 

const PAguaDesmineralizada = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const aguas = [
    { id: 1, img: Agua1, name: "Agua Desmineralizada 1L", description: "El agua desmineralizada 1L es ideal para usos en pequeñas cantidades donde se requiera agua libre de minerales, como en baterías de vehículos, planchas de vapor y equipos que necesitan evitar la acumulación de impurezas. Su pureza garantiza un funcionamiento óptimo y prolonga la vida útil de los dispositivos." },
    { id: 2, img: Agua2, name: "Agua Desmineralizada 5L", description: "El agua desmineralizada 5L es perfecta para aplicaciones industriales y automotrices de mayor escala, como en radiadores y sistemas de refrigeración. Su formato práctico ofrece una solución económica para proteger equipos y maquinaria de la corrosión y los depósitos minerales." },
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
        <h2>Agua Desmineralizada</h2>
        <div className="row">
          {aguas.map((producto) => (
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

export default PAguaDesmineralizada;