import { GraphQLErrors } from "@apollo/client/errors";
import Layout from "../../components/layout";
import Blogs from "../../components/pages/blogs";
import { getBlogs } from "../../lib/lib";
import { Query } from "../../src/types/generated/graphql";

export const getStaticProps = async () => {
  const { data, errors = null } = await getBlogs();
  return {
    props: {
      data,
      errors,
    },
  };
};

type Props = {
  data: Query["blog"][];
  errors: GraphQLErrors;
};

export default ({ data, errors }: Props) => {
  if (data) {
    return (
      <Layout>
        <Blogs blogs={data} />
      </Layout>
    );
  }
  if (errors)
    return (
      <Layout>
        <div>Error fetching blogs. Please refresh</div>
      </Layout>
    );
};
