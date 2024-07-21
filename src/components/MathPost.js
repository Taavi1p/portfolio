import React from 'react';
import PdfLink from './PdfLink'; 
import "../styles/MathPost.css"

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
