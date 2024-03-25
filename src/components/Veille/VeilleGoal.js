import React from "react";
import Card from "react-bootstrap/Card";

function VeilleGoal() {
return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Je réalise cette veille sur le React afin de rester à jour sur les dernières technologies et les dernières tendances du marché. Cela me permet aussi de pouvoir améliorer mon portfolio.
            <br />
          Je peux aussi en discuter avec mes collègues et partager mes connaissances avec eux. Ainsi que discuter avec des gens qui pratiquent la même technologie que moi. Notamment un amis qui avait lui même réalisé son portfolio en React et m'a donné quelques conseils.
          <br/>
          <br/>
          Pour finir cela etayera mes connaissances en developpement et m'avantagera une fois sur le marché du travail.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
);
}

export default VeilleGoal;
