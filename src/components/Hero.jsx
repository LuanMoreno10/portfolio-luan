import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import { contact } from '../data.js';
import { handleAnchorClick } from '../scrollTo.js';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />

      {/* Everything except the navbar centers in the space left over below
          it, so the navbar itself always sits right under the panel's own
          padding instead of drifting with viewport height. */}
      <div className="hero-body">
        <motion.div
          className="hero-avatar"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <picture>
            <source srcSet="/images/profile-avatar.webp" type="image/webp" />
            <img
              src="/images/profile-avatar.jpg"
              alt={contact.name}
              width="230"
              height="153"
              fetchpriority="high"
            />
          </picture>
          <span className="hero-chip">{contact.name} 👋</span>
        </motion.div>

        <motion.p
          className="hero-role"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {contact.role}
        </motion.p>

        <motion.h1
          className="display hero-name"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {contact.name}
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
        >
          I design and build modern websites, web applications and digital
          solutions for businesses.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.a
            className="btn btn--dark"
            href="#projects"
            onClick={(e) => handleAnchorClick(e, 'projects')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
            <span aria-hidden="true">↗</span>
          </motion.a>
          <motion.a
            className="btn btn--light"
            href="#contact"
            onClick={(e) => handleAnchorClick(e, 'contact')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
