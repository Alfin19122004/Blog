import React from "react";

function About() {
  return (
    
      <div className="about-container">
        <h2 className="about-heading">About BinaryDatas</h2>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card ">
              <h3>Our Mission</h3>
              <p>
                We simplify technology for everyone by translating complex ideas
                into clear, actionable insights.
              </p>
            </div>

            <div className="about-card ">
              <h3>Our Vision</h3>
              <p>
                To build a global community where technology and creativity meet
                for continuous innovation.
              </p>
            </div>

            <div className="about-card ">
              <h3>What We Cover</h3>
              <p>
                From AI and Cloud to Cybersecurity and Data Science — everything
                that powers the digital world.
              </p>
            </div>

            <div className="about-card ">
              <h3>Our Community</h3>
              <p>
                We’re a space for learners, developers, and innovators — growing
                together with every post.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default About;
