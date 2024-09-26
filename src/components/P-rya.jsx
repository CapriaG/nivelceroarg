import { useState } from 'react';
import { Link } from 'react-router-dom';
import Refrigerante1 from '../assets/AR1.png'; 
import Refrigerante2 from '../assets/AR1Y.png';
import Refrigerante3 from '../assets/ARB.png'; // Asegúrate de tener la imagen correspondiente
import Refrigerante4 from '../assets/AR5.png'; // Asegúrate de tener la imagen correspondiente
import Refrigerante5 from '../assets/AR5Y.png'; // Asegúrate de tener la imagen correspondiente
import Refrigerante6 from '../assets/AR5B.png'; // Asegúrate de tener la imagen correspondiente

const PRefrigerantes = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const refrigerantes = [
    { id: 1, img: Refrigerante1, name: "Refrigerante Concentrado (Red)", description: "Su fórmula concentrada requiere dilución con agua antes de su aplicación, y contiene aditivos avanzados que previenen la corrosión y el desgaste del motor, garantizando un rendimiento óptimo y una mayor durabilidad del sistema de enfriamiento. Ideal para quienes buscan una protección prolongada y confiable para su vehículo." },
    { id: 2, img: Refrigerante2, name: "Refrigerante Concentrado (Gold)", description: "Su fórmula concentrada requiere dilución con agua antes de su aplicación, y contiene aditivos avanzados que previenen la corrosión y el desgaste del motor, garantizando un rendimiento óptimo y una mayor durabilidad del sistema de enfriamiento. Ideal para quienes buscan una protección prolongada y confiable para su vehículo." },
    { id: 3, img: Refrigerante3, name: "Refrigerante Concentrado (Blue)", description: "Su fórmula concentrada requiere dilución con agua antes de su aplicación, y contiene aditivos avanzados que previenen la corrosión y el desgaste del motor, garantizando un rendimiento óptimo y una mayor durabilidad del sistema de enfriamiento. Ideal para quienes buscan una protección prolongada y confiable para su vehículo." },
    { id: 4, img: Refrigerante4, name: "Anticongelante Refrigerante (Red)", description: "El anticongelante concentrado Nivel Cero es un producto formulado para proteger el sistema de enfriamiento de los autos en condiciones extremas de temperatura. Diseñado para evitarla congelación en climas fríos y elevar el punto de ebullición en temperaturas altas." },
    { id: 5, img: Refrigerante5, name: "Anticongelante Refrigerante (Gold)", description: "El anticongelante concentrado Nivel Cero es un producto formulado para proteger el sistema de enfriamiento de los autos en condiciones extremas de temperatura. Diseñado para evitarla congelación en climas fríos y elevar el punto de ebullición en temperaturas altas." },
    { id: 6, img: Refrigerante6, name: "Anticongelante Refrigerante (Blue)", description: "El anticongelante concentrado Nivel Cero es un producto formulado para proteger el sistema de enfriamiento de los autos en condiciones extremas de temperatura. Diseñado para evitarla congelación en climas fríos y elevar el punto de ebullición en temperaturas altas." },
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
            <div key={producto.id} className="col-md-4"> {/* Cambiado a col-md-4 para 3 productos por fila */}
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
