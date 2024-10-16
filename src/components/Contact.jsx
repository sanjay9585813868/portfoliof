import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './Image/certificate.jpg';

function Contact() {

  return (
    <Container className="mt-1" expand="lg">
      <h3><i>Lets work together</i></h3>
      <Row expand="lg">
        <Col md={6} style={{color:'white',fontSize:'20px'}}>
        <h2>Contact Me</h2>
        <Row>
          <Col xs={3}>Name </Col>
          <Col xs={1}> :</Col>
          <Col>Sanjay</Col>
        </Row>
        <Row>
          <Col xs={3}>Phone no </Col>
          <Col xs={1}> :</Col>
          <Col>8838757183</Col>
        </Row>
        <Row>
          <Col xs={3}>Email </Col>
          <Col xs={1}> :</Col>
          <Col>sanjay.manikandan.dev@gmail.com</Col>
        </Row>
        </Col>
        <br/>
      </Row>
    </Container>
  );
}

export default Contact;

