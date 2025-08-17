import React from 'react';
import { ReactTyped } from "react-typed";
import './type.css';

const TypingAnimation = () => {
  return (
    <div>
      <h1 className="typed-text">
        <ReactTyped 
          strings={['Welcome aboard', 'you are safe here', "have a look around"]}
          typeSpeed={70}
          backSpeed={40}
        />
      </h1>
    </div>
  );
};

export default TypingAnimation;
