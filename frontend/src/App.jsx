import React from 'react';  
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /> {/* First section - Workspace image */}
        <About /> {/* Second section - About me */}
        <Projects /> {/* Third section - My projects */}
        <Skills /> {/* Fourth section - My skills */}
        <Contact /> {/* Fifth section - Contact me */}
      </main>
      <footer className="footer">@ {new Date().getFullYear()} Luan Moreno</footer>
    </>
  );
}
