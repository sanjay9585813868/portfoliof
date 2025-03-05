import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Profile from './Profile';

function Upload() {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  // Handle file upload and update
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!resume) {
      setMessage('Please select a resume file (PDF format) to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload/resume`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading the resume:', error);
      setMessage('Error uploading the resume.');
    }
  };

  return (
    <Container className="mt-5" expand="lg">
      <section className="projectFrom">
      <h1>Update Resume</h1>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleUpload}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select Resume to Upload (PDF format)</Form.Label>
          <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Update Resume</Button>
      </Form>
      <br/>
      </section>
      <br/>
      <hr className='line'/>
      <Profile />
    </Container>
  );
}

export default Upload;
