import { Query } from "../../../src/types/generated/graphql";
import BlogCard from "../../blog-card";
import ContactSection from "../home/contact-section";
import { Container } from "./styles";

type Props = {
  blogs: Query["blog"][];
};

const Blogs = ({ blogs }: Props) => {
  return (
    <Container>
      <h1 className="main-header">All Posts</h1>
      <div className="list">
        {blogs.map((item) => (
          <div key={item?._meta.uid} className="post">
            <BlogCard blog={item} />
            <div className="divider" />
          </div>
        ))}
      </div>
      <div className="contact">
        <ContactSection />
      </div>
    </Container>
  );
};

export default Blogs;
