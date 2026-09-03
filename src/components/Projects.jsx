import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { projectsData } from '../data.js';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="headline">Selected work</h2>

      <div className="eyebrow-rule">
        <span className="eyebrow">Projects</span>
      </div>

      <div className="projects">
        {projectsData.map((project) => (
          <article className="project" key={project.title}>
            <span className="project-badge">{project.badge}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>

            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <LuArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
