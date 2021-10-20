import './App.css';
import React, {useRef} from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import {BrowserRouter, Route, Link, Switch, Router} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
