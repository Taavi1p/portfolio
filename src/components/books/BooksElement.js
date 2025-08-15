import React from 'react';
import './booksElement.css';

const BooksElement = ({ title, author}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
};

export default BooksElement;