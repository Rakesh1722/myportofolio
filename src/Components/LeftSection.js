import React from "react";
import image from "./Profilephoto.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function LeftSection() {
  return (
    <div className="LeftSection">
      <Container>
        <Row>
          <Col sm={2} />
          <Col sm={9}>
            <p className="break" />
            <div className="body">
              <img src={image} alt="profile" />
              <br />
              <br />
              <h1 className="name">
                <center>Bandi Rakesh</center>
              </h1>
              <center>
                <h4>Web Developer</h4>
              </center>
              <br />
              <div className="cart">
                <div id="footer">
                  <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                      <a href="mailto:rakeshrak839@gmail.com">
                        <FaEnvelope size={20} />
                      </a>
                      <a href="https://www.facebook.com/Rakeshyadav794979/">
                        <FaFacebookF size={20} />
                      </a>
                      <a href="https://twitter.com/Rakesh1722">
                        <FaTwitter size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/rakesh-yadav-bandi-515811190/">
                        <FaLinkedin size={20} />
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
