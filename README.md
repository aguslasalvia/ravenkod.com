# React Basic Template

A minimal React + TypeScript template with React Router, built with Vite.

## Features

- **React 19** - Latest React with hooks
- **TypeScript** - Type safety out of the box
- **React Router v7** - Client-side routing
- **Vite** - Fast development and building
- **ESLint** - Code linting with React hooks rules

## Getting Started

This template uses **Bun** as the package manager by default.

```bash
# Install dependencies
bun install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── App.tsx          # Main app component with routes
├── main.tsx         # Entry point
└── index.css        # Global styles
pages/
├── index.tsx        # Pages entry
└── Home/            # Example page component
    ├── Home.tsx
    └── Home.css
```

## Adding Tailwind CSS (Optional)

If you want to use Tailwind CSS:

```bash
# Install Tailwind and its dependencies
npm install -D tailwindcss @tailwindcss/vite

# Enable the plugin in vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Then add these directives to `src/index.css`:

```css
@import "tailwindcss";
```

## License

MIT
