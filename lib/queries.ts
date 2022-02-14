import gql from "graphql-tag";
import { BLOG_FIELDS, PROJECT_FIELDS } from "./fragments";

export const BLOGS_QUERY = gql`
  query allBlogs {
    allBlogs {
      edges {
        node {
          ...BlogParts
        }
      }
    }
  }
  ${BLOG_FIELDS}
`;

export const BLOG_QUERY = gql`
  query allBlogs($uid: String!) {
    allBlogs(uid: $uid) {
      edges {
        node {
          ...BlogParts
        }
      }
    }
  }
  ${BLOG_FIELDS}
`;

export const ABOUT_QUERY = gql`
  query allAbout {
    allAbouts {
      edges {
        node {
          aboutMe
          portrait
        }
      }
    }
  }
`;

export const TESTIMONY_QUERY = gql`
  query allTestimonials {
    allTestimonialss {
      edges {
        node {
          testimony
          avatar
          role
          company
          name
          link {
            _linkType
          }
          _meta {
            id
          }
        }
      }
    }
  }
`;

export const PROJECTS_QUERY = gql`
  query allProjects {
    allProjectss {
      edges {
        node {
          ...ProjectParts
        }
      }
    }
  }
  ${PROJECT_FIELDS}
`;

export const PROJECT_QUERY = gql`
  query allProjectss($id: String!) {
    allProjectss(id: $id) {
      edges {
        node {
          ...ProjectParts
        }
      }
    }
  }
  ${PROJECT_FIELDS}
`;

export const CV_QUERY = gql`
  query allCvs {
    allCvs {
      edges {
        node {
          cv {
            _linkType
          }
        }
      }
    }
  }
`;
