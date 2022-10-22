import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import greenhouse from "../../Assets/Projects/greenhouse.png";
import ludo from "../../Assets/Projects/ludo.png";
import toggletrack from "../../Assets/Projects/toggletrack.png";

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
              imgPath={toggletrack}
              isBlog={false}
              title="Toggletrack"
              description="Toggl Track (formerly Toggl) is a time tracking software operated by Toggl OÜ, headquartered in Tallinn, Estonia,[3] that offers online time tracking and reporting services through their website along with mobile and desktop applications.
              this clone site made with the help of react and chakraui"
              ghLink="https://github.com/SachinMasai/coherent-laborer-2044"
              demoLink="https://famous-cucurucho-980351.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ludo}
              isBlog={false}
              title="ludo"
              description="A ludo game page build with javascript,HTML and CSS which takes the content from makdown files and renders it using js. In that game you can play with your friends its a simple game where you have to 
              throw dice and check who win"
              ghLink="https://github.com/SachinMasai/coherent-laborer-2044"
              demoLink="https://genuine-cannoli-a74b12.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenhouse}
              isBlog={false}
              title="Greenhouse.io"
              description="Greenhouse Software (commonly known as Greenhouse) is an American technology company that provides a recruiting software as a service. Online Editor which supports html, css, and js code with instant view of website. Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/SachinMasai/freezing-value-6715/tree/main/Greenhouse"
              demoLink="https://heartfelt-babka-9adac1.netlify.app/"              
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
