import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactSection({ personalInfo }) {
  if (!personalInfo) return null;
  const { email, phone, location, linkedin, github, portfolio } = personalInfo;
  return (
    <section id="contact" className="contact-section container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        Contact
      </motion.h2>
      <motion.div
        className="row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="col-md-8">
          <div className="contact-details">
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
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-action">
            <a
              href={`mailto:${email}`}
              className="contact-button btn btn-primary mt-3"
            >
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;