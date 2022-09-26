import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            {/* <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p> */}

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Nairobi - Kenya</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p><a className={`${classes.contact__item}`} href = "mailto: githaigakairuthi56@gmail.com">githaigakairuthi56@gmail.com</a></p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p><a className={`${classes.contact__item}`} href="tel:+254740129131">+254740129131</a></p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              {/* <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link> */}
              <Link href="https://github.com/LawandahP/">
                <i className="ri-github-line"></i>
              </Link>
              {/* <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link> */}
              <Link href="#">
                <i className="ri-linkedin-line"></i>
              </Link>
              {/* <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.map}`}>
              <iframe width="454" height="260" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
