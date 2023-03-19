import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import relience from "../../Assets/Projects/relience.png";
import toggle from "../../Assets/Projects/zara.png";
 import basket from "../../Assets/Projects/bigbasket.png";
 import movie from "../../Assets/Projects/whether.png";
 import chat from "../../Assets/Projects/ss1.jpeg";
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
                tool=" JavaScript, HTML, CSS"
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
                tool= "React,Redux,ChakraUi,JavaScript, CSS,NodeJs,MongoDB"
                description="Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries."
                link="https://github.com/meshiv5/plastic-zephyr-2114"
                demoLink="https://reliance-app.netlify.app/"
              />
            </Col>

            {/* movie 2.0 ------------------------------------------------------------- */}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={toggle}
                isBlog={false}
                title="Zara Clone"
                tool="  React,JavaScript,API,NodeJS,Express,MongoDB,HTML, CSS"
                description="About This project is a one to one clone of the online e-commerce website of Zara which was done as a part of Masai School Construct Week in Unit6. The project includes the Landing page, Login and Signup page, Product pages for Men, Women, and Kids section. The project is truly interactive and functional with features such as Login validation, Sorting"
                link="https://github.com/SachinMasai/-fortunate-actor-5818"
                demoLink="https://resonant-lily-7ac8fd.netlify.app/"
              />
            </Col>

                {/* movie 2.0 ------------------------------------------------------------- */}
                <Col md={6} className="project-card">
              <ProjectCard
                imgPath={chat}
                isBlog={false}
                title="CHAT-APP"
                tool="React,JavaScript,HTML, CSS, Socket,WebSocket,WebVital,NodeJS,Node-Server,"
                description="This is A simple Chatting App with the help of simple react and NodeJS. It fully responsive website "
                link="https://github.com/SachinMasai/Chat-App"
                demoLink="https://chat-app-rose-psi.vercel.app/"
              />
            </Col>

                  {/* movie 2.0 ------------------------------------------------------------- */}
                  <Col md={6} className="project-card">
              <ProjectCard
                imgPath={movie}
                isBlog={false}
                title="Weather-App"
                tool="  JavaScript,API,Local-Storage HTML, CSS"
                description="ts normal weather where you check tempareture ,humidity, sunset timing, speed of wind and also check pressure of any area in India or outside or India. Here search functionality is available."
                link="https://github.com/SachinMasai/Weather-app"
                demoLink="https://weather-app-bay-two.vercel.app/"
              />
            </Col>





          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
