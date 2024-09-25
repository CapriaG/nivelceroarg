import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import benefit1 from '../assets/f1.png';
import benefit2 from '../assets/f2.png';
import benefit3 from '../assets/f3.png';
import imgp from '../assets/snc.png';
import factoryImage1 from '../assets/h20.png';
import factoryImage2 from '../assets/h40.png';
import factoryImage3 from '../assets/h80.png';
import factoryImage4 from '../assets/AR1.png';
import factoryImage5 from '../assets/AR5.png';
import factoryImage6 from '../assets/antic.png';
import factoryImage7 from '../assets/limpiap.png';
import factoryImage8 from '../assets/Aceite2T-100c.png';
import descimg from "../assets/about-desc.png";
import { FaArrowDown } from 'react-icons/fa';

const About = () => {
  const scrollToNextSection = () => {
    document.getElementById('about-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-container">
      {/* Sección con imagen de fondo */}
      <div className="virtue-section">
        <img src={imgp} alt="Virtud de la empresa" className="virtue-inner-image" />
        
        {/* Botón de flecha descendente */}
        <button className="scroll-down-button" onClick={scrollToNextSection}>
          <FaArrowDown size={45} />
        </button>
      </div>

      {/* Sección con el logo y descripción */}
      <div id="about-content" className="about-content">
        <p className="about-description">
          Nivel Cero by Chemical Elab es una empresa líder en el mercado de aceites, lubricantes, refrigerantes y anticongelantes automotrices. <br></br> Nos destacamos por ofrecer productos de alta calidad que garantizan el máximo rendimiento de motores de autos y motos.
        </p>
      </div>

      {/* Carrusel de la fábrica */}
      <div className="factory-carousel-section">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1} // Siempre mostrar una imagen por slide
          loop={true}
          className="carousel-container"
        >
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage1} alt="Imagen de la fábrica 1" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage2} alt="Imagen de la fábrica 2" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage3} alt="Imagen de la fábrica 3" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage4} alt="Imagen de la fábrica 4" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage5} alt="Imagen de la fábrica 5" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage6} alt="Imagen de la fábrica 6" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage7} alt="Imagen de la fábrica 7" />
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
            <img className="carousel-image" src={factoryImage8} alt="Imagen de la fábrica 8" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Nueva sección reemplazada por una imagen */}
      <div className="about-image-container">
        <img src={descimg} alt="Atención Personalizada" className="about-image-desc" />
      </div>

      {/* Sección de beneficios con imágenes */}
      <div className="benefits-section">
        <div className="benefit">
          <img src={benefit1} alt="Beneficio 1" className="benefit-image" />
          <p className="benefit-text">Protección de motor de última generación</p>
        </div>
        <div className="benefit">
          <img src={benefit2} alt="Beneficio 2" className="benefit-image" />
          <p className="benefit-text">Rendimiento optimizado en altas temperaturas</p>
        </div>
        <div className="benefit">
          <img src={benefit3} alt="Beneficio 3" className="benefit-image" />
          <p className="benefit-text">Eficiencia energética para reducir el consumo</p>
        </div>
      </div>
    </div>
  );
};

export default About;
