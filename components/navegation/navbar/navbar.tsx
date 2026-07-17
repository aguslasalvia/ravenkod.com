import { useEffect, useState } from "react"

import Hamburguer from "../hamburguer/hamburguer"
import Sidebar from "../sidebar/sidebar"

import "./navbar.css"

const links = [
  { id: "services", rune: "ᛋ", label: "Servicios" },
  { id: "process", rune: "ᛈ", label: "Proceso" },
  { id: "why", rune: "ᚦ", label: "Por qué" },
  { id: "team", rune: "ᛖ", label: "Equipo" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // el hero no tiene link: al volver arriba se limpia la selección
        if (entry.isIntersecting) setActive(entry.target.id === "hero" ? "" : entry.target.id)
      })
    }, { rootMargin: "-40% 0px -55% 0px" })

    const ids = ["hero", ...links.map((link) => link.id)]
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <a className="navbar__logo" href="/#"><img className="navbar__logo-img" src="/favicon.png" alt="R" />avenkod</a>
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              data-rune={link.rune}
              className={active === link.id ? "navbar__link--active" : ""}
              href={`/#${link.id}`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li><a className="navbar__contact-btn" href="/#contact">Agenda llamada</a></li>
      </ul>
      <Hamburguer open={open} onClick={() => setOpen(!open)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </nav>
  )
}
