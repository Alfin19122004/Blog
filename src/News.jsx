import React from 'react';
import { Link } from "react-router-dom";

function App() {
  const newsItems = [
    { title: "Google Launches Gemini 2", text: "Google unveils Gemini 2, a faster, smarter AI built into Workspace to boost productivity and creativity." },
    { title: "Microsoft Expands Azure Quantum", text: "New hybrid computing powers Azure Quantum, combining classical and quantum tech for faster results." },
    { title: "Apple Rolls Out Passkey Login", text: "Apple moves toward a passwordless future, replacing passwords with safer, faster Passkeys." },
    { title: "OpenAI Reveals GPT-5", text: "OpenAI’s GPT-5 brings sharper logic and memory, enhancing AI collaboration across apps and tools." },
  ];

  return (
    <>
      <div className="news-wrapper">
        <div className="news-content">
          <div className="section-tag">LATEST TECH NEWS</div>

          <h1 className="news-title">
            Staying Ahead in the <span className="highlight">Tech World</span>
          </h1>
          <p className="news-subtext">
            Quick insights into the biggest updates shaping AI, cloud, and security.
          </p>

          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div className="news-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}

            {/* 5th CTA Card */}
            <div className="news-card news-more-card">
              <Link to="/blogpage" className="more-news-link">
                <div className="link-content">
                  <h3>Explore All Updates</h3>
                  <p>Click to read our full News and in-depth analyses.</p>
                  <i className="bi bi-arrow-right arrow-icon"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
