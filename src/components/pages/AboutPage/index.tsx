import React from "react";
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
  { name: "GIT", color: "cyan" },
];

const stuffAboutMe = [
  {
    label: "Birthday",
    value: "June 24 1998",
  },
  {
    label: "Website",
    isLink: true,
    value: "simonsisay.me",
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
    label: "Age",
    value: getBirthday(),
  },
  {
    label: "Email",
    isLink: true,
    value: "Simonsisay9@gmail.com",
  },
  {
    label: "Freelance",
    value: "Available",
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
            <img src={require("../../../images/portrait.jpg")} />
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
