import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchIcon, DrawingIcon, CompassIcon } from './Icons';
import './SobreMiNew.css';

gsap.registerPlugin(ScrollTrigger);

const SobreMi = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del header con efecto parallax
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
              end: "bottom 15%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Animación de la imagen con parallax
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          {
            y: 80,
            scale: 0.9,
            opacity: 0
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none none"
            }
          }
        );

        // Parallax continuo para la imagen
        gsap.to(imageRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // Animación del contenido con stagger
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          {
            y: 60,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Animación de las skills con bounce
      if (skillsRef.current) {
        gsap.fromTo(skillsRef.current.children,
          {
            scale: 0,
            rotation: -10
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sobre-mi" id="sobre-mi">
      <div className="container">
        {/* Header de la sección */}
        <div ref={headerRef} className="sobre-mi__header">
          <div className="section-label">
            <ArchIcon size={20} className="section-label__icon" />
            <span>Conocé mi trayectoria</span>
          </div>
          <h2 className="section-title">
            <span className="title-line">Sobre</span>
            <span className="title-line title-line--accent">
              <span className="accent-text">Mí</span>
              <CompassIcon size={35} className="title-icon" />
            </span>
          </h2>
          <p className="section-subtitle">
            Arquitecta especializada en diseño de <strong>interiores contemporáneos</strong> 
            y <strong>espacios habitacionales únicos</strong>
          </p>
        </div>

        <div className="sobre-mi__grid">
          {/* Card de Imagen */}
          <div className="sobre-mi__card sobre-mi__card--image">
            <div ref={imageRef} className="sobre-mi__image">
              <div className="image-container">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <ArchIcon size={60} className="placeholder-icon" />
                    <span>Foto Profesional</span>
                    <span className="placeholder-subtitle">Delfina Matrella</span>
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
              
              {/* Badge flotante */}
              <div className="achievement-badge">
                <div className="badge-content">
                  <DrawingIcon size={24} className="badge-icon" />
                  <div className="badge-text">
                    <span className="badge-number">8+</span>
                    <span className="badge-label">Años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Contenido textual y especialidades */}
          <div className="sobre-mi__card sobre-mi__card--content">
            <div ref={contentRef} className="sobre-mi__text">
            <div className="intro-text">
              <p className="intro-paragraph">
                Soy una arquitecta apasionada por crear <span className="text-highlight">espacios únicos</span> 
                que reflejan la personalidad y necesidades de cada cliente. Mi enfoque se centra en el 
                <span className="text-highlight"> diseño funcional y estéticamente atractivo</span>.
              </p>
              
              <p className="intro-paragraph">
                Con una formación sólida en arquitectura y especialización en interiores, combino 
                <span className="text-highlight">técnicas tradicionales con tendencias contemporáneas</span> 
                para lograr resultados excepcionales en cada proyecto.
              </p>
            </div>

            {/* Especialidades */}
            <div className="especialidades">
              <h3 className="especialidades__title">
                <CompassIcon size={24} className="title-icon" />
                Mis Especialidades
              </h3>
              
              <div ref={skillsRef} className="especialidades__grid">
                <div className="especialidad-item">
                  <div className="especialidad-icon">
                    <ArchIcon size={32} />
                  </div>
                  <div className="especialidad-content">
                    <h4>Diseño de Interiores</h4>
                    <p>Espacios funcionales y estéticamente únicos</p>
                  </div>
                </div>

                <div className="especialidad-item">
                  <div className="especialidad-icon">
                    <DrawingIcon size={32} />
                  </div>
                  <div className="especialidad-content">
                    <h4>Renders 3D</h4>
                    <p>Visualizaciones fotorrealistas de proyectos</p>
                  </div>
                </div>

                <div className="especialidad-item">
                  <div className="especialidad-icon">
                    <CompassIcon size={32} />
                  </div>
                  <div className="especialidad-content">
                    <h4>Consultoría</h4>
                    <p>Asesoramiento integral en proyectos</p>
                  </div>
                </div>
              </div>
            </div>

              {/* Call to Action */}
              <div className="sobre-mi__cta">
                <a href="#contacto" className="btn btn--primary btn--animated">
                  <span className="btn__text">Conversemos tu proyecto</span>
                  <span className="btn__icon">
                    <DrawingIcon size={20} />
                  </span>
                  <div className="btn__shine"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;