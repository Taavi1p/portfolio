import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialMediaIcons.css'; // Import the CSS file

const SocialMediaIcons = () => {
  return (
    <div className="icon-container">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://x.com/TaaviTammaru" target="_blank" rel="noopener noreferrer" className="icon twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/taavi-tammaru-063668138/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
