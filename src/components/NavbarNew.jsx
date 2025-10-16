import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CompassIcon, GeometryIcon } from './Icons';
import './NavbarNew.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const menu = menuRef.current;

    // Animación inicial del navbar
    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Animación del logo
    gsap.fromTo(logo,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Animación de los items del menu
    gsap.fromTo(menu.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.7 }
    );

    // Scroll trigger para cambiar estado del navbar
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen) {
      gsap.to('.navbar__mobile', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="container">
        <div className="navbar__content">
          {/* Logo mejorado */}
          <div ref={logoRef} className="navbar__logo">
            <a href="#hero" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}>
              <div className="logo__icon">
                <CompassIcon size={28} className="logo__compass" />
                <GeometryIcon size={20} className="logo__geometry" />
              </div>
              <div className="logo__text-wrapper">
                <span className="logo__text">DELFINA</span>
                <span className="logo__subtitle">ARQUITECTA</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation mejorado */}
          <ul ref={menuRef} className="navbar__menu">
            {navItems.map((item, index) => (
              <li key={index} className="navbar__item">
                <a 
                  href={item.href}
                  className="navbar__link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.target, { scale: 1.05, duration: 0.3 });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.3 });
                  }}
                >
                  {item.name}
                  <span className="link__underline"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button mejorado */}
          <div className="navbar__cta">
            <a 
              href="#contact"
              className="btn btn--primary btn--animated"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              onMouseEnter={(e) => {
                gsap.to(e.target, { y: -3, duration: 0.3, ease: "power2.out" });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { y: 0, duration: 0.3, ease: "power2.out" });
              }}
            >
              <span>Trabajemos Juntos</span>
              <div className="btn__bg"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu mejorado */}
        <div className={`navbar__mobile ${isMobileMenuOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-menu">
            {navItems.map((item, index) => (
              <li key={index} className="navbar__mobile-item">
                <a 
                  href={item.href}
                  className="navbar__mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-cta">
            <a 
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Trabajemos Juntos
            </a>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="navbar__decoration">
        <div className="decoration__line"></div>
      </div>
    </nav>
  );
};

export default Navbar;