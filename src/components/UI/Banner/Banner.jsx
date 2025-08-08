import './banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <div className="banner-container" id="home">
      <div className="banner-intro-text">
        <p>Hello there! I am</p>
        <span className="banner-intro-name">Syed Luqmaan</span>
        <p className="banner-intro-subtext">
          "From Concept to Code — I Build Seamless Experiences with React.js & React Native 💡"
        </p>

        <p className="banner-skills">
          React.js • React Native • JavaScript (ES6+) • Redux • Firebase • REST APIs • Tailwind CSS
        </p>

        {/* Social Icons */}
        <div className="banner-social-icons">
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

      <div className="banner-dev-image"></div>
    </div>
  );
}

export default Banner;
