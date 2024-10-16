// src/ProjectList.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Project() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects. Please try again later.');
      });
  }, []);

  const handleButtonClick = (url) => {
    // Extract the part of the URL after '/projects/'
    const extractedUrl = url.split('/projects/')[1];

    if (extractedUrl.startsWith('http://') || extractedUrl.startsWith('https://')) {
      // Redirect to external URL
      console.log(extractedUrl.startsWith('http://'));
      
      window.location.href = extractedUrl;
    } else {
      // Navigate internally using react-router-dom
      navigate(url);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Projects</h1>
      <br/>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {projects.map((project) => (
          <Col key={project.id} sm={4} className="project">  
            <Card>
              <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/uploads/${project.image}`} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.technology}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick(`${process.env.REACT_APP_API_URL}/projects/${project.Url}`)} // Pass full URL
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
