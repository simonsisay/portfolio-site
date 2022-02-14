import { GraphQLErrors } from "@apollo/client/errors";
import { Params } from "next/dist/server/router";
import Layout from "../../components/layout";
import Blog from "../../components/pages/blog";
import { getBlogById, getBlogs } from "../../lib/lib";
import { Query } from "../../src/types/generated/graphql";

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { data, errors = null } = await getBlogById(params.id);
  return {
    props: {
      data,
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
  data: Query["blog"][];
  errors: GraphQLErrors;
};
export default ({ data }: Props) => {
  return (
    <Layout>
      <Blog blog={data[0]} />
    </Layout>
  );
};
