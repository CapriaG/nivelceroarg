import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import contactv from "../assets/contact-v.mp4";

const Contact = () => {
    const formspreeEndpoint = 'https://formspree.io/f/xdknryko';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enviar datos a Formspree
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('NivelCero ha recibido tu mensaje, en breve un asesor te contactará');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
            }
        } catch {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className='container-f-contact'>
            <div className="contact-container">
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src={contactv} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Formulario de contacto */}
                        <div className="col-md-6">
                            <h2>Contáctanos</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>

                        {/* Íconos de redes sociales */}
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="social_icons d-flex flex-column flex-md-row align-items-center">
                                {/* WhatsApp */}
                                <a href="https://wa.me/+5491165615460" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center me-3">
                                    <FaWhatsapp size={30} color="#25D366" />
                                    <span className="ms-2">11 6561-5460</span>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/nivelceroarg/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                                    <FaInstagram size={30} color="#E4405F" />
                                    <span className="ms-2">nivelceroarg</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
