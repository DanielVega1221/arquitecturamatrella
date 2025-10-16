import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchIcon, DrawingIcon } from './Icons';
import './HeroNew.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const description = descriptionRef.current;
      const cta = ctaRef.current;
      const visual = visualRef.current;
      const stats = statsRef.current;

      // Timeline principal de entrada con entrada más suave
      const tl = gsap.timeline({ delay: 0.5 });

      // Animación del subtítulo
      tl.fromTo(subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Animación del título principal con efecto más suave
      tl.fromTo(title.children,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.15,
          ease: "power3.out" 
        },
        "-=0.5"
      );

      // Animación de la descripción
      tl.fromTo(description,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      // Animación de los botones CTA
      tl.fromTo(cta.children,
        { y: 20, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          stagger: 0.1,
          ease: "power2.out" 
        },
        "-=0.7"
      );

      // Animación del visual
      tl.fromTo(visual,
        { x: 40, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=1"
      );

      // Animación de las estadísticas
      tl.fromTo(stats.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1,
          ease: "power2.out" 
        },
        "-=0.5"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCTAHover = (e, isEntering) => {
    gsap.to(e.target, {
      scale: isEntering ? 1.05 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={heroRef} id="hero" className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* Card de contenido textual */}
          <div className="hero__card hero__card--text">
            <span ref={subtitleRef} className="hero__subtitle">
              <ArchIcon size={16} className="subtitle-icon" />
              Arquitectura con propósito
            </span>
            
            <h1 ref={titleRef} className="hero__title">
              <span className="title-line">Diseño espacios que</span>
              <span className="title-line title-line--accent">
                <span className="accent-text">transforman vidas</span>
                <DrawingIcon size={40} className="title-icon" />
              </span>
            </h1>
            
            <p ref={descriptionRef} className="hero__description">
              Con más de 8 años de experiencia, creo arquitectura que va más allá de lo estético. 
              Cada proyecto es una oportunidad para mejorar la calidad de vida de las personas, 
              combinando <strong>funcionalidad</strong>, <strong>sostenibilidad</strong> y <strong>belleza</strong>.
            </p>
            
            <div ref={ctaRef} className="hero__cta">
              <a 
                href="#contact" 
                className="btn btn--primary btn--hero"
                onMouseEnter={(e) => handleCTAHover(e, true)}
                onMouseLeave={(e) => handleCTAHover(e, false)}
              >
                <span>Conversemos sobre tu proyecto</span>
                <div className="btn__shine"></div>
              </a>
              <a 
                href="#about" 
                className="btn btn--secondary btn--hero"
                onMouseEnter={(e) => handleCTAHover(e, true)}
                onMouseLeave={(e) => handleCTAHover(e, false)}
              >
                Conoce mi trabajo
              </a>
            </div>
          </div>
          
          {/* Card de visual con imagen y stats */}
          <div ref={visualRef} className="hero__card hero__card--visual">
            <div className="hero__image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <ArchIcon size={48} className="placeholder-icon" />
                  <span>Proyecto destacado</span>
                </div>
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div ref={statsRef} className="hero__stats">
              <div className="stat">
                <span className="stat__number">
                  <span className="number-value">50</span>
                  <span className="number-symbol">+</span>
                </span>
                <span className="stat__label">Proyectos completados</span>
              </div>
              <div className="stat">
                <span className="stat__number">
                  <span className="number-value">8</span>
                </span>
                <span className="stat__label">Años de experiencia</span>
              </div>
              <div className="stat">
                <span className="stat__number">
                  <span className="number-value">100</span>
                  <span className="number-symbol">%</span>
                </span>
                <span className="stat__label">Clientes satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de fondo animado */}
      <div className="hero__gradient"></div>
    </section>
  );
};

export default Hero;