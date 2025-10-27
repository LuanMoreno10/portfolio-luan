import React from 'react';
import '../styles.css';

function Hero() {
  return (
    <section className="hero-centered">
      <div className="hero-profile">
        <img src="/images/profile-image.jpg" alt="Luan Moreno" className="profile-img" />
      </div>
      <div className="hero-info">
        <p className="hero-role">Software Engineer</p>
        <h1 className="hero-name">Luan Moreno</h1>
        <div className="hero-actions">
          <a href="/Luan_AlvesCV.pdf" download="Luan_AlvesCV.pdf" className='btn' aria-label="Download CV">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;