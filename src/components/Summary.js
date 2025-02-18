import React from "react";

function Summary({ summary }) {
  if (!Array.isArray(summary)) return null;

  return (
    <section id="summary" className="section glass-card">
      <h2>Summary</h2>
      <div className="summary-content">
        {summary.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default Summary;