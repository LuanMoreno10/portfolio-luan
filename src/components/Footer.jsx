import React from 'react';
import { contact } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Luan Moreno. All rights reserved.</p>

      <div className="footer-links topbar-right">
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
      </div>
    </footer>
  );
}
