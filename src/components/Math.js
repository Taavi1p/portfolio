import React from 'react';
import '../styles/math.css';
import galoisPic from "../images/galois.jpg";
import MathPost from "./MathPost"

function Math() {
  return (
    <div className="math-page">
      <div className='math-content'>
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
        paragraph="My first time at the competition. I feel like I did decent. Should have dome better on the calculus question"
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      <MathPost
        header="Estonian High School finishing exams"
        paragraph="I got 92/100. I feel like I did very well, just had a annoying drawing error on the last exercise and lost 8 points because of that."
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion"
        paragraph="No comment"
        pdfUrl="path/to/your/document1.pdf"
        pdfText="exercises"
      />
      </div>
    </div>
);
}

export default Math;