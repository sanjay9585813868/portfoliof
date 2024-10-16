import Header from "./Header";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage1 from './Image/mysql.jpg';
import myImage2 from './Image/Java.png';
import myImage3 from './Image/Spring.jpg';
import myImage4 from './Image/spring-boot.png';
import myImage5 from './Image/Hibernate.jpg';
import myImage6 from './Image/React js.jpg';
import myImage7 from './Image/Html.jpg';
import myImage8 from './Image/css.jpg';
import myImage9 from './Image/js.jpg';
import myImage10 from './Image/Git.jpg';
import myImage11 from './Image/Eclipse.jpg';
import myImage12 from './Image/Vs code.jpg';
import myImage13 from './Image/Github.jpg';


const Skills = () => {
  const imageUrls = [myImage1, myImage2, myImage3, myImage4, myImage5, myImage6, myImage7, myImage8, myImage9, myImage10];

  return (
    <Container className="mt-1" expand="lg">
      <h2 className=" mt-1">Hard Skills</h2>
      <br />
      <Header images={imageUrls} />
      <br />
      <h2 className=" mt-1">Tools</h2>
      <br/>
      <Row className="Tools">
        <br/>
      <Col  xs={3} className="img">
                <img
                  src={myImage11}
                  alt={`Eclipse`}
                  style={{
                    width: '100%',
                    maxHeight: '150px',
                    objectFit: 'contain',
                  }}
                />
              </Col>
              <Col  xs={3} className="img">
                <img
                  src={myImage12}
                  alt={`Vs code`}
                  style={{
                    width: '100%',
                    maxHeight: '150px',
                    objectFit: 'contain',
                  }}
                  
                />
              </Col>
              <Col  xs={3} className="img">
                <img
                  src={myImage13}
                  alt={`Github`}
                  style={{
                    width: '100%',
                    maxHeight: '150px',
                    objectFit: 'contain',
                  }}
                />
              </Col>
              
      </Row>


    </Container>
  );
};

export default Skills;