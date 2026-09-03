import React from 'react';
import { techStrip } from '../data.js';

export default function TechStrip() {
  return (
    <div className="strip">
      {techStrip.map((tech) => (
        <span className="strip-item" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  );
}
