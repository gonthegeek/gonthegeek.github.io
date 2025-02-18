import React from "react";

function Header({ personalInfo }) {
  if (!personalInfo) return null;

  const { name, title, email, phone, location, linkedin, github, portfolio } = personalInfo;

  return (
    <header className="header-container glass-card">
      <h1 className="name">{name}</h1>
      <p className="title">{title}</p>
      <p>Email: {email} | Phone: {phone} | Location: {location}</p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href={portfolio} target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </p>
    </header>
  );
}

export default Header;