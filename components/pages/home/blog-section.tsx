import Link from "next/link";
import { Blog, Query } from "../../../src/types/generated/graphql";
import BlogCard from "../../blog-card";
import Button from "../../button";
import { Blog as Container } from "./styles";

type Props = {
  blogs: Blog[];
};

const BlogSection = ({ blogs }: Props) => {
  return (
    <Container id="blog">
      <div className="header-container">
        <h1 className="main-header header">Blog</h1>
        <h2 className="title">Recently published</h2>
      </div>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="button-container">
        <Link href="/blog">
          <a style={{ width: "100%" }}>
            <Button>Read all blogs</Button>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default BlogSection;
