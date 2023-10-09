import { Projects } from "../../../src/types/generated/graphql";
import ProjectCard from "../../project-card";
import { Portfolio as Container } from "./styles";

type Props = {
  projects: Projects[];
};

const Portfolio = ({ projects }: Props) => {
  return (
    <Container id="portfolio">
      <h2 className="title">Projects</h2>
      <div className="project-list">
        <h1 className="main-header projects-header">My works</h1>
        {projects.reverse().map((project, index) => {
          return (
            <div className="card" key={index}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Portfolio;
