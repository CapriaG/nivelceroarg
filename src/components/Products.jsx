import { Link } from 'react-router-dom';
import Aceite from "../assets/Aceite.png";
import Lubricante from "../assets/Lubricante.png";
import Rya from "../assets/RyA.png";
import Agua from "../assets/AguaD.png";
import AntiC from "../assets/Anticorrosivo.png";
import Limpia from "../assets/Limpiaparabrisas.png";

const Products = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/products/aceites">
              <div className="product-image-wrapper">
                <img src={Aceite} alt="Aceites" className="product-image" />
                <div className="overlayP">
                  <h5>Aceites</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/lubricantes">
              <div className="product-image-wrapper">
                <img src={Lubricante} alt="Lubricantes" className="product-image" />
                <div className="overlayP">
                  <h5>Lubricantes</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/refrigerantes">
              <div className="product-image-wrapper">
                <img src={Rya} alt="Refrigerantes y Anticongelantes" className="product-image" />
                <div className="overlayP">
                  <h5>Refrigerantes y Anticongelantes</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <Link to="/products/agua-desmineralizada">
              <div className="product-image-wrapper">
                <img src={Agua} alt="Agua Desmineralizada" className="product-image" />
                <div className="overlayP">
                  <h5>Agua Desmineralizada</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/anticorrosivos">
              <div className="product-image-wrapper">
                <img src={AntiC} alt="Anticorrosivos" className="product-image" />
                <div className="overlayP">
                  <h5>Anticorrosivos</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/limpiaparabrisas">
              <div className="product-image-wrapper">
                <img src={Limpia} alt="Limpiaparabrisas" className="product-image" />
                <div className="overlayP">
                  <h5>Limpiaparabrisas</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
