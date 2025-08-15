import React from "react";
import styles from "./BlogPost.module.css";

const BlogPost = ({ title, content, date }) => {
  return (
    <div className={styles.blogPost}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}><i>{date}</i></div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default BlogPost;
