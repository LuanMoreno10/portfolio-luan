import React from 'react';
import Hero from './components/Hero.jsx';
import TechStrip from './components/TechStrip.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
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

        <section className="panel panel--alt panel--flush">
          <div className="inner">
            <TechStrip />
          </div>
        </section>

        <section className="panel">
          <div className="inner">
            <About />
          </div>
        </section>

        <section className="panel panel--alt">
          <div className="inner">
            <Skills />
          </div>
        </section>

        <section className="panel">
          <div className="inner">
            <Projects />
          </div>
        </section>

        <section className="panel">
          <div className="inner">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
