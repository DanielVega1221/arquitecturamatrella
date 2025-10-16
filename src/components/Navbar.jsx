import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setVisible(scrollPosition > 100); // Aparece después de 100px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__container">
        <a href="#" className="navbar__logo">DM</a>
        
        <ul className="navbar__menu">
          <li><a href="#" className="navbar__link">Inicio</a></li>
          <li><a href="#sobre-mi" className="navbar__link">Sobre Mí</a></li>
          <li><a href="#proyectos" className="navbar__link">Proyectos</a></li>
          <li><a href="#contacto" className="navbar__link">Contacto</a></li>
        </ul>

        <a href="#contacto" className="navbar__cta">Trabajemos</a>
      </div>
    </nav>
  );
};

export default Navbar;
