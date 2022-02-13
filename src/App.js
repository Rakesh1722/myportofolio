import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import LeftSection from "./Components/LeftSection";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div>
      <Container className="Main">
        <Row>
          <Col sm={4}>
            <LeftSection />
          </Col>
          <Col sm={7}>
            <HeroSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
