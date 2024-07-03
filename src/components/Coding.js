import React from 'react';
import '../styles/coding.css';
import MobileGame from "./MobileGame.js"

function Coding() {
  return (
    <div className="coding-page">
      <div className='mobile-apps'>
      <MobileGame 
        appName="Spyfall"
        appImage="../images/spy.png"
        appStoreLink="https://apps.apple.com/ee/app/spyfall-new-mission/id1485179809"
        googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=com.taavi.spyfall"
        githubLink="https://github.com/Taavi1p/spyfall"
      />
      </div>
    </div>
);
}

export default Coding;