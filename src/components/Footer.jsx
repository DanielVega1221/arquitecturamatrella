import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Logo y descripción */}
          <div className="footer__brand">
            <h3 className="footer__logo">Delfina Matrella</h3>
            <p className="footer__tagline">
              Arquitecta · Diseñadora de Interiores
            </p>
            <p className="footer__description">
              Creando espacios únicos que transforman la manera en que vivimos y trabajamos.
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="footer__links">
            <h4 className="footer__title">Navegación</h4>
            <ul className="footer__list">
              <li><a href="#inicio" className="footer__link">Inicio</a></li>
              <li><a href="#sobre-mi" className="footer__link">Sobre Mí</a></li>
              <li><a href="#proyectos" className="footer__link">Proyectos</a></li>
              <li><a href="#contacto" className="footer__link">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer__contact">
            <h4 className="footer__title">Contacto</h4>
            <ul className="footer__list">
              <li>
                <a href="mailto:delfina@arquitecta.com" className="footer__link">
                  delfina@arquitecta.com
                </a>
              </li>
              <li>
                <a href="tel:+541234567890" className="footer__link">
                  +54 (11) 2345-6789
                </a>
              </li>
              <li className="footer__location">
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="footer__social">
            <h4 className="footer__title">Sígueme</h4>
            <div className="footer__social-links">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Behance">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 8h6M7 7h4c2 0 3 1 3 3s-1 3-3 3H7V7z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 13h5c2 0 3 1 3 3s-1 3-3 3H7v-6z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19 13c-2 0-3 1-3 3s1 3 3 3c1.5 0 2.5-.5 3-1.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Pinterest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.35 9.33-.09-.79-.17-2.01.04-2.87.19-.78 1.23-5.2 1.23-5.2s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.55 1.89 1.86 0 3.29-1.96 3.29-4.79 0-2.5-1.8-4.25-4.37-4.25-2.98 0-4.73 2.23-4.73 4.54 0 .9.35 1.86.78 2.38.09.1.1.19.07.3-.08.32-.26 1.04-.29 1.19-.04.19-.15.23-.34.14-1.31-.61-2.13-2.52-2.13-4.06 0-3.3 2.4-6.33 6.92-6.33 3.63 0 6.46 2.59 6.46 6.04 0 3.6-2.27 6.5-5.42 6.5-1.06 0-2.05-.55-2.39-1.2l-.65 2.48c-.24.91-.88 2.06-1.31 2.76.99.3 2.04.47 3.13.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__copyright">
            <p>© {currentYear} Delfina Matrella. Todos los derechos reservados.</p>
            <p className="footer__credit">
              Diseñado por <span className="footer__brand-link">UXnicorp</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
