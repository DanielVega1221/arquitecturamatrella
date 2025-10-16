import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchIcon, DrawingIcon, CompassIcon } from './Icons';
import './ContactoNew.css';

gsap.registerPlugin(ScrollTrigger);

const Contacto = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del header
      if (headerRef.current && sectionRef.current) {
        gsap.fromTo(headerRef.current,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Animación de la información de contacto
      if (infoRef.current) {
        gsap.fromTo(infoRef.current.children,
          {
            x: -60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Animación del formulario
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          {
            x: 60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario con animación
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.95,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    
    setTimeout(() => {
      alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoProyecto: '',
        mensaje: ''
      });
      setIsSubmitting(false);
      
      // Animación de éxito
      if (formRef.current) {
        gsap.fromTo(formRef.current, 
          { scale: 0.9 },
          { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" }
        );
      }
    }, 2000);
  };

  return (
    <section ref={sectionRef} className="contacto" id="contacto">
      <div className="container">
        {/* Header de la sección */}
        <div ref={headerRef} className="contacto__header">
          <div className="section-label">
            <DrawingIcon size={20} className="section-label__icon" />
            <span>Hablemos de tu proyecto</span>
          </div>
          <h2 className="section-title">
            <span className="title-line">¿Tienes una</span>
            <span className="title-line title-line--accent">
              <span className="accent-text">Idea</span>
              <span className="normal-text"> en mente?</span>
              <CompassIcon size={35} className="title-icon" />
            </span>
          </h2>
          <p className="section-subtitle">
            Estoy aquí para ayudarte a convertir tus <strong>ideas en realidad</strong>. 
            Cuéntame sobre tu proyecto y trabajemos juntos para crear algo <strong>extraordinario</strong>.
          </p>
        </div>

        <div className="contacto__content">
          {/* Información de contacto */}
          <div ref={infoRef} className="contacto__info">
            <div className="info__header">
              <h3 className="info__title">
                <ArchIcon size={24} className="info__title-icon" />
                Información de contacto
              </h3>
              <p className="info__subtitle">
                Múltiples formas de conectar
              </p>
            </div>
            
            <div className="info__items">
              <div className="info__item">
                <div className="info__icon">
                  <DrawingIcon size={24} />
                </div>
                <div className="info__content">
                  <span className="info__label">Email profesional</span>
                  <a href="mailto:delfina@matrella.com" className="info__value">
                    delfina@matrella.com
                  </a>
                </div>
                <div className="info__decoration"></div>
              </div>

              <div className="info__item">
                <div className="info__icon">
                  <CompassIcon size={24} />
                </div>
                <div className="info__content">
                  <span className="info__label">Teléfono / WhatsApp</span>
                  <a href="tel:+541123456789" className="info__value">
                    +54 (11) 2345-6789
                  </a>
                </div>
                <div className="info__decoration"></div>
              </div>

              <div className="info__item">
                <div className="info__icon">
                  <ArchIcon size={24} />
                </div>
                <div className="info__content">
                  <span className="info__label">Ubicación</span>
                  <span className="info__value">Buenos Aires, Argentina</span>
                </div>
                <div className="info__decoration"></div>
              </div>

              <div className="info__item">
                <div className="info__icon">
                  <CompassIcon size={24} />
                </div>
                <div className="info__content">
                  <span className="info__label">Horarios de atención</span>
                  <span className="info__value">Lun - Vie: 9:00 - 18:00</span>
                </div>
                <div className="info__decoration"></div>
              </div>
            </div>

            <div className="contacto__social">
              <h4 className="social__title">
                <DrawingIcon size={20} />
                Sígueme en redes
              </h4>
              <div className="social__links">
                <a href="#" className="social__link">
                  <span>LinkedIn</span>
                  <div className="link__shine"></div>
                </a>
                <a href="#" className="social__link">
                  <span>Instagram</span>
                  <div className="link__shine"></div>
                </a>
                <a href="#" className="social__link">
                  <span>Behance</span>
                  <div className="link__shine"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div ref={formRef} className="contacto__form">
            <div className="form__header">
              <h3 className="form__title">
                <CompassIcon size={24} />
                Cuéntame tu proyecto
              </h3>
              <p className="form__subtitle">
                Completa el formulario y te responderé en menos de 24 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="nombre" className="form__label">
                    <ArchIcon size={16} />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre"
                    className="form__input"
                  />
                  <div className="input__decoration"></div>
                </div>

                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    <DrawingIcon size={16} />
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                    className="form__input"
                  />
                  <div className="input__decoration"></div>
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="telefono" className="form__label">
                    <CompassIcon size={16} />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+54 (11) 1234-5678"
                    className="form__input"
                  />
                  <div className="input__decoration"></div>
                </div>

                <div className="form__group">
                  <label htmlFor="tipoProyecto" className="form__label">
                    <ArchIcon size={16} />
                    Tipo de proyecto *
                  </label>
                  <select
                    id="tipoProyecto"
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={handleInputChange}
                    required
                    className="form__select"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="residencial">Proyecto Residencial</option>
                    <option value="comercial">Proyecto Comercial</option>
                    <option value="renovacion">Renovación</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div className="input__decoration"></div>
                </div>
              </div>

              <div className="form__group form__group--full">
                <label htmlFor="mensaje" className="form__label">
                  <ArchIcon size={16} />
                  Cuéntame sobre tu proyecto *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe tu proyecto, objetivos, plazos, presupuesto aproximado..."
                  rows="6"
                  className="form__textarea"
                ></textarea>
                <div className="input__decoration"></div>
              </div>

              <button 
                type="submit" 
                className="btn btn--primary btn--form"
                disabled={isSubmitting}
              >
                <span className="btn__text">
                  {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                </span>
                <DrawingIcon size={20} className="btn__icon" />
                <div className="btn__shine"></div>
              </button>

              <p className="form__note">
                <CompassIcon size={14} />
                * Campos obligatorios. Tu información está segura y no será compartida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;