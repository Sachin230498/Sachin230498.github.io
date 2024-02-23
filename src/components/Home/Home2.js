import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Sachin.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail} from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import MyModal from "./Mod";
import Callme from "./Callme";



function Home2() { 
  const [modalShow, setModalShow] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! My name is Sachin Pathe, and I am a Full Stack Web
              Developer with a specialization in React.js, MongoDB, Node.js,
              HTML, and CSS. I am passionate about building modern and engaging
              web applications that deliver exceptional user experiences.
              <br />
              <br />
              I completed my development course at Tech Forest in Indore, where
              I gained comprehensive training and hands-on experience in full
              stack web development. Equipped with the latest industry knowledge
              and best practices, I am skilled in leveraging the power of
              React.js for building dynamic user interfaces, MongoDB for
              efficient data management, and Node.js for seamless server-side
              development.
              <br />
              <br />
              In my portfolio, you will find a collection of projects that
              demonstrate my skills and expertise across the full stack. From
              responsive web designs to interactive user interfaces, each
              project showcases my ability to create intuitive and seamless user
              experiences.
              <br />
              <br />
              <b className="purple">As a Full-Stack Web Developer</b> I
              constantly expand my knowledge to stay current in this
              ever-evolving field.
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  With enthusiasm and a drive for impactful solutions, I invite
                  you to explore my portfolio. 🤷‍♂️{" "}
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} id="myimg" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <Callme
                  style={{ border: "4px solid red"}}
                  show={callme}
                  onHide={() => setCallme(false)}
                />
                <span
                  onClick={() => setCallme(true)}
                  className="icon-colour home-social-icons"
                >
                  <FaPhone />
                </span>
                <span className="link-text-css" onClick={() => setCallme(true)}>
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/Sachin230498"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <MyModal show={modalShow} onHide={() => setModalShow(false)} />
                <span
                  onClick={() => setModalShow(true)}
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </span>
                <span
                  className="link-text-css"
                  onClick={() => setModalShow(true)}
                >
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sachin-pathe-590051278/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/humorist129"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
