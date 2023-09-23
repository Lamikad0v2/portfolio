import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import multiburo from "../../Assets/Projects/logo-mulitburo.png";
import schneider from "../../Assets/Projects/schneider.png";
import waiting from "../../Assets/Projects/waiting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes différents  <strong className="purple">stages et projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici mes différents stages de BTS ainsi que mes projets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schneider}
              isBlog={false}
              title="Stage #1"
              description="Stage en développement embarqué chez Schneider Electric sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde avec des cartes de type Nucleo"
              ghLink="https://github.com/Lamikad0v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waiting}
              isBlog={false}
              title="Stage #2"
              description="Mon stage de 2ème année n'a pas encore été réalisé, toute les informations à propos de celuo-ci seront disponible ici sous peu de temps."
              ghLink="https://github.com/Lamikad0v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiburo}
              isBlog={false}
              title="MultiBuro"
              description="Projet de première année, prend en charge la gestion des utilisateurs sur une base de donnée, ainsi que la gestion des salles de réunion et des réservations de celles-ci. Ce site est réalisé en PHP et utilise une base de donnée MySQL."
              ghLink="https://github.com/Lamikad0v2/MultiBuro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waiting}
              isBlog={false}
              title="Cuisine"
              description="Projet de deuxième année, prend en charge la réservation de traiteur, de cours de cuisine ainsi que de la cuisine à domicile. Ce site est réalisé en PHP et utilise une base de donnée PostgreSQL. Ainsi que le framework Laravel."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
