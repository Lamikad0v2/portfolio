import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Veillestack from "./Veillestack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui suis-<strong className="purple">je ?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes  <strong className="purple">Competences </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Les outils</strong> que j'utilise
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Ma veille</strong> technologique
        </h1>
        <Veillestack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
