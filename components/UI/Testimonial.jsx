import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/connected_world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const testimonials = [
    {
        id: 1,
        name: "Diana Wanjiku",
        occupation: "Nurse",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
        id: 2,
        name: "Sheila Njeri",
        occupation: "Lawyer",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
        id: 3,
        name: "Ndung'u",
        occupation: "CEO Kushinda Properties Ltd",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      id: 4,
      name: "Lilian Mwihaki",
      occupation: "KRA Officer",
      testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Testimonial = () => {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col
                        lg="6"
                        md="6"
                        className={`${classes.testimonial__img}`}
                    >
                        <Image
                            alt="network-img"
                            src={network}
                            width="400"
                            height="400"
                        />
                    </Col>

                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle="Testimonials" />
                        {/* <h4 className="mt-4 mb-5">What my clients say</h4> */}

                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`${classes.testimonial__item}`}
                                >
                                    <div
                                        className={`${classes.testimonial__client}`}
                                    >
                                        <Image
                                            alt="client-img"
                                            src="/images/hero.jpg"
                                            width="50"
                                            height="50"
                                            className=" rounded-2"
                                        />

                                        <div>
                                            <h6>{testimonial.name}</h6>
                                            <h6>{testimonial.occupation}</h6>
                                        </div>
                                    </div>

                                    <p>{testimonial.testimony}</p>
                                </div>
                            ))}

                            
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;
