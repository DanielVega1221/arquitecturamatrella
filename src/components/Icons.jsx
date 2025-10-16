import React from 'react';

// Componente base para iconos SVG
const Icon = ({ children, className = "", size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`icon ${className}`}
    {...props}
  >
    {children}
  </svg>
);

// Iconos decorativos elegantes
export const ArchIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <path
      d="M3 21h18M4 21V7l8-4 8 4v14M9 21v-6h6v6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </Icon>
);

export const DrawingIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 6v6M9 9l6 6"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </Icon>
);

export const CompassIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </Icon>
);

export const GeometryIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <polygon
      points="12,2 22,20 2,20"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 10v6M9 13h6" stroke="currentColor" strokeWidth="1" />
  </Icon>
);

export const GridIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </Icon>
);

export const CurveIcon = ({ className, size }) => (
  <Icon className={className} size={size}>
    <path
      d="M3 17c0-5.5 4.5-10 10-10s10 4.5 10 10"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M6 14c0-3.3 2.7-6 6-6s6 2.7 6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="12" cy="14" r="2" fill="currentColor" />
  </Icon>
);

// Formas decorativas abstractas
export const FloatingShape1 = ({ className, size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 50 Q50 20 80 50 Q50 80 20 50Z"
      fill="currentColor"
      opacity="0.1"
    />
    <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);

export const FloatingShape2 = ({ className, size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="40,10 65,30 65,50 40,70 15,50 15,30"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.2"
    />
  </svg>
);

export const FloatingShape3 = ({ className, size = 60 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15"
      y="15"
      width="30"
      height="30"
      fill="currentColor"
      opacity="0.1"
      transform="rotate(45 30 30)"
    />
    <rect
      x="20"
      y="20"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
      transform="rotate(45 30 30)"
    />
  </svg>
);

export default Icon;