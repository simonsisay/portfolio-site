import React from "react";
import { Container, Project } from "./styles";
import Title from "../../Title";
import { projects } from "./data";
import { default as Image } from "../../Image";
import { push } from "gatsby";

const PortfolioPage = () => {
  return (
    <Container>
      <div className="title-container">
        <Title className="title">My Works</Title>
        <p className="sub-title">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="projects">
        {projects.map(project => (
          <Project className="project">
            <span className="img-container">
              <Image
                filename={project.image}
                alt={project.name}
                className="project-img"
              />
            </span>
            )}
            <div className="project-detail">
              <div className="header">
                <h3 className="type">{project.appType}</h3>
                <h2 className="project-name">{project.name}</h2>
              </div>
              <p className="description">{project.description}</p>
              <p className="role">Role: {project.role}</p>
              {project.link && (
                <p className="app-link">
                  Link:{" "}
                  <a
                    className="link"
                    href={project.link !== "Private" && project.link}
                  >
                    {project.link !== "Private" ? project.link : "Private"}
                  </a>
                </p>
              )}
              <div className="stack">
                Technologies:
                {project.stack.map((stack, index) => (
                  <span>
                    {stack}
                    {project.stack.length - 1 !== index && ","}
                  </span>
                ))}
              </div>
            </div>
          </Project>
        ))}
      </div>
      <p className="lets-work">
        <span className="arrow">></span>{" "}
        <p className="contact-link" onClick={() => push("/contact")}>
          Let's work together
        </p>
      </p>
    </Container>
  );
};

export default PortfolioPage;
