import { GraphQLErrors } from "@apollo/client/errors";
import { Params } from "next/dist/server/router";
import Layout from "../../components/layout";
import Blog from "../../components/pages/blog";
import { getBlogById, getBlogs } from "../../lib/lib";
import { Blog as BlogType, Query } from "../../src/types/generated/graphql";

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { data, errors = null } = await getBlogById(params.id);
  let blog = null;
  if (data) {
    blog = data?.map((item) => item)[0];
  }
  return {
    props: {
      data: blog,
      errors,
    },
  };
};

export const getStaticPaths = async () => {
  const { data, errors } = await getBlogs();
  const paths = data?.map((blog) => ({
    params: { id: blog?._meta.uid },
  }));
  return {
    paths,
    fallback: true,
  };
};

type Props = {
  data: BlogType | null;
  errors: GraphQLErrors;
};
const BlogPage = ({ data }: Props) => {
  if (data) {
    return (
      <Layout>
        <Blog blog={data} />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p className="error">Something went wrong</p>
      </Layout>
    );
  }
};

export default BlogPage;
