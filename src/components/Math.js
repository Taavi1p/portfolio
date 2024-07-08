import React from 'react';
import '../styles/math.css';
import galoisPic from "../images/galois.jpg";
import MathPost from "./MathPost"

function Math() {
  return (
    <div className="math-page">
      <div className='content'>
        <div className='header'>In loving memory of...</div>
        <img src={galoisPic} className='galois-pic'/>
        <MathPost
        header="TÜ spring university math competition"
        paragraph="The normal TÜ math comepetition format. 6 questions, unforunately no calculus."
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      <MathPost
        header="TÜ autumn university math competition"
        paragraph="The normal TÜ math comepetition format. 6 questions, unforunately no calculus."
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      <MathPost
        header="Estonian High School finishing exams"
        paragraph="The normal TÜ math comepetition format. 6 questions, unforunately no calculus."
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion"
        paragraph="The normal TÜ math comepetition format. 6 questions, unforunately no calculus."
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      </div>
    </div>
);
}

export default Math;