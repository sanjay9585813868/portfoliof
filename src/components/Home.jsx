import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Download from './Download';
import ProfileDisplay from './PrrofileDisplay';
import './Home.css';

const Home = () => {
  return (
    <Container >
      <Row >
        <Col  >
          <h1>Welcome to My Portfolio</h1>
          <br />
          <Col>
            <h5>
              Hi, I'm <i>Sanjay</i>, a passionate Full Stack Developer with a strong track
              record of creating dynamic and user-centered web applications. With expertise
              in both front-end and back-end development, I specialize in bringing innovative
              ideas to life while optimizing for performance, scalability, and an exceptional
              user experience.
            </h5>
          </Col>
          <Col>
            <Download />
          </Col>
        </Col>

        <Col md={6} >
          <ProfileDisplay /></Col>
      </Row>

    </Container>
  );
};

export default Home;
