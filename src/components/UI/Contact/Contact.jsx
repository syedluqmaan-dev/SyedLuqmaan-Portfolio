import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-heading">Get in Touch</h2>
            <div className="contact-content">
                Thank you for checking out my portfolio! I’m currently open to remote opportunities and on-site roles in Bangalore. Whether you're hiring, looking to collaborate, or just want to connect — feel free to reach out.
                <br /><br />
                I believe in hard work, clean code, and starting every step with <strong>Bismillah</strong>. Let’s build something amazing together!
            </div>

            <div className="social-links classy-social-links">
                          <a href="mailto:syedluqmaan.dev@gmail.com" className="banner-icon" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </a>
                          <a href="tel:+919620817001" className="banner-icon" aria-label="Phone">
                            <FontAwesomeIcon icon={faPhone} />
                          </a>
                          <a href="https://www.instagram.com/being.syed/" target="_blank" rel="noopener noreferrer" className="banner-icon" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a href="https://www.linkedin.com/in/syed-luqmaan-5a124b157/" target="_blank" rel="noopener noreferrer" className="banner-icon" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                          <a href="https://github.com/syedluqmaan-dev" target="_blank" rel="noopener noreferrer" className="banner-icon" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
            </div>
        </div>
    );
}

export default Contact;
