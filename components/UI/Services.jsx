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
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Seamless Experience</h3>
            <p>
              I specialize mainly in React and Django web applications
            </p>
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
