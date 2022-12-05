import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import relience from "../../Assets/Projects/relience.png";
import toggle from "../../Assets/Projects/toggletrack.png";
 import basket from "../../Assets/Projects/bigbasket.png";
 import movie from "../../Assets/Projects/toggletrack.png";
 import resta from "../../Assets/Projects/resta.png";
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
                imgPath={basket}
                isBlog={false}
                title="Big-basket Clone"
                tool=" React,Chakra-Ui, JavaScript, HTML, CSS"
                description="Big-Basket is a E-Commerce website where you can buy grocery product"
                link="https://github.com/SachinMasai/bigbasket"
                demoLink="https://magenta-pavlova-41c54f.netlify.app/"
              />
            </Col>


            {/* greenhouse Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={relience}
                isBlog={false}
                title="Reliance Digital Clone"
                tool= "React,Redux,ChakraUi,JavaScript, CSS"
                description="Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries."
                link="https://github.com/SachinMasai/E-Commerce.com"
                demoLink="https://e-commerce-com.vercel.app/"
              />
            </Col>

            {/* movie 2.0 ------------------------------------------------------------- */}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={toggle}
                isBlog={false}
                title="Toggle Track Clone"
                tool="  React,JavaScript,API,Local-Storage HTML, CSS"
                description="Toggl Track (formerly Toggl) is a time tracking software operated by Toggl OÜ, that offers online time tracking and reporting services through their website along with mobile and desktop applications."
                link="https://github.com/SachinMasai/coherent-laborer-2044"
                demoLink="https://famous-cucurucho-980351.netlify.app/"
              />
            </Col>

                {/* movie 2.0 ------------------------------------------------------------- */}
                <Col md={6} className="project-card">
              <ProjectCard
                imgPath={resta}
                isBlog={false}
                title="Restaurant Menu"
                tool="React,JavaScript,HTML, CSS"
                description="This is A simple Restaurant menu with the help of simple react. It fully responsive website "
                link="https://github.com/SachinMasai/Restaurent-App-Basic"
                demoLink="https://cerulean-choux-c86f18.netlify.app/"
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
