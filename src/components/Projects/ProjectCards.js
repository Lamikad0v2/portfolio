import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {SiSchneiderelectric} from "react-icons/si";
import Img from './cubeide.png';
import Logo from '../../Assets/Projects/schneider.png';
import Merci from '../../Assets/Projects/merci.jpg';
import 'react-vertical-timeline-component/style.min.css';
import './ProjectCards.css';

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [showContextModal, setShowContextModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowContextModal = () => {
    setShowContextModal(true);
  };

  const handleCloseContextModal = () => {
    setShowContextModal(false);
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link then, it will render the below component  */}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          <Button
            variant="primary"
            onClick={handleShowModal}
            style={{ marginLeft: "10px" }}
          >
            {"Voir plus"}
          </Button>

          {props.contexte && (
          <Button
            variant="primary"
            onClick={handleShowContextModal}
            style={{ marginLeft: "0px", marginTop : "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Contexte Entreprise"}
          </Button>)}
        </Card.Body>
      </Card>
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton >
              <Modal.Title style={{ textAlign: "center" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {props.Body}
              </Modal.Body>
          </Modal>

          <Modal
            show={showContextModal}
            onHide={handleCloseContextModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton >
              <Modal.Title style={{ textAlign: "center" }}><SiSchneiderelectric/> Schneider Electric <SiSchneiderelectric/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={Logo} alt="Schneider" style={{width : "1340px"}} />
            Schneider Electric est une entreprise mondiale spécialisée dans la distribution électrique et les automatismes, avec un chiffre d'affaires de 34 milliards d'euros en 2022. Elle compte plus de 135 000 employés répartis dans plus de 100 pays. Schneider Electric produit certains de ses propres produits dans ses laboratoires en partenariat avec Enedis, mais sous-traite également la production et l'importation de composants et de matières premières pour répondre à la demande des clients.

									L'entreprise utilise divers logiciels et outils pour ses activités. Les collaborateurs utilisent des navigateurs web tels que Google Chrome ou Firefox, des adresses e-mail personnelles sur Outlook, et une plateforme de discussion interne sur Teams. Ils ont également accès à des applications telles que Zscaler pour se connecter aux réseaux Wi-Fi de l'entreprise, GlobalProtect pour gérer les autorisations d'accès, Jabra Direct pour la configuration des casques, Trellix pour la sécurité des données, Sentinel One Agent pour la protection contre les logiciels malveillants, et Service Desk Support pour obtenir une assistance technique à distance.

									En ce qui concerne la gestion de projet, l'objectif du projet actuel est de redesign un produit existant (Flair) sur un nouveau µc ce qui inclus un nouveau processeur. Le processus implique la documentation sur le produit, la compréhension du code assembleur et du code C existant, la mise en place du code sur une maquette de test (stm32 couplé à une carte shield). Les tests sont effectués en vérifiant les défauts et en s'assurant que les fonctionnalités du produit répondent aux exigences et soit identique sur un autre processeur.

									L'équipe de projet est composée d'un ingénieur d'étude conception et d'un chef de projet. Les deux m'aident dans le bon déroulé du projet pour l'implémentation ainsi que la compréhension du produit existant et comment il était régis.

									L'environnement de développement utilisé est STM32CubeIde, avec des cartes de développement de type STM32 Nucleo. Le langage de programmation principal est le C, mais des connaissances en assembleur sont également nécessaires. Les API utilisées comprennent la bibliothèque HAL pour les tâches générales et l'API LL pour des besoins plus spécifiques. Les tests sont effectués en visualisant les résultats sur des LED ou en utilisant le mode débogage pour vérifier le comportement du code et les valeurs des variables.

									Les documentations techniques des produits et les documentations de référence utilisateur sont utilisées comme références pour le projet.

            <img src={Img} alt="Cube Ide" style={{width : "1340px"}} />
            Sur l'environnement de développement intégré STM32CubeIDE, il existe différents modes pour gérer les interactions avec les périphériques sur les microcontrôleurs STM32, tels que les interruptions et le polling (ou lecture continue). Ces modes offrent différentes approches pour la gestion des événements et des données, offrant ainsi une flexibilité dans le développement des applications.

									Les interruptions sont un mécanisme qui permet au microcontrôleur de détecter et de répondre rapidement à des événements spécifiques. Lorsqu'un événement se produit, une interruption est générée, ce qui entraîne une interruption du flux d'exécution normal du programme. Le contrôleur de l'interruption transfère ensuite l'exécution vers une routine d'interruption spécifique, appelée gestionnaire d'interruption, qui traite l'événement en question. Les interruptions sont utiles pour des tâches nécessitant une réponse rapide et précise, comme la gestion des temporisateurs, des communications série ou des entrées/sorties (E/S) asynchrones.

									D'un autre côté, le polling (ou lecture continue) est une méthode où le microcontrôleur vérifie régulièrement l'état d'un périphérique ou d'une ressource pour détecter un changement ou une condition spécifique. Dans ce mode, le microcontrôleur utilise généralement des boucles itératives pour vérifier périodiquement l'état des broches d'entrée/sortie ou des registres de périphériques. Le polling est souvent utilisé dans des tâches qui ne nécessitent pas de réponse immédiate, comme la lecture de capteurs, la communication synchrone ou le contrôle d'affichage.

									Lors du développement d'applications sur STM32CubeIDE, il est important de choisir le mode de gestion des périphériques approprié à chaque situation. Pour cela, il est essentiel de comprendre les caractéristiques des modes d'interruption et de polling, ainsi que les besoins spécifiques de l'application.

									En ce qui concerne les API HAL (Hardware Abstraction Layer) et LL (Low-Level), elles offrent des abstractions de programmation différentes pour interagir avec les périphériques sur les microcontrôleurs STM32.

									L'API HAL est une couche d'abstraction matérielle de plus haut niveau qui fournit des fonctions prédéfinies pour gérer les périphériques. Elle simplifie la programmation en fournissant des interfaces conviviales et en masquant les détails de bas niveau. L'API HAL est souvent recommandée pour les développeurs débutants ou ceux qui ont besoin de développer rapidement des applications fonctionnelles sans se soucier des détails de bas niveau.

									D'autre part, l'API LL est une couche d'abstraction matérielle de plus bas niveau qui offre un accès direct aux registres du microcontrôleur. Elle fournit des fonctions pour configurer et contrôler les périphériques au niveau des registres. L'API LL est généralement utilisée par les développeurs expérimentés qui nécessitent un contrôle précis et une optimisation des performances.

									Le choix entre les API HAL et LL dépend des besoins spécifiques de l'application et du niveau de contrôle souhaité. L'API HAL offre une abstraction plus élevée et une facilité de développement, tandis que l'API LL permet un contrôle plus fin et une optimisation des performances.

									En résumé, les interruptions et le polling sont deux modes de gestion des périphériques sur STM32CubeIDE. Les interruptions sont utilisées pour des tâches nécessitant une réponse rapide, tandis que le polling est utilisé lorsque la réactivité immédiate n'est pas critique. Le choix entre les API HAL et LL dépend des besoins de l'application, l'API HAL offrant une abstraction plus élevée et l'API LL offrant un contrôle plus fin.

								Merci à Schneider Electric de m'offrir cette oportunité d'améliorer mes compétences en C ce qui me permettra d'avoir des bases encore plus solide pour le C,C++,C# pour mon projet de développement d'application futur. Ce stage est pour l'instant l'un des meilleurs que j'ai effectué. J'apprend beaucoup de choses et je suis pas mal en autonomie donc je peux apprendre et regarder ce que j'ai envie. Cela me permet d'utiliser plusieurs API ou différents moyen que j'ai envie d'éxperimenté.

								   Sur certaines tâches mes supérieurs me laisse effectué les tâches demandés sous plusieurs forme pour m'éxperimenté le plus possible, comme les modes interruptions ou pulling. Merci d'avoir lu ce contexte d'entreprise.

                   <img src={Merci} alt="Merci" style={{width : "1340px"}} />
            </Modal.Body>
          </Modal>

        </>
  );
}

export default ProjectCards;
