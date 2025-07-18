import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom'
import '../styles/Home.css';
import TypingAnimation from "./type"

function Home() {
  return (
    <div>
      <section className="background-image">
        <div className="content">
          <FontAwesomeIcon icon={faArrowDown} className="bounce" />
          <TypingAnimation />
        </div>
      </section>
      <section className="second-page">
        <div className="navigation-links">
          <Link to="/Physics" className="nav-link">PHYSICS</Link>
          <Link to="/Math" className="nav-link">MATH</Link>
          <Link to="/Coding" className="nav-link">MOBILE APPS</Link>
          <Link to="/Blog" className="nav-link">BLOG</Link>
          <Link to="/CV" className="nav-link">CURRICULUM VITAE</Link>
          <Link to="/Socials" className="nav-link">SOCIALS</Link>
          <Link to="/Books" className="nav-link">BOOKS</Link>
          <Link to="/Investing" className="nav-link">INVESTING</Link>
          <Link to="/Websites" className="nav-link">WEBSITES</Link>
          {/*<div onClick={() => window.open('https://m.youtube.com/@EvaristeGalois73', '_blank')} className="nav-link">YOUTUBE</div>*/}
        </div>
      </section>
    </div>
  );
}

export default Home;
