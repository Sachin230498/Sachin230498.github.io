import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
          {props.City}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontSize: "15px" }}>
          {props.time}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
