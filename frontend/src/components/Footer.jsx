import React from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import '../styles.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 className="footer-subtitle">Contact</h4>
                    <div className="footer-socials">
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=luan22moreno14@gmail.com"
                            className="footer-social-link"
                            aria-label="Email"
                            onClick={(e) => {
                                try {
                                    e.preventDefault();
                                } catch (err) {
                                    // ignore
                                }

                                const email = 'luan22moreno14@gmail.com';
                                const webGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
                                const mailto = `mailto:${email}`;
                                const isAndroid = /Android/i.test(navigator.userAgent || '');
                                const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent || '');

                                if (isAndroid) {
                                    const intentUrl = `intent://compose?to=${email}#Intent;package=com.google.android.gm;scheme=mailto;end`;
                                    window.location.href = intentUrl;
                                    setTimeout(() => {
                                        window.location.href = webGmail;
                                    }, 800);
                                } else if (isIOS) {
                                    const gmailScheme = `googlegmail://co?to=${email}`;
                                    window.location.href = gmailScheme;
                                    setTimeout(() => {
                                        window.location.href = webGmail;
                                    }, 800);
                                } else {
                                    window.open(webGmail, '_blank', 'noopener');
                                }
                                setTimeout(() => {
                                    try {
                                        window.location.href = mailto;
                                    } catch (err) {
                                        /* ignore */
                                    }
                                }, 2000);
                            }}
                        >
                            <SiGmail size={20} />
                            <span>Email</span>
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/luan-moreno10/"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiLinkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        
                        <a 
                            href="https://github.com/LuanMoreno10"
                            className="footer-social-link"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiGithub size={20} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="footer-copyright">
                        © {currentYear} Luan Moreno. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}