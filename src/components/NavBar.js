import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;