import { CalendarClock, ChevronRight, Hammer, Layers, Route, Users } from 'lucide-react'

import './sidebar.css'

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: '/#services', label: 'Servicios', Icon: Layers },
  { href: '/#process', label: 'Proceso', Icon: Route },
  { href: '/#why', label: 'Por qué', Icon: Hammer },
  { href: '/#team', label: 'Equipo', Icon: Users },
]

export default function Sidebar(props: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar__backdrop${props.open ? ' sidebar__backdrop--open' : ''}`}
        onClick={props.onClose}
      />
      <aside className={`sidebar${props.open ? ' sidebar--open' : ''}`}>
        <div>
          <span className="sidebar__eyebrow">// navegación</span>
          <ul className="sidebar__links">
            {links.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} onClick={props.onClose}>
                  <Icon className="sidebar__link-icon" size={18} strokeWidth={1.8} />
                  <span>{label}</span>
                  <ChevronRight className="sidebar__link-chevron" size={16} strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__footer">
          <a className="sidebar__contact-btn" href="/#contact" onClick={props.onClose}>
            <CalendarClock size={17} strokeWidth={1.8} />
            Agenda llamada
          </a>
          <span className="sidebar__tagline">// forjadores del núcleo</span>
        </div>
      </aside>
    </>
  )
}
