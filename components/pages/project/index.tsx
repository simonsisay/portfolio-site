import Image from "next/image";
import Carousel from "../../carousel";
import { Container } from "./styles";
import projectImage from "../../../public/images/talk-in-arabic.png";
import { Projects } from "../../../src/types/generated/graphql";
import { RichText } from "prismic-reactjs";

type Props = {
  project: Projects[];
};

const Project = ({ project }: Props) => {
  const data = project[0];
  console.log(data);
  return (
    <Container>
      <h1 className="main-header">{RichText.render(data.project_title)}</h1>
      <div className="carousel-container">
        <Carousel showProgress={false}>
          {data.images?.map((image) => (
            <div className="image-container">
              <Image
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
        <p className="gray text">{RichText.render(data.project_type)}</p>
        <p className="text description">{RichText.render(data.description)}</p>
        <p className="gray text ">Role: {RichText.render(data.role)}</p>
        <div className="stack gray">
          <p className="label gray">Tech:</p>
          {data.technologies?.map((item) => (
            <p className="gray tech-stack">{RichText.render(item.stack)},</p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;
