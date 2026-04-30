import "./Footer.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/syedluqmaan-dev" },
  { label: "Email", href: "mailto:Syedluqmaanwork@gmail.com" },
  { label: "Portfolio", href: "https://syedluqmaan-portfolio.vercel.app" },
];

export default function Footer() {
  return (
    <footer className="sl-footer">

      {/* TOP STRIP */}
      <div className="sl-footer-top">
        <div className="sl-footer-cta-block">
          <p className="sl-footer-cta-label">Open to opportunities</p>
          <h2 className="sl-footer-cta-heading">
            Let's build something <span>great</span> together.
          </h2>
          <a href="mailto:Syedluqmaanwork@gmail.com" className="sl-footer-cta-btn">
            Syedluqmaanwork@gmail.com ↗
          </a>
        </div>

        <div className="sl-footer-nav-block">
          <p className="sl-footer-nav-label">Navigation</p>
          <ul className="sl-footer-nav">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="sl-footer-nav-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sl-footer-social-block">
          <p className="sl-footer-nav-label">Find Me</p>
          <ul className="sl-footer-nav">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="sl-footer-nav-link">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="sl-footer-bottom">
        <div className="sl-footer-logo">
          <span className="sl-footer-logo-sl">SL</span>
          <span className="sl-footer-logo-dot">.</span>
        </div>
        <p className="sl-footer-copy">
          © {new Date().getFullYear()} Syed Luqmaan · Frontend Developer · Bangalore, India
        </p>
        <p className="sl-footer-built">
          Built with React.js ⚡
        </p>
      </div>

    </footer>
  );
}