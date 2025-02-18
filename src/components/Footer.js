import React from "react";

function Footer() {
  return (
    <footer className="footer-container glass-card">
      <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;