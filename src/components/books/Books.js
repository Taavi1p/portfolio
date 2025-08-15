import React, { useEffect } from 'react';
import './books.css';
import BooksElement from "./BooksElement"
import PageWrapper from "../common/page-wrapper/PageWrapper.js";

function Books() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <div className="books-page">
        <div className='books-content'>
          <div className='header'>I've enjoyed</div>
          <BooksElement
            title="Murder on the Orient Express"
            author="John Green"
          />
          <BooksElement
            title="Everything is Tuberculosis"
            author="John Green"
          />
          <BooksElement
            title="The Man Who Solved the Market"
            author="Gregory Zuckerman"
          />
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
          <BooksElement
            title="The Making of the Atomic Bomb"
            author="Richard Rhodes"
          />
          <BooksElement
            title="Anna Karenina"
            author=" Leo Tolstoy"
          />
          <BooksElement
            title="1984"
            author=" George Orwell"
          />
          <BooksElement
            title="The House of Morgan"
            author="Ron Chernow"
          />
          <BooksElement
            title="The Blocksize War"
            author=" Jonathan Bier"
          />
          <BooksElement
            title="How to Avoid a Climate Disaster"
            author=" Bill Gates"
          />
          <BooksElement
            title="Billion Dollar Loser"
            author=" Reeves Wiedeman"
          />
          <BooksElement
            title="The Art of War"
            author=" Sun Tzu"
          />
          <BooksElement
            title="Brief Answers to the Big Questions"
            author=" Stephen Hawking"
          />
          <BooksElement
            title="Humble Pi"
            author="Matt Parker"
          />
          <BooksElement
            title="Crime and Punishment"
            author=" Fyodor Dostoevsky"
          />
          <BooksElement
            title="Macbeth"
            author="  William Shakespeare"
          />
          <BooksElement
            title="Educated"
            author="Tara Westover"
          />
          <BooksElement
            title="Elon Musk"
            author=" Ashlee Vance"
          />
          <BooksElement
            title="A Briefer History of Time"
            author="Stephen Hawking"
          />
          <BooksElement
            title="Titan"
            author=" Ron Chernow"
          />
          <BooksElement
            title="The Everything Store"
            author="Brad Stone"
          />
          <BooksElement
            title="The Airbnb Story"
            author="Leigh Gallagher"
          />
          <BooksElement
            title="The Art of Startup Fundraising"
            author="Alejandro Cremades, Barbara Corcoran"
          />
          <BooksElement
            title="How to Turn Down a Billion Dollars"
            author=" Billy Gallagher"
          />
          <BooksElement
            title="Selling for Dummies, Second Edition"
            author="Tom Hopkins"
          />
          <BooksElement
            title="The Man Who Knew the Way to the Moon"
            author=" Todd Zwillich"
          />
          <BooksElement
            title="Ghost in the Wires"
            author="Kevin Mitnick, William L. Simon"
          />
          <BooksElement
            title="How to Win Friends & Influence People"
            author="Dale Carnegie"
          />
          <BooksElement
            title="The Power of Habit"
            author="Charles Duhigg"
          />
          <BooksElement
            title="Our Mathematical Universe"
            author=" Max Tegmark"
          />
          <BooksElement
            title="Superintelligence"
            author=" Nick Bostrom"
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Books;