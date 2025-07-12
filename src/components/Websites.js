import React, { useEffect } from 'react';
import '../styles/coding.css';
import PageWrapper from "./PageWrapper";

function Coding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PageWrapper>
            <div className="coding-page">
                <div className="coding-content">
                    <div className='header'>Websites I've made</div>
                    <a href="https://taavi1p.github.io/energy-tracker/" target="_blank" className='link'>US energy producers website</a>
                    <a href="https://taavi1p.github.io/portfolio/" target="_blank" className='link'>This one</a>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Coding;