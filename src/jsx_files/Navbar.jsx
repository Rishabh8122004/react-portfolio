import { useState } from "react";
import "../css_files/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>


      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="/" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="/about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
