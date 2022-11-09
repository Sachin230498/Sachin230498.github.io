import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle2 from "../Particle2";


import GreenHouse from "../../Assets/Projects/greenhouse.png";
import movie from "../../Assets/Projects/movie.png";
 import Toggle from "../../Assets/Projects/toggletrack.png";
// import meanBuy from "../../Assets/Projects/meanBuy.png";
// import countryDetails from "../../Assets/Projects/countryDetails.png";
// import fitnessClub from "../../Assets/Projects/fitnessClub.png";

function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
            {/* Toggle-Track Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Toggle}
                isBlog={false}
                title="Toggle-Track Clone"
                tool=" React,Chakra-Ui, JavaScript, HTML, CSS"
                description="This is a clone of a task management website called GreenHouse.io."
                link="https://github.com/SachinMasai/coherent-laborer-2044"
                demoLink="https://famous-cucurucho-980351.netlify.app/"
              />
            </Col>


            {/* greenhouse Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={GreenHouse}
                isBlog={false}
                title="Greenhouse.io"
                tool="  JavaScript, HTML, CSS"
                description="This is a clone of website called GreenHouse.io. Greenhouse) is an American technology company headquartered in New York City that provides a recruiting software as a service. It was founded in 2012 by Daniel Chait and Jon Stross."
                link="https://github.com/SachinMasai/freezing-value-6715"
                demoLink="https://heartfelt-babka-9adac1.netlify.app/"
              />
            </Col>

            {/* movie 2.0 ------------------------------------------------------------- */}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={movie}
                isBlog={false}
                title="Movie Tickit"
                tool="  JavaScript,API,Local-Storage HTML, CSS"
                description="This is A simple movie tickit booking app"
                link="https://github.com/SachinMasai/freezing-value-6715"
                demoLink="https://bejewelled-strudel-1e42ae.netlify.app/"
              />
            </Col>





          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
