import React, { useEffect, useState } from 'react';
import './footerstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const chaosEmojis = ['😶‍🌫️', '🤯', '🌀', '😵‍💫', '🎢'];
    const codeEmojis = ['💻', '🖥️', '⌨️', '📟', '🖱️'];

    const [chaosIndex, setChaosIndex] = useState(0);
    const [codeIndex, setCodeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setChaosIndex((prevIndex) => (prevIndex + 1) % chaosEmojis.length);
            setCodeIndex((prevIndex) => (prevIndex + 1) % codeEmojis.length);
        }, 900);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer-container">
            {/* <div className="social-icons">
                <a href="tel:+919620817001" className="icon" aria-label="Phone">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a href="https://www.instagram.com/being.syed/" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/syed-luqmaan-5a124b157/" target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div> */}

            <p className="footer-text" style={{ marginBottom: 10 }}>
                Crafted with cosmic guidance, coffee ☕ in hand, chaos {chaosEmojis[chaosIndex]} in mind, code {codeEmojis[codeIndex]} on screen
            </p>
            <p className="footer-text">
                Designed and Developed by <span className="footer-dev-name">Syed Luqmaan</span>
            </p>
        </footer>
    );
}

export default Footer;
