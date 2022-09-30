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
            <SectionSubtitle subtitle="About me" />
            <p>
              My name is Githaiga Kairuthi. I&apos;m a fullstack developer living and working in Nairobi, Kenya. I mainly work with Python, React, and container technologies. I&apos;m passionate about automation, developing software that helps people in their day to day activities, and increasing my skills and productivity.
            </p>

            <p>
              Currently, I&apos;m a fulltime freelancer. I&apos;ve built a Rental Management System, having over 1000+ users (and counting!). My job often revolves around (ab)using PostgreSQL, Redis, and containers to build efficient and scalable systems. I believe that the simple solution to engineering problems is the best until proven otherwise.
            </p>

            <p>
            Previously I spent my time creating data collection and email marketing systems for e-commerce companies. 
            </p>

            <p>
            When I&apos;m not programming, I like to hike trails and bike around Nairobi, swimming due to a constantly hot weather and adopt additional houseplants. I&apos;m constantly learning about new and old technologies.
            </p>

            <p>
            You can find some code samples, designs, and creations of mine over at my <a href="https://www.github.com/LawandahP">github</a>. I&apos;m also interested in hearing of new opportunities, partnering up with another developer, or making new friends!
            </p>
      </Container>
    </section>
  );
};

export default About;
