import React from "react";
import ExperienceItem from "./ExperienceItem";

function Experience({ experience }) {
  if (!Array.isArray(experience)) return null;

  return (
    <section id="experience" className="section glass-card">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            details={exp.details}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;