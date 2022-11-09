import React from "react";
import { Container } from "react-bootstrap";
import FrontEnd from "./FrontEnd";
import Toolstack from "./Toolstack";



function Skill() {
  return (
    <div className="Skill-background activeNavlink" id="scrollSkills">
      <Container fluid className="about-section">
        <Container className="icon-fade" style={{ marginTop: "-50px" }}>
          <h1 style={{ fontSize: "2.6em", marginBottom: "50px", marginTop: "0px !important" }}>
            <strong className="purple"><u>My Skills</u></strong>
          </h1>
          <h1 className="project-heading"><em>Tech Stack</em></h1>
          <FrontEnd/>

          <h1 className="project-heading">
            <em>My Working Tools</em>
          </h1>
      
          <Toolstack />

          {/* <Github /> */}
        </Container>
      </Container>
    </div>

  );
}

export default Skill;
