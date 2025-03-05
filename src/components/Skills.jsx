import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage1 from "./Image/mysql.jpg";
import myImage2 from "./Image/Java.png";
import myImage3 from "./Image/Spring.jpg";
import myImage4 from "./Image/spring-boot.png";
import myImage5 from "./Image/Hibernate.jpg";
import myImage6 from "./Image/React js.jpg";
import myImage7 from "./Image/Html.jpg";
import myImage8 from "./Image/css.jpg";
import myImage9 from "./Image/js.jpg";
import myImage10 from "./Image/Git.jpg";
import myImage11 from "./Image/Eclipse.jpg";
import myImage12 from "./Image/Vs code.jpg";
import myImage13 from "./Image/Github.jpg";

const hardSkills = [
  myImage1, myImage2, myImage3, myImage4, 
  myImage5, myImage6, myImage7, myImage8, 
  myImage9, myImage10
];

const tools = [myImage11, myImage12, myImage13];

const Skills = () => {
  return (
    <Container className="mt-3">
      {/* Hard Skills Section */}
      <h3 className="text-center">Hard Skills</h3>
      <Row className="justify-content-center">
        {hardSkills.map((image, index) => (
          <Col key={index} xs={6} md={3} className="mb-3 text-center">
            <img 
              src={image} 
              alt={`Skill-${index}`} 
              className="skill-image"
            />
          </Col>
        ))}
        
      <h3 className="text-center mt-2">Tools</h3>
      <Row>
        {tools.map((image, index) => (
          <Col key={index} xs={6} md={3} className="mb-3 text-center">
            <img 
              src={image} 
              alt={`Tool-${index}`} 
              className="skill-image"
            />
          </Col>
        ))}</Row>
      </Row>
    </Container>
  );
};

export default Skills;
