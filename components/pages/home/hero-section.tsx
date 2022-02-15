import Link from "next/link";
import { HeroContainer as Container } from "./styles";
import Button from "../../button";
import { Cv } from "../../../src/types/generated/graphql";
import { Link as PrismicLink } from "prismic-reactjs";

const HeroSection = () => {
  const downloadCv = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-site-e9c41.appspot.com/o/CV%20(1).pdf?alt=media&token=c05dc062-b394-429c-b682-3d4cb27f3f33",
      "_blank"
    );
  };

  return (
    <Container>
      <div className="line" />
      <div className="content">
        <h1 className="main-header">
          <Link href="#about">
            <a className="underline">I&apos;m Simon</a>
          </Link>
        </h1>
        <h1 className="main-header sub-header">
          <span className="sub-header"> I make things</span>
        </h1>
        <h1 className="main-header sub-header">for the web.</h1>
        <Button onClick={downloadCv}>Download CV</Button>
      </div>
    </Container>
  );
};

export default HeroSection;
