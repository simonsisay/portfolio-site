import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { Testimonials } from "../../src/types/generated/graphql";
import { Container } from "./styles";

type Props = {
  data: Testimonials;
};

const Testimony = ({ data }: Props) => {
  return (
    <Container>
      <p className="italic words">{RichText.render(data.testimony)}</p>
      <div className="footer">
        <div className="image-container">
          <Image
            className="avatar"
            layout={"fill"}
            src={data.avatar.url}
            alt={data.name}
          />
        </div>

        <div className="person-info">
          <p className="text name">{RichText.render(data.name)}</p>
          <div className=" role">
            <p className="text">{RichText.render(data.role)}</p>
            <p className="company red">@{RichText.render(data.company)}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimony;
