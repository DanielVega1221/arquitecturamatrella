import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Decorations from './Decorations';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Parallax effect suave
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        contentRef.current.style.opacity = 1 - scrolled / 500;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <Decorations variant="dark" />
      <div className="hero__container" ref={contentRef}>
        <div className="hero__content">
          <span className="hero__subtitle">Arquitecta · Diseñadora de Interiores</span>
          <h1 className="hero__title">Delfina Matrella</h1>
          <p className="hero__description">
            Transformo espacios en experiencias únicas que reflejan tu esencia. 
            Especializada en diseño de interiores contemporáneos y arquitectura residencial.
          </p>
          <div className="hero__buttons">
            <a href="#proyectos" className="btn btn--primary">
              <span>Ver Proyectos</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#sobre-mi" className="btn btn--secondary">
              <span>Conoce más</span>
            </a>
          </div>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__label">Proyectos</span>
          </div>
          <div className="stat">
            <span className="stat__number">8</span>
            <span className="stat__label">Años</span>
          </div>
          <div className="stat">
            <span className="stat__number">100%</span>
            <span className="stat__label">Satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
