import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Softstack from "./Softstack";
import Education from './Education';

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
              Moi en quelques <strong className="purple">mots</strong>
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

        <Education />

        <h1 className="project-heading">
          Mes  <strong className="purple">Competences </strong>
        </h1>
          <Softstack />

        <h2 className="project-heading">
        Mes  <strong className="purple">Hard Skills : </strong>
        </h2>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Les outils</strong> que j'utilise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
