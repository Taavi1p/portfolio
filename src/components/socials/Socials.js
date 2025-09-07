import React, { useEffect } from 'react';
import './socials.css';
import SocialMediaIcons from "./SocialMediaIcons.js"
import PageWrapper from "../common/page-wrapper/PageWrapper.js";

function Socials() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <PageWrapper>
      <div className="socials-page">
        <SocialMediaIcons />
      </div>
    </PageWrapper>
);
}

export default Socials;