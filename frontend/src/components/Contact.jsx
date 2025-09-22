import React from "react";
import { SiGmail, SiLinkedin } from "react-icons/si";
import '../styles.css';


export default function Contact(){
    return (
        <section id="contact" className="contact-centered">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-info">
                <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=luan22moreno14@gmail.com"
                className="cemail-btn"
                aria-label="Email"
                rel="noopener noreferrer"
                >
                    <SiGmail size={36} color="#EA4335" />
                </a>
                <a 
                href="https://www.linkedin.com/in/luan-moreno10/"
                className="clinkedin-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <SiLinkedin size={36} color="#0A66C2" />
                </a>
            </div>
        </section>
    );
}