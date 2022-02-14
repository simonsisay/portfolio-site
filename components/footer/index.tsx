import { Container } from "./styles";
import { BsTwitter, BsLinkedin, BsGithub, BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <p className="text">&#169; 2022</p>
      <p className="text uppercase">Made with ❤️ in Addis</p>
      <div className="icons">
        <BsTwitter className="social-icon" />
        <BsLinkedin className="social-icon" />
        <BsGithub className="social-icon" />
      </div>
    </Container>
  );
};

export default Footer;
