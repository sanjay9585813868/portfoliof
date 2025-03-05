import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

const About = () => (
  <Container id="about" >
    <h2>About Me</h2>
    <br />
    <Row expand="lg">

      <Col md={6} expand="lg">
        <h3>Education</h3>
        <br />
        <h5>Sree sakthi Engineering College , Karamadai—<i>Degree</i> </h5>
        <p>2019 - 2023</p>
        <p>B.E-Computer Science and Engineering —<i>CGPA of <b>7.55</b></i> </p>

        <h5>CSI (CMM) HR SEC School,Ooty—<i> PUC</i> </h5>
        <p>2018 - 2019</p>
        <p>12 th —<i><b>61%.</b></i> </p>

        <h5>CSI (CMM) HR SEC School,Ooty —<i> SSLC</i> </h5>
        <p> 2017 - 2018</p>
        <p> 10 th —<i><b>89.6%</b>.</i> </p>
      </Col>
      <Col md={6} expand="lg">
        <h3>Get to know about me</h3>
        <p>I am a passionate full stack developer with a keen interest in crafting dynamic,
          user-centric web applications. With a solid foundation in both front-end and back-end
          technologies, I excel at transforming innovative concepts into functional, high-performing solutions.</p>

        <p>On the front-end, I specialize in HTML, CSS, and JavaScript,
          leveraging frameworks like React and Bootstrap CSS to build intuitive,
          responsive user interfaces that deliver a seamless experience across all devices.</p>

        <p>On the back-end, my expertise lies in Java and frameworks such as Hibernate,
          Spring, and Spring Boot, along with robust database management using SQL. I take
          pride in designing scalable, efficient architectures that ensure smooth, secure operations,
          always focusing on performance and reliability.</p>
        <p> Eager to apply
          technical knowledge and creative thinking to contribute to innovative software solutions
          in a dynamic and growth-oriented company.</p>
      </Col>
    </Row>
  </Container>
);

export default About;
