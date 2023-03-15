import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            <span className="purple">“About  me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                                Hello, I am Sachin Pathe, Full Stack Web Developer. 
                                I'm from Chhindwara, Madhya Pradesh, India.
                                 I'm an enthusiastic fresher, seeking a career with a progressive organization
                                  to capitalize on my skills and abilities in the ﬁeld of information 
                                  technology, and eager to learn new technologies and methodologies.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                               I am Aspiring Full Stack Web Developer from Masai School with specializing in
                                React, MERN, NodeJs, Git/Github, JAVASCRIPT, HTML, and CSS.… 🤷‍♂️,
                                I enjoy taking challenges and giving my best. 
                                My interest lies in problem-solving and software development. 
                                I am a constant learner and I like interacting with people. 
                       
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                I enjoy creating things that live on the internet.
                                 I’m curious, and I enjoy work that challenges me to learn something
                                  new and stretch in a different direction.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
