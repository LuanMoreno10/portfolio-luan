import React, { useState, useEffect } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { IoClose } from "react-icons/io5"; // Import close icon
import "../styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 90; // Increased offset for better visibility
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (open) {
      setOpen(false);
      // Small delay on mobile to allow menu close animation to start/finish
      setTimeout(scrollToTarget, 300);
    } else {
      // Immediate scroll on desktop
      scrollToTarget();
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (open) setOpen(false);

    const scrollToFooter = () => {
      const footer = document.querySelector('.footer-container');
      if (footer) {
        footer.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    if (open) {
      setTimeout(scrollToFooter, 300);
    } else {
      scrollToFooter();
    }
  };

  // Social click handler reuse
  const handleSocialClick = (e, url, type) => {
    try { e.preventDefault(); } catch (err) { }

    if (type === 'email') {
      const email = 'luan22moreno14@gmail.com';
      window.location.href = `mailto:${email}`;
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  const handleLogoClick = () => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand" onClick={handleLogoClick}>
          Luan Moreno
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={handleContactClick}>Contact</a>
        </nav>

        {/* Mobile Menu Button - Only show when closed */}
        {isMobile && !open && (
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <span className="menu-icon">
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </span>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="brand" onClick={handleLogoClick}>Luan Moreno</span>
          <button className="menu-close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
            <IoClose size={32} />
          </button>
        </div>

        <div className="mobile-menu-content">
          <nav className="mobile-nav-links-list">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} style={{ animationDelay: '0.1s' }}>About</a>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} style={{ animationDelay: '0.2s' }}>Projects</a>
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} style={{ animationDelay: '0.3s' }}>Skills</a>
            <a href="#contact" onClick={handleContactClick} style={{ animationDelay: '0.4s' }}>Contact</a>
          </nav>

          <div className="mobile-menu-footer" style={{ animationDelay: '0.5s' }}>
            <a href="/Luan_AlvesCV.pdf" download="Luan_AlvesCV.pdf" className='btn btn-primary mobile-cv-btn'>
              Download CV
            </a>

            <div className="mobile-socials">
              <a href="mailto:luan22moreno14@gmail.com" onClick={(e) => handleSocialClick(e, '', 'email')} aria-label="Email">
                <SiGmail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/luan-moreno10/" onClick={(e) => handleSocialClick(e, 'https://www.linkedin.com/in/luan-moreno10/', 'linkedin')} aria-label="LinkedIn">
                <SiLinkedin size={24} />
              </a>
              <a href="https://github.com/LuanMoreno10" onClick={(e) => handleSocialClick(e, 'https://github.com/LuanMoreno10', 'github')} aria-label="GitHub">
                <SiGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}