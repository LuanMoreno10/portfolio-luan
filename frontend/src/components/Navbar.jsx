import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setOpen(false); // Close mobile menu
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false); // Close mobile menu
    
    // Scroll to footer contact section
    const footer = document.querySelector('.footer-container');
    if (footer) {
      footer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="logo" /><h3>Luan Moreno</h3>
        </div>
        <nav className="nav-links">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={handleContactClick}>Contact</a>
        </nav>
        {isMobile && (
          <button className="menu-button" onClick={() => setOpen(!open)}>
            <span className="menu-icon">
              <span className={`menu-line ${open ? 'open' : ''}`}></span>
              <span className={`menu-line ${open ? 'open' : ''}`}></span>
              <span className={`menu-line ${open ? 'open' : ''}`}></span>
            </span>
          </button>
        )}
      </div>
      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={handleContactClick}>Contact</a>
        </div>
      )}
    </header>
  );
}