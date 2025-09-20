import React, { useEffect } from 'react';
import './investing.css';
import InvestingElement from './InvestingElement';
import PageWrapper from "../common/page-wrapper/PageWrapper.js";
import PercentageChange from "./percentageticker.js";


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
            <div className='stock'>
          <InvestingElement stock="URNU" />
          {/* <PercentageChange ticker="URNU" buyPrice={16} /> */}
          </div>
          <div className='stock'>
          <InvestingElement stock="RA7Z" />
          {/* <PercentageChange ticker="RA7Z" buyPrice={150} /> */}
          </div>
          <div className='stock'>
          <InvestingElement stock="EXH9" />
          {/* <PercentageChange ticker="EXH9" buyPrice={150} /> */}
          </div>
          <div className='stock'>
          <InvestingElement stock="IQQH" />
          {/* <PercentageChange ticker="IQQH" buyPrice={150} /> */}
          </div>
          </div>
        </div>
      </div>
    </PageWrapper>
);
}

export default Investing;