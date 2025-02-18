import React from 'react';

function Certifications({ certifications }) {
  return (
    <section className="section">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h3>{cert.title} - {cert.issuer}</h3>
            <p>{cert.date}</p>
            {cert.credentialUrl && (
              <p>
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                  View Credential
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;