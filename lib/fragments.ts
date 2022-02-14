import gql from "graphql-tag";

export const BLOG_FIELDS = gql`
  fragment BlogParts on Blog {
    _meta {
      uid
      firstPublicationDate
    }
    title
    description
    content
    published
    tags {
      tag
    }
  }
`;

export const PROJECT_FIELDS = gql`
  fragment ProjectParts on Projects {
    project_title
    project_type
    images {
      screenshot
    }
    description
    role
    technologies {
      stack
    }
    project_link {
      _linkType
    }
    _meta {
      uid
      id
    }
  }
`;
