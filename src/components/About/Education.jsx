import React, { Component } from 'react';
import classes from './Education.module.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
                <h1 className="project-heading">
          Mon  <strong className="purple">Parcours </strong>
        </h1>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      <strong style={{color: '#1F497D'}}>BAC Pro SN (RISC) Lycée St Marc <span>2019-2022</span></strong>
                      </h2>
                      <p>
                        J'ai effectué un bac professionnel système numérique au <b>lycée St Marc</b> avec option RISC (Réseaux Informatiques et Systèmes Communicants) et obtenu mon diplôme avec mention bien.
                        Cela m'a permis d'acquérir des compétences en développement, en réseau et en électronique. Ainsi que de prendre en expérience en entreprise lors de mes stages.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      <strong style={{color: '#1F497D'}}>BTS SIO (SLAM) Lycée Ella Fitzgerald <span>2022-2024</span></strong>
                      </h2>
                      <p>
                        Je réalise actuellement un BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) au <b>lycée Ella Fitzgerald</b> à Saint Romain en Gal.
                        Ce BTS me permet d'acquérir des compétences en développement et en gestion de projet. J'ai également eu la possibilité de réaliser des stages en entreprise pour mettre en pratique mes compétences.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                      <strong style={{color: '#1F497D'}}>Licence - Master / Ecole d'ingénieur <span>2024-2027</span></strong>
                      </h2>
                      <p>
                        Je souhaite effectué une licence ou un bachelor en alternance chez <b>Schneider Electric</b> suivi d'un master dans le domaine du développement avec une spécialisation en électronique industrielle embarquée si possible.
                      </p>
                    </div>
                  </article>
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2><strong style={{color: '#1F497D'}}>Mon futur métier</strong></h2>
                      <p>Pour le moment je n'ai pas d'idée précise de mon futur métier seulement je continuerais dans le developpement. Plusieurs domaines sont possibles : Developpement embarqué / Developpement applications et gestions de base de données (Developpeur Fullstack)</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
