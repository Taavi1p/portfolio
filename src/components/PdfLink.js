import React from 'react';
import '../styles/PdfLink.css';

const PdfLink = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="pdf-link">
      {text}
    </a>
  );
};

export default PdfLink;
