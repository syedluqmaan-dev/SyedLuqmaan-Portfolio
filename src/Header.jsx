import { useState, useEffect } from "react";
import "./Header.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleNavClick(href) {
    setActive(href);
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`sl-header ${scrolled ? "sl-header--scrolled" : ""}`}>
        <div className="sl-header-inner">

          {/* LOGO */}
          <a href="#home" className="sl-logo" onClick={() => setActive("")}>
            <span className="sl-logo-sl">SL</span>
            <span className="sl-logo-dot">.</span>
            <span className="sl-logo-name">Syed Luqmaan</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="sl-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`sl-nav-link ${active === link.href ? "sl-nav-link--active" : ""}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + HAMBURGER */}
          <div className="sl-header-right">
            <a href="mailto:Syedluqmaanwork@gmail.com" className="sl-hire-btn">
              Hire Me ↗
            </a>
            <button
              className={`sl-hamburger ${menuOpen ? "sl-hamburger--open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`sl-mobile-menu ${menuOpen ? "sl-mobile-menu--open" : ""}`}>
        <nav className="sl-mobile-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="sl-mobile-link"
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => handleNavClick(link.href)}
            >
              <span className="sl-mobile-link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Syedluqmaanwork@gmail.com"
            className="sl-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me ↗
          </a>
        </nav>
      </div>
    </>
  );
}