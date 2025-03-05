import React from 'react';
import profileImage from "./Image/Profileimg.jpeg";
import { Card, Button } from 'react-bootstrap';

const Profileimg = () => {
  return (
    <Card style={{ width: '19rem', textAlign: 'center', borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 12px blue',backgroundColor:'whitesmoke' }}>
      <Card.Img 
        variant="top" 
        src={profileImage}
        alt="Profile" 
        style={{ filter: 'brightness(50%)', height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>M.Sanjay</Card.Title>
        <Card.Text className="text-muted">Java Developer</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Profileimg;


