import React from "react";

function Education({ education }) {
  if (!Array.isArray(education)) return null;

  return (
    <section id="education" className="section glass-card">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <h3>
              {edu.degree} - {edu.institution}
            </h3>
            <p>{edu.duration}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;