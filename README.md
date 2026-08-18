# Metálicas C.A.

Sitio web de Estructuras Metálicas C.A., empresa dedicada a la fabricación de
estructuras metálicas, instalaciones eléctricas, soldaduras especiales y
reconstrucción de maquinaria pesada, ubicada en Ibagué, Tolima.

Migrado de HTML/CSS estático a una SPA con **React + Vite**.

## Requisitos

- Node.js 18 o superior
- npm

## Uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (genera la carpeta dist/)
npm run build

# Previsualizar el build de producción
npm run preview
```

## Estructura

```
├── public/img/          Imágenes estáticas del sitio
├── src/
│   ├── components/      Un componente por sección de la página
│   ├── App.jsx          Composición de las secciones
│   ├── App.css          Estilos globales
│   └── main.jsx         Punto de entrada
├── index.html
└── vite.config.js
```

## Pendiente antes de publicar en producción

- El formulario de contacto (`src/components/ContactForm.jsx`) abre el
  cliente de correo del visitante (`mailto:`) porque el sitio no tiene
  backend. Reemplazar `CONTACT_EMAIL` por el correo real de la empresa, o
  integrar un servicio de envío (Formspree, EmailJS, endpoint propio, etc.)
  para no depender de que el usuario tenga un cliente de correo configurado.
- Los enlaces de redes sociales del footer (`src/components/Footer.jsx`)
  están como marcador de posición (`href="#"`); actualizarlos con las
  cuentas reales.
- Optimizar el peso de las imágenes en `public/img/` (algunas superan los
  2-3 MB) antes de desplegar, para mejorar los tiempos de carga.
