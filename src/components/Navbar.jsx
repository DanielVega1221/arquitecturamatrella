import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setVisible(scrollPosition > 100); // Aparece después de 100px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__container">
        <a href="#" className="navbar__logo" onClick={handleLinkClick}>DM</a>
        
        <button 
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <li><a href="#" className="navbar__link" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#sobre-mi" className="navbar__link" onClick={handleLinkClick}>Sobre Mí</a></li>
          <li><a href="#proyectos" className="navbar__link" onClick={handleLinkClick}>Proyectos</a></li>
          <li><a href="#contacto" className="navbar__link" onClick={handleLinkClick}>Contacto</a></li>
          <li><a href="#contacto" className="navbar__cta" onClick={handleLinkClick}>Trabajemos</a></li>
        </ul>

        {isMenuOpen && <div className="navbar__overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
