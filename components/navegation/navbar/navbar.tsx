import Hamburguer from "../hamburguer/hamburguer"

import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><span className="runic-font">ᚱ</span> avenkod</div>
      <ul className="navbar__links">
        <li><a href="/#services">Servicios</a></li>
        <li><a href="/#process">Proceso</a></li>
        <li><a href="/#why">Por qué</a></li>
        <li><a href="/#team">Equipo</a></li>
        <li><a className="navbar__contact-btn" href="/#contact">Agenda llamada</a></li>
      </ul>
      <Hamburguer />
    </nav>
  )
}