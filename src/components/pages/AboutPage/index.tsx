import React from "react";
import { default as Image } from "../../Image";
import { Container, PersonalInfo, Skills } from "./styles";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Title from "../../Title";
import { push } from "gatsby";

const getBirthday = () => {
  const birthDay = new Date("1998/06/24");
  const ageDif = Date.now() - birthDay.getTime();
  const ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const skills = [
  { name: "HTML", color: "cyan" },
  { name: "CSS", color: "rgb(251, 221, 98)" },
  { name: "JAVASCRIPT", color: "rgb(255, 83, 128)" },
  { name: "REDUX", color: "#ff7200" },
  { name: "REACT", color: "rgba(255, 83, 83, 0.66)" },
  { name: "REACT NATIVE", color: "#26d3b0" },
  { name: "GRAPHQL", color: "#bababa" },
  { name: "NODEJS", color: "rgb(195, 84, 229)" },
  { name: "TYPESCRIPT", color: "#28e0fc" },
  { name: "GATSBY", color: "#e2d09e" },
  { name: "EXPRESS", color: "rgb(11, 206, 175)" },
  { name: "GIT", color: "#37bf7f" },
];

const stuffAboutMe = [
  {
    label: "Name",
    value: "Simon Sisay",
  },
  {
    label: "Birthday",
    value: "June 24 1998",
  },
  {
    label: "Age",
    value: getBirthday(),
  },
  {
    label: "Degree",
    value: "Software Engineering BSc (2021)",
  },
  {
    label: "Phone",
    value: "+251911056281",
  },
  {
    label: "City",
    value: "Addis Ababa, Ethiopia",
  },

  {
    label: "Email",
    value: "Simonsisay9@gmail.com",
  },
  {
    label: "Professional Experience",
    value: "2 years",
  },
];

const AboutPage = () => {
  const breakPoints = useBreakpoint();

  return (
    <Container>
      <Title className="title">About Me</Title>
      <div className="content">
        <div className="top-content">
          <div className="portrait">
            <Image
              className="portrait-image"
              filename={"portrait.jpg"}
              alt="portrait"
            />
          </div>
          <PersonalInfo>
            <h1 className="profession">
              <span className="highlight">Frontend</span> web & mobile
              developer.
            </h1>
            <div className="personal-info">
              {stuffAboutMe.map(item => (
                <div className="info">
                  <span className="label">{item.label}: </span>
                  <span className={`value ${item.isLink && "link"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="buttons">
                <button onClick={() => push("/contact")}>Contact me</button>
                <button>Read my story</button>
              </div>
            </div>
          </PersonalInfo>
        </div>
        <Skills className="content-above">
          <h2 className="title">My Skills</h2>
          <div className="content">
            <div className="skills-list">
              {skills.map(skill => (
                <p className="skill-name" style={{ color: skill.color }}>
                  {!breakPoints.md && "-"} {skill.name}
                </p>
              ))}
            </div>
          </div>
        </Skills>
      </div>
    </Container>
  );
};

export default AboutPage;
