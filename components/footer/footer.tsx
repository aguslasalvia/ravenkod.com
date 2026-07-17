import { CalendarClock } from "lucide-react"

import "./footer.css"

const links = [
  { href: "/#services", label: "Servicios" },
  { href: "/#process", label: "Proceso" },
  { href: "/#why", label: "Por qué" },
  { href: "/#team", label: "Equipo" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__frieze">
        <span className="footer__frieze-rune runic-font">ᚱᚨᚡᛖᚾᚲᛟᛞ</span>
      </div>

      <div className="footer__grid">
        <div className="footer__brand-block">
          <div className="footer__brand">
            <img className="footer__brand-icon" src="/favicon.png" alt="" />
            <span className="footer__brand-name">RAVENKOD</span>
          </div>
          <p className="footer__brand-tagline">
            Software a medida — hecho a mano.
            Construimos el núcleo que hace funcionar tu empresa.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Mapa del sitio">
          <span className="footer__col-title">// mapa</span>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer__contact">
          <span className="footer__col-title">// contacto</span>
          <p>¿Tenés un proyecto en mente? Contanos y lo tallamos juntos.</p>
          <a className="footer__cta" href="/#contact">
            <CalendarClock size={16} strokeWidth={1.8} />
            Agenda llamada
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} RAVENKOD · EST. 2024</p>
        <p className="footer__bottom-tagline">// forjadores del núcleo</p>
        <p>63.4°N / 10.4°E</p>
      </div>
    </footer>
  )
}
