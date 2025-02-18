import React, { useState } from "react";

function ExperienceItem({ role, company, duration, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>
        {role} - {company}
      </h3>
      <p>{duration}</p>
      {expanded && (
        <ul>
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="toggle-btn"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default ExperienceItem;