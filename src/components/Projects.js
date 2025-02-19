// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";

function ProjectsSection({ projects }) {
  if (!projects) return null;

  return (
    <section id="projects" className="projects-section">
      <motion.h2 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.url && (
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;