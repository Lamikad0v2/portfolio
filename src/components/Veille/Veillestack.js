import React from "react";
import Card from "react-bootstrap/Card";

function Veillestack() {
return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Afin de réaliser ma veille technologique j'utilise différents outils.
            <br />
          Notamment Feedly, un agrégateur de flux RSS qui me permet de suivre l'actualité de mes sites préférés. Ainsi que les réseaux sociaux, notamment Twitter, qui me permettent de suivre les actualités en temps réel ou bien youtube.
          <br/>
          <br/>
          Feedly me permet de suivre les actualités de mes sites préférés en un seul endroit en enregistrant ou en s'abonnant à des pages. Je peux également partager les articles qui m'intéressent avec mes collègues ou les enregistrer pour les lire plus tard.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
);
}

export default Veillestack;
