import type { CSSProperties } from "react"

import "./hero-section.css"

interface EmberStyle extends CSSProperties {
  "--size": string
  "--duration": string
  "--delay": string
}

/* chispas que suben desde la forja: posiciones fijas a mano, no Math.random(), para que el resultado sea siempre el mismo y fácil de ajustar */
const embers: EmberStyle[] = [
  { left: "6%", "--size": "3px", "--duration": "7s", "--delay": "0s" },
  { left: "14%", "--size": "2px", "--duration": "9s", "--delay": "1.2s" },
  { left: "23%", "--size": "4px", "--duration": "6.5s", "--delay": "2.4s" },
  { left: "31%", "--size": "2px", "--duration": "8s", "--delay": ".6s" },
  { left: "40%", "--size": "3px", "--duration": "7.5s", "--delay": "3.1s" },
  { left: "52%", "--size": "2px", "--duration": "9.5s", "--delay": "1.8s" },
  { left: "61%", "--size": "3px", "--duration": "6s", "--delay": "4s" },
  { left: "69%", "--size": "2px", "--duration": "8.5s", "--delay": "2s" },
  { left: "77%", "--size": "4px", "--duration": "7s", "--delay": ".3s" },
  { left: "85%", "--size": "2px", "--duration": "9s", "--delay": "3.6s" },
  { left: "91%", "--size": "3px", "--duration": "6.8s", "--delay": "1.4s" },
  { left: "97%", "--size": "2px", "--duration": "8s", "--delay": "2.8s" },
]

const manifest = [
  { key: "web", value: "true" },
  { key: "móvil", value: "true" },
  { key: "desktop", value: "true" },
  { key: "temple", value: "eterno" },
]

/* un mismo brazo, repetido 8 veces girando: así se arma un vegvísir sin tallar 8 paths a mano */
const emblemSpokes = [0, 45, 90, 135, 180, 225, 270, 315]

function VegvisirMark() {
  return (
    <svg className="hero__emblem-svg" viewBox="0 0 100 100" role="img" aria-label="Vegvísir, la brújula rúnica">
      <circle className="hero__emblem-stroke" cx="50" cy="50" r="7" />
      {emblemSpokes.map((angle) => (
        <path
          key={angle}
          className="hero__emblem-stroke"
          transform={`translate(50 50) rotate(${angle})`}
          d="M0,-14 L0,-44 M0,-28 L8,-36 M0,-28 L-8,-36 M-5,-44 L0,-38 L5,-44"
        />
      ))}
    </svg>
  )
}

export default function HeroSection() {
  /* mutamos el estilo directo en el DOM (sin useState) para no re-renderizar en cada mousemove */
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    event.currentTarget.style.setProperty("--mx", `${x}%`)
    event.currentTarget.style.setProperty("--my", `${y}%`)
  }

  return (
    <section id="hero" onMouseMove={handleMouseMove}>
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__embers" aria-hidden="true">
        {embers.map((style, index) => (
          <span key={index} className="hero__ember" style={style} />
        ))}
      </div>

      <span className="hero__rail load-appear load-delay-5" aria-hidden="true">TRONDHEIM 63.4°N 10.4°E</span>

      <div className="hero__body">
        {/* primero en el DOM: en mobile aparece arriba de todo, antes del texto */}
        <div className="hero__emblem load-rise load-delay-1">
          <VegvisirMark />
        </div>

        <div className="hero__copy">
          <h1 className="hero__title load-rise load-delay-2">
            Software a medida, <span className="hero__title-accent">tallando</span> pieza por pieza.
          </h1>

          <div className="hero__foot load-rise load-delay-4">
            <p className="hero__subtitle">
              Construimos el núcleo que hace funcionar tu empresa:
              diseñado desde cero, con oficio y precisión.
            </p>

            <div className="hero__actions">
              <a className="hero__cta" href="/#contact">Contanos tu proyecto</a>
              <a className="hero__cta hero__cta--ghost" href="/#services">Ver servicios</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__manifest load-rise load-delay-5">
        <span className="hero__manifest-label">forjar "nucleo"</span>
        {manifest.map((item) => (
          <span className="hero__manifest-item" key={item.key}>
            <span className="hero__manifest-key">{item.key}</span>
            <span className="hero__manifest-value">{item.value}</span>
          </span>
        ))}
        <span className="hero__manifest-cursor" aria-hidden="true">▍</span>
      </div>
    </section>
  )
}
