import React, { useEffect } from 'react';
import '../styles/investing.css';
import InvestingElement from './InvestingElement';

function Investing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="investing-page">
      <div className='investing-content'>
        <div className='header'>Positions I hold</div>
        <InvestingElement 
         stock="Vanguard S&P 500 (dist)"/>
      </div>
    </div>
);
}

export default Investing;