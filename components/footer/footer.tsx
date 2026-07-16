import "./footer.css"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__frieze">
        <span className="footer__frieze-rune runic-font">ᚱᚨᚡᛖᚾᚲᛟᛞ</span>
      </div>

      <div className="footer__bottom">
        <div className="footer__brand">
          <span className="footer__brand-icon runic-font">ᚱ</span>
          <span className="footer__brand-name">RAVENKOD</span>
          <span className="footer__brand-tagline">Software a medida — hecho a mano.</span>
        </div>

        <div className="footer__meta">
          <p>© {year} RAVENKOD · EST. 2024</p>
          <p>63.4°N / 10.4°E</p>
        </div>
      </div>
    </footer>
  )
}
