import Link from "next/link";
import { Contact as Container } from "./styles";

const ContactSection = () => {
  return (
    <Container>
      <h1 className="main-header header">Got a project?</h1>
      <Link href="/say-hello" passHref>
        <h1 className="main-header header red underline">Say Hello.</h1>
      </Link>
    </Container>
  );
};

export default ContactSection;
