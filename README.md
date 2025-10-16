# 🏛️ Portfolio Delfina Matrella - Arquitectura Contemporánea

Portfolio web moderno y visual para arquitecta, desarrollado con React + Vite + GSAP.

## 🎨 Características

- ✨ **Animaciones GSAP avanzadas** (stagger, parallax, transitions)
- 🖼️ **Grilla de proyectos filtrable** con categorías (Residencial, Interiores, Renders, Concursos)
- 🔍 **Modal/Lightbox** con navegación por teclado
- 📱 **Diseño responsive** (mobile-first)
- 🎭 **Preloader animado**
- 📊 **Scroll progress bar**
- 💬 **WhatsApp flotante**
- 🎯 **SEO optimizado**

---

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Modo desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### 3. Build para producción

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
Portfolio - DELFINA MATRELLA/
├── public/
│   └── logo.png              # Logo del sitio (REEMPLAZAR)
├── src/
│   ├── assets/               # Imágenes de proyectos
│   │   ├── renders/
│   │   ├── interiores/
│   │   └── concursos/
│   ├── components/
│   │   ├── Preloader.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProyectosGrid.jsx
│   │   ├── ProyectoModal.jsx
│   │   ├── Servicios.jsx
│   │   ├── SobreMi.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── ANIMACIONES.md            # Guía de animaciones GSAP
├── package.json
└── README.md
```

---

## 🎯 Secciones del Portfolio

### 1. Hero
- Imagen full-bleed con overlay
- Título + especialidad
- CTA animado con pulse infinito

### 2. Proyectos Grid
- Filtros: Todos / Residencial / Interiores / Renders / Concursos
- Grilla masonry responsive
- Hover overlay con información
- Click abre modal con galería

### 3. Modal de Proyecto
- Slider de imágenes con navegación
- Ficha técnica (superficie, año, ubicación)
- Botón "Solicitar Presupuesto"
- Navegación por teclado (flechas + Escape)

### 4. Servicios
- Cards con iconos
- Bullets con detalles
- Animación stagger al scroll

### 5. Sobre Mí
- Foto profesional
- Descripción técnica
- Estadísticas (proyectos, clientes, años)
- Botón descargar CV

### 6. Contacto
- Formulario de contacto
- Información directa (email, teléfono)
- WhatsApp flotante

---

## 🎨 Paleta de Colores

```css
--bg-primary: #FFFFFF          /* Fondo principal */
--text-primary: #111827        /* Texto principal (near-black) */
--accent-primary: #0F4C75      /* Azul petróleo */
--accent-secondary: #F2A65A    /* Dorado suave */
```

## 🔤 Tipografía

- **Display/Títulos:** Montserrat (geométrica, contundente)
- **Cuerpo:** Inter (legible y moderna)

---

## ✅ Checklist de Personalización

### 📋 Contenido Básico
- [ ] Reemplazar logo en `/public/logo.png`
- [ ] Actualizar meta tags en `index.html`
- [ ] Cambiar nombre en todos los componentes
- [ ] Actualizar links de redes sociales en Footer

### 🖼️ Imágenes
- [ ] Agregar imagen Hero en `Hero.jsx` (línea 72)
- [ ] Agregar foto personal en `SobreMi.jsx` (línea 48)
- [ ] Subir imágenes de proyectos a `/src/assets/`
- [ ] Actualizar data de proyectos en `ProyectosGrid.jsx` (línea 11)

### 📞 Contacto
- [ ] Actualizar email en `Contacto.jsx` y `Footer.jsx`
- [ ] Actualizar teléfono/WhatsApp (línea 94 de `Contacto.jsx`)
- [ ] Configurar formulario con servicio (EmailJS, Formspree, etc.)

### 📊 Sobre Mí
- [ ] Completar biografía en `SobreMi.jsx`
- [ ] Actualizar estadísticas (proyectos, clientes, años)
- [ ] Agregar link de descarga de CV (línea 59)

### 🎨 Estilos (Opcional)
- [ ] Ajustar colores en `index.css` (variables CSS)
- [ ] Personalizar animaciones en `ANIMACIONES.md`

---

## 🖼️ Optimización de Imágenes

### Usar Sharp (Recomendado)

```bash
npm run optimize-images
```

Este script:
- Redimensiona imágenes grandes (max 1920px)
- Comprime JPG/PNG sin pérdida visible
- Guarda versiones optimizadas

### Formatos Recomendados
- **JPG** para fotografías (85% quality)
- **PNG** para logos/gráficos con transparencia
- **WebP** para mejor compresión (90% quality)

### Tamaños Sugeridos
- **Hero:** 1920x1080px (landscape)
- **Proyectos:** 1200x800px (landscape)
- **Sobre Mí:** 800x1000px (portrait)

---

## 🚢 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### GitHub Pages

```bash
npm run build
# Configurar gh-pages branch con contenido de dist/
```

---

## 📦 Scripts Disponibles

```json
{
  "dev": "vite",                    // Desarrollo
  "build": "vite build",            // Producción
  "preview": "vite preview",        // Preview build
  "optimize-images": "node optimize-images.cjs"
}
```

---

## 🛠️ Stack Tecnológico

- **React** 19.1.1
- **Vite** 7.1.7
- **GSAP** 3.13.0 (animaciones)
- **Sharp** 0.34.4 (optimización de imágenes)

---

## 📚 Recursos

- [Documentación GSAP](https://gsap.com/docs/v3/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)

---

## 📝 Notas Importantes

### Placeholders
Todos los componentes tienen **placeholders** donde se deben agregar:
- Imágenes reales (marcados con comentarios `PLACEHOLDER`)
- Datos de proyectos reales
- Links de redes sociales
- Información de contacto real

### Formulario de Contacto
El formulario actual solo hace `console.log`. Para producción, integrar con:
- [EmailJS](https://www.emailjs.com/) (gratis, fácil)
- [Formspree](https://formspree.io/)
- Backend propio

### WhatsApp
Actualizar número en `Contacto.jsx` línea 94:
```javascript
const numero = '5491123456789'; // Sin espacios ni guiones
```

---

## 🤝 Soporte

Para consultas sobre el código o animaciones, revisar `ANIMACIONES.md`.

---

## 📜 Licencia

Proyecto desarrollado para **Delfina Matrella - Arquitectura**.

---

**✨ Portfolio listo para personalizar y publicar ✨**
