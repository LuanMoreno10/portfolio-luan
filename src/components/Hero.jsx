import React from 'react';
import '../styles.css';

function Hero() {
  return (
    <section className="hero-centered">
      <div className="hero-profile animate-fade-in">
        <img src="/images/profile-image.jpg" alt="Luan Moreno" className="profile-img" />
      </div>
      <div className="hero-info">
        <p className="hero-role animate-fade-in delay-100">Software Engineer</p>
        <h1 className="hero-name animate-fade-in delay-200">Luan Moreno</h1>
        <div className="hero-actions animate-fade-in delay-300">
          <a href="/Luan-AlvesCV.pdf" download="Luan-AlvesCV.pdf" className='btn btn-primary' aria-label="Download CV">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;