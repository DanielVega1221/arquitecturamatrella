# 🎨 Animaciones GSAP - Portfolio Delfina Matrella

## 🎯 Filosofía de Animación

Este portfolio está diseñado para ser **visualmente atractivo y profesional**, utilizando animaciones GSAP para crear una experiencia fluida y moderna que compensa el menor número de proyectos con calidad en la presentación.

---

## ✨ Efectos Implementados

### 🏠 Hero Section
**Objetivo:** Impacto inmediato con llamado a la acción destacado

- **Fade-in escalonado** del contenido (título → subtítulo → CTA)
- **CTA Pulse Animation** (loop infinito):
  ```javascript
  scale: 1.05
  boxShadow: expandido
  duration: 1.5s
  repeat: -1 (infinito)
  yoyo: true
  ```
- **Scroll indicator** con línea animada

### 📊 Scroll Progress Bar
- Barra superior fija con gradiente (azul petróleo → dorado)
- `scaleX` sincronizado con scroll total
- `scrub: 0.3` para suavidad

### 🖼️ Proyectos Grid
**Objetivo:** Grid stagger reveal + filter transitions

#### 1. **Grid Load Animation** (al entrar en viewport)
```javascript
from: { y: 20, opacity: 0 }
to: { y: 0, opacity: 1 }
stagger: 0.06
ease: 'power3.out'
```

#### 2. **Filter Animation** (al cambiar filtro)
- **Out:** cards actuales → `y: -20, opacity: 0` (stagger: 0.03)
- **In:** nuevas cards → `y: 20, opacity: 0` → `y: 0, opacity: 1` (stagger: 0.06)

#### 3. **Hover Effect** (CSS)
```css
transform: scale(1.03)
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15)
```

### 🔍 Modal/Lightbox
- **Entrada:** 
  - Overlay: `opacity: 0 → 1`
  - Content: `scale: 0.9, opacity: 0 → scale: 1, opacity: 1`
- **Salida:** Inversa con delay de 0.1s
- **Navegación por teclado:** Arrow keys + Escape
- **Fondo oscuro** para máximo contraste (rgba(0, 0, 0, 0.95))

### 🧭 Navbar
**Objetivo:** Transparent → Solid on scroll

```javascript
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    setIsScrolled(self.progress > 0)
  }
})
```

**Estados:**
- Transparente: `background-color: transparent`
- Scrolled: `background-color: rgba(255, 255, 255, 0.98)` + `backdrop-filter: blur(10px)`

### 💼 Servicios Cards
- **Stagger reveal** individual al entrar en viewport
- **Hover:** `translateY(-10px)` + border-top color reveal
- Delay de 0.1s entre cada card

### 👤 Sobre Mí
- Imagen: `x: -50, opacity: 0` (desde izquierda)
- Contenido: `x: 50, opacity: 0` (desde derecha)
- Entrada simultánea con ScrollTrigger

### 📧 Contacto
- Formulario con fade-in desde abajo
- WhatsApp flotante con **pulse animation** continua

---

## 🎛️ Configuración GSAP

### Plugins Utilizados
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Easings Principales
- `power3.out` - Animaciones de entrada suaves
- `power2.inOut` - Transiciones de modal
- `none` - Scroll progress (sincronizado exacto)

### ScrollTrigger Settings
```javascript
{
  trigger: elemento,
  start: 'top 80%',    // Inicia cuando el elemento está al 80% del viewport
  once: true,          // Solo anima una vez
  scrub: 0.3          // Para scroll progress (opcional)
}
```

---

## 🚀 Próximas Mejoras Sugeridas

### Nivel 1 - Quick Wins
- [ ] Parallax suave en imagen Hero (seguir mouse)
- [ ] Animación de números contadores en estadísticas "Sobre Mí"
- [ ] Reveal text con split por palabras en títulos

### Nivel 2 - Medium
- [ ] Magnetic buttons (botones que siguen el mouse)
- [ ] Image lazy load con placeholder blur
- [ ] Smooth scroll con Locomotive Scroll

### Nivel 3 - Advanced
- [ ] 3D tilt effect en project cards (vanilla-tilt)
- [ ] Cursor custom que cambia según elemento
- [ ] Page transitions con Barba.js

---

## 📦 Dependencias

```json
{
  "gsap": "^3.13.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```

---

## 🎬 Comandos

```bash
npm run dev              # Desarrollo (localhost:5173)
npm run build            # Build para producción
npm run preview          # Preview del build
npm run optimize-images  # Optimizar imágenes (requiere assets)
```

---

## 📝 Notas de Implementación

### Preloader
- Duración: 3 segundos
- Logo fade-in + barra de progreso
- Libera contenido principal al terminar

### Performance
- Las animaciones usan `will-change` para GPU acceleration
- ScrollTrigger optimizado con `scrub` controlado
- Imágenes con lazy loading nativo (loading="lazy")

### Responsive
- Todas las animaciones se adaptan a mobile
- Reduced motion para usuarios con preferencias de accesibilidad
- Touch-friendly (sin hover states que rompan UX móvil)

---

## 🎨 Paleta de Colores (Variables CSS)

```css
--bg-primary: #FFFFFF
--text-primary: #111827
--accent-primary: #0F4C75     /* Azul petróleo */
--accent-secondary: #F2A65A   /* Dorado suave */
```

---

## 🔗 Recursos Útiles

- [GSAP Docs](https://gsap.com/docs/v3/)
- [ScrollTrigger Guide](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualizer](https://gsap.com/docs/v3/Eases/)

---

**✍️ Creado para Delfina Matrella - Arquitectura Contemporánea**
