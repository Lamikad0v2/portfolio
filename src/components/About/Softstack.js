import React from "react";
import { Col, Row } from "react-bootstrap";
import equipe from "./equipe.png";
import autonomie from "./autonome.png";
import discipline from "./la-discipline.png";
import polyvalence from "./competences.png";
import calme from "./calme.png";

function Softstack() {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <img src={discipline} alt="equipe" style={{ maxWidth: "45%", height: "auto" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <img src={autonomie} alt="equipe" style={{ maxWidth: "45%", height: "auto" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <img src={equipe} alt="equipe" style={{ maxWidth: "45%", height: "auto" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <img src={polyvalence} alt="equipe" style={{ maxWidth: "45%", height: "auto" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <img src={calme} alt="equipe" style={{ maxWidth: "45%", height: "auto" }} />
        </Col>
    </Row>
);
}

export default Softstack;
