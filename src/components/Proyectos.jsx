import React, { useState, useEffect, useRef } from 'react';
import './Proyectos.css';
import ProyectoModal from './ProyectoModal';
import Decorations from './Decorations';

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const proyectosDemo = [
    {
      id: 1,
      titulo: 'Casa Moderna Minimalista',
      categoria: 'Arquitectura Residencial',
      año: '2024',
      ubicacion: 'Buenos Aires',
      descripcion: 'Diseño contemporáneo que integra espacios abiertos con líneas limpias y materiales nobles. El proyecto prioriza la iluminación natural y la conexión con el exterior.',
      area: '280 m²',
      cliente: 'Cliente Privado',
      servicios: ['Diseño Arquitectónico', 'Renders 3D', 'Dirección de Obra']
    },
    {
      id: 2,
      titulo: 'Reforma Integral Departamento',
      categoria: 'Diseño de Interiores',
      año: '2024',
      ubicacion: 'Palermo, CABA',
      descripcion: 'Transformación completa de un departamento de 120m² optimizando espacios y creando ambientes funcionales y estéticamente equilibrados.',
      area: '120 m²',
      cliente: 'Familia González',
      servicios: ['Diseño de Interiores', 'Selección de Materiales', 'Decoración']
    },
    {
      id: 3,
      titulo: 'Oficinas Corporativas',
      categoria: 'Diseño Comercial',
      año: '2023',
      ubicacion: 'Microcentro, CABA',
      descripcion: 'Espacio de trabajo moderno que fomenta la colaboración y creatividad. Diseño flexible adaptable a las necesidades cambiantes del equipo.',
      area: '350 m²',
      cliente: 'Tech Startup',
      servicios: ['Diseño Espacial', 'Mobiliario Custom', 'Iluminación']
    },
    {
      id: 4,
      titulo: 'Casa de Campo',
      categoria: 'Arquitectura Residencial',
      año: '2023',
      ubicacion: 'Pilar, Buenos Aires',
      descripcion: 'Vivienda que dialoga con el paisaje natural circundante. Grandes ventanales y espacios de transición interior-exterior.',
      area: '420 m²',
      cliente: 'Cliente Privado',
      servicios: ['Arquitectura', 'Paisajismo', 'Diseño de Interiores']
    },
    {
      id: 5,
      titulo: 'Showroom de Diseño',
      categoria: 'Comercial',
      año: '2023',
      ubicacion: 'Recoleta, CABA',
      descripcion: 'Espacio expositivo que combina funcionalidad comercial con estética museística. Diseño que realza los productos exhibidos.',
      area: '180 m²',
      cliente: 'Marca de Muebles',
      servicios: ['Diseño de Interiores', 'Iluminación', 'Visual Merchandising']
    },
    {
      id: 6,
      titulo: 'Loft Industrial Renovado',
      categoria: 'Diseño de Interiores',
      año: '2024',
      ubicacion: 'Belgrano, CABA',
      descripcion: 'Renovación que respeta la esencia industrial del espacio incorporando elementos contemporáneos y toques de calidez.',
      area: '200 m²',
      cliente: 'Pareja Joven',
      servicios: ['Reforma Integral', 'Diseño de Mobiliario', 'Iluminación']
    }
  ];

  return (
    <section className="proyectos" id="proyectos" ref={sectionRef}>
      <Decorations variant="light" />
      <div className="proyectos__container">
        <div className="proyectos__header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-description">
            Una selección de proyectos que reflejan mi enfoque en diseño, funcionalidad y atención al detalle.
          </p>
        </div>

        <div className="proyectos__grid">
          {proyectosDemo.map((proyecto, index) => (
            <div 
              key={proyecto.id} 
              className="proyecto-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(proyecto)}
            >
              <div className="proyecto-card__image">
                <div className="proyecto-card__placeholder">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="15" width="40" height="30" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="25" r="3" fill="currentColor"/>
                    <path d="M10 35L20 28L30 35L45 22L50 27V45H10V35Z" fill="currentColor" opacity="0.3"/>
                  </svg>
                  <span>Vista Previa</span>
                </div>
                <div className="proyecto-card__overlay">
                  <button className="proyecto-card__button">
                    <span>Ver Detalles</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="proyecto-card__content">
                <span className="proyecto-card__categoria">{proyecto.categoria}</span>
                <h3 className="proyecto-card__titulo">{proyecto.titulo}</h3>
                <div className="proyecto-card__info">
                  <span>{proyecto.año}</span>
                  <span>•</span>
                  <span>{proyecto.ubicacion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProyectoModal 
          proyecto={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Proyectos;
