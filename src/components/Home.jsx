import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Download from './Download';
import ProfileDisplay from './PrrofileDisplay';
import './Home.css';
import Profile from './Profile';
import Profileimg from './Profileimg';
import profilePic from "./Image/profile.jpg"; // Replace with your actual image path


const Home = () => {
  return (
    <Container >
      <Row >
        <Col  >
          <h2>Welcome to My Portfolio</h2>
          <br />
          <Col>
            <h5>
              Hi, I'm <i>M.Sanjay</i>, a passionate Java FullStack Developer with a strong track
              record of creating dynamic and user-centered web applications. With expertise
              in both front-end and back-end development, I specialize in bringing innovative
              ideas to life while optimizing for performance, scalability, and an exceptional
              user experience.
            </h5>
          </Col>
          <Col>
          <br/>
      <h2>Download Resume</h2>
            <Download />
          </Col>
        </Col>
        <br/>
        <br/>
        <Col md={6} className="d-flex justify-content-center " style={{margin:'15px'}}>
        <br/>
          <Profileimg profileImage={profilePic} />
          </Col>
      </Row>

    </Container>
  );
};

export default Home;
