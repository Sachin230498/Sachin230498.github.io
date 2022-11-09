import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ position: "relative", bottom: "0" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sachin Pathe</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year}. All rights reserved</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SachinMasai"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
         
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sachin-pathe-2a2b231a0/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
