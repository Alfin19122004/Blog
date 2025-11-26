import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
        <h3>About the Author</h3>
        <p>
          Hi, I’m <span className="highlight">Abi B</span> — a tech enthusiast and developer passionate about AI, IoT, and smart systems.  
          Explore my projects and ideas shaping the future of innovation.
        </p>
        <a 
          href="https://yourportfolio.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-link"
        >
          View Portfolio →
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
