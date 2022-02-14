import Image from "next/image";
import { Container } from "./styles";
import portrait from "../../public/images/portrait.jpg";
import Link from "next/link";
import { Projects } from "../../src/types/generated/graphql";
import { RichText } from "prismic-reactjs";
import { useTheme } from "../../context/themeProvider";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {
  const projectImage = project.images?.map((item) => item.screenshot)[0];
  const { theme } = useTheme();
  return (
    <Link href={`/project/${project._meta.id}`}>
      <Container>
        <Image
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={projectImage.url}
        />
        <h1
          style={{ color: theme === "light" && "#fff" }}
          className="main-header title project-title"
        >
          {RichText.render(project.project_title)}
        </h1>
      </Container>
    </Link>
  );
};

export default ProjectCard;
