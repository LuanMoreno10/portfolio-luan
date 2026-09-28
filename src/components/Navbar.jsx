import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX, LuArrowUpRight, LuLinkedin, LuGithub, LuMail } from 'react-icons/lu';
import { contact } from '../data.js';
import { handleAnchorClick } from '../scrollTo.js';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#build' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const socials = [
  { label: 'LinkedIn', href: contact.linkedin, Icon: LuLinkedin },
  { label: 'GitHub', href: contact.github, Icon: LuGithub },
  { label: 'Email', href: contact.emailHref, Icon: LuMail }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const goTo = (e, id) => {
    handleAnchorClick(e, id);
    setOpen(false);
  };

  return (
    <motion.div
      className="topbar"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="topbar-left">
        <a className="pill" href={contact.cv} target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>

      <nav className="nav-links">
        {links.map((link) => (
          <a
            className="nav-link"
            href={link.href}
            key={link.label}
            onClick={(e) => handleAnchorClick(e, link.href.slice(1))}
          >
            {link.label}
          </a>
        ))}
      </nav>

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

      <button
        className="menu-btn"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <LuMenu size={19} strokeWidth={1.6} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="menu-head">
                <span className="menu-brand">{contact.name}</span>
                <button
                  className="menu-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <LuX size={18} strokeWidth={1.6} />
                </button>
              </div>

              <nav className="menu-links">
                {links.map((link, i) => (
                  <motion.a
                    className="menu-link"
                    href={link.href}
                    key={link.label}
                    onClick={(e) => goTo(e, link.href.slice(1))}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <span className="menu-link-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="menu-link-label">{link.label}</span>
                    <LuArrowUpRight className="menu-link-arrow" size={18} strokeWidth={1.6} />
                  </motion.a>
                ))}
              </nav>

              <div className="menu-footer">
                <div className="menu-social-row">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      className="menu-social"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={17} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>

                <a
                  className="btn btn--dark menu-cv"
                  href={contact.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
