// src/components/EducationSection.jsx
import React from "react";
import { motion } from "framer-motion";

function EducationSection({ education }) {
  if (!education) return null;

  return (
    <section id="education" className="education-section">
      <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        Education
      </motion.h2>

      <div className="education-list">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{edu.degree} - {edu.institution}</h3>
            <p>{edu.duration}</p>
            <p>{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;