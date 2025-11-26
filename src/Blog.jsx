import React, { useState } from "react";
import aiImage from "./assets/ai-tools-dev-2025.png";
import cloudImage from "./assets/cloud-deployment-guide.png";
import edgeImage from "./assets/edge-ai-network.png";
import { Link } from "react-router-dom";
// import "./Blog.css";

function Blog() {
  const [hovered, setHovered] = useState(false);

  const blogs = [
    {
      img: aiImage,
      title: "Top 5 AI Tools Every Developer Should Try in 2025",
      desc: "Discover must-have AI platforms — from code assistants to testing tools — that supercharge developer creativity and productivity.",
      link: "#",
    },
    {
      img: cloudImage,
      title: "Mastering Cloud Deployment: A Beginner’s Guide to AWS & Azure",
      desc: "Learn the essentials of deploying scalable apps on AWS and Azure with simple, reliable cloud practices.",
      link: "#",
    },
    {
      img: edgeImage,
      title: "Rise of Edge AI: Why Processing Data Locally Is the Future",
      desc: "Explore how Edge AI powers smarter, faster devices by processing data locally on IoT and embedded systems.",
      link: "#",
    },
  ];

  return (
    <div className={`blog-wrapper ${hovered ? "hovered" : ""}`}>
      <div className="blog-content">
        <div className="all">
          <div className="section-tag">LATEST INSIGHTS</div>
        </div>

        <div className="blog-header">
          <h1 className="blog-title">Tech Blogs</h1>
        </div>

        <div className={`blog-grid ${hovered ? "shifted" : ""}`}>
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt={blog.title} className="blog-img" />
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <a href={blog.link} className="learn-more">
                  Learn more →
                </a>
              </div>
            </div>
          ))}

          {/* Interactive Explore More Card */}
          <div
            className={`blog-card blog-more-card ${hovered ? "expanded" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link to="/Blogpage" className="more-blog-link">
              <div className="link-content">
                <i className="bi bi-arrow-right arrow-icon forwhite"></i>
                <div className="hidden-text">
                  <h3 className="forwhite">Explore More Blogs</h3>
                  <p className="forwhite">
                    Click to read full articles, deep dives, and tutorials.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
