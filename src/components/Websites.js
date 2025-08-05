import React, { useEffect } from 'react';
import '../styles/coding.css';
import PageWrapper from "./PageWrapper";
import octocat from '../images/octocat.png';

function Coding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PageWrapper>
            <div className="coding-page">
                <div className="coding-content">
                    <div className='header'>Websites I've made</div>
                    <div className='websites-container'>
                    <a href="https://taavi1p.github.io/energy-tracker/" target="_blank" className='link'>US energy</a>
                    <a href="https://taavi1p.github.io/portfolio/" target="_blank" className='link'>This one</a>
                </div>
                </div>
            </div>
            {/* 
            <div class="octocat">
                <a href="https://github.com/Taavi1p" target="_blank" rel="noopener noreferrer">
                    <img src={octocat} />
                </a>
            </div>
            */}
        </PageWrapper>
    );
}

export default Coding;