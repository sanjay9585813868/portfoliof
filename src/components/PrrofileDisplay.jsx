import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Image, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PrrofileDisplay = () => {
  const [story, setStory] = useState(localStorage.getItem("story") || "");
  const [showStory, setShowStory] = useState(false);
  const [newStory, setNewStory] = useState("");

  const handleStoryChange = () => {
    localStorage.setItem("story", newStory);
    setStory(newStory);
    setNewStory("");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Card>
            <Card.Body>
              <Image
                src="https://via.placeholder.com/100"
                roundedCircle
                style={{ cursor: "pointer", border: "2px solid #000" }}
                onClick={() => setShowStory(true)}
              />
              <h3 className="mt-3">Your Name</h3>
              <p>Full Stack Developer</p>
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Enter new story"
                value={newStory}
                onChange={(e) => setNewStory(e.target.value)}
              />
              <Button className="mt-2" onClick={handleStoryChange}>
                Update Story
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Story Modal */}
      <Modal show={showStory} onHide={() => setShowStory(false)} centered>
        <Modal.Body className="text-center">
          <h5>Your Story</h5>
          <p>{story || "No story set"}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PrrofileDisplay;
