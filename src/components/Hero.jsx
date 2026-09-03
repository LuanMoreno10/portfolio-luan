import React from 'react';
import Navbar from './Navbar.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />

      <div className="hero-avatar rise">
        <img src="/images/profile-image-optimized.jpg" alt="Luan Moreno" />
        <span className="hero-chip">Luan Alves 👋</span>
      </div>

      <h1 className="display rise d1">
        Building software, networks, and systems.
      </h1>

      <div className="hero-cta rise d2">
        <a className="btn btn--dark" href="#projects">
          Latest Projects
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
