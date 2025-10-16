import React, { useState, useEffect, useRef } from 'react';
import './Contacto.css';
import Decorations from './Decorations';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Mensaje enviado! Te contactaré pronto.');
      setFormData({ nombre: '', email: '', mensaje: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="contacto" id="contacto" ref={sectionRef}>
      <Decorations variant="dark" />
      <div className="contacto__container">
        <div className="contacto__header">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">Trabajemos juntos</h2>
          <p className="section-description">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a crear el espacio de tus sueños.
          </p>
        </div>

        <div className="contacto__content">
          <div className="contacto__info">
            <div className="info-item">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 4H28V20L16 28L4 20V4Z" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                  <path d="M4 4L16 12L28 4" stroke="var(--color-pink)" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:delfina@arquitecta.com">delfina@arquitecta.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="10" y="4" width="12" height="24" rx="2" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                  <line x1="10" y1="8" x2="22" y2="8" stroke="var(--color-pink)" strokeWidth="2"/>
                  <circle cx="16" cy="24" r="1" fill="var(--color-pink)"/>
                </svg>
              </div>
              <div>
                <h4>Teléfono</h4>
                <a href="tel:+541234567890">+54 (11) 2345-6789</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4C11 4 7 8 7 13C7 19 16 28 16 28C16 28 25 19 25 13C25 8 21 4 16 4Z" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="13" r="3" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          <form className="contacto__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
              {!isSubmitting && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10H18M18 10L12 4M18 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
