import React from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import WhatIBuild from './components/WhatIBuild.jsx';
import TechSkills from './components/TechSkills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="shell">
      <main>
        {/* Each panel is one rounded card stacked on the grey ground. */}
        <section className="panel panel--hero">
          <Hero />
        </section>

        <section className="panel panel--alt" id="projects">
          <div className="inner inner--wide">
            <Projects />
          </div>
        </section>

        <section className="panel" id="about">
          <div className="inner">
            <About />
          </div>
        </section>

        <section className="panel panel--alt" id="build">
          <div className="inner">
            <WhatIBuild />
          </div>
        </section>

        <section className="panel" id="skills">
          <div className="inner">
            <TechSkills />
          </div>
        </section>

        <section className="panel" id="contact">
          <div className="inner">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
