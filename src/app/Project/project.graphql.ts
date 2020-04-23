import gql from 'graphql-tag';
import { Skill } from '../../server/graphql/resolvers/skill';

interface ProjectDatum {
  id: string;
  title: string;
  skills: [Skill];
}

export interface ProjectData {
  project: ProjectDatum;
}

export const PROJECT_QUERY = gql`
  query ProjectQuery($slug: String!) {
    project(slug: $slug) {
      id
      title
      skills {
        id
        title
        slug
      }
    }
  }
`;
