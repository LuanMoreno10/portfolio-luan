import React from 'react';
import { LuHandshake, LuMail, LuLinkedin, LuMessageCircle } from 'react-icons/lu';
import { contact } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="contact-mark">
        <LuHandshake size={26} strokeWidth={1.3} />
      </span>

      <h2 className="display">Tell me about your next project</h2>

      <div className="contact-cta">
        <a
          className="btn btn--dark"
          href={contact.emailHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuMail size={15} strokeWidth={1.6} />
          Email Me
        </a>

        {contact.whatsapp && (
          <a
            className="btn btn--light"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuMessageCircle size={15} strokeWidth={1.6} />
            WhatsApp
          </a>
        )}

        <a
          className="btn btn--light"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuLinkedin size={15} strokeWidth={1.6} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
