import React from 'react';
import styles from './blog.module.css';
import VCPortfolio from './posts/VCPorfolioDistribution/VCPortfolio';
import UserJourneys from './posts/UserJourneys/UserJourneys';

function Blog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div className={styles.blogPage}>
         <UserJourneys />
        <VCPortfolio />
        </div>
  );
}

export default Blog;