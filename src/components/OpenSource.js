import React from 'react';

function OpenSource({ openSource }) {
  return (
    <section className="section">
      <h2>Open Source Contributions</h2>
      <div className="open-source-list">
        {openSource.map((os, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h3>{os.name}</h3>
            <p>{os.description}</p>
            <a href={os.url} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;