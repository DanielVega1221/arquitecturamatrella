import React, { useEffect } from 'react';
import './ProyectoModal.css';

const ProyectoModal = ({ proyecto, onClose }) => {
  useEffect(() => {
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Cerrar modal al hacer click en el backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal__content">
          <div className="modal__image">
            <div className="modal__image-placeholder">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="15" y="20" width="50" height="40" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="28" cy="33" r="4" fill="currentColor"/>
                <path d="M15 50L28 38L40 48L58 32L65 38V60H15V50Z" fill="currentColor" opacity="0.3"/>
              </svg>
              <span>Imagen del Proyecto</span>
            </div>
          </div>

          <div className="modal__info">
            <div className="modal__header">
              <span className="modal__categoria">{proyecto.categoria}</span>
              <h2 className="modal__titulo">{proyecto.titulo}</h2>
            </div>

            <div className="modal__description">
              <p>{proyecto.descripcion}</p>
            </div>

            <div className="modal__details">
              <div className="modal__detail">
                <span className="modal__detail-label">Año</span>
                <span className="modal__detail-value">{proyecto.año}</span>
              </div>
              <div className="modal__detail">
                <span className="modal__detail-label">Ubicación</span>
                <span className="modal__detail-value">{proyecto.ubicacion}</span>
              </div>
              <div className="modal__detail">
                <span className="modal__detail-label">Área</span>
                <span className="modal__detail-value">{proyecto.area}</span>
              </div>
              <div className="modal__detail">
                <span className="modal__detail-label">Cliente</span>
                <span className="modal__detail-value">{proyecto.cliente}</span>
              </div>
            </div>

            <div className="modal__servicios">
              <h3>Servicios Realizados</h3>
              <div className="modal__servicios-list">
                {proyecto.servicios.map((servicio, index) => (
                  <span key={index} className="modal__servicio-tag">
                    {servicio}
                  </span>
                ))}
              </div>
            </div>

            <button className="modal__cta" onClick={onClose}>
              <span>Cerrar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoModal;
