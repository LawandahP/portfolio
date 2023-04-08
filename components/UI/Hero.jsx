import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";
import Typed from "react-typed";



const Hero = () => {
  return (
    <div className={`${classes.hero}`}>
      <Container>
        {/* <Row> */}
          {/* ========== hero content ============= */}
          {/* <Col lg="6" md="6"> */}
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              {/* <h2 className="mt-3 mb-3"> </h2> */}

              <div className={`${classes.animated__typing}`}>
                  I&apos;m <Typed
                              strings={[
                                "Githaiga Kairuthi",
                                "a Full Stack Developer"
                              ]}
                              typeSpeed={250}
                              backSpeed={50}
                              backDelay={10}
                              loop
                            />
                            
                </div>

              <p></p>
              <p></p>
              <p></p>
              <p>
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit rem sint ipsa cumque. Atque rem vel iusto impedit omnis
                quos! */}
              </p>
              <div className="mt-5">
                
                <a href = "mailto: kairuthigithaiga@gmail.com">
                  <button className="primary__btn">Get In Touch</button>
                </a>
                  {/* <Link href="#portfolio">My Portfolio</Link> */}
                

                <button className="secondary__btn">
                  <a href="/files/githaiga_resume.pdf" download>My Resume</a>
                </button>
              </div>
            </div>
          {/* </Col> */}

          {/* ========== hero img ============= */}
          {/* <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div>
            </div>
          </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default Hero;
