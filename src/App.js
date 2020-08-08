import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './intro.js';
import About from './about.js';
import Project from './projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">H S</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#intro">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Navbar>
      <a id="intro"><Intro/></a>
      <a id="about"><About/></a>
      <a id="projects"><Project/></a>
    </div>
  );
}

export default App;
