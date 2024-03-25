import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import VeilleCard from "./VeilleCard";
import Veillestack from "./Veillestack";
import react from "./react.png";
import feedly from "./feedly.png";
import goal from "./objectif.jpg";
import VeilleGoal from "./VeilleGoal";

function Veille() {
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
              Ma <strong className="purple">veille technologique</strong>
            </h1>
            <VeilleCard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={react} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px"}}
            className="about-img"
          >
            <img src={feedly} alt="about" className="img-fluid" style={{width: "100%"}} />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Comment j'effectue ma <strong className="purple">veille technologique</strong>
            </h1>
            <Veillestack />
          </Col>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Dans quel <strong className="purple">but ?</strong>
            </h1>
            <VeilleGoal />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px"}}
            className="about-img"
          >
            <img src={goal} alt="about" className="img-fluid" style={{width: "100%"}} />
          </Col>


          </Row>
        
      </Container>
    </Container>
  );
}

export default Veille;
