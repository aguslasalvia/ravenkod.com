# RavenKod ᚱ

Sitio web de **RavenKod** — software a medida para web, móvil y desktop. _// forjadores del núcleo_

Landing page de una sola página con estética de forja nórdica: hero con ventana de código animada, servicios, proceso de trabajo, diferenciales, equipo y contacto.

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server y build
- **React Router v7** — routing del lado del cliente
- **lucide-react** — iconografía
- **CSS plano** — un archivo de estilos por componente
- **Bun** como package manager (también funciona con npm)

## Desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun run dev

# Build de producción (typecheck + bundle)
bun run build

# Previsualizar el build
bun run preview

# Linter
bun run lint
```

## Estructura del proyecto

```
src/
├── main.tsx                 # Punto de entrada
├── app.tsx                  # Rutas (/ y 404)
└── index.css                # Estilos globales, variables y fuentes
pages/
├── home/                    # Página principal (arma todas las secciones)
└── not-found/               # Página 404
components/
├── layouts/                 # MainLayout (navbar + contenido + footer)
├── navegation/              # Navbar, sidebar y hamburguesa (mobile)
├── sections/                # Hero, servicios, proceso, why-us, equipo y contacto
├── service-card/            # Tarjeta de servicio
├── process-card/            # Tarjeta de paso del proceso
├── why-card/                # Tarjeta de diferencial
├── team-card/               # Tarjeta de integrante del equipo
├── divider/                 # Separador entre secciones
├── section/                 # Contenedor base de sección
└── footer/                  # Pie de página
public/
├── favicon.png
└── icons.svg                # Sprite de íconos
```

## Rutas

| Ruta  | Página                                                              |
| ----- | ------------------------------------------------------------------- |
| `/`   | Home: hero → servicios → proceso → why-us → equipo → contacto       |
| `/*`  | Página 404                                                          |
