import React, { useEffect } from 'react';
import '../styles/coding.css';
import MobileGame from "./MobileGame.js"
import PIC1 from "../images/spy.png"
import PIC2 from "../images/spy2.png"
import PIC3 from "../images/boggle.png"

function Coding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="coding-page">
      <div className="coding-content">
       <div className='header'>Mobile games I've made</div>
       <div className='mobile-apps'>
       <MobileGame 
         appName="Spyfall"
         appImage={PIC1}
         appStoreLink="https://apps.apple.com/ee/app/spyfall-new-mission/id1485179809"
         googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=com.taavi.spyfall"
         githubLink="https://github.com/Taavi1p/spyfall"
       />
       <MobileGame 
         appName="Spyfall Countries"
         appImage={PIC2}
         appStoreLink="https://apps.apple.com/ee/app/spyfall-new-mission/id1485179809"
         googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=com.taavi.spyfall"
         githubLink="https://github.com/Taavi1p/spyfall-countries"
       />
       <MobileGame 
         appName="Boggle Go"
         appImage={PIC3}
         appStoreLink="https://apps.apple.com/us/app/id1488800386"
         googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=co.boggle.go"
         githubLink="https://github.com/Taavi1p/boggle"
       />
        </div>
      </div>
    </div>
);
}

export default Coding;