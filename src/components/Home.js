import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom'
import '../styles/Home.css';
import octocat from '../images/octocat.png';
import TypingAnimation from "./type"

function Home() {
  return (
    <div>
      <section className="background-image">
        <div className="content">
          <FontAwesomeIcon icon={faArrowDown} className="bounce" />
          <TypingAnimation/>
        </div>
      </section>
      <section className="second-page">
          <div className="navigation-links">
            <Link to="/Physics" className="nav-link">PHYSICS</Link>
            <Link to="/Math" className="nav-link">MATH</Link>
            <Link to="/Coding" className="nav-link">CODING</Link>
            <Link to="/Blog" className="nav-link">BLOG</Link>
            <Link to="/CV" className="nav-link">CURRICULUM VITAE</Link>
            <Link to="/Socials" className="nav-link">SOCIALS</Link>
            <Link to="/Books" className="nav-link">BOOKS</Link>
            <Link to="/Investing" className="nav-link">Investing</Link>
          </div>
          <div class="octocat">
            <a href="https://github.com/Taavi1p" target="_blank" rel="noopener noreferrer">
              <img src={octocat}/>
            </a>
          </div>
      </section>
    </div>
);
}

export default Home;
