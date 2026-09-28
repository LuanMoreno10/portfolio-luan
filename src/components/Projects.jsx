import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import { projectsData, contact } from '../data.js';

export default function Projects() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const overflow = trackRef.current.scrollWidth - viewportRef.current.clientWidth;
      setDragLimit(overflow > 0 ? overflow : 0);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <h2 className="headline">Selected work</h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">Projects</span>
      </div>

      <p className="drag-hint">Drag to explore →</p>

      <div className="projects-viewport" ref={viewportRef}>
        <motion.div
          className="projects-track"
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.08}
        >
          {projectsData.map((project) => (
            <article className="project" key={project.title}>
              <span className="project-badge">{project.badge}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable="false"
                >
                  View on GitHub
                  <LuArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              )}
            </article>
          ))}

          <a
            className="project project--more"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <LuGithub size={28} strokeWidth={1.4} />
            <h3>More on GitHub</h3>
            <p>See the rest of my repositories and experiments.</p>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
