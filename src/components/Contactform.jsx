import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import Banner from "./Image/Mail.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contactform = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/contact`, contactInfo);
      setStatusMessage('Message sent successfully...');
      setStatusType('success');
      // console.log(response.data);
      setContactInfo({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      // console.error('Error submitting form', error);
      setStatusMessage('Failed sent Message...');
      setStatusType('danger');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center py-5">
      <Row className="w-100 mx-2 shadow-lg rounded overflow-hidden" style={{ maxWidth: '900px', background: 'black', color: 'white', border: '1px solid white' }}>
        
        {/* Left Side - Contact Info with Background Image */}
        <Col md={6} className="d-flex align-items-center justify-content-center position-relative p-4 text-white"
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100%',
          }}
        >
          <div className="position-absolute w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}></div>
          <div className="text-center position-relative" style={{ zIndex: 2 }}>            
           <h2 className="fw-bold mb-4">Let's work together</h2>
            <h4 className="fw-bold">For Contact</h4>
            <p className="mb-1"><FaUser /> Sanjay</p>
            <p className="mb-1"><FaPhone /> +91 88387 57183</p>
            <p><FaEnvelope /> sanjay.manikandan.dev@gmail.com</p>
          </div>
        </Col>

        {/* Right Side - Contact Form */}
        <Col md={6} className="p-4">
          <h3 className="fw-bold text-center">Get In Touch</h3>
          {statusMessage && <Alert variant={statusType}>{statusMessage}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={contactInfo.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                required
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={contactInfo.email} 
                onChange={handleChange} 
                placeholder="example@email.com" 
                required
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone" 
                value={contactInfo.phone} 
                onChange={handleChange} 
                placeholder="+91 80000 90000" 
                required
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message" 
                value={contactInfo.message} 
                onChange={handleChange} 
                rows={3} 
                placeholder="Write your message here..." 
                required
                className="custom-input"
              />
            </Form.Group>

            <div className="d-grid">
              <Button style={{ background: 'red', border: '1px solid white' }} type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>

      </Row>
    </Container>
  );
};

export default Contactform;

