import Head from "next/head";
import Footer from "../footer";
import Navbar from "../navbar";
import { Container } from "./styles";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Head>{title && <meta name="title" content={`${title}`} />}</Head>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
