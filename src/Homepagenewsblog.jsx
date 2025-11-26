import React from 'react';
import News from './News';
import Blog from './Blog';
import Spline from '@splinetool/react-spline';

function Homepagenewsblog() {
  return (
    <div className="homepagenewsblog">
      {/* NEWS SECTION */}
    
        <News />
  

      {/* 3D SPLINE SECTION */}
      {/* <section className="spline-section">
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/iaqcgg-6dPeTwjRR/scene.splinecode" />
          <div className="spline-overlay">
            <button className="cta-btn">
              Contact Us <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section> */}

      {/* BLOG SECTION */}
   
        <Blog />
 
    </div>
  );
}

export default Homepagenewsblog;
