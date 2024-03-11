import React from "react";
import { Row } from "react-bootstrap";
import projectReact from "./projectReact.jpg";

function Veillestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>       
        <p>
          Personnellement ma veille technologique se porte principalement sur le React, c'est une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur, je m'engage à suivre de près les dernières tendances et évolutions.

          Pour ma veille technologique sur React, je consulte régulièrement des sources d'informations telles que les blogs officiels de React, les forums de développeurs, les communautés en ligne et les réseaux sociaux spécialisés. Je suis également abonné à des chaînes YouTube qui traitent spécifiquement de React.

          J'essaye d'apprendre le maximum de chose en react pour pouvoir proposer des projets de qualité. Pour le moment le Portfolio est mon unique projet en React mais je compte bien en faire d'autres bien plus complexe. Je reste informé des choses existantes afin de pouvoir les utiliser dans mes futurs projets.

          En somme, ma veille technologique sur React me permet de rester informé des dernières avancées, de découvrir de nouvelles techniques et de maintenir mes compétences à jour dans le développement d'interfaces utilisateur modernes et réactives pour pouvoir proposer un Portfolio de qualité.
        </p>
        <img src={projectReact} alt="Project React" className="img-fluid" style={{ width: '50%', height: '0%' }} />
    </Row>
  );
}

export default Veillestack;
