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
      setStatusMessage('Contact details saved successfully and email sent!');
      setStatusType('success');
      console.log(response.data);
      setContactInfo({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      setStatusMessage('Failed to save contact details.');
      setStatusType('danger');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
     <Row className="w-100" style={{ maxWidth: '900px', background: 'black',
      color:'white', borderRadius: '10px', overflow: 'hidden', 
      border:'1px solid white',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      {/* Left Side - Contact Info with Full Background Image */}
        <Col 
          md={6} 
          className="position-relative text-white d-flex align-items-center justify-content-center"
          style={{ 
            backgroundImage: `url(${Banner})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '100%',
          }}
        >
          {/* Dark Overlay Covering Full Column */}
          <div 
            className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center"
            style={{ background: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}
          >
            <h2 className="fw-bold mb-4">Let's work together</h2>
            <h4 className="fw-bold mb-4">For Contact</h4>
            <p><FaUser /> Sanjay</p>
            <p><FaPhone /> +91 88387 57183</p>
            <p><FaEnvelope /> sanjay.manikandan.dev@gmail.com</p>
          </div>
        </Col>

        {/* Right Side - Contact Form */}
<Col md={6} className="p-4">
  <h3 className="fw-bold text-center">Get In Touch</h3>
  {statusMessage && (
    <Alert variant={statusType}>
      {statusMessage}
    </Alert>
  )}
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="firstName">
      <Form.Label>Name</Form.Label>
      <Form.Control 
        type="text" 
        name="name" 
        value={contactInfo.name} 
        onChange={handleChange} 
        placeholder="Name" 
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
        placeholder="Write a message" 
        required
        className="custom-input"
      />
    </Form.Group>

    <div className="d-grid">
      <Button style={{background:'red',border:'1px solid white'}} type="submit">Send Message</Button>
    </div>
  </Form>
</Col>


      </Row>
    </Container>
  );
};

export default Contactform;
