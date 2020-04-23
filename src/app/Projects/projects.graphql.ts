import gql from 'graphql-tag';
import { Skill } from '../../server/graphql/resolvers/skill';

interface ProjectDatum {
  id: string;
  slug: string;
  title: string;
  skills: Skill[];
}

export interface ProjectsData {
  projects: ProjectDatum[];
}

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
