import React from "react";

const highlightSkills = ["React", "Node.js", "AWS"]; // Example highlights

function Skills({ skills }) {
  if (!Array.isArray(skills)) return null;

  return (
    <section id="skills" className="section glass-card">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => {
          const isHighlight = highlightSkills.includes(skill);
          return (
            <span
              key={skill}
              className={`skill-tag ${isHighlight ? "highlighted" : ""}`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;