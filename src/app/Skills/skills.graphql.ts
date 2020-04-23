import gql from 'graphql-tag';

interface SkillsDatum {
  id: string;
  slug: string;
  title: string;
}

export interface SkillsData {
  skills: SkillsDatum[];
}

export const SKILLS_QUERY = gql`
  query SkillsQuery {
    skills {
      id
      title
      slug
    }
  }
`;
