import React, { useState } from "react";

import { Link } from "react-router-dom";

// import heroImg from "./assets/Logo12345.png";

export default function Sidebar({ minimal = true }) 
{
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      {/* --- TOP NAVBAR --- */}
      <header className="top-navbar">
        <div className="top-logo">
          <h2>
            Binary<span className="highlight">Datas</span>
          </h2>
        </div>
        {/* <img className="imgin" src={heroImg} alt="BinaryDatas Logo" /> */}
        <nav className="top-links">
          <span className="nav-btns">
            <Link to="/Blogpage" className="nav-btnn" data-text="Latest Blog">
              Latest Blog<i className="bi bi-chat-square-text"></i>
            </Link>
          </span>

          <span className="nav-btns">
            <Link to="/Newspage" className="nav-btnn" data-text="Trending News">
              Trending <i className="bi bi-newspaper"></i>
            </Link>
          </span>
        </nav>
        {/* --- MOBILE MENU ICON --- */}

        <div className="menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
      </header>

      {/* --- SIDEBAR --- */}

      <aside className={`sidebar-minimal ${menuOpen ? "open" : ""}`}>
        <nav className="nav-icons" onClick={closeMenu}>
          <Link to="/" className="icon-box">
            <i className="bi bi-house"></i>

            <span className="contact-text">HOME</span>
          </Link>

          <a href="#about" className="icon-box">
            <i className="bi bi-file-person"></i>

            <span className="contact-text">ABOUT</span>
          </a>

          <a href="#portfolio" className="icon-box">
            <i className="bi bi-briefcase"></i>

            <span className="contact-text">AUTHOR</span>
          </a>

          <a href="#contact" className="icon-box">
            <i className="bi bi-person-lines-fill"></i>

            <span className="contact-text">CONTACT</span>
          </a>
        </nav>
      </aside>

      {/* Overlay for mobile */}

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}