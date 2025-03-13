import React from "react";
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ title, content }) => {
  return (
    <div className={styles.blogPost}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default BlogPost;
