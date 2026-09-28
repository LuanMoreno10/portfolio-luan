import React from 'react';
import { motion } from 'framer-motion';
import { LuGlobe, LuShoppingCart, LuAppWindow, LuPlug, LuLayoutDashboard } from 'react-icons/lu';
import { whatIBuild } from '../data.js';
import { handleAnchorClick } from '../scrollTo.js';

const icons = {
  globe: LuGlobe,
  cart: LuShoppingCart,
  app: LuAppWindow,
  plug: LuPlug,
  dashboard: LuLayoutDashboard
};

export default function WhatIBuild() {
  return (
    <section>
      <h2 className="headline">What I Build</h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">Services</span>
      </div>

      <div className="build-grid">
        {whatIBuild.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <motion.div
              className="build-item"
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Icon className="build-icon" size={22} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <p className="build-cta">
        Have a project in mind? <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}>Let's build it.</a>
      </p>
    </section>
  );
}
