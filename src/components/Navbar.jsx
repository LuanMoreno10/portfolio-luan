import React from 'react';
import { contact } from '../data.js';

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a className="pill" href={contact.cv} target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>

      <nav className="topbar-right">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span className="topbar-sep">/</span>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="topbar-sep">/</span>
        <a href={contact.emailHref} target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </nav>
    </div>
  );
}
