import React from 'react';
import './MobileGame.css';

const MobileGame = ({ appName, appImage, appStoreLink, googlePlayLink, githubLink }) => {
  return (
    <div className="mobile-game-container">
      <div className="app-image">
        <img src={appImage} alt={`${appName} app`} />
      </div>
      <div className="app-details">
        <h1>{appName}</h1>
        <a href={appStoreLink} target="_blank" rel="noopener noreferrer">Download on the App Store</a>
        <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">Get it on Google Play</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">View Repository on GitHub</a>
      </div>
    </div>
  );
};

export default MobileGame;
