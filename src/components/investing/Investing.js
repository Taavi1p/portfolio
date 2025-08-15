import React, { useEffect } from 'react';
import './investing.css';
import InvestingElement from './InvestingElement';
import PageWrapper from "../common/page-wrapper/PageWrapper.js";

function Investing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <div className="investing-page">
        <div className='investing-content'>
          <div className='header'>Positions</div>
          <div className='stocks-container'>
          <InvestingElement stock="URNU" />
          <InvestingElement stock="RA7Z" />
          <InvestingElement stock="EXH9" />
          <InvestingElement stock="IQQH" />
          </div>
        </div>
      </div>
    </PageWrapper>
);
}

export default Investing;