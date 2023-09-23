import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLaragon,
  SiXampp,
  SiVisualstudio,
  SiFivem,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaragon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFivem />
      </Col>
    </Row>
  );
}

export default Toolstack;
