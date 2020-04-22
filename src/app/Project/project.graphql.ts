import gql from 'graphql-tag';

export const PROJECT_QUERY = gql`
  query ProjectQuery($slug: String!) {
    project(slug: $slug) {
      id
      title
      skills {
        id
        title
      }
    }
  }
`;
