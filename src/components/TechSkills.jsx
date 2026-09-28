import React from 'react';
import { motion } from 'framer-motion';
import { techSkills } from '../data.js';

export default function TechSkills() {
  return (
    <section>
      <h2 className="headline">Technical Skills</h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">Stack</span>
      </div>

      <div className="skills-grid">
        {techSkills.map((group, i) => (
          <motion.div
            className="skills-group"
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h3>{group.category}</h3>
            <div className="skills-tags">
              {group.items.map((item) => (
                <span className="skills-tag" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
