import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
// import Image from "next/image";

// import img01 from "../../public/images/img-01.jpg";
// import img02 from "../../public/images/img-02.jpg";
// import img03 from "../../public/images/img-03.jpg";
// import img04 from "../../public/images/hero.jpg";

import classes from "../../styles/about.module.css";


const skills = [
  {skill: "Accountability"},
  {skill: "Extensive Research Skills"},
  {skill: "Creativity"},
  {skill: "Time Management"},
]

const skills2 = [
  {skill: "Problem Solving"},
  {skill: "Passion Driven"},
  {skill: "Respect"},
  {skill: "Teamwork"},
]

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help with your next project</h3>
            <p>
              Githaiga Kairuthi is a Software Engineer base in Nairobi, Kenya having a 
              specialization in <strong>frontend and backend development.</strong><br></br>
              I have 2+ years experience in full stack Web Development having strong 
              <strong> React & Django Skills</strong>.<br></br>
              I have backend skills in <strong>Python(Django, Django Rest Framework, FastAPI, Flask)</strong>. 
              I also have Frontend skills in <strong>Javascript, CSS3/SASS, Angular </strong>and <strong>Vue</strong>.<br></br>
              Various Technologies i&apos;ve interacted with and used include <strong>Docker, Docker Swarm, Kubernetes, Nginx</strong> and <strong>Traefik</strong>.
            </p>

            <div className="mt-5">
              <button className="primary__btn">
                <a href = "mailto: githaigakairuthi56@gmail.com">Get In Touch</a>
                {/* <Link href="#portfolio">My Portfolio</Link> */}
              </button>

              <button className="secondary__btn">
              <a href="/files/pykon_ticket.pdf" download>Download Resume</a>
               </button>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title} mt-5`}>
            {/* <div className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}> */}
            
              {/* <SectionSubtitle subtitle="Skills" /> */}
                {/* <div className=" d-flex flex-column mb-3">
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img01} alt="about-img" />
                  </div>

                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img02} alt="about-img" />
                  </div>
                </div>

                <div className=" d-flex flex-column mb-3">
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img03} alt="about-img" />
                  </div>

                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={img04} alt="about-img" />
                  </div>
                </div>
            */}
              <div className=" d-flex align-items-center gap-5">
                <div>
                  {skills.map((skill) => (
                    <h6 key={skill.skill} className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      {skill.skill}
                    </h6>
                  ))}
                </div>

                <div>
                  {skills2.map((skill) => (
                    <h6 key={skill.skill} className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      {skill.skill}
                    </h6>
                  ))}
                </div>

                {/* <div>
                  {skills2.map((skill) => (
                    <h6 key={skill.skill} className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      {skill.skill}
                    </h6>
                  ))}
                </div> */}

              </div>
              

            {/* </div> */}

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
