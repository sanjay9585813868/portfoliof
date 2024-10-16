import React, { useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('forward'); // Track movement direction

  const visibleImagesCount = 4; // Show 4 images at a time

  // Function to move forward or backward
  const handleMove = () => {
    if (direction === 'forward') {
      if (currentIndex + visibleImagesCount < images.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setDirection('backward');
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else {
        setDirection('forward');
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  // Ensure images is an array and has elements
  const visibleImages = images.slice(currentIndex, currentIndex + visibleImagesCount);

  return (

    
    <Container>
      <Row className="align-items-center">
        {/* Backward button */}
        <Col xs={1} className="text-center">
          <button
            className="nav-button"
            onClick={handleMove}
          >
            {'<'}
          </button>
        </Col>

        {/* Display visible images */}
        <Col xs={12}>
          <Row>
            {visibleImages.map((image, index) => (
              <Col key={index} xs={3} className="text-center">
                <img
                  src={image}
                  alt={`Image ${currentIndex + index + 1}`}
                  style={{
                    width: '100%',
                    maxHeight: '150px',
                    objectFit: 'contain',
                  }}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Forward button */}
        <Col xs={1} className="text-center">
          <button
            className="nav-button"
            onClick={handleMove}
          >
            {'>'}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

