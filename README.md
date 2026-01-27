# Portfolio 2026

## ¿Qué es?

Portfolio personal, desarrollador fullstack. Un sitio web moderno y responsive que presenta proyectos, habilidades y experiencia profesional. Diseñado con enfoque en performance, accesibilidad y experiencia de usuario.


## Stack Técnico

- **Framework**: Next.js 16.1.4
- **Lenguaje**: TypeScript
- **React**: 19.2.3
- **Estilos**: Tailwind CSS 4 + PostCSS
- **Animaciones**: Motion (Framer Motion)
- **Iconos**: 
  - Font Awesome 7.1.0
  - Remix Icon 4.8.0
- **Fuentes**: Clash Display (local) + Google Fonts
- **Linting**: ESLint 9


## Estructura del Proyecto

```
portfolio_2026/
├── app/
│   ├── layout.tsx          # Layout raíz con metadatos
│   ├── globals.css         # Estilos globales
│   ├── fonts.ts            # Configuración de fuentes
│   ├── page.tsx            # Página de inicio
│   └── work/
│       └── [slug]/
│           └── page.tsx    # Páginas dinámicas de proyectos
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección principal
│   ├── Work.tsx            # Galería de proyectos
│   ├── About.tsx           # Sección sobre mí
│   ├── Footer.tsx          # Pie de página
│   ├── CircularText.tsx    # Componente de texto circular
│   ├── Marquee.tsx         # Carrusel de marquesina
│   ├── Button.tsx          # Botón reutilizable
│   ├── ViewportFrame.tsx   # Marco de viewport
│   └── LanguageProvider.tsx # Contexto de idioma
├── data/
│   └── projects.ts         # Base de datos de proyectos
├── public/
│   ├── fonts/              # Fuentes locales
│   └── icons/              # Iconos SVG
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── eslint.config.mjs
```

### Descripción de directorios

- **app/**: Estructura de rutas y layouts de Next.js
- **components/**: Componentes React reutilizables
- **data/**: Datos estáticos del proyecto
- **public/**: Archivos estáticos (fuentes, imágenes, iconos)
