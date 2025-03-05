import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Additional from './components/Additional';
import Contactform from './components/Contactform';
import Upload from './components/Upload';
import ProjectForm from './components/ProjectForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Example from './components/Example';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is already responsive with expand="lg" */}
        <Navbar bg="black" data-bs-theme="dark" 
        className="header" expand="lg">
          <Container>
            <Navbar.Brand href="/">SANJAY M</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/additional">Additional</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              </Nav>
              <Nav className="ms-auto"> {/* Icons aligned to the right */}
                <Nav.Link href="https://github.com/sanjay9585813868" target="_blank">
                  <FaGithub size={30} color="white" />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/sanjay-mani-014aa6265" target="_blank">
                  <FaLinkedin size={30} color="white" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactFrom" element={<Contactform />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/additional" element={<Additional />} />
            <Route path="/update" element={<Upload />} />
            <Route path="/upload" element={<ProjectForm />} />
            <Route path="/head" element={<Header />} />
            <Route path="/contact" element={<Contactform />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
