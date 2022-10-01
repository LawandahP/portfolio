import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import { DiReact, DiDjango, DiDocker, DiJsBadge, DiPostgresql, DiGit, DiHtml5, DiPython } from "react-icons/di"

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          
          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Sleek Design,</h3>
            <h3 className="mb-4">Seamless Experience</h3>
            <ul className={`${classes.ul}`}>
              <li>I specialize mainly in React and Django web applications.</li>
              <li>Maintaining existing React systems, including fixing bugs</li>
              <li>Design and develop new custom components to meet project requirements</li>
              <li>Installing and configure server environments for React deployments</li>
              <li>Maintain and update project dependencies as well as fix any conflicts</li>
            </ul>

            <div className="mt-5">
                <a href = "mailto: githaigakairuthi56@gmail.com">
                  <button className="primary__btn">Get In Touch</button>
                </a>
                  {/* <Link href="#portfolio">My Portfolio</Link> */}
                

                <button className="secondary__btn">
                  <a href="/files/githaiga_resume.pdf" download>My Resume</a>
                </button>
              </div>
          </Col>
          
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                {/* <ServicesItem title="App Development" icon="ri-apps-line" /> */}

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>

            <div className={`${classes.dev__icon}`}>
              <DiReact  />
              <DiDjango />
              <DiPython />
              <DiDocker />
              <DiJsBadge />
              <DiHtml5 />
              <DiPostgresql />
              <DiGit />
            </div>
            
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Services;
