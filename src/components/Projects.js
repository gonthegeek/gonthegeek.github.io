import React from "react";

function Projects({ projects }) {
  if (!Array.isArray(projects)) return null;

  return (
    <section id="projects" className="section glass-card">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;