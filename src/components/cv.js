import React from 'react';
import '../styles/cv.css';
import resumeImage from '../images/resume.jpg';
import PDF1 from '../images/resume.pdf';
import PdfLink from './common/pdf-link/PdfLink.js';
import PageWrapper from "./common/page-wrapper/PageWrapper.js";


const ResumePage = () => {
  /*const openPdf = () => {
    window.open('/resume.pdf', '_blank');
  };*/
  return (
    <PageWrapper>
      <div className="resume-page">
        <img src={resumeImage} alt="Resume" className="resume-image" />
        <div className="pdf-link">
          <PdfLink url={PDF1} text="Open PDF" />
        </div>
      </div>
    </PageWrapper>
  );
}

export default ResumePage;
