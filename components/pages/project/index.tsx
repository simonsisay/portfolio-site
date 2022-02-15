import Image from "next/image";
import Carousel from "../../carousel";
import { Container } from "./styles";
import projectImage from "../../../public/images/talk-in-arabic.png";
import { Projects } from "../../../src/types/generated/graphql";
import { RichText } from "prismic-reactjs";

type Props = {
  project: Projects;
};

const Project = ({ project }: Props) => {
  return (
    <Container>
      <h1 className="main-header">{RichText.render(project?.project_title)}</h1>
      <div className="carousel-container">
        <Carousel showProgress={false}>
          {project?.images?.map((image) => (
            <div className="image-container" key={image.screenshot.url}>
              <Image
                alt={project?.project_title}
                className="image"
                width={1000}
                height={500}
                src={image.screenshot?.url}
                layout="responsive"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="details">
        <p className="gray text">{RichText.render(project?.project_type)}</p>
        <p className="text description">
          {RichText.render(project?.description)}
        </p>
        <p className="gray text role">
          Role: <span className="red">{RichText.render(project?.role)}</span>
        </p>
        <div className="stack gray">
          <p className="label gray">Tech:</p>
          {project?.technologies?.map((item) => (
            <p key={item.stack} className="gray tech-stack">
              {RichText.render(item.stack)},
            </p>
          ))}
        </div>
        <p className="gray text role project-link">
          Project Url:{" "}
          <span className="red underline">
            {RichText.render(project?.project_link)}
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Project;
