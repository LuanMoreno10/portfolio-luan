import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <h2 className="headline">About Me</h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">About</span>
      </div>

      <div className="about-body lede">
        <p>
          I'm a Software Engineer focused on building practical digital
          solutions.
        </p>
        <p>
          My experience spans web development, software engineering,
          networking and systems, allowing me to approach projects from both
          the application and infrastructure perspective.
        </p>
        <p>
          I enjoy turning ideas into functional products — from business
          websites and e-commerce platforms to custom web applications,
          dashboards and automated systems.
        </p>
        <p>
          I'm particularly interested in building solutions that are simple
          to use, technically solid and capable of solving real business
          problems.
        </p>
        <p>
          Based in Portugal, available for freelance projects and
          professional opportunities.
        </p>
      </div>
    </motion.section>
  );
}
