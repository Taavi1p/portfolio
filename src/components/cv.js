import React from 'react';
import '../styles/cv.css';
import resumeImage from '../images/resume.jpg';


const ResumePage = () => {
  const openPdf = () => {
    window.open('C:/Users/Gebruiker/Desktop/website/my-website/public/resume.pdf', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="resume-page">
      <img src={resumeImage} alt="Resume" className="resume-image" />
      <div className="pdf-link">
      <button onClick={openPdf}>
        Open PDF
      </button>
    </div>
    </div>
  );
}

export default ResumePage;
