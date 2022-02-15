import { GraphQLErrors } from "@apollo/client/errors";
import { Params } from "next/dist/server/router";
import Layout from "../../components/layout";
import Project from "../../components/pages/project";
import {
  getBlogById,
  getBlogs,
  getProjectById,
  getProjects,
} from "../../lib/lib";
import { Projects } from "../../src/types/generated/graphql";

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { data, errors } = await getProjectById(params.id);
  let project = null;
  if (data) {
    project = data?.map((item) => item)[0];
  }
  return {
    props: {
      data: project,
      errors,
    },
  };
};

export const getStaticPaths = async () => {
  const { data, errors } = await getProjects();
  const paths = data?.map((project) => ({
    params: { id: project._meta?.id },
  }));
  return {
    paths,
    fallback: true,
  };
};

type Props = {
  data: Projects;
  errors: GraphQLErrors;
};

const ProjectPage = ({ data, errors }: Props) => {
  if (data) {
    return (
      <Layout title={"Portfolio"}>
        <Project project={data} />
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

export default ProjectPage;
