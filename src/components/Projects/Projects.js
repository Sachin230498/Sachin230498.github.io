import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/chw.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ss1.jpeg";
import chatify from "../../Assets/Projects/zara.png";
import suicide from "../../Assets/Projects/port.png";
import bitsOfCode from "../../Assets/Projects/relience.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fashion-Shop"
              description="This project is a one to one clone of the online
               e-commerce website of Zara. The project includes the Landing page, 
               Login and Signup page, Product pages for Men, Women, and Kids section. 
               The project is truly interactive and functional with features such as 
               Login validation, Sorting ."
              ghLink="https://github.com/Sachin230498/fashion-shop"
              demoLink="https://resonant-lily-7ac8fd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Commerce"
              description="Reliance Digital is an Indian consumer electronics retailer. 
              It is a subsidiary of Reliance Retail, a wholly owned subsidiary of
               Reliance Industries.The project includes the Landing page, 
               Login and Signup page, Product pages, cart and payment page, I made this website with the help html, css and javascript . "
              ghLink="https://github.com/Sachin230498/E-Commerce.com"
              demoLink="https://e-commerce-com.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chat-App"
              description="It simple chat app where you can chat with your 
              friends just sending by deploy link . Its responsive for all screen sizes there
               is login page and chat page when you enter in room it shows your name at 
               the top . I made this webite with the help of React, HTML, CSS,Javascript, Socket.io"
              ghLink="https://github.com/Sachin230498/Chat-App"
              demoLink="https://chat-app-rose-psi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather-App"
              description="Its normal weather where you check tempareture ,humidity, 
              sunset timing, speed of wind and also check pressure of any area in India 
              or outside or India. Here search functionality is available."
              ghLink="https://github.com/Sachin230498/Weather-app"
              demoLink="https://weather-app-bay-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Portfolio"
              description="Its my porfolio website ,here you can visit and see my
               education ,project and you can download my CV also. Thank You"
              ghLink="https://github.com/Sachin230498/SachinMasai.github.io"
              demoLink="https://sachinmasai.github.io/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;