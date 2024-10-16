import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    technology: '',
    description: '',
    image: null,
    Url: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('technology', formData.technology);
    data.append('description', formData.description);
    data.append('image', formData.image);
    data.append('Url', formData.Url);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload/project`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to upload the project.');
    }
  };

  return (
    <Container className="projectFrom" expand="lg">
      <h1>Upload a New Project</h1>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className='custom-input'
          />
        </Form.Group>

        <Form.Group controlId="formTechnology">
          <Form.Label>Technology Used</Form.Label>
          <Form.Control
            type="text"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            required
            className='custom-input'
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className='custom-input'
          />
        </Form.Group>

        <Form.Group controlId="formFile">
          <Form.Label>Project Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="formUrl">
          <Form.Label>Project Link</Form.Label>
          <Form.Control
            type="text"
            name="Url"
            value={formData.Url}
            onChange={handleChange}
            required
            className='custom-input'
          />
        </Form.Group>

        <Button  type="submit"  className="mt-5">
          Submit Project
        </Button>
      </Form>
      <br/>
    </Container>
  );
}

export default ProjectForm;
