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
    // const extractedUrl = url.split('/projects/')[1];
    if (!url) {
      console.error('URL is undefined or null');
      return;
    }
  
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.location.href = url;
    } else {
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
            <Card style={{backgroundColor:'black',border:'1px solid white',boxShadow:' 4px 3px  4px darkblue'}}>
              <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/uploads/${project.image}`} />
              <Card.Body>
                <Card.Title style={{color:'white'}}><strong>Title :-</strong>{project.title}</Card.Title>
                <Card.Text>
                  <strong>Technologies Used :-</strong> {project.technology}
                  <br/>
                  <strong>Description :-</strong> {project.description}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick(project.Url)} // Directly pass the URL
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
