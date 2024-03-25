import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pix from "./pix.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Sur mon portfolio vous retrouverez mes projets, mes compétences ainsi que mes expériences professionnelles.
            <br />
            <br />
            Titulaire de la certification Pix : <img src={pix} alt="about" className="img-fluid" style={{ maxWidth: "400px" }} />
            <br />
            <br />
          En dehors de l'informatique et du développement, j'aime :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Les voyages
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Pourquoi un seul domaine quand on peut tout essayer ?"{" "}
          </p>
          <footer className="blockquote-footer">Jordan Chevrier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
