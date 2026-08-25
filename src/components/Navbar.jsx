import { useState } from "react";
import { navLinks } from "../data/portfolioData";
export default function Navbar({ activeSection, scrolled, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={handleNavClick}>
          &lt;MN /&gt;
        </a>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={handleNavClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          <span className="icon-sun">☀</span>
          <span className="icon-moon">☾</span>
        </button>
      </div>
    </nav>
  );
}
