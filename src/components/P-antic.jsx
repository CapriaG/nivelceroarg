import { useState } from 'react';
import { Link } from 'react-router-dom';
import Anticorrosivo1 from '../assets/anticr.png';
import Anticorrosivo2 from '../assets/antic.png';
import Anticorrosivo3 from '../assets/anticb.png';


const PAnticorrosivos = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const anticorrosivos = [
    { id: 1, img: Anticorrosivo1, name: "Luiquido Anticorrosivo (Red)", description: "Diseñado para prevenir la oxidación y la corrosión en superficies metálicas, creando una capa protectora que bloquea la humedad y otros agentes corrosivos. Ideal para proteger vehículos, maquinaria y estructuras expuestas a ambientes húmedos o agresivos." },
    { id: 1, img: Anticorrosivo2, name: "Luiquido Anticorrosivo (Gold)", description: "Diseñado para prevenir la oxidación y la corrosión en superficies metálicas, creando una capa protectora que bloquea la humedad y otros agentes corrosivos. Ideal para proteger vehículos, maquinaria y estructuras expuestas a ambientes húmedos o agresivos." },
    { id: 1, img: Anticorrosivo3, name: "Luiquido Anticorrosivo (Blue)", description: "Diseñado para prevenir la oxidación y la corrosión en superficies metálicas, creando una capa protectora que bloquea la humedad y otros agentes corrosivos. Ideal para proteger vehículos, maquinaria y estructuras expuestas a ambientes húmedos o agresivos." } 
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
        <h2>Anticorrosivos</h2>
        <div className="row">
          {anticorrosivos.map((producto) => (
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

export default PAnticorrosivos;

