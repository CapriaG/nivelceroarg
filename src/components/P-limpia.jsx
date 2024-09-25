import { useState } from 'react';
import { Link } from 'react-router-dom';
import Limpiaparabrisas1 from '../assets/limpiap.png';

const PLimpiaparabrisas = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const limpiaparabrisas = [
    { id: 1, img: Limpiaparabrisas1, name: "Limpiaparabrisas Líquido", description: "El líquido limpia parabrisas Nivel Cero es una solución efectiva para mantener la visibilidad clara mientras conduces. Diseñado para eliminar rápidamente la suciedad, el polvo y los residuos de insectos del parabrisas, su fórmula de alto rendimiento asegura una limpieza eficiente sin dejar residuos. También ayuda a prevenir la formación de hielo en climas fríos." },
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
        <h2>Limpiaparabrisas</h2>
        <div className="row">
          {limpiaparabrisas.map((producto) => (
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

export default PLimpiaparabrisas;
