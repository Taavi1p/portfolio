import React, { useState } from 'react';
import styles from "./BlogPost.module.css";

const BlogPost = ({ title, content, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className={styles.blogPost}>
      <div className={styles.header} onClick={toggleExpand}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.arrow}>{isExpanded ? '▲' : '▼'}</span>
        </div>
        <div className={styles.date}><i>{date}</i></div>
      </div>
      {isExpanded && (
        <p className={styles.content}>{content}</p>
      )}
    </div>
  );
};

export default BlogPost;
