import React from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import '../styles.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Let's Connect</h2>
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
                            onClick={(e) => {
                                try {
                                    e.preventDefault();
                                } catch (err) {
                                    // ignore
                                }

                                const linkedinProfile = 'https://www.linkedin.com/in/luan-moreno10/';
                                const isAndroid = /Android/i.test(navigator.userAgent || '');
                                const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent || '');

                                if (isAndroid) {
                                    // Try LinkedIn app intent for Android
                                    const intentUrl = `intent://profile/luan-moreno10#Intent;package=com.linkedin.android;scheme=linkedin;end`;
                                    window.location.href = intentUrl;
                                    // Fallback to web LinkedIn
                                    setTimeout(() => {
                                        window.location.href = linkedinProfile;
                                    }, 800);
                                } else if (isIOS) {
                                    // Try LinkedIn app URL scheme for iOS
                                    const linkedinScheme = `linkedin://profile/luan-moreno10`;
                                    window.location.href = linkedinScheme;
                                    // Fallback to web LinkedIn
                                    setTimeout(() => {
                                        window.location.href = linkedinProfile;
                                    }, 800);
                                } else {
                                    // Desktop: open in new tab
                                    window.open(linkedinProfile, '_blank', 'noopener noreferrer');
                                }
                            }}
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