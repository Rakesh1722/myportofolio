import React from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { BiCircle } from "react-icons/bi";

export default function HeroSection() {
  return (
    <div className="HeroSection">
      <Container>
        <Row>
          <div className="about">
            <p className="break" />
            <h2>About Me</h2>
            <h6>
              <BiCircle />
              <p className="horizontal-line" />
            </h6>
            <p className="text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Working as
              software developer from 1 year of experience. Excel in stages of
              the life cycle of software development, coding and debugging.
              Expert in devising innovative and tailored solutions to assist
              businesses achieve their goals in a variety of industries
            </p>
          </div>
          <div>
            <div className="container">
              <Row className="Details">
                <Col sm={6}>
                  <p>
                    <b> Name: </b> Bandi Rakesh
                  </p>
                  <p>
                    <b> Degree: </b> B Tech
                  </p>
                  <p>
                    <b> Phone: </b> 7993869529
                  </p>
                </Col>
                <Col sm={6}>
                  <p>
                    <b> Birthday: </b> 27 June 1999
                  </p>
                  <p>
                    <b> Experience: </b> 1 Year{" "}
                  </p>
                  <p>
                    <b> Email: </b> rakeshrak839@gmail.com
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <span className="hr" />

          <div className="Skills">
            <h2>Skills</h2>
            <h6>
              <BiCircle />
              <p className="horizontal-line" />
            </h6>
            <div className="container">
              <Row className="SkillNames">
                <Col sm={6}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">HTML</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <ProgressBar variant="success" now={95} id="p" />
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">CSS</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <ProgressBar variant="primary" now={90} id="p" />
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">JAVASCRIPT</p>
                    <p className="mb-2">80%</p>
                  </div>
                  <ProgressBar variant="danger" now={80} id="p" />
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">C#</p>
                    <p className="mb-2">75%</p>
                  </div>
                  <ProgressBar variant="warning" now={75} id="p" />
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">REACT</p>
                    <p className="mb-2">70%</p>
                  </div>
                  <ProgressBar variant="success" now={70} id="p" />
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">SQL Server</p>
                    <p className="mb-2">80%</p>
                  </div>
                  <ProgressBar variant="primary" now={80} id="p" />
                </Col>
              </Row>
            </div>
          </div>

          <span className="hr" />

          <div className="Experience">
            <h2>Experience</h2>
            <h6>
              <BiCircle />
              <p className="horizontal-line" />
            </h6>
            <br />
            <div style={{ borderLeft: "3px solid #fff" }}>
              <h4>
                <FaArrowRight /> Software Trainee
              </h4>
              <div className="container">
                <a href="https://www.bhavnacorp.com/" target="_blank">
                  Bhavna Software India Pvt Ltd
                </a>{" "}
                | 09/2021 - Present
                <p>
                  Design, develop, document and debug websites. Develop
                  Front-end components based on provided design. Help drive the
                  definition on C# to support new features and refactor legacy
                  elements
                </p>
              </div>
              <h4>
                <FaArrowRight /> Dot Net Full Stack Developer
              </h4>
              <div className="container">
                <a href="https://wealus.com/" target="_blank">
                  Wealus Technology Solutions Pvt Ltd
                </a>{" "}
                | 03/2021 - 09/2021
                <p>
                  Develop Front-end components based on provided design. Help
                  drive the definition on C# to support new features and
                  refactor legacy elements
                </p>
              </div>
            </div>
          </div>

          <span className="hr" />

          <div className="Education">
            <h2>Education</h2>
            <h6>
              <BiCircle />
              <p className="horizontal-line" />
            </h6>
            <br />
            <div style={{ borderLeft: "3px solid #fff" }}>
              <h4>
                <FaArrowRight /> Education
              </h4>
              <div className="container">
                <a href="https://www.kmit.in/" target="_blank">
                  Keshav Memorial Institute of Technology (CSE)
                </a>{" "}
                | 2020
              </div>
              <br />
              <h4>
                <FaArrowRight /> DIPLOMA
              </h4>
              <div className="container">
                <a href="http://vmrpolytechnic.com/" target="_blank">
                  VMR Polytechnic College (CSE)
                </a>{" "}
                | 2017
              </div>
              <br />
              <h4>
                <FaArrowRight /> SSC
              </h4>
              <div className="container ">
                <span>ST Anthony's High School </span> | 2014
              </div>
            </div>
          </div>

          <div className="cart" style={{ margin: "40px 0px 40px 0px" }}>
            <div id="footer">
              <Row>
                <Col sm={4} />
                <Col sm={4}>
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
        </Row>
      </Container>
    </div>
  );
}
