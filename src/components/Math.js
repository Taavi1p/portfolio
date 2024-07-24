import React, { useEffect } from 'react';
import '../styles/math.css';
import galoisPic from "../images/galois.jpg";
import MathPost from "./MathPost"
import PDF1 from '../images/spring24.pdf';
import PDF2 from '../images/tumo24.pdf';
import PDF3 from '../images/riigieksam.pdf';
import PDF4 from '../images/matlah_2021_22_yl_lahendused_hindamisskeemid_talv.pdf';
import PDF5 from '../images/lvs2021.pdf';
import PDF6 from '../images/lvt2017.pdf';
import PDF7 from '../images/lvs2017.pdf';


function Math() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="math-page">
      <div className='math-content'>
        <div className='math-header'>In loving memory of...</div>
        <img src={galoisPic} className='galois-pic'/>
        <MathPost
        header="IMC Estonia preliminary round spring 2024"
        paragraph="I got 11/100 points. The normal TÜ math comepetition format. 6 questions, unforunately no calculus."
        pdfUrl={PDF1}
        pdfText="exercises"
      />
      <MathPost
        header="TÜ university math competition autumn 2023"
        paragraph="I got 31/100 points. My first time at the competition. I feel like I did decent. Should have dome better on the calculus question"
        pdfUrl={PDF2}
        pdfText="exercises"
      />
      <MathPost
        header="Estonian High School final exams"
        paragraph="I got 92/100. I feel like I did very well, just had a annoying drawing error on the last exercise and lost 8 points because of that."
        pdfUrl={PDF3}
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion winter 2021"
        paragraph="No comment"
        pdfUrl={PDF4}
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion autumn 2021"
        paragraph="No comment"
        pdfUrl={PDF5}
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion winter 2017"
        paragraph="I got 18/42 points."
        pdfUrl={PDF6}
        pdfText="exercises"
      />
      <MathPost
        header="Estonian high school math competetion autumn 2017"
        paragraph="I got 14/42 points. My first serious competition"
        pdfUrl={PDF7}
        pdfText="exercises"
      />
      </div>
    </div>
);
}

export default Math;