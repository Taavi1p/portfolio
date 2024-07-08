import React from 'react';
import PdfLink from './PdfLink'; // Ensure this path is correct

const MathPost = ({ header, paragraph, pdfUrl, pdfText }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <PdfLink url={pdfUrl} text={pdfText} />
    </div>
  );
};

export default MathPost;
