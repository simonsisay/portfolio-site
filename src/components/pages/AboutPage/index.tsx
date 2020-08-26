import React, { useState } from "react";
import { default as Image } from "../../Image";
import { skills, stuffAboutMe } from "./data";
import { Container, PersonalInfo, Skills } from "./styles";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Title from "../../Title";
import { push } from "gatsby";

const AboutPage = () => {
  const breakPoints = useBreakpoint();
  const [isReadingStory, setIsReadingStory] = useState(breakPoints.md || false);

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
                  <span className={`value`}>{item.value}</span>
                </div>
              ))}
              <div className="buttons">
                <button onClick={() => push("/contact")}>Contact me</button>
                {/* <button onClick={() => setIsReadingStory(true)}>
                  Read my story
                </button> */}
              </div>
            </div>
          </PersonalInfo>
        </div>
        {/* <div className="my-story">{isReadingStory && <p>I'm</p>}</div> */}
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
