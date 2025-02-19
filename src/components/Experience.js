// src/components/ExperienceSection.jsx
import React from "react";
import { motion } from "framer-motion";

function ExperienceSection({ experience }) {
  if (!experience) return null;

  return (
    <section id="experience" className="experience-section">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        Experience
      </motion.h2>

      <div className="experience-list">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{exp.role} - {exp.company}</h3>
            <p>{exp.duration}</p>
            <ul>
              {exp.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;