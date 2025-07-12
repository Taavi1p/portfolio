import React from 'react';
import '../styles/socials.css';
import SocialMediaIcons from "./SocialMediaIcons.js"
import PageWrapper from "./PageWrapper";

function Socials() {
  return (
    <PageWrapper>
      <div className="socials-page">
        <SocialMediaIcons />
      </div>
    </PageWrapper>
);
}

export default Socials;