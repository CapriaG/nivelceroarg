import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lubricante1 from '../assets/h20.png'; 
import Lubricante2 from '../assets/h40.png'; 
import Lubricante3 from '../assets/h80.png'; 

const PLubricantes = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const lubricantes = [
    { id: 1, img: Lubricante1, name: "•	Aerosol H20 (Limpia cadenas)", description: " Elimina suciedad, polvo y residuos de manera rápida y eficiente, asegura un funcionamiento suave y prolonga la vida útil de las cadenas. Forma una capa protectora que previene la oxidación. Remueve aceite, grasa, barro, arena y tierra. Es Compatible con 0, X y Z rings. A su vez, prolonga la vida útil de la cadena y evita la pérdida de potencia." },
    { id: 2, img: Lubricante2, name: "•	Aerosol H40 (Lubricante Multiuso)", description: "Lubricante formulado para ser utilizado en una amplia variedad de aplicaciones. Es una mezcla de aceites base de alta calidad y fortificado con aditivos cuidadosamente seleccionados para proveer máxima protección." },
    { id: 3, img: Lubricante3, name: "•	Aerosol H80 (Lubricante para cadenas)", description: "ideal para mantener tus cadenas en óptimas condiciones y prolongar su vida útil. Su fórmula especial garantiza una lubricación efectiva y duradera, protegiendo contra la corrosión y el desgaste. Lubrica, desoxida, destraba, afloja, elimina ruidos y antioxidante." },
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
        <h2>Lubricantes</h2>
        <div className="row">
          {lubricantes.map((producto) => (
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

export default PLubricantes;