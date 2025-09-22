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

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="logo" /><h3>Luan Moreno</h3>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        {isMobile && (
          <button className="menu-button" onClick={() => setOpen(!open)}>
            {open ? "x" : "☰"}
          </button>
        )}
      </div>
      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}