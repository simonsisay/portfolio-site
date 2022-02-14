import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { Blog } from "../../src/types/generated/graphql";
import { Container } from "./styles";

type Props = {
  blog: Blog | null | undefined;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Container>
      <Link href={`/blog/${blog?._meta.uid}`}>
        <a className="blog-details">
          <h2 className="blog-title">{RichText.render(blog?.title)}</h2>
          <p className="excerpt text italic">
            {RichText.render(blog?.description)}
          </p>
          <p className="date text">
            {blog?._meta.firstPublicationDate
              ? new Date(blog?._meta.firstPublicationDate)
                  .toISOString()
                  .split("T")[0]
              : null}
          </p>
        </a>
      </Link>
    </Container>
  );
};

export default BlogCard;
