import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="Home-Mail-Call"
          style={{ fontSize: "5em" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: ".7em", color: "#b562d6 !important" }}
          >
            <span style={{ opacity: "0" }}>---------</span>
            {" Mail me at "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Home-Mail-Call">
          <p style={{ fontSize: "2.5em",fontWeight:"bold", color: "#b562d6 !important" }}>
            <span style={{ opacity: "0" }}>-----</span>
            {"sachinpathe230498@gmail.com"}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;
