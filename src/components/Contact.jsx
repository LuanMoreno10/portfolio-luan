import React from 'react';
import { motion } from 'framer-motion';
import { LuHandshake, LuMail, LuLinkedin, LuMessageCircle } from 'react-icons/lu';
import { contact } from '../data.js';

export default function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <span className="contact-mark">
        <LuHandshake size={26} strokeWidth={1.3} />
      </span>

      <h2 className="display">Let's work together</h2>
      <p className="lede contact-sub">
        Tell me about your next project — I'll help you turn it into a
        working product.
      </p>

      <div className="contact-cta">
        <motion.a
          className="btn btn--dark"
          href={contact.emailHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <LuMail size={15} strokeWidth={1.6} />
          Email Me
        </motion.a>

        {contact.whatsapp && (
          <motion.a
            className="btn btn--light"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <LuMessageCircle size={15} strokeWidth={1.6} />
            WhatsApp
          </motion.a>
        )}

        <motion.a
          className="btn btn--light"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <LuLinkedin size={15} strokeWidth={1.6} />
          LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}
