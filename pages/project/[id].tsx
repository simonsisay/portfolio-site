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
  return {
    props: {
      data,
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
  data: Projects[];
};

const ProjectPage = ({ data }: Props) => {
  return (
    <Layout>
      <Project project={data} />
    </Layout>
  );
};

export default ProjectPage;
