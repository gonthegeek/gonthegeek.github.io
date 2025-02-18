import React from "react";

function Footer() {
  return (
    <footer className="footer-container glass-card">
      <p>© {new Date().getFullYear()} Gonzalo Ronzon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;