import { Testimony as Container } from "./styles";
import Carousel from "../../carousel";
import TestimonyCard from "../../testimony-card";
import { Testimonials } from "../../../src/types/generated/graphql";

type Props = {
  testimonies: Testimonials[];
};

const Testimony = ({ testimonies }: Props) => {
  return (
    <Container id="testimony">
      <div className="header">
        <h1 className="main-header title">Testimonials</h1>
        <p className="sub-header text">
          What my previous clients say about my work
        </p>
      </div>
      <div className="carousel-container">
        <Carousel>
          {testimonies.map((testimony) => (
            <TestimonyCard data={testimony} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimony;
