import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import multiburo from "../../Assets/Projects/logo-mulitburo.png";
import schneider from "../../Assets/Projects/schneider.png";
import waiting from "../../Assets/Projects/waiting.png";
import gourmetise from "../../Assets/Projects/logo.png";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Img from './c031c6.jpeg';
import FLAIR from './FLAIR.jpeg';
import LCD from './affichage.jpg';
import courant from './courant.png';
import environnemet from './stm32cubeide.jpg';
import Captor from './temp-sensor.png';
import Transmission from './transmission.jpg';
import Oscillo from './oscillo.png';
import {DiZend} from "react-icons/di";
import {SiSignal,SiStmicroelectronics,SiEditorconfig,SiYoutube,SiBigbluebutton,SiStyledcomponents,SiDiscover,SiSchneiderelectric} from "react-icons/si";
import {DiTerminal} from "react-icons/di";
import ReactPlayer from "react-player";

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
              contexte = {true}
              title="Stage #1"
              description="Stage en développement embarqué chez Schneider Electric sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde avec des cartes de type Nucleo"
              ghLink="https://github.com/Lamikad0v2"
              Body = {
                <VerticalTimeline lineColor='gray'>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'gray', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSchneiderelectric />}
                  >
                    <h3 className="vertical-timeline-element-title">Stage #1</h3>
                    <h4 className="vertical-timeline-element-subtitle">Schneider Electric</h4>
                    <p>
                      Stage de developpement sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde en C avec des cartes de type Nucleo
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09/05/2023 - 16/05/2023"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiDiscover />}
                  >
                    <h3 className="vertical-timeline-element-title">Découverte</h3>
                    <h4 className="vertical-timeline-element-subtitle">Outils, matériel</h4>
                    <p>
                      Découverte de l'entreprise, des outils et du matériel utilisé. Mise en place de la première carte de développement avec différents test.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Première carte</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Img} alt="mon image" />
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="16/05/2023 - 23/05/2023"
                    icon={<SiStyledcomponents />}
                  >
                    <h3 className="vertical-timeline-element-title">Premiers Projets</h3>
                    <h4 className="vertical-timeline-element-subtitle">Parametrage de la led</h4>
                    <p>
                      Mes premiers projets étaient relativement simple, il s'agissait de parametrer la led de la carte en la faisant clignoter. On m'a dit qu'il y avait plusieurs façon de le faire et donc de les experimentés.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Clignotement de la led</h3>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/9twumN_EmKA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="23/05/2023 - 30/05/2023"
                    icon={<SiBigbluebutton />}
                  >
                    <h3 className="vertical-timeline-element-title">Insertion des boutons</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boutons Reset et Push</h4>
                    <p>
                      Mise en place des boutons push et reset sur la carte, et parametrage de ceux-ci pour intéragir avec la led.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Bouton push et reset</h3>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/Hkco_-mNeFA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="30/05/2023 - 13/06/2023"
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Mise en place de capteurs</h3>
                    <h4 className="vertical-timeline-element-subtitle">Capteur de temperature</h4>
                    <p>
                      Mise en place d'un capteur de temperature sur la carte, et parametrage de celui-ci pour intéragir avec la led.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Parametrage</h3>
                    <p>
                    <img src={Captor} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="13/06/2023 - 30/06/2023"
                    icon={<DiTerminal />}
                  >
                    <h3 className="vertical-timeline-element-title">Communication entre les deux cartes.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Création et transmition de signal</h4>
                    <p>
                      Branchement des deux cartes nucleo entre elles. Puis génération de signal sinus complet ou demi-alternance positive puis transmition de celui-ci à la deuxième carte.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Mes branchements</h3>
                    <p>
                    <img src={Transmission} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSignal />}
                  >
                    <h3 className="vertical-timeline-element-title">Exemple de signal généré</h3>
                    <p>
                    <img src={Oscillo} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<DiZend />}
                  >
                    <h3 className="vertical-timeline-element-title">Remerciements</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fin de stage</h4>
                    <p>
                      Merci à toute l'équipe de Schneider Electric pour ce stage, et pour m'avoir permis de découvrir le monde du developpement embarqué. J'ai été très bien accueilli et j'ai pu apprendre beaucoup de choses.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schneider}
              isBlog={false}
              contexte = {true}
              title="Stage #2"
              description="Stage en développement embarqué chez Schneider Electric sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde avec des cartes de type Nucleo"
              ghLink="https://github.com/Lamikad0v2"
              Body = {
                <VerticalTimeline lineColor='gray'>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'gray', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSchneiderelectric />}
                  >
                    <h3 className="vertical-timeline-element-title">Stage #2</h3>
                    <h4 className="vertical-timeline-element-subtitle">Schneider Electric</h4>
                    <p>
                      Stage de developpement sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde en C avec des cartes de type Nucleo. L'objectif est le portage du code sur un nouveau microprocesseur.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09/05/2023 - 16/05/2023"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiDiscover />}
                  >
                    <h3 className="vertical-timeline-element-title">Refamiliarisation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Outils, matériel</h4>
                    <p>
                      Refamiliarisation avec l'entreprise, les outils et le matériel utilisé. Prise de connaissance de l'ancien produit et de l'objectif du stage.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Le produit</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={FLAIR} alt="FLAIR" />
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="16/05/2023 - 23/05/2023"
                    icon={<SiStyledcomponents />}
                  >
                    <h3 className="vertical-timeline-element-title">Premiers Projets</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mise en place des leds / boutons</h4>
                    <p>
                      Mise en place des leds et des boutons sur la carte, et parametrage de ceux-ci pour intéragir avec le produit. Tâches relativement simple puisque déjà effectuées lors du premier stage.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Parametrage LEDS</h3>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/9twumN_EmKA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="23/05/2023 - 30/05/2023"
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Insertion des boutons</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boutons Reset et Push</h4>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/Hkco_-mNeFA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="30/05/2023 - 13/06/2023"
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Mise en place de l'afficheur</h3>
                    <h4 className="vertical-timeline-element-subtitle">Affichage sur écran LCD</h4>
                    <p>
                      <img src={LCD} alt="LCD" style={{ width: '70%', height: 'auto' }} />
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Affichage des courants</h3>
                    <p>
                    <img src={courant} alt="courant" style={{ width: '70%', height: 'auto' }} />
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="13/06/2023 - 30/06/2023"
                    icon={<DiTerminal />}
                  >
                    <h3 className="vertical-timeline-element-title">Parametrage des menus</h3>
                    <p>
                    <ReactPlayer url = "https://youtube.com/shorts/T0HplzztL0w" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Boutons max et reset</h3>
                    <p>
                    <ReactPlayer url = "https://youtube.com/shorts/y81ybZqb70c" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSignal />}
                  >
                    <h3 className="vertical-timeline-element-title">Environnement de developpement</h3>
                    <p>
                    <img src={environnemet} alt="cubeide" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<DiZend />}
                  >
                    <h3 className="vertical-timeline-element-title">Remerciements</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fin de stage</h4>
                    <p>
                      Merci à toute l'équipe de Schneider Electric pour ce stage, et pour m'avoir permis de remontrer mes compétences dans un domaine très spécifiques qu'est la micro-électronique. Ainsi que de me proposer une alternance pour continuer à travailler ensemble.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              }
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
              ghLink="https://github.com/Lamikad0v2"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gourmetise}
              isBlog={false}
              title="Gourmetise"
              description="Projet de deuxième année en duo avec Nolan Berger. Application web et mobile avec deux base de données SQL et SQlite, mise en place et créations d'API. Réservation et concours de la meilleur boulangerie "
              ghLink="https://github.com/Lamikad0v2/Gourmetise"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
