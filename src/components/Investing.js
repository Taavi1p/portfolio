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
        <div className='header'>Positions</div>
        <InvestingElement stock="Global X Uranium UCITS ETF USD"/>
        <InvestingElement stock="Global X Solar UCITS ETF USD"/>

      </div>
    </div>
);
}

export default Investing;