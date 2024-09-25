import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import textImage from "../assets/detai-f.png";
import image1 from "../assets/carousel-h1.png";
import image2 from "../assets/carousel-h2.png";
import image3 from "../assets/carousel-h3.png";
import image4 from "../assets/carousel-h4.png";
import image5 from "../assets/carousel-h5.png";
import image6 from "../assets/carousel-h6.png";
import motoImage from "../assets/motoredb.png";
import smallImage1 from "../assets/f1.png";
import smallImage2 from "../assets/f2.png";
import smallImage3 from "../assets/f3.png";
import smallImage4 from "../assets/f4.png";

const Home = () => {
  // Configuración de react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Muestra 4 slides por defecto
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas (tabletas y móviles)
        settings: {
          slidesToShow: 2, // Muestra 2 slides en pantallas pequeñas
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // Para pantallas pequeñas (tabletas y móviles)
        settings: {
          slidesToShow: 3, // Muestra 2 slides en pantallas pequeñas
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Para pantallas muy pequeñas (teléfonos)
        settings: {
          slidesToShow: 1, // Muestra 1 slide en pantallas muy pequeñas
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      {/* Sección prioritaria */}
      <section className="home-section d-flex align-items-center">
        <div className="container-fluid h-100 d-flex justify-content-center">
          <div className="text-container">
            <img src={textImage} alt="Texto y gráfico" className="img-fluid" />
          </div>
        </div>
        <div className="text-end pe-5 position-absolute bottom-0 end-0 mb-3">
          <p>Industria Argentina</p>
        </div>
      </section>

      {/* Línea roja fuera del section */}
      <div className="red-line"></div>

      {/* Nueva sección de imágenes fijas */}
      <section className="small-images-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3">
              <img src={smallImage1} alt="Imagen 1" className="small-image" />
              <p>Calidad Superior</p>
            </div>
            <div className="col-6 col-md-3">
              <img src={smallImage2} alt="Imagen 2" className="small-image" />
              <p>Precios Confiables</p>
            </div>
            <div className="col-6 col-md-3">
              <img src={smallImage3} alt="Imagen 3" className="small-image" />
              <p>Atención de calidad</p>
            </div>
            <div className="col-6 col-md-3">
              <img src={smallImage4} alt="Imagen 4" className="small-image" />
              <p>Envíos Puntuales</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Sección de imagen horizontal */}
      <section className="full-width-image-section">
        <img src={motoImage} alt="Imagen Horizontal" className="full-width-image" />
      </section>

      {/* Nueva sección con título, botón y carrusel */}
      <section className="carousel-section">
        <div className="container my-5">
          <h2>Productos destacados</h2>
          <Slider {...settings}>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image1} alt="Imagen 1" className="carousel-img" />
                <div className="overlay">
                  <p>Anticongelante Refrigerante</p>
                </div>
              </div>
            </div>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image2} alt="Imagen 2" className="carousel-img" />
                <div className="overlay">
                  <p>Líquido refrigerante concentrado</p>
                </div>
              </div>
            </div>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image3} alt="Imagen 3" className="carousel-img" />
                <div className="overlay">
                  <p>Lubricantes para cadenas en aerosol</p>
                </div>
              </div>
            </div>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image4} alt="Imagen 4" className="carousel-img" />
                <div className="overlay">
                  <p>Líquido Anticorrosivo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image5} alt="Imagen 5" className="carousel-img" />
                <div className="overlay">
                  <p>Agua desmineralizada</p>
                </div>
              </div>
            </div>
            <div className="carousel-item-container">
              <div className="image-wrapper">
                <img src={image6} alt="Imagen 6" className="carousel-img" />
                <div className="overlay">
                  <p>Aceite para motores</p>
                </div>
              </div>
            </div>
          </Slider>

          {/* Botón centrado para ver todos los productos */}
            <div className="text-center mt-4">
              <Link to="/products" className="btn btn-primary-h">Ver todos los productos</Link>
            </div>
          </div>
        </section>
      </>
  );
};

export default Home;
