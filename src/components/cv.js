// ResumePage.js
import React from 'react';
import '../styles/cv.css';
import resumeImage from '../images/resume.jpg'; // Make sure to replace this with the actual path to your image

const ResumePage = () => {
  return (
    <div className="resume-page">
      <img src={resumeImage} alt="Resume" className="resume-image" />
    </div>
  );
}

export default ResumePage;


