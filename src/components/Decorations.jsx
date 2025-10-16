import React from 'react';
import './Decorations.css';

const Decorations = ({ variant = 'default' }) => {
  return (
    <div className={`decorations decorations--${variant}`}>
      {/* Líneas decorativas animadas */}
      <svg className="decorations__lines" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-mauve)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-pink)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-pink)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-mauve)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Líneas curvas */}
        <path 
          className="decorations__line decorations__line--1"
          d="M 0 200 Q 250 100 500 200 T 1000 200" 
          stroke="url(#lineGradient1)" 
          strokeWidth="2" 
          fill="none"
        />
        <path 
          className="decorations__line decorations__line--2"
          d="M 0 400 Q 250 350 500 400 T 1000 400" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1.5" 
          fill="none"
        />
        <path 
          className="decorations__line decorations__line--3"
          d="M 0 700 Q 250 650 500 700 T 1000 700" 
          stroke="url(#lineGradient1)" 
          strokeWidth="1" 
          fill="none"
        />
      </svg>

      {/* Puntos flotantes */}
      <div className="decorations__dots">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="decorations__dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Formas geométricas */}
      <svg className="decorations__shapes" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-mauve)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-pink)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Círculos decorativos */}
        <circle 
          className="decorations__shape decorations__shape--1"
          cx="100" 
          cy="150" 
          r="80" 
          fill="url(#shapeGradient)" 
        />
        <circle 
          className="decorations__shape decorations__shape--2"
          cx="850" 
          cy="300" 
          r="120" 
          fill="url(#shapeGradient)" 
        />
        <circle 
          className="decorations__shape decorations__shape--3"
          cx="200" 
          cy="750" 
          r="60" 
          fill="url(#shapeGradient)" 
        />
        
        {/* Rectángulos */}
        <rect 
          className="decorations__shape decorations__shape--4"
          x="700" 
          y="700" 
          width="150" 
          height="150" 
          rx="20"
          fill="url(#shapeGradient)" 
        />
      </svg>

      {/* Grid sutil de fondo */}
      <div className="decorations__grid" />
    </div>
  );
};

export default Decorations;
