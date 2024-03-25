import React from "react";
import Card from "react-bootstrap/Card";

function VeilleCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Je réalise ma veille technologique principalement sur le ReactJs. Cette technologie m'a notamment permis de réaliser ce portfolio.
            <br />
            <br />
          C'est selon moi une des meilleurs technologies que j'ai pu utiliser. Elle est performante, rapide et très agréable à utiliser.
          <br/>Mais avant toute chose, qu'est ce que le ReactJs ?
          <br/>
          <br/>
          React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) de l'interface graphique à chaque changement d'état.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default VeilleCard;
