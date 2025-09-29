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
                    onClick={(e) => {
                        // Try to open the Gmail app on mobile first, then fall back to web Gmail or mailto.
                        // Keep the href so desktop users/open-in-new-tab still get a useful link.
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
                            // Use Android intent which is more reliable for opening the Gmail app when installed.
                            const intentUrl = `intent://compose?to=${email}#Intent;package=com.google.android.gm;scheme=mailto;end`;
                            window.location.href = intentUrl;
                            // Fallback to web Gmail then mailto
                            setTimeout(() => {
                                window.location.href = webGmail;
                            }, 800);
                        } else if (isIOS) {
                            // Try Gmail URL scheme on iOS (Gmail app supports googlegmail://)
                            const gmailScheme = `googlegmail://co?to=${email}`;
                            // Attempt to open Gmail app
                            window.location.href = gmailScheme;
                            // If that doesn't work, after a short delay open web Gmail
                            setTimeout(() => {
                                window.location.href = webGmail;
                            }, 800);
                        } else {
                            // Desktop: open web Gmail in a new tab
                            window.open(webGmail, '_blank', 'noopener');
                        }
                        // As a final fallback after another delay, open mailto (some environments block custom schemes)
                        setTimeout(() => {
                            // only open mailto if not already navigated away
                            try {
                                window.location.href = mailto;
                            } catch (err) {
                                /* ignore */
                            }
                        }, 2000);
                    }}
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