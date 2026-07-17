import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'

console.log('%cᚱᚨᚡᛖᚾᚲᛟᛞ', 'color:#c8a24a; font-size:28px; font-family:monospace; letter-spacing:6px;')
console.log('%c// forjadores del núcleo — ¿te gusta mirar bajo el capó? escribinos.', 'color:#7d6a3f; font-family:monospace; font-size:12px;')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
