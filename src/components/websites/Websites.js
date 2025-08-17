import React, { useEffect } from 'react';
import styles from './websites.module.css';
import PageWrapper from "../common/page-wrapper/PageWrapper.js";
import octocat from '../../images/octocat.png';

function Coding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PageWrapper>
            <div className={styles.codingPage}>
                <div className={styles.codingContent}>
                    <div className="header">Websites I've made</div>
                    <div className={styles.websitesContainer}>
                        <a href="https://electricitygen.com" target="_blank" className={styles.link}>electricitygen.com</a>
                        <a href="https://tammaru.ee" target="_blank" className={styles.link}>tammaru.ee</a>
                    </div>
                </div>
            </div>
            {/* 
            <div className={styles.octocat}>
                <a href="https://github.com/Taavi1p" target="_blank" rel="noopener noreferrer">
                    <img src={octocat} />
                </a>
            </div>
            */}
        </PageWrapper>
    );
}

export default Coding;