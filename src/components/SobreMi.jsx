import React, { useEffect, useRef } from 'react';
import './SobreMi.css';
import Decorations from './Decorations';

const SobreMi = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

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

    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        skill.style.animationDelay = `${index * 0.1}s`;
        observer.observe(skill);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sobre-mi" id="sobre-mi" ref={sectionRef}>
      <Decorations variant="light" />
      <div className="sobre-mi__container">
        <div className="sobre-mi__header">
          <span className="section-tag">Sobre Mí</span>
          <h2 className="section-title">Creando espacios con propósito</h2>
        </div>

        <div className="sobre-mi__content">
          <div className="sobre-mi__text">
            <p>
              Soy Delfina Matrella, arquitecta especializada en diseño de interiores con más de 8 años 
              de experiencia transformando espacios en hogares únicos y funcionales.
            </p>
            <p>
              Mi filosofía se basa en entender profundamente las necesidades de cada cliente para crear 
              ambientes que no solo sean estéticamente atractivos, sino que mejoren la calidad de vida 
              de quienes los habitan.
            </p>
            <p>
              Cada proyecto es una oportunidad para combinar funcionalidad, sostenibilidad y belleza, 
              creando espacios que cuenten historias y reflejen la personalidad de sus usuarios.
            </p>
          </div>

          <div className="sobre-mi__skills">
            <h3>Especialidades</h3>
            <div className="skills-grid">
              <div className="skill-item" ref={el => skillsRef.current[0] = el}>
                <div className="skill-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L5 15V30L20 40L35 30V15L20 5Z" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="20" r="3" fill="var(--color-pink)"/>
                  </svg>
                </div>
                <h4>Diseño de Interiores</h4>
                <p>Espacios residenciales únicos</p>
              </div>
              <div className="skill-item" ref={el => skillsRef.current[1] = el}>
                <div className="skill-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="5" y="5" width="30" height="30" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                    <line x1="20" y1="5" x2="20" y2="35" stroke="var(--color-pink)" strokeWidth="2"/>
                    <line x1="5" y1="20" x2="35" y2="20" stroke="var(--color-pink)" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Arquitectura</h4>
                <p>Proyectos integrales</p>
              </div>
              <div className="skill-item" ref={el => skillsRef.current[2] = el}>
                <div className="skill-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 30L20 10L30 30H10Z" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                    <circle cx="15" cy="25" r="2" fill="var(--color-pink)"/>
                    <circle cx="25" cy="25" r="2" fill="var(--color-pink)"/>
                  </svg>
                </div>
                <h4>Renders 3D</h4>
                <p>Visualizaciones fotorrealistas</p>
              </div>
              <div className="skill-item" ref={el => skillsRef.current[3] = el}>
                <div className="skill-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="10" stroke="var(--color-pink)" strokeWidth="2" fill="none"/>
                    <path d="M20 10V20L25 25" stroke="var(--color-pink)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Consultoría</h4>
                <p>Asesoramiento profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
