import React from 'react';
import styles from './blog.module.css';
import VCPortfolio from './posts/VCPorfolioDistribution/VCPortfolio';
import UserJourneys from './posts/UserJourneys/UserJourneys';
import Tallink from "./posts/Tallink/Tallink";
import QuantLNG from './posts/quant_LNG/quant_LNG';

function Blog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div className={styles.blogPage}>
        <Tallink/>
        <QuantLNG/>
        <UserJourneys />
        <VCPortfolio />
        </div>
  );
}

export default Blog;