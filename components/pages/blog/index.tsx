import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { Query } from "../../../src/types/generated/graphql";
import { Container } from "./styles";

type Props = {
  blog: Query["blog"];
};

const Blog = ({ blog }: Props) => {
  const firstImage = blog?.content.find((item: any) => item.type === "image");

  return (
    <Container>
      <Head>
        <title>{blog?.title[0].text}</title>
        <meta
          key="desc"
          name="description"
          content={blog?.description[0].text}
        />
        <meta property="og:image" content={firstImage?.url} />
      </Head>
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
