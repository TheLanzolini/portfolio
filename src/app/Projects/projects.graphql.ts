import gql from 'graphql-tag';

export const PROJECTS_QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      slug
      title
      skills {
        id
        title
      }
    }
  }
`;
