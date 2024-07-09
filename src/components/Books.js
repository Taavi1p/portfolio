import React from 'react';
import '../styles/books.css';
import BooksElement from "./BooksElement"

function Books() {
  return (
    <div className="books-page">
      <div className='books-content'>
      <div className='header'>Books I have read</div>
      <BooksElement
       title="Mastery"
       author="Robert Greene"
      />
      <BooksElement
       title="Psychology of money"
       author="Morgan Housel"
      />
      <BooksElement
       title="How to Talk to Anyone"
       author="Leil Lowndes"
      />
      <BooksElement
       title="The Wright Brothers"
       author=" David McCullough"
      />
      <BooksElement
       title="Hatching Twitter"
       author=" Nick Bilton"
      />
      </div>
    </div>
);
}

export default Books;