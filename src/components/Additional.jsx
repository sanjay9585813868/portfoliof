import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './Image/certificate.jpg';

function Additional() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-0" expand="lg">
      <h3>WORKSHOPS</h3>
      <Row expand="lg">
        <Col md={6}>
          <p>Attended a virtual workshop on
            Android for Beginners organised
            by Sree Sakthi Engineering college
            karamadai.</p>

          <Col className='certificate'>
            <h2> CERTIFICATIONS</h2>
            <p>Certified Java FullStack Developer
              by Jspider </p>
              <br/>
              <img
        src={myImage}
        alt="Thumbnail"
        onClick={handleShow}
        className="thumbnail"
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <img
            src={myImage}
            alt="Full view"
            onClick={handleClose}
            className="full-image"
          />
        </Modal.Body>
      </Modal>
          </Col>
        </Col>
        <Col md={6}>
          <h3>Achievement</h3>
          <p>
            <ul>
              <li>
                NCC Cadet During School Days, Fostering Discipline, Leadership, and Teamwork Skills and attend the All
                Indian camp for selected candidate through out the India.
              </li>
              <li>
                Won first prize for paper presentation in the year 2022 for E-mornitoring system.
              </li>
              <li>
                Won first prize for paper presentation in the year 2023 for Farm Assit web for Farmers
              </li>
            </ul>
          </p>

          
        <Col md={6}>
          <h3>LANGUAGE</h3>

          <p> <ul>
            <li>
              TamiL
            </li>
            <li>
              English
            </li>
          </ul></p>
        </Col>
        
        </Col>

      </Row>
    </Container>
  );
}

export default Additional;
