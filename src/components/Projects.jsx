import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProjectList from "./ProjectList"; 

function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(ProjectList);
  }, []);

  const handleButtonClick = (url) => {
    if (!url) {
      console.error("URL is undefined or null");
      return;
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
    }
  };

  return (
    <Container >
      <h3>Projects</h3>
      <br/>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={4} className="mb-2">
            <Card className="project-card shadow-lg border-0 bg-dark text-light">
              <Card.Img
                variant="top"
                src={require(`./Image/${project.image}`)}
                onError={(e) => (e.target.src = require("./Image/default.jpg"))}
                className="project-image"
              />
              <Card.Body className=" d-flex flex-column">
                <Card.Title>
                  <strong>Title: </strong> {project.title}
                </Card.Title>
                <Card.Text className="project-description">
                  <strong>Technologies: </strong> {project.technology}
                  <br />
                  <strong>Description: </strong> 
                  {project.description}
                </Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick(project.Url)} className="mt-auto">
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

export default Projects;



