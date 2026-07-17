import { useEffect, useRef, useState } from 'react'

import './section.css'

interface SectionProps {
  id?: string,
  children?: React.ReactNode
  badge?: string,
  saga?: string,
  header?: string,
  subheader?: string
}

export default function Section(props: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -12% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={props.id} ref={sectionRef} className={`reveal-section${visible ? ' reveal-section--visible' : ''}`}>
      <div className="section__content">
        {(props.badge || props.saga) && (
          <div className="section__badge-row">
            {props.badge && <span className="section__badge">{props.badge}</span>}
            {props.saga && <span className="section__saga">// saga {props.saga}</span>}
          </div>
        )}

        {(props.header || props.subheader) && (
          <div className="section__header-content">
            {props.header && <h2 className="section__header">{props.header}</h2>}
            {props.subheader && <p className="section__subheader">{props.subheader}</p>}
          </div>
        )}


        {props.children}


      </div>

    </section>
  )
}
