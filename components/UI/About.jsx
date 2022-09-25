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
  {skill: "Problem Solving"},
  {skill: "Extensive Research Skills"},
]

const skills2 = [
  {skill: "Creative Idea"},
  {skill: "High Quality"},
]

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              neque asperiores temporibus quo saepe odio, esse labore libero
              obcaecati quidem explicabo blanditiis deleniti ex vitae ratione
              ullam fugiat dicta eum sint officiis porro illum quia. Error quam
              cum excepturi beatae.
            </p>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
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

              </div>
              

            {/* </div> */}

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
