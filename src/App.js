import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CV from "./components/cv";
import Math from "./components/Math";
import Physics from "./components/Physics";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Socials from "./components/Socials";
import Coding from "./components/Coding";



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
  </Routes>
  </Router>
  );

}


export default App;