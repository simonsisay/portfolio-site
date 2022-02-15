import { client } from "../pages/api/apollo-client";
import { About, Query } from "../src/types/generated/graphql";
import {
  BLOGS_QUERY,
  BLOG_QUERY,
  ABOUT_QUERY,
  TESTIMONY_QUERY,
  PROJECTS_QUERY,
  PROJECT_QUERY,
} from "./queries";

export const getBlogs = async () => {
  const { data, errors = null } = await client.query<{
    allBlogs: Query["allBlogs"];
  }>({
    query: BLOGS_QUERY,
  });
  if (data) return { data: formatBlogData(data.allBlogs), errors: null };
  else return { data: null, errors };
};

export const getBlogById = async (uid: string) => {
  const { data, errors = null } = await client.query<{
    allBlogs: Query["allBlogs"];
  }>({
    query: BLOG_QUERY,
    variables: { uid: uid },
  });
  if (data) return { data: formatBlogData(data.allBlogs), errors: null };
  else return { data: null, errors };
};

export const getAboutData = async () => {
  const { data, errors = null } = await client.query<{
    allAbouts: Query["allAbouts"];
  }>({
    query: ABOUT_QUERY,
  });
  if (data) {
    const aboutData = data.allAbouts.edges?.map((item) => {
      return {
        portrait: item?.node.portrait,
        aboutMe: item?.node.aboutMe,
      };
    });

    return { data: aboutData, errors: null };
  } else return { data: null, errors };
};

export const getTestimonies = async () => {
  const { data, errors = null } = await client.query<{
    allTestimonialss: Query["allTestimonialss"];
  }>({
    query: TESTIMONY_QUERY,
  });

  if (data) {
    const testimonies = data.allTestimonialss.edges?.map((item) => {
      return {
        testimony: item?.node.testimony,
        company: item?.node.company,
        role: item?.node.role,
        avatar: item?.node.avatar,
        name: item?.node.name,
      };
    });
    return { data: testimonies, errors: null };
  } else return { data: null, errors };
};

export const getProjects = async () => {
  const { data, errors = null } = await client.query<{
    allProjectss: Query["allProjectss"];
  }>({
    query: PROJECTS_QUERY,
  });

  if (data) {
    const projects = data.allProjectss.edges?.map((project) => ({
      images: project?.node.images,
      project_title: project?.node.project_title,
      _meta: project?.node._meta,
    }));
    return { data: projects, errors: null };
  } else return { data: null, errors };
};

export const getProjectById = async (id: string) => {
  const { data, errors = null } = await client.query<{
    allProjectss: Query["allProjectss"];
  }>({
    query: PROJECT_QUERY,
    variables: { id: id },
  });
  if (data) {
    const project = data.allProjectss.edges?.map((project) => ({
      ...project?.node,
    }));
    return { data: project, errors: null };
  } else {
    return { data: null, errors };
  }
};

export const formatBlogData = (blogs: Query["allBlogs"]) => {
  const allBlogs = blogs.edges?.map((item) => {
    return item?.node;
  });
  return allBlogs;
};
