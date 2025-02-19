// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";

function NavBar({ personalInfo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        GR
      </div>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="summary" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Summary
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Education
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Certifications
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;