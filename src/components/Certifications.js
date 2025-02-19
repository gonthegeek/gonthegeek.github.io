// src/components/CertificationsSection.jsx
import React from "react";
import { motion } from "framer-motion";

function CertificationsSection({ certifications }) {
  if (!certifications) return null;

  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      <div className="cert-list">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{c.title}</h3>
            <p>{c.issuer}</p>
            <p>{c.date}</p>
            {c.credentialUrl && (
              <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                View Credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;