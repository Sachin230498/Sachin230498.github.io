import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Sachin-Pathe-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      {/* <Particle2 /> */}
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            {/* <Col md={6} className="resume-left">
              <h3 className="resume-title">Trainee</h3>
            

             
            </Col> */}
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
                
              <Resumecontent
                title="Full Stack Web Developer "
                // date="2022 – Present"
                
                content={[
                  "From -Masai School , Banglore",
                  "Date - (2022) - Present",
                  "1200 hours of hands - on coding.",
                  "1000 hours for DSA.",
                  "50 hours for soft skills development.",
                  "3 collaborative projects and 30+ mini-projects.",
                ]}
              />

        
              <Resumecontent
                title="Bachelor of Science (PCM)"
                // date="2019 - 2022"
                content={[
                 
                  "Bhoj University ,Bhopal",
                  "2016-2018"
                ]}
              />

       
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
