import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Après avoir réalisé un bac pro<span className="purple"> SN </span>
            option <span className="purple"> RISC</span> J'ai décidé de bifurquer vers le développement.
            <br /> Actuellement, je suis en 2ème année de mon BTS SIO option SLAM.
            <br />
            Sur mon portfolio vous retrouverez mes projets, mes compétences ainsi que mes expériences professionnelles.
            <br />
            <br />
          <p>
            Plus tard, je souhaite poursuivre mes études en faisant une licence ou un bachelor en alternance chez Schneider Electric,
            suivi d'un master dans le domaine du développement avec une spécialisation en électronique industrielle embarquée.
          </p>
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
