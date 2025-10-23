import React, { useEffect } from 'react';
import styles from './websites.module.css';
import PageWrapper from "../common/page-wrapper/PageWrapper.js";
import octocat from '../../images/octocat.png';
import MobileGame from "./MobileGame.js"
import PIC1 from "../../images/spy.png"
import PIC2 from "../../images/spy2.png"
import PIC3 from "../../images/boggle.png"

function Coding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PageWrapper>
            <div className={styles.codingPage}>
                <div className={styles.codingContent}>
                    <div className={styles.codingHeader}>Websites I've made</div>
                    <div className={styles.websitesContainer}>
                        <a href="https://electricitygen.com" target="_blank" className={styles.link}>electricitygen.com</a>
                        <a href="https://tammaru.ee" target="_blank" className={styles.link}>tammaru.ee</a>
                    </div>
                      <div className={styles.codingHeader}>Mobile games I've made</div>
                      <div className={styles.mobileApps}>
                        <MobileGame 
                          appName="Spyfall"
                          appImage={PIC1}
                          appStoreLink="https://apps.apple.com/ee/app/spyfall-new-mission/id1485179809"
                          googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=com.taavi.spyfall"
                          githubLink="https://github.com/Taavi1p/spyfall"
                        />
                        <MobileGame 
                          appName="Spyfall Countries"
                          appImage={PIC2}
                          appStoreLink="https://apps.apple.com/ee/app/spyfall-new-mission/id1485179809"
                          googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=com.taavi.spyfall"
                          githubLink="https://github.com/Taavi1p/spyfall-countries"
                        />
                        <MobileGame 
                          appName="Boggle Go"
                          appImage={PIC3}
                          appStoreLink="https://apps.apple.com/us/app/id1488800386"
                          googlePlayLink="https://play.google.com/store/apps/details?hl=en_US&id=co.boggle.go"
                          githubLink="https://github.com/Taavi1p/boggle"
                        />
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