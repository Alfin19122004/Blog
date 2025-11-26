import React from 'react';
// import './Footer.css'; 
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>BinaryDatas</h4>
          <p>We are a passionate team dedicated to building great things on the web. Our mission is to deliver quality and innovation.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><Link to="/Newspage"><a href="#News">News</a></Link></li>
            <li><Link to="/Blogpage"><a href="#Blog">Blog</a></Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Connect</h4>
          {/* Use icons here in a real app (e.g., FontAwesome, react-icons) */}
          <a href="#" target="_blank" className="social-icon">Facebook</a>
          <a href="#" target="_blank" className="social-icon">Twitter</a>
          <a href="#" target="_blank" className="social-icon">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Company Name | Designed & Built with React
      </div>
    </footer>
  );
}

export default Footer;