import { useState } from 'react';
import { Link } from 'react-router-dom';
import Refrigerante1 from '../assets/AR1.png'; 
import Refrigerante2 from '../assets/AR5.png';

const PRefrigerantes = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const refrigerantes = [
    { id: 1, img: Refrigerante1, name: "Refrigerante Concentrado", description: "Su fórmula concentrada requiere dilución con agua antes de su aplicación, y contiene aditivos avanzados que previenen la corrosión y el desgaste del motor, garantizando un rendimiento óptimo y una mayor durabilidad del sistema de enfriamiento. Ideal para quienes buscan una protección prolongada y confiable para su vehículo." },
    { id: 2, img: Refrigerante2, name: "Anticongelante Refrigerante", description: "El anticongelante concentrado Nivel Cero es un producto formulado para proteger el sistema de enfriamiento de los autos en condiciones extremas de temperatura. Diseñado para evitar la congelación en climas fríos y elevar el punto de ebullición en temperaturas altas." },
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
        <h2>Refrigerantes y Anticongelantes</h2>
        <div className="row">
          {refrigerantes.map((producto) => (
            <div key={producto.id} className="col-md-6">
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

export default PRefrigerantes;