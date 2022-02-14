import { RichText } from "prismic-reactjs";
import { Query } from "../../../src/types/generated/graphql";
import { Container } from "./styles";

type Props = {
  blog: Query["blog"];
};

const Blog = ({ blog }: Props) => {
  return (
    <Container>
      <h1 className="main-header">{RichText.render(blog?.title)}</h1>
      <p className="excerpt">{RichText.render(blog?.description)}</p>
      <div className="content text">{RichText.render(blog?.content)}</div>

      <div className="tags">
        {blog?.tags?.map((item) => {
          return (
            <p key={item.tag} className="tag text red">
              {item.tag}
            </p>
          );
        })}
      </div>
    </Container>
  );
};

export default Blog;
