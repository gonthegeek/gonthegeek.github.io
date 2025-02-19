// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";

function ContactSection({ personalInfo }) {
  console.log(personalInfo);
  if (!personalInfo) return null;
  const { name, title, email, phone, location, linkedin, github, portfolio } = personalInfo;

  return (
    <section id="contact" className="contact-section">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      {/* Personal info (the snippet you provided, minus glass-card) */}
      <motion.header
        className="header-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
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
      </motion.header>

      {/* A short prompt plus a direct mailto link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p style={{ marginTop: "1.5rem" }}>
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a
          href={`mailto:${email}`}
          className="contact-button"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          Send Email
        </a>
      </motion.div>
    </section>
  );
}

export default ContactSection;