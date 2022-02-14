import {
  getAboutData,
  getBlogs,
  getProjects,
  getTestimonies,
  getCv,
} from "../lib/lib";

import Layout from "../components/layout";
import About from "../components/pages/home/about-section";
import Testimony from "../components/pages/home/testimony-section";
import HeroSection from "../components/pages/home/hero-section";
import { Container } from "../components/pages/home/styles";
import Tech from "../components/pages/home/tech-section";
import Portfolio from "../components/pages/home/portfolio-section";
import BlogSection from "../components/pages/home/blog-section";
import ContactSection from "../components/pages/home/contact-section";
import Footer from "../components/footer";
import {
  About as AboutType,
  Blog,
  Cv,
  Projects,
  Testimonials,
} from "../src/types/generated/graphql";

export const getStaticProps = async () => {
  const about = await getAboutData();
  const testimonies = await getTestimonies();
  const projects = await getProjects();
  const blogs = await getBlogs();
  return {
    props: {
      about: about.data,
      testimonies: testimonies.data,
      projects: projects.data,
      blogs: blogs.data,
    },
  };
};

type Props = {
  about: AboutType[];
  testimonies: Testimonials[];
  projects: Projects[];
  blogs: Blog[];
};

const Home = ({ about, testimonies, projects, blogs }: Props) => {
  return (
    <Layout>
      <Container>
        <HeroSection />
        <About about={about[0]} />
        <Tech />
        <Portfolio projects={projects} />
        <Testimony testimonies={testimonies} />
        <BlogSection blogs={blogs} />
        <ContactSection />
      </Container>
      <Footer />
    </Layout>
  );
};

export default Home;
