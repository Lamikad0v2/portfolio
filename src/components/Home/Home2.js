import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PETITE <span className="purple"> INTRODUCTION </span> BRIÈVE
            </h1>
            <p className="home-about-body">
              Je suis Jordan Chevrier, étudiant en BTS SIO option SLAM.
              <br />
              <br />Je développe des applications web et mobiles avec
              <i>
                <b className="purple"> C#, Javascript, HTML et CSS. </b>
              </i>
              <br />
              <br />
              Amoureux de l'informatique depuis toujours, &nbsp;
              <i>
                <b className="purple">du réseau et de la micro-electronique </b> ainsi que tout ce qui touche au{" "}
                <b className="purple">
                  developpement.
                </b>
              </i>
              <br />
              <br />
              Ceci est mon portfolio <b className="purple">Full Responsive</b> en
              <i>
                <b className="purple">
                  {" "}
                  React.js et Next.js (en cours de développement)
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MES RESEAUX</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lamikad0v2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Lamikad0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jordan-chevrier-98068a1bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jordan.chvr_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
