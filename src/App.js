import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CV from "./components/resume/cv";
import Math from "./components/math/Math";
import Physics from "./components/physics/Physics";
import Home from "./components/landing-page/Home";
import Blog from "./components/blog/Blog";
import Socials from "./components/Socials";
import Coding from "./components/mobile-games/Coding";
import Books from "./components/books/Books";
import Investing from "./components/investing/Investing";
import Websites from "./components/websites/Websites";



function App() {
  return (
  <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/portfolio" element={<Home />} />
    <Route path="/physics" element={<Physics />} />
    <Route path="/CV" element={<CV />} />
    <Route path="/math" element={<Math />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Socials" element={<Socials />} />
    <Route path="/Coding" element={<Coding />} />
    <Route path="/Books" element={<Books />} />
    <Route path="/Investing" element={<Investing />} />
    <Route path="/Websites" element={<Websites />} />
  </Routes>
  </Router>
  );

}


export default App;