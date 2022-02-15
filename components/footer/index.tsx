import { Container } from "./styles";
import { BsTwitter, BsLinkedin, BsGithub, BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <p className="text">&#169; 2022</p>
      <p className="text uppercase">Made with ❤️ in Addis</p>
      <div className="icons">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/simon-sisay-446181187/"
          target="_blank"
        >
          <BsLinkedin className="social-icon" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/simonsisay__"
          target="_blank"
        >
          <BsTwitter className="social-icon" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/simonsisay/"
          target="_blank"
        >
          <BsGithub className="social-icon" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
