// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

function SkillsSection({ skills }) {
  if (!skills) return null;

  return (
    <section id="skills" className="skills-section">
      <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Skills
      </motion.h2>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;