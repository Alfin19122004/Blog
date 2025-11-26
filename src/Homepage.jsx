// // export default Homepage;
// import React, { useRef, useEffect } from "react";
// import About from "./About";
// import Review from "./Review";
// import Portfolio from "./Portfolio";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import Homepagenewsblog from "./Homepagenewsblog";
// import heroImg from "./assets/Logo12345.png";
// import ScrollProgressLine from "./ScrollProgressLine";

// function Homepage() {
//   const imageRef = useRef(null);
//   // Ref for the home section to limit the cursor effect area
//   const homeSectionRef = useRef(null); 

//   useEffect(() => {
//     const imgElement = imageRef.current;
//     const sectionElement = homeSectionRef.current;
    
//     if (!imgElement || !sectionElement) return;

//     // Initially hide the logo before the mouse enters
//     imgElement.style.opacity = 0;
//     // Use a small transition for a smooth follow effect
//     imgElement.style.transition = 'transform 0.1s ease-out, opacity 0.3s ease-out';
    
//     // --- Mouse Movement Handler ---
//     const handleMouseMove = (e) => {
//       // Get mouse position relative to the entire document
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // The logo should be positioned relative to the viewport (fixed or absolute in CSS)
//       // We offset by -50% to center the logo on the cursor point
//       const transformX = mouseX; 
//       const transformY = mouseY;
      
//       // Update position
//       imgElement.style.transform = `translate(${transformX}px, ${transformY}px) translate(-50%, -50%)`;
//       imgElement.style.opacity = 1;
//     };
    
//     // --- Mouse Enter/Leave Handlers for the home section ---
//     const handleMouseEnter = () => {
//         imgElement.style.opacity = 1;
//     };
    
//     const handleMouseLeave = () => {
//         imgElement.style.opacity = 0;
//     };
    
//     // 1. Attach listeners to the specific Home Section
//     sectionElement.addEventListener("mousemove", handleMouseMove);
//     sectionElement.addEventListener("mouseenter", handleMouseEnter);
//     sectionElement.addEventListener("mouseleave", handleMouseLeave);
    
//     // 2. Hide the default mouse pointer inside the section
//     sectionElement.style.cursor = 'none';

//     return () => {
//       sectionElement.removeEventListener("mousemove", handleMouseMove);
//       sectionElement.removeEventListener("mouseenter", handleMouseEnter);
//       sectionElement.removeEventListener("mouseleave", handleMouseLeave);
//       // Restore the default mouse pointer when the component unmounts
//       sectionElement.style.cursor = 'default';
//     };
//   }, []);

//   return (
//     <>
//       <ScrollProgressLine />

//       {/* ---------------- HERO SECTION ---------------- */}
//       {/* 1. Attach the ref to the section */}
//       <section className="home-section" ref={homeSectionRef}> 
//         <div className="outside">
//           <div className="hero">
//             <h1>
//               The <span className="highlight">Tech</span> hub for next-gen innovators
//             </h1>
//             <p className="subtext">
//               Welcome to <strong>BinaryDatas</strong> — your daily dose of deep-dive articles, AI insights, and data-driven innovation.
//             </p>
//           </div>

//           <div className="marquee">
//             <div className="marquee-inner">
//               <span>AI · Machine Learning · IoT · Cloud · Cybersecurity · Data Science ·</span>
//               <span>AI · Machine Learning · IoT · Cloud · Cybersecurity · Data Science ·</span>
//             </div>
//           </div>

//           <div className="intro">
//             <p>We translate complex technology into simple, actionable insights — helping developers, founders, and learners stay ahead of the curve.</p>
//           </div>
//         </div>

//         {/* Hero image wrapper - We will remove this wrapper and move the image */}
//         {/* The image is now outside the flow and handled by its CSS/JS positioning */}
//       </section>
      
//       {/* 2. Position the custom cursor/logo outside the main content flow, at the end of the return */}
//       <img 
//         ref={imageRef} 
//         className="custom-cursor-logo" 
//         src={heroImg} 
//         alt="BinaryDatas Logo" 
//       />

//       {/* ---------------- PAGE SECTIONS ---------------- */}
//       <section id="about" className="about-section">
//         <About />
//       </section>
//       <section id="news-blog" className="newsblog-section">
//         <Homepagenewsblog />
//       </section>
//       <section id="review" className="review-section">
//         <Review />
//       </section>
//       <section id="portfolio" className="portfolio-section">
//         <Portfolio />
//       </section>
//       <section id="contact" className="contact-section">
//         <Contact />
//       </section>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// }

import React, { useRef, useEffect } from "react";
import About from "./About";
import Review from "./Review";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Homepagenewsblog from "./Homepagenewsblog";
import heroImg from "./assets/Logo12345.png";
import ScrollProgressLine from "./ScrollProgressLine";

function Homepage() {
  const imageRef = useRef(null);

  // The useEffect hook is now empty, as all custom mouse logic has been removed.
  // This ensures there are no side effects manipulating the cursor or image positioning.
  useEffect(() => {
    // Clean component mounting logic goes here (currently none needed)
  }, []);

  return (
    <>
      <ScrollProgressLine />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="home-section"> 
        <div className="outside">
          <div className="hero">
            <h1>
              The <span className="highlight">Tech</span> hub for next-gen innovators
            </h1>
            <p className="subtext">
              Welcome to <strong>BinaryDatas</strong> — your daily dose of deep-dive articles, AI insights, and data-driven innovation.
            </p>
          </div>

          <div className="marquee">
            <div className="marquee-inner">
              <span>AI · Machine Learning · IoT · Cloud · Cybersecurity · Data Science ·</span>
              <span>AI · Machine Learning · IoT · Cloud · Cybersecurity · Data Science ·</span>
            </div>
          </div>

          <div className="intro">
            <p>We translate complex technology into simple, actionable insights — helping developers, founders, and learners stay ahead of the curve.</p>
          </div>
        </div>

        {/* Re-introducing the original hero image wrapper */}
        <div className="hero-image-wrapper">
          <img ref={imageRef} className="imgin" src={heroImg} alt="BinaryDatas Logo" />
        </div>
      </section>

      {/* ---------------- PAGE SECTIONS ---------------- */}
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="news-blog" className="newsblog-section">
        <Homepagenewsblog />
      </section>
      {/* <section id="review" className="review-section">
        <Review />
      </section> */}
      <section id="portfolio" className="portfolio-section">
        <Portfolio />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Homepage;