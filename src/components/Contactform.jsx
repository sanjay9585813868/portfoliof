import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Contact from './Contact';

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
      // Sending the contactInfo to the backend using a PUT request
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/contact`, contactInfo);
      setStatusMessage('Contact details saved successfully and email sent!');
      setStatusType('success'); // Set status type to success
      console.log(response.data);
      setContactInfo({ name: '', phone: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      console.error('Error submitting form', error);
      setStatusMessage('Failed to save contact details.');
      setStatusType('error'); // Set status type to error
    }
  };

  return (
    <>

      <br />
      <Container><Contact /></Container>
      
      <hr style={{ color: 'white' }} />

      <h3 style={{ textAlign: 'center', paddingTop: '10px' }}>GET IN TOUCH</h3>
      <Container className="mt-1" expand="lg">
        {statusMessage && (
          <Alert variant={statusType === 'success' ? 'success' : 'danger'}>
            {statusMessage}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} >
          <Row className="justify-content-center" >
            <Col xs={12} md={7}>
              <Form.Group controlId="formName" className="mb-auto">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className='custom-input'

                />
              </Form.Group>
            </Col>
            <Col xs={12} md={7}>
              <Form.Group controlId="formPhone" className="mb-auto">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className='custom-input'
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={7}>
              <Form.Group controlId="formEmail" className="mb-auto">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className='custom-input'
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={7}>
              <Form.Group controlId="formMessage" className="mb-auto">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={contactInfo.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter your message"
                  required
                  className='custom-input'
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={7}>
              <Button type="submit" className="subcon">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <br />
      </Container>
    </>
  );
};

export default Contactform;
