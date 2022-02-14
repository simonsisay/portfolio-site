import Image from "next/image";
import Button from "../../button";
import { Section, About as AboutContainer } from "./styles";
import { About as AboutType } from "../../../src/types/generated/graphql";
import { RichText } from "prismic-reactjs";

type Props = {
  about: AboutType;
};

const About = ({ about }: Props) => {
  return (
    <Section id="about">
      <AboutContainer>
        <div className="picture">
          <div className="image-container">
            <Image
              width={"50%"}
              height={"60vh"}
              layout="responsive"
              src={about.portrait.url}
            />
          </div>
        </div>
        <div className="about-details">
          <h1 className="main-header title">
            About <span className="red">me</span>
          </h1>
          <p className="about-words">{RichText.render(about.aboutMe)}</p>
          {/* <Button>Read My Story</Button> */}
        </div>
      </AboutContainer>
    </Section>
  );
};

export default About;
