import React from 'react'
import { DiAngularSimple, DiDjango, DiDocker, DiGit, DiHtml5, DiIntellij, DiJavascript, DiJavascript1, DiMongodb, DiMysql, DiPostgresql, DiPython, DiReact, DiSass, DiVisualstudio, DiWebplatform } from 'react-icons/di';
import { Container } from 'reactstrap';
import classes from "../../styles/skills.module.css";
import SectionSubtitle from './SectionSubtitle';


const skills = [
  {
    skill_type: "Languages",
    skill_set: [{
      name: "Python",
      icon: <DiPython />
    },
    {
      name: "Javascript",
      icon: <DiJavascript1 />
    },
    {
      name: "HTML5/CSS3",
      icon: <DiHtml5 />
    },
    {
      name: "SASS",
      icon: <DiSass />
    },
    
  ]
  },

  {
    skill_type: "Frameworks",
    skill_set: [{
      name: "React Js",
      icon: <DiReact />
    },
    {
      name: "Angular",
      icon: <DiAngularSimple />
    },
    {
      name: "Django",
      icon: <DiDjango />
    }, 
    {
      name: "Flask",
      icon: <DiWebplatform/>
    },

  ]
  },

  {
    skill_type: "Databases",
    skill_set: [{
      name: "Postgres",
      icon: <DiPostgresql />
    },
    {
      name: "MySql",
      icon: <DiMysql />
    },
    {
      name: "MongoDB",
      icon: <DiMongodb />
    },
  ]
  },

  {
    skill_type: "Tools & IDE's",
    skill_set: [{
      name: "Microsoft Visual Studio Code",
      icon: <DiVisualstudio />
    },
    {
      name: "Pycharm",
      icon: <DiPython />
    },
    {
      name: "Intellij",
      icon: <DiIntellij />
    }, 
    {
      name: "Docker",
      icon: <DiDocker />
    }, 
    {
      name: "Git & Github",
      icon: <DiGit />
    }, 
  ]
  },

]
const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <SectionSubtitle subtitle="Skills" />

        <div className={`${classes.skillz}`}>
          {skills?.map((skill) => (
            <div key={skill.skill_type}>
              <div className={`${classes.skill__list}`}>
                <ul>
                  <li className={`${classes.skill__type}`}>{skill.skill_type}</li>
                  {skill.skill_set.map((skill) => (
                    <li key={skill.name}><div className={`${classes.dev__icon}`}>{skill.icon}</div> {skill.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </Container>
    </section>
  )
}

export default Skills