import React from 'react';
import PdfLink from '../common/pdf-link/PdfLink.js'; 
import "./MathPost.css"

const MathPost = ({ header, paragraph, pdfUrl, pdfText }) => {
  return (
    <div className='math-container'>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <PdfLink url={pdfUrl} text={pdfText} />
    </div>
  );
};

export default MathPost;
