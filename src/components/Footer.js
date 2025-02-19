// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Gonzalo Ronzon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;